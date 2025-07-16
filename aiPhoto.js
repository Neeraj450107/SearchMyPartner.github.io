const photos = document.querySelectorAll('.photo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    requestAnimationFrame(() => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
}, {
  threshold: 0.1
});

photos.forEach(photo => {
  observer.observe(photo);
});

// logout 

function logout() {
  let confirmLogout = confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    // Clear session (optional)
    sessionStorage.clear(); // Or localStorage.clear();

    // Redirect to registration/login page
    window.location.href = "index.html";
  }
}

// play the song 
//  window.addEventListener("load", function () {
//     const playMusic = confirm("Do you want to play the song? (Please Put Earphones)");
//     const song = document.getElementById("bgMusic");

//     if (playMusic) {
//       song.play().catch((e) => {
//         console.log("Autoplay blocked, user gesture needed");
//       });
//     }
//   });
alert("Please Click Anywhere to play Song ( Wear Earphones ) !!!");
window.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
      music.play().catch(() => {
        // Ignore if blocked
      });
    }
  }, { once: true });

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

