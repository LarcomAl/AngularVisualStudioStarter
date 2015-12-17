'use strict';

app.controller('confirmBasketController', ['$scope', '$route', '$location', 'ItemsFactory', 'BasketFactory', 'ModalFactory', function ($scope, $route, $location, ItemsFactory, BasketFactory, ModalFactory) {

    $scope.ContinuePurchase = function () {
        ModalFactory.CloseConfirm();
    };

    $scope.GoToBasket = function () {
        ModalFactory.CloseAll();
        window.location = '#basket';
    };

}]);