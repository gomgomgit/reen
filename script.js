    var header = document.getElementById('header');
    var logo = document.getElementById('logoheader');
    var menuoverlay = document.querySelector('.menusoverlay');

    var burger = document.querySelector('.burger');
    var barBurger = document.querySelectorAll('.burger>span');

    var searchIcon = document.querySelector('#search-icon');

    var searchmobile = document.querySelector('.searchmobile');

    // function searchmobile() {
    //   if (window) {}
    // }

    window.onscroll = function() {scrollfunction()};

    function scrollfunction() {
      if (document.body.scrollTop > 51 || document.documentElement.scrollTop > 0) {
        header.style.padding = "0";
        logo.style.width = "80px";
        menuoverlay.style.marginTop = "20px";
        searchmobile.style.marginTop = "-40px";

      } else {
        header.style.padding = "40px 0";
        logo.style.width = "161px";
        menuoverlay.style.marginTop = "120px";
        searchmobile.style.marginTop = "50px";
      }
    }

    burger.onclick = ()=> {
      barBurger[0].classList.toggle('effect1');
      barBurger[1].classList.toggle('effect2');
      barBurger[2].classList.toggle('effect3');
    }

    // searchIcon.onclick = ()=> {

    // };


    $(document).on('ready', function(){

      $('.burger').click(function(){
        // $('.menuoverlay').css("width", "100%");
        $('.menuoverlay').toggle("slow","swing");
        $('.search-icon').toggleClass("z-1");
      });


      $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      // var mobile_slider = function() {
      //   var ww = document.body.clientWidth;
      //   if (ww > 768) {
      //     $(".lwsmimg").removeClass('autoplay');
      //   } else if(ww <= 768) {
      //     $(".lwsmimg").addClass('autoplay');
      //     $('.lwsmimg').slick({
      //       dots: true,
      //       infinite: true,
      //       centerMode: true,
      //       slidesToShow: 3,
      //       slidesToScroll: 1
      //     });
      //   }
      // };

      // $(window).resize(function(){
      //   mobile_slider();
      // });

      // $('.lwsmimg').slick({
      //   slidesToShow: 3,
      //   slidesToScroll: 1,
      //   autoplay: true,
      //   autoplaySpeed: 2000,
      // });

      // mobile_slider();


      // $('.slider-mobile').slick({
      //   dots: true,
      //   infinite: true,
      //   centerMode: true,
      //   slidesToShow: 3,
      //   slidesToScroll: 1
      // });

      $('.search-icon').click(function(){
        if ($(window).width() <= 767) {
          $('#searchoverlay').toggle("slow","swing");
          $('.burger').toggleClass("z-1");
        }
      });


    });


      

    $(window).on("resize", function() {
      if ($(window).width() <= 767) {
        $(".lwsmimg").addClass('slider-mobile');
        $('.slider-mobile').slick({
          dots: true,
          infinite: true,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1
        });
      } else {
        $(".lwsmimg").removeClass('slider-mobile');
      }
    });


    // var lebar = screen.width;
    // if (lebar <= 767) {
    //   $(".lwsmimg").addClass('slider-mobile');
    //   $('.slider-mobile').slick({
    //     dots: true,
    //     infinite: true,
    //     centerMode: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   });
    // } else {
    //   $(".lwsmimg").removeClass('slider-mobile');
    // }