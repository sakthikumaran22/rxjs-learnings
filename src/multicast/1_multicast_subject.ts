import { interval, Subject } from "rxjs";
import { take } from "rxjs/operators";
import { logItem } from "../utils";

const source$ = interval(500).pipe(take(5));

const casted$ = new Subject<number>();

// source$.subscribe(casted$);

casted$.subscribe((data) => logItem("C1--" + data));
setTimeout(() => casted$.subscribe((data) => logItem("C2--" + data)), 1000);

export { source$ as multicast_subject_source$ };
