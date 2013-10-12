ClientApp.Directives.directive('vocabTable', function(){
	return{
		templateUrl: "partials/vocab-table.html",
		restrict: 'E',
		scope: {
			vocabs : "="
		}
	};
});