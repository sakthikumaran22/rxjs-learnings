import { Observable, interval, combineLatest } from "rxjs";
import { take } from "rxjs/operators";
import { logItem } from "../../utils";

const source1$ = interval(1000).pipe(take(3));
const source2$ = interval(500).pipe(take(3));
const source3$ = interval(2000).pipe(take(3));

const source4$ = combineLatest(source1$,source2$,source3$);

// source4$.subscribe((data) => logItem(data));

// export { source4$ as combineLatest_source };
