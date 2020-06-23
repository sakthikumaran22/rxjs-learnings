import { from, of } from "rxjs";
import { logItem } from "../../utils";
import { mergeAll, delay, concatAll } from "rxjs/operators";

const source1$ = of(1, 2, 3);
const source2$ = of("Hello");
const source3$ = of(["a", "b", "c"]);

const source$ = of(source1$.pipe(delay(1000)), source2$, source3$).pipe(
  mergeAll()
);

// source$.subscribe(logItem);

export { source$ as of_source$ };
