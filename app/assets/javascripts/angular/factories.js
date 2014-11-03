app.factory("User", ['$resource', function($resource){
  return $resource('/users/:id.json', { id: '@id' });
}]);
