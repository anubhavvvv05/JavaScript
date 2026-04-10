var h1 = document.querySelector('h1');
var but1 = document.getElementById('increase');
var but2 = document.getElementById('decrease');

var a=0;
but1.addEventListener('click' , function(){
    a++;
    h1.innerHTML= (a)
})
but2.addEventListener('click' , function(){
    a--;
    h1.innerHTML= (a)
})
