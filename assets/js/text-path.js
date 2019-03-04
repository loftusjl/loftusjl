// get viewport dimensions
const vW = window.innerWidth;
const vH = window.innerHeight;
// triangle sides for getting the line angle
const pA = vW - vW * 0.4;
const pO = vH - vH * 0.2;
// color elements
const orange = document.getElementById('orange');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const colorArray = [orange, blue, yellow];
const orangeText = document.getElementById('orange-text');
const degree = 1.15;

document.addEventListener('DOMContentLoaded', function() {
  const styles = `transform: rotate(-20deg); position: absolute; right: ${vW -
    degree * vW}px; `;
  console.log(`vH ${vH} - vH ${vH} * 20% = ${pO}`);
  textDegree(orangeText, styles);
});
function textDegree(col, styles) {
  col.setAttribute('style', styles);
}
const setStylesOnElement = function(styles, element) {
  Object.assign(element.style, styles);
};
function polyAdjacent(deg) {
  return vW - vW * deg;
}
function polyOpposite(deg) {
  return vH - vH * deg;
}
