var PortfolioView = require('./views/portfolioView');
var Request = require('./request');

var onLoad = function(){
  new Request('/portfolio', PortfolioView);
};

window.addEventListener('load', onLoad);
