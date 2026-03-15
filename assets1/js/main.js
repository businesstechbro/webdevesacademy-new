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



$('.part-owl').owlCarousel({
      items: 7,
        loop: true,
        margin: 0,
        center: true,
        autoplay: true,
        nav: false,
        dots: false,
        navText: ['<span class="ti-angle-left">', '<span class="ti-angle-right">'],
          smartSpeed: 1000,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
         responsive: {
              0: {
                items: 1,
            },
             250: {
                items: 2,
            },
             500: {
                items: 3,
            },
             700: {
                items: 4,
            },
            1300: {
                items: 7,
            }
        }
    });


$('.feed-owl').owlCarousel({
      items: 3,
        loop: true,
        margin: 10,
        center: true,
        autoplay: true,
        nav: true,
        dots: false,
        navText: ['<span class="ti-angle-left">', '<span class="ti-angle-right">'],
          smartSpeed: 1000,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
         responsive: {
              0: {
                items: 1,
            },
             250: {
                items: 1,
            },
             500: {
                items: 1,
            },
             700: {
                items: 1,
            },

            800: {
                items: 2,
            },

            1000: {
                items: 3,
            }
        }
    });



     const show_contact_sec = () => {
  document.getElementById('contact_sec').classList.add('show-contact_sec')
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};
const close_contact_sec = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('contact_sec').classList.remove('show-contact_sec');
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});