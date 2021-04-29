"use strict";

import { cursorSetup } from "./cursor.js";
import { constructMenu } from "./burger_menu.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector(".path_13").addEventListener("animationend", restartCircleAni);
  cursorSetup();
  scrollBarSetup();
}

function restartCircleAni() {
  const paths = document.querySelectorAll("path");
  paths.forEach(removeAnim);
  function removeAnim(path) {
    if (path.classList.contains("animate")) {
      path.classList.remove("animate");
      path.classList.add("animate_2");
    } else {
      path.classList.remove("animate_2");
      path.classList.add("animate");
    }
  }
}
