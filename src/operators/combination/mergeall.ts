import { interval, of } from "rxjs";
import { take, mergeAll, map } from "rxjs/operators";
import { logItem } from "../../utils";

const source1$ = interval(1000).pipe(take(3));

const source2$ = source1$.pipe(
  map((data) => interval(1000).pipe(take(3))),
  mergeAll(2)
);

// source2$.subscribe((data) => logItem(new Date() + " - " + data));

export { source1$ as mergeall_source1 };
