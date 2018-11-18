$().ready(function(){

  let currentSlide=0;
  let arraySlide = [ '../img/burgers/Bacon-Cheeseburger.png',
  '../img/burgers/burger_sandwich.png' 
  ,'../img/burgers/Chiken_burger.png',
   '../img/burgers/Spicy_Shrimp_Burger.png']

   $('#right').on('click', function(){
    console.log('right');
      if (currentSlide >0)
      {
        currentSlide-- ;
        let current = arraySlide(currentSlide);
          $('.burgers__img').attr('src', current);
      }
   });


   $('#left').on('click', function(){
    console.log('left');

    if (currentSlide< arraySlide.length-1)
    {
      currentSlide++ ;
      let current = arraySlide(currentSlide);
        $('.burgers__img').attr('src', current);
    }

   });

  });
