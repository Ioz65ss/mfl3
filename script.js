// Variable to track the current page
let currentPage = 1;

// Function to navigate to the next page
function nextPage(pageNumber) {
  document.getElementById(`page-${currentPage}`).style.display = 'none';
  document.getElementById(`page-${pageNumber}`).style.display = 'block';
  currentPage = pageNumber;
}

// Function to navigate to the previous page
function prevPage(pageNumber) {
  document.getElementById(`page-${currentPage}`).style.display = 'none';
  document.getElementById(`page-${pageNumber}`).style.display = 'block';
  currentPage = pageNumber;
}

// Function to handle the submission of the user's response
function submitResponse() {
  const response = document.getElementById('comment-box').value;
  if (response) {
    alert('Response submitted: ' + response);
    // Optional: Send the response to email
    sendResponseToEmail(response);
  } else {
    alert('Please write your answer.');
  }
}

// Function to send the response via email (requires backend)
function sendResponseToEmail(response) {
  fetch('https://your-backend-url.com/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answer: response }),
  })
    .then(res => res.json())
    .then(data => alert('Response sent successfully!'))
    .catch(err => alert('Failed to send response.'));
}

// Function for moving the "No" button to random positions
let clickCount = 0;
function moveNoButton() {
  clickCount++;
  const button = document.getElementById('no-button');

  if (clickCount < 7) {
    // Randomize the button's position
    button.style.position = 'absolute';
    button.style.top = Math.random() * window.innerHeight + 'px';
    button.style.left = Math.random() * window.innerWidth + 'px';
  } else {
    // After 7 clicks, make the button clickable
    button.onclick = () => alert('Finally clicked!');
  }
}

// Function for handling photo selection
function selectPhoto(photoId) {
  const photos = document.querySelectorAll('.photo');
  photos.forEach(photo => {
    photo.classList.remove('selected');
  });

  const selectedPhoto = document.getElementById(photoId);
  selectedPhoto.classList.add('selected');
  alert('Galat jawab😑'); // Show wrong answer message
}

// Function to show the correct answer popup
function showCorrectAnswer() {
  alert('Sahi jawab hai...');
  nextPage(currentPage + 1);
}