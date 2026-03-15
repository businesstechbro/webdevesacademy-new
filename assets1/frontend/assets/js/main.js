  let rellax = new Rellax('.rellax');

  
 $(document).ready(function(){
    $('.nav-toggler').click(function(){
    $('.nav-toggler').toggleClass('toggle-nav');
    $('.menu-sec').toggleClass('toggle-nav');
    });
  });

   $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>0){
        $(".fixed-nav").addClass("addbg-nav");
      }
      else{
        $(".fixed-nav").removeClass("addbg-nav");
      }
    });
});

 $(document).ready(function(){
    $('.togller-sec').click(function(){
  $(".fixed-nav").addClass("addbg-nav1");
    });
  });

 $(document).ready(function(){
    $('.menu-body').click(function(){
  $(".fixed-nav").removeClass("addbg-nav1");
    });
  });



 $(document).ready(function(){
    $('.close-menu-nav').click(function(){
  $(".fixed-nav").removeClass("addbg-nav1");
    });
  });



 $('.hero-owl').owlCarousel({
      items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        nav: true,
        dots: true,
        navText: ['<span class="ti-angle-left">', '<span class="ti-angle-right">'],
        smartSpeed: 1000,
        // stagePadding: 0,
        autoplay: true,
        slideTransition: 'linear',
        // autoplayTimeout: 3000,
        autoplaySpeed: 2000,
        autoplayHoverPause: false
    });




   $('.ceo-owl').owlCarousel({
      items: 3,
        loop: true,
        margin: 0,
        autoplay: true,
        nav: false,
        dots: false,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        smartSpeed: 1000,
         responsive: {
              0: {
                items: 1,
            },
             780: {
                items: 2,
            },
            1300: {
                items: 3,
            }
        }
    });


   $('.visit-owl').owlCarousel({
      items: 4,
        loop: true,
        margin: 0,
        autoplay: true,
        nav: false,
        dots: false,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        smartSpeed: 1000,
         responsive: {
              0: {
                items: 1,
            },
               600: {
                items: 2,
            },
             1000: {
                items: 3,
            },
            1300: {
                items: 4,
            }
        }
    });




const showmenu = () => {
  document.getElementById('site-content').classList.add('toggle-menu')
  document.getElementById('menu-sec').classList.add('toggle-menu')
   document.getElementById('menu-body').classList.add('toggle-menu')
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};

const closemenu = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('site-content').classList.remove('toggle-menu');
  document.getElementById('menu-sec').classList.remove('toggle-menu')
  document.getElementById('menu-body').classList.remove('toggle-menu')
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});






$('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
          
          //chnage count up speed here
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });







    var myVideo = document.getElementById("main-a-video"); 

function playPause() { 
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
}
$(document).ready(function(){
    $('.video-toggler').click(function(){
      $(".video-control-btn").toggleClass("play-pause");
      $(".video-toggler").toggleClass("play-pause-txt");
    });
  });


$('#audio-control').click(function(){
    if( $("#main-a-video").prop('muted') ) {
          $("#main-a-video").prop('muted', false);
       $(".audio-control-icons").addClass("mute-unmute-vid");
    } else {
      $("#main-a-video").prop('muted', true);
      $(".audio-control-icons").removeClass("mute-unmute-vid");
    }
});






$(document).ready(function(){
    $('.filter-btn').click(function(){
      $(".sermonMain-sec-filter").toggleClass("togle-navBar-filter-nav");
      $(".eventsMain-sec-filter").toggleClass("togle-navBar-filter-nav");
    });
  });
$(document).ready(function(){
    $('.filter-nav-icon').click(function(){
      $(".sermonMain-sec-filter").removeClass("togle-navBar-filter-nav");
       $(".eventsMain-sec-filter").removeClass("togle-navBar-filter-nav");
    });
  });
