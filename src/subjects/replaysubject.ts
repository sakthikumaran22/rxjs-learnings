import { BehaviorSubject, interval, timer, ReplaySubject } from "rxjs";
import { take, switchMap, tap, delay } from "rxjs/operators";
import { logItem } from "../utils";

const replaySubject$ = new ReplaySubject(3);

const source$ = interval(1000).pipe(take(6));

// source$.subscribe(replaySubject$);

replaySubject$.subscribe((data) => logItem("Subscriber 1 -->" + data));

setTimeout(() => {
  replaySubject$.subscribe((data) => logItem("Subscriber 2 -->" + data));
}, 5000);

/*--------------------------- Example 2 

const sub = new ReplaySubject(2);

sub.subscribe((data) => console.log("Replay Subscriber 1 " + data));

sub.next(123); //nothing logged

sub.subscribe((data) => console.log("Replay Subscriber 2 " + data));

sub.next(456); //nothing logged
sub.complete(); //456, 456 logged by both subscribers

sub.subscribe((data) =>
  console.log("After Subject is complete - Replay Subscriber 3 " + data)
);
----------------------------------------*/

export { replaySubject$ as replaySubject_source$ };
