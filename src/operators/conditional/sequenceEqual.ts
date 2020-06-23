import { of, from } from "rxjs";
import {
  sequenceEqual,
  switchMap,
  mergeMap,
  tap,
  concatMap,
} from "rxjs/operators";
import { logItem } from "../../utils";

const source1$ = from([1, 2, 3]);

const sequenceEqual$ = of([1, 2, 3], [4, 5, 6], [7, 8, 9]).pipe(
  mergeMap((arr) => from(arr).pipe(sequenceEqual(source1$)))
);

// sequenceEqual$.subscribe(logItem);

export { source1$ as sequenceEqual_source1$ };
