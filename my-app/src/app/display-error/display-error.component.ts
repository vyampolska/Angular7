import { Component, OnInit } from '@angular/core';
import {ErrorService} from '../Services/ErrorService';
@Component({
  selector: 'app-display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.css']
})
export class DisplayErrorComponent implements OnInit {

  Errors =[];
  constructor( private errService :ErrorService) {

    errService.subscribeEroors().subscribe((errors :[])=>{this.Errors=errors;} )
   }

  ngOnInit() {
  }

}
