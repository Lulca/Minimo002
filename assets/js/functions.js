(function ($) {
	'use strict';

	$(document).ready(function () {

	(function (){
  	// animate button
  	$('.ninja-btn').click( function() {
  		$(this).toggleClass('active');
  	});

  	// hide and show site-navigation by click
  	(function () {
  		var $toggleNav = $('.toggle-nav');
  		var $toggleBtn = $('.toggle-btn'); 

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
  	}());

  }());

  // fix problem with rasponsive slider
		(function () {
			var widthOfContainer,
			widthOfSlides,
      slider = $('.slider'),
			slides = slider.find('.slides'),
			slideLi = slides.find('li'),
			slideImg = slideLi.find('img');

			var lengthOfSlides = slideLi.length;

  		// function for initialize variables
  		function reloadVar () {
  			widthOfContainer = $('.container').width();
  			widthOfSlides = widthOfContainer * lengthOfSlides;
  		};

  		reloadVar ();

  		function setCssLi () {
  			slideLi.css({'width': widthOfContainer + 'px'});
  			slides.css({'width': widthOfSlides + 'px'});
  		};

  		setCssLi ();

  		// renew variable by resizing

  		$(window).resize(function() {
  			reloadVar ();
  			setCssLi ();

  		});

      // append buttons in ul.bottom-buttons
      (function () {
        var bottomButtons = $('.bottom-buttons');

        for ( var i = 1; i <= lengthOfSlides; i++) {

          $('<li class="buttons button' +i+ '"></li>').appendTo(bottomButtons);
        }

      }());

      // slider behavior
      (function () {
        var counterOfClick = 0;

        // arrow click
        slider.find('.leftArrow').on('click', function () {
         counterOfClick--;

         if (counterOfClick < 0) {
          counterOfClick = lengthOfSlides-1;
          slides.animate({
            'margin-left': -widthOfContainer*(lengthOfSlides-1)+'px' 
          }, 1000);
        } else{
          slides.animate({
            'margin-left': '+='+widthOfContainer+ 'px' 
          }, 1000);

        }


      });

        slider.find('.rightArrow').on('click', function () {
         counterOfClick++;

         if (counterOfClick >= lengthOfSlides) {
          counterOfClick = 0;
          slides.animate({
            'margin-left': '0px' 
          }, 1000);
        } else{
          slides.animate({
            'margin-left': '-='+widthOfContainer+ 'px' 
          }, 1000);

        }


      });



      }());

  	}());


  }); //end ready

}(jQuery));