import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceTest {
  data:any;
  constructor(private http: Http) { }

getFromgson(){
  return this.http.get('./../assets/fr.json')
    .map((response: Response) => response.json());
}
/*load() {
    console.log('json called');
    return new Promise(resolve => {
        this.http.get('assets/fr.json').map(response => {
            this.data = response.json();
            console.log(response)
            resolve(this.data);
        });
    });
}*/
}
