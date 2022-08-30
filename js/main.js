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
});