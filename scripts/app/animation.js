var bouncingBall = anime({
  targets: '.ball',
  translateY: '50vh',
  duration: 300,
  loop: true,
  direction: 'alternate',
  easing: 'easeInCubic',
  //new code
  scaleX: {
    value: 1.05,
    duration: 150,
    delay: 268
  }
});

anime({
  targets: document.querySelector('.pCard[data-clicked="1"]'),
  maxHeight: '9000px', // -> from '150px' to '9000px',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});
