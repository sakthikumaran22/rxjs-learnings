import { of, defer, merge, timer } from "rxjs";
import { switchMap, mergeAll } from "rxjs/operators";
import { logItem } from "../../utils";

const source1$ = of(new Date());
const source2$ = defer(() => of(new Date()));

// logItem(new Date());

const final_source$ = timer(3000).pipe(
  switchMap((_) => of(source1$, source2$)),
  mergeAll()
);

// final_source$.subscribe(logItem);

export { final_source$ as defer_source$ };
