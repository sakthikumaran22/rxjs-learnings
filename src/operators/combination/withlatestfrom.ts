import { interval } from "rxjs";
import { take, withLatestFrom, map } from "rxjs/operators";
import { logItem } from "../../utils";

const source1$ = interval(1000).pipe(take(5));

const source2$ = interval(5000).pipe(take(3));

const source3$ = interval(2000).pipe(take(3));

const source$ = source1$.pipe(
  withLatestFrom(source2$, source3$),
  map(
    ([first, second, third]) =>
      `First Source (1s): ${first} Second Source (5s): ${second} Third Source (2s): ${third}`
  )
);

// source$.subscribe((data) => logItem(data));

export { source$ as withLatestFrom_source3 };
