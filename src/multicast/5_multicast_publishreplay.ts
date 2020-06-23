import { interval } from "rxjs";
import { take, publishReplay, refCount } from "rxjs/operators";
import { logItem } from "../utils";

const source$ = interval(500).pipe(take(5), publishReplay(), refCount());

// source$.subscribe((data) => logItem("C1-->" + data));
// setTimeout(() => source$.subscribe((data) => logItem("C2-->" + data)), 4000);

export { source$ as multicast_publishreplay_source$ };
