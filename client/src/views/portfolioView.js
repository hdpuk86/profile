var PortfolioView = function(projects) {
  var div = document.getElementById('main-container');
  projects.forEach((project) => {
    var img = document.createElement('img');
    img.className = 'project-img';
    img.src = project.mainImage;
    div.appendChild(img);
  });
};

module.exports = PortfolioView;
