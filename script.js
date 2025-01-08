const pages = [
  { content: 'Hello 👋', gif: 'gif1.gif', next: true, prev: false },
  { content: 'Kesi hai ap👉🏻👈🏻??? Sach sach batana😿', gif: 'gif2.gif', options: ['Thik hoon❤', 'ekdum bindass hoon❤'] },
  { content: 'I know, ap ko thora dukh diya hai mene🤕', gif: 'gif3.gif', next: true, prev: true },
  { 
    content: 'Kya ap mujhe maaf karengi❤???', 
    gif: 'gif4.gif', 
    options: ['Yes', 'No'], 
    isSpecialPage: true 
  },
  { content: 'Thank you, apko ek reward milega worth 7 crore.', gif: 'gif5.gif', next: true, prev: true },
  { content: 'Itni jaldi nhi, apko ko thora mehenat krna parega😇', gif: 'gif6.gif', next: true, prev: true },
  { content: 'Next page mai sawal ka jawab dijiye aur le jaiye gift worth 7 Cr.', gif: 'gif7.gif', next: true, prev: true },
  // Add remaining pages here...
];

let currentPage = 0;

function renderPage(index) {
  const app = document.getElementById('app');

  // Ensure the page index is within bounds
  if (index < 0 || index >= pages.length) {
    console.error('Invalid page index');
    return;
  }

  const page = pages[index];
  app.innerHTML = `
    <div>
      <img src="${page.gif}" alt="GIF" class="gif">
      <p>${page.content}</p>
      ${page.options ? renderOptions(page.options, page.isSpecialPage) : ''}
      <div class="navigation">
        ${page.prev ? `<button onclick="navigate(-1)">Previous</button>` : ''}
        ${page.next ? `<button onclick="navigate(1)">Next</button>` : ''}
      </div>
    </div>
  `;
}

function renderOptions(options, isSpecialPage = false) {
  if (isSpecialPage) {
    return `
      <button id="yesButton" onclick="handleYes()">Yes</button>
      <button id="noButton" onmouseover="moveNoButton()">No</button>
    `;
  }
  return options.map((option, i) => `<button onclick="handleOption(${i})">${option}</button>`).join('');
}

function navigate(direction) {
  currentPage += direction;
  renderPage(currentPage);
}

function handleYes() {
  currentPage = 4; // Set to the index of Page 5
  renderPage(currentPage);
}

function moveNoButton() {
  const noButton = document.getElementById('noButton');
  noButton.style.position = 'absolute';
  noButton.style.top = Math.random() * 80 + '%';
  noButton.style.left = Math.random() * 80 + '%';
}

// Initialize the first page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  renderPage(currentPage);
});