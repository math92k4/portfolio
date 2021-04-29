"use strict";

import { scrollBarSetup } from "./scrollbar.js";
import { cursorSetup } from "./cursor.js";
import { headerFxSetup } from "./header_scroll_fx.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  cursorSetup();
  scrollBarSetup();
  headerFxSetup();
}
