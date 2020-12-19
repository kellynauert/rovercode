//Set the sponsorship and contributions divs to be the same height. justify-content-between then spreads out the elements and aligns them.
let contributeHeight = document.getElementById("contribute").clientHeight;
let sponsorImageHeight = document.getElementById("sponsorImage").clientHeight;

if (sponsorImageHeight > contributeHeight) {
  document
    .getElementById("sponsor")
    .setAttribute("style", "height:" + contributeHeight + "px ;");
} else {
  document
    .getElementById("contribute")
    .setAttribute("style", "height:" + sponsorHeight + "px ;");
}
function hero() {
  let heroHeight = document.getElementById("hero").clientHeight;
  console.log(heroHeight);
  document.querySelectorAll(".layer").forEach((item) => {
    item.setAttribute("style", "height:" + heroHeight + "px ;");
  });
}
(function () {
  window.addEventListener("scroll", function (event) {
    var depth, layer, layers, movement, topDistance, translate3d, _i, _len;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (_i = 0, _len = layers.length; _i < _len; _i++) {
      layer = layers[_i];
      depth = layer.getAttribute("data-depth");
      movement = -(topDistance * depth);
      translate3d = "translate3d(0, " + movement + "px, 0)";
      layer.style["-webkit-transform"] = translate3d;
      layer.style["-moz-transform"] = translate3d;
      layer.style["-ms-transform"] = translate3d;
      layer.style["-o-transform"] = translate3d;
      layer.style.transform = translate3d;
    }
  });
}.call(this));
