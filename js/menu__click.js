$().ready(function(){

  let activeClass = "menu__item--active";

  let btn = $('.menu__list__title');

  btn.click(function(event){
    event.preventDefault();


    var parent = $(this).parent();

    if (parent.hasClass(activeClass)){
      btn.parent().removeClass(activeClass);
    }else{
      btn.parent().removeClass(activeClass);
      parent.addClass(activeClass);
    }
  });

});
