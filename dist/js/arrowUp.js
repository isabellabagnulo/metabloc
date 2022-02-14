function autoToggle() {
  const arrow = document.querySelector(".arrow")
  arrow.classList.toggle("auto")
  arrow.addEventListener("mousehover", () => {
    upInteractive = true
    arrow.classList.remove("auto")
  })
}

export { autoToggle }
