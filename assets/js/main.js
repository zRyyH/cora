//phone-mask

$(document).ready(function(){
  $('#phone').mask('(00) 000000000');
});

//menu-overlay

$(document).ready(function(){
    $(".btn-menu").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".btn-menu").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});

//paroller

$('.parallax-1').paroller({
//factor: 0.4,
factorSm: 0,
factorXs: 0,
factorMd: 0,
factorLg: 0.4,
factorXl: 0.4,
type: 'foreground',
direction: 'vertical',
});

$('.parallax-2').paroller({
//factor: 0.2,
factorSm: 0,
factorXs: 0,
factorMd: 0,
factorLg: 0.2,
factorXl: 0.2,
type: 'background',
direction: 'vertical',
});

$('.parallax-3').paroller({
//factor: -0.05,
factorSm: 0,
factorXs: 0,
factorMd: 0,
factorLg: -0.05,
factorXl: -0.05,
type: 'foreground',
direction: 'vertical',
});

//smooth-scroll

$(document).ready(function(){
  $(".scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});