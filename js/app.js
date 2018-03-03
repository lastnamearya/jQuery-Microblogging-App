$('#flashMessage').hide();

const title = $('#blogTitleInput').val();
const content = $('#blogContentInput').val();
let message = $('#flashMessage');

$('#previewButton').click(function() {
  let title = $('#blogTitleInput').val();
  let content = $('#blogContentInput').val();

  if(!title || !content) {

    message.text("Please fill both the required fields first");
    message.css('background-color', 'red');

    clearFields();

  } else {
    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').text(content);

    clearFields();

  }

  $('#flashMessage')
    .hide()
    .slideDown(1000)
    .delay(1000)
    .slideUp(1000)
});

function clearFields(){
  $('#blogTitleInput').val('');
  $('#blogContentInput').val('');
}