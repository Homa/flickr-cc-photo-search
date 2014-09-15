'use strict';

angular.module('FlickrCC').
factory( 'GetPicsList', ['$http', '$log', 'Configfunction', function($http, $log, Config) {
  
  // API reference: https://www.flickr.com/services/api/flickr.photos.search.html
  
  var _getBaseUrl = function(){
    var baseUrl = 'https://api.flickr.com/services/rest/?format=json&jsoncallback=JSON_CALLBACK' + '&api_key=' + Config.getAPIKey();
    return baseUrl;
  };

  var getPicsList = function(searchTerm, license) {
    var method  = '&method=' + 'flickr.photos.search';
    var perPage = '&per_page=' + Config.getNoPerPage();
    var searchText = '&text=' + searchTerm;
    var license = '&license=' + 
    var url = _getBaseUrl() + method + perPage + searchTerm + searchText;

    return $http.jsonp(url)
            .success(function(result) {
              return result;
            })
            .error(function(reason){
              $log.error('Request Failed: ', reason);
            });
          };

  return { getPicsList: getPicsList };
}]);
