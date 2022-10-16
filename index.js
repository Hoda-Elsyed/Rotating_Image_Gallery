const prev = document.getElementById('prev')
const next = document.getElementById('next')

const spans = document.querySelectorAll('span');
const container = document.querySelector('.container');

let x =1;
let timer;
function upDateImg(){
    
    container.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer =setTimeout(() => {
        x=x+45;
        upDateImg()
    }, 3000);
}

prev.addEventListener('click', ()=>{
    x = x+45;
    clearTimeout(timer);
    upDateImg();
});
next.addEventListener('click', ()=>{
    x = x-45;
    clearTimeout(timer);
     upDateImg()
});
 
upDateImg();






