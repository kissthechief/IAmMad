import { CommonModule } from '@angular/common';
import { Anger } from './../shared/anger';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-following-angers',
  templateUrl: './following-angers.component.html',
  styleUrls: ['./following-angers.component.css']
})
export class FollowingAngersComponent implements OnInit {

  @Input() anger: Anger;

  constructor() {
  }

  ngOnInit() {
  }
}
