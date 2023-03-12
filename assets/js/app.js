// Date
const today = new Date();
let text = today.toLocaleDateString();
console.log(text);

// Show and hide search
var searchIcon = document.querySelector(".search_icon");
searchIcon.addEventListener("click", () => {
  var searchBox = document.querySelector(".search_bar");
  searchBox.classList.add("active");
});

var closeIcon = document.querySelector(".close_search");
closeIcon.addEventListener("click", () => {
  var searchBox = document.querySelector(".search_bar");
  searchBox.classList.remove("active");
});

// Back to top and scroll function
const myBtn = document.getElementById("back_to_top");

window.onscroll = function () {
  scrollFunction();
  stickyHeader();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

myBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Scroll function

const header = document.querySelector(".header");
const menuLogo = document.querySelector(".menu .logo");
const menuLeft = document.querySelector(".menu_left");

const stickyHeader = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 330) {
    header.classList.add("sticky_header");
    // menuLeft.classList.add("sticky_active");
    menuLeft.style.display = "flex";
  } else {
    header.classList.remove("sticky_header");
    menuLeft.style.display = "none";
  }
};

// Expand and Hide OffCanvas
// document.onload = () => {
const hamburgerBtn = document.querySelector(".hamburger");
var canvas = document.querySelector(".menu_items");
var closeCanvas = document.querySelector("li.close");

hamburgerBtn.addEventListener("click", () => {
  canvas.classList.add("expand");
});

closeCanvas.addEventListener("click", () => {
  canvas.classList.remove("expand");
});
// };

// Slick
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});
