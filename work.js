"use strict";

import { cursorSetup } from "./cursor.js";
import { scrollBarSetup } from "./scrollbar.js";
import { headerFxSetup } from "./header_scroll_fx.js";
import { constructMenu } from "./burger_menu.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  constructMenu();
  cursorSetup();
  scrollBarSetup();
  headerFxSetup();

  window.addEventListener("mousemove", changeProjectImgPos);

  const projects = document.querySelectorAll(".project a");
  projects.forEach((project) => {
    project.addEventListener("mouseover", showProjectImg);
    project.addEventListener("mouseout", hideProjectImg);
  });
}

function showProjectImg() {
  const imgBox = document.querySelector("#project_images");
  imgBox.classList.toggle("show");

  const image = this.dataset.picture;
  imgBox.style.backgroundImage = `url(imgs/projects/${image})`;

  console.log(`url(imgs/projects/${image})`);
}

function hideProjectImg() {
  document.querySelector("#project_images").classList.toggle("show");
}

function changeProjectImgPos(event) {
  const x = event.clientX;
  const y = event.clientY;

  const imgBox = document.querySelector("#project_images");
  imgBox.style.top = y + "px";
  imgBox.style.left = x + "px";
}
