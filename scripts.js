import { verticalMenu } from "/dist/js/verticalMenu.js"

document.addEventListener("DOMContentLoaded", backToTop(), verticalMenu())

//BACK TO TOP
function backToTop() {
  const arrowTop = document.querySelector(".back-to-top")
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 600) {
      arrowTop.classList.add("show")
    } else {
      arrowTop.classList.remove("show")
    }
    arrowTop.addEventListener("click", () => {
      const html = document.documentElement
      const body = document.body
      return (html, body).animate(
        {
          top: 0,
        },
        {
          duration: 500,
          easing: "ease-in-out",
        }
      )
    })
  })
}

// STICKY MENU
const body = document.body
const scrollUp = "scroll-up"
const scrollDown = "scroll-down"
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp)
    return
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp)
    body.classList.add(scrollDown)
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown)
    body.classList.add(scrollUp)
  }
  lastScroll = currentScroll
})

// SWIPER
import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js"

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  calculateHeight: true,
  pagination: {
    clickable: true,
    dynamicBullets: true,
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 10000,
    pauseOnMouseEnter: true,
    waitForTransition: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  on: {
    init: function () {
      console.log("swiper initialized")
    },
  },
})

const team = document.querySelector("#ourteam")
team.addEventListener("mouseover", () => {
  swiper.autoplay.start()
})
