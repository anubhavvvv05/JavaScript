var img = document.querySelector('img')
var like = document.querySelector('#like')


img.addEventListener('click', ()=>{
    

    like.style.opacity = 0.9 
    like.style.transform= 'translate(-50% , -50%) scale(1.7) rotate(0deg)'
    like.style.transition = 'all cubic-bezier(.57,.91,.63,1.35) 0.3s'

    var int1 = setInterval(() => {
        like.style.transform= 'translate(-50% , -300%)  rotate(-75deg)'
    }, 1000);
     var int2 = setInterval(() => {
        like.style.transform= 'translate(-50% , -50%) scale(0)'
    }, 1200);

    setTimeout(()=>{
        clearInterval(int1)
        clearInterval(int2)
    },1200)
})