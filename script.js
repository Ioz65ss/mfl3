const pages = [
  {
    content: `
      <div class="gif">[GIF 1 Placeholder]</div>
      <p>Hello 👋</p>
      <div class="navigation">
        <button onclick="nextPage()">Next</button>
      </div>
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
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
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
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <p>Itni jaldi nhi, apko ko thora mehenat krna parega😇</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <p>Next page mai sawal ka jawab dijiye aur le jaiye gift worth 7 Cr.</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <p>Choose the most beautiful flower—</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <p>Heheheheh😂, Galat jawab😗...</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <p>Sahi jawab hai....</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="photo">[PHOTO Placeholder]</div>
      <p>Ji bilkul sahi samjhe, Ap he ho cutie🎀😚</p>
      <p>Ap bilkul meri lagti ho❤🎀</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
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
      <div class="photos">[Photos/GIFs Placeholder]</div>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <p>Galat jawab dene par bhi apko 7Cr ka reward mil gaya apko😞</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <p>Areee, itni jaldi bhi kya hai???</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <p>Aj apne bohot mehenat krke exam diya hai🥺💯</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="photo">[Chocolate Image Placeholder]</div>
      <p>Ye lijiye apke liye ek chocolate 😋🍫</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <p>Ohhh, aur ek chiz</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="photo">[Flower Image Placeholder]</div>
      <p>Meri pyari si fool ke liye pyara sa phool🌺😊</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="photo">[Photo Placeholder]</div>
      <p>Ye lijiye</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="photo">[Photo Placeholder]</div>
      <p>Aur ye bhi</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <p>I hope tumhe bore nhi laga hoga. Apna dhyan rakhiyega❤</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
      </div>
    `,
  },
];

let currentPage = 0;

const app = document.getElementById("app");

function renderPage() {
  const page = pages[currentPage];
  app.innerHTML = page.content;
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

function chooseResponse(response) {
  alert(`You chose: ${response}`);
  nextPage();
}

function handleForgive(choice) {
  if (choice === "yes") {
    currentPage = 4; // Page 5 index
    renderPage();
  } else {
    const noButton = document.getElementById("noButton");
    noButton.style.position = "absolute";
    noButton.style.left = `${Math.random() * 80}%`;
    noButton.style.top = `${Math.random() * 80}%`;
  }
}

// Initialize the first page
renderPage();
