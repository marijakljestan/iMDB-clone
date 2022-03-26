import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.model';

@Component({
  selector: 'actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  @Input() actors: Actor[] = [];

  constructor() { }

  ngOnInit(): void {}

}
