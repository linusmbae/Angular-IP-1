import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output()isComplete=new EventEmitter<boolean>();
  removeQuote(remove:boolean)
  {
    this.isComplete.emit(remove);
  }
  @Output()upComplete=new EventEmitter<boolean>();
  addUpVote(addUp:boolean)
  {
    this.upComplete.emit(addUp);
  }
  @Output()downComplete=new EventEmitter<boolean>();
  addUpVote(addDown:boolean)
  {
      this.downComplete.emit(addDown);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
