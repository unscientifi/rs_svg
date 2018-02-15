(() => {
  console.log('WHATS UP!');
//variables always go at hte top
var iconSet = document.querySelectorAll('svg');


//fuctions here
function logThisIcon() {
console.log('clicked on this icon:', this.id);


//change opacity
this.style.opacity = 0.5;
}
//event handling goes at the bottom
iconSet.forEach(icon => icon.addEventListener('click',logThisIcon));
})();
