import { Observable } from "rxjs";
import { logItem } from "../../utils";

const observable$ = Observable.create((subscriber: any) => {
  subscriber.next(1);
  subscriber.complete();
});


/* 
Equal Implementation 

const observable$ = new Observable((observer) => observer.next(1));

*/

// observable$.subscribe(logItem);

export { observable$ as create_observable$ };
