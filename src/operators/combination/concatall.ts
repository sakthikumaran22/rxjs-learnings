import { interval, Observable } from "rxjs";
import { take, concatAll } from "rxjs/operators";
import { logItem } from "../../utils";

const source1$ = interval(1000).pipe(take(2));
const source2$ = interval(500).pipe(take(2));
const source3$ = interval(2000).pipe(take(2));

const observable$ = new Observable((observer) => {
  observer.next(source1$);
  observer.next(source2$);
  observer.next(source3$);
});

// observable$.pipe(concatAll()).subscribe(
//   (data) => logItem(data),
//   (error) => logItem(error),
//   () => logItem("Completed")
// );

export {
  source1$ as concatAll_source1,
  source2$ as concatAll_source2,
  source2$ as concatAll_source3,
};
