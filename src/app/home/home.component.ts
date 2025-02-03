import { Component } from '@angular/core';
import { TimerComponent } from './timer/timer.component';
import { Co2TableComponent } from "./co2table/co2table.component";
import { O2TableComponent } from './o2table/o2table.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TimerComponent, HeaderComponent, Co2TableComponent, O2TableComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // CO2
  public carbonIntervals: number = 8;
  public carbonApneaInterval: number = 120;
  public carbonRestInterval: number = 180;
  public carbonDecrementAmount: number = 10;
  public carbonCurrentTable: any = [];

  public carbonTableForm = new FormGroup({
    intervals: new FormControl(8),
    apneaInterval: new FormControl(120),
    restInterval: new FormControl(180),
    decrementAmount: new FormControl(10)
  });

  // Oxygen
  public oxygenIntervals: number = 8;
  public oxygenApneaInterval: number = 120;
  public oxygenRestInterval: number = 180;
  public oxygenIncrementAmount: number = 10;
  public oxygenCurrentTable: any = [];

  public oxygenTableForm = new FormGroup({
    intervals: new FormControl(8),
    apneaInterval: new FormControl(120),
    restInterval: new FormControl(180),
    incrementAmount: new FormControl(10)
  })

  constructor() {}

  ngOnInit() {
    this.carbonCurrentTable = this.generateCO2Table(this.carbonIntervals, this.carbonApneaInterval, this.carbonRestInterval, this.carbonDecrementAmount);
    this.oxygenCurrentTable = this.generateO2Table(this.oxygenIntervals, this.oxygenApneaInterval, this.oxygenRestInterval, this.oxygenIncrementAmount);
  }

  public generateCO2Table(intervals: number, apneaInterval: number, restInterval: number, decrementAmount: number): Array<Interval> {
    let table: Array<Interval> = [];

    for (let i = intervals; i > 0; i--) {
        let interval = {
            id: i,
            apnea: apneaInterval,
            rest: restInterval
        };
        table.push(interval);

        restInterval = restInterval - decrementAmount;
    }

    return table;
}

  public generateO2Table(intervals: number, apneaInterval: number, restInterval: number, incrementAmount: number): Array<Interval> {
    let table: Array<Interval> = [];

    for (let i = 0; i < intervals; i++) {
        let interval = {
            id: i,
            apnea: apneaInterval,
            rest: restInterval
        };
        table.push(interval);

        apneaInterval = apneaInterval + incrementAmount;
    }

    return table;
  }

  public submitCO2Form(event: any) {
    event.preventDefault();

    if (!this.carbonTableForm.valid) {
      console.log("not valid");
      return;
    }
    
    this.carbonIntervals = this.carbonTableForm.value.intervals as number;
    this.carbonApneaInterval = this.carbonTableForm.value.apneaInterval as number;
    this.carbonRestInterval = this.carbonTableForm.value.restInterval as number;
    this.carbonDecrementAmount = this.carbonTableForm.value.decrementAmount as number;

    this.carbonCurrentTable = this.generateCO2Table(this.carbonIntervals, this.carbonApneaInterval, this.carbonRestInterval, this.carbonDecrementAmount);
  }

  public submitO2Form(event: any) {
    event.preventDefault();

    if (!this.oxygenTableForm.valid) {
      console.log("not valid");
      return;
    }
    
    this.oxygenIntervals = this.oxygenTableForm.value.intervals as number;
    this.oxygenApneaInterval = this.oxygenTableForm.value.apneaInterval as number;
    this.oxygenRestInterval = this.oxygenTableForm.value.restInterval as number;
    this.oxygenIncrementAmount = this.oxygenTableForm.value.incrementAmount as number;

    this.oxygenCurrentTable = this.generateCO2Table(this.oxygenIntervals, this.oxygenApneaInterval, this.oxygenRestInterval, this.oxygenIncrementAmount);
  }
}


export interface Interval {
  id: number
  apnea: number,
  rest: number
}