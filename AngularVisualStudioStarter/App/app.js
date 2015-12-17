var app = angular.module('appAlainStore', ['ngRoute', 'ngCookies', 'ui.bootstrap']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/listItems.html',
          controller: 'listItemsController',
          activeTab: 'itemsTab'
      })
      .when('/listItems/:category', {
          templateUrl: 'views/listItems.html',
          controller: 'listItemsController',
          activeTab: 'itemsTab'
      })
      .when('/items/:id', {
          templateUrl: 'views/items.html',
          controller: 'itemsController',
          activeTab: 'itemsTab'
      })
      .when('/basket', {
          templateUrl: 'views/basket.html',
          controller: 'basketController',
          activeTab: 'basket'
      })
      .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'aboutController',
          activeTab: 'aboutTab'
      })
      .otherwise({
          redirectTo: '/'
      });
}]);

/* First Run */
app.run(['BasketFactory', function (BasketFactory) {
    BasketFactory.InitBasket();
}]);

/* Controlers */
app.controller('mainController', ['$scope', '$rootScope', '$route', '$sce', 'BasketFactory', function ($scope, $rootScope, $route, $sce, BasketFactory) {
    $scope.route = $route;

    $scope.ShowBasket = function () {
        var numberOfItems = BasketFactory.GetBasketNumberOfItems();
        var totalprice = BasketFactory.GetBasketTotal();

        return $sce.trustAsHtml(numberOfItems + " articles <strong>" + totalprice + " € </strong>");
    };
}]);

