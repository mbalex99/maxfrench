ClientApp.Controllers.controller('LessonsListCtrl', ['$scope', 'chapters', function($scope, chapters){

	$scope.chapters = [];

	_.each(chapters, function(chapter){

		_.each(chapter.lessons, function(lesson){
			lesson.routeLink = '#/chapters/' +  chapter.chapterId + '/lessons/' + lesson.lessonId;
		})

		$scope.chapters.push(chapter);
	});

}]);