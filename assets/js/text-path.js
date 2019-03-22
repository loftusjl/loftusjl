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
    hypotenuse: Math.sqrt(
      Math.pow(oppositeLength(20), 2) + Math.pow(adjacentLength(40), 2)
    )
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

document.addEventListener('DOMContentLoaded', function() {
  console.log(colorArray);
  const styles = `transform: rotate(${findAngle(40, 60) -
    180}deg); position: absolute; left: ${vW - 0.57 * vW}px; bottom:70px; `;
  appendStyles(orangeText, styles);
});
// add text rotation and position to colorText fields
function appendStyles(el, styles) {
  el.setAttribute('style', styles);
}
function findAngle(oLen, aLen) {
  return Math.floor(
    (Math.tan(oppositeLength(oLen) / adjacentLength(aLen)) * 180) / Math.PI
  );
}
function oppositeLength(percent) {
  return vW - vW * (percent / 100);
}
function adjacentLength(percent) {
  return vH - vH * (percent / 100);
}
