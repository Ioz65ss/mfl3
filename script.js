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
  { text: "Thank you, apko ek reward milega worth 7 crore.", gif: "reward.gif", group: "yes" },
  { text: "Ye kya??? Apne mujhe abhi bhi maaf nhi kiya😭😭??", gif: "sad.gif", group: "no" },
];

let currentPage = 0;

const gifElement = document.getElementById("gif");
const textElement = document.getElementById("text");
const buttonsElement = document.getElementById("buttons");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function renderPage() {
  const page = pages[currentPage];

  gifElement.src = page.gif;
  textElement.textContent = page.text;

  // Clear and add buttons
  buttonsElement.innerHTML = "";
  if (page.buttons) {
    page.buttons.forEach((btn) => {
      const button = document.createElement("button");
      button.textContent = btn.text;
      button.onclick = () => handleButtonClick(btn);
      buttonsElement.appendChild(button);
    });
  }

  // Hide or show navigation buttons
  prevButton.style.display = currentPage === 0 ? "none" : "inline-block";
  nextButton.style.display = page.buttons ? "none" : "inline-block";
}

function handleButtonClick(button) {
  if (button.nextPage !== undefined) {
    currentPage = button.nextPage;
  } else if (button.type === "yes") {
    currentPage = 4; // Start Yes block
  } else if (button.type === "trick-no") {
    handleTrickNo();
    return;
  }
  renderPage();
}

function handleTrickNo() {
  // Move the No button randomly
  const noButton = event.target;
  noButton.style.position = "absolute";
  noButton.style.top = `${Math.random() * 80}%`;
  noButton.style.left = `${Math.random() * 80}%`;
}

nextButton.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage();
  }
});

prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
});

// Initialize the first page
renderPage();