import { backToTop } from "./dist/js/backToTop.js"
import { changeColor } from "./dist/js/changeColor.js"
import { swiper } from "./dist/js/swiper.js"
import { verticalMenu } from "./dist/js/vertical-menu.js"

document.addEventListener(
  "DOMContentLoaded",
  verticalMenu(),
  changeColor(),
  backToTop(),
  swiper()
)
