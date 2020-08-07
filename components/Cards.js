// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const { default: Axios } = require("axios")

let lambdaNews = 'https://lambda-times-api.herokuapp.com/articles'

Axios.get(lambdaNews)
.then(value => {
    let cardInfo = value.data.articles

    cardContainer.appendChild(cardMaker(cardInfo))
})

.catch(error => {
    console.log('not returning any cards')
})

let cardContainer = document.querySelector('.cards-container')

function cardMaker(article){
    const cards = document.createElement('a')

    for(const prop in article){
        article[prop].forEach((item)=>{
            const card = document.createElement('div')
            const writer = document.createElement('div')
            const writerName = document.createElement('span')
            const imageContainer = document.createElement('div')
            const image = document.createElement('img')
            const headLine = document.createElement('div')
            
            cards.appendChild(card)
            card.appendChild(headLine)
            card.appendChild(writer)
            writer.appendChild(writerName)
            writer.appendChild(imageContainer)
            imageContainer.appendChild(image)

            card.classList = 'card'
            writer.classList = 'author'
            imageContainer.classList = 'img-container'
            headLine.classList = 'headline'

            headLine.innerText = item.headline
            writerName.innerText = item.authorName
            image.src = item.authorPhoto

            headLine.addEventListener('click', ()=>{
                console.log(headLine.innerText)
            })
            return card
        },) 
    }
return cards
}

cardContainer.appendChild(cardMaker(lambdaNews))