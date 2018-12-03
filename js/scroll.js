jQuery(document).ready(function($){

  // $("#maincontent").fullpage({
  //   // sectionsColor:['#C63D0F','#C63D0F','#C63D0F','#C63D0F','#C63D0F','#C63D0F','#C63D0F']
  //   // anchors: ['we__page','burger__page','team__page','menu__page','reviews__page','player__page','map__page'],
  //   // menu: '#menu'
  // });
  new fullpage('.maincontent',{
    anchors: ['we__page','burger__page','team__page','menu__page','reviews__page','player__page','map__page'],
    loopTop: true,
    loopBottom:true,
    navigation:true,

  });


  $('.scroll').on('click', function(){
   });


});