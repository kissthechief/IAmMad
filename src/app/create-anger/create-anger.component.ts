import { AngerService } from './../services/anger-service';
import { Anger } from './../shared/anger';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-create-anger',
  templateUrl: './create-anger.component.html',
  styleUrls: ['./create-anger.component.css'],
  providers: [AngerService]
})
export class CreateAngerComponent implements OnInit {

  constructor(private _dataService: AngerService) { }

createAnger(title: string, myAnger: string) {
  const anger = this._dataService.Add(title, myAnger)
    .subscribe(response => {
      console.log(response);
    });
  const angerW = anger;
}

  ngOnInit() {
  }
}
