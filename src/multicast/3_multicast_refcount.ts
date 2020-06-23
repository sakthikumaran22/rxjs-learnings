import { Subject, interval } from "rxjs";
import { take, multicast, refCount } from "rxjs/operators";
import { logItem } from "../utils";

const casted$ = interval(500).pipe(
  take(5),
  multicast(new Subject<number>()),
  refCount()
);

// casted$.subscribe((data) => logItem("C1--" + data));
// setTimeout(() => casted$.subscribe((data) => logItem("C2--" + data)), 1000);

export { casted$ as multicast_refcount_source$ };
