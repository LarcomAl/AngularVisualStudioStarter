'use strict';

app.controller('itemsController', ['$scope', '$route', '$location', 'ItemsFactory', 'BasketFactory', 'ModalFactory', function ($scope, $route, $location, ItemsFactory, BasketFactory, ModalFactory) {
    if (!$scope.item)
    {
        ItemsFactory.GetItems().then(function (response) {
            $scope.items = response;
            ItemsFactory.GetItemById($route.current.params.id).then(function (data) {
                $scope.item = data;
            });
        });
    }

    $scope.addToBasket = function (item, size) {
        BasketFactory.AddToBasket(item);
        ModalFactory.OpenConfirm(item, size, $scope);
    };
}]);