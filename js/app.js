// jQuery Animation

// // First we need to hide the message when the page loads, Let's make the message fade into view
// // This will hide the content
// $('#flashMessage').hide();

// // SlideDown Animation
// $('#flashMessage').slideDown(1000);

// // // By default, jQuery's all built-in animation methods have 400 miliseconds value
// // $('#flashMessage').fadeIn(1000);

// // It'll delay all the execution next to this statement
// $('#flashMessage').delay(3000);

// // Hide the content with animation by sliding up
// $('#flashMessage').slideUp();

// ***************************************

// Concise code with method chaining

// Now let's chain all the methods in a single line because we're targetting the same element
// $('#flashMessage').hide().slideDown(1000).delay(3000).slideUp(1000);

// We can indent our our methods
$('#flashMessage')
  .hide()
  .slideDown(1000)
  .delay(3000)
  .slideUp(1000);
