alert('Hello There!! :D This is a alert box') 

//Getting the text
var textFade = document.querySelector('.heading');
textFade.innerHTML = textFade.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


//animating the text
anime.timeline({loop: true})
  .add({
    targets: '.heading .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2240,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.heading',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });