$(document).ready(function() {



  /* When user clicks the Icon */
  $('.nav-toggle').click(function() {
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('open');
    $('#nav').toggleClass('no-pointer');
    $('.btn-book-now').toggleClass('z-index');

    event.preventDefault();
  });
  /* When user clicks a link */
  $('.header-nav li a').click(function() {
    $('.nav-toggle').toggleClass('active');
    $('.header-nav').toggleClass('open');
    $('#nav').toggleClass('no-pointer');
    setTimeout(function() {
      $('.btn-book-now').toggleClass('z-index');
    }, 3000);

  });

  /***************** Header BG Scroll ******************/

  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $('section.navigation').addClass('fixed');
        $('header').css({
          "border-bottom": "none",
          "padding": "35px 0"
        });
        $('header .deliver').css({
          "top": "26px",
        });
        $('header .navicon').css({
          "top": "34px",
        });
        $('header .logo').css('top', '20px ');
        $('.scroll-up').fadeIn('slow/400/fast', function() {

        });
      } else {
        $('section.navigation').removeClass('fixed');
        $('header').css({

        });
        $('header .s').css({
          "top": "41px",
        });
        $('header .navicon').css({
          "top": "48px",
        });

        $('.scroll-up').fadeOut('slow/400/fast', function() {

        });
      }
    });
  });




  /***************** Smooth Scrolling ******************/

  $(function() {
    //^ denotes beginning with
    $('a[href]:not([href^="mailto\\:"], [href$="\\#"])').click(function() {
      console.log(location.pathname);
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        console.log(target);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 100
          }, 1000);
          return false;
        }
      }
    });

  });

});

/*pointer option*/
