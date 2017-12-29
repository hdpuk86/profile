var PortfolioView = function(projects) {
  var div = document.getElementById('main-container');
  projects.forEach((project) => {
    var imageDiv = document.createElement('div');
    imageDiv.className = 'project-img-div';
    var img = document.createElement('img');
    img.className = 'project-img';
    img.src = project.squareImage;
    imageDiv.appendChild(img);
    div.appendChild(imageDiv);
  });
};

module.exports = PortfolioView;
