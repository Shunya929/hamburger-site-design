jQuery(function($){

  let h_sidebar = $(window).height(); 
  $('.js-sidebar').css('height',h_sidebar +'px');

  $(".js-hamburger").on("click",function() {
    $.when(
      $(this).toggleClass("is-open"),
      $(".js-background--sidebar").toggleClass("is-open")
      )
      .done(function() {
        $(".js-sidebar").toggleClass("is-open");
        $(".js-menubar__sidebar").toggleClass("is-open");
        // $(".js-hamburger").toggleClass("is-open");
        $(".js-body").toggleClass("is-open");
        $("h2.js-txt--changeable").text() === 'Menu' ? $("h2.js-txt--changeable").text('×'):$("h2.js-txt--changeable").text('Menu');
      });
    });

  $(window).resize(function() {
    $(this).removeClass("is-open"),
    $(".js-sidebar").removeClass("is-open");
    $(".js-menubar__sidebar").removeClass("is-open");
    $(".js-body").removeClass("is-open");
    $(".js-background--sidebar").removeClass("is-open")
    // $(".js-hamburger").removeClass("is-open");

    // if($('.js-hamburger').hasClass('is-open')) {
    //   $(".p-header-right").addClass("is-open");
    //   $(this).addClass("is-open");
    //   $('h2.c-menu-list').css('display','block');
    //   $('.js-menu').stop().slideDown(300);
    // } else {
    //   $(this).removeClass("is-open");
    //   $(".p-header-right").removeClass("is-open");
    //   $('.js-menu').css('display','none');
    //   $('.js-menu').stop().slideUp(300);
    // }

    // $("h2.js-txt--changeable").text() === '×' ? $("h2.js-txt--changeable").text('Menu'):$("h2.js-txt--changeable").text('×');
  });
});