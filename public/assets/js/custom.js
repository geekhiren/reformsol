(function($){"use strict";$(window).scroll(function(){if($(window).scrollTop()>0){$(".navbar-area").addClass("sticky");}else{$(".navbar-area").removeClass("sticky");}});$(window).scroll(function(){if($(window).scrollTop()>0){$(".navbar-area .main-nav").addClass("sticky");}else{$(".navbar-area .main-nav").removeClass("sticky");}});$(".mean-menu").meanmenu({meanScreenWidth:"1199",});$('.popup-button').click(function(){$('.popup').css('visibility','visible');$('.popup-content').addClass('hi');})
$('#popup-close').click(function(){$('.popup').css('visibility','hidden');$('.popup-content').removeClass('hi');})
function toggleTheme(){if(localStorage.getItem('theme')==='theme-dark'){setTheme('theme-light');}else{setTheme('theme-dark');}}
(function(){if(localStorage.getItem('theme')==='theme-dark'){setTheme('theme-dark');document.getElementById('slider').checked=false;}else{setTheme('theme-light');document.getElementById('slider').checked=true;}})();