angular.module("Template")
.controller("homeController", function ($scope, localize, $location, $window, $http, $route){

  // All the code of this website was made by LOVELESS-Act.V(dusk@laposte.net)

  var slides = $scope.slides = [
    {id: 0, image: 'app/img/visuel_slider_1.jpg', description: 'Visual 1', title: '_VISUALTITLE1_', body: '_VISUALBody1_', sidetext: 'side text 2', alt:'Visual 1'},
    {id: 1, image: 'app/img/visuel_slider_2.jpg', description: 'Visual 2', title: '_VISUALTITLE2_', body: '_VISUALBody2_', sidetext: 'side text 3', alt:'Visual 2'}
  ];

  var CarouselIndex = $scope.CarouselIndex = 0;
  var CarouselBusy = false;

  $scope.isCurrentSlideIndex = function (index) {
    return $scope.CarouselIndex === index;
  };

  var CarouselNextSlide = $scope.CarouselNextSlide = function () {

    // First we lock the process to avoid overlapping
    if (!CarouselBusy) {
      CarouselBusy = true;

      $(".visual_"+(CarouselIndex)).fadeOut(); // <- Fading the small box w/ data away

      // Then we adjust the index
      if (CarouselIndex+1 >= slides.length) {
        CarouselIndex = 0;
      } else {
        CarouselIndex += 1;
      }

      //Finally we do the animations
      //If we reached the end, we gotta slide them after doing a trick to loop
      if (CarouselIndex == 0) {
        $(".slide_0").animate({ //We put the first visual at the right of the actual one before sliding it in
          left:"100%"
        }, 0, function () {
          $(".slide_"+(slides.length-1)).animate({ // <-The one to slide away
            left:"-"+(100*slides.length-1)+"%"
          }, 1000, function () {
            slides.forEach(function (slide, index) {
              if (index != 0) {
                $(".slide_"+index).css("left","0%");
              }
            });
          });
          $(".slide_0").animate({ // <- The one to slide in
            left:"0%"
          }, 1000, function () {});
        });
      } else { //Otherwise, it's pretty simple
        $(".slide_"+CarouselIndex).css("left","-"+(100*(CarouselIndex-1))+"%");
        $(".slide_"+(CarouselIndex-1)).animate({ // <- The one to slide away
          left:"-"+(100*CarouselIndex)+"%"
        }, 1000, function () {});
        $(".slide_"+CarouselIndex).animate({ // <- The one to slide in
          left:"-"+(100*CarouselIndex)+"%"
        }, 1000, function () {
        });
      }

      //Let's not forget to unlock the process
      setTimeout(function () {
        $(".visual_"+CarouselIndex).fadeIn(400, function () { // <- Fading the small box w/ updated data in
          CarouselBusy = false;
        });
      }, 1000);
      //We're good-to-go.

    }
  }

  var CarouselPreviousSlide = $scope.CarouselPreviousSlide = function () {

    // First we lock the process to avoid overlapping
    if (!CarouselBusy) {
      CarouselBusy = true;

      $(".visual_"+(CarouselIndex)).fadeOut(); // <- Fading the small box w/ data away

      // Then we adjust the index
      if (CarouselIndex-1 == -1) {
        CarouselIndex = slides.length-1;
      } else {
        CarouselIndex -= 1;
      }

      //Finally we do the animations
      //If we reached the beginning, we gotta slide them after doing a trick to backloop
      $(".visual").fadeOut(); // <- Fading the small box w/ data away
      if (CarouselIndex == slides.length-1) {
        $(".slide_"+(slides.length-1)).animate({ //We put the last visual at the left of the actual one before sliding it in
          left:"-"+((100*CarouselIndex)+100)+"%"
        }, 0, function () {
          $(".slide_0").animate({ // <-The one to slide away
            left:"100%"
          }, 1000, function () {
            slides.forEach(function (slide, index) {
              if (index != 0) {
                $(".slide_"+index).css("left","0%");
              }
            });
            $(".slide_0").animate({ // <-The one to slide away
              left:"-100%"
            }, 0, function () {});
          });
          $(".slide_"+(slides.length-1)).animate({ // <- The one to slide in
            left:"-"+(100*CarouselIndex)+"%"
          }, 1000, function () {});
        });
      } else { //Otherwise, it's pretty simple
        $(".slide_"+CarouselIndex).css("left","-"+(100*(CarouselIndex+1))+"%");
        $(".slide_"+(CarouselIndex+1)).animate({ // <- The one to slide away
          left:"-"+(100*CarouselIndex)+"%"
        }, 1000, function () {});
        $(".slide_"+CarouselIndex).animate({ // <- The one to slide in
          left:"-"+(100*CarouselIndex)+"%"
        }, 1000, function () {});
      }

      //Let's not forget to unlock the process
      setTimeout(function () {
        $(".visual_"+CarouselIndex).fadeIn(400, function () { // <- Fading the small box w/ updated data in
          CarouselBusy = false;
        });
      }, 1100);
      //We're good-to-go.

    }
  }

});
