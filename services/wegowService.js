app.service('wegowService', function ($http) {
    this.http = function (x) {
        return $http.get("https://cdn.wegow.com/no-delete/images/listado-eventos.json");
    }
});