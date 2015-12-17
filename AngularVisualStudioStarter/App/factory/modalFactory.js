app.factory('ModalFactory', ['$route', '$modal', '$modalStack', function ($route, $modal, $modalStack) {
    var ModalFactory = {};

    var itemModal = {};
    var confirmModal = {};

    ModalFactory.OpenItem = function (item, size, $scope) {
        $scope.item = item;
        itemModal = $modal.open({
            animation: true,
            templateUrl: 'views/items.html',
            controller: 'itemsController',
            scope: $scope, // Important de passer le scope sinon on le perd !
            size: size,
            windowClass: 'app-modal-window',
            resolve: {
                item: function () {
                    return $scope.item;
                }
            }
        });
    };

    ModalFactory.OpenConfirm = function (item, size, $scope) {
        $scope.item = item;
        confirmModal = $modal.open({
            animation: true,
            templateUrl: 'views/confirmBasket.html',
            controller: 'confirmBasketController',
            scope: $scope, // Important de passer le scope sinon on le perd !
            size: size,
            windowClass: 'app-modal-window',
            resolve: {
                item: function () {
                    return $scope.item;
                }
            }
        });
    };

    ModalFactory.CloseAll = function () {
        $modalStack.dismissAll();
    };

    ModalFactory.CloseConfirm = function () {
        confirmModal.close();
        //$modalStack.dismissAll();
    };

    return ModalFactory;
}]);