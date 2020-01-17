// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((res) => {
    console.log(res.data);

    Object.keys(res.data.articles).forEach(genre => {
        res.data.articles[genre].forEach(article => {
            document.querySelector('.cards-container').append(createCard(article));
        });
    });
})
.catch((err) => {
    console.log(err);
})

function createCard(article) {
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          authorDiv = document.createElement('div'),
          imgDiv = document.createElement('div'),
          img = document.createElement('img'),
          author = document.createElement('span')

    card.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');
    
    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    author.textContent = article.authorName;

    card.append(headline, authorDiv);
    authorDiv.append(imgDiv, author);
    imgDiv.append(img);

    return card;
}