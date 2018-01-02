use portfolio;
db.dropDatabase();

db.projects.insertMany([
  {
    name: 'Big 5 Safari Slots Game',
    type: 'Java, Android',
    github: 'https://github.com/hdpuk86/android_slot_machine',
    url: null,
    mainImage: 'images/portfolio/safariSlots.png',
    squareImage: 'images/portfolio/safariSquare.png'
  },
  {
    name: 'Animal Shelter',
    type: 'Ruby, Sinatra, postgreSQL',
    github: 'https://github.com/hdpuk86/Animal_shelter',
    url: null,
    mainImage: 'images/portfolio/animalShelter.png',
    squareImage: 'images/portfolio/shelterSquare.png'
  },
  {
    name: 'Space Oddity',
    type: 'Javascript, HTML, NoSQL',
    github: 'https://github.com/hdpuk86/space_oddity',
    url: 'space-oddity.herokuapp.com',
    mainImage: 'images/portfolio/spaceOddity.png',
    squareImage: 'images/portfolio/spaceSquare.png'
  }
]);
