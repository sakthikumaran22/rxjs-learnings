import { interval, throwError, of } from "rxjs";
import { take, mergeMap, retry } from "rxjs/operators";
import { logItem } from "../../utils";

const source$ = interval(1000).pipe(
  mergeMap((data) => {
    if (data > 2) return throwError("Error");
    return of(data);
  }),
  retry(2)
);

// source$.subscribe(
//   (val) => logItem(val),
//   (val) => logItem(`${val}: Retried 2 times then quit!`)
// );

export { source$ as retry_source$ };
