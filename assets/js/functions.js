(function ($) {
  'use strict';

  $(document).ready(function () {

  	// animate button
  	$('.ninja-btn').click( function() {
      $(this).toggleClass('active');
    });

  	// hide and show site-navigation by click
  	function menuSlide () {
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
  	}

    menuSlide ();

  }); //end ready

}(jQuery));