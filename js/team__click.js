$().ready(function(){

  let activeClass = "team__item--active";

  let btn = $('.team__item__title');

  btn.click(function(event){
    event.preventDefault();


    var parent = $(this).parent();

    if (parent.hasClass(activeClass)){
      parent.remove(activeClass)
    }else{
      btn.parent().removeClass(activeClass);
      parent.addClass(activeClass);
    
    }
     
  });
});