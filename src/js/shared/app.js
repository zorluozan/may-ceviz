var $picSlider = $(".js-pic-slider");
var $blogSlider = $(".js-blog-slider");
var $blogDetailSlider = $(".js-blogdetail-slider");
var $productsSlider = $(".js-product-slider");
var $productDetailSlider = $(".js-product-detail-slider");
var $introSlider = $(".js-intro-slider");
var $kvkkTable = $(".js-kvkk-table");

var picSliderOptions = {
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 15000,
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

  $blogDetailSlider.slick({
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

  $productDetailSlider.slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: true,
    dots: true,
    prevArrow:
      '<button class="slick-arrow slick-prev"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 2.26318L5 8.26318L11 14.2632" stroke="#253146" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2.26318L11 8.26318L5 14.2632" stroke="#253146" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
  });

  $introSlider.slick({
    infinite: false,
    speed: 300,
    autoplay: true,
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

  if ($kvkkTable.length > 0) {
    generateTable();
  }

  $(window).on("resize", function () {
    if ($kvkkTable.length > 0) {
      generateTable();
    }
  });

  function generateTable() {
    if ($(window).width() < 992) {
      var $thead = $kvkkTable.find("thead th");
      var $tbody = $kvkkTable.find("tbody tr");
      var captions = [];
      var contents = [];
      $thead.each(function (i, cell) {
        captions.push($(cell).text().trim());
      });

      $tbody.each(function (i, tr) {
        var obj = [];
        $(tr)
          .find("td")
          .each(function (y, cell) {
            var contentDetail = {
              caption: captions[y],
              text: $(cell).text().trim(),
            };
            obj.push(contentDetail);
          });
        contents.push(obj);
      });
    }
  }

  // $("#video").on("play", function (e) {
  //   e.preventDefault();
  //   $(".js-pic-slider").slick("slickPause");
  // });

  // $("#video").on("ended", function (e) {
  //   e.preventDefault();
  //   $(".js-pic-slider").slick("slickPlay");
  //   var slideno = $("#next-slide").data("slide");
  //   $(".js-pic-slider").slick("slickGoTo", slideno - 1);
  // });

  $(document).on("click", ".js-accordion-trigger", function (e) {
    e.preventDefault();
    var $el = $(e.target).parents(".accordion");
    if ($el.hasClass("active")) {
      $el.removeClass("active");
    } else {
      $(".accordion").removeClass("active");
      $el.addClass("active");
    }
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
    $(".js-desktop-menu").addClass("menu--scrolled");
  } else {
    $(".js-desktop-menu").removeClass("menu--scrolled");
  }
});

// $(document).on("click", ".js-discover-link", function () {
//   if ($(window).width() < 992) {
//     $("html,body").animate(
//       {
//         scrollTop: $(this).parents("section").next().offset().top - 80,
//       },
//       "slow"
//     );
//   } else {
//     $("html,body").animate(
//       {
//         scrollTop: $(this).parents("section").next().offset().top - 80,
//       },
//       "slow"
//     );
//   }
// });

$(document).ready(function () {
  picSliderResize();
});

$(window).on("resize", picSliderResize);

function picSliderResize() {
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

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function showCookieModal() {
  $(".js-cookie-modal").addClass("active");
}

function closeCookieModal() {
  $(".js-cookie-modal").removeClass("active");
  setCookie("acceptCookies", true, 1);
}

function checkCookie() {
  let cModal = getCookie("acceptCookies");
  if (cModal == "" || cModal == "false") {
    showCookieModal();
  } else {
  }
}

checkCookie();

$(".js-btn-plus").click(function () {
  let newAmount = 1;
  $(".js-amount")[0].value++;
  newAmount = $(".js-amount")[0].value;
  let calculatedPrice =
    Number($(".js-price").attr("data-price")) * Number(newAmount);
  let totalPrice =
    Number($(".js-total").attr("data-total")) * Number(newAmount);
  $(".js-amount-container").html(newAmount + " Adet");
  $(".js-total").html(totalPrice.toFixed(2));
  $(".js-price").html(calculatedPrice.toFixed(2).replace(".", ","));
});

$(".js-btn-minus").click(function () {
  let newAmount = 1;
  $(".js-amount")[0].value--;
  newAmount = $(".js-amount")[0].value;
  let calculatedPrice =
    Number($(".js-price").attr("data-price")) * Number(newAmount);
  let totalPrice =
    Number($(".js-total").attr("data-total")) * Number(newAmount);
  if (newAmount >= 1) {
    $(".js-amount-container").html(newAmount + " Adet");
    $(".js-total").html(totalPrice.toFixed(2));
    $(".js-price").html(calculatedPrice.toFixed(2).replace(".", ","));
  } else {
    $(".js-amount")[0].value = 1;
  }
});
