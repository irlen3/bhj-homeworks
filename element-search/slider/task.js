let sliderPrev, sliderNext, numberSlides, slides, mas;

// Установите обработчики события click на элементах «Влево» и «Вправо»
sliderPrev = document.querySelector('.slider__arrow_prev');
sliderNext = document.querySelector('.slider__arrow_next');
sliderPrev.addEventListener('click', imagePrev);
sliderNext.addEventListener('click', imageNext);

slides = document.querySelectorAll('.slider__item');
mas = Array.from(slides);

numberSlides = slides.length;
let index = 0;

// управление слайдером
function imagePrev(event) {
  index = mas.findIndex(element => element.classList.contains('slider__item_active'));
  slides[index].classList.remove('slider__item_active');
  index = (index === 0) ? (numberSlides - 1) : index - 1;
  slides[index].classList.add('slider__item_active');
}

function imageNext() {
  index = mas.findIndex(element => element.classList.contains('slider__item_active'));
  slides[index].classList.remove('slider__item_active');
  index = (index + 1) % numberSlides;  //increment the counter
  slides[index].classList.add('slider__item_active');
}