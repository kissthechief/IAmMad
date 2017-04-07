import { Anger } from './../shared/anger';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AngerService {
  private actionUrl: string;
  private headers: Headers;

 constructor(private _http: Http) {
  this.headers = new Headers();
  this.headers.append('Content-Type', 'application/json');
  this.headers.append('Accept', 'application/json');
 }

public Add = (title: string, myAnger: string): Observable<Anger> => {
        this.actionUrl = 'http://localhost/IAmMad/api/Angers';
        const toAdd = JSON.stringify({Id: 0,   Title: title, Text: myAnger });

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <Anger>response.json())
            .catch(this.handleError);
    }

    public Get = (): Observable<Anger[]> => {
        this.actionUrl = 'http://localhost/IAmMad/api/AngersFromFollowing';

        return this._http.get(this.actionUrl, { headers: this.headers })
            .map(r => r.json())
            .map(angerArray => angerArray
            .map(anger => new Anger(
              anger.title,
              anger.myAnger))
            ).catch(this.handleError);
    }

  private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
