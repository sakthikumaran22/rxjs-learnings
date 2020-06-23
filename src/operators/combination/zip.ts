import { of, zip, interval } from "rxjs";
import { logItem } from "../../utils";
import { take } from "rxjs/operators";

const source1$ = of("Hello");
const source2$ = of("World");
const source3$ = of("Good");
const source4$ = of("Morning");

const source$ = zip(source3$, source4$, source1$, source2$);

// source$.subscribe((data) => logItem(data));

// Zip stops emitting data when one of the source completes

const source5$ = interval(1000).pipe(take(3));
const source6$ = interval(1000).pipe(take(2));
const source7$ = interval(1000).pipe(take(3));

const source_alt$ = zip(source5$, source6$, source7$);
// source_alt$.subscribe((data) => logItem(data));

export { source$ as zip_source, source_alt$ as zip_source_alt };
