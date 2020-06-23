import { interval } from "rxjs";
import { take, share, publishBehavior, refCount, delay } from "rxjs/operators";
import { logItem } from "../utils";

const source$ = interval(1000).pipe(take(10));

const casted$ = source$.pipe(publishBehavior(100), refCount());

const sub1 = casted$.subscribe(logItem);

setTimeout(() => sub1.unsubscribe(), 2000);
setTimeout(() => {
  const sub2 = casted$.subscribe((data) => logItem("Subscriber 2--" + data));
}, 5000);

export { source$ as publishbehaviour_source$ };
