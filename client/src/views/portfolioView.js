var addHover = function(project, imageDiv){
  var name = document.getElementById(`${project.name}-name`);
  imageDiv.addEventListener('mouseover', function(){
    name.style.visibility = 'visible';
  });
  imageDiv.addEventListener('mouseleave', function(){
    name.style.visibility = 'hidden';
  });
};

var addImageContainer = function(project){
  var imageDiv = document.createElement('div');
  imageDiv.className = 'project-img-div';
  imageDiv.id = `${project.name}-img-div`;
  return imageDiv;
};

var addImage = function(project){
  var img = document.createElement('img');
  img.className = 'project-img';
  img.src = project.squareImage;
  return img;
};

var addName = function(project){
  var name = document.createElement('h2');
  name.innerText = project.name;
  name.className = 'project-name';
  name.id = `${project.name}-name`;
  return name;
};

var appendAll = function(div, imageDiv, img, name){
  imageDiv.appendChild(img);
  imageDiv.appendChild(name);
  div.appendChild(imageDiv);
};

var PortfolioView = function(projects) {
  var div = document.getElementById('main-container');
  projects.forEach((project) => {
    var imageDiv = addImageContainer(project);
    var img = addImage(project);
    var name = addName(project);
    appendAll(div, imageDiv, img, name);
    addHover(project, imageDiv);
  });
};

module.exports = PortfolioView;
