'use strict';

angular.module('FlickrCC')

  .controller('PicsResultCtrl', ['$log', '$scope', '$location', 'GetPicsList', function($log, $scope, $location, GetPicsList) {
    
    // get search term and license values from url
		var searchTerm = $location.search().q;
    var license = $location.search().license;
    var pageNo = 1;
    $scope.pics = [];

    $scope.loadMore = function() {
      pageNo += 1;
      getPicsList(searchTerm, license, pageNo);
    };

    //call GetPicsList service
    var getPicsList = function(searchTerm, license, pageNo) {

      GetPicsList.getPicsList(searchTerm, license, pageNo)
        .then(function(data) {
          $scope.pics = $scope.pics.concat(data.data.photos.photo);
        })
        .then(null, function(error) {
          $log.error('Error: ' + error);
        });
    };

    getPicsList(searchTerm, license, pageNo);

  }]);
