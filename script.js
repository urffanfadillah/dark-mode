const nodeButton    = document.querySelector('.button');
const nodeBody      = document.body;
const nodeTitle     = document.querySelector('.title');

let title           = "Try darkmode";

nodeTitle.innerHTML = title;

nodeButton.addEventListener('click', function(){
    nodeBody.classList.toggle('darkMode');
    if(nodeBody.className === 'darkMode') {
        nodeTitle.innerHTML     = "Return to lightmode";
    } else {
        nodeTitle.innerHTML     = title;
    }
})