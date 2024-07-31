import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  @Input() initialTime: number = 60;
  @Input() carbonCurrentTable: any = [];
  @Input() oxygenCurrentTable: any = [];
  public currentTime: number = 0;
  public timerMessage: string = 'Timer not started';
  public timerButton: string = 'Start Timer';
  public timerStarted: boolean = false;
  public intervalId: any;

  public timerForm = new FormGroup({
    timerType: new FormControl('carbon')
  });

  constructor() {

  }

  ngOnInit() {
    this.currentTime = this.initialTime;
  }

  public decrementOneSecond(currentTime: number): number {
    return currentTime - 1;
  }

  public handleTimer(): void {
    if (!this.timerStarted) {
      this.initializeTimerValues();

      this.intervalId = setInterval(() => {
        this.currentTime = this.decrementOneSecond(this.currentTime);
  
        if (this.currentTime <= 0) {
          clearInterval(this.intervalId);
          this.playEndTimerSound();
          this.timerMessage = 'Timer done.'
        }
      }, 1000);
    } else {
      clearInterval(this.intervalId);
      this.timerStarted = false;
      this.timerMessage = 'Timer Stopped'
    }
  }

  public initializeTimerValues(): void {
    this.timerButton = 'Stop Timer';
    this.timerMessage = 'Timer has begun!';
    this.timerStarted = true;
  }

  public resetTimerValues(): void {
    if (this.timerStarted = true) {
      clearInterval(this.intervalId);
    }
    
    this.timerStarted = false;
    this.timerMessage = 'Timer not started';
    this.timerButton = 'Start Timer';
    this.currentTime = this.initialTime;
  }

  public playEndTimerSound(): void {
    const audio = new Audio('assets/sounds/end-timer.wav');
    audio.play();
  }

  public handleChooseTimerType(event: any) {
    event.preventDefault();
    console.log(event);
    console.log(this.timerForm);
  }
}
