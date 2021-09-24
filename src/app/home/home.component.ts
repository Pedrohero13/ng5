import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 0;
  btnText: string = "Add an Item"
  goalText: string = "My first goal"
  goals = new Array<string>();

  constructor() { }

  ngOnInit(): void {
    this.itemCount = this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText="";
    this.itemCount= this.goals.length;

  }

}
