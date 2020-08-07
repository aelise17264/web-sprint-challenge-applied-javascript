// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
import axios from 'axios'

let lambdaTimes = 'https://lambda-times-api.herokuapp.com/topics'

axios.get(lambdaTimes)
.then(item => {
    let topic = item.data.topics
    console.log(topic)
    tabContainer.appendChild(tabMaker(topic)) 
        
})
.catch(error => {
    console.log('Error, something went wrong')

})

let tabContainer = document.querySelector('.topics')

function tabMaker(item){
        item.forEach(name => {
            let tab = document.createElement('span')
            tab.classList = 'tab'
            tab.textContent = name
            tabContainer.appendChild(tab)
        })
       
   
  
    return item
    
}

