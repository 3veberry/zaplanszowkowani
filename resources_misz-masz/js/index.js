let bounce = document.getElementsByClassName('float-circle')[0];
const ballContainer = document.getElementsByClassName('ball-container')[0]

const up = () => {
    bounce.style.bottom = '0';
}
const down = () => {
    bounce.style.bottom = '-70%';
}

ballContainer.addEventListener('mousedown', up);
ballContainer.addEventListener('mouseup', down);