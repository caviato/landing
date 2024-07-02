const RED = "#E42D52";
const YELLOW = "#FFC53F";
const WHITE = "#F6F7EB";
const BLACK = "#393E40";
const GRAY = "#D9D9D9";

let buyer = document.getElementById("buyer")
let seller = document.getElementById("seller")

let buyerSwitch = document.getElementById("buyer-switch");
buyerSwitch.style.background = YELLOW;

let sellerSwitch = document.getElementById("seller-switch");
sellerSwitch.style.background = GRAY;

let sellerSteps = seller.children
for (const step of sellerSteps) {
  step.style.display = "none"
}

buyerSwitch.addEventListener("click", () => {
  buyerSwitch.style.background = YELLOW;
  sellerSwitch.style.background = GRAY;

  let buyerSteps = buyer.children
  for (const step of buyerSteps) {
    step.style.display = "block"
  }

  let sellerSteps = seller.children
  for (const step of sellerSteps) {
    step.style.display = "none"
  }
})

sellerSwitch.addEventListener("click", () => {
  sellerSwitch.style.background = RED;
  buyerSwitch.style.background = GRAY;

  let buyerSteps = buyer.children
  for (const step of buyerSteps) {
    step.style.display = "none"
  }

  let sellerSteps = seller.children
  for (const step of sellerSteps) {
    step.style.display = "block"
  }
})

new Glide(".glide", { autoplay: 5000 }).mount()

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

