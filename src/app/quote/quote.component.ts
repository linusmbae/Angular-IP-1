import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote("linus","lucy","this is my quote")
  ]
  toggleDetails(index)
   {
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
   }
  constructor() { }

  ngOnInit(): void {
  }

}
