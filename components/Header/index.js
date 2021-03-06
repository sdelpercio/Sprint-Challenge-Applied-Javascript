// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const topDiv = document.createElement('div'),
          date = document.createElement('span'),
          h1 = document.createElement('h1'),
          temp = document.createElement('span')

    topDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    var today = new Date();
    var datetime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    date.textContent = datetime;
    h1.textContent = 'Lambda Times';
    temp.textContent = '98°';

    topDiv.append(date, h1, temp);

    return topDiv;
}

document.querySelector('.header-container').append(Header());