// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

let headerContainer = document.querySelector('.header-container')

function Header() {
    const header = document.createElement('div')
    const date = document.createElement('span')
    const times = document.createElement('h1')
    const temp = document.createElement('span')

    header.appendChild(date)
    header.appendChild(times)
    header.appendChild(temp)

    header.classList = 'header'
    date.classList = 'date'
    temp.classList = 'temp'

    date.textContent = 'MARCH 28, 2020'
    times.textContent = 'Lambda Times'
    temp.textContent = '98°'  

    return header

}

headerContainer.appendChild(Header())