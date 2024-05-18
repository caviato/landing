const RED = "#D85A42";
const GREEN = "#67B9A4";
const WHITE = "#F6F7EB";
const BLACK = "#393E40";
const GRAY = "#D9D9D9";

let buyer = document.getElementById("buyer")
let seller = document.getElementById("seller")

let buyerSwitch = document.getElementById("buyer-switch");
buyerSwitch.style.background = GREEN;

let sellerSwitch = document.getElementById("seller-switch");
sellerSwitch.style.background = GRAY;

let sellerSteps = seller.children
for (const step of sellerSteps) {
  step.style.display = "none"
}

buyerSwitch.addEventListener("click", () => {
  buyerSwitch.style.background = GREEN;
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


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  autoPlay: 3000,
  prevNextButtons: false,
  wrapAround: true,
});

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

