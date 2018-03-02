$('#flashMessage')
  .hide()
  .slideDown(1000)
  .delay(3000)
  .slideUp(1000);

const title = "My First Blog Post";
const content = "This is my first post!";

$('#blogTitlePreview').text(title);
$('#blogContentPreview').text(content);
