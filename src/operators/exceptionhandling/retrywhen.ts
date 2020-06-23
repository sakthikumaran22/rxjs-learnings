import { interval, throwError, of } from "rxjs";
import { mergeMap, retryWhen, delay } from "rxjs/operators";
import { logItem } from "../../utils";

const source$ = interval(1000);

const retryWhen$ = source$.pipe(
  mergeMap((data) => {
    if (data > 2) throw data;
    return of(data);
  }),
  retryWhen((error) => {
    let count = 0;
    return error.pipe(
      delay(1000),
      mergeMap((data) => {
        if (++count > 2) return throwError("Max retry reached");
        return of(data);
      })
    );
  })
);

// retryWhen$.subscribe(
//   (data) => logItem(data),
//   (err) => logItem(err)
// );

export { source$ as retryWhen_source$ };
