'use strict';

angular.module('FlickrCC')
  .factory('Config', function() {
    
    // Add your API key
    var API_KEY = '4ee9c51267d03806af2fd852a859fa5b';
    
    // Number of picturs to be returned in each Flickr call
    var PER_PAGE = 5;

    return {

      // @return API KEY
      getAPIKey: function() {
        return API_KEY;
      },

      // @return number of picture per API call
      getNoPerPage: function() {
        return PER_PAGE;
      }
    };
  });