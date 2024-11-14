const happyhour = document.getElementById('happyhour')
const menu_happyhour = document.getElementById('menu_happyhour')
const breakfastmenu = document.getElementById('breakfastmenu')
const menu_breadfast = document.getElementById('menu_breadfast')


happyhour.addEventListener("click", ()=> {
    menu_happyhour.style.display = "block"
    menu_breadfast.style.display = "none"
})

breakfastmenu.addEventListener("click", ()=>{
    menu_happyhour.style.display = "none"
    menu_breadfast.style.display = "block"
})