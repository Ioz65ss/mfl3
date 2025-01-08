// Pages Data
const pages = [
  { text: "Hello👋", gif: "hello.gif" },
  {
    text: "Kesi hai ap👉🏻👈🏻??? Sach sach batana😿",
    gif: "question.gif",
    buttons: [
      { text: "Thik hoon❤", nextPage: 2 },
      { text: "Ekdum bindass hoon❤", nextPage: 2 },
    ],
  },
  { text: "I know, ap ko thora dukh diya hai mene🤕", gif: "sorry.gif" },
  {
    text: "Kya ap mujhe maaf karengi❤???",
    gif: "forgive.gif",
    buttons: [
      { text: "Yes❤", type: "yes" },
      { text: "No😿", type: "trick-no" },
    ],
  },
  // Yes Block Pages
  { text: "Thank you, apko ek reward milega worth 7 crore.", gif: "reward.gif", group: "yes" },
  { text: "Itni jaldi nhi, apko ko thora mehenat krna parega😇", gif: "work.gif", group: "yes" },
  { text: "Next page mai sawal ka jawab dijiye aur le jaiye gift worth 7 Cr.", gif: "question.gif", group: "yes" },
  // No Block Pages
  { text: "Ye kya??? Apne mujhe abhi bhi maaf nhi kiya😭😭??", gif: "sad.gif", group: "no" },
  { text: "Ab apko punishment milega mere se!!😞", gif: "punish.gif", group: "no" },
  { text: "Apko mere saath KBC khelna parega😒", gif: "kbc.gif", group: "no" },
  // Common Page
  { text: "Choose the most beautiful flower—", gif: "flower.gif" },
];

// Current Page Index
let currentPage = 0;

// Track if Yes or No was clicked
let forgivenessChoice = "";

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
    page.buttons.forEach((button) => {
      const btn = document.createElement("button");
      btn.textContent = button.text;

      if (button.type === "yes") {
        btn.onclick = () => {
          forgivenessChoice = "yes";
          loadPage(4); // First page in the "Yes" group
        };
      } else if (button.type === "trick-no") {
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

  // Show/Hide Nav Buttons based on context
  prevButton.style.display = index === 0 ? "none" : "inline-block";
  nextButton.style.display =
    (index === pages.length - 1 || (page.group && !isLastInGroup(index))) ? "none" : "inline-block";
}

// Determine if it's the last page in a group
function isLastInGroup(index) {
  const page = pages[index];
  const nextPage = pages[index + 1];
  return page.group && (!nextPage || nextPage.group !== page.group);
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
      button.onclick = () => {
        forgivenessChoice = "no";
        loadPage(7); // First page in the "No" group
      };
    }
  });
}

// Navigation Buttons
prevButton.onclick = () => {
  const currentPageData = pages[currentPage];
  if (currentPageData.group && forgivenessChoice === currentPageData.group) {
    navigateWithinGroup(currentPage - 1, forgivenessChoice);
  } else {
    loadPage(currentPage - 1);
  }
};

nextButton.onclick = () => {
  const currentPageData = pages[currentPage];
  if (currentPageData.group && forgivenessChoice === currentPageData.group) {
    navigateWithinGroup(currentPage + 1, forgivenessChoice);
  } else {
    loadPage(currentPage + 1);
  }
};

// Navigate within a group
function navigateWithinGroup(index, group) {
  if (pages[index] && pages[index].group === group) {
    loadPage(index);
  } else if (group === "yes") {
    loadPage(8); // Transition to Page 8
  } else if (group === "no") {
    loadPage(8); // Transition to Page 8
  }
}

// Initialize
loadPage(0);