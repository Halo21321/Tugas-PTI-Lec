const name1=document.getElementById('name')
const form=document.getElementById('form1')

form.addEventListener('submit', e=>
{
    let messages=[]
    if (name1.value==''||name1.value==NULL){//Jika nama tidak dimasukkan
        messages.push('Name is required')//Memunculkan sebuah pesan
    }
    e.preventDefault()
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

var healthLevel = 100;
var healthBar = document.getElementById("health-level");

document.getElementById("health-button").addEventListener("click", function() {
  healthLevel += 10;
  healthBar.style.width = healthLevel + "%";
});

setInterval(function() {
  healthLevel -= 5;
  if (healthLevel < 0) {
    healthLevel = 0;
  }
  healthBar.style.width = healthLevel + "%";
}, 10);

function displayTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = document.getElementById('session');

  if(hrs >= 12){
      session.innerHTML = 'PM';
  }else{
      session.innerHTML = 'AM';
  }

  if(hrs > 12){
      hrs = hrs - 12;
  }

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
  document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);
