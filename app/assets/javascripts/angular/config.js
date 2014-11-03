var app = angular.module("Validations", ['ngResource']);

app.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);