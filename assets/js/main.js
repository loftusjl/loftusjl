let portfolio = require('./portfolio');

document.onload = function() {

}

function addProject(name, image, description, technologies, live, github, types) {
  const elem = document.createElement('div');
  let domString = `<div class="col s12 l6">
  <div class="card small hoverable">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${image}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${name}
        <i class="material-icons right">more_vert</i>
      </span>
      <div class="card-action activator">
        <a class="activator teal-text text-darken-4">Read more...</a>
      </div>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${name}
        <i class="material-icons right">close</i>
      </span>
      <p>${description}</p>
      <div class="container">
        <div class="row card-action">
          <div class="col s5">
            <p>
              <a href="${live}" target="_blank" class="tooltipped teal-text text-darken-4" data-position="top" data-tooltip="Live Site"><i class="material-icons">web</i>
              Live Site</a>
            </p>
          </div>
          <div class="col s5">
            <p>
              <a href="${github}" target="_blank" class="tooltipped teal-text text-darken-4" data-position="top" data-tooltip="GitHub"><i class="fab fa-github-square fa-lg"></i>
              GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
elem.innerHTML = domString;
}
























// TypeWriter was created by Daniel Groen
// https://codepen.io/danielgroen/pen/VeRPOq

document.addEventListener('DOMContentLoaded', function (event) {
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