import { Component, OnInit, Input } from '@angular/core';
import { QuestionRadiolist } from './Structure/Structure';
import { VYTestService } from './Services/VYTestService';
import {ErrorService}  from './Services/ErrorService';

@Component({
  selector: 'users-svc'
  ,
  templateUrl: 'usersfortesting.component.html'
  //,
  //   styleUrls: ['./radio-button-list-question.component.css']
})
export class UsersForTestingComponent implements OnInit {
  // TestUsers :object[]= [{}];
  TestUsers = [];

  constructor(private vyService: VYTestService ,private errService :ErrorService )
   {
     
  //  errService.subscribeEroors().subscribe((errors :[])=>{alert(errors);} )
    vyService.getHttpUsers().subscribe
      (
       
        (data: object[]) =>
         {
          this.TestUsers=data;
         
        }
      )
  }
        // vyService.getValues().subscribe
        // (
        //   (data: object[]) => {
  
        //      alert(data);
  
  
  
        //     })
  
     

  ngOnInit() {
  }
  //
}
