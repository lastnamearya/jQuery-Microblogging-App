// How we hide/show content in vanilla js

// const box = document.querySelector('.box');
// box.style.display = 'none';

// How we do the same above thing in jQuery
// jQuery('.box').hide();

// // jQuery provides a shorthand for jQuery functions in order to avoid extra typing extra time
// $('.box').hide();
// $('.box').show();

// *********************************************//

// Event Listening in vanilla.js & jQuery

// box.addEventListener('click', function(){
//   alert('You clicked me vanilla.js');
// });

$('.box').click(function(){
  alert('You clicked me jQuery');
});