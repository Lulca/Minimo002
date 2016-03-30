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

 
      var $slider = $('.slider'),
      $slides = $slider.find('.slides'),
      $li = $slides.find('li'),
      liNumber = $li.length,
      sliderWidth = $('.slider').width(),
      $bottomButtons = $('.bottom-buttons');

    
    if (liNumber != 3) {
      $slides.css({'width': liNumber*100 + '%'});
      $li.css({'width': 100/liNumber + '%'});
    }

            // drive slider work
            (function () {

              // set data-pos in .slides li and in ul.buttom-buttons li

              for ( var i = 1; i <= liNumber; i++) {
                  if (i === 1) {

                    $('<li class="buttons active button' +i+ '"></li>').appendTo($bottomButtons);

                  } else {

                    $('<li class="buttons button' +i+ '"></li>').appendTo($bottomButtons);

                  }
                }

                function setDataPosAttd(){

                  var positionOfSlides = 0,
                  sliderWidth = $('.slider').width();

                  for (var i = 1; i <= liNumber; i++){

                    $bottomButtons.find('li').eq(i-1).attr('data-pos', positionOfSlides);
                //set data-pos fo li element of slider
                $li.eq(i-1).attr('data-pos', positionOfSlides);
                positionOfSlides += sliderWidth;

              }
            }
              
              setDataPosAttd();

              $(window).resize(function(){
                setDataPosAttd();
              });

                  var $buttonsLi = $bottomButtons.find('li');

                  // change slides by click on buttons
                  $buttonsLi.on('click', function () {
                    $slider.find('.active').removeClass('active');
                    var attribute = $(this).attr('data-pos');
                    $('[data-pos="'+attribute+'"]').addClass('active');
                    $slides.css({'margin-left':-attribute+'px'});
                  });

                  // change slides by click on arrows
                  var $leftArrow = $('.leftArrow'),
                      $rightArrow = $('.rightArrow');

                      $rightArrow.on('click', function () {

                        var attribute = $slides.find('.active').next().attr('data-pos');
                        if (attribute === undefined) {
                          attribute = 0;
                        }
                        $slider.find('.active').removeClass('active');
                        $('[data-pos="'+attribute+'"]').addClass('active');

                        $slides.css({'margin-left':-attribute+'px'});
                      });

                      $leftArrow.on('click', function () {

                        var attribute = $slides.find('.active').prev().attr('data-pos');
                        if (attribute === undefined) {
                          attribute = $('.slider').width()*(liNumber-1);
                        }
                        $slider.find('.active').removeClass('active');
                        $('[data-pos="'+attribute+'"]').addClass('active');

                        $slides.css({'margin-left':-attribute+'px'});
                      });




            }()); // drive slider work


  }); //end ready


}(jQuery));