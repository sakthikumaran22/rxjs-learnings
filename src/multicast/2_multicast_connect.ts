import { interval, Subject, ConnectableObservable } from "rxjs";
import { take, multicast } from "rxjs/operators";
import { logItem } from "../utils";

const source$ = new Subject<number>();

const casted$ = interval(500).pipe(
  take(5),
  multicast(source$)
) as ConnectableObservable<number>;

// casted$.connect();

source$.subscribe((data) => logItem("C1--" + data));
setTimeout(() => source$.subscribe((data) => logItem("C2--" + data)), 1000);

export { source$ as multicast_connect_source$ };
