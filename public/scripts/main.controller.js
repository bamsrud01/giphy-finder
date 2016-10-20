angular.module('giphyApp').controller('MainController', MainController);

function MainController(giphyApi) {
  var main = this;
  console.log('MainController loaded');

  main.class = 'hidden';
  main.pic = '';
  main.gifs = [];

main.searchItem = function() {
  main.class = 'hidden';
  giphyApi.searchItem(main.searchTerm).then(function(gifs){
    main.gifs = gifs;
  });
}

main.randomSearch = function() {
  main.pic = '';
  main.class = '';
  main.gifs = [];
  giphyApi.randomSearch().then(function(image){
    main.pic = image;
  });
}


}
