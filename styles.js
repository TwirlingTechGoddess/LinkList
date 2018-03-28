
// ------------variables----------------
var websiteTitle = document.getElementById('input-Title-Text');
var websiteUrl = document.getElementById('input-Title-Url');
var enterButton = document.getElementById('enter-button');
var mainSection = document.querySelector('main');
var cardTitle = document.querySelector('h2');
var cardUrl = document.querySelector('a');
var readButton = document.getElementById('read-button');
var deleteButton = document.getElementById('delete-button');
var counter = document.getElementById('counter');
var reader = document.getElementById('reader')
var formField = document.querySelector('form');
var countCountula = 0; 
// var countReadula = 0;

// -----------------listeners------------------
formField.addEventListener('keyup', enterBtnDisable)
enterButton.addEventListener('click', addBookmark);
mainSection.addEventListener('click', readToggle);
mainSection.addEventListener('click', removeBookmark);


// -----------functionality-------------

function enterBtnDisable() {
  if (websiteTitle.value > "" || websiteUrl.value > "") {
  enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
}

function addBookmark() {
  countCountula++;
  counter.innerText = `# of bookmarks: ${countCountula}`;
  if (websiteTitle.value > "" && websiteUrl.value > "") {
  var createdArticle = document.createElement('article');
  var mainSection = document.querySelector('main');
  var userInputInfo=
     `<h2>${websiteTitle.value}</h2>
      <hr />
      <a href="http://${websiteUrl.value}" target="_blank">${websiteUrl.value}</a>
      <hr />
      <button id="read-button" class="article-buttons" type="submit" name="Read">Read</button>
      <button id="delete-button" class="article-buttons delete-button" type="submit" name="Delete">Delete</button>`;
      createdArticle.innerHTML = userInputInfo;
    mainSection.appendChild(createdArticle);
    clearInputField();
  } else {
    countCountula--;
    counter.innerText = `# of bookmarks: ${countCountula}`;
    alert('ERROR, PLEASE FILL OUT BOTH FIELDS!')
  }
}

function readToggle() {
  var cardReadTarget = event.target.closest('article');
  if (event.target.name === "Read") {
    cardReadTarget.classList.toggle('read');
  var buttonTarget = event.target.closest('button')
    buttonTarget.classList.toggle('color');
  }
  readOrUnread = document.querySelectorAll('.read');
  reader.innerText = `# of Bookmarks Read: ${readOrUnread.length}`;
}

function removeBookmark() {  
    // readOrUnread = document.querySelectorAll('.read');
  var cardDeleteTarget = event.target.closest('article');
  if (event.target.name === "Delete") {
    countCountula--;
    counter.innerText = `# of Bookmarks: ${countCountula}`;
    // reader.innerText = `# of Bookmarks Read: ${readOrUnread.length}`;
    cardDeleteTarget.remove();
  }
}

function clearInputField() {
  websiteTitle.value = "";
  websiteUrl.value = "";
}

