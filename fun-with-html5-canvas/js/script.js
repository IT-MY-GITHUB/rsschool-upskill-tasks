
// This variables
const canvas = document.querySelector('.draw');
const contextModel = canvas.getContext('2d');
const inputs = document.querySelectorAll('input')
const canvasArea = document.querySelector('.canvas');
const button = document.querySelector('button');

// This settings for canvas
canvas.width = canvasArea.clientWidth;
canvas.height = canvasArea.clientHeight;
contextModel.strokeStyle = 'rebeccapurple';
contextModel.lineJoin = 'round';
contextModel.lineCap = 'round';

// Flag drawind on\off
let flagDrawing = false;

// last point X\Y when is Drawing
let finishX = 0;
let finishY = 0;

// This update Size and Color
inputs.forEach(input => input.addEventListener('change', function(e) {

    switch (e.target.name) {
        case 'size':
            contextModel.lineWidth = e.target.value;
            break;
        case 'base':
            contextModel.strokeStyle = `${e.target.value}`;
            break;
    }
}));

// Clear canvas Area
button.addEventListener('click', () => contextModel.clearRect(0, 0, canvas.width, canvas.height))

// Fn foe drawing
const draw = (e) => {
    if (!flagDrawing) return;

    contextModel.beginPath();
    // start drawing points
    contextModel.moveTo(finishX, finishY);
    // end drawing points
    contextModel.lineTo(e.offsetX, e.offsetY);

    contextModel.stroke();

    finishX = e.offsetX;
    finishY = e.offsetY;

}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    flagDrawing = true
    finishX = e.offsetX;
    finishY = e.offsetY;

})
canvas.addEventListener('mouseup', () => flagDrawing = false)
canvas.addEventListener('mouseout', () => flagDrawing = false)