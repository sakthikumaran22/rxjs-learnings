import { interval, merge } from "rxjs";
import { take, map, delay } from "rxjs/operators";
import { logItem } from "../../utils";

const source1$ = interval(1000).pipe(
  take(2),
  map((data) => "source1$-" + new Date() + " - " + data)
);
const source2$ = interval(500).pipe(
  take(2),
  map((data) => "source2$-" + new Date() + " - " + data)
);
const source3$ = interval(1500).pipe(
  take(2),
  map((data) => "source3$-" + new Date() + " - " + data)
);
const source4$ = interval(2500).pipe(
  take(2),
  map((data) => "source4$-" + new Date() + " - " + data)
);

// merge(source1$, source2$, source3$, source4$).subscribe((data) =>
//   logItem(data)
// );

export {
  source1$ as merge_source1,
  source2$ as merge_source2,
  source3$ as merge_source3,
  source4$ as merge_source,
};
