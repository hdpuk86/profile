use portfolio;
db.dropDatabase();

db.projects.insertMany([
  {
    name: 'Animal Shelter',
    github: 'https://github.com/hdpuk86/Animal_shelter',
    url: null,
    mainImage: 'images/portfolio/animalShelter.png'
  }
]);
