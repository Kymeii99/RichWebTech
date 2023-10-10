# Problem 3 - Chrome Extension 

## Extension Functionalities

### Changing Photos and Video Thumbnails

``` JAVA
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
```

This code will loop through the images and will insert random images of ShinChan from the images array to replace the pictures or video thumbnails on the site. Another thing that I've added is rotating the images on the screen. In order to do this, I made the animation in CSS.

``` CSS
/* for rotating the images */
@keyframes rotateImage {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

.rotate {
    animation-name: rotateImage;
    animation-duration: 5s;
    animation-iteration-count: infinite;
}
```

This will rotate the images into 360 degrees and will go on forever.

### Replacing Headers and Text 
``` JAVA
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
```

This code above will replace all of the 'H' and 'p' elements with another text from above.

### Sends User into another Link
``` JAVA
//Sends user to a diff link when clicked
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    links[i].href = "https://www.youtube.com/watch?v=trzeUClQIIg";
}
```

This will send the user into a different link which is a youtube video if they try to click a link.

### Adding a Button for User to Click
``` JAVA
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
```

This will add a button at the top of the website and will give the user an alert when they click on the button

### Generating Random Text at the top of the page
``` JAVA
//Generating Random Quotes at the top of the page
const quotes = [
    "I'm Shinchan heuheuheu!",
    "Oh no you're stinky!",
    "You won't escape me >:D",
];

const quoteSection = document.createElement("div");
quoteSection.id = "shinchan-quote";
quoteSection.style.backgroundColor = "beige";
quoteSection.style.padding = "10px";
quoteSection.style.textAlign = "center";
quoteSection.style.fontSize = "16px";

const random = quotes[Math.floor(Math.random() * quotes.length)];
quoteSection.innerText = random;

// Append the quote container to the page
document.body.prepend(quoteSection);
```

I have declared some quotes in an arry which will be randomly generated inside a div and will be displayed for the user to see.

### Fade out Text animation
``` JAVA
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
```

This function will get all the 'H3' elements. There will also be a delay for each element to fade out. I made this with the help of CSS. This will transition the texts out.


``` CSS
.fade-out {
    opacity: 0;
    transition: opacity 0.5s ease-out;
}
```