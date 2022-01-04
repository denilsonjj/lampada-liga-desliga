const turnOn= document.getElementById ('turnOn');
const turnoff=document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') >-1
}


function lampOn () {
   if( !isLampBroken () ) { 

    lamp.src = './img/lampada ligada.jpg';
     }
}

function lampOff() {
    if (!isLampBroken () ) {
    lamp.src= './img/lampada.jpg'
    }
}

function lampBroken () {
    lamp.src = './img/lampada quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnoff.addEventListener ('click', lampOff)

lamp.addEventListener ('mouseover', lampOn)//passa\ndo o mouse por cima a lampada liga
lamp.addEventListener('mouseleave', lampOff) 
lamp.addEventListener('dblclick', lampBroken) //clicando duas vezes a lampada quebra

