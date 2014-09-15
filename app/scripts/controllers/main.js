'use strict';

angular.module('FlickrCC')

  .controller('MainCtrl', function($scope, $location, version, GetPicsList) {

  	$scope.doSearch = function() {
  		
  		var searchTerm = $scope.searchTerm;
  		GetPicsList.getPicsList(searchTerm)
  			.then(function(data){
  			});
  	};

    $scope.$path = $location.path.bind($location);

  });
