import { Subject, interval, ConnectableObservable } from "rxjs";
import { take, multicast, refCount, publish, share } from "rxjs/operators";
import { logItem } from "../utils";

const casted$ = interval(500).pipe(take(5), publish(), refCount());

// casted$.subscribe((data) => logItem("C1--" + data));
// setTimeout(() => casted$.subscribe((data) => logItem("C2--" + data)), 1000);

// setTimeout(() => casted$.subscribe((data) => logItem("C3--" + data)), 3000);

export { casted$ as multicast_publish_source$ };

/*
publish() --> multicast(new Subject()) --> observable$.subscriber(subject$)
refcount() --> connect()
publishReplay(2) -->  multicast(new ReplaySubject(2)) --> observable$.subscriber(replaySubject$)
*/
