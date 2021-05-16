// Elements
const keys = document.querySelectorAll('.buttons__key');

  const offTransition = el => {
    if (el.propertyName !== 'transform') return;
    el.target.classList.remove('playing');
  }

// A function to play a specific melody by pressing a specific button
  const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const dataKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    dataKey.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  
  // add event for buttons
  keys.forEach(key => key.addEventListener('transitionend', offTransition));
  window.addEventListener('keydown', playSound);
