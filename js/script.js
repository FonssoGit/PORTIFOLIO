const btnMenu = document.querySelector('#btn_menu')
function toggleMenu(){
    const nav = document.querySelector('header')
    nav.classList.toggle('active')
}
btnMenu.addEventListener('click', toggleMenu)
