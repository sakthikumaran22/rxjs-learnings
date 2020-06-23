import { interval } from "rxjs";
import { logItem } from "../../utils";
import { take } from "rxjs/operators";

const source$ = interval(1000).pipe(take(3));

// source$.subscribe(logItem);

export { source$ as interval_source$ };
