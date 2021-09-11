//PRELOADER ANIMATION
var preloader = document.querySelector("#preloader");

setTimeout(function () {
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";
}, 1000);
// ANIMATION HAMBURGER
var hamburgerBTN = document.querySelector(".navbar-toggler-icon");

hamburgerBTN.addEventListener("click", function () {
  hamburgerBTN.classList.toggle("rotate");
});
// ANIMATION CONTENT CARD
var planetCard = document.querySelector(".planet-card");
var solarCard = document.querySelector(".solar-card");
var constellCard = document.querySelector(".constell-card");
var obserCard = document.querySelector(".obser-card");
window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    planetCard.classList.add("show");
    solarCard.classList.add("show");
    constellCard.classList.add("show");
    obserCard.classList.add("show");
  }
  if (window.scrollY == 0) {
    planetCard.classList.remove("show");
    solarCard.classList.remove("show");
    constellCard.classList.remove("show");
    obserCard.classList.remove("show");
  }
});

// ANIMATION PLANETS CARD
var planetBackCard1 = document.querySelector(".planet-bg1");
var planetBackCard2 = document.querySelector(".planet-bg2");
var planetBackCard3 = document.querySelector(".planet-bg3");
var planetBackCard4 = document.querySelector(".planet-bg4");
var planetBackCard5 = document.querySelector(".planet-bg5");
var planetBackCard6 = document.querySelector(".planet-bg6");

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY > 1180) {
    planetBackCard1.classList.add("scale-card1");
    planetBackCard1.firstElementChild.classList.add("show");
    planetBackCard2.classList.add("scale-card2");
    planetBackCard2.firstElementChild.classList.add("show");
    planetBackCard3.classList.add("scale-card3");
    planetBackCard3.firstElementChild.classList.add("show");
  }
  if (window.scrollY > 1780) {
    planetBackCard4.classList.add("scale-card1");
    planetBackCard4.firstElementChild.classList.add("show");
    planetBackCard5.classList.add("scale-card2");
    planetBackCard5.firstElementChild.classList.add("show");
    planetBackCard6.classList.add("scale-card3");
    planetBackCard6.firstElementChild.classList.add("show");
  }
  if (window.scrollY == 0) {
    planetBackCard1.classList.remove("scale-card1");
    planetBackCard1.firstElementChild.classList.remove("show");
    planetBackCard2.classList.remove("scale-card2");
    planetBackCard2.firstElementChild.classList.remove("show");
    planetBackCard3.classList.remove("scale-card3");
    planetBackCard3.firstElementChild.classList.remove("show");
    planetBackCard4.classList.remove("scale-card1");
    planetBackCard4.firstElementChild.classList.remove("show");
    planetBackCard5.classList.remove("scale-card2");
    planetBackCard5.firstElementChild.classList.remove("show");
    planetBackCard6.classList.remove("scale-card3");
    planetBackCard6.firstElementChild.classList.remove("show");
  }
});

// ANIMATION ASTRONOMY NEWS
var cardLeft = document.querySelector(".card-left");
var cardRightTop = document.querySelector(".card-right-top");
var cardRightBottomLeft = document.querySelector(".card-right-bt-left");
var cardRightBottomRight = document.querySelector(".card-right-bt-right");

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY > 2800) {
    cardLeft.classList.add("show");
    cardRightTop.classList.add("show");
    cardRightBottomLeft.classList.add("show");
    cardRightBottomRight.classList.add("show");
  }
  if (window.scrollY == 0) {
    cardLeft.classList.remove("show");
    cardRightTop.classList.remove("show");
    cardRightBottomLeft.classList.remove("show");
    cardRightBottomRight.classList.remove("show");
  }
});

//SCROLL TO TOP
var scrollToTop = document.querySelector(".scroll-top-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 700) {
    scrollToTop.classList.add("show");
  }
  if (window.scrollY < 400) {
    scrollToTop.classList.remove("show");
  }
});

scrollToTop.addEventListener("click", goToTop);

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//LOADMORE PLANETS

var planetsRow = document.querySelector(".planets-row");
var viewMorePlanetBtn = document.querySelector(".view-more-planet-btn");

viewMorePlanetBtn.addEventListener("click", showMorePlanet);

function showMorePlanet() {
  fetch("https://fake-api-sem.herokuapp.com/planets")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      data.forEach(function (planet) {
        var newDiv = document.createElement("div");
        newDiv.className = "col-lg-4 col-md-6";

        if (planet.id == 1) {
          newDiv.innerHTML = `
          <div class="scale-card1 planet-bg7 d-flex flex-column justify-content-end">
          <div class="card text-white mb-3 card-glass show planet-card-animation1">
            <div class="card-body">
              <h4 class="card-title">${planet.name}</h4>
              <p class="card-text">${planet.content}</p>
            </div>
            <div class="text-right mb-3 mr-3">
            <button class="btn btn-primary">Read more...</button>
            </div>
          </div>
          </div>
          `;
        }
        if (planet.id == 2) {
          newDiv.innerHTML = `
          <div class="scale-card2 planet-bg8 d-flex flex-column justify-content-end">
          <div class="card text-white mb-3 card-glass show planet-card-animation2">
            <div class="card-body">
              <h4 class="card-title">${planet.name}</h4>
              <p class="card-text">${planet.content}</p>
            </div>
            <div class="text-right mb-3 mr-3">
            <button class="btn btn-primary">Read more...</button>
            </div>
          </div>
          </div>
          `;
        }
        if (planet.id == 3) {
          newDiv.innerHTML = `
          <div class="scale-card3 planet-bg9 d-flex flex-column justify-content-end">
          <div class="card text-white mb-3 card-glass show planet-card-animation3">
            <div class="card-body">
              <h4 class="card-title">${planet.name}</h4>
              <p class="card-text">${planet.content}</p>
            </div>
            <div class="text-right mb-3 mr-3">
            <button class="btn btn-primary">Read more...</button>
            </div>
          </div>
          </div>
          `;
        }
        planetsRow.appendChild(newDiv);
      });
    });
  viewMorePlanetBtn.style.display = "none";
}
