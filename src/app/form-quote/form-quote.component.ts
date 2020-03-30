import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css']
})
export class FormQuoteComponent implements OnInit {
newQuote=new Quote("","","",new Date(),0,0);
@Output() addQuote=new EventEmitter<Quote>();

submitQuote()
{
  this.addQuote.emit(this.newQuote);
  this.newQuote=new Quote("","","",new Date(),0,0)
}
  constructor() { }

  ngOnInit(): void {
  }

}
