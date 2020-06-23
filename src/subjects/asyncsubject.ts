import { AsyncSubject, interval } from "rxjs";
import { take } from "rxjs/operators";
import { logItem } from "../utils";

const asyncSubject$ = new AsyncSubject();

const source$ = interval(1000).pipe(take(2));

source$.subscribe(asyncSubject$);
// asyncSubject$.subscribe((data) => logItem("Async Subscriber 1 -->" + data));

setTimeout(() => {
  //   asyncSubject$.subscribe((data) => logItem("Async Subscriber 2 -->" + data));
}, 3000);

/*--------------------------- Example 2 

const sub = new AsyncSubject();

sub.subscribe((data) => console.log("Async Subscriber 1 " + data));

sub.next(123); //nothing logged

sub.subscribe((data) => console.log("Async Subscriber 2 " + data));

sub.next(456); //nothing logged
sub.complete(); //456, 456 logged by both subscribers

sub.subscribe((data) =>
  console.log("After Subject is complete - Async Subscriber 3 " + data)
);

----------------------------------------*/

export { source$ as asyncSubject_source$ };
