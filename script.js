// Page data
const pages = [
  {
    text: "Hello👋",
    gif: "hello.gif",
  },
  {
    text: "Kesi hai ap👉🏻👈🏻??? Sach sach batana😿",
    gif: "question.gif",
    buttons: [
      { text: "Thik hoon❤", nextPage: 2 },
      { text: "Ekdum bindass hoon❤", nextPage: 2 }
    ]
  },
  {
    text: "I know, ap ko thora dukh diya hai mene🤕",
    gif: "sad.gif",
  },
  {
    text: "Kya ap mujhe maaf karengi❤???",
    gif: "forgive.gif",
    buttons: [
      { text: "Yes❤", nextPage: 5 },
      { text: "No😿", type: "trick-no" }
    ]
  },
  {
    text: "Thank you, apko ek reward milega worth 7 crore.",
    gif: "reward.gif",
  },
  // Add other pages here...
];

let currentPage = 0;

// DOM elements
const gifElement = document.getElementById("gif");
const textElement = document.getElementById("text");
const buttonsElement = document.getElementById("buttons");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to load a page
function loadPage(pageIndex) {
  const page = pages[pageIndex];
  currentPage = pageIndex;

  // Update GIF and text
  gifElement.src = page.gif;
  textElement.innerText = page.text;

  // Update buttons
  buttonsElement.innerHTML = ""; // Clear old buttons
  if (page.buttons) {
    page.buttons.forEach(button => {
      const btn = document.createElement("button");
      btn.innerText = button.text;
      btn.className = "action-button";

      if (button.type === "trick-no") {
        btn.classList.add("no-button");
        setupTrickNoButton(btn);
      } else {
        btn.addEventListener("click", () => loadPage(button.nextPage));
      }

      buttonsElement.appendChild(btn);
    });
    buttonsElement.classList.remove("hidden");
  } else {
    buttonsElement.classList.add("hidden");
  }

  // Handle navigation buttons visibility
  prevButton.style.display = pageIndex === 0 ? "none" : "inline-block";
  nextButton.style.display = pageIndex === pages.length - 1 ? "none" : "inline-block";
}

// Function to set up a "trick no" button
function setupTrickNoButton(button) {
  let moveCount = 0;

  button.addEventListener("mouseover", () => {
    if (moveCount < 7) {
      moveCount++;
      button.style.position = "absolute";
      button.style.top = `${Math.random() * 70 + 10}%`;
      button.style.left = `${Math.random() * 70 + 10}%`;
    } else {
      button.onclick = () => loadPage(8); // Allow clicking after 7 moves
    }
  });
}

// Navigation buttons
prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    loadPage(currentPage - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    loadPage(currentPage + 1);
  }
});

// Initialize the first page
loadPage(currentPage);