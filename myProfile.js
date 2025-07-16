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
