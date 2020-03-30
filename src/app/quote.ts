export class Quote {
  
  showQuoteDetails:boolean;
  constructor(public authorName:string, public userName:string, public quote:string, public compDate:Date)
  {
    this.showQuoteDetails=false;
  }
}
