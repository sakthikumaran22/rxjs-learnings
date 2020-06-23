import { interval } from "rxjs";
import { pairwise, take } from "rxjs/operators";
import { logItem } from "../../utils";

const source$ = interval(1000).pipe(take(5), pairwise());

// source$.subscribe((data) => logItem(data));

export { source$ as pairwise_source };
