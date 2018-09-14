const portfolio = [
  {
      name: 'Burger Bonzai',
      image: './assets/images/burgerBonzai.PNG',
      description: 'Burger Bonzai is a full-stack web-app using MySQL, Node, Express, Handlebars and a homemade ORM.',
      technologies:'',
      live: 'https://enigmatic-lowlands-17209.herokuapp.com/',
      github: 'https://github.com/loftusjl/burger',
      types: ['fullStack']
  },
  {
      name: 'Friend Finder',
      image: './assets/images/friendfinder.jpg',
      description: 'Friend Finder is a full-stack web-app that will compare your survey results with those of 200 users and return the name and profile pic of the people who match your responses most closely!',
      technologies:'',
      live: 'https://frozen-river-95808.herokuapp.com/',
      github: 'https://github.com/loftusjl/FriendFinder',
      types: ['fullStack']
  },
  {
      name: 'Bamazon Node App',
      image: './assets/images/bamazonButton.PNG',
      description: "An Amazon-like storefront using MySQL, NodeJS, and Javascript. The app takes in orders from customers and depletes stock from the store's inventory. It will also track product sales across store departments and then provide a summary of the highest-grossing departments in the store along with various other functions.",
      technologies:'',
      live: '',
      github: 'https://github.com/loftusjl/bamazon',
      types: ['backEnd']
  },
  {
      name: 'The Destinator',
      image: './assets/images/travelMap01.jpg',
      description: 'A destination search site filtered by country and then desired city. The Destinator gives you a 5 day forecast, highest ranked hotels, restaurants, and points of interest in the surrounding area.',
      technologies:'',
      live: 'https://loftusjl.github.io/TheDestinator/',
      github: 'https://github.com/loftusjl/TheDestinator',
      types: ['fullStack']
  },
  {
      name: 'LIRI Node App',
      image: './assets/images/CLI.png',
      description: 'A NodeJS command line tool for pulling tweets or movie and song info.',
      technologies:'',
      live: '',
      github: 'https://github.com/loftusjl/liri-node-app',
      types: ['backEnd']
  },
  {
      name: 'Crystal Lazor Gunship!',
      image: './assets/images/crystalGame.png',
      description: 'Each game your crystals receive a random value. Click a crystal and try to remember the value. Each click adds to your score. Try to hit the target score without going over!',
      technologies:'',
      live: 'https://loftusjl.github.io/Crystal-Lazor-Gunship/',
      github: 'https://github.com/loftusjl/Crystal-Lazor-Gunship',
      types: ['frontEnd']
  },
  {
      name: 'Horror Hangman',
      image: './assets/images/hangmanChucky.jpg',
      description: 'Try to guess the villain in this horror movie take on the classic game hangman!',
      technologies:'',
      live: 'https://loftusjl.github.io/WordGuessGame/',
      github: 'https://github.com/loftusjl/WordGuessGame',
      types: ['frontEnd']
  },
  {
      name: 'HIPAA Quiz',
      image: './assets/images/HIPAA.png',
      description: 'A HIPAA training quiz which provides a knowledge check for HIPAA training. Questions are randomized and you areonly given so much time to answer. You must score 70% or greater to pass.',
      technologies:'',
      live: 'https://loftusjl.github.io/TriviaGame/',
      github: 'https://github.com/loftusjl/TriviaGame',
      types: ['frontEnd']
  },
  {
      name: 'Giphy Topics',
      image: './assets/images/giphyGuy.png',
      description: 'A Giphy image grabber using the Giphy API. Grab images from the site and display them in thumbnail sized images based on pre-selected topics or topics you enter. Images will toggle animation on click. **Warning: This site is loud**',
      technologies:'',
      live: 'https://loftusjl.github.io/GiphySearch/',
      github: 'https://github.com/loftusjl/GiphySearch',
      types: ['frontEnd']
  },
  {
      name: 'Train Schedule',
      image: './assets/images/trainSchedule.jpg',
      description: 'Enter your trains with the Train Name, Destination, First Train Time (in military time), and Frequency -- in minutes. The scheduler will keep track of when the trains are due to arrive and alert you about which should be showing up next in relative time.',
      technologies:'',
      live: 'https://loftusjl.github.io/TrainSchedule',
      github: 'https://github.com/loftusjl/TrainSchedule',
      types: ['frontEnd']
  }
];

// TypeWriter was created by Daniel Groen
// https://codepen.io/danielgroen/pen/VeRPOq

document.addEventListener('DOMContentLoaded', function (event) {
    addProject(portfolio);
  // array with texts to type in typewriter
  var dataText = ["Hi, I'm Jesse.", "Front-End Developer.", "Back-End Developer.", "Full-Stack Developer."];
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
    });
});

function addProject(data) {
  data.forEach(data => {
    let elem = document.getElementById('applications');
    let newProject = document.createElement("div");
    let domString = `<div class="col s12 l6">
    <div class="card small hoverable">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${data.image}">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${data.name}
          <i class="material-icons right">more_vert</i>
        </span>
        <div class="card-action activator">
          <a class="activator teal-text text-darken-4">Read more...</a>
        </div>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${data.name}
          <i class="material-icons right">close</i>
        </span>
        <p>${data.description}</p>
        <div class="container">
          <div class="row card-action">
            <div class="col s5">
              <p>
                <a href="${data.live}" target="_blank" class="tooltipped teal-text text-darken-4" data-position="top" data-tooltip="Live Site"><i class="material-icons">web</i>
                Live Site</a>
              </p>
            </div>
            <div class="col s5">
              <p>
                <a href="${data.github}" target="_blank" class="tooltipped teal-text text-darken-4" data-position="top" data-tooltip="GitHub"><i class="fab fa-github-square fa-lg"></i>
                GitHub</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  newProject.innerHTML = domString;
  elem.appendChild(newProject);
  });
}