var siteNav = (function() {

  return {

    siteNavInit: function() {

      var that = this;

      that.ninja();
      that.toggleNav();
      
    },

    ninja: function() {

      $('.ninja-btn').click( function() {
        $(this).toggleClass('active');
      });

    },

    toggleNav: function() {

      var $toggleNav = $('.toggle-nav'),
          $toggleBtn = $('.toggle-btn'); 

      if ($(window).width() <= 992) {
        $toggleNav.hide();
      }

      $toggleBtn.on('click', function(){
        $(this).next($toggleNav).slideToggle();
      });

      $(window).resize(function() {
        if ($(window).width() <= 992) {
          $toggleNav.hide();
          $('.ninja-btn').removeClass('active');

        } else if ($(window).width() > 992) {
          $toggleNav.show();
          $('.ninja-btn').removeClass('active');
        }


      });

    }

  }

}());


var slider = (function() {

  var
    flag = true,
    timerDuration = 4000,
    timerAuto = 0;

  return {

    init: function() {

      var that = this;

      that.createDots();

      // switch on autoswitch
      that.autoSwitch();

      $('.control-button').on('click', function() {

        var $this = $(this),
        slides = $this.closest('.slider').find('.slider-item'),
        active = slides.filter('.active'),
        prevSlide = active.prev(),
        nextSlide = active.next(),
        first = slides.first(),
        last = slides.last();

        if ( $this.hasClass('rightArrow') ) {

          if (nextSlide.length) {

            that.moveSlide(nextSlide, 'forward');  

          } else {

              that.moveSlide(first, 'forward');

          }

        } else {

          if (prevSlide.length) {
            that.moveSlide(prevSlide, 'backward');  
          } else {
              that.moveSlide(last, 'backward');
          }

        }

        that.clearTimer();

      });

      $('.buttons').on('click', function() {

        var
          $this = $(this),
          dots = $this.closest('.bottom-buttons').find('.buttons'),
          activeDot = dots.filter('.active'),
          dot = $this,
          direction = (activeDot.index() < dot.index()) ? 'forward' : 'backward',
          reqSlide = $this.closest('.slider').find('.slider-item').eq(dot.index());

          if ( !$this.hasClass('active') ) {
            that.moveSlide(reqSlide, direction);
          }


          that.clearTimer()
      });

    },

    moveSlide: function(slide, direction) {

      var
      that = this,
      slider = slide.closest('.slider'),
      slides = slider.find('.slider-item'),
      activeSlide = slides.filter('.active'),
      slideWidth = slides.width(),
      duration = 800,
      reqCssPositon = 0,
      reqSlideStrafe = 0;

      if (flag) {

        flag = false;

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

          slides.css({'left': '0'}).removeClass('active');
          $this.toggleClass('inslide active');

          that.setActiveDot(slider.find('.bottom-buttons'));

          flag = true;

        });

      }

    },

    createDots: function() {

      var 
        that = this,
        slider = $('.slider'),
        dotMarkUp = '<li class="buttons"></li>';

        slider.each(function() {
          var
            $this = $(this),
            slides = $this.find('.slider-item'),
            bottomButtons = $this.find('.bottom-buttons');

            for (var i = 0; i < slides.length; i++) {
              bottomButtons.append(dotMarkUp);  
            } 

            that.setActiveDot(bottomButtons);
        });

    },

    setActiveDot: function(bottomButtons) {
      var
        ulSlides = $('.slider'),
        slides = bottomButtons.closest(ulSlides).find('.slider-item');

        bottomButtons
          .find( $('.buttons') )
          .eq( slides.filter('.active').index() )
          .addClass('active')
          .siblings()
          .removeClass('active');
    },

    autoSwitch: function() {

      var
      that = this;

      timerAuto = window.setInterval(function() {

        var
        slides = $('.slides .slider-item'),
        active = slides.filter('.active'),
        nextSlide = active.next(),
        first = slides.first();

        if (nextSlide.length) {

          that.moveSlide(nextSlide, 'forward');

        } else {

          that.moveSlide(first, 'forward');

        }

      }, timerDuration);

    },

    clearTimer: function() {

      var that = this;
      
        clearInterval(timerAuto); 
        that.autoSwitch();
    }


  }


}());


var ajax = (function() {

  var page = 0;

  return {
    load: function() {

      var
        that = this,
        btnLoad = $('.load').find('.btn-load');

        btnLoad.on('click', function() {
          var url = "content" +page+ ".html";

          $.ajax({
            url: url,

            success: function(response) {
              that.append(response);
              page++;
            },

            error: function() {
              alert("content can't be downloaded");
            }

          });
        });
    },

    append: function(response) {

      var 
        posts = $('.posts').last();

        $(response).appendTo(posts);
    } 
  }

}());

$(document).ready(function() {

  siteNav.siteNavInit();

  slider.init();

  ajax.load();

});






