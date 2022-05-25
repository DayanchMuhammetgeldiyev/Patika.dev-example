// Day today
const clock = document.getElementById('myClock'); 
clock.innerHTML = prompt('What is your name?');
clock.innerHTML = new Date().toLocaleTimeString();
function myFunction() {
    clock.innerHTML = new Date().toLocaleTimeString();
}
setInterval(myFunction, 1000);
