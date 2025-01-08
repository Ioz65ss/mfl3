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
  { content: 'Choose the most beautiful flower.', gif: 'gif8.gif', next: true, prev: true },
  { content: 'Heheheheh😂, Galat jawab😗...', gif: 'gif9.gif', next: true, prev: true },
  { content: 'Sahi jawab hai....', gif: 'gif10.gif', next: true, prev: true },
  { content: 'Ji bilkul sahi samjhe, Ap he ho cutie🎀😚', gif: 'gif11.gif', next: true, prev: true },
  { content: 'Kya ap gift ke liye taiyar hai???', gif: 'gif12.gif', showYes: true },
  { content: 'Khair koi na, jaate jaate ek gift le jaiye.', gif: 'gif13.gif', next: true, prev: true },
  { content: 'Ye lijiye mera dil❤, It is worth 7Cr. Just for you😊', gif: 'gif14.gif', next: true, prev: true },
  { content: 'Galat jawab dene par bhi apko 7Cr ka reward mil gaya apko😞', gif: 'gif15.gif', next: true, prev: true },
  { content: 'Areee, itni jaldi bhi kya hai???', gif: 'gif16.gif', next: true, prev: true },
  { content: 'Aj apne bohot mehenat krke exam diya hai🥺💯', gif: 'gif17.gif', next: true, prev: true },
  { content: 'Ye lijiye apke liye ek chocolate 😋🍫', gif: 'gif18.gif', next: true, prev: true },
  { content: 'Ohhh, aur ek chiz', gif: 'gif19.gif', next: true, prev: true },
  { content: 'Meri pyari si fool ke liye pyara sa phool🌺😊', gif: 'gif20.gif', next: true, prev: true },
  { content: 'Ye lijiye', gif: 'gif21.gif', next: true, prev: true },
  { content: 'Aur ye bhi', gif: 'gif22.gif', next: true, prev: true },
  { content: 'I hope tumhe bore nhi laga hoga. Apna dhyan rakhiyega❤', gif: 'gif23.gif', next: false, prev: true },
];

let currentPage = 0;
let wasForgiven = false;

function renderPage(index) {
  const app = document.getElementById('app');

  if (index < 0 || index >= pages.length) return;

  const page = pages[index];
  app.innerHTML = `
    <div>
      <img src="${page.gif}" alt="GIF" class="gif">
      <p>${page.content}</p>
      ${page.options ? renderOptions(page.options, page.isSpecialPage) : ''}
      ${page.showYes ? '<button onclick="navigateToGift()">Yes</button>' : ''}
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
  wasForgiven = true;
  currentPage = 4; // Page index after "Yes"
  renderPage(currentPage);
}

function navigateToGift() {
  currentPage = wasForgiven ? 12 : 13; // Go to different page based on forgiveness
  renderPage(currentPage);
}

function moveNoButton() {
  const noButton = document.getElementById('noButton');
  noButton.style.position = 'absolute';
  noButton.style.top = Math.random() * 80 + '%';
  noButton.style.left = Math.random() * 80 + '%';
}

// Initialize the first page
document.addEventListener('DOMContentLoaded', () => {
  renderPage(currentPage);
});