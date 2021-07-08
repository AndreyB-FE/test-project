let grid = document.getElementById("portfolioGrid");
document.getElementById("burgerButton").addEventListener("click", () => {
  let menu = document.getElementById("header-links");
  if (menu.style.display == "none") {
    menu.style.display = "flex";
    document.body.className = "stop-scrolling";
  } else {
    menu.style.display = "none";
    document.body.className = "";
  }
  return 0;
});
// const getPortfolio = () => {
//   fetch("http://localhost:8000/portfolios")
//     .then((res) => res.json())
//     .then((data) => {
//       portfolio = data;
//     });
// };
// let portfolio = getPortfolio();
// let visiblePortfolios = 0;

// document.getElementById("seeMore").addEventListener("click", (e) => {
//   for (let i = 6; i < portfolio.length; i++) {
//     if (visiblePortfolios >= portfolio.length) {
//       return 0;
//     }
//     visiblePortfolios++;
//     grid.insertAdjacentHTML("beforeend", `<div class="portfolio-item"></div>`);
//   }
// });

window.onload = () => {
  $(".slider-block").slick();

  // for (let i = 0; i < 6; i++) {
  //   visiblePortfolios++;
  //   grid.insertAdjacentHTML("beforeend", `<div class="portfolio-item"></div>`);
  // }
};
// $(window).load(() => {

// });
