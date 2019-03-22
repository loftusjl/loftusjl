// color elements
const orange = document.getElementById('orange');
const orangeText = document.getElementById('orange-text');
const blue = document.getElementById('blue');
const blueText = document.getElementById('blue-text');
const yellow = document.getElementById('yellow');
const yellowText = document.getElementById('yellow-text');

const colorArray = [
  {
    color: orange,
    text: orangeText,
    opposite: oppositeLength(20),
    adjacent: adjacentLength(40)
  },
  {
    color: blue,
    text: blueText,
    opposite: oppositeLength(40),
    adjacent: adjacentLength(60)
  },
  {
    color: yellow,
    text: yellowText,
    opposite: oppositeLength(60),
    adjacent: adjacentLength(80)
  }
];
const degree = 1.15;

document.addEventListener('DOMContentLoaded', function() {
  console.log(colorArray);
  console.log(
    `Window width: ${window.innerWidth}, Opposite length: ${oppositeLength(20)}`
  );
  const styles = `transform: rotate(-${findAngle()}deg); position: absolute; left: ${vW -
    0.71 * vW}px; bottom:70px; `;
  appendStyles(orangeText, styles);
});
// add text rotation and position to colorText fields
function appendStyles(col, styles) {
  col.setAttribute('style', styles);
}
function findAngle() {
  return Math.floor((Math.tan(pO / pA) * 180) / Math.PI);
}
function oppositeLength(percent) {
  return window.innerWidth - window.innerWidth * (percent / 100);
}
function adjacentLength(percent) {
  return window.innerHeight - window.innerHeight * (percent / 100);
}
