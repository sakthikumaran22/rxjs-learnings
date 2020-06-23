import { throwError } from "rxjs";
import { logItem } from "../../utils";

const source$ = throwError("Errors are Thrown ");

// source$.subscribe(
//   (data) => logItem(data),
//   (err) => logItem(err)
// );

export { source$ as throw_source$ };
