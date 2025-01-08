// Page Content Array
const pages = [
    { gif: 'assets/gif1.gif', text: 'Hello 👋' },
    { gif: 'assets/gif2.gif', text: 'Kesi hai ap 👉🏻👈🏻??? Sach sach batana😿', commentBox: true },
    { gif: 'assets/gif3.gif', text: 'I know, ap ko thora dukh diya hai mene🤕' },
    { gif: 'assets/gif4.gif', text: 'Kya ap mujhe maaf karengi❤???', yesNo: true },
    { gif: 'assets/gif5.gif', text: 'Choose the most beautiful flower', flowerQuiz: true },
    { text: 'Ji bilkul sahi samjhe, Ap he ho cutie🎀😚', img: 'assets/photo1.jpg' },
    { text: 'Kya ap gift ke liye taiyar hai???', reward: true }
];

let currentPage = 0;

// Render Page
function renderPage() {
    const app = document.getElementById('app');
    const page = pages[currentPage];
    let content = `<h1>${page.text}</h1>`;

    if (page.gif) {
        content += `<img src="${page.gif}" alt="GIF">`;
    }
    if (page.img) {
        content += `<img src="${page.img}" alt="Image">`;
    }
    if (page.commentBox) {
        content += `<textarea id="comment" placeholder="Type your answer here..."></textarea>
                    <button onclick="sendComment()">Send</button>`;
    }
    if (page.yesNo) {
        content += `<button id="yesBtn" onclick="yesClicked()">Yes</button>
                    <button id="noBtn" onclick="noClicked()">No</button>`;
    }
    if (page.flowerQuiz) {
        content += `<div class="flowers">
                        <img src="assets/photo1.jpg" onclick="flowerClicked(this)">
                        <img src="assets/photo2.jpg" onclick="flowerClicked(this)">
                    </div>`;
    }

    app.innerHTML = content;
}

// Navigation
function navigate(step) {
    currentPage += step;
    if (currentPage < 0) currentPage = 0;
    if (currentPage >= pages.length) currentPage = pages.length - 1;
    renderPage();
}

// Send Comment via EmailJS (Setup Required)
function sendComment() {
    const comment = document.getElementById('comment').value;
    alert(`Comment sent: ${comment}`);
}

// Yes/No Button Behavior
let noClickCount = 0;
function noClicked() {
    noClickCount++;
    const noBtn = document.getElementById('noBtn');
    if (noClickCount < 7) {
        noBtn.style.top = `${Math.random() * 300}px`;
        noBtn.style.left = `${Math.random() * 300}px`;
    } else {
        alert('Okay, you can click No now!');
    }
}

function yesClicked() {
    alert('Thank you! Moving to the reward page.');
    currentPage++;
    renderPage();
}

// Flower Selection
function flowerClicked(img) {
    img.style.border = '3px solid red';
    img.style.borderRadius = '10px';
    setTimeout(() => {
        alert('Galat jawab😑');
        if (confirm('Sahi answer bataye??')) {
            currentPage++;
            renderPage();
        }
    }, 500);
}

// Initialize Page
renderPage();