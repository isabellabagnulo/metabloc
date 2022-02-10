function backToTop() {
  const arrowTop = document.querySelector(".back-to-top")
  return window.addEventListener("scroll", () => {
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

export { backToTop }

//   // Back to top button
// ;(function () {
//   $(document).ready(function () {
//     return (
//       $(window).scroll(function () {
//         return $(window).scrollTop() > 600
//           ? $("#back-to-top").addClass("show")
//           : $("#back-to-top").removeClass("show")
//       }),
//       $("#back-to-top").click(function () {
//         return $("html,body").animate({
//           scrollTop: "0",
//         })
//       })
//     )
//   })
// }.call(this))
