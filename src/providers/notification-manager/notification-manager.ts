import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NotificationManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NotificationManagerProvider {

  constructor(public http: Http) {
    //console.log('Hello NotificationManagerProvider Provider');
  }

  getNotifications() {
    return this.http.get('http://localhost:8080/notification').map(res => res.json());
  }

}
