import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pm-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  @Input() title : string = "";
  @Input() movies : any[] = [];

  constructor() { }

  ngOnInit(): void {
  
  }

}
