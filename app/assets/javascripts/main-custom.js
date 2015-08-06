var app = angular.module('eshopApp', []);
app.controller('loginRegSHCtrl', function($scope, $http, $window) {
	$scope.isVisible = true;
	$scope.isSelected = true;
	$scope.showHide = function() {
		$scope.isVisible = $scope.isVisible ? false : true;
		$scope.isSelected = $scope.isSelected ? false : true;
	}
	$scope.elogin = function() {
		$scope.formData = {"email": $scope.email, "password": $scope.password, "rememberMe": $scope.rememberMe};
		$http({
			url: "/app/elogin",
			method: 'POST',
			data: $.param($scope.formData),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function (response, status) {
			$scope.status = status;
			$scope.response = response;
		    $scope.result = response;
		    $window.location.reload();
		});
	}
	$scope.eregister = function() {
		$scope.formData = {"email": $scope.email, "password": $scope.password, "optIn": $scope.optIn};
		$http({
			url: "/app/eregister",
			method: 'POST',
			data: $.param($scope.formData),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function (response, status) {
			$scope.status = status;
			$scope.response = response;
		    $scope.result = response;
		    $window.location.reload();
		});
	}
});
