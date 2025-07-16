let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let letterBox1 = document.querySelector(".letter-box1")
let letterBox2 = document.querySelector(".letter-box2")
let letterBox3 = document.querySelector(".letter-box3")
let letterBox4 = document.querySelector(".letter-box4")
let closeBtn = document.getElementById("closeBtn")
let title = document.querySelector(".title")

function letter1() {
    letterBox1.style.display = "block" ;
    letterBox2.style.display = "none" ;
    letterBox3.style.display = "none" ;
    letterBox4.style.display = "none" ;
    title.style.display = "none" ;
}
function letter2() {
    letterBox1.style.display = "none" ;
    letterBox2.style.display = "block" ;
    letterBox3.style.display = "none" ;
    letterBox4.style.display = "none" ;
    title.style.display = "none" ;
}
function letter3() {
    letterBox1.style.display = "none" ;
    letterBox2.style.display = "none" ;
    letterBox3.style.display = "block" ;
    letterBox4.style.display = "none" ;
    title.style.display = "none" ;
}
function letter4() {
    letterBox1.style.display = "none" ;
    letterBox2.style.display = "none" ;
    letterBox3.style.display = "none" ;
    letterBox4.style.display = "block" ;
    title.style.display = "none" ;
}



// song 

const audios = {
  btn1: document.getElementById("audio1"),
  btn2: document.getElementById("audio2"),
  btn3: document.getElementById("audio3"),
  btn4: document.getElementById("audio4"),
};

Object.keys(audios).forEach(btnId => {
  document.getElementById(btnId).addEventListener("click", () => {
    // Pause all audios first
    Object.values(audios).forEach(audio => {
      audio.pause();
      audio.currentTime = 0; // Reset to beginning
    });

    // Play the selected audio
    audios[btnId].play();
  });
});

// close letters 

function closeletter() {
    letterBox1.style.display = "none" ;
    letterBox2.style.display = "none" ;
    letterBox3.style.display = "none" ;
    letterBox4.style.display = "none" ;
    title.style.display = "block" ;
    Object.values(audios).forEach(audio => {
      audio.pause();
      audio.currentTime = 0; // Reset to beginning
    });
    
}

// open reels section in n ew tab 

const reelsBtn = document.getElementById("btn5")

reelsBtn.addEventListener("click" , () => {
    window.open("reels.html", "_blank");
} );