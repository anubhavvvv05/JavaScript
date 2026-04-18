var btn = document.querySelector('button')
var main = document.querySelector('main')
var box = document.querySelector('.box')
var inner = document.querySelector('.inner')
var h1 = document.querySelector('h1')
var h2 = document.querySelector('h2')


var grow = 0;
btn.addEventListener('click', () => {
    h2.innerHTML = "DOWNLOADING.."


    btn.style.pointerEvents = 'none'

    var num = 50 + Math.floor(Math.random()*100);
    var int = setInterval(function () {
        grow++;
        
        h1.innerHTML = grow + '%';
        inner.style.width = grow + '%';

    }, num)
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = "Downloaded"
        btn.style.opacity = 0.5
    
        h2.innerHTML =  `downloaded in ${num/10} seconds`;
    }, num*100)

})