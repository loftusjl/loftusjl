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
  a = adjacentLength(40);
  b = Math.hypot(oppositeLength(40), adjacentLength(40));
  c = oppositeLength(40);
  console.log(colorArray);
  console.log(`
  a = ${adjacentLength(40)}
  b = ${Math.hypot(oppositeLength(40), adjacentLength(40))}
  c = ${oppositeLength(40)}
  A = ${solveAngle(b, c, a)};
  B = ${solveAngle(c, a, b)};
  C = ${solveAngle(a, b, c)};
  total: ${a + b + c}`);

  const styles = `transform: rotate(-${solveAngle(
    a,
    b,
    c
  )}deg); position: absolute; left: ${vW - 0.57 * vW}px; bottom:70px; `;
  appendStyles(orangeText, styles);

  const content = document.getElementById('orange-content');
  let clicked = document.querySelector('#orange-content').dataset.clicked;
  orange.addEventListener('click', function() {
    clicked ^= 1;
    setAttributes(content, {
      'data-clicked': clicked,
      style: 'background-color: #be5c51;'
    });
  });
});

// add text rotation and position to colorText fields
function appendStyles(el, styles) {
  el.setAttribute('style', styles);
}
function findAngle(oLen, aLen, hLen) {
  // return Math.hypot(oppositeLength(oLen), adjacentLength(aLen));
  return (
    (Math.tan(oppositeLength(oLen) / adjacentLength(aLen)) * 180) / Math.PI
  );
}
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
  return (x / Math.PI) * 180 + 4;
}
function setAttributes(el, attr) {
  for (const key in attr) {
    el.setAttribute(key, attr[key]);
  }
}
