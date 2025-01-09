const pages = [
  {
    content: `
      <div class="gif"><img src="images/00658f6b219b55ea1d0d1cd804acfbe8.gif" alt="A beautiful image"></div>
      <p>Hello 👋</p>
      <div class="navigation">
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/cat.gif" alt="A beautiful image"></div>
      <p>Kesi hai ap👉🏻👈🏻??? Sach sach batana😿</p>
      <button onclick="chooseResponse('thik')">Thik hoon ❤</button>
      <button onclick="chooseResponse('bindass')">Ekdum bindass hoon ❤</button>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/6414409adb5d8ef8957ace623b1fe8da.gif" alt="A beautiful image"></div>
      <p>I know, ap ko thora dukh diya hai mene🤕</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/15462ed447e25356837b32a7e22e538f.gif" alt="A beautiful image"></div>
      <p>Kya ap mujhe maaf karengi ❤???</p>
      <button onclick="handleForgive('yes')">Yes</button>
      <button id="noButton" onclick="handleForgive('no')">No</button>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/happy-cat-cat.gif" alt="A beautiful image"></div>
      <p>Thank you, apko ek reward milega worth 7 crore.</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/mochi-mochi-peach-cat-cute.gif" alt="A beautiful image"></div>
      <p>Itni jaldi nhi, apko ko thora mehenat krna parega😇</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/cute-cat.gif" alt="A beautiful image"></div>
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
    <div id="flowers" class="flowers-container">
      <img src="images/4a5440463f5083d0771a3d1483d9f30f.jpg" alt="Flower 1" class="flower" onclick="moveImage(this)">
      <img src="images/2e87322a5c7f7a304e365f68c18cb427.jpg" alt="Flower 2" class="flower" onclick="moveImage(this)">
      <img src="images/3d413a4d87b45b6d673e6601bc7f4e84.jpg" alt="Flower 3" class="flower" onclick="moveImage(this)">
      <img src="images/1adc9c527fb04c78c638c348010b0309.jpg" alt="Flower 4" class="flower" onclick="moveImage(this)">
    </div>
    <div class="navigation">
      <button onclick="prevPage()">Previous</button>
      <button onclick="nextPage()">Next</button>
    </div>
  `,
},
  {
    content: `
      <div class="gif"><img src="images/cat-cats.gif" alt="A beautiful image"></div>
      <p>Heheheheh😂, Galat jawab😗...</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/cat-fight-cat.gif" alt="A beautiful image"></div>
      <p>Sahi jawab hai....</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="photo"><img src="images/giphy.gif" alt="A beautiful image"></div>
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
      <div class="gif"><img src="images/giphy.gif" alt="A beautiful image"></div>
      <p>Kya ap gift ke liye taiyar hai???</p>
      <button onclick="nextPage()">Yes</button>
    `,
  },
  {
    content: `
      <p>Ye lijiye mera dil❤,It is worth 7Cr. Just for you😊</p>
      <div class="photos"><img src="images/giphy.gif" alt="A beautiful image"
class="photos"><img src="images/giphy.gif" alt="A beautiful image"
class="photos"><img src="images/giphy.gif" alt="A beautiful image"
class="photos"><img src="images/giphy.gif" alt="A beautiful image"></div>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/giphy.gif" alt="A beautiful image"></div>
      <p>Galat jawab dene par bhi apko 7Cr ka reward mil gaya apko😞</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/giphy.gif" alt="A beautiful image"></div>
      <p>Areee, itni jaldi bhi kya hai???</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/giphy.gif" alt="A beautiful image"></div>
      <p>Aj apne bohot mehenat krke exam diya hai🥺💯</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="photo"><img src="images/giphy.gif" alt="A beautiful image"</div>
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
      <div class="photo"><img src="images/giphy.gif" alt="A beautiful image"></div>
      <p>Meri pyari si fool ke liye pyara sa phool🌺😊</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="photo"><img src="images/giphy.gif" alt="A beautiful image"></div>
      <p>Ye lijiye</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="photo"><img src="images/giphy.gif" alt="A beautiful image"></div>
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

function moveImage(image) {
  const container = document.getElementById("flowers");
  const containerRect = container.getBoundingClientRect();

  const getRandomPosition = () => {
    const maxX = containerRect.width - image.offsetWidth;
    const maxY = containerRect.height - image.offsetHeight;
    return {
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    };
  };

  const checkOverlap = (x, y) => {
    const siblings = container.querySelectorAll(".flower");
    for (const sibling of siblings) {
      if (sibling !== image) {
        const siblingRect = sibling.getBoundingClientRect();
        const imageRect = {
          left: x,
          top: y,
          right: x + image.offsetWidth,
          bottom: y + image.offsetHeight,
        };
        if (
          !(imageRect.right < siblingRect.left ||
            imageRect.left > siblingRect.right ||
            imageRect.bottom < siblingRect.top ||
            imageRect.top > siblingRect.bottom)
        ) {
          return true; // Overlap detected
        }
      }
    }
    return false;
  };

  let position;
  do {
    position = getRandomPosition();
  } while (checkOverlap(position.x, position.y));

  image.style.left = `${position.x}px`;
  image.style.top = `${position.y}px`;
}

// Initialize the first page
renderPage();
