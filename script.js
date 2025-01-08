
// Pages Content
const pages = [
  {
    gif: "your-gif-url-1",
    text: "Hello👋"
  },
  {
    gif: "your-gif-url-2",
    text: "Kesi hai ap👉🏻👈🏻??? Sach sach batana😿"
  },
  {
    gif: "your-gif-url-3",
    text: "I know, ap ko thora dukh diya hai mene🤕"
  },
  {
    gif: "your-gif-url-4",
    text: "Kya ap mujhe maaf karengi❤???",
    buttons: true // Special page with Yes/No buttons
  }
  // Add more pages here following the same structure
];

let currentPage = 0;

// Load Page Content
function loadPage(index) {
  const gifElement = document.getElementById("gif");
  const textElement = document.getElementById("text");

  gifElement.src = pages[index].gif;
  textElement.textContent = pages[index].text;

  // Toggle buttons based on the page
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

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
  loadPage(currentPage);
});