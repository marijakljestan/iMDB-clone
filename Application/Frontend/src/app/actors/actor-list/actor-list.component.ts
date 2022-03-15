import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  @Input() title: string = "";
  @Input() actors: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
