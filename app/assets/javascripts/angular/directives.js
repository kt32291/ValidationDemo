app.directive('emailUnique', ['$resource', 'User', function($resource, User){
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      return scope.$watch(function(){
        return ngModel.$modelValue;
      }, function(email) {
        if (email == '')
          ngModel.$setValidity('unique', true);
        User.query({ email: email.toLowerCase() }, function(users){
          console.log(users);
          return ngModel.$setValidity('unique', users.length == 0);
        });
      });
    }
  }
}]);


app.directive('usernameValid', ['$resource', 'User', function($resource, User){
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      return scope.$watch(function(){
        return ngModel.$modelValue;
      }, function(username) {
        var pattern = /^(?=.*\D)[-\w]+$/;
        ngModel.$setValidity('valid', pattern.test(username));
      });
    }
  }
}]);
