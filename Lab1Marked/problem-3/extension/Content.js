//array of images
let shinImages = [
    "https://m.media-amazon.com/images/I/51tKIR7GWYL._AC_UF894,1000_QL80_.jpg",
    "https://e0.pxfuel.com/wallpapers/979/338/desktop-wallpaper-shinchan-funny-cartoon.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4s4on7lh8PpaUKILbXEnG-ZfROXvoqC4msw&usqp=CAU",
	"https://i.pinimg.com/736x/69/e1/cc/69e1ccee5835260dc35bc5b8626c05dd.jpg"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
const videos = document.getElementsByTagName("video");


//Change all picyures
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * shinImages.length);
    imgs[i].src = shinImages[randomImg];
    
    //Rotate the images
    imgs[i].classList.add("rotate");

    //set video thumbnails as shinchan images
    if (videos[i]) {
        videos[i].poster = shinImages[randomImg];
    }
}

//do the same for H elements
const header_1 = document.getElementsByTagName("h1");
const header_2 = document.getElementsByTagName("h2");
const header_3 = document.getElementsByTagName("h3");

for (let i = 0; i < header_1.length; i++){
    header_1[i].innerText = "Shinchan is the best show :3";
}

for (let i = 0; i < header_2.length; i++){
    header_2[i].innerText = "Oops! Shinchan got you >:)";
}

for (let i = 0; i < header_3.length; i++){
    header_3[i].innerText = "Oh this isnt right? hmmm";
}

//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "You just got shinchanned! >:D";
}

// //change background color
const color = '#FFE4C4'
document.body.style.backgroundColor = color;

//Sends user to a diff link when clicked
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    links[i].href = "https://www.youtube.com/watch?v=trzeUClQIIg";
}

//Add a button for the user to click
const button = document.createElement("button");
button.style.backgroundColor = "lightblue";
button.style.borderRadius = "5px";
button.style.borderColor = "blue";

button.innerText = "Click Me Hehe!";
button.addEventListener("click", () => {
    alert("Shinchan says hi!");
});

// Add button to the top of a page
document.body.prepend(button);


//Generating Random Quotes at the top of the page
const quotes = [
    "I'm Shinchan heuheuheu!",
    "Oh no you're stinky!",
    "You won't escape me >:D",
];

const randomQuotes = document.createElement("div");
randomQuotes.id = "shinchan-quote";
randomQuotes.style.backgroundColor = "beige";
randomQuotes.style.padding = "10px";
randomQuotes.style.textAlign = "center";
randomQuotes.style.fontSize = "16px";

const random = quotes[Math.floor(Math.random() * quotes.length)];
randomQuotes.innerText = random;

// Append the quote container to the page
document.body.prepend(randomQuotes);

//Fade out text animation for headers
const h3Elements = document.getElementsByTagName("h3");

function fadeWithDelay() {
    let delay = 0; 
    
    //dade out the h3s
    for (const h3 of h3Elements) {
      setTimeout(() => {
        h3.classList.add("fade-out");
      }, delay);
  
      delay += 500; // Increase the delay for each element
    }
  }
  
// Call the fadeElementsWithDelay function when the page loads
window.addEventListener("load", fadeWithDelay)