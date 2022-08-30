const mario = window.document.querySelector('.mario');
const pipe = window.document.querySelector('.pipe');

const jump = ()=>{
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipeposition = pipe.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipeposition <= 110 && pipeposition > 5 && marioposition < 70){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';

        clearInterval(loop);
    }


}, 10)

window.document.addEventListener('keydown', jump);