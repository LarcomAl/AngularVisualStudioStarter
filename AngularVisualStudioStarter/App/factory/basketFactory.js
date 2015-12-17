app.factory('BasketFactory', ['$cookies', function ($cookies) {
    var BasketFactory = {};

    BasketFactory.InitBasket = function () {
        if ($cookies.getObject('Basket') == null) {
            var Basket = {
                items: new Array()
            };

            $cookies.putObject('Basket', Basket);
        }
    };

    BasketFactory.GetBasket = function () {
        return $cookies.getObject('Basket');
    };

    BasketFactory.GetBasketNumberOfItems = function () {
        var totalCount = 0;
        var Basket = this.GetBasket();

        $.each(Basket.items, function (key, value) {
            if (value != null) {
                totalCount = parseInt(totalCount) + parseInt(value.quantity);
            }
        });

        return totalCount;
    };

    BasketFactory.GetBasketTotal = function () {
        var totalprice = 0;
        var Basket = this.GetBasket();

        $.each(Basket.items, function (key, value) {
            if (value != null) {
                totalprice = parseFloat(totalprice) + (parseFloat(value.price) * parseFloat(value.quantity));
            }
        });

        return parseFloat(totalprice).toFixed(2);
    };

    BasketFactory.AddToBasket = function (item) {
        var Basket = this.GetBasket();
        item.quantity = 1;
        Basket.items.push(item);
        $cookies.putObject('Basket', Basket);
    };

    BasketFactory.RemoveFromBasket = function (item) {
        var Basket = this.GetBasket();
        var index = Basket.items.indexOf(item);
        Basket.items.splice(index, 1);
        $cookies.putObject('Basket', Basket);
    };

    BasketFactory.UpdateFromBasket = function (item) {
        var Basket = this.GetBasket();
        var index = -1;

        $.each(Basket.items, function (key, value) {
            if (value.id == item.id) {
                index = key;
            }
        });

        Basket.items[index] = item;
        $cookies.putObject('Basket', Basket);
    };


    return BasketFactory;
}]);