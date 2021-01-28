let sliderPrev, sliderNext, numberSlides, slides;

// Установите обработчики события click на элементах «Влево» и «Вправо»
sliderPrev = document.querySelector('.slider__arrow_prev');
sliderNext = document.querySelector('.slider__arrow_next');
sliderPrev.addEventListener('click', imagePrev);
sliderNext.addEventListener('click', imageNext);

slides = document.querySelectorAll('.slider__item');
numberSlides = slides.length;
let currentSlide = 0;

// управление слайдером
function imagePrev() {
  for (currentSlide; currentSlide < numberSlides; ) {
    if(slides[currentSlide].classList.contains('slider__item_active'))
      slides[currentSlide].classList.remove('slider__item_active');
      if(currentSlide === 0)
        currentSlide = numberSlides - 1;
      else 
      currentSlide--;
      slides[currentSlide].classList.add('slider__item_active');
      return currentSlide;
    }
}

function imageNext() { 
  for (currentSlide; currentSlide < numberSlides; ) {
    if(slides[currentSlide].classList.contains('slider__item_active'))
      slides[currentSlide].classList.remove('slider__item_active');
      currentSlide = (currentSlide + 1) % numberSlides;  //increment the counter
      slides[currentSlide].classList.add('slider__item_active');
      return currentSlide;
    }
}