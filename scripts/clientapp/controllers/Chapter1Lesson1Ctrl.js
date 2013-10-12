ClientApp.Controllers.controller('Chapter1Lesson1Ctrl', ['$scope', function($scope){
	$scope.vocabs = [
		{
			french: 'Bonjour',
			english: 'Good Day (A general polite hello)'
		},
		{
			french: 'Bonsoir',
			english: 'Good Evening'
		},
		{
			french: 'Au revoir',
			english: 'Good bye'
		},
		{
			french: 'Merci',
			english: 'Thank you'
		},
		{
			french: 'Merci beaucoup',
			english: 'Thank you very much'
		},
		{
			french: 'Excusez-moi',
			english: 'Good Day'
		},
		{
			french: 'Oui',
			english: 'Yes'
		},
		{
			french: 'Non',
			english: 'No'
		},
		{
			french: 'Bienvenue!',
			english: 'Welcome'
		},
		{
			french: 'Excusez-moi',
			english: 'Good Day'
		},
		{
			french: 'Enchanté',
			english: 'Nice to meet you.'
		}
	];

	$scope.dialogueA = [
		{name: 'Max', text: "Bonjour! Je m'appelle Max Alexander. Ça va?", translation: "Hello! My name is Max Alexander. How are you?"},
		{name: 'Celine', text: "Bonjour Max! Ça va bien, Je m'appelle Celine Didier. Tu es français?", translation: "Hello Max! I am doing well. My name is Celine. Are you French?"},
		{name: 'Max', text: "Non, je suis americain. Et tu? Tu es française?", translation: "No, I am american. And you? Are you French?"},
		{name: 'Celine', text: "Oui, je suis française.", translation: "Yes, I am French"},
		{name: 'Max', text: "Enchanté.", translation: "Nice to meet you."},
		{name: 'Celine', text: "Enchanté.", translation: "Nice to meet you."}
	];
}]);