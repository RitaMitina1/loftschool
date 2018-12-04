jQuery(document).ready(function($){


  new fullpage('.maincontent',{
    anchors: ['welcome__page','','burger__page','team__page','menu__page','reviews__page','player__page','','map__page'],
    loopTop: true,
    loopBottom:true,
    navigation:true,
    // scrollOverflow:true

  });


  $(".scroll").click(function() {
    let previousSection = $(".welcome__page");
});
});