var box = document.querySelector('#box');
var but = document.querySelector('button');

but.addEventListener('click', function(){
   var c1 = Math.floor(Math.random()*256)
   var c2 = Math.floor(Math.random()*256)
   var c3 = Math.floor(Math.random()*256)
   // box.style.backgroundColor = rgb(c1,c2,c3);
  
   box.style.backgroundColor = (`rgb(${c1},${c2},${c3})`)

   console.log(`color code is rgb(${c1},${c2},${c3})`)
})
