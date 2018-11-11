$().ready(function(){

  let activeClass = "accordeon__item--active";

  let btn = $('.accordeon__list__title');

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