/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

 document.addEventListener('DOMContentLoaded', function () {

   var particleElements = document.getElementsByClassName('particles');
   var testz = document.getElementById('intro');

   console.log(particleElements);
   console.log(testz);

   var intro = document.getElementById('intro');
   intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
 }, false);
