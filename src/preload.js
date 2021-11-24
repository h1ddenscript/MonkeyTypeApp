const electron = require('electron')
const config = require('./config')

window.addEventListener("load", function() {

    const body = document.body
    const content = document.getElementById('centerContent')

    const bg = window.getComputedStyle(body)
    
    config.set('theme.bgcolor', bg.backgroundColor)
    config.set('theme.caretcolor', bg.caretColor)

    //set drag
    body.style.setProperty('-webkit-app-region', 'drag')
    
    //remove drag from children 
    for (let i = 0; i < content.children.length; i++) {
        content.children[i].style.setProperty('-webkit-app-region', 'no-drag')
      }

    
});