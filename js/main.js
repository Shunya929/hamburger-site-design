jQuery(function($){

  let h_sidebar = $(window).height(); 
  $('.js-sidebar').css('height',h_sidebar +'px');

  $(".js-hamburger").on("click",function() {
    $(this).toggleClass("is-open");
    $(".js-sidebar").toggleClass("is-open");
    $(".js-menubar__sidebar").toggleClass("is-open");
    $("js-hamburger").toggleClass("is-open");
    $(".js-background--sidebar").toggleClass("is-open");
    $(".js-body").toggleClass("is-open");
    if ($("h2.js-txt--changeable").text() === 'Menu') {
      $("h2.js-txt--changeable").text('×');
    } else {
      $("h2.js-txt--changeable").text('Menu');
    }
  });

});