import { of } from "rxjs";
import { endWith } from "rxjs/operators";
import { logItem } from "../../utils";

const source$ = of("1", "2");

// source$.pipe(endWith("We are done!!!")).subscribe((data) => logItem(data));

export { source$ as endwith_source };
