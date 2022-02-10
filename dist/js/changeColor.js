function changeColor() {
  const white_div_uno = document.querySelector(".white_div-1")
  const white_div_due = document.querySelector(".white_div-2")
  const white_div_tre = document.querySelector(".white_div-3")
  const white_div_quattro = document.querySelector(".white_div-4")

  const li_uno = document.querySelector(".desktop-menu .li-1")
  const li_due = document.querySelector(".desktop-menu .li-2")
  const li_tre = document.querySelector(".desktop-menu .li-3")
  const li_quattro = document.querySelector(".desktop-menu .li-4")
  const li_cinque = document.querySelector(".desktop-menu .li-5")
  const li_sei = document.querySelector(".desktop-menu .li-6")
  const li_sette = document.querySelector(".desktop-menu .li-7")

  window.addEventListener("scroll", function () {
    const light_pos_uno = white_div_uno.getBoundingClientRect().top
    const light_pos_due = white_div_due.getBoundingClientRect().top
    const light_pos_tre = white_div_tre.getBoundingClientRect().top
    const light_pos_quattro = white_div_quattro.getBoundingClientRect().top

    const light_height_uno = white_div_uno.getBoundingClientRect().height
    const light_height_due = white_div_due.getBoundingClientRect().height
    const light_height_tre = white_div_tre.getBoundingClientRect().height
    const light_height_quattro =
      white_div_quattro.getBoundingClientRect().height

    const menu_pos_li_uno = li_uno.getBoundingClientRect().top
    const menu_pos_li_due = li_due.getBoundingClientRect().top
    const menu_pos_li_tre = li_tre.getBoundingClientRect().top
    const menu_pos_li_quattro = li_quattro.getBoundingClientRect().top
    const menu_pos_li_cinque = li_cinque.getBoundingClientRect().top
    const menu_pos_li_sei = li_sei.getBoundingClientRect().top
    const menu_pos_li_sette = li_sette.getBoundingClientRect().top

    const scroll = document.querySelector("html").scrollTop

    // console.log(light_pos_uno)
    // console.log(light_height_uno)
    // console.log(menu_pos_li_uno)

    // ONE
    if (
      (menu_pos_li_uno > light_pos_uno &&
        menu_pos_li_uno < light_pos_uno + light_height_uno) ||
      (menu_pos_li_uno > light_pos_due &&
        menu_pos_li_uno < light_pos_due + light_height_due) ||
      (menu_pos_li_uno > light_pos_tre &&
        menu_pos_li_uno < light_pos_tre + light_height_tre) ||
      (menu_pos_li_uno > light_pos_quattro &&
        menu_pos_li_uno < light_pos_quattro + light_height_quattro)
    ) {
      li_uno.classList.add("menu_black")
      li_uno.classList.remove("menu_white")
    } else {
      li_uno.classList.remove("menu_black")
      li_uno.classList.add("menu_white")
    }

    // TWO
    if (
      (menu_pos_li_due > light_pos_uno &&
        menu_pos_li_due < light_pos_uno + light_height_uno) ||
      (menu_pos_li_due > light_pos_due &&
        menu_pos_li_due < light_pos_due + light_height_due) ||
      (menu_pos_li_due > light_pos_tre &&
        menu_pos_li_due < light_pos_tre + light_height_tre) ||
      (menu_pos_li_due > light_pos_quattro &&
        menu_pos_li_due < light_pos_quattro + light_height_quattro)
    ) {
      li_due.classList.add("menu_black")
      li_due.classList.remove("menu_white")
    } else {
      li_due.classList.remove("menu_black")
      li_due.classList.add("menu_white")
    }

    //THREE
    if (
      (menu_pos_li_tre > light_pos_uno &&
        menu_pos_li_tre < light_pos_uno + light_height_uno) ||
      (menu_pos_li_tre > light_pos_due &&
        menu_pos_li_tre < light_pos_due + light_height_due) ||
      (menu_pos_li_tre > light_pos_tre &&
        menu_pos_li_tre < light_pos_tre + light_height_tre) ||
      (menu_pos_li_tre > light_pos_quattro &&
        menu_pos_li_tre < light_pos_quattro + light_height_quattro)
    ) {
      li_tre.classList.add("menu_black")
      li_tre.classList.remove("menu_white")
    } else {
      li_tre.classList.remove("menu_black")
      li_tre.classList.add("menu_white")
    }

    // FOUR
    if (
      (menu_pos_li_quattro > light_pos_uno &&
        menu_pos_li_quattro < light_pos_uno + light_height_uno) ||
      (menu_pos_li_quattro > light_pos_due &&
        menu_pos_li_quattro < light_pos_due + light_height_due) ||
      (menu_pos_li_quattro > light_pos_tre &&
        menu_pos_li_quattro < light_pos_tre + light_height_tre) ||
      (menu_pos_li_quattro > light_pos_quattro &&
        menu_pos_li_quattro < light_pos_quattro + light_height_quattro)
    ) {
      li_quattro.classList.add("menu_black")
      li_quattro.classList.remove("menu_white")
    } else {
      li_quattro.classList.remove("menu_black")
      li_quattro.classList.add("menu_white")
    }

    // FIVE
    if (
      (menu_pos_li_cinque > light_pos_uno &&
        menu_pos_li_cinque < light_pos_uno + light_height_uno) ||
      (menu_pos_li_cinque > light_pos_due &&
        menu_pos_li_cinque < light_pos_due + light_height_due) ||
      (menu_pos_li_cinque > light_pos_tre &&
        menu_pos_li_cinque < light_pos_tre + light_height_tre) ||
      (menu_pos_li_cinque > light_pos_quattro &&
        menu_pos_li_cinque < light_pos_quattro + light_height_quattro)
    ) {
      li_cinque.classList.add("menu_black")
      li_cinque.classList.remove("menu_white")
    } else {
      li_cinque.classList.remove("menu_black")
      li_cinque.classList.add("menu_white")
    }

    // SIX
    if (
      (menu_pos_li_sei > light_pos_uno &&
        menu_pos_li_sei < light_pos_uno + light_height_uno) ||
      (menu_pos_li_sei > light_pos_due &&
        menu_pos_li_sei < light_pos_due + light_height_due) ||
      (menu_pos_li_sei > light_pos_tre &&
        menu_pos_li_sei < light_pos_tre + light_height_tre) ||
      (menu_pos_li_sei > light_pos_quattro &&
        menu_pos_li_sei < light_pos_quattro + light_height_quattro)
    ) {
      li_sei.classList.add("menu_black")
      li_sei.classList.remove("menu_white")
    } else {
      li_sei.classList.remove("menu_black")
      li_sei.classList.add("menu_white")
    }

    // SEVEN
    if (
      (menu_pos_li_sette > light_pos_uno &&
        menu_pos_li_sette < light_pos_uno + light_height_uno) ||
      (menu_pos_li_sette > light_pos_due &&
        menu_pos_li_sette < light_pos_due + light_height_due) ||
      (menu_pos_li_sette > light_pos_tre &&
        menu_pos_li_sette < light_pos_tre + light_height_tre) ||
      (menu_pos_li_sette > light_pos_quattro &&
        menu_pos_li_sette < light_pos_quattro + light_height_quattro)
    ) {
      li_sette.classList.add("menu_black")
      li_sette.classList.remove("menu_white")
    } else {
      li_sette.classList.remove("menu_black")
      li_sette.classList.add("menu_white")
    }
  })
}

export { changeColor }
