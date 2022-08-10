function initCarousel() {
  let carousel_inner = document.querySelector('.carousel__inner')
  let btn_right = document.querySelector('.carousel__arrow_right');
  let btn_left = document.querySelector('.carousel__arrow_left');

  let images = document.querySelectorAll('.carousel__slide');
  btn_left.style.display = 'none'

  let width = carousel_inner.offsetWidth;
  let transition = 0;
  let one_width_image = width
  

  let i = 0;

  btn_right.addEventListener("click", function () {
    ++i 
    transition -= one_width_image
    carousel_inner.style.transform = `translateX(${transition}px)`
   
    if (i === images.length - 1) {
      btn_right.style.display = 'none'
    }
    if (i !== 0) {
      btn_left.style.display = 'block'
    }

  })

  btn_left.addEventListener("click", function () {
    --i
    transition += one_width_image
    carousel_inner.style.transform = `translateX(${transition}px)`
    

    if (i !== images.length - 1) {
      btn_right.style.display = 'block';
    }
    if (i === 0) {
      btn_left.style.display = 'none'
    }
  })
}
