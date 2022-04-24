import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
    @Output() rate = new EventEmitter<Number>();
    constructor() { }

    ngOnInit(): void {}

    onAddSearchParam() {
        //this.rate.emit(this.rate);
    }

}
