import { HttpClient } from '@angular/common/http';
import { Injectable, ErrorHandler } from "@angular/core";
import { Observable, Subject, Subscription, throwError } from "rxjs";
import { nextContext } from '@angular/core/src/render3';


// observable  Subject

@Injectable()

export class ErrorService
{
    errors =[];


  ErrorHandle = new Subject<any>();
  Err2 = new Observable( Subscriber => 
    {
       Subscriber.next(this.errors) ;
    })

     
     constructor ()
 {  this.Err2
  //this.ErrorHandle.next(this.errors);
 }

  setError (error)
  {
    this.errors.push(error);
    //vy
    this.ErrorHandle.next(this.errors);
    //  var yy = new (this.Err2);
    // this.Err2.next(this.errors);

  }

 subscribeEroors() :Observable<any>
 {
  return this.ErrorHandle.asObservable();
 }
}