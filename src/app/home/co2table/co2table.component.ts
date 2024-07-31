import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Interval } from "../home.component";


@Component({
    selector: 'app-co2table',
    standalone: true,
    imports: [],
    templateUrl: './co2table.component.html',
    styleUrl: './co2table.component.scss'
})
export class Co2TableComponent {
    @Input() intervals: number = 8;
    @Input() apneaInterval: number = 120;
    @Input() restInterval: number = 180;
    @Input() decrementAmount: number = 10;
    @Input() table: Array<Interval> = [];

    constructor() {}
}