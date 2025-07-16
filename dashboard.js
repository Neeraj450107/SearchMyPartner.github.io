let overlay = document.querySelector(".overlay");
let card = document.querySelector(".card");
let kuchBaate = document.querySelector(".kuchBaate");
let searchBtn = document.querySelector(".searchBtn");



function showMyCard(){
    card.classList.add("cardActive");
    overlay.classList.add("overlayActive");
    // frontCard.classList.add("frontCardActive");

}

function closeCard(){
    card.classList.remove("cardActive");
    overlay.classList.remove("overlayActive");
    kuchBaate.classList.remove("kuchBaateActive");
    searchBtn.classList.remove("searchBtnActive");
     // Hide both found and not found  cards
    foundPartner.classList.remove("foundPartnerActive");
    notFoundPartner.classList.remove("notFoundImgActive");

    // Stop music too if playing
    audioFound.pause();
    audioFound.currentTime = 0;

    audioNotFound.pause(); // stop not found music
    audioNotFound.currentTime = 0;

    searchPartnerInput.value = ""; // Clear the input field
}

function flipCard(){
   card.classList.toggle("flipped");
   kuchBaate.classList.toggle("flipped");
}

function kuchBaateText(){
    kuchBaate.classList.add("kuchBaateActive");
    overlay.classList.add("overlayActive");
}

function searchMyPartner(){
    overlay.classList.add("overlayActive");
    searchBtn.classList.add("searchBtnActive");
}


            // search my partner section 


let searchPartnerInput = document.getElementById("searchPartnerInput");
let foundPartner = document.querySelector(".foundPartner");
let notFoundPartner = document.querySelector(".notFoundPartner");
let audioFound = document.getElementById("musicPartnerFound");
let audioNotFound = document.getElementById("musicPartnerNotFound");
let bgVideo = document.getElementById("bgVideo");

function searchPartnerBtn() {
  const searchPartnerInput = document.getElementById("searchPartnerInput").value.trim().toLowerCase();
  
  // Hide both cards first
  foundPartner.classList.remove("foundPartnerActive");
  notFoundPartner.classList.remove("notFoundImgActive");

  // List of accepted names
  const validNames = ["neeraj", "nj", "neeraj kumar", "neeraj kumar poddar" , "search partner" , "search my partner" , "search"];

  if (searchPartnerInput === "") {
    alert("Enter Your Partner Name:");

  } else if (validNames.includes(searchPartnerInput)) {
    // ✅ Correct Name
    foundPartner.classList.add("foundPartnerActive");

    // open njProfile.html page on clicking card

    foundPartner.addEventListener("click" , () => {
      window.location.href = "njProfile.html" ;
    });
    
    audioFound.currentTime = 0; // play audio found wala
    audioFound.play();

    audioNotFound.pause(); // stop playing not found music
    audioNotFound.currentTime = 0;

  } else {
    // ❌ Incorrect Name
    notFoundPartner.classList.add("notFoundImgActive");
    audioFound.pause(); // stop playing found music
    audioFound.currentTime = 0;

    audioNotFound.currentTime = 0; // play audio not found wala
    audioNotFound.play();

  }


}

  // Listen when user types in input
searchPartnerInput.addEventListener("input" , () => {
    // Hide both cards while typing/editing
   foundPartner.classList.remove("foundPartnerActive");
    notFoundPartner.classList.remove("notFoundImgActive");

    // Stop music too while editing
    audioFound.pause(); //stop found music
    audioFound.currentTime = 0;

    audioNotFound.pause(); // stop not found music
    audioNotFound.currentTime = 0;

});

function logout() {
  let confirmLogout = confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    // Clear session (optional)
    sessionStorage.clear(); // Or localStorage.clear();

    // Redirect to registration/login page
    window.location.href = "index.html";
  }
}

// Logout hone ke baad agar koi back button dabaye toh dashboard na dikhe.

// if (!sessionStorage.getItem("isLoggedIn")) {
//   window.location.href = "index.html";
// }
// sessionStorage.setItem("isLoggedIn", true);

const closeNavBar = document.getElementById("closeNavBar")
const navBar = document.querySelector(".nav");
function navClickMeBtn(){
  navBar.style.visibility = "visible" ;
  closeNavBar.style.display = "flex" ;

  closeNavBar.addEventListener("click" , () => {
    navBar.style.visibility = "hidden" ;
    closeNavBar.style.display = "none" ;
  });

  
}

