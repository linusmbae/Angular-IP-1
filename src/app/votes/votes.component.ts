import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Votes } from "../votes";
@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
votess: Votes[]=[
  new Votes(0,0)
]
@Output()upComplete=new EventEmitter<boolean>();
addUpVote(addUp)
{
  let qLength=this.votess.length;
  addUp.upVotes=qLength+1;
  this.votess.push(addUp)
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
