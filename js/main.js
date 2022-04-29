var typewriter = $('.typewriter');

  if(typewriter.length) {

    function initTypewriter() {

     var typed = new Typed(".typewriter", {
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