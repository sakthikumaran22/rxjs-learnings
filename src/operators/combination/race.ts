import { interval, race } from "rxjs";
import { mapTo, take } from "rxjs/operators";
import { logItem } from "../../utils";

const source1$ = interval(1000).pipe(mapTo("First Observable"));
const source2$ = interval(500).pipe(mapTo("Second Observable"));
const source3$ = interval(2000).pipe(mapTo("Third Observable"));

const source4$ = race(source1$, source2$, source3$);

// source4$.pipe(take(3)).subscribe((data) => logItem(data));

export { source4$ as race_source };
