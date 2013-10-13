ClientApp.Controllers.controller('404Ctrl', ['$scope', '$location', function($scope, $location){
	$scope.header = "Not found! "
	$scope.message = "The lesson or content that you were looking for is either not ready yet or was not found!";
}]);