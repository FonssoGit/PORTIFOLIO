//Click do menu
const btnMenu = document.querySelector('#btn_menu')
function toggleMenu(){
    const nav = document.querySelector('header')
    nav.classList.toggle('active')

}
btnMenu.addEventListener('click', toggleMenu)


//Variareis dos cards das skils
let skils_html = document.querySelector('.skils_html')
let skils_css = document.querySelector('.skils_css')
let skils_js = document.querySelector('.skils_js')
let skils_mysql = document.querySelector('.skils_mysql')


//Btns dos card das skils
let btn_html = document.querySelector('#btn_html')
let btn_css = document.querySelector('#btn_css')
let btn_js = document.querySelector('#btn_js')
let btn_mysql = document.querySelector('#btn_mysql')


//Eveventos dos btns das skils
btn_html.addEventListener('click',()=>{
    skils_css.style.display = 'none'
    skils_js.style.display = 'none'
    skils_mysql.style.display = 'none'
    skils_html.style.display = 'block'
})
btn_css.addEventListener('click',()=>{
    skils_html.style.display = 'none'
    skils_js.style.display = 'none'
    skils_mysql.style.display = 'none'
    skils_css.style.display = 'block'
})
btn_js.addEventListener('click',()=>{
    skils_html.style.display = 'none'
    skils_css.style.display = 'none'
    skils_mysql.style.display = 'none'
    skils_js.style.display = 'block'
})
btn_mysql.addEventListener('click',()=>{
    skils_html.style.display = 'none'
    skils_css.style.display = 'none'
    skils_js.style.display = 'none'
    skils_mysql.style.display = 'block'
})

let textAre = document.querySelector('textarea')
textAre.addEventListener('click',()=>{
  
})

