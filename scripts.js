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

const myelement = document.querySelector("back-to-top")

function SmoothVerticalScrolling(e, time, where) {
  var eTop = e.getBoundingClientRect().top
  var eAmt = eTop / 100
  var curTime = 0
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, where)
    curTime += time / 100
  }
}

function SVS_B(eAmt, where) {
  if (where == "center" || where == "") window.scrollBy(0, eAmt / 2)
  if (where == "top") window.scrollBy(0, eAmt)
}

SmoothVerticalScrolling(myelement, 275, "center")
