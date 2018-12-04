ymaps.ready(init);

var placeMarks = [
  {
    latitude:55.884470736931824,
    longitude:37.60344193305866,
    hintContent: '<div class="hint__content">  Бургер Кинг </div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="balloon__image" src="./img/container/burger.png"/>' , 
      '<div class="ballon__text"> Самые вкусные бургеры у нас!<br> Заходите по адресу:ул. Пришвина, 26. </div>' ,
      '</div>'
    ]
  },
  {
    latitude:55.88814350430989,
    longitude:37.6623429210856,
    hintContent: '<div class="hint__content">  Бургер Кинг </div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="balloon__image" src="./img/container/burger.png"/>' , 
      '<div class="ballon__text"> Самые вкусные бургеры у нас!<br> Заходите по адресу: ул.Широкая, 13а. </div>' ,
      '</div>'
    ]
  },
  {
    latitude:55.86942588958122,
    longitude:37.66299688477585,
    hintContent: '<div class="hint__content">  Бургер Кинг </div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="balloon__image" src="./img/container/burger.png"/>' , 
      '<div class="ballon__text"> Самые вкусные бургеры у нас!<br> Заходите по адресу:ул. Енисейская, 19,корп. 1. </div>' ,
      '</div>'
    ]
  },
  {
    latitude:55.8634196033586,
    longitude:37.60091975811335,
    hintContent: '<div class="hint__content">  Бургер Кинг </div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="balloon__image" src="./img/container/burger.png"/>' , 
      '<div class="ballon__text"> Самые вкусные бургеры у нас!<br> Заходите по адресу:ул. Декабристов, 12. </div>' ,
      '</div>'
    ]
  }
 
];
function init()
  {
    var map = new ymaps.Map("map", {

      center: [55.87365126447243,37.61493149524527],
      zoom: 12,
      behaviors: ['drag', 'dblClickZoom']
  });
      placeMarks.forEach(function(obj){
        var placeMark = new ymaps.Placemark([obj.latitude,obj.longitude], {
          hintContent: obj.hintContent,
          balloonContent: obj.balloonContent.join('')

        },
        
        {
          
      iconLayout: 'default#image',
      iconImageHref: 'svg/map-marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-19, -47],
        }
        );

        
  map.geoObjects.add(placeMark);

      });

  }


