// get viewport dimensions
const vW = window.innerWidth;
const vH = window.innerHeight;
// length of sides for getting the line angle
// the decimal is the % of the screen the triangle touches
const pA = Math.floor(vW - vW * 0.2);
const pO = Math.floor(vH - vH * 0.4);
// color elements
const orange = document.getElementById('orange');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const colorArray = [orange, blue, yellow];
const orangeText = document.getElementById('orange-text');
const degree = 1.15;

document.addEventListener('DOMContentLoaded', function() {
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
