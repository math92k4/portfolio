"use strict";

export function scrollBarSetup() {
  createElements();
  calculateScroll();
}

function createElements() {
  const container = document.querySelector("body");

  const bar = document.createElement("div");
  bar.setAttribute("id", "progress_bar");

  container.appendChild(bar);
}

function calculateScroll() {
  const progressBar = document.querySelector("#progress_bar");
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  window.addEventListener("scroll", function () {
    const progressHeigth = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.setProperty("--scroll_height", `${progressHeigth}%`);
  });
}
