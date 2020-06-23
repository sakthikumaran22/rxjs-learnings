import { empty } from "rxjs";
import { logItem } from "../../utils";

const source$ = empty();

// source$.subscribe(
//   (data) => logItem(data + "Next"),
//   (err) => logItem(err + "Error"),
//   () => logItem("complete")
// );

export { source$ as empty_source$ };
