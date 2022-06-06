import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interVal: any;
  lastNumber: number = 0;
  constructor() {}
  ngOnInit(): void {}
  startGame() {
    this.interVal = setInterval(() => {
      this.lastNumber++;
      this.intervalFired.emit(this.lastNumber);
    }, 1000);
  }
  pauseGame() {
    clearInterval(this.interVal);
  }
}
