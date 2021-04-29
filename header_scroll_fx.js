"use strict";
export function headerFxSetup() {
  window.addEventListener("scroll", pageScrolled);
}

function pageScrolled() {
  const scrollNr = window.pageYOffset;

  console.log(scrollNr);

  const scrollOpacity = 1 - scrollNr / 200;
  const scrollSpeed = `-${scrollNr / 20}px`;

  let scrollPointerEvent;
  if (scrollOpacity <= 0) {
    scrollPointerEvent = "none";
  } else {
    scrollPointerEvent = "auto";
  }

  const pageHeader = document.querySelector("header");
  pageHeader.style.setProperty("--scroll-pointer", scrollPointerEvent);
  pageHeader.style.setProperty("--scroll-opacity", scrollOpacity);
  pageHeader.style.setProperty("--scroll-speed", scrollSpeed);
}
