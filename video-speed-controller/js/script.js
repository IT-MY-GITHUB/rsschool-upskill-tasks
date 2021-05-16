// Elements
const speed = document.querySelector('.speed')
const speedControl = document.querySelector('.speed__control')
const video = document.querySelector('.video')


function setupSpeed(event) {
    const mouseY = event.pageY - this.offsetTop;
    const speedRate = mouseY/100;
    speedControl.textContent = speedRate + 'x';
    const height = (speedRate * 20) + (speedRate * 5) + '%';
    speedControl.style.height = height;
    video.playbackRate = speedRate;
    
}

speed.addEventListener('mousemove', setupSpeed)