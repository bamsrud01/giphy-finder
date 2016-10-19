var app = angular.module('giphyApp', []);

app.controller('MainController', MainController);

function MainController($http) {
  var main = this;
  console.log('MainController loaded');

  main.pic = '';  
  main.searchItem = function() {

  }   //  End of searchItem

  main.randomSearch = function() {

  }   //  End of randomSearch

} //  End of MainController
