import "./style.css";
const contentEl = document.getElementById("content");
import homeComponent from "./content";
import aboutComponent from "./about";
import menuComponent from "./menu";
import clearContent from "./clearContent";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

contentEl.appendChild(homeComponent());

homeBtn.addEventListener("click", (e) => {
  clearContent(contentEl);
  contentEl.appendChild(homeComponent());
});

menuBtn.addEventListener("click", (e) => {
  clearContent(contentEl);
  contentEl.appendChild(menuComponent());
});

aboutBtn.addEventListener("click", (e) => {
  clearContent(contentEl);
  contentEl.appendChild(aboutComponent());
});

// contentEl.appendChild(component());
