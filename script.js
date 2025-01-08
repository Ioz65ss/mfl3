// Content Data
const pages = [
    { text: 'Hello 👋', gif: 'assets/gif1.gif' },
    { text: 'Kesi hai ap 👉🏻👈🏻??? Sach sach batana😿', gif: 'assets/gif2.gif', commentBox: true },
    { text: 'I know, ap ko thora dukh diya hai mene🤕', gif: 'assets/gif3.gif' },
    { text: 'Kya ap mujhe maaf karengi❤???', gif: 'assets/gif4.gif', yesNo: true },
    { text: 'Choose the most beautiful flower', gif: 'assets/gif5.gif', flowerQuiz: true },
    { text: 'Ji bilkul sahi samjhe, Ap he ho cutie🎀😚', img: 'assets/photo1.jpg' },
    { text: 'Kya ap gift ke liye taiyar hai???', reward: true }
];

let currentPage = 0;

// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderPage);

// Render Page
function renderPage() {
    const content = document.getElementById('content');
    if (!content) {
        console.error("Error: #content element not found.");
        return;
    }

    const page = pages[currentPage];
    let html = `<h1>${page.text}</h1>`;

    if (page.gif) {
        html += `<img src="${page.gif}" alt="GIF">`;
    }
    if (page.img) {
        html += `<img src="${page.img}" alt="Image">`;
    }
    if (page.commentBox) {
        html += `<textarea id="comment" placeholder="Type your answer..."></textarea>
                 <button onclick="sendComment()">Send</button>`;
    }
    if (page.yesNo) {
        html += `<div class="yes-no-buttons">
                    <button id="yesBtn" onclick="yesClicked()">Yes</button>
                    <button id="noBtn" onclick="noClicked()">No</button>
                 </div>`;
    }
    if (page.flowerQuiz) {
        html += `<div class="flower">
                    <img src="assets/photo1.jpg" onclick="flowerClicked(this)">
                    <img src="assets/photo2.jpg" onclick="flowerClicked(this)">
                 </div>`;
    }
    if (page.reward) {
        html += `<p>Ye lijiye mera dil❤, It is worth 7Cr. Just for you😊</p>`;
    }

    content.innerHTML = html;

    // Show/Hide Navigation Buttons
    document.getElementById('prevBtn').style.display = currentPage === 0 ? 'none' : 'inline-block';
    document.getElementById('nextBtn').style.display = currentPage === pages.length - 1 ? 'none' : 'inline-block';
}

// Navigation
function navigate(step) {
    currentPage += step;
    if (currentPage < 0) currentPage = 0;
    if (currentPage >= pages.length) currentPage = pages.length - 1;
    renderPage();
}

// Send Comment
function sendComment() {
    const comment = document.getElementById('comment').value;
    if (comment.trim() === '') {
        alert('Please write a comment before sending!');
        return;
    }
    alert(`Comment Sent: ${comment}`);
}

// Yes/No Button Behavior
let noClickCount = 0;
function noClicked() {
    noClickCount++;
    const noBtn = document.getElementById('noBtn');
    if (noClickCount < 7) {
        noBtn.style.position = 'absolute';
        noBtn.style.top = `${Math.random() * 300}px`;
        noBtn.style.left = `${Math.random() * 300}px`;
    } else {
        alert('Okay, you can click No now!');
    }
}

function yesClicked() {
    alert('Thank you! Proceeding...');
    currentPage++;
    renderPage();
}

// Flower Selection
function flowerClicked(img) {
    img.classList.add('selected');
    setTimeout(() => {
        alert('Galat jawab😑');
        if (confirm('Sahi answer bataye??')) {
            currentPage++;
            renderPage();
        }
    }, 500);
}