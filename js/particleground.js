/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

 document.addEventListener('DOMContentLoaded', function () {

  var particleElements = document.getElementsByClassName('particles');

  for (var i = 0; i < particleElements.length; i++) {
    particleground(particleElements[i], {
      dotColor: '#c16700',
      lineColor: '#c16700'
    });
  }

  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';

 }, false);
