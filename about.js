"use strict";

import { scrollBarSetup } from "./scrollbar.js";
import { cursorSetup } from "./cursor.js";
import { headerFxSetup } from "./header_scroll_fx.js";
import { constructMenu } from "./burger_menu.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  constructMenu();
  cursorSetup();
  scrollBarSetup();
  headerFxSetup();
}
