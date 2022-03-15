function verticalMenu() {
  let menuSection = document.querySelectorAll(".desktop-menu li a")

  // for clickable event
  menuSection.forEach((v) => {
    v.onclick = () => {
      setTimeout(() => {
        menuSection.forEach((j) => j.classList.remove("active"))
        v.classList.add("active")
      }, 300)
    }
  })

  // for window scrolldown event

  window.onscroll = () => {
    let mainSection = document.querySelectorAll(
      "#home, #aboutus, #services, #ourstrategy, #ourteam, #pricing, #contactus"
    )

    mainSection.forEach((v, i) => {
      let rect = v.getBoundingClientRect().y
      if (rect < window.innerHeight - 200) {
        menuSection.forEach((v) => v.classList.remove("active"))
        menuSection[i].classList.add("active")
      }
    })
  }
}

export default verticalMenu
