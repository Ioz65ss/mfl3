const pages = [
  { content: 'Hello 👋', gif: 'gif1.gif', next: true, prev: false },
  { content: 'Kesi hai ap👉🏻👈🏻??? Sach sach batana😿', gif: 'gif2.gif', options: ['Thik hoon❤', 'ekdum bindass hoon❤'] },
  { content: 'I know, ap ko thora dukh diya hai mene🤕', gif: 'gif3.gif', next: true, prev: true },
  { 
    content: 'Kya ap mujhe maaf karengi❤???', 
    gif: 'gif4.gif', 
    options: ['Yes', 'No'],
    handleOption: (option) => {
      if (option === 'Yes') {
        // Navigate to the next page flow
        currentPage = 4; // Set to the next page (Yes flow start)
        renderPage(currentPage);
      } else if (option === 'No') {
        // Move the "No" button randomly
        const noButton = document.querySelector('.no-btn');
        if (noButton) {
          noButton.style.position = 'absolute';
          noButton.style.top = `${Math.random() * 300}px`;
          noButton.style.left = `${Math.random() * 300}px`;
        }
      }
    }
  },
  // Add other pages here...
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
      ${page.options ? renderOptions(page.options, page.handleOption) : ''}
      <div class="navigation">
        ${page.prev ? `<button onclick="navigate(-1)">Previous</button>` : ''}
        ${page.next ? `<button onclick="navigate(1)">Next</button>` : ''}
      </div>
    </div>
  `;
}

function renderOptions(options, handler) {
  return options.map((option, i) => {
    if (option === 'No') {
      return `<button class="no-btn" onclick="handleOption(${i})">${option}</button>`;
    }
    return `<button onclick="handleOption(${i})">${option}</button>`;
  }).join('');
}

function navigate(direction) {
  currentPage += direction;
  renderPage(currentPage);
}

function handleOption(optionIndex) {
  const page = pages[currentPage];
  if (page.handleOption) {
    const selectedOption = page.options[optionIndex];
    page.handleOption(selectedOption);
  } else {
    navigate(1); // Default behavior: move to the next page
  }
}

// Initialize the first page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  renderPage(currentPage);
});