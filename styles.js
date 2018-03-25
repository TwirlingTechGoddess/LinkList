
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
enterButton.addEventListener('click', addBookmark());





// -----------functionality-------------

function addBookmark() {
  debugger
  var createdArticle = document.createElement('article');
  createdArticle.innerHTML =
     `<h2>(websiteTitle.value)</h2>
      <hr />
      <a href="(websiteUrl.value)" target="_blank">(websiteUrl.value)</a>
      <hr />
      <button id="read-button" class="article-buttons" type="submit" name="Read">Read</button>
      <button id="delete-button" class="article-buttons delete-button" type="submit" name="Delete">Delete</button>`;
  // // websiteTitle.value = cardTitle;
  // // websiteUrl.value = cardUrl 
    console.log('createdArticle.value');
}



// createTextNode
// .append
// .append()
// .appendChild()
// cardTitle.innerHTML = websiteTitle.value
// cardUrl.innerHTML = websiteTitle.value
