define([
  'angularApp', 'services/default/login-service',
  'directives/components/full-image-background'
], function (
  angularApp
) {

  angularApp.controller('loginCtrl', ['$scope', 'loginService', function($scope, loginService) {
    $scope.data = {
      username: '',
      password: ''
    };

    $('#backgroundImage').fullscreenBackground();

    $scope.login = function() {
      if ($scope.data.username == null || $scope.data.username.length == 0
          || $scope.data.password == null || $scope.data.password.length == 0) {
        alert('����д�û���������');
        return ;
      }

      loginService.login($scope.data);
    }

  }]);

});