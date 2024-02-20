document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.header__nav__menu')
    const nav = document.querySelector('header nav')
    const navClose = document.querySelector('.nav__close')

    menu.addEventListener('click', () => {
        nav.style.display = "block"
    })

    navClose.addEventListener('click', () => {
        nav.style.display = "none"
    })

    const draggableUlEl = document.querySelector('.draggable-div')
    let isDown = false
    let startX
    let scrollLeft

    draggableUlEl.addEventListener('mousedown', function(e){
        isDown = true
        startX = e.pageX - draggableUlEl.offsetLeft
        scrollLeft = draggableUlEl.scrollLeft
    })

    draggableUlEl.addEventListener('mouseleave', function(e){
        isDown = false
    })

    draggableUlEl.addEventListener('mouseup', function(e){
        isDown = false
    })

    draggableUlEl.addEventListener('mousemove', function(e){
        
        if(!isDown) return
        e.preventDefault()

        const x = e.pageX - draggableUlEl.offsetLeft
        const walk = (x - startX) * 3
        draggableUlEl.scrollLeft = scrollLeft - walk

    })

    const leftBasicEl = document.querySelector('.basic-dept')
    
});
