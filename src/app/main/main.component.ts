import { Anger } from './../shared/anger';
import { AngerService } from './../services/anger-service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  followingAngers: Anger[] = [];

  constructor(public as: AngerService) { }

  ngOnInit() {
    this.as.Get().subscribe(angers => {
      this.followingAngers = angers;
    });
  }

}
