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
			slides = $('.slides'),
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

        $('<li class="button1"></li>').appendTo(bottomButtons);

      }());

  	}());


  }); //end ready

}(jQuery));