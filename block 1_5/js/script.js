
if (window.innerWidth >= 480){ 
  var main = document.querySelector('.swiper');
  main.classList.remove('swiper');
} else {
  swiperFunction();
};

if (window.innerWidth <= 480){ 
  var on = document.querySelector('.on');
  on.classList.add('swiper');
  swiperFunction()
  };

function swiperFunction() {
  const swiper = new Swiper('.swiper', {
     slidesPerView: 1.6,
      spaceBetween: 10,
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },    
      }
      
  })
};
// ______________________________________________________

let hidden = document.querySelector('.hidden');
let button = document.querySelector('.button');
let openBlock = document.querySelector('.open__block');
let btn = document.querySelector('.btn');


btn.addEventListener('click', function(evt){
  evt.preventDefault();
  hidden.classList.toggle('open__block');
  btn.classList.toggle('button');    
});
  
