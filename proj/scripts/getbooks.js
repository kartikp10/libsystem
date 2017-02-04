app.controller('myController',function($rootScope,$http) {


	$http.get("http://172.27.12.81:3000/book/list").then(function(response){
		$rootScope.bookdata = response.data;

		});

	$http.get("http://172.27.12.81:3000/author/list").then(function(response){
		$rootScope.authordata = response.data;

		});




});
    app.config(['$routeProvider',function($routeProvider){
				$routeProvider
				.when('/',{
				  templateUrl : 'pages/table.html',
          contoller : 'myController'
				})

				.when('/addBook',
				{
				  templateUrl : 'pages/addBook.html',
				  contoller : 'add-book'
				})

				.when('/addAuthor',
				{
				  templateUrl : 'pages/addAuthor.html',
				  contoller : 'add-author'
				})

			.when('/isbnclick',
				{
				  templateUrl : 'pages/book_details.html',
				  contoller : 'book_details'
				})

				.when('/authorclick',
				{
				  templateUrl : 'pages/author_details.html',
				  contoller : 'author_details'
				});


			}]);
