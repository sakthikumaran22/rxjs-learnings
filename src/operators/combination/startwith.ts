import { of } from "rxjs";
import { startWith } from "rxjs/operators";
import { logItem } from "../../utils";

const source$ = of("1", "2");

// source$.pipe(startWith("We are starting!!!")).subscribe((data) => logItem(data));

export { source$  as startwith_source};
