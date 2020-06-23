import { ajax } from "rxjs/ajax";
import { logItem } from "../../utils";

const source$ = ajax.getJSON("https://api.github.com/users?per_page=2");

// source$.subscribe((res) => logItem(JSON.stringify(res)));

export { source$ as ajax_source$ };
