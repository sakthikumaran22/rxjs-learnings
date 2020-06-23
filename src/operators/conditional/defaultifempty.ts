import { of } from "rxjs";
import { defaultIfEmpty, switchMap, tap } from "rxjs/operators";
import { logItem } from "../../utils";

const source1$ = of().pipe(defaultIfEmpty("empty"));

// source1$.subscribe(logItem);

export { source1$ as defaultIfEmpty_source1$ };
