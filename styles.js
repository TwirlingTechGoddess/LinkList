
// ------------variables----------------
var websiteTitle = document.getElementById('input-Title-Text');
var websiteUrl = document.getElementById('input-Title-Url');
var enterButton = document.getElementById('enter-button');
var mainSection = document.querySelector('main');
var cardTitle = document.querySelector('h2');
var cardUrl = document.querySelector('a');
var readButton = document.getElementById('read-button');
var deleteButton = document.getElementById('delete-button');

// -----------------listeners------------------

enterButton.addEventListener('click', addBookmark);
mainSection.addEventListener('click', readToggle);
mainSection.addEventListener('click', removeBookmark);




// -----------functionality-------------

function addBookmark() {
  console.log('lalalala');
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
    websiteTitle.disable = true;
    websiteUrl.disable = true;
    alert('ERROR, PLEASE FILL OUT BOTH FIELDS!')
  }
}

function readToggle() {
  var cardReadTarget = event.target.closest('article');
  cardReadTarget.classList.toggle('read');
  var buttonTarget = event.target.closest('button')
  buttonTarget.classList.toggle('color');
  // var urlTarget = even.target.closest('a');
  // urlTarget.classList.toggle('underline');
}

function removeBookmark() {  
  var cardDeleteTarget = event.target.closest('article')
  console.log(event.target.name)
  if (event.target.name === "Delete") {
    cardDeleteTarget.remove();
  }
  
  // removeTarget.remove(this.target);
  // console.log(this.target);
}

function clearInputField() {
  websiteTitle.value = "";
  websiteUrl.value = "";
}

