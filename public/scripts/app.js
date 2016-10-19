var app = angular.module('giphyApp', []);

var randomAPI = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
var searchAPI = 'http://api.giphy.com/v1/gifs/search?q=';
var giphyKey = '&api_key=dc6zaTOxFJmzC';

app.controller('MainController', MainController);

function MainController($http) {
  var main = this;
  console.log('MainController loaded');

  main.class = 'hidden';

  main.pic = '';

  main.gifs = [];

  main.searchItem = function() {
    main.class = 'hidden';
    main.searchWords = main.searchTerm.split(' ');
    main.searchWords = main.searchWords.join('+');
    console.log(main.searchWords);

    $http.get(searchAPI + main.searchWords + giphyKey).then(function(response){
      console.log(response.data.data[0].url);
      main.gifs = response.data.data;
      console.log('main.gifs', main.gifs[0].images.original.url);
    });
  }   //  End of searchItem

  main.randomSearch = function() {
    main.class = '';
    main.gifs = [];
    $http.get(randomAPI).then(function(response){
      console.log(response.data.data.image_url);
      main.pic = response.data.data.image_url;
    });
  }   //  End of randomSearch

} //  End of MainController
