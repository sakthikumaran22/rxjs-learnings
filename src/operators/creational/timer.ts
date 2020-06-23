import { timer } from "rxjs";
import { logItem } from "../../utils";

const source$ = timer(1000);

// source$.subscribe(logItem);

export { source$ as timer_source$ };
