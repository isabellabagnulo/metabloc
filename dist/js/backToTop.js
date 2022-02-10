function backToTop() {
  const arrowTop = document.querySelector(".back-to-top")
  return window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 600) {
      arrowTop.classList.add("show")
    } else {
      arrowTop.classList.remove("show")
    }
  })
}

export { backToTop }
