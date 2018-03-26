
// ------------variables----------------
var websiteTitle = document.getElementById('input-Title-Text');
var websiteUrl = document.getElementById('input-Title-Url');
var enterButton = document.getElementById('enter-button');
var mainSection = document.querySelector('main');
var cardTitle = document.querySelector('h2');
var cardUrl = document.querySelector('a');
var readButton = document.getElementById('read-button');
var deleteButton = document.getElementById('delete-button');
var createdArticle = document.createElement('article');



// -----------------listeners------------------
enterButton.addEventListener('click', userInput());
readButton.addEventListener('click', readToggle());
deleteButton.addEventListener('click', removeBookmark())




// -----------functionality-------------

function addBookmark() {
  var mainSection = document.querySelector('main');
    createdArticle.innerHTML =
     `<h2>(websiteTitle.value)</h2>
      <hr />
      <a href="(websiteUrl.value)" target="_blank">(websiteUrl.value)</a>
      <hr />
      <button id="read-button" class="article-buttons" type="submit" name="Read">Read</button>
      <button id="delete-button" class="article-buttons delete-button" type="submit" name="Delete">Delete</button>`;
    mainSection.appendChild(createdArticle);
}

function userInput() {
  addBookmark();
  console.log('createdArticle.value');
    cardTitle.textContent =  websiteTitle.value; 
    cardUrl.textContent = websiteUrl.value;  
}

function readToggle() {
  if (createdArticle.classList.value = ""){
    createdArticle.classList("class", ".read")
  } else {
    createdArticle.removeAttribute("class")
  }
}

function removerBookmark() {
  mainSection.remove(createdArticle);
}


