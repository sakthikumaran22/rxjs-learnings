import { from, of } from "rxjs";
import { logItem } from "../../utils";
import { mergeAll, delay } from "rxjs/operators";

const source1$ = from([1, 2, 3]);
const source2$ = from("Hello");

const source$ = of(source1$.pipe(delay(1000)), source2$).pipe(mergeAll());

// source$.subscribe(logItem);

export { source$ as from_source$ };
