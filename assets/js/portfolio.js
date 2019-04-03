const portfolio = [
  {
    name: 'Dynamite Kitchen Supplier',
    image: './assets/images/dk.jpg',
    description:
      "Dynamite Kitchen Supplier (DkS) is a full-stack web-app that will allow for role based users to input orders for purchase using a restaurant kitchen as its model. The app allow's for a seperation of roles each with their own set of privileges and access. Users will need to login or create a new user which will be stored in the database. Username: supervisor, Password: password",
    technologies: 'Javascript, SQLite, NodeJS',
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
  let styles = `
          .pCard {
              border: 5px solid ${
                document.getElementById('orange').style.backgroundColor
              };
              overflow: hidden;
              height:150px;
              transition: max-height 0.6s ease-in-out;
              -webkit-transition: max-height 0.6s ease-in-out; /* Safari 3.1 to 6.0 */
            }
            .pCard[data-clicked='1'] {
                height: auto;
            }
            #p0 {
                height:auto; 
              }
          .pHead {
            width: 100%;
            height: 100%;
            min-width: 100%;
            min-height: 100%;
            position: relative;
            cursor: pointer;
          }
          .pHead::before {
            background-size: cover;
            content: "";
            display: block;
            top:0;
            left: 0;
            width: 100%;
            height: 150px;
            z-index: -2;
            opacity: 0.65;
        }
        .pHead::after {
            background-color: #00d400;
            content: "";
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.4;
            }

          .textOverlay {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            
          }
          .pHead-text {
            color: #fff;
            text-shadow: #343a40 2px 2px;
            min-width: 100%;
            min-height: 150px;
            display: block;
            position: absolute;
            top:15px;
          }
          .pHead-text::before {
            content: "";
            margin-left: 0;
            min-width: 100%;
            min-height: 150px;
            z-index: -1;
            opacity: 0.4;
            background-color: #343a40;
          } 
          .pHead-title, .pHead-text {
            width: 100%;
            display: block;
            text-align: center;
          } 
          .pHead-title {
            margin: 10px 0;
            text-transform: uppercase;
          }
          .pCard span{
            margin: 15px;
            width: 100%;
          }
         

      `;
  addProjects(portfolio, styles);
  clickExpand();
});

function addProjects(data, styles) {
  const projects = document.getElementById('orange-content');
  data.forEach((el, index) => {
    const newProject = document.createElement('div');
    newProject.className = 'pCard';
    newProject.id = `p${index}`;
    newProject.dataset.clicked = '0';

    styles += `
    #p${index} .pHead::before {
        background-image: url('${el.image}');
    }
        `;

    let domString = `
        <div class="pHead textOverlay">
            <div class="pHead-text">
                <h1 class="pHead-title">${el.name}</h1>
                <h3 class="pHead-tech">${el.technologies}</h3>
            </div>
        </div>
        <p class="pDesc">
          ${el.description}
          <span class="pLogin">Project Login info</span>
        </p>
        <span class="pLinks"><a class="button" href="${
          el.live
        }" target="_blank"><i class="fas fa-link"></i> Live Site</a><a class="button" href="${
      el.github
    }" target="_blank"><i class="fab fa-github-square fa-lg" aria-hidden="true"></i
    > GitHub</a></span>
    `;
    newProject.innerHTML = domString;
    projects.appendChild(newProject);
  });
  insertCSS(styles);
}
function clickExpand() {
  const pItems = document.getElementsByClassName('pCard');
  const pArray = Array.from(pItems);
  for (let p = 0; p < pItems.length; p++) {
    pItems[p].addEventListener('click', function() {
      if (pItems[p].dataset.clicked === '0') {
        setAttributes(pItems[p], {
          'data-clicked': '1',
          style: `min-height:auto; height:auto;`
        });
      }
      let toggles = pArray.filter(proj => proj != pArray[p]);
      for (t in toggles) {
        setAttributes(toggles[t], {
          'data-clicked': '0',
          style: `height: 150px;
            overflow: hidden;`
        });
      }
    });
  }
}
function setAttributes(el, attr) {
  for (const key in attr) {
    el.setAttribute(key, attr[key]);
  }
}
function insertCSS(css) {
  // Create our stylesheet
  const style = document.createElement('style');
  style.innerHTML = css;

  // Get the first script tag
  const ref = document.querySelector('script');

  // Insert new styles before the first script tag
  ref.parentNode.insertBefore(style, ref);
}
