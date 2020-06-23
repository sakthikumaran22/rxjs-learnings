import { interval, Subject, Observable, of, defer } from "rxjs";
import { take, switchMap, delay, startWith, endWith } from "rxjs/operators";
import { logItem } from "../utils";

const subject$ = new Subject();

const multicast_source$ = interval(1000).pipe(
  switchMap((data) => of(new Date())),
  take(1)
);

const unicast_source$ = interval(1000).pipe(
  switchMap((data) => of(new Date())),
  take(1)
);

// unicast_source$.subscribe((data) => logItem("Unicast Observable 1-->" + data));

// setTimeout(
//   () =>
//     unicast_source$.subscribe((data) =>
//       logItem("Unicast Observable 2-->" + data)
//     ),
//   5000
// );

multicast_source$.subscribe(subject$);

// subject$.subscribe((data) => logItem("Multicast Observable 1-->" + data));
// subject$
//   .pipe(delay(5000))
//   .subscribe((data) => logItem("Multicast Observable 2-->" + data));

export { multicast_source$ as subject_source$, unicast_source$ };
