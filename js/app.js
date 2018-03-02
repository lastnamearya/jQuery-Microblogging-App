const message = document.getElementById('flashMessage');
message.style.display = 'none';

// DOM Manipulation without using any jQuery Code
const previewButton = document.getElementById('previewButton');

const titleInput = document.getElementById('blogTitleInput');

const contentInput = document.getElementById('blogContentInput');

const blogTitle = document.getElementById('blogTitlePreview');

const blogContent = document.getElementById('blogContentPreview');


previewButton.addEventListener('click', function(){
  
  if(!titleInput.value || !contentInput.value){
    alert ('Please fill the required fields');
  } else {
    blogTitle.innerText = titleInput.value;
  
    blogContent.innerText = contentInput.value;

    showMessage();

  }

  clearInputs();

});

function clearInputs() {
  titleInput.value = "";
  contentInput.value = "";

}

function showMessage() {
  message.style.display = 'block';
  setTimeout(function(){
  message.style.display = "none";
  }, 2000);
}