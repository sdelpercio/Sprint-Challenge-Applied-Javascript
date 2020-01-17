/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
  const container = document.createElement('div'),
        leftButton = document.createElement('div'),
        imgOne = document.createElement('img'),
        imgTwo = document.createElement('img'),
        imgThree = document.createElement('img'),
        imgFour = document.createElement('img'),
        rightButton = document.createElement('div')

  container.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  // imgOne.classList.add('img--current');
  
  
  leftButton.textContent = '<';
  rightButton.textContent = '>';
  imgOne.src = './assets/carousel/mountains.jpeg';
  imgTwo.src = './assets/carousel/computer.jpeg';
  imgThree.src = './assets/carousel/trees.jpeg';
  imgFour.src = './assets/carousel/turntable.jpeg';

  container.append(leftButton, imgOne, imgTwo, imgThree, imgFour, rightButton);

  const carouselImages = document.querySelectorAll('.carousel img');
  let counter = 1;
  const size = 1200;

  leftButton.addEventListener('click', (event) => {
    container.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  rightButton.addEventListener('click', (event) => {
    container.style.transform = 'translateX(' + (size * counter) + 'px)';
  });

  return container;
}

const caro = document.querySelector('.carousel-container');
console.log(caro);
caro.append(createCarousel());