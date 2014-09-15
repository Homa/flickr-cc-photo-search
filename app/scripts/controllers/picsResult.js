'use strict';

angular.module('FlickrCC')

  .controller('PicsResultCtrl', function($scope, $location, GetPicsList) {
    
    // get search term and license values from url
		var searchTerm = $location.search().q;
    var license = $location.search().license;

    GetPicsList.getPicsList(searchTerm, license)
      .then(function(data) {
        $scope.pics = data.data.photos.photo;
      });
      
  });
