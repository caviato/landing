// const RED = "#E42D52";
// const YELLOW = "#FFC53F";
// const WHITE = "#F6F7EB";
// const BLACK = "#393E40";
// const GRAY = "#D9D9D9";

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !expanded);

    const content = button.nextElementSibling;
    if (!expanded) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});

const toggleButton = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
});
