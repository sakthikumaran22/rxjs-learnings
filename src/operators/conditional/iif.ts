import { of, interval, iif } from "rxjs";
import { mergeAll, mergeMap, take, endWith } from "rxjs/operators";
import { logItem } from "../../utils";

const if$ = of("True");
const else$ = of("False");

const source1$ = interval(1000).pipe(
  take(5),
  mergeMap((data) => iif(() => data % 2 === 0, if$, else$)),
  endWith("Stream Completed")
);

// source1$.subscribe(logItem);

export { source1$ as iif_source1$ };
