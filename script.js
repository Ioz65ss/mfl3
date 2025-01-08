// Pages Data
const pages = [
  { text: "Hello👋", gif: "hello.gif" },
  {
    text: "Kesi hai ap👉🏻👈🏻??? Sach sach batana😿",
    gif: "question.gif",
    buttons: [
      { text: "Thik hoon❤", nextPage: 2 },
      { text: "Ekdum bindass hoon❤", nextPage: 2 }
    ]
  },
  { text: "I know, ap ko thora dukh diya hai mene🤕", gif: "sorry.gif" },
  {
    text: "Kya ap mujhe maaf karengi❤???",
    gif: "forgive.gif",
    buttons: [
      { text: "Yes❤", nextPage: 4 },
      { text: "No😿", type: "trick-no" }
    ]
  },
  { text: "Thank you, apko ek reward milega worth 7 crore.", gif: "reward.gif" },
  { text: "Itni jaldi nhi, apko ko thora mehenat krna parega😇", gif: "work.gif" },
  { text: "Next page mai sawal ka jawab dijiye aur le jaiye gift worth 7 Cr.", gif: "question.gif" },
  { text: "Ye kya??? Apne mujhe abhi bhi maaf nhi kiya😭😭??", gif: "sad.gif" },
  { text: "Ab apko punishment milega mere se!!😞", gif: "punish.gif" },
  { text: "Apko mere saath KBC khelna parega😒", gif: "kbc.gif" }
];

// Current Page Index
let currentPage = 0;

// DOM Elements
const gifElement = document.getElementById("gif");
const textElement = document.getElementById("text");
const buttonsElement = document.getElementById("buttons");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const navButtons = document.querySelector(".nav-buttons");

// Load a Page
function loadPage(index) {
  const page = pages[index];
  currentPage = index;

  gifElement.src = page.gif;
  textElement.textContent = page.text;

  // Handle Buttons
  buttonsElement.innerHTML = "";
  if (page.buttons) {
    buttonsElement.classList.remove("hidden");
    navButtons.classList.add("hidden");
    page.buttons.forEach(button => {
      const btn = document.createElement("button");
      btn.textContent = button.text;

      if (button.type === "trick-no") {
        setupTrickNoButton(btn);
      } else {
        btn.onclick = () => loadPage(button.nextPage);
      }

      buttonsElement.appendChild(btn);
    });
  } else {
    buttonsElement.classList.add("hidden");
    navButtons.classList.remove("hidden");
  }

  // Handle Nav Buttons
  prevButton.style.display = index === 0 ? "none" : "inline-block";
  nextButton.style.display = index === pages.length - 1 ? "none" : "inline-block";
}

// Trick No Button Logic
function setupTrickNoButton(button) {
  let moveCount = 0;
  button.addEventListener("mouseover", () => {
    if (moveCount < 7) {
      moveCount++;
      button.style.position = "absolute";
      button.style.top = `${Math.random() * 70 + 10}%`;
      button.style.left = `${Math.random() * 70 + 10}%`;
    } else {
      button.onclick = () => loadPage(7);
    }
  });
}

// Navigation Buttons
prevButton.onclick = () => loadPage(currentPage - 1);
nextButton.onclick = () => loadPage(currentPage + 1);

// Initialize
loadPage(0);