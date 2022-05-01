

var typewriter = $('.typewriter');

  if(typewriter.length) {

    function initTypewriter() {

     var typed = new typed(".typewriter", {
        strings: $(".typewriter").attr("data-typewriter").split("|").map(function(e) {
          return e
        }),
        typeSpeed: 80,
        backSpeed: 75,
        startDelay: 1000,
        backDelay: 2000,
        loop: !0,
        loopcount: false,
        showCursor: false,
        callback: function(e){ } // call function after typing is done
        });
    };

    initTypewriter();

  };


  // Smooth scrolling on the navbar links
$(".navbar-nav a").on('click', function (event) {
   if (this.hash !== "") {
     event.preventDefault();

     $('html, body').animate({
       scrollTop: $(this.hash).offset().top - 45
     }, 1500, 'easeInOutExpo');

     if ($(this).parents('.navbar-nav').length) {
       $('.navbar-nav .active').remoteClass('active');
       $(this).closest('a').addClass('active');
     }
   }
});


// Portfolio isotope and filter
var portfolioIsotope = $('.portfolio-container').isotope({
  itemSelector: '.portfolio-item', 
  layoutMode: 'fitRows'
});
$('#portfolio-flters li').on('click', function (){
    $("#portfolio-flters li").removeClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({filter: $(this).data('filter')});
});



// skill bar

$('.skill').waypoint(function (){
  $('.progress .progress-bar').each(function (){
    $(this).css("width", $(this).attr("aria-valuenow") + '%');
  });
}, {offset: '80%'});




  //Navbar on scrolling

$(windows).scroll(function (){
  if ($(this).scrollTop() > 200){
    $('.navbar').fadeIn('slow').css('display', 'flex');
  }else{
    $('.navbar').fadeOut('slow').css('display', 'none');
  }
});
