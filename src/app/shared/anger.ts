import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class Anger {
  logError: any;
  saveJwt: any;
  extractData: any;
  handleError: any;
    angers: Anger[];

static empty(): Anger {
    return new Anger('', '');
  }

constructor(
  public myAnger: string,
  public title: string
  ) {
  }
}
