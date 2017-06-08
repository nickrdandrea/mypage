 document.addEventListener('DOMContentLoaded', function () {

  var particleElements = document.getElementsByClassName('particles');

  for (var i = 0; i < particleElements.length; i++) {
    particleground(particleElements[i], {
      maxSpeedX: 0.3,
      maxSpeedY: 0.3,
      dotColor: '#c16700',
      lineColor: '#c16700',
      proximity: 70,
      density: 8000,
      parallaxMultiplier: 25,
    });
  }


 }, false);
