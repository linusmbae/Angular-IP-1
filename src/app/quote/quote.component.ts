import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote("Arthur C. Clarke","linus","Any sufficiently advanced technology is indistinguishable from magic.", new Date (2020,2,24),0,0)
  ]
  toggleDetails(index)
   {
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
   }
   removeQuote(isComplete, index)
   {
    if (isComplete)
    {
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].authorName}?`)
        if (toDelete)
        {
          this.quotes.splice(index,1)
        }
    }
  }
  addNewQuote(quote)
  {
    quote.compDate=new Date(quote.compDate)
    this.quotes.unshift(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
