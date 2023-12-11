const turnOn = document.getElementById('turnOn');
const turnOf = document.getElementById('turnOff');
let lamp = document.getElementById('lamp');

function lampIsBreack() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!lampIsBreack()) {
	lamp.src = './sources/ligada.jpg';
    }
}

function lampOf() {
    if (!lampIsBreack()) {
	lamp.src = './sources/desligada.jpg';
    }
}

function lampBreak() {
    lamp.src = './sources/quebrada.jpg';
}

turnOn.addEventListener('click',lampOn);
lamp.addEventListener('mouseover', lampOn);

turnOf.addEventListener('click', lampOf);
lamp.addEventListener('mouseleave', lampOf);

lamp.addEventListener('dblclick', lampBreak);
