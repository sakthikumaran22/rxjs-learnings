import { range } from "rxjs";
import { logItem } from "../../utils";

const source$ = range(1, 5);

// source$.subscribe(logItem);

export { source$ as range_source$ };
