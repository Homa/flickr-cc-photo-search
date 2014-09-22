'use strict';

angular.module('FlickrCC')

  .controller('MainCtrl', function($scope, $location) {
    $scope.attribution = true;
    $scope.nonCommercial = true;

    var noDerivative = false,
        shareAlik = false;

    if($scope.noDerivativeShareAlik === 'noDerivative') {
      noDerivative = true;
    } else if ($scope.noDerivativeShareAlik === 'shareAlik') {
      shareAlik = true;
    }

  	$scope.doSearch = function() {

      // All cc images should have attribution license
      var licenseArray = [4];

      if ($scope.nonCommercial && shareAlik) {
        licenseArray.push(1);
      } else if($scope.nonCommercial && noDerivative) {
        licenseArray.push(3);
      } else if ($scope.nonCommercial) {
        licenseArray.push(2);
      } else if (noDerivative) {
        licenseArray.push(6);
      } else if (shareAlik) {
        licenseArray.push(5);
      }

  		var searchTerm = $scope.searchTerm;
      var license = licenseArray.join(',');

      $location.path('/search/results').search({
        'q': searchTerm,
        'license': license,
      });

  	};

  });


