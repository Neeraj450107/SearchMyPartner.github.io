const roles = [" Engineer .", "Software Developer .", "Influencer ."];
const typedText = document.getElementById("typed-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentText = roles[roleIndex];
    
  if (isDeleting) {
      typedText.textContent = currentText.substring(0, charIndex--);
   } else {
      typedText.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);
}

  // Start typing
document.addEventListener("DOMContentLoaded", typeEffect);

// congrats display 

const congratsSection = document.getElementById("congratsSection");
const music = document.getElementById("congratsMusic");

window.addEventListener("load", () => {
    setTimeout(() => {
      

      // Show section and play music
      congratsSection.style.display = "flex";
      music.play();

      

      // After 5 seconds, hide section and pause music
      setTimeout(() => {
        congratsSection.style.display = "none";
        music.pause();
        music.currentTime = 0; // reset for next time
      }, 27000);

        

    }, 5000);
  })

  // close button 
function closeCard(){
  const closeBtn = document.getElementById("closeBtn");
  congratsSection.style.display = "none" ;
  music.pause();
  music.currentTime = 0; // reset for next time
}

// SocialMedia Handler 

const socialMediaBtn = document.getElementById("socialMediaBtn")
const socialMediaHandle = document.querySelector(".socialMediaHandle")
const closeBtnSocialMedia = document.getElementById("closeBtnSocialMedia")
const card = document.querySelector(".card")
const cardShowBtn = document.getElementById("cardShowBtn")
const cardCloseBtn = document.getElementById("cardCloseBtn")



socialMediaBtn.addEventListener("click" , () => {
  socialMediaHandle.style.display = "block" ;
});

closeBtnSocialMedia.addEventListener("click" , () => {
  socialMediaHandle.style.display = "none" ;
})

cardShowBtn.addEventListener("click" , () => {
  card.style.display = "block" ;
})

cardCloseBtn.addEventListener("click" , () => {
  card.style.display = "none" ;
})

function logout() {
  let confirmLogout = confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    // Clear session (optional)
    sessionStorage.clear(); // Or localStorage.clear();

    // Redirect to registration/login page
    window.location.href = "index.html";
  }
}


const correctPassword = "njkriti";  // अपना पासवर्ड यहाँ सेट करें

const passwordBox = document.querySelector(".passwordBox");
const passwordOverlay = document.querySelector(".password"); // full section
const rightPassword = document.querySelector(".rightPassword");
const wrongPassword = document.querySelector(".wrongPassword");
const inputBox = document.querySelector("input");
const submitBtn = document.querySelector("button[type='submit']");

let targetPage = ""; // Dynamically hold the destination page

// Trigger password box when any button is clicked
document.getElementById("aiPhotoBtn").addEventListener("click", () => {
  targetPage = "aiPhoto.html";
  passwordOverlay.style.visibility = "visible";
});

document.getElementById("newMsgBtn").addEventListener("click", () => {
  targetPage = "msg.html";
  passwordOverlay.style.visibility = "visible";
});

// Handle password submit
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const enteredPassword = inputBox.value.trim();

  if (enteredPassword === "") {
    alert("Kindly Enter Your Secret Password !!!");
    return;
  }

  passwordBox.style.display = "none";

  if (enteredPassword === correctPassword) {
    rightPassword.style.display = "block";

    setTimeout(() => {
      window.open(targetPage, "_blank"); // Open target page
    }, 5000);

  } else {
    wrongPassword.style.display = "block";

    setTimeout(() => {
      window.location.href = "njProfile.html"; // Redirect back
    }, 5000);
  }
});

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
