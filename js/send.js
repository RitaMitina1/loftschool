$().ready(function(){
  
  send = document.querySelector("#send");
  form = document.querySelector("#form");
  modalClose = document.querySelector(".modal__button");
  modalWindow = document.querySelector(".modal__window");
  modalText = document.querySelector(".modal__text");
  document.querySelector("#form");

  modalClose.addEventListener("click", function () {
    event.preventDefault();
   
      modalWindow.style.display="none";

    });

  $('#form').on('sibmit', function(event) {
    event.preventDefault();
    if ($("#phone").text() !== ''){
      $.ajax ('https://webdev-api.loftschool.com/sendmail', {
        type: "POST",
        data : $(this).serializ(),
        success: function(data){
         
          modalWindow.style.display ="block";
          modalText.text('Заказ оформлен');


        },
        fail: function(data){
          modalWindow.style.display ="block";
          modalText.text('Произашла ошибка');
          
        }
      })
        } else {
          modalWindow.style.display ="block";
          modalText.text('Введите данные');
        }
  

  });


});