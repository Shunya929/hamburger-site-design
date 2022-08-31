jQuery(function($){
  let s_sidebar = $(window).height(); 
  let pc_sidebar = $("l-header").height() + $("l-main").height(); 

  $(".js-hamburger").on("click",function() {
    $.when(
      $(this).toggleClass("is-open"),
      $(".js-background--sidebar").toggleClass("is-open")
      )
      .done(function() {
        $(".js-sidebar").toggleClass("is-open");
        $(".js-menubar__sidebar").toggleClass("is-open");
        $(".js-body").toggleClass("is-open");
        $(".js-txt--changeable").text() === 'Menu' ? $(".js-txt--changeable").text('×'):$(".js-txt--changeable").text('Menu');
      });
    });

  $(window).resize(function() {
    $(this).removeClass("is-open"),
    $(".js-sidebar").removeClass("is-open");
    $(".js-menubar__sidebar").removeClass("is-open");
    $(".js-body").removeClass("is-open");
    $(".js-background--sidebar").removeClass("is-open");
    $(".js-txt--changeable").text('Menu');
    $(".js-hamburger").removeClass("is-open");
  });

  $(function() {
    if (window.matchMedia("(min-width: 1281px)").matches) {
      $('.js-sidebar').css('height',pc_sidebar +'px');
      $('.js-hamburger').off('click');
    } else {
      $('.js-sidebar').css('height',s_sidebar +'px');
    };
  });
});