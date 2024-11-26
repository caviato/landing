// const RED = "#E42D52";
// const YELLOW = "#FFC53F";
// const WHITE = "#F6F7EB";
// const BLACK = "#393E40";
// const GRAY = "#D9D9D9";

// var acc = document.getElementsByClassName("accordion");
// var i;
//
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

const landing = document.getElementById("landing");
const about = document.getElementById("about");
const careers = document.getElementById("careers");
const faqs = document.getElementById("faqs");

let tab = [landing, about, careers, faqs];

function changeTab(el) {
  console.log(el.innerHTML);
  console.log();
  if (el.innerText === "ABOUT US") {
    makeHidden(1);
  }
  if (el.innerText === "CAREERS") {
    makeHidden(2);
  }
  if (el.innerText === "FAQS") {
    makeHidden(3);
  }
}

function makeHidden(pos) {
  tab.forEach((el, i) => {
    if (i == pos) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
}
