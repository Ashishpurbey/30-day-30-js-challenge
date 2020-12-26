function debounce(func, wait = 20, immediate = true) {
    console.log(wait);
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll("img");

function checkSlide(e){
    sliderImages.forEach(sliderImage =>{
        const sliderInAt=(window.scrollY+window.innerHeight)-(sliderImage.height)/2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = sliderInAt >sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY<imageBottom;
        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active');
        }
        else{
            sliderImage.classList.remove('active');
        }
    });
}
window.addEventListener('scroll',debounce(checkSlide,30));