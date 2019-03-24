// color elements
const orange = document.getElementById('orange');
const orangeText = document.getElementById('orange-text');
const blue = document.getElementById('blue');
const blueText = document.getElementById('blue-text');
const yellow = document.getElementById('yellow');
const yellowText = document.getElementById('yellow-text');

const vW = window.innerWidth * 0.8;
const vH = 300;

const colorArray = [
  {
    color: orange,
    text: orangeText,
    opposite: oppositeLength(20),
    adjacent: adjacentLength(40),
    hypotenuse: Math.hypot(oppositeLength(20), adjacentLength(40))
  },
  {
    color: blue,
    text: blueText,
    opposite: oppositeLength(40),
    adjacent: adjacentLength(60),
    hypotenuse: Math.hypot(oppositeLength(40), adjacentLength(60))
  },
  {
    color: yellow,
    text: yellowText,
    opposite: oppositeLength(60),
    adjacent: adjacentLength(80)
  }
];

document.addEventListener('DOMContentLoaded', function() {
  a = adjacentLength(20);
  b = Math.hypot(oppositeLength(0), adjacentLength(20));
  c = oppositeLength(0);
  console.log(colorArray);
  setAttributes(orangeText, {
    style: `transform: rotate(-${solveAngle(
      a,
      b,
      c
    )}deg); position: absolute; left: ${vW - 0.57 * vW}px; bottom:70px; `
  });

  // On-click content toggles
  let cItems = document.getElementsByClassName('color-clip');
  let cArray = Array.from(cItems); // converts elements list into array
  for (let c = 0; c < cArray.length; c++) {
    let color = cArray[c];
    let clicked = document.getElementById(`${color.id}-content`).dataset
      .clicked;
    cArray[c].addEventListener(
      'click',
      function() {
        clicked ^= 1;
        setAttributes(document.getElementById(`${color.id}-content`), {
          'data-clicked': clicked,
          style: `background-color: ${cArray[c].style.backgroundColor};`
        });
        let toggles = cArray.filter(color => color != cArray[c]);
        for (t in toggles) {
          if (
            document.getElementById(`${toggles[t].id}-content`).dataset
              .clicked == 1
          ) {
            setAttributes(document.getElementById(`${toggles[t].id}-content`), {
              'data-clicked': 0
            });
          }
        }
      },
      false
    );
  }
});

function oppositeLength(percent) {
  return vH - vH * (percent / 100);
}
function adjacentLength(percent) {
  return vW - vW * (percent / 100);
}
function solveAngle(a, b, c) {
  var temp = (a * a + b * b - c * c) / (2 * a * b);
  if (-1 <= temp && temp <= 0.9999999) return radToDeg(Math.acos(temp));
  else if (temp <= 1)
    // Explained in https://www.nayuki.io/page/numerically-stable-law-of-cosines
    return radToDeg(Math.sqrt((c * c - (a - b) * (a - b)) / (a * b)));
  else throw 'No solution';
}
function radToDeg(x) {
  return (x / Math.PI) * 180;
}
function setAttributes(el, attr) {
  for (const key in attr) {
    el.setAttribute(key, attr[key]);
  }
}
