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
  // Yes Block
  { text: "Thank you, apko ek reward milega worth 7 crore.", gif: "reward.gif", group: "yes" },
  { text: "Itni jaldi nhi, apko ko thora mehenat krna parega😇", gif: "work.gif", group: "yes" },
  { text: "Next page mai sawal ka jawab dijiye aur le jaiye gift worth 7 Cr.", gif: "question.gif", group: "yes" },
  // No Block
  { text: "Ye kya??? Apne mujhe abhi bhi maaf nhi kiya😭😭??", gif: "sad.gif", group: "no" },
  { text: "Ab apko punishment milega mere se!!😞", gif: "punish.gif", group: "no" },
  { text: "Apko mere saath KBC khelna parega😒", gif: "kbc.gif", group: "no" },
  // Shared Pages
  { text: "Choose the most beautiful flower—", gif: "flower.gif" },
  { text: "Heheheheh😂, Galat jawab😗...", gif: "laugh.gif" },
  { text: "Sahi jawab hai....", gif: "correct.gif" },
  {
    text: "Ji bilkul sahi samjhe, Ap he ho cutie🎀😚",
    gif: "cutie.gif",
    extraText: "Ap bilkul meri lagti ho❤🎀",
  },
  { text: "Kya ap gift ke liye taiyar hai???", buttons: [{ text: "Yes", nextPage: 13 }] },
  { text: "Ye lijiye mera dil❤,It is worth 7Cr. Just for you😊", gif: "heart.gif" },
  { text: "Galat jawab dene par bhi apko 7Cr ka reward mil gaya apko😞", gif: "reward.gif" },
  { text: "Areee, itni jaldi bhi kya hai???", gif: "hurry.gif" },
  { text: "Aj apne bohot mehenat krke exam diya hai🥺💯", gif: "exam.gif" },
  { text: "Ye lijiye apke liye ek chocolate 😋🍫", gif: "chocolate.gif" },
  { text: "Ohhh, aur ek chiz", gif: "next.gif" },
  { text: "Meri pyari si fool ke liye pyara sa phool🌺😊", gif: "flower2.gif" },
  { text: "Ye lijiye", gif: "gift.gif" },
  { text: "Aur ye bhi", gif: "more.gif" },
  { text: "I hope tumhe bore nhi laga hoga. Apna dhyan rakhiyega❤", gif: "bye.gif" },
];

// Current state
let currentPage = 0;
let forgivenessChoice = "";

// DOM elements
const gifElement = document.getElementById("gif");
const textElement = document.getElementById("text");
const buttonsElement = document.getElementById("buttons");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Render page
function renderPage(index) {
  const page = pages[index];

  gifElement.src = page.gif;
  textElement.textContent = page.text;

  // Show extra text if available
  if (page.extraText) {
    const extra = document.createElement("p");
    extra.className = "centered-text";
    extra.textContent = page.extraText;
    textElement.appendChild(extra);
  }

  // Show/hide buttons
  buttonsElement.innerHTML = "";
  if (page.buttons) {
    buttonsElement.classList.remove("hidden");
    page.buttons.forEach((btn) => {
      const button = document.createElement("button");
      button.textContent = btn.text;
      button.onclick = btn.type === "trick-no" ? trickNoLogic : () => handleButtonClick(btn);
      buttonsElement.appendChild(button);
    });
  } else {
    buttonsElement.classList.add("hidden");
  }

  // Show/hide navigation
  prevButton.style.display = index === 0 ? "none" : "inline-block";
  nextButton.style.display = index === pages.length - 1 ? "none" : "inline-block";
}

function handleButtonClick(button) {
  if (button.type === "yes") {
    forgivenessChoice = "yes";
    currentPage = 4; // Start from Yes block
  } else if (button.type === "no") {
    forgivenessChoice = "no";
    currentPage = 7; // Start from No block
  } else if (button.nextPage !== undefined) {
    currentPage = button.nextPage;
  }
  renderPage(currentPage);
}

// Navigation logic
nextButton.onclick = () => {
  if (forgivenessChoice === "yes" && currentPage === 6) {
    currentPage = 10; // Skip to the shared flow after Yes block
  } else if (forgivenessChoice === "no" && currentPage === 9) {
    currentPage = 10; // Skip to the shared flow after No block
  } else {
    currentPage++;
  }
  renderPage(currentPage);
};

prevButton.onclick = () => {
  currentPage--;
  renderPage(currentPage);
};

// Trick No Button Logic
function trickNoLogic() {
  let noButton = event.target;
  let attempts = noButton.dataset.attempts || 0;
  if (attempts < 6) {
    noButton.dataset.attempts = ++attempts;
    noButton.style.position = "absolute";
    noButton.style.top = Math.random() * 80 + "%";
    noButton.style.left = Math.random() * 80 + "%";
  } else {
    forgivenessChoice = "no";
    currentPage = 7; // Start No block
    renderPage(currentPage);
  }
}

// Initialize
renderPage(currentPage);