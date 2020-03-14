let windowY = window.screen.height;
const body = document.querySelector('body')
const menu = body.querySelector('.menu')

function fixMenuBgHeight(){
    menu.style.height = `${body.scrollHeight}px`;
}

fixMenuBgHeight()

console.log(body.scrollHeight)