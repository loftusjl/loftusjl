const portfolio = [
  {
    name: 'Dynamite Kitchen Supplier',
    image: './assets/images/dks.png',
    description:
      "Dynamite Kitchen Supplier (DkS) is a full-stack web-app that will allow for role based users to input orders for purchase using a restaurant kitchen as its model. The app allow's for a seperation of roles each with their own set of privileges and access. Users will need to login or create a new user which will be stored in the database. Username: supervisor, Password: password",
    technologies: '',
    live: 'https://serene-forest-68972.herokuapp.com/',
    github: 'https://github.com/loftusjl/Dynamite-Kitchen-Supplier',
    types: ['fullStack']
  },
  {
    name: 'Burger Bonzai',
    image: './assets/images/burgerBonzai.PNG',
    description:
      'Burger Bonzai is a full-stack web-app using MySQL, Node, Express, Handlebars and a homemade ORM.',
    technologies: '',
    live: 'https://enigmatic-lowlands-17209.herokuapp.com/',
    github: 'https://github.com/loftusjl/burger',
    types: ['fullStack']
  },
  {
    name: 'Friend Finder',
    image: './assets/images/friendfinder.jpg',
    description:
      'Friend Finder is a full-stack web-app that will compare your survey results with those of 200 users and return the name and profile pic of the people who match your responses most closely!',
    technologies: '',
    live: 'https://frozen-river-95808.herokuapp.com/',
    github: 'https://github.com/loftusjl/FriendFinder',
    types: ['fullStack']
  },
  {
    name: 'Bamazon Node App',
    image: './assets/images/bamazonButton.PNG',
    description:
      "An Amazon-like storefront using MySQL, NodeJS, and Javascript. The app takes in orders from customers and depletes stock from the store's inventory. It will also track product sales across store departments and then provide a summary of the highest-grossing departments in the store along with various other functions.",
    technologies: '',
    live: '',
    github: 'https://github.com/loftusjl/bamazon',
    types: ['backEnd']
  },
  {
    name: 'The Destinator',
    image: './assets/images/travelMap01.jpg',
    description:
      'A destination search site filtered by country and then desired city. The Destinator gives you a 5 day forecast, highest ranked hotels, restaurants, and points of interest in the surrounding area.',
    technologies: '',
    live: 'https://loftusjl.github.io/TheDestinator/',
    github: 'https://github.com/loftusjl/TheDestinator',
    types: ['fullStack']
  },
  {
    name: 'LIRI Node App',
    image: './assets/images/CLI.png',
    description:
      'A NodeJS command line tool for pulling tweets or movie and song info.',
    technologies: '',
    live: '',
    github: 'https://github.com/loftusjl/liri-node-app',
    types: ['backEnd']
  },
  {
    name: 'Crystal Lazor Gunship!',
    image: './assets/images/crystalGame.png',
    description:
      'Each game your crystals receive a random value. Click a crystal and try to remember the value. Each click adds to your score. Try to hit the target score without going over!',
    technologies: '',
    live: 'https://loftusjl.github.io/Crystal-Lazor-Gunship/',
    github: 'https://github.com/loftusjl/Crystal-Lazor-Gunship',
    types: ['frontEnd']
  },
  {
    name: 'Horror Hangman',
    image: './assets/images/hangmanChucky.jpg',
    description:
      'Try to guess the villain in this horror movie take on the classic game hangman!',
    technologies: '',
    live: 'https://loftusjl.github.io/WordGuessGame/',
    github: 'https://github.com/loftusjl/WordGuessGame',
    types: ['frontEnd']
  },
  {
    name: 'HIPAA Quiz',
    image: './assets/images/HIPAA.png',
    description:
      'A HIPAA training quiz which provides a knowledge check for HIPAA training. Questions are randomized and you areonly given so much time to answer. You must score 70% or greater to pass.',
    technologies: '',
    live: 'https://loftusjl.github.io/TriviaGame/',
    github: 'https://github.com/loftusjl/TriviaGame',
    types: ['frontEnd']
  },
  {
    name: 'Giphy Topics',
    image: './assets/images/giphyGuy.png',
    description:
      'A Giphy image grabber using the Giphy API. Grab images from the site and display them in thumbnail sized images based on pre-selected topics or topics you enter. Images will toggle animation on click. **Warning: This site is loud**',
    technologies: '',
    live: 'https://loftusjl.github.io/GiphySearch/',
    github: 'https://github.com/loftusjl/GiphySearch',
    types: ['frontEnd']
  },
  {
    name: 'Train Schedule',
    image: './assets/images/trainSchedule.jpg',
    description:
      'Enter your trains with the Train Name, Destination, First Train Time (in military time), and Frequency -- in minutes. The scheduler will keep track of when the trains are due to arrive and alert you about which should be showing up next in relative time.',
    technologies: '',
    live: 'https://loftusjl.github.io/TrainSchedule',
    github: 'https://github.com/loftusjl/TrainSchedule',
    types: ['frontEnd']
  }
];
// add projects to portfolio section
document.addEventListener('DOMContentLoaded', function() {
  addProjects(portfolio);
});

function addProjects(data) {
  const projects = document.getElementById('orange-content');
  data.forEach(data => {
    const newProject = document.createElement('div');
    newProject.className = 'portfolioWrapper';
    let domString = `<div class="projectContainer" style="border: 5px solid ${
      document.getElementById('orange').style.backgroundColor
    };">
        <div class="pHead" style="background-image: url('${
          data.image
        }'); background-size: cover; background-repeat: no-repeat; height:150px;">
          <div class="pHead-text">${data.name}</div>
        </div>
        <div class="pTech">${data.technologies}</div>
        <div class="pDesc">
          ${data.description}
          <span class="pLogin">Project Login info</span>
        </div>
        <div class="pLinks"><a href="${
          data.live
        }" target="_blank">Live Site</a> | <a href="${
      data.github
    }" target="_blank">GitHub</a></div>
      </div>`;
    newProject.innerHTML = domString;
    projects.appendChild(newProject);
  });
}
