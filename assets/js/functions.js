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

 
     
  }); //end ready


}(jQuery));