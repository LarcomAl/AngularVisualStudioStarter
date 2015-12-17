'use strict';

app.controller('listCategoriesController', ['$scope', 'CategoriesFactory', function ($scope, CategoriesFactory) {
    CategoriesFactory.GetCategories().then(function (response) {
        $scope.categories = response;
    });
}]);