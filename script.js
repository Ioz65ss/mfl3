const pages = [
  {
    content: `
      <div class="gif"><img src="images/00658f6b219b55ea1d0d1cd804acfbe8.gif" alt="A beautiful image"></div>
      <p>Hellooo 👋</p>
      <div class="navigation">
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/cat.gif" alt="A beautiful image"></div>
      <p>Kesi hai Aap Madam Ji👉🏻👈🏻??? Sach sach batana😿</p>
      <button onclick="chooseResponse('thik')">Thik hoon ❤</button>
      <button onclick="chooseResponse('bindass')">Ekdum bindass hoon ❤</button>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/6414409adb5d8ef8957ace623b1fe8da.gif" alt="A beautiful image"></div>
      <p>I know, Aap ko Thora Dukh diya hai Maine🤕</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/15462ed447e25356837b32a7e22e538f.gif" alt="A beautiful image"></div>
      <p>Kya Aap Mujhe Maaf kiye hai❤??? Aap na nhi kar sakti🗿</p>
      <button onclick="handleForgive('yes')">Haa❤</button>
      <button id="noButton" onclick="handleForgive('no')">Nahi😤</button>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/happy-cat-cat.gif" alt="A beautiful image"></div>
      <p>Thank youuu😂, Aapko ek Reward Milega worth 7 crore.</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/mochi-mochi-peach-cat-cute.gif" alt="A beautiful image"></div>
      <p>Itni bhi Jaldi Kya hai Madam Ji😁, apko ko thora mehenat krna parega😇</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/cute-cat.gif" alt="A beautiful image"></div>
      <p>Aap Ek Sawal ka Jawab Dijiye aur Le Jaiye Gift worth 7 Cr.</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
  content: `
    <p>Tap on the most beautiful flower—</p>
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
      <p>Heheheheh😂,Saare Galat hai Kya??😗...</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/cat-fight-cat.gif" alt="A beautiful image"></div>
      <p>Sahi Jawab Khud Dekh Lijiye👉🏻</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
{
  content: `
    <div class="photos cutie-page">
      <img src="images/🎀_20250109_124412_0000.jpg" alt="Image 1">
    </div>
    <p>Ji Kya Soch Rhi Hai Aap??? Aap he Khud Jawab ho Cutie🎀😚</p>
    <p>Aap bilkul meri lagti ho❤🎀</p>
    <div class="navigation">
      <button onclick="prevPage()">Previous</button>
      <button onclick="nextPage()">Next</button>
    </div>
  `,
},
  {
    content: `
      <div class="gif"><img src="images/cat-fight-cat.gif" alt="A beautiful image"></div>
      <p>Jaate Jaate Ek Gift Le Jaiye...</p>
      <button onclick="nextPage()">Yes</button>
    `,
  },
  {
    content: `
      <p>Ye Lijiye mera dil❤,It is worth 7Cr. Just for you😊</p>
      <div class="photos"><img src="images/giphy.gif" alt="A beautiful image"
class="photos"><img src="images/c510f48976065f0daf6d023a6097fd99.gif" alt="A beautiful image"
class="photos"><img src="images/heres-my-heart-heart.gif" alt="A beautiful image"
class="photos"><img src="images/b44a539b46f239d3b7852c28ce89da12.gif" alt="A beautiful image"></div>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/b6ab1c7de235b7fd5948d1f7a8da9508.jpg" alt="A beautiful image"></div>
      <p>Galat Jawab Dene Par Bhi Aapko 7Cr ka Reward Mil Gaya Aapko😞</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/yaseen.gif" alt="A beautiful image"></div>
      <p>Rukiye Rukiye, Itni Jaldi Bhi Kya Hai???</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
    content: `
      <div class="gif"><img src="images/chal-mere-ghode.gif" alt="A beautiful image"></div>
      <p>Kal Aapne Bohot Mehenat karke Exam Diya Tha🥺💯</p>
      <div class="navigation">
        <button onclick="prevPage()">Previous</button>
        <button onclick="nextPage()">Next</button>
      </div>
    `,
  },
  {
  content: `
    <div class="photos chocolate-page">
      <img src="images/0a52e446b0c3ab5f7bf8968838378217.jpg" alt="Chocolate Image">
    </div>
    <p>Ye Lijiye, Aapke Liye Chocolates😋🍫</p>
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
    <div class="photos flower-page">
      <img src="images/f851734ad5ac51a4550ae8d08cd7cf32.jpg" alt="Flower Image">
    </div>
    <p>Meri pyari si fool ke liye pyara sa phool🌺😊</p>
    <div class="navigation">
      <button onclick="prevPage()">Previous</button>
      <button onclick="nextPage()">Next</button>
    </div>
  `,
},
{
  content: `
    <div class="photos gift-page">
      <img src="images/141eae9236832d186696822d6883985a.jpg" alt="Gift Image">
    </div>
    <p>Ye Lijiye</p>
    <div class="navigation">
      <button onclick="prevPage()">Previous</button>
      <button onclick="nextPage()">Next</button>
    </div>
  `,
},
{
  content: `
    <div class="photos also-page">
      <img src="images/d82acd6891fc8cc98dfbd4db9604e53c.jpg" alt="Another Image">
    </div>
    <p>Aur ye bhi</p>
    <div class="navigation">
      <button onclick="prevPage()">Previous</button>
      <button onclick="nextPage()">Next</button>
    </div>
  `,
},
  {
    content: `
      <p>I hope tumhe bore nhi laga hoga. Yahi khatam hota hai. Sorry, late se bhejne ke liye...</p>
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