app.controller('book_details',function($scope,$http,$location,$rootScope){
					//	$scope.msg = "New customer added";

				  var config = {
                headers : {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            }



						var name=$location.search();
						console.log("name="+name);
						var name1 = $.param(name);
						console.log("name1="+name1);

						name2=name1.split('=');
						console.log("name2="+name2);
						console.log(name2[0]);		       //name2[0] is isbn no
						//to search a particular book


setTimeout(	$scope.searchByISBN=function(book){


			 var xyz=$.param({isbn:name2[0]});

					$rootScope.book={};

					console.log("inside searchByISBN.. "+xyz);
							$http.post('http://172.27.12.81:3000/book/byisbn',xyz,config)
					   .then(
								   function(response){
									 // success callback
									 console.log('success');
									 $rootScope.book=response.data;
                                    },
								   function(response){
									 // failure callback
									 console.log('failed');
								   }
							);

					 },500);

/*	$scope.disp_function=function(){
		console.log("Inside disp_function..");
		console.log("disp current:"+$scope.disp);
		$scope.disp=true;
		console.log("disp returned:"+$scope.disp);

	}*/

	$scope.editBook=function(book){
		$rootScope.book=book;
        console.log($rootScope.book);

		var data= $.param({
							isbn: $rootScope.book.isbn,
							title: $rootScope.book.title,
							author:$rootScope.book.author,
							price:$rootScope.book.price
							});
console.log("data being sent:"+data);
							$http.put('http://172.27.12.81:3000/book/update',data,config)
					   .then(
								   function(response){
									 // success callback
									 console.log('success');
									 alert(response.data.message);
									},
								   function(response){
									 // failure callback
									 console.log('failed');
								   }
							);
	};

	$scope.deleteBook=function(book){
					var isbn=book.isbn;
					console.log(isbn);
					 var isbn1={"isbn":isbn};
					console.log(isbn1);
				$http({
											url:"http://172.27.12.81:3000/book/remove",
											method:'DELETE',
											data: $.param(isbn1),
												headers: {'Content-Type': 'application/x-www-form-urlencoded'}
										 }).success(function (response) {
											$scope.value = response;
											  alert($scope.value);

										 })
										   .error(function (error) {
											  alert(error);
										   });

					};

		});
