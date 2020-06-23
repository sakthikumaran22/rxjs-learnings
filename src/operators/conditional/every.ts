import { interval } from "rxjs";
import { take, every } from "rxjs/operators";
import { logItem } from "../../utils";

export const source1$ = interval(1000).pipe(take(10));

// source1$.pipe(every((data) => data % 2 === 0)).subscribe(logItem);
