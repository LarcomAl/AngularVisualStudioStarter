'use strict';

app.controller('listItemsController', ['$scope', '$route', 'ModalFactory', 'ItemsFactory', function ($scope, $route, ModalFactory, ItemsFactory) {
    if (!$route.current.params.category || $route.current.params.category == 0) {
        ItemsFactory.GetItems().then(function (response) {
            $scope.items = response;
        });
    }
    else {
        ItemsFactory.GetItemByCategory($route.current.params.category).then(function (response) {
            $scope.items = response;
        });
    }


    /* Partie Ui typeahead */
    $scope.onSelect = function ($item, $model, $label) {
        window.location = '#items/' + $item.id;
    };

    /* Partie Ui modal */
    $scope.open = function (item, size) {
        ModalFactory.OpenItem(item, size, $scope);
    };
}]);