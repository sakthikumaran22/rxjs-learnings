import { generate } from "rxjs";
import { logItem } from "../../utils";

const source$ = generate(
  1,
  (x) => x <= 10,
  (x) => x++
);

// source$.subscribe(logItem);
export { source$ as generate_source$ };
