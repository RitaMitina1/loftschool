$().ready(function(){
 let currentSlide=0;
 let arraySlide = ['./img/burgers/dark-burger.png',
 './img/burgers/Bacon-Cheeseburger.png',
 './img/burgers/burger_sandwich.png',
 './img/burgers/Chiken_burger.png',
 './img/burgers/Spicy_Shrimp_Burger.png'];
 let slideList = [
  {
    src: './img/burgers/dark-burger.png',
    burgerName: 'dark beef burger',
    title: 'Ваш старый добрый знакомый, с рубленым бифштексом из 100% говядины, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.',
   },
   {
    src: './img/burgers/Bacon-Cheeseburger.png',
    burgerName: 'Bacon Cheeseburger',
    title: 'Бургер из 100% говядины, с тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль.',
   },
   {
    src: './img/burgers/burger_sandwich.png',
    burgerName: 'Burger Sandwich',
    title: 'Ваш старый добрый знакомый с курицей, парой кусочков бекона, двумя помидорами, луком, салатом и соусом гриль.',
   },
   {
    src:'./img/burgers/Chiken_burger.png',
    burgerName: 'Chiken Burger',
    title: 'Куриный бургер, с кусочками нежнейшего сыра эмменталь,листьями салата, луком,помидорами и соусом гриль.',
   },
    {
    src:'./img/burgers/Spicy_Shrimp_Burger.png',
    burgerName: 'Spicy Shrimp Burger',
    title: 'Бургер с рыбой и креветками,с кусочками нежнейшего сыра эмменталь,листьями салата, луком,помидорами и соусом гриль теперь с добавлением экзотического соуса чураско.',
   },
 ]
   $('#left').on('click', function(){
    // console.log('left');
      if (currentSlide > 0){
        currentSlide-- ;
        let current = slideList[currentSlide];
          $('.burgers__img').attr('src', current.src);
          $('.burger__title').text(current.burgerName);
          $('.burger__desc').text(current.title);

      }
   });


   $('#right').on('click', function(){
    // console.log('right');

    if (currentSlide< arraySlide.length-1)
    {
      currentSlide++ ;
      let current = slideList[currentSlide];
      $('.burgers__img').attr('src', current.src);
      $('.burger__title').text(current.burgerName);
      $('.burger__desc').text(current.title);

    }

   });

  });
