var transport = angular.module('transport', ['ui.bootstrap', 'ngTouch', 'ngAnimate','ngRoute']);
transport.controller('CarouselCtrl', function($scope) {
  $scope.myInterval = 3000;
  $scope.noWrapSlides = true;
  $scope.slides = [{
    image: '../img/truck.jpg',
    caption: 'Strongest Distribution Network',
    subtext: 'Across South India',
    id: '1'
  }, {
    image: '../img/slide03.jpg',
    caption: 'Freight Services',
    subtext: 'Powerful Logistics Solution',
    id: '2'



  }, {
    image: '../img/slide04.jpg',
    caption: 'Transportation',
    subtext: 'Fast Delivery',
    id: '3'


  }, ];
});

// configure our routes
transport.config(function($routeProvider) {
      $routeProvider.when('/booking', {
              templateUrl : 'pages/booking.html',
              controller  : 'bookingController'
          });


  });

transport.controller('bookingController',function(){


});
