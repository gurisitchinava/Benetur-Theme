// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

  (function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
    });

    $('.send-msg').on('click',function(){

      var email = $('.cemail').val(),
          subj = $('.csubj').val(),
          msg = $('.cmsg').val();

      $.post( "",{ email: email,contact: true,subj:subj,msg:msg},function( data ) {
        var response = JSON.parse(data);
         if (response.status === 'OK') {
            $('.messages').text(response.message).fadeIn();
         }else if(response.status === 'EMPTY'){
            $('.messages').text(response.message).fadeIn();
         }else if(response.status === 'ERROR'){
            $('.messages').text(response.message).fadeIn();
         }else{
            $('.messages').text(response.message).fadeIn();
         }
      });

      return false;
    });


    $('.pack').on('click',function(){
      var target = $(this).attr('data-target');
      $('.pack').removeClass('active-pack');
      $(this).addClass('active-pack');
      $('.pack1').hide();
      $('.pack2').hide();
      $('.pack3').hide();
      $('.'+target).fadeIn();
    });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
      var navHeight = $(window).height() - 100;
      if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on');
      } else {
        $('.navbar-default').removeClass('on');
      }
    });

    $('body').scrollspy({ 
      target: '.navbar-default',
      offset: 80
    })

    $(document).ready(function() {
      $('#tf-home').height($(window).height());

      
      $("#team").owlCarousel({

  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
          [0, 1],
          [450, 2],
          [600, 2],
          [700, 2],
          [1000, 4],
          [1200, 4],
          [1400, 4],
          [1600, 4]
          ],
        });

      $("#clients").owlCarousel({

  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
          [0, 1],
          [450, 2],
          [600, 2],
          [700, 2],
          [1000, 4],
          [1200, 5],
          [1400, 5],
          [1600, 5]
          ],
        });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
      });

    });

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
      var $container = $('#lightbox');
      $container.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      $('.cat a').click(function() {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });

    });



  }());


}
main();