var PortfolioView = function(projects) {
  var div = document.getElementById('main-container');
  projects.forEach((project) => {
    var name = document.createElement('h2');
    name.innerText = project.name;
    div.appendChild(name);
  });
};

module.exports = PortfolioView;
