angular.module('giphyApp').service('giphyApi', GiphyService);

function GiphyService($http) {

  var randomAPI = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
  var searchAPI = 'http://api.giphy.com/v1/gifs/search?q=';
  var giphyKey = '&api_key=dc6zaTOxFJmzC';

  this.searchItem = function(url) {
    url = url.split(' ').join('+');
    return $http.get(searchAPI + url + giphyKey)
    .then(function(response) {
      return response.data.data;
    });
  }

  this.randomSearch = function() {
    return $http.get(randomAPI)
    .then(function(response){
      return response.data.data.image_url;
    });
  }

}
