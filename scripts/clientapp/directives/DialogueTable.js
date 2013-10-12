
ClientApp.Directives.directive('dialogueTable', function(){
	return{
		templateUrl: "partials/dialogue-table.html",
		restrict: 'E',
		scope: {
			verses : "="
		}
	};
});