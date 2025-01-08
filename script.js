// Page content array
const pages = [
  "Hello 👉🏻👈🏻",
  "Kesi hai ap??? Sach sach batana😿",
  "I know, ap ko thora dukh diya hai mene🤕",
  "Kya ap mujhe maaf karengi❤???",
  "Choose the most beautiful flower—",
  "Sahi jawab hai....",
  "Photo",
  "Kya ap gift ke liye taiyar hai???",
  "Galat jawab dene par bhi apko 7Cr ka gift free mai mil gaya apko😞",
  "Areee, itni jaldi bhi kya hai???",
  "Aj apne bohot mehenat krke exam diya hai",
  "Ye lijiye apke liye ek chocolate 😋🍫",
  "Ohhh, aur ek chiz",
  "Meri pyari si fool ke liye pyara sa phool🌺😊",
  "I hope tumhe bore nhi laga hoga. Apna dhyan rakhiyega❤",
];

let currentPage = 0;

// Functions to navigate pages
function updateContent() {
  document.getElementById("page-content").textContent = pages[currentPage];
  document.getElementById("image-placeholder").textContent =
    "Page " + (currentPage + 1);
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateContent();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updateContent();
  }
}

// Initialize content
updateContent();