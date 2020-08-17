
import { HttpClient } from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Observable, Subject, Subscription, throwError } from "rxjs";



import {
  Document, DocumentDetail, Question, Option, User,
  QuestionType, QuestionRadiolist,
  QuestionText
} from '../Structure/Structure';

import { map, catchError } from 'rxjs/operators';
import { UserService } from './UserService';
import { ErrorService } from './ErrorService';

@Injectable()
export class VYTestService {

  docdet: DocumentDetail[];
  
  public getValidatedDocumentDetails(): Observable<any> {
    //let url = "https://jsonplaceholder.typicode.com/users/";
    let url = "http://localhost/WEBAPIADONET/api/Document"

    let UserRequest = this.http.get(url).pipe(catchError((error) => {

      this.errService.setError(error);
      return this.errService.ErrorHandle
      // return throwError(error); 
    }));

console.log(UserRequest);
    return UserRequest;
  }


  constructor(private http: HttpClient, private errService: ErrorService) {

    // DI httpClient is injected 
  }


  public getHttpUsers(): Observable<any> {
    let url = "https://jsonplaceholder.typicode.com/users/";


    let UserRequest = this.http.get(url).pipe(catchError((error) => {

      this.errService.setError(error);
      return this.errService.ErrorHandle
      // return throwError(error); 
    }));


    return UserRequest;
  }




  //
  public getValues(): Observable<any> {


    let url = "http://localhost/WEBAPI/api/Values";
    url = "https://localhost:44356/weatherforecast";

    let UserRequest = this.http.get(url).pipe(catchError((error) => {
      return throwError("WEB Api is not working on local machine");
    }));

    return UserRequest;


  }
  // this for field : observable 
  // we created observable manualy

  //https://medium.com/fuzzycloud/angular-and-observable-4bf890b2a282
  //Observable Function 








}



