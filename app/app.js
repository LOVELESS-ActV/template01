angular.module('Template', ['ngRoute', 'localization']);

angular.module('Template')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/',{
      templateUrl:'app/views/home.html'
    })
    .when('/404',{
      templateUrl:'app/views/404.html'
    })
    .otherwise({redirectTo:'/404'});
  });
