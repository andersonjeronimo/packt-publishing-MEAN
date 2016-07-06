angular.module('angularApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.mask']);
// angular.element(document).ready(function () {
//   angular.bootstrap(document, ['angularApp']);
// });

angular.module('angularApp').controller('mainController', function ($scope, view) {

  $scope.view = view;  
  $scope.pageClass = 'default-class';
  $scope.isCollapsed = true;
    
});