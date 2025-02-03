import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    constructor() {

    }

    ngOnInit(): void {}
}