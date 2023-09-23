var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      loop: true,
      spaceBetween: 90,
      width: 1100,
      fade: 'true',
      centerSide: 'true',

    },
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      spaceBetween: 30,
      width: 220,
      fade: 'true',
      centerSide: 'true',


    }



  },
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

const menu_button = document.querySelector(".nav-menu")
const nav = document.querySelector(".nav")
const ul = document.querySelector(".nav ul")
const home = document.querySelector("#home")
const Journey = document.querySelector("#Journey")
const Reserve = document.querySelector("#Reserve")
const Products = document.querySelector("#Products")
const close = document.querySelector(".nav svg")
const up = document.querySelector(".up")

home.addEventListener("click", (e) => {
  e.preventDefault();
  if (window.screen.width <= 480) {
    close.classList.remove("active-svg")
    ul.classList.remove("active")
  }
  window.scrollTo(0, 0)
})
Journey.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 600)
  if (window.screen.width <= 480) {
    close.classList.remove("active-svg")
    ul.classList.remove("active")
  }
})
Reserve.addEventListener("click", (e) => {
  e.preventDefault();
  if (window.screen.width <= 480) {
    close.classList.remove("active-svg")
    ul.classList.remove("active")
    window.scrollTo(0, 1400)
    return
  }
  window.scrollTo(0, 1100)
})
Products.addEventListener("click", (e) => {
  e.preventDefault();

  if (window.screen.width <= 480) {
    close.classList.remove("active-svg")
    ul.classList.remove("active")
    window.scrollTo(0, 2200)
    return
  }
  window.scrollTo(0, 1500)
})
up.addEventListener("click", () => {



  window.scrollTo(0, 0)
})
addEventListener("scroll", locscrool);

function locscrool(event) {
  Journey.classList.remove("light")
  home.classList.remove("light")
  Products.classList.remove("light")
  Reserve.classList.remove("light")
  if (window.screen.width <= 480) {
    if (500 <= window.scrollY & window.scrollY < 1300) {
      Journey.classList.add("light")
    }
    if (0 <= window.scrollY & window.scrollY < 500) {
      home.classList.add("light")
    }
    if (1300 <= window.scrollY & window.scrollY < 2000) {
      Reserve.classList.add("light")
    }
    if (2000 <= window.scrollY & window.scrollY < 2500) {
      Products.classList.add("light")
    }

  }
  else {
    document.querySelector("footer").classList.remove("footer-active");
    if (500 <= window.scrollY & window.scrollY < 1000) {
      Journey.classList.add("light")
    }
    if (0 <= window.scrollY & window.scrollY < 500) {
      home.classList.add("light")
    }
    if (1000 <= window.scrollY & window.scrollY < 1500) {
      Reserve.classList.add("light")
    }
    if (1500 <= window.scrollY & window.scrollY < 1900) {
      Products.classList.add("light")
    }
    if (1911 < window.scrollY) {
      setTimeout(() => {
        document.querySelector("footer").classList.add("footer-active");
      }, 5)

    }
  }

}
menu_button.addEventListener("click", (e) => {

  nav.style = "display: flex;"
  setTimeout(() => {
    ul.classList.add("active")
    close.classList.add("active-svg")
  }, 5)




})
close.addEventListener("click", () => {
  close.classList.remove("active-svg")
  ul.classList.remove("active")
  // nav.style = "display: none;"
})