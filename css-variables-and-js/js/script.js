// Elements and Variables
const inputs = document.querySelectorAll('input');

filterUpdate = (event) => {
    let unit = event.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + unit);
    
};

inputs.forEach(input => input.addEventListener('change', filterUpdate));
inputs.forEach(input => input.addEventListener('mousemove', filterUpdate));
