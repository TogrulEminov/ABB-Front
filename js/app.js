// hamburger
function hamburger(x) {
  x.classList.toggle("change");
}
// menu-mobile
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".menu-mobile").fadeToggle();

  });
});
// menu-mobile
//  js-accordion-menu
{
const acccordionbtn = document.querySelectorAll(".accordion-header");
const accordioncnts = document.querySelectorAll(".accordion-body");

acccordionbtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    accordioncnts.forEach((accordion) => {
      if (
        e.target.nextElementSibling !== accordion &&
        accordion.classList.contains("active")
      ) {
        accordion.classList.remove("active");
        acccordionbtn.forEach((btn) => btn.classList.remove("active"));
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".accordion-header")) {
   acccordionbtn.forEach((btn) => btn.classList.remove("active"));
   accordioncnts.forEach((accordion) => accordion.classList.remove("active"));
  }
};
}
// js-accordion-menu
 

// desktop-dropwdown-js
{
$(document).ready(function () {
  $(".third-line-list").hover(
    function () {
      $('#sub-menu', this).stop().fadeIn("fast");
      $('#sub-menu', this).css({ "display": "flex" });
    },
    function () {
      $('#sub-menu', this).stop().fadeOut("fast");
      $('#sub-menu', this).css({ "display": "none" });
    });
  $(".icon-close").click(function () {
    $(".sub-menu").fadeOut();
  });
});
}

