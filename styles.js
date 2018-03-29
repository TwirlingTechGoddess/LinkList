
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
var deleteCards  = document.querySelector('#delete-cards');
var countCountula = 0; 
// var countReadula = 0;

// -----------------listeners------------------
formField.addEventListener('keyup', enterBtnDisable)
enterButton.addEventListener('click', checkValidation);
mainSection.addEventListener('click', readToggle);
mainSection.addEventListener('click', removeBookmark);
deleteCards.addEventListener('click', removeReadCards);

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
      <a href="${websiteUrl.value}" target="_blank">${websiteUrl.value}</a>
      <hr />
      <button id="read-button" class="article-buttons" type="submit" name="Read">Read</button>
      <button id="delete-button" class="article-buttons delete-button" type="submit" name="Delete">Delete</button>`;
      createdArticle.innerHTML = userInputInfo;
    mainSection.appendChild(createdArticle);
    clearInputField();
  } else {
    countCountula--;
    counter.innerText = `# of Bookmarks: ${countCountula}`;
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
  var readOrUnread = document.querySelectorAll('.read');
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


function removeReadCards() {
  var readOrUnread = document.querySelectorAll('.read');
  countCountula = countCountula - readOrUnread.length;
  for ( var i = 0; i < readOrUnread.length; i++) {
    readOrUnread[i].remove()
  }

  reader.innerText = `# of Bookmarks Read: ${0}`;
  counter.innerText = `# of Bookmarks: ${countCountula}`;
}

function checkValidation() {
  var reduxCode = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  if (reduxCode.test(websiteUrl.value) === true) {
    addBookmark();
  } else {
    alert('Url must begin with "https://"');
  }
}













