import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public currentCount = 0;
  public tempVarA = 0;
  public tempVarB = 1;

  public incrementCounter() {
    this.tempVarA = this.currentCount + this.tempVarB;
    this.tempVarB = this.currentCount;
    this.currentCount = this.tempVarA;
  }
}
