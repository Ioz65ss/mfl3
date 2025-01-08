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
  {
    content: `
      <p>Itni jaldi nhi, apko ko thora mehenat krna parega😇</p>
    `,
  },
  {
    content: `
      <p>Next page mai sawal ka jawab dijiye aur le jaiye gift worth 7 Cr.</p>
    `,
  },
  {
    content: `
      <p>Choose the most beautiful flower—</p>
      <div class="gif">[Flower Placeholder]</div>
    `,
  },
  {
    content: `
      <p>Heheheheh😂, Galat jawab😗...</p>
    `,
  },
  {
    content: `
      <p>Sahi jawab hai....</p>
    `,
  },
  {
    content: `
      <div class="photo">[Photo Placeholder]</div>
      <p>Ji bilkul sahi samjhe, Ap he ho cutie🎀😚</p>
      <p>Ap bilkul meri lagti ho❤🎀</p>
    `,
  },
  {
    content: `
      <p>Kya ap gift ke liye taiyar hai???</p>
      <button onclick="nextPage()">Yes</button>
    `,
  },
  {
    content: `
      <p>Ye lijiye mera dil❤,It is worth 7Cr. Just for you😊</p>
      <div class="photos">[4 Photos/GIFs Placeholder]</div>
    `,
  },
  {
    content: `
      <div class="gif">[GIF 5 Placeholder]</div>
      <p>Galat jawab dene par bhi apko 7Cr ka reward mil gaya apko😞</p>
    `,
  },
  {
    content: `
      <p>Areee, itni jaldi bhi kya hai???</p>
    `,
  },
  {
    content: `
      <p>Aj apne bohot mehenat krke exam diya hai🥺💯</p>
    `,
  },
  {
    content: `
      <div class="photo">[Chocolate Placeholder]</div>
      <p>Ye lijiye apke liye ek chocolate 😋🍫</p>
    `,
  },
  {
    content: `
      <p>Ohhh, aur ek chiz</p>
    `,
  },
  {
    content: `
      <div class="photo">[Flower Placeholder]</div>
      <p>Meri pyari si fool ke liye pyara sa phool🌺😊</p>
    `,
  },
  {
    content: `
      <div class="photo">[Photo Placeholder]</div>
      <p>Ye lijiye</p>
    `,
  },
  {
    content: `
      <div class="photo">[Photo Placeholder]</div>
      <p>Aur ye bhi</p>
    `,
  },
  {
    content: `
      <p>I hope tumhe bore nhi laga hoga. Apna dhyan rakhiyega❤</p>
    `,
  },
];

let currentPage = 0;

const app = document.getElementById("app");

function renderPage() {
  console.log("Rendering page:", currentPage); // Debugging
  const page = pages[currentPage];
  app.innerHTML = `
    ${page.content}
    <div class="navigation">
      ${currentPage > 0 ? `<button onclick="prevPage()">Previous</button>` : ""}
      ${
        currentPage < pages.length - 1 && currentPage !== 3 && currentPage !== 11
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