'use strict';

describe('Unit: Testing Service - GetPicsList', function() {

  var httpBackend,
      GetPicsList,
      Config;

  // Mock 'personalWebsiteApp' angular module
  beforeEach(module('FlickrCC'));

  // get GetPicsList service and $httpBackend
  // $httpBackend will be a mock by angular-mocks.js
  beforeEach(inject( function($httpBackend, _GetPicsList_, _Config_) {
    httpBackend = $httpBackend;
    GetPicsList = _GetPicsList_;
    Config = _Config_;

    var url = 'https://api.flickr.com/services/rest/?format=json&jsoncallback=JSON_CALLBACK&api_key=4ee9c51267d03806af2fd852a859fa5b&method=flickr.photos.search&per_page=50&text=green&license=4,2&page=1';
    httpBackend.whenJSONP(url).respond(200, 'mock data');
  }));

  // make sure no expectations were missed in tests.
  // (e.g. expectGET or expectPOST)
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });


  it('should have a getPicsList function', function() {
    expect(angular.isFunction(GetPicsList.getPicsList)).toBe(true);
  });

  it('should set result on successful search', function() {

    // set up some data for the http call to return and test later.
    var returnedPromise = GetPicsList.getPicsList('green', '4,2', 1);

    // set up a handler for the response, that will put the result
    // into a variable in this scope for you to test.
    var result;
    returnedPromise.then(function(response) {
      result = response;
    });
    
    // flush the backend to "execute" the request to do the expectedGET assertion.
    httpBackend.flush();
    
    // check the result. 
    expect(result.data).toContain('mock data');
    expect(result.status).toEqual(200);
  });

});

describe('Unit: Testing Service - Config', function() {

  var Config;
  // Mock 'personalWebsiteApp' angular module
  beforeEach(module('FlickrCC'));

  // get GetPicsList service and $httpBackend
  // $httpBackend will be a mock by angular-mocks.js
  beforeEach(inject( function(_Config_) {
    Config = _Config_;  
  }));

  it('should have a getAPIKey function', function(){
    expect(angular.isFunction(Config.getAPIKey)).toBe(true);
  });

  it('should have a getNoPerPage function', function(){
    expect(angular.isFunction(Config.getNoPerPage)).toBe(true);
  });

  describe('Unit: Testing Service - Config getNoPerPage function', function() {

    it('should return a number between 1 and 500', function(){
      expect(Config.getNoPerPage() > 0 ).toBeTruthy();
      expect(Config.getNoPerPage() <= 500 ).toBeTruthy();
    });
    
  });

});
