$().ready(function(){

 var btn = document.querySelectorAll(".reviews__btn");
 var overlay = document.querySelector(".overlay");
 var overlayClose = document.querySelector(".overlay__button");
 var hoverBlock = document.querySelector(".reviews__hover__block");

 var overlayText = document.querySelector(".overlay__text");

 const overlayName = document.createElement('div');
 overlayName.className = "overlay__name";

 const overlayComments = document.createElement('div');
 overlayComments.className = "overlay__comments";



for (let i = 0; i < btn.length; i++) {
        const element = btn[i];

   element.addEventListener("click", function () {
          event.preventDefault();

         
        if(overlay.style.display=="block"){
        overlay.style.display="none";
        } else {
          hoverBlock.style.display="none";
        overlay.style.display="block";
      

        }
        var parent = element.parentNode.children;
            for (let i = 0; i < parent.length; i++) {
                const content = parent[i];
                if (content.classList.contains('reviews__text__name')) {
                 var name = content.textContent;
                };
                if (content.classList.contains('paragraph')) {
                 var text = content.textContent;
                };
                
            };

            overlayText.appendChild(overlayName);
            overlayName.textContent = name;
           
            overlayText.appendChild(overlayComments);
            overlayComments.textContent = text;
    });

    overlayClose.addEventListener("click", function () {
      event.preventDefault();
     
        overlay.style.display="none";
     hoverBlock.parentNode.lastElementChild.style="";
      });



  
  }

});