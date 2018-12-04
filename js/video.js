// let video;
// let durationControl; 
// let soundControl;
// let intervalId;

// //документ полностью загружен
// $().ready(function(){
//     video = document.getElementById("player"); 

//     // вешаем обработчик события onclick на тег video
//     video.addEventListener('click', playStop);

//     // обработчики событий для кнопок play
//     let playButtons = document.querySelectorAll(".play");
//     for (let i = 0; i < playButtons.length;i++){
//         playButtons[i].addEventListener('click',playStop);
//     }

//     // обработчик событий для кнопки динамик
//     let micControl = document.getElementById("mic");
//     micControl.addEventListener('click',soundOf)
    
//     // обработчики событий для ползунка продолжительности видео
//     durationControl = document.getElementById("durationLevel");    
//     durationControl.addEventListener('click',setVideoDuration);
//     durationControl.addEventListener('onmousemove',setVideoDuration);
//     durationControl.addEventListener('mousedown', stopInterval); 
//     durationControl.min = 0;
//     durationControl.value = 0;    

//     // обработчики событий для ползунка громокости
//     soundControl = document.getElementById("micLevel");    
//     soundControl.addEventListener('click', changeSoundVolume);
//     soundControl.addEventListener('onmousemove', changeSoundVolume);

//     // задаем максимальные и минимальные значения громокости
//     soundControl.min = 0;
//     soundControl.max = 10;
//     // присваиваем ползунку максимальное значение
//     soundControl.value = soundControl.max;
    
// });

// /*
//  Воспроизведение видео
// */
// function playStop(){
//     // показывает или скрывает белую кнопку play
//     $(".video__player-img").toggleClass("video__player-img--active");
    
//     // присваиваем ползунку продолжительности максимальное значение равное продолжительности нашего видео (в секундах)
//     durationControl.max = video.duration;

//     // проверим стоит ли видео на паузе, если да то продолжим воспроизведение. Если, наоборот, проигрыавыется, то остановим.
//     if (video.paused){
//         // запускаем видео
//         video.play();
//         intervalId = setInterval(updateDuration,1)
//         // video.webkitRequestFullScreen(); возможность открыть в полноэкранном режиме
//     }else{
//         // останавливаем видео
//         video.pause();  
//         clearInterval(intervalId);
//         // document.webkitExitFullscreen(); выйти из полноэкранного режима
//     }
// }

// /*
//     Управление звуком
// */
// function soundOf(){    
//     /*
//         Делаем проверку уровня громкости. 
//         Если у нас нашего видео есть звук, то мы его выключаем. 
//         Предварительно запомнив текущую позицию громкости в переменную soundLevel
//     */
//     if (video.volume ===0){
//         video.volume = soundLevel;
//         soundControl.value = soundLevel*10;
//     }else{
//         /*
//             Если у нашего видео нет звука, то выставляем уровень громкости на прежний уровень.
//             Хранится в перменной soundLevel
//         */
//         soundLevel = video.volume;
//         video.volume = 0;
//         soundControl.value = 0;
//     }    
// }

// function stopInterval(){
//     clearInterval(intervalId);
// }

// /*
//     Реализует возможность перемотки нашего видео
// */
// function setVideoDuration(){
//     video.currentTime = durationControl.value;   
//     intervalId = setInterval(updateDuration,1000/66);    
// }

// /*
//     Управление звуком видео
// */
// function changeSoundVolume(){
//     /*
//         Св-во volume может принимать значения от 0 до 1
//         Делим на 10 для того что бы, была возможность более точной регулировки видео. 
//     */
//     video.volume = soundControl.value/10;  
// }

// /*
//   Функция для обновления позиции ползунка продолжительности видео.   
// */
// function updateDuration(){    
//     durationControl.value = video.currentTime;
// }





$().ready(function(){

  let startDuration;
  let video = document.getElementById("player");
  let btn = document.querySelectorAll(".play");
  let durationLevel = document.getElementById("duration__level"); //ПОЛЗУНОК
  let sound = document.getElementById("sound__level"); //звук

    ///запуск видео
    function PlayPause(){
      $(".play--video").toggleClass("play--active");
      
      if (video.paused){
        video.play();
        
        startDuration = setInterval(initDuration,1000/66);
      } else {
        video.pause();
        clearInterval(startDuration);
      }
    }
    video.addEventListener("click",PlayPause);
    btn[0].addEventListener("click",PlayPause);
    btn[1].addEventListener("click",PlayPause);


  ///перемотка
  durationLevel.value = 0;
  durationLevel.min = 0;
  durationLevel.max = video.duration;
 function initDuration(){
    durationLevel.value = video.currentTime;
 }

 durationLevel.addEventListener("mousedown", movement);
 durationLevel.addEventListener("onmousemove",continuation);
 durationLevel.addEventListener("click",continuation);
 

 function movement(){
      clearInterval(startDuration);
      PlayPause();
 };
function continuation(){
  video.currentTime = durationLevel.value;
  PlayPause();

}
  
   
///звук
sound.min = 0;
sound.max = 10;
sound.value = 5;

sound.addEventListener("click",changeValue);

function changeValue(){
  video.volume = sound.value/10;
}


});