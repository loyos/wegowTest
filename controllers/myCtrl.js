app.controller("myCtrl", function($scope, $http) {
    $http.get("http://cdn.wegow.com/no-delete/images/listado-eventos.json")
    .then(function(response) {
        console.log("response: ", response.data);
        $scope.events = response.data.events;
    });
   
});