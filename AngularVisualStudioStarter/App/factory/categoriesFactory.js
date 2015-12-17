app.factory('CategoriesFactory', ['DataService', function (DataService) {
    CategoriesFactory = {};

    CategoriesFactory.GetCategories = function () {
        return DataService.GetData().then(function (data) {
            return data.data.categories;
        });
    };

    return CategoriesFactory;
}]);