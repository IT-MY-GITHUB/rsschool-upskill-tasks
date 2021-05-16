 // Elements
 const bgScreen = document.querySelector('.dynamic');
 const greeting = document.querySelector('.greeting');
 const name = document.querySelector('.name');
 const focus = document.querySelector('.focus');

 // Method for adjusting the time display
 Number.prototype.correctTime = function() {
     let num = this;
     if (num < 10) {
         return '0' + num;
     } else {
         return num;
     }
 }

 // Slightly correct the line when writing to the storage
 String.prototype.correctStr = function() {
     let str = this
     if (!str) return str
     str = str.trim()
 	// str = str.replace(/\s+/g, '').trim()
     str = str.replace(/"/g, '')
     if (str === '') return str
     return `${str[0].toUpperCase()}${str.slice(1,str.length)}`;
 }

 // ------ Here we create the clock ------ //   

 // Current time display function
 const currentTime = () => {
     let date = new Date();
     let _hour = date.getHours().correctTime();
     let _min = date.getMinutes().correctTime();
     let _sec = date.getSeconds().correctTime();

     document.querySelector('.dynamic__clock').innerText = `${_hour}:${_min}:${_sec}`;

     let repeat = setTimeout(() => currentTime(), 1000);

 }

 // Сhanging the background and greeting text
 const bgScreenAndGreet = () => {
     let now = new Date().getHours();

     if (now < 12 && now > 06) {
         bgScreen.style.backgroundImage = "url('./img/morning.jpg')"
         greeting.textContent = 'Good Morning, ';
     } else if (now < 18 && now > 12) {
         bgScreen.style.backgroundImage = "url('./img/afternoon.jpg')"
         greeting.textContent = 'Good Afternoon, ';
     } else if (now > 17 || now < 06) {
         bgScreen.style.backgroundImage = "url('./img/night.jpg')"
         greeting.textContent = 'Good Nigth, ';
     }

 }

 // Launching the function's
 currentTime()
 bgScreenAndGreet();

 //-- Functions to set the name and focus for today --//

 // Name setting
 const getName = () => name.textContent = localStorage.getItem('name') || '"Enter Name"';

 // Event when entering name
 name.addEventListener('keypress', el => {
     if (el.keyCode === 13) {
         localStorage.setItem('name', el.target.innerText.correctStr());
         getName();
         name.blur();
     }
 })

 // Erase text on focus or non-erase)
 name.addEventListener('focus', el => el.target.innerText = localStorage.getItem('name') || '""')


 // Focus setting
 const getFocus = () => focus.textContent = localStorage.getItem('focus') || '"Enter Focus"';

 // Event when entering focus
 focus.addEventListener('keypress', el => {
     if (el.keyCode === 13) {
         localStorage.setItem('focus', el.target.innerText);
         getFocus();
         focus.blur();
     }
 })

 // Erase text on focus or non-erase)
 focus.addEventListener('focus', el => el.target.innerText = localStorage.getItem('focus') || '""')


 // Launching the function's
 getName();
 getFocus();