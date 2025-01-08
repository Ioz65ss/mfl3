// JavaScript to handle dynamic content and navigation
const app = document.getElementById("app");

// Page content data
const pages = [
  {
    content: `<img class="gif" src="gif1.gif" alt="Hello"><p>Hello👋</p>`,
    next: 1,
  },
  {
    content: `<img class="gif" src="gif2.gif" alt="Kesi hai ap"><p>Kesi hai ap👉🏻👈🏻??? Sach sach batana😿</p>
              <button onclick="handleChoice(1)" class="choice">Thik hoon❤</button>
              <button onclick="handleChoice(2)" class="choice">Ekdum bindass hoon❤</button>`,
    prev: 0,
    next: 2,
  },
  {
    content: `<img class="gif" src="gif3.gif" alt="I know"><p>I know, ap ko thora dukh diya hai mene🤕</p>`,
    prev: 1,
    next: 3,
  },
  {
    content: `<img class="gif" src="gif4.gif" alt="Kya ap mujhe maaf karengi"><p>Kya ap mujhe maaf karengi❤???</p>
              <button onclick="handleYes()" class="choice">Yes</button>
              <button onclick="handleNo()" id="no-btn" class="choice">No</button>`,
    prev: 2,
  },
  { content: `<p>Thank you, apko ek reward milega worth 7 crore.</p>`, prev: 3, next: 5 },
  { content: `<p>Itni jaldi nhi, apko ko thora mehenat krna parega😇</p>`, prev: 4, next: 6 },
  { content: `<p>Next page mai sawal ka jawab dijiye aur le jaiye gift worth 7 Cr.</p>`, prev: 5, next: 7 },
  { content: `<p>Choose the most beautiful flower</p><div class="flowers"><img src="flower1.jpg" class="choice"><img src="flower2.jpg" class="choice"></div>`, prev: 6, next: 8 },
  { content: `<p>Heheheheh😂, Galat jawab😗...</p>`, prev: 7, next: 9 },
  { content: `<p>Sahi jawab hai....</p>`, prev: 8, next: 10 },
  {
    content: `<p>Ji bilkul sahi samjhe, Ap he ho cutie🎀😚</p><img src="cutie.jpg"><p>Ap bilkul meri lagti ho❤🎀</p>`,
    prev: 9,
    next: 11,
  },
  {
    content: `<p>Kya ap gift ke liye taiyar hai???</p><button onclick="goToPage(12)" class="choice">Yes</button>`,
    prev: 10,
  },
  {
    content: `<p>Khair koi na, jaate jaate ek gift le jaiye</p>`,
    prev: 10,
    next: 12,
  },
  { content: `<p>Ye lijiye mera dil❤, It is worth 7Cr. Just for you😊</p><div class="images"><img src="heart1.jpg"><img src="heart2.jpg"></div>`, prev: 11, next: 13 },
  { content: `<p>Galat jawab dene par bhi apko 7Cr ka reward mil gaya apko😞</p>`, prev: 12, next: 14 },
  { content: `<p>Areee, itni jaldi bhi kya hai???</p>`, prev: 13, next: 15 },
  { content: `<p>Aj apne bohot mehenat krke exam diya hai🥺💯</p>`, prev: 14, next: 16 },
  { content: `<p>Ye lijiye apke liye ek chocolate 😋🍫</p><img src="chocolate.jpg">`, prev: 15, next: 17 },
  { content: `<p>Ohhh, aur ek chiz</p>`, prev: 16, next: 18 },
  { content: `<p>Meri pyari si fool ke liye pyara sa phool🌺😊</p><img src="flower.jpg">`, prev: 17, next: 19 },
  { content: `<p>Ye lijiye</p><img src="photo1.jpg">`, prev: 18, next: 20 },
  { content: `<p>Aur ye bhi</p><img src="photo2.jpg">`, prev: 19, next: 21 },
  { content: `<p>I hope tumhe bore nhi laga hoga. Apna dhyan rakhiyega❤</p>`, prev: 20 },
];

// Variables to track page state
let currentPage = 0;

// Load page
function loadPage() {
  const page = pages[currentPage];
  let navigation = "";

  if (page.prev !== undefined) {
    navigation += `<button onclick="goToPage(${page.prev})" class="navigation">Previous</button>`;
  }

  if (page.next !== undefined) {
    navigation += `<button onclick="goToPage(${page.next})" class="navigation">Next</button>`;
  }

  app.innerHTML = `
    <div>${page.content}</div>
    <div class="navigation">${navigation}</div>
  `;
}

// Page navigation
function goToPage(page) {
  currentPage = page;
  loadPage();
}

// Handle choice buttons on Page 2
function handleChoice(choice) {
  if (choice === 1 || choice === 2) {
    goToPage(2); // Navigate to page 3 after a choice is made
  }
}

// Handle "Yes" action
function handleYes() {
  goToPage(4);
}

// Handle "No" action
function handleNo() {
  const noBtn = document.getElementById("no-btn");
  noBtn.style.position = "absolute";
  noBtn.style.top = `${Math.random() * 80}%`;
  noBtn.style.left = `${Math.random() * 80}%`;
}

// Start the application
loadPage();