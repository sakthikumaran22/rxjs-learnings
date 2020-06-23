import { interval, concat } from "rxjs";
import { take } from "rxjs/operators";
import { logItem } from "../../utils";

const source1$ = interval(1000).pipe(take(2));
const source2$ = interval(1000).pipe(take(2));

// concat(source1$, source2$).subscribe((data) => logItem(data));

export { source1$ as concat_source1, source2$ as concat_source2 };
