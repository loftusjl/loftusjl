// color elements
const orange = document.getElementById('orange');
const orangeText = document.getElementById('orange-text');
const blue = document.getElementById('blue');
const blueText = document.getElementById('blue-text');
const yellow = document.getElementById('yellow');
const yellowText = document.getElementById('yellow-text');

const vW = document.documentElement.clientWidth * 0.8;
const vH = 300;
let cItems = document.getElementsByClassName('color-clip');
let cArray = Array.from(cItems); // converts elements list into array

const colorArray = [
  {
    color: orange,
    text: orangeText,
    opposite: oppositeLength(20),
    adjacent: adjacentLength(40),
    hypotenuse: Math.hypot(oppositeLength(20), adjacentLength(40)),
    adjacentB: adjacentLength(20)
  },
  {
    color: blue,
    text: blueText,
    opposite: oppositeLength(40),
    adjacent: adjacentLength(60),
    hypotenuse: Math.hypot(oppositeLength(40), adjacentLength(60)),
    adjacentB: adjacentLength(40)
  },
  {
    color: yellow,
    text: yellowText,
    opposite: oppositeLength(60),
    adjacent: adjacentLength(80),
    hypotenuse: Math.hypot(oppositeLength(60), adjacentLength(80)),
    adjacentB: adjacentLength(60)
  }
];
document.addEventListener('DOMContentLoaded', function() {
  positionText();
  // On-click content toggles
  for (let c = 0; c < cArray.length; c++) {
    let color = cArray[c];
    let colorContent = document.getElementById(`${color.id}-content`);
    let bgColor = window
      .getComputedStyle(document.body, null)
      .getPropertyValue('background-color');
    // gradient background
    // window.getComputedStyle(document.body, null).getPropertyValue('background-image');
    cArray[c].addEventListener(
      'click',
      function() {
        setTimeout(() => {
          smoothScroll(document.getElementById('orange-content'));
        }, 450);
        let toggles = cArray.filter(color => color != cArray[c]);
        for (t in toggles) {
          if (
            document.getElementById(`${toggles[t].id}-content`).dataset
              .clicked == '1'
          ) {
            let objDiv = document.getElementById(`${toggles[t].id}-content`);
            setAttributes(objDiv, {
              'data-clicked': '0',
              style: ``
            });
          }
        }
        if (colorContent.dataset.clicked === '0') {
          setAttributes(colorContent, {
            'data-clicked': '1',
            style: `background-color: ${bgColor}; border: 5px solid ${
              cArray[c].style.backgroundColor
            };`
          });
        } else {
          setAttributes(colorContent, {
            'data-clicked': '0',
            style: ``
          });
        }
      },
      false
    );
  }
});

function oppositeLength(percent) {
  return vH * ((100 - percent) / 100);
}
function adjacentLength(percent) {
  return vW - vW * (percent / 100);
}

function setAttributes(el, attr) {
  for (const key in attr) {
    el.setAttribute(key, attr[key]);
  }
}

function positionText() {
  // adjust text positioning to stay inside color bars based on screen width
  const screenWidth = document.documentElement.clientWidth;
  colorArray.forEach(x => {
    a = x.adjacent;
    b = x.hypotenuse;
    c = x.opposite;
    col = x.text;
    // find dynamic position for rotated text
    if (screenWidth <= 900) {
      pos = screenWidth - ((x.adjacentB - x.adjacent) / 2 + x.adjacentB + 25); // good for width under 900px
    } else if (screenWidth <= 1350) {
      pos = screenWidth - ((x.adjacentB - x.adjacent) / 2 + x.adjacentB - 25); // good for width over 900x
    } else {
      pos = screenWidth - ((x.adjacentB - x.adjacent) / 2 + x.adjacentB - 50); // good for width over 900x
    }
    setAttributes(x.text, {
      style: `transform: rotate(-${
        solveTriangle(a, b, c)[5]
      }deg); left: ${pos}px; `
    });
  });
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
// Given some sides and angles, this returns a tuple of 8 number/string values.
function solveTriangle(a, b, c, A, B, C) {
  var sides = (a != null) + (b != null) + (c != null); // Boolean to integer conversion
  var angles = (A != null) + (B != null) + (C != null); // Boolean to integer conversion
  var area, status;

  if (sides + angles != 3) throw 'Give exactly 3 pieces of information';
  else if (sides == 0) throw 'Give at least one side length';
  else if (sides == 3) {
    status = 'Side side side (SSS) case';
    if (a + b <= c || b + c <= a || c + a <= b) throw status + ' - No solution';
    A = solveAngle(b, c, a);
    B = solveAngle(c, a, b);
    C = solveAngle(a, b, c);
    // Heron's formula
    var s = (a + b + c) / 2;
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  } else if (angles == 2) {
    status = 'Angle side angle (ASA) case';
    // Find missing angle
    if (A == null) A = 180 - B - C;
    if (B == null) B = 180 - C - A;
    if (C == null) C = 180 - A - B;
    if (A <= 0 || B <= 0 || C <= 0) throw status + ' - No solution';
    var sinA = Math.sin(degToRad(A));
    var sinB = Math.sin(degToRad(B));
    var sinC = Math.sin(degToRad(C));
    // Use law of sines to find sides
    var ratio; // side / sin(angle)
    if (a != null) {
      ratio = a / sinA;
      area = (a * ratio * sinB * sinC) / 2;
    }
    if (b != null) {
      ratio = b / sinB;
      area = (b * ratio * sinC * sinA) / 2;
    }
    if (c != null) {
      ratio = c / sinC;
      area = (c * ratio * sinA * sinB) / 2;
    }
    if (a == null) a = ratio * sinA;
    if (b == null) b = ratio * sinB;
    if (c == null) c = ratio * sinC;
  } else if (
    (A != null && a == null) ||
    (B != null && b == null) ||
    (C != null && c == null)
  ) {
    status = 'Side angle side (SAS) case';
    if (
      (A != null && A >= 180) ||
      (B != null && B >= 180) ||
      (C != null && C >= 180)
    )
      throw status + ' - No solution';
    if (a == null) a = solveSide(b, c, A);
    if (b == null) b = solveSide(c, a, B);
    if (c == null) c = solveSide(a, b, C);
    if (A == null) A = solveAngle(b, c, a);
    if (B == null) B = solveAngle(c, a, b);
    if (C == null) C = solveAngle(a, b, c);
    if (A != null) area = (b * c * Math.sin(degToRad(A))) / 2;
    if (B != null) area = (c * a * Math.sin(degToRad(B))) / 2;
    if (C != null) area = (a * b * Math.sin(degToRad(C))) / 2;
  } else {
    status = 'Side side angle (SSA) case - ';
    var knownSide, knownAngle, partialSide;
    if (a != null && A != null) {
      knownSide = a;
      knownAngle = A;
    }
    if (b != null && B != null) {
      knownSide = b;
      knownAngle = B;
    }
    if (c != null && C != null) {
      knownSide = c;
      knownAngle = C;
    }
    if (a != null && A == null) partialSide = a;
    if (b != null && B == null) partialSide = b;
    if (c != null && C == null) partialSide = c;
    if (knownAngle >= 180) throw status + 'No solution';
    var ratio = knownSide / Math.sin(degToRad(knownAngle));
    var temp = partialSide / ratio; // sin(partialAngle)
    var partialAngle, unknownSide, unknownAngle;
    if (temp > 1 || (knownAngle >= 90 && knownSide <= partialSide))
      throw status + 'No solution';
    else if (temp == 1 || knownSide >= partialSide) {
      status += 'Unique solution';
      partialAngle = radToDeg(Math.asin(temp));
      unknownAngle = 180 - knownAngle - partialAngle;
      unknownSide = ratio * Math.sin(degToRad(unknownAngle)); // Law of sines
      area = (knownSide * partialSide * Math.sin(degToRad(unknownAngle))) / 2;
    } else {
      status += 'Two solutions';
      var partialAngle0 = radToDeg(Math.asin(temp));
      var partialAngle1 = 180 - partialAngle0;
      var unknownAngle0 = 180 - knownAngle - partialAngle0;
      var unknownAngle1 = 180 - knownAngle - partialAngle1;
      var unknownSide0 = ratio * Math.sin(degToRad(unknownAngle0)); // Law of sines
      var unknownSide1 = ratio * Math.sin(degToRad(unknownAngle1)); // Law of sines
      partialAngle = [partialAngle0, partialAngle1];
      unknownAngle = [unknownAngle0, unknownAngle1];
      unknownSide = [unknownSide0, unknownSide1];
      area = [
        (knownSide * partialSide * Math.sin(degToRad(unknownAngle0))) / 2,
        (knownSide * partialSide * Math.sin(degToRad(unknownAngle1))) / 2
      ];
    }
    if (a != null && A == null) A = partialAngle;
    if (b != null && B == null) B = partialAngle;
    if (c != null && C == null) C = partialAngle;
    if (a == null && A == null) {
      a = unknownSide;
      A = unknownAngle;
    }
    if (b == null && B == null) {
      b = unknownSide;
      B = unknownAngle;
    }
    if (c == null && C == null) {
      c = unknownSide;
      C = unknownAngle;
    }
  }

  return [a, b, c, A, B, C, area, status];
}
window.smoothScroll = function(target) {
  var scrollContainer = target;
  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  scroll = function(c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + ((b - a) / 30) * i;
    setTimeout(function() {
      scroll(c, a, b, i);
    }, 10);
  };
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};
