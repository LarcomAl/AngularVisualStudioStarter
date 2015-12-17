app.factory('ItemsFactory', ['DataService', function (DataService) {
    ItemsFactory = {};

    ItemsFactory.GetItems = function () {
        return DataService.GetData().then(function (data) {
            return data.data.items;
        });
    };

    ItemsFactory.GetItemById = function (id) {
        return this.GetItems().then(function(input)
        {
            var i = 0, len = input.length;
            for (; i < len; i++) {
                if (+input[i].id == +id) {
                    return input[i];
                }
            }
            return null;
        });
    };

    ItemsFactory.GetItemByCategory = function (categoryId) {
        return this.GetItems().then(function (input) {
            var i = 0, len = input.length;
            var result = [];
            for (; i < len; i++) {
                if (input[i].category == categoryId) {
                    result.push(input[i]);
                }
            }
            return result;
        });
    };

    return ItemsFactory;
}]);