'use strict';

app.controller('basketController', ['$scope', 'BasketFactory', 'ModalFactory', function ($scope, BasketFactory, ModalFactory) {
    $scope.Basket = BasketFactory.GetBasket();
    UpdateBasket();
  
    function UpdateBasket() {
        $scope.totalFees = 6.94;
        $scope.totalprice = BasketFactory.GetBasketTotal();
        $scope.totalWithFees = (parseFloat($scope.totalprice) + parseFloat($scope.totalFees)).toFixed(2);
    };

    $scope.calculateLineItemPrice = function (item) {
        var quantity = parseFloat(item.quantity);
        var price = parseFloat(item.price);

        return parseFloat(quantity * price).toFixed(2);
    };

    $scope.reduceItemQuantity = function (item) {
        if (item.quantity > 1) {
            item.quantity = item.quantity - 1;
        }
        BasketFactory.UpdateFromBasket(item);
        UpdateBasket();
    };

    $scope.addItemQuantity = function (item) {
        item.quantity = item.quantity + 1;
        BasketFactory.UpdateFromBasket(item);
        UpdateBasket();
    };

    $scope.removeItem = function (item) {
        var index = $scope.Basket.items.indexOf(item);
        $scope.Basket.items.splice(index, 1);

        BasketFactory.RemoveFromBasket(item);
        UpdateBasket();
    };


    /* Partie Ui modal */
    $scope.open = function (item, size) {
        ModalFactory.OpenItem(item, size, $scope);
    };
}]);