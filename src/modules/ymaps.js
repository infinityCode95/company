ymaps.ready(init);

function init() {
  var proxYaMap = new ymaps.Map("proxYaMap", {
    center: [53.340318, 83.693563],
    zoom: 12,
  });

  // proxYaMap.geoObjects.add(myGeoObject);
  proxYaMap.geoObjects
    .add(
      new ymaps.Placemark(
        [53.338532, 83.785333],
        {
          iconCaption: "ПРОКС",
        },
        {
          preset: "islands#circleIcon",
          iconColor: "#072D82",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [53.338606, 83.66361],
        {
          iconCaption: "ПРОКС",
        },
        {
          preset: "islands#circleIcon",
          iconColor: "#072D82",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [53.337839, 83.783144],
        {
          iconCaption: "ПРОКС",
        },
        {
          preset: "islands#circleIcon",
          iconColor: "#072D82",
        }
      )
    );
}
