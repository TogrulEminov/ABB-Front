// footer-selectric
{
  $(document).ready(function () {
    $(".selectric-header").click(function () {
      $(".selectric-scroll-header").fadeToggle();
      $(".selectric-header img").toggleClass('change');
    });
  });
}
{
  $(document).ready(function () {
    $("#js-search-open").click(function () {
      $("#search-text").fadeToggle();
      $(".selectric-scroll-header").hide();
      $(".selectric-header img").removeClass('change')
      $(this).parent().toggleClass('toggled-on')
      $(this).parent().removeClass('toggled-off')
    });
  });
}
{

  $(document).ready(function () {
    $(".close-icon").click(function () {
      $("#search-text").fadeToggle(300)
        .parent().toggleClass('toggled-off')
        .parent().toggleClass('toggled-on');
      $(".selectric-scroll-header").hide(200);
      $(".selectric-header img").removeClass('change')

    });
  });
}


{
  $(document).ready(function () {
    $("#js-search-open-mobile").click(function () {
      $("#search-text-mobile").fadeToggle();
      $(this).parent().toggleClass('toggled-on-2')
      $(this).parent().removeClass('toggled-off-2')
    });
  });

  $(document).ready(function () {
    $(".close-icon-mobile").click(function () {
      $("#search-text-mobile").hide()
        .parent().toggleClass('toggled-off-2')
        .parent().toggleClass('toggled-on-2');

    });
  });
}


// footer-selectric
{
  $(document).ready(function () {
    $(".selectric-footer").click(function () {
      $(".selectric-scroll-footer").fadeToggle();
      $(".selectric-footer img").toggleClass("down");
    });
  });
}
// footer-selectric


