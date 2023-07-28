let getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

let changeBackgroundColor = () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
};

document.onclick = changeBackgroundColor;

// Assignment 1: Change Background Color

// Title: Change Background Color Assignment

// Instructions:
// 1. Create an HTML document with a title element.
// 2. Add a heading (e.g., `<h1>Click anywhere on the page to change the background color!</h1>`) to explain the assignment's purpose.
// 3. Write a JavaScript function called `getRandomColor()` that generates a random color.
// 4. Write another JavaScript function called `changeBackgroundColor()` that sets the background color of the document's body to the random color obtained from `getRandomColor()`.
// 5. Add an onclick event to the entire document that calls the `changeBackgroundColor()` function whenever the user clicks anywhere on the page.
// 6. Test the assignment by opening the HTML document in a web browser. Verify that clicking anywhere on the page changes the background color.