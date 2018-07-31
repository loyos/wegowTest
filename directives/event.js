app.directive("event", function () {
    return {
        restrict: 'E',
        scope: {
            data: '@'
        },
        template: "<div class='event'>{{data}}</div>"
    };
});