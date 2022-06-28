$(document).on("mouseover", ".desktop-header__nav-item", function (e) {
  var hasDropdown =
    $(e.currentTarget).find(".desktop-header__dropdown-menu").length === 1;

  if (hasDropdown) {
    $(".desktop-header").addClass("desktop-header--dropdown-active");
    $(e.currentTarget)
      .find(".desktop-header__dropdown-container")
      .addClass("desktop-header__dropdown-container--dropdown-active");
    $(".js-products-slider").slick("setPosition");
  }
  var dropdownState = $(e.currentTarget)
    .find(".desktop-header__dropdown-container")
    .hasClass("desktop-header__dropdown-container--dropdown-active");
  if (dropdownState) {
    $("main").addClass("overflow-hidden");
  }
});

$(document).on("mouseleave", ".desktop-header__nav-item", function (e) {
  var hasDropdown =
    $(e.currentTarget).find(".desktop-header__dropdown-menu").length === 1;

  if (hasDropdown) {
    $(".desktop-header").removeClass("desktop-header--dropdown-active");
    $(e.currentTarget)
      .find(".desktop-header__dropdown-container")
      .removeClass("desktop-header__dropdown-container--dropdown-active");
  }
  var dropdownState = $(e.currentTarget)
    .find(".desktop-header__dropdown-container")
    .hasClass("desktop-header__dropdown-container--dropdown-active");
  if (!dropdownState) {
    $("main").removeClass("overflow-hidden");
  }
});

$(document).on("click", ".mobile-header__nav-link--dropdown", function (e) {
  e.preventDefault();

  if (!$(this).parent().hasClass("active")) {
    $(".mobile-header__nav-item").removeClass("active");
    $(".mobile-header__dropdown-menu").slideUp();
    // if($(this).next().children().length > 0) {
    //     $('.js-products-slider-mobile').slick('resize');
    // }
  }
  console.log("asd");
  $(this).parent().toggleClass("active");
  $(this).closest(".mobile-header__dropdown-menu").slideToggle();
  $(".mobile-header__dropdown-menu .js-products-slider-mobile").slick("resize");
  $(".mobile-header__dropdown-menu .js-products-slider-mobile").slick(
    "setPosition"
  );
});

$(document).on("click", ".js-mobile-toggler", function (e) {
  e.preventDefault();
  $(".js-mobile-header-main").toggleClass("active");
  $(".js-btn-shop").hasClass("passive")
    ? $(".js-btn-shop").removeClass("passive")
    : $(".js-btn-shop").addClass("passive");
  $(".js-btn-language").hasClass("passive")
    ? $(".js-btn-language").removeClass("passive")
    : $(".js-btn-language").addClass("passive");
  $("html,body").toggleClass("page-locked");
  $(this).toggleClass("active");
  $(".mobile-header__nav-item").removeClass("active");
  $(".js-mobile-collapse").toggleClass("show");
});

// $(window).on("scroll", onWindowScroll);

// function onWindowScroll() {
//   var st = window.pageYOffset || document.documentElement.scrollTop;

//   _scrollTop = st <= 0 ? 0 : st;

//   // var _newScrollTop = 10;
//   var newHeader = $(".desktop-header");
//   var newSt = window.pageYOffset || document.documentElement.scrollTop;
//   if (newSt > _scrollTop || newSt <= 20) {
//     $(newHeader).removeClass("desktop-header--scrolled");
//   } else {
//     $(newHeader).addClass("desktop-header--scrolled");
//   }
// }

// $(document).ready(function () {
//   onWindowScroll();
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

function scrollToTarget(target) {
  $("html, body").animate(
    {
      scrollTop: $(target).offset().top - 110,
    },
    100
  );
}

$(document).on("click", ".js-scroll-element", function (e) {
  e.preventDefault();
  var target = $(this).attr("data-target");
  scrollToTarget(target);
});

$(document).on(
  "click",
  ".js-search-open-btn, .js-search-close-btn",
  function () {
    $(".desktop-header__search").toggleClass("active");
    $(".desktop-header__logo").toggle();
  }
);
