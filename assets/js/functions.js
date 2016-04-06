var slider = (function() {

  return {

    init: function() {

      var that = this;

      $('.control-button').on('click', function() {
        console.log('heloo');
        var $this = $(this),
        slides = $this.closest('.slider').find('.slider-item'),
        active = slides.filter('.active'),
        prevSlide = active.prev(),
        nextSlide = active.next(),
        first = slides.first(),
        last = slides.last();

        if ( $('.rightArrow') ) {

          that.moveSlide(nextSlide, 'forward');

        } else if ( $('.leftArrow') ) {

          that.moveSlide(prevSlide, 'backward');

        }


      });

    },

    moveSlide: function(slide, direction) {

      var
        slider = slide.closest('.slider'),
        slides = slider.find('.slider-item'),
        activeSlide = slides.filter('.active'),
        slideWidth = slides.width(),
        duration = 500,
        reqCssPositon = 0,
        reqSlideStrafe = 0;

        if (direction === 'forward') {

          reqCssPositon = slideWidth;
          reqSlideStrafe = -slideWidth;

        } else if (direction === 'backward') {

          reqCssPositon = -slideWidth;
          reqSlideStrafe = slideWidth;

        }

        slide.css({'left': reqCssPositon +'px'}).addClass('inslide');

        var movebleSlide = slides.filter('.inslide');

        activeSlide.animate({left: reqSlideStrafe}, duration);
        movebleSlide.animate({left: 0}, duration, function() {

          var $this = $(this);

          slide.css({'left': '0'}).removeClass('active');
          $this.toggleClass('inslide active');

        });

    }

  }

}());

$(document).ready(function() {

  if ( $('.slider').length ) {
    slider.init();
  }

});