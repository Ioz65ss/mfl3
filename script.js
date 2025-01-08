const pages = [
  { content: 'Hello 👋', gif: 'gif1.gif', next: true, prev: false },
  { content: 'Kesi hai ap👉🏻👈🏻??? Sach sach batana😿', gif: 'gif2.gif', options: ['Thik hoon❤', 'ekdum bindass hoon❤'] },
  { content: 'I know, ap ko thora dukh diya hai mene🤕', gif: 'gif3.gif', next: true, prev: true },
  { content: 'Kya ap mujhe maaf karengi❤???', gif: 'gif4.gif', options: ['Yes', 'No'] },
  // Add all pages here...
];

let currentPage = 0;

function renderPage(index) {
  const app = document.getElementById('app');
  const page = pages[index];
  app.innerHTML = `
    <div>
      <img src="${page.gif}" alt="GIF">
      <p>${page.content}</p>
      ${page.options ? renderOptions(page.options) : ''}
      <div class="navigation">
        ${page.prev ? `<button onclick="navigate(-1)">Previous</button>` : ''}
        ${page.next ? `<button onclick="navigate(1)">Next</button>` : ''}
      </div>
    </div>
  `;
}

function renderOptions(options) {
  return options.map((option, i) => `<button onclick="handleOption(${i})">${option}</button>`).join('');
}

function navigate(direction) {
  currentPage += direction;
  renderPage(currentPage);
}

function handleOption(optionIndex) {
  // Handle Yes/No and other logic
  if (pages[currentPage].options[optionIndex] === 'No') {
    alert('No button moved!');
  } else {
    navigate(1); // Move to the next page
  }
}

// Initialize the first page
renderPage(currentPage);