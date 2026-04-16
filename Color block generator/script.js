// var div = document.createElement('div');
var main = document.querySelector('main')
var btn= document.querySelector('button')

btn.addEventListener('click', function(){
  var div = document.createElement('div');

  var x = Math.random()*100;
  var y = Math.random()*100;
  var r = Math.random()*360;
  main.appendChild(div)
  div.style.height = Math.random()*200+ 'px';
  div.style.width = Math.random()*200+ 'px';
  div.style.position = 'absolute';
  div.style.left = x + '%';
  div.style.top = y + '%';
  div.style.rotate = r+'deg';
  
  var c1 = Math.floor(Math.random()*256);
  var c2 = Math.floor(Math.random()*256);
  var c3 = Math.floor(Math.random()*256);
  div.style.backgroundColor = (`rgb(${c1},${c2},${c3})`)
  
})