let img = document.getElementById('img');
const btn = document.getElementById('btn');
let colorIndex = 0;

const trafficLight = ( event ) => {
   turnOn[event.target.id](); 
}

const nextIndex = () => {
    
    if (colorIndex < 2) {
	colorIndex++
    }else {
	colorIndex = 0;
    }
}

const changeColor = () => {
    const colors = ['verde','amarelo','vermelho'];
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const turnOn = {
    'verde': () => img.src = './sources/verde.png',
    'vermelho': () => img.src = './sources/vermelho.png',
    'amarelo': () => img.src = './sources/amarelo.png',
    'automatico': () => setInterval(changeColor,1000)
}

btn.addEventListener('click', trafficLight);
