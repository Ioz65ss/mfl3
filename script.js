// Content for Each Page
const pages = [
    { type: 'gif-text', gif: 'assets/hello.gif', text: 'Hello 👋' },
    { type: 'gif-text-input', gif: 'assets/kesi_hai.gif', text: 'Kesi hai ap👉🏻👈🏻??? Sach sach batana😿' },
    { type: 'gif-text', gif: 'assets/sorry.gif', text: 'I know, ap ko thora dukh diya hai mene🤕' },
    { type: 'yes-no', gif: 'assets/maaf.gif', text: 'Kya ap mujhe maaf karengi❤???' },
    { type: 'gif-text', gif: 'assets/flower.gif', text: 'Choose the most beautiful flower—' },
    { type: 'gif-text', gif: 'assets/correct.gif', text: 'Sahi jawab hai....' },
    { type: 'gif-text', gif: 'assets/cutie.gif', text: 'Ji bilkul sahi samjhe, Ap he ho cutie🎀😚' },
    { type: 'gif-text', gif: 'assets/gift.gif', text: 'Kya ap gift ke liye taiyar hai???' },
    { type: 'gif-text', gif: 'assets/reward.gif', text: 'Galat jawab dene par bhi apko 7Cr ka reward mil gaya apko😞' },
    { type: 'gif-text', gif: 'assets/chocolate.gif', text: 'Ye lijiye apke liye ek chocolate 😋🍫' },
    { type: 'gif-text', gif: 'assets/flower2.gif', text: 'Meri pyari si fool ke liye pyara sa phool🌺😊' },
    { type: 'gif-text', gif: 'assets/end.gif', text: 'I hope tumhe bore nhi laga hoga. Apna dhyan rakhiyega❤' }
];

let currentPage = 0;

// Render Page
function renderPage() {
    const content = document.getElementById('content');
    const page = pages[currentPage];

    if (page.type === 'gif-text') {
        content.innerHTML = `
            <img src="${page.gif}" alt="GIF">
            <p>${page.text}</p>
        `;
    } else if (page.type === 'gif-text-input') {
        content.innerHTML = `
            <img src="${page.gif}" alt="GIF">
            <p>${page.text}</p>
            <input type="text" id="user-input" placeholder="Your Answer">
            <button class="btn" onclick="sendAnswer()">Submit</button>
        `;
    } else if (page.type === 'yes-no') {
        content.innerHTML = `
            <img src="${page.gif}" alt="GIF">
            <p>${page.text}</p>
            <div class="yes-no-buttons">
                <button class="btn" onclick="handleYes()">Yes</button>
                <button class="btn" id="no-btn" onclick="handleNo()">No</button>
            </div>
        `;
    }
}

// Email Submission (Requires EmailJS)
function sendAnswer() {
    const userInput = document.getElementById('user-input').value;
    console.log('User Answer:', userInput);
    alert('Your answer has been sent!');
}

// Yes-No Button Logic
function handleYes() {
    alert('Thank you! Moving ahead...');
    nextPage();
}

function handleNo() {
    const noBtn = document.getElementById('no-btn');
    noBtn.style.position = 'absolute';
    noBtn.style.top = `${Math.random() * 300}px`;
    noBtn.style.left = `${Math.random() * 300}px`;
}

// Navigation Logic
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

// Event Listeners
document.getElementById('next-btn').addEventListener('click', nextPage);
document.getElementById('prev-btn').addEventListener('click', prevPage);

// Initialize Page
renderPage();