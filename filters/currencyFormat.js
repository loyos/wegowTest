app.filter('currencyFormat', function () {
    return function (x) {
        return Number(x).toFixed(2)  + "€";
    };
});