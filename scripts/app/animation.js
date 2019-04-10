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
