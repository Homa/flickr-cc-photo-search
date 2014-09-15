'use strict';

angular.module('FlickrCC')

  .controller('MainCtrl', function($scope, $location, version, GetPicList) {

  	$scope.doSearch = function() {
  		
  		var searchTerm = $scope.searchTerm;
  		GetPicList.getPiclist(searchTerm)
  			.then(function(data){
	  			console.log('main');
	  			console.log(data);
  			});
  	};

    $scope.$path = $location.path.bind($location);

  });
