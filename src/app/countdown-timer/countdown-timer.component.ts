import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private interValid = 0;
  message = '';
  remainingTime: number;
  @Input()
  second = 11;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  clearTimer() {

  }

  start() {

  }

  stop() {

  }

  reset() {

  }

  private countDown() {

  }

}
