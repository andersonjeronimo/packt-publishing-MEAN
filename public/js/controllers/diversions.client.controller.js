angular.module('angularApp').controller('diversionController', function ($scope, diversionAjaxService, modelService) {
	$scope.model = modelService;
	$scope.diversoes = [];
});