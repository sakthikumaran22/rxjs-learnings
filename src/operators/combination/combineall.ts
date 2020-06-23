import { interval, of } from "rxjs";
import { take, map, combineAll, concatAll, switchAll } from "rxjs/operators";
import { logItem } from "../../utils";

/* Example 1 */
const source$ = interval(1000);

const example$ = source$.pipe(
  take(3),
  map((outer) =>
    interval(5000).pipe(
      map((i) => `Result (${outer}): ${i}`),
      take(2)
    )
  )
);

// example$.pipe(combineAll()).subscribe((data) => logItem(data));

export { source$ as combineAll_source };

/* Example 2 */

// const ob$ = of(1000, 5000);

// ob$.pipe(map(data => interval(data).pipe(take(3))),combineAll()).subscribe((data) => logItem(data));

// export { ob$ as combineAll_source };
