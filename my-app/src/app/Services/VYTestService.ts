
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

  docdet :DocumentDetail[];
  // getValidatedDocumentDetails : Observable <DocumentDetail[]>=
  // new Observable ((subscriber)=>{
  //   if (this.docdet.length==0) { alert ("err" ) ;throwError("Not proper document"); this.errService.setError("err");}
  //     subscriber.next(this.docdet) ;
  //     }).pipe(catchError((error)=>{
  //     this.errService.setError(error);
  //     alert ("1");
  //      return this.errService.ErrorHandle
  //     // return throwError(error); 
  //     }));;

      getValidatedDocumentDetails : Observable <DocumentDetail[]>=
      new Observable ((subscriber)=>
      {
        if (this.docdet.length==0)
         { 
          throwError("Not proper document"); //does not work here
          this.errService.setError("err");}
          subscriber.next(this.docdet);
          });;
  


  constructor(private http: HttpClient, private errService :ErrorService) {

    // DI httpClient is injected 
  }


  public getHttpUsers(): Observable<any> {
  let url = "https://jsonplaceholder.typicode777.com/users/";

 
    let UserRequest = this.http.get(url).pipe(catchError((error) =>
     { 
       
       this.errService.setError(error);
       return this.errService.ErrorHandle
      // return throwError(error); 
        }));

   
  return UserRequest;
 }




//
public getValues(): Observable<any> 
{


  let url = "http://localhost/WEBAPI/api/Values";
  url = "https://localhost:44356/weatherforecast";

    let UserRequest = this.http.get(url).pipe(catchError((error) =>
     { 
       return throwError("WEB Api is not working on local machine");
        }));
   
  return UserRequest;


}
 // this for field : observable 
 // we created observable manualy
   
        //https://medium.com/fuzzycloud/angular-and-observable-4bf890b2a282
//Observable Function 



 
    



  }



