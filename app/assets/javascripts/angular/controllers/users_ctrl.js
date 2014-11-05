app.controller("UsersCtrl", ['$scope', 'User', function($scope, User){

  $scope.users = User.query();

  $scope.addUser = function(e){
    e.preventDefault();
    if ($scope.user_form.$valid){
      User.save({ email: $scope.email, first_name: $scope.first_name, last_name: $scope.last_name, username: $scope.username }, function(data){
        console.log(data);
        $scope.users.push(data);
        $scope.email = "";
        $scope.first_name = "";
        $scope.last_name = "";
        $scope.username = "";
        $scope.password = "";
        $scope.user_form.$setPristine(true);
      });
    } else {
      $scope.user_form.submitted = true;
    }
  }

}])
