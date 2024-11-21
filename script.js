// Get the button and count elements
let button = document.getElementById('button');
let count = document.getElementById('count');

// Initialize the counter variable
let counter = 0;

// Initialize RGB values for the background color
let red = 255;
let green = 255;
let blue = 255;

// Update the count display
count.innerText = counter;

// Add an event listener to the button
button.addEventListener('click', () => {
  counter++;
  count.innerText = counter;

  let red = 255;
  let green = 0;
  let blue = 0;

  if (counter >= 5 && counter <= 10) {
    // Fade from red to yellow
    green = Math.floor((counter - 5) * 51);
  } else if (counter > 10 && counter <= 20) {
    // Fade from yellow to green
    red = 255 - Math.floor((counter - 10) * 25.5);
    green = 255;
  } else if (counter > 20) {
    // Stay green
    red = 0;
    green = 255;
  }

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
