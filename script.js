// specific email can enter into dashboard.....
let submitBtn = document.getElementById("submit");
let overlay = document.querySelector(".overlay");
let congratsCard = document.querySelector(".congratsCard");
let sorryCard = document.querySelector(".sorryCard");
let emailInput = document.getElementById("email");

function validateEmail(event){ 
    event.preventDefault(); // Prevent form submission

    const emailAllow =[ "apurvasinha673@gmail.com" , "apurvasinha7189@gmail.com" , "neerajkumar450107@gmail.com" ]            

    const userEmail = document.getElementById("email").value.trim().toLowerCase();

    if (emailAllow.includes(userEmail)) {
        // alert(" Access granted! Welcome ❤️!");
        overlay.classList.add("overlayActive");
        congratsCard.classList.add("congratsCardActive");
        sorryCard.classList.remove("sorryCardActive");
         // You can proceed with form submission or further processing
    } else {
        overlay.classList.add("overlayActive");
        sorryCard.classList.add("sorryCardActive");        
        congratsCard.classList.remove("congratsCardActive");
        // return false;
    }

}

// try again & Explore btn clicking then open the form again 

function tryAgain() {
    overlay.classList.remove("overlayActive");
    sorryCard.classList.remove("sorryCardActive");
    emailInput.value = ""; // Clear the input field
    document.querySelector(".form").classList.add("formActive");
}

function exploreContent() {
    overlay.classList.remove("overlayActive");
    congratsCard.classList.remove("congratsCardActive");
    document.querySelector(".form").classList.add("formActive");
    emailInput.value = ""; // Clear the input field


   
}


