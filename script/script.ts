// import $ from "jquery"
let mainImg = document.getElementById('main-img') as HTMLImageElement;
let blockq = document.getElementById('blockq') as HTMLParagraphElement;
let p1 = document.getElementById("p1") as HTMLParagraphElement;
let p2 = document.getElementById("p2") as HTMLParagraphElement;
let p3 = document.getElementById("p3") as HTMLParagraphElement;
let p4 = document.getElementById("p4") as HTMLParagraphElement;
let lists = document.getElementById("lists") as HTMLUListElement;

function clickMe() {
    lists.style.opacity = '1'
}

function home() {
    document.body.style.backgroundImage = `url("home/background-home-desktop.jpg")`;
}

// created function and change bg img for destination
function destination() {
    document.body.style.backgroundImage = `url("destination/background-destination-desktop.jpg")`;
}

// crew section
function crew() {
    document.body.style.backgroundImage = `url("crew/background-crew-desktop.jpg")`;
}
function crewBody() {
    document.body.style.backgroundImage = `url("crew/background-crew-desktop.jpg")`;
}

// technology section 

function technology() {
    document.body.style.backgroundImage = `url("technology/background-technology-desktop.jpg")`;
}

// destination section
// image and text changeing

//europa changeing section
function europa() {
    // image change
   const newImage = `destination/image-europa.png`;
   mainImg.src = newImage;
   mainImg.alt = `europa`;

   // text change
   blockq.textContent = `europa : an enigmatic moon suspendend
    in the cosmic dance,a distance world that becons with 
    icy allure and tantalizing enigamas undernearth its frozen crust 
    a hidden ocean lies in hushed wispers, concealing the potentals
     for life and the captivating mysteries of the universe.` 
     // distance change
     p1.textContent = `avg. distance`;
     p2.textContent = `628 mil. km`;
     p3.textContent = `est. travle time`;
     p4.textContent = `3 years` 
}


// mars changeing section
function mars() {
    // image change
   const newImage = `destination/image-mars.png`;
   mainImg.src = newImage;
   mainImg.alt = `mars`;

   // text change
   blockq.textContent = `venture into the world of mars, the captivating 
   crimson planet that ignites the human sprite with unyielding curiosity .
    its rust-red allure, amidst the vast celestial canvas, has inspired 
    generations to ponder the misteres concealed wthin its ancient valleys 
    and towering mountains.`;
    // distance
    p1.textContent = `avg. distance`;
    p2.textContent = `255 mil. km`;
    p3.textContent = `est. travle time`;
    p4.textContent = `9 months`  
}

// moon changeing section
function moon() {
    // image change
   const newImage = `destination/image-moon.png`;
   mainImg.src = newImage;
   mainImg.alt = `moon`;

   // text change
   blockq.textContent = `behold the moon a timeless celestial companion,
    enchanting the night sky with its radiant glow and lunar mysterirs
     a mesmerizing ballet of cosmic wonders that has stirred poets, dreamers, and explorers alike, 
     beckoning us to unravel the secrets of its ancent creaters and tranquils seas` ;
     //distance
     p1.textContent = `avg. distance`;
     p2.textContent = `384,400 km`;
     p3.textContent = `est. travle time`;
     p4.textContent = `3 days` 
}
//
function titan() {
    // image change
   const newImage = `destination/image-titan.png`;
   mainImg.src = newImage;
   mainImg.alt = `titan`;

   // text change
   blockq.textContent = `titan:saturn's enchanting moon,
    a realm of etheral beauty, veiled in a haze of mystery,
     where vast lakes of hydrocarbons mirror a distance,
      primordial past, enticing scientists and storytellers
       alike to contemplate the engimas of this distance world'`;
       //distance
       p1.textContent = `avg. distance`;
       p2.textContent = `1.6 bil. km`;
       p3.textContent = `est. travle time`;
       p4.textContent = `7 years` 
}

// media query section
 
// const bodyHead = document.getElementById("body-head") as HTMLBodyElement;

const screenwidth = window.matchMedia(" (max-width:912px) ");
if(screenwidth.matches) {
//    document.onload, function () {
//     // function home() {
//     //     document.body.style.backgroundImage = `url("home/background-home-desktop.jpg")`;
//     // }
//    }

// function home() {
//     document.body.style.backgroundImage = `url("home/background-home-desktop.jpg")`;
// }

}