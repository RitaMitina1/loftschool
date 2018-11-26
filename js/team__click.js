$().ready(function(){

  let activeClass = "team__item--active";

  let btn = $('.team__item__title');

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