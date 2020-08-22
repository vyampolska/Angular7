import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
//import { QuestionRadiolist } from '../Structure/Structure';
import {
  Document, DocumentDetail, Question, Option, User,
  QuestionType, QuestionRadiolist,
  QuestionText
} from '../Structure/Structure';

@Component({
  selector: 'app-radio-button-list-question',
  templateUrl: './radio-button-list-question.component.html',
  styleUrls: ['./radio-button-list-question.component.css']
})
export class RadioButtonListQuestionComponent implements OnInit
 {
@Input() question:QuestionRadiolist;
@Input() detail:DocumentDetail;
count: number=0;
@Output() onChanged = new EventEmitter<boolean>();
@Output() onQuestionSelectedOptionChanged = new EventEmitter<any>(); // observable
 constructor() { }

  ngOnInit() {
  }
//

increase(increased) : void {
 
 this.onChanged.emit(increased)
}


 radioChange(id)
 {
  this.question.optionSelected=id;
  this.detail.question = this.question;
  console.log(this.detail.question);
  this.onQuestionSelectedOptionChanged.emit(this.detail);
 }
// radioChange(option)
// {
//  alert(option) ;
// }
}
