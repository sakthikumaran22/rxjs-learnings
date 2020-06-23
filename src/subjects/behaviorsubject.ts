import { BehaviorSubject, interval, timer } from "rxjs";
import { take, switchMap, tap, delay } from "rxjs/operators";
import { logItem } from "../utils";

const behaviourSubject$ = new BehaviorSubject(-1);

const source$ = interval(1000).pipe(take(6));

source$.subscribe(behaviourSubject$);

// behaviourSubject$.subscribe((data) => logItem("Subscriber 1 -->" + data));

setTimeout(() => {
  //   behaviourSubject$.subscribe((data) => logItem("Subscriber 2 -->" + data));
}, 3000);

export { behaviourSubject$ as behaviourSubject_source$ };
