import { Component, Input } from "@angular/core";
import { Interval } from "../home.component";


@Component({
    selector: 'app-o2table',
    standalone: true,
    imports: [],
    templateUrl: './o2table.component.html',
    styleUrl: './o2table.component.scss'
})
export class O2TableComponent {
    @Input() intervals: number = 8;
    @Input() apneaInterval: number = 120;
    @Input() restInterval: number = 180;
    @Input() incrementAmount: number = 10;
    @Input() table: Array<Interval> = [];

    constructor() {}

    ngOnInit() {
    }
}