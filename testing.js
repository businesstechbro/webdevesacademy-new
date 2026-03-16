const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide() {

slides.forEach((slide)=>{
slide.classList.remove("active")
})

slides[current].classList.add("active")

current++

if(current >= slides.length){
current = 0
}

}

setInterval(showSlide,4000)

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = +counter.getAttribute("data-target");

let count = 0;

const updateCounter = () => {

const increment = target / 200;

count += increment;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

}

updateCounter();

});