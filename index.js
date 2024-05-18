let buyer = document.getElementById("buyer")
let seller = document.getElementById("seller")

let buyerSwitch = document.getElementById("buyer-switch");
buyerSwitch.style.background = "red";

let sellerSwitch = document.getElementById("seller-switch");

let sellerSteps = seller.children
for (const step of sellerSteps) {
  step.style.display = "none"
}

buyerSwitch.addEventListener("click", () => {
  buyerSwitch.style.background = "red"
  sellerSwitch.style.background = "#EFEFEF"

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
  sellerSwitch.style.background = "red"
  buyerSwitch.style.background = "#EFEFEF"

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

