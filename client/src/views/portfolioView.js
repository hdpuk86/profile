var addHover = function(project, img){
  var div = document.getElementById(`${project.name}-img-div`);
  img.addEventListener('mouseover', function(){
    var name = document.createElement('h2');
    name.innerText = project.name;
    name.className = 'projectName';
    div.appendChild(name);
  });
  img.addEventListener('mouseleave', function(){
    div.removeChild(div.lastChild);
  });
};

var PortfolioView = function(projects) {
  var div = document.getElementById('main-container');
  projects.forEach((project) => {
    var imageDiv = document.createElement('div');
    imageDiv.className = 'project-img-div';
    imageDiv.id = `${project.name}-img-div`;
    var img = document.createElement('img');
    img.className = 'project-img';
    img.src = project.squareImage;
    imageDiv.appendChild(img);
    div.appendChild(imageDiv);
    addHover(project, img);
  });
};

module.exports = PortfolioView;
