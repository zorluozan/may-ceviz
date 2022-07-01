var $picSlider = $(".js-pic-slider");
var $blogSlider = $(".js-blog-slider");
var $productsSlider = $(".js-product-slider");
var $introSlider = $(".js-intro-slider");

var picSliderOptions = {
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
      },
    },
  ],
};

$(function () {
  $picSlider.slick(picSliderOptions);

  $blogSlider.slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1.25,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $productsSlider.slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1.25,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    prevArrow:
      '<button class="slick-arrow slick-prev"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 2.26318L5 8.26318L11 14.2632" stroke="#253146" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2.26318L11 8.26318L5 14.2632" stroke="#253146" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $introSlider.slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});

$(".js-mobile-menu-btn").click(function () {
  $(".js-mobile-menu-header").toggleClass("active");
  $(".js-mobile-menu-main").toggleClass("show");
});

$(".js-intro-close").click(function () {
  $(".intro").css("visibility", "hidden");
});

$(".js-product-dropdown").click(function () {
  $(".js-desktop-navbar").toggleClass("menu--light");
  $(".js-desktop-dropdown").toggleClass("show");
  $(".js-desktop-dropdown").hasClass("show")
    ? $(".js-product-dropdown>.downarrow").css("transform", "rotate(180deg)")
    : $(".js-product-dropdown>.downarrow").css("transform", "rotate(0)");
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $(".js-mobile-menu-header").addClass("menu--scrolled");
  } else {
    $(".js-mobile-menu-header").removeClass("menu--scrolled");
  }

  if ($(window).width() >= 992 && scroll >= 80) {
    $(".js-desktop-navbar").addClass("menu--scrolled");
  } else {
    $(".js-desktop-navbar").removeClass("menu--scrolled");
  }
});

$(document).on("click", ".js-discover-link", function () {
  if ($(window).width() < 992) {
    $("html,body").animate(
      {
        scrollTop: $(this).parents("section").next().offset().top - 80,
      },
      "slow"
    );
  } else {
    $("html,body").animate(
      {
        scrollTop: $(this).parents("section").next().offset().top - 80,
      },
      "slow"
    );
  }
});

$(document).ready(function () {
  heroSliderResize();
});

$(window).on("resize", heroSliderResize);

function heroSliderResize() {
  var heighestImgHeight = 0;
  var picSliderImgs = $($picSlider).find("img");

  $(picSliderImgs).each(function (i, e) {
    heighestImgHeight =
      heighestImgHeight < e.height ? e.height : heighestImgHeight;
  });

  var picSliderVideo = $($picSlider).find(".video");

  $(picSliderVideo).css("height", heighestImgHeight);
  $($picSlider).slick("unslick");
  $($picSlider).slick(picSliderOptions);
}
