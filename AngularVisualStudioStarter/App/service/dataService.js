app.service('DataService', ['$http', function ($http) {
    var DataService = {};

    DataService.GetData = function () {
       return  $http.get('data/data.json').then(function (data) {
            return data;
        });
    };

    return DataService;
}]);