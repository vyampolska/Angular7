
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

  //field  example 

  usert = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  // bellow we created our own observable configuration
  // we  would like to say
  //1. UserObserrvable - is functionality
  //2. everyone who wouldsubscribe for the functionality (subscriber)
  //would recieve   by default  subsription which have 
  // mentioned after the word next

  userObservable = new Observable(subscriber => {
    setTimeout(() => {
      subscriber.next(this.usert);
    }, 1000);
  });


  constructor(private http: HttpClient, private errService :ErrorService ) {

    // DI httpClient is injected 
  }
   


  public getHttpUsers(): Observable<any> {
    let url = "https://jsonplaceholder.typicode777.com/users/";
    
  
    let UserRequest = this.http.get(url).pipe(catchError((error) =>
     { 
       console.log(111);
       this.errService.setError(error);
       return throwError(error); 
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
       console.log("ERROR function"); 
       return throwError("WEB Api is not working on local machine");
        }));
   
  return UserRequest;


}
 // this for field : observable 
 // we created observable manualy
    public getUser(): any {
  return this.userObservable;
}
        //https://medium.com/fuzzycloud/angular-and-observable-4bf890b2a282
//Observable Function 



 
    



  }



