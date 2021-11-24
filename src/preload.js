const electron = require('electron')


window.addEventListener("DOMContentLoaded", function() {

    const body = document.body
    const content = document.getElementById('centerContent')


    //set drag
    body.style.setProperty('-webkit-app-region', 'drag')
    
    //remove drag from children 
    for (let i = 0; i < content.children.length; i++) {
        content.children[i].style.setProperty('-webkit-app-region', 'no-drag')
      }

    
});