import { Component } from '@angular/core';
import {
  Document, DocumentDetail, Question, Option, User,
  QuestionType, QuestionRadiolist,
  QuestionText
} from '../Structure/Structure';
import { VYTestService } from '../Services/VYTestService';

import { ErrorService } from '../Services/ErrorService';




@Component({
  selector: 'quest',
  templateUrl: './questions.component.html',
  styleUrls: [],
  providers: [VYTestService]
})


export class QuestionsComponent {
  // Fields

  ngOnInit() {



  }



  questionType = QuestionType;
  //user: User;
  document: any;
  options: Array<Option>[];
  documentDetails: Array<DocumentDetail>[];

  docData = new Array<Object>();
  idDocument: number;
  onOptionSelected(node: number, optionSelected: number) {


  }


  constructor(private vyService: VYTestService) {
  this.getDocument();
    
  }

  getDocument(  )
  {

    this.vyService.getValidatedDocumentDetails().subscribe
      (
        (data: any) => {
          this.document = (data.doc) as Document;
          this.documentDetails = this.document.documentDetails;
          this.idDocument = this.document.idDocument;
          console.log(this.document.idDocument);
          console.log(this.idDocument);
          console.log(this.documentDetails);
        }
      )
  }
}
