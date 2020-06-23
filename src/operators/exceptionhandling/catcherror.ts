import { throwError, of, interval, from, empty } from "rxjs";
import { catchError, switchMap, take, tap, retry } from "rxjs/operators";
import { logItem } from "../../utils";

const error_source$ = throwError("Error Observable");

// error_source$.pipe(catchError((err) => of(err))).subscribe(logItem);

const fake_observable$ = empty().pipe(throwError);
const source1$ = interval(1000).pipe(take(3));
// source1$
//   .pipe(
//     switchMap((_) => fake_observable$),
//     catchError((_) => of("Stop publishing"))
//   )
//   .subscribe(logItem);

const source2$ = interval(1000).pipe(take(3));
// source1$
//   .pipe(
//     switchMap((_) =>
//       fake_observable$.pipe(catchError((_) => of("Continuous publishing")))
//     )
//   )
//   .subscribe(logItem);

export { error_source$ as catchError_source$, source1$ as catchError_source1$ };
