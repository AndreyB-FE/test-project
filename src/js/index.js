let grid = document.getElementById("portfolioGrid");
let menu = document.getElementById("header-links");
document.getElementById("burgerButton").addEventListener("click", () => {
  if (menu.style.display == "none") {
    menu.style.display = "flex";
    document.body.className = "stop-scrolling";
  } else {
    menu.style.display = "none";
    document.body.className = "";
  }
  return 0;
});

window.onload = () => {
  $(".slider-block").slick({
    nextArrow: '<i class="fas fa-angle-right arrow-next arrow"></i>',
    prevArrow: '<i class="fas fa-angle-left arrow-prev arrow"></i>',
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
};

window.onresize = () => {
  if (window.innerWidth > 768) {
    menu.style.display = "none";
  }
};
