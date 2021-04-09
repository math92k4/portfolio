"use strict";

export function cursorSetup() {
  createCursor();

  window.addEventListener("mousemove", mouseMoved);

  const hoverableElemts = document.querySelectorAll(".hoverable");
  hoverableElemts.forEach((element) => {
    element.addEventListener("mouseover", toggleCircleHover);
    element.addEventListener("mouseout", toggleCircleHover);
  });
}

function createCursor() {
  const container = document.querySelector("body");

  const cursorOverflow = document.createElement("div");
  cursorOverflow.setAttribute("id", "cursorOverflow");

  const cursor = document.createElement("div");
  cursor.setAttribute("id", "circleCursor");

  cursorOverflow.appendChild(cursor);
  container.appendChild(cursorOverflow);
}

function mouseMoved(event) {
  const y = event.clientY;
  const x = event.clientX;
  moveCircle(x, y);
}

function moveCircle(x, y) {
  const circle = document.querySelector("#circleCursor");
  circle.style.top = y + "px";
  circle.style.left = x + "px";
}

function toggleCircleHover() {
  document.querySelector("#circleCursor").classList.toggle("hover");
  console.log("heu");
}
