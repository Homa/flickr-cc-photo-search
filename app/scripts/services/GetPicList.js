'use strict';

angular.module('FlickrCC').
factory( 'GetPicList', function($http, $window, $log, Config) {
  
  // API reference: https://www.flickr.com/services/api/flickr.photos.search.html
  
  var _getBaseUrl = function(){
    var baseUrl = 'https://api.flickr.com/services/rest/?format=json&jsoncallback=JSON_CALLBACK' + '&api_key=' + Config.getAPIKey();
    return baseUrl;
  };

  var getPiclist = function(searchTerm) {
    var method  = '&method=' + 'flickr.photos.search';
    var perPage = '&per_page=' + Config.getNoPerPage();
    var searchText = '&text=' + searchTerm;
    var url = _getBaseUrl() + method + perPage + searchTerm + searchText;
    $window.alert(url);

    return $http.jsonp(url)
            .success(function(result) {
              console.log('succes');
              return result;
            })
            .error(function(reason){
              $log.error('Request Failed: ', reason);
            });
          };

  return { getPiclist: getPiclist };
});
