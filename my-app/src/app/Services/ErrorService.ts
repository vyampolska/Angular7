import { HttpClient } from '@angular/common/http';
import { Injectable, ErrorHandler } from "@angular/core";
import { Observable, Subject, Subscription, throwError } from "rxjs";


// observable  Subject

@Injectable()

// userObservable = new Observable(subscriber => {
//     setTimeout(() => {
//       subscriber.next(this.usert);
//     }, 1000);
//   });


export class ErrorService
{
    errors =[];


    ErrorHandle = new Subject<any>();    
 constructor ()
 {
     
 }

  setError (error)
  {
    this.errors.push(error);
    this.ErrorHandle.next(this.errors);

  }

 subscribeEroors() :Observable<any>
 {
  return this.ErrorHandle.asObservable();

 }

 }
