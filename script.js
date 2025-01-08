// Pages Data
const pages = [
  { gif: "your-gif-url-1", text: "Hello👋" },
  { gif: "your-gif-url-2", text: "Kesi hai ap👉🏻👈🏻??? Sach sach batana😿" },
  { gif: "your-gif-url-3", text: "I know, ap ko thora dukh diya hai mene🤕" },
  {
    gif: "your-gif-url-4",
    text: "Kya ap mujhe maaf karengi❤???",
    special: true // Indicates Page 4 with Yes/No buttons
  },
  { gif: "your-gif-url-5", text: "Thank you, apko ek reward milega worth 7 crore." }
];

let currentPage = 0;
let noClickCount = 0; // Counter for the No button on Page 4

// Load Page Content
function loadPage(index) {
  const gifElement = document.getElementById("gif");
  const textElement = document.getElementById("text");
  const navigationButtons = document.getElementById("navigationButtons");
  const yesNoButtons = document.getElementById("yesNoButtons");

  const page = pages[index];

  gifElement.src = page.gif;
  textElement.textContent = page.text;

  // Toggle navigation or Yes/No buttons
  if (page.special) {
    navigationButtons.style.display = "none";
    yesNoButtons.style.display = "flex";
  } else {
    navigationButtons.style.display = "flex";
    yesNoButtons.style.display = "none";
  }

  // Disable Previous/Next buttons if needed
  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").disabled = index === pages.length - 1;
}

// Navigate to the Previous Page
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    loadPage(currentPage);
  }
}

// Navigate to the Next Page
function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    loadPage(currentPage);
  }
}

// Handle "Yes" Button on Page 4
function handleYes() {
  alert("Thank you! Moving to the next page...");
  currentPage++;
  loadPage(currentPage);
}

// Handle "No" Button on Page 4
function handleNo() {
  noClickCount++;
  if (noClickCount <= 7) {
    // Randomly reposition the No button
    const noBtn = document.getElementById("noBtn");
    const x = Math.random() * 80 + 10; // Between 10% and 90%
    const y = Math.random() * 80 + 10; // Between 10% and 90%
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}%`;
    noBtn.style.top = `${y}%`;
  } else {
    alert("Fine, I'll let you click No!");
    noClickCount = 0; // Reset counter for reuse if needed
  }
}

// Initial Page Load
document.addEventListener("DOMContentLoaded", () => {
  loadPage(currentPage);
});