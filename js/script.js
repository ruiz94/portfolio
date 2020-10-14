// $(function(){
//     var win = $(window)
//     var pos = 5 * 16
//     win.scroll(function(){
//         if(win.scrollTop() <= pos)
//             $('.portafolio .header').removeClass('fijar')
//         else
//             $(".portafolio .header").addClass('fijar')
//     })
// })
const navToggle = document.querySelector('.nav-toggle')
const nav__links = document.querySelectorAll('.nav__link')
// console.log(navToggle)

navToggle.addEventListener('click', function(){
    document.body.classList.toggle('nav-open')
})
nav__links.forEach(el => {
    el.addEventListener('click', function(){
        document.body.classList.remove('nav-open')
    })
})
console.log('Holi')
