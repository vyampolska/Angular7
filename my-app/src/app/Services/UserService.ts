import {Injectable} from "@angular/core";
import{Observable, Subject, Subscription} from "rxjs";
import{Document,DocumentDetail,Question,Option,User ,
    QuestionType,QuestionRadiolist,
    QuestionText} from '../Structure/Structure';


@Injectable()

export class UserService
{
  //  fakeService : FakeService;
    user: Subscription ;

//  constructor (fakeService : FakeService)
//  {
//     //  this.user= this.fakeService.getUser().subscribe(dataUser =>{
//     //  }) 
//  }

 getUser()
 {
   //this.fakeService.getUserInfo();


 }
}