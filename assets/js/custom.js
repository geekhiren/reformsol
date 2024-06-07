(function ($) {
  "use strict";
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $(".navbar-area").addClass("sticky");
      } else {
        $(".navbar-area").removeClass("sticky");
      }
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $(".navbar-area .main-nav").addClass("sticky");
      } else {
        $(".navbar-area .main-nav").removeClass("sticky");
      }
    });
    $(".mean-menu").meanmenu({ meanScreenWidth: "1199" });
    $(".popup-button").click(function () {
      $(".popup").css("visibility", "visible");
      $(".popup-content").addClass("hi");
    });
    $("#popup-close").click(function () {
      $(".popup").css("visibility", "hidden");
      $(".popup-content").removeClass("hi");
    });
    $(".service-slider-area").owlCarousel({
      autoplayHoverPause: true,
      autoplaySpeed: 1500,
      autoplay: true,
      loop: true,
      dots: true,
      margin: 25,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } },
    });
    $(".testimonial-slider-area").owlCarousel({
      autoplayHoverPause: true,
      autoplaySpeed: 1500,
      autoplay: true,
      loop: true,
      dots: true,
      margin: 30,
      responsive: { 0: { items: 1 }, 768: { items: 2 } },
    });
    $(".testimonial-slider-area-2").owlCarousel({
      autoplayHoverPause: true,
      autoplaySpeed: 1500,
      autoplay: true,
      loop: true,
      dots: true,
      margin: 25,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } },
    });
    $(".partner-slider-area").owlCarousel({
      autoplayHoverPause: true,
      autoplaySpeed: 1500,
      autoplay: true,
      loop: true,
      dots: false,
      margin: 30,
      responsive: {
        0: { items: 3, margin: 20 },
        576: { items: 3, margin: 50 },
        768: { items: 4, margin: 80 },
        992: { items: 5, margin: 80 },
        1200: { items: 6, margin: 100 },
      },
    });
    $(".banner-image-area").mousemove(function (e) {
      var wx = $(window).width();
      var wy = $(window).height();
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var newx = x - wx / 2;
      var newy = y - wy / 2;
      $(".banner-main-img").each(function () {
        var speed = $(this).attr("data-speed");
        if ($(this).attr("data-revert")) speed *= -0.4;
        TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
      });
    });
    $(".pricing-1").mousemove(function (e) {
      var wx = $(window).width();
      var wy = $(window).height();
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var newx = x - wx / 2;
      var newy = y - wy / 2;
      $(".shape1,.shape2").each(function () {
        var speed = $(this).attr("data-speed");
        if ($(this).attr("data-revert")) speed *= -0.4;
        TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
      });
    });
    $(".testimonial-1").mousemove(function (e) {
      var wx = $(window).width();
      var wy = $(window).height();
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var newx = x - wx / 2;
      var newy = y - wy / 2;
      $(".dot-shape,.main-img,.bg-shape,.shape1,.shape2").each(function () {
        var speed = $(this).attr("data-speed");
        if ($(this).attr("data-revert")) speed *= -0.4;
        TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
      });
    });
    $(".app-integration").mousemove(function (e) {
      var wx = $(window).width();
      var wy = $(window).height();
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var newx = x - wx / 2;
      var newy = y - wy / 2;
      $(" .app-icon").each(function () {
        var speed = $(this).attr("data-speed");
        if ($(this).attr("data-revert")) speed *= -0.4;
        TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
      });
    });
    $(".download").mousemove(function (e) {
      var wx = $(window).width();
      var wy = $(window).height();
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var newx = x - wx / 2;
      var newy = y - wy / 2;
      $(".dot-shape,.main-img,.bg-shape,.shape1,.shape2").each(function () {
        var speed = $(this).attr("data-speed");
        if ($(this).attr("data-revert")) speed *= -0.4;
        TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
      });
    });
    $(".video-popup").magnificPopup({ type: "iframe" });
    $("#bar1").barfiller({ duration: 2500 });
    $("#bar2").barfiller({ duration: 2500 });
    $("#bar3").barfiller({ duration: 2500 });
    $("select").niceSelect();
    $(function () {
      $(window).on("scroll", function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $(".go-top").addClass("active");
        if (scrolled < 600) $(".go-top").removeClass("active");
      });
      $(".go-top").on("click", function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
      });
    });
    $(".odometer").appear(function (e) {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
    if ($(".wow").length) {
      var wow = new WOW({ mobile: false });
      wow.init();
    }
    function setTheme(themeName) {
      localStorage.setItem("theme", themeName);
      document.documentElement.className = themeName;
    }

    $(function () {
      $(window).on("scroll", function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $(".go-top").addClass("active");
        if (scrolled < 600) $(".go-top").removeClass("active");
      });
      $(".go-top").on("click", function () {
        $("html, body").animate({
          scrollTop: "0"
        }, 500);
      });
    });
  })
})(jQuery);
