import { ajax } from "rxjs/ajax";
import { forkJoin, pipe, of, timer, interval, throwError } from "rxjs";
import { take, delay, catchError } from "rxjs/operators";
import { logItem } from "../../utils";

const source$ = forkJoin({
  google: ajax.getJSON("https://api.github.com/users/google"),
  microsoft: ajax.getJSON("https://api.github.com/users/microsoft"),
});

// source$.subscribe(({ microsoft }) =>
//   logItem("microsoft-" + JSON.stringify(microsoft))
// );

const source1$ = forkJoin([
  of([1, 2, 3]),
  of(1, 2, 3).pipe(delay(2000)),
  interval(1000).pipe(take(1), delay(5000)),
  interval(1000).pipe(take(10)),
]);

// source1$.subscribe((data) => logItem(data));

// One of the inner observable throws an error and all the other observable outputs are not emitted

const source2$ = forkJoin([
  of([1, 2, 3]),
  // throw error
  throwError("source2$ will error -"),
]).pipe(catchError((error) => of(error)));

// source2$.subscribe((data) => logItem(data));

// Handling errors inside the forkjoin

const source3$ = forkJoin([
  of(1, 2, 3).pipe(delay(2000)),
  // throw error
  throwError("source3$ will error").pipe(catchError((error) => of(error))),
]);

// source3$.subscribe((data) => logItem(data));

export {
  source$ as forkjoin_source,
  source1$ as forkjoin_source1,
  source2$ as forkjoin_source2,
  source3$ as forkjoin_source3,
};
