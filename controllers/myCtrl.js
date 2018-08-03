app.controller("myCtrl", function ($scope, $http, wegowService) {
    wegowService.http()
        .then(function (response) {
            $scope.events = response.data.events;
        })
        .catch(function (response) {
            console.error('Error', response.status, response.data);
        });

});