import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/do";
import "rxjs/add/operator/take";
import "rxjs/add/operator/share";
import "rxjs/add/operator/shareReplay";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';

  private init$: Observable<any>;
  observable = Observable.create((observer:any) => {
    observer.next('YOOO')
})
  public ngOnInit() {
    this.observable.subscribe((x:any) => console.log(x));
  }

}
