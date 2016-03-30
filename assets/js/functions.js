(function ($) {


	'use strict';
    // begin ready
	$(document).ready(function () {

    // drive nav
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

  	}()); // hide and show site-navigation by click

  }()); // drive nav

   // fefresh widths of .slider adn li in case img > 3 (defoul number)
   (function () {

    var $slider = $('.slider'),
        $slides = $slider.find('.slides'),
        $li = $slides.find('li'),
        liNumber = $li.length;

        if (liNumber != 3) {
          $slides.css({'width': liNumber*100 + '%'});
          $li.css({'width': 100/liNumber + '%'});
        }

        // drive slider work
        (function () {

        }()); // drive slider work

   }()); // fefresh number of images of slider


  }); //end ready


}(jQuery));