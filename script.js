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

// Form submission for sending email via Formspree
document.getElementById('responseForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission
  const form = e.target;

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        alert('Response sent successfully!');
        form.reset(); // Clear the form
      } else {
        alert('Failed to send the response. Please try again.');
      }
    })
    .catch(() => alert('An error occurred. Please try again.'));
});