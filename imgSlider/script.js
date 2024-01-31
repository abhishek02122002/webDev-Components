let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');
next.addEventListener('click',function(){
     let slides = document.querySelectorAll('.slides');
     slider.appendChild(slides[0]);
},false);
prev.addEventListener('click',(e)=>{
     let slides = document.querySelectorAll(".slides");
     slider.prepend(slides[slides.length - 1]);
},false);