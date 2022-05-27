import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
    @Output() rate = new EventEmitter<number>();
    newRate: number = 0;

    constructor() { }

    ngOnInit(): void {}

    showRate(value: number) {
        this.newRate = value;
        this.rate.emit(this.newRate);
    }

}
