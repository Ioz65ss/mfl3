const pages = [
  {
    content: `
      <div class="gif">[GIF 1 Placeholder]</div>
      <p>Hello 👋</p>
    `,
  },
  {
    content: `
      <div class="gif">[GIF 2 Placeholder]</div>
      <p>Kesi hai ap👉🏻👈🏻??? Sach sach batana😿</p>
      <button onclick="chooseResponse('thik')">Thik hoon ❤</button>
      <button onclick="chooseResponse('bindass')">Ekdum bindass hoon ❤</button>
    `,
  },
  {
    content: `
      <div class="gif">[GIF 3 Placeholder]</div>
      <p>I know, ap ko thora dukh diya hai mene🤕</p>
    `,
  },
  {
    content: `
      <div class="gif">[GIF 4 Placeholder]</div>
      <p>Kya ap mujhe maaf karengi ❤???</p>
      <button onclick="handleForgive('yes')">Yes</button>
      <button id="noButton" onclick="handleForgive('no')">No</button>
    `,
  },
  {
    content: `
      <p>Thank you, apko ek reward milega worth 7 crore.</p>
    `,
  },
  // Additional pages remain unchanged
];

let currentPage = 0;

const app = document.getElementById("app");

function renderPage() {
  console.log("Rendering page:", currentPage); // Debugging
  const page = pages[currentPage];
  const hideNav = currentPage === 1 || currentPage === 3; // Hide navigation for pages 2 and 4
  app.innerHTML = `
    ${page.content}
    <div class="navigation">
      ${
        !hideNav && currentPage > 0
          ? `<button onclick="prevPage()">Previous</button>`
          : ""
      }
      ${
        !hideNav && currentPage < pages.length - 1
          ? `<button onclick="nextPage()">Next</button>`
          : ""
      }
    </div>
  `;
}

function nextPage() {
  currentPage++;
  renderPage();
}

function prevPage() {
  currentPage--;
  renderPage();
}

function chooseResponse(response) {
  alert(`You chose: ${response}`);
  nextPage();
}

function handleForgive(choice) {
  if (choice === "yes") {
    currentPage = 4; // Set to the index of page 5 (0-based index)
    renderPage(); // Re-render the page
  } else {
    const noButton = document.getElementById("noButton");
    noButton.style.position = "absolute";
    noButton.style.left = `${Math.random() * 80}%`;
    noButton.style.top = `${Math.random() * 80}%`;
  }
}

// Initialize the first page
renderPage();