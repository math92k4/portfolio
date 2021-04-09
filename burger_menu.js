"use strict";

export function constructMenu() {
  document.querySelector("#menu_btn").addEventListener("click", btnClicked);
}

function btnClicked() {
  const menuBtn = document.querySelector("#menu_btn");
  const menuNav = document.querySelector("#header_nav");

  menuBtn.classList.toggle("open");
  menuNav.classList.toggle("open");
}
