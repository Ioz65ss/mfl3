let currentPage = 1;

function nextPage(page) {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  document.getElementById(`page${page}`).classList.add("active");
  currentPage = page;
}

function prevPage(page) {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  document.getElementById(`page${page}`).classList.add("active");
  currentPage = page;
}

function yesResponse() {
  nextPage(5); // Navigate to reward pages if Yes is clicked
}

function noResponse() {
  const noButton = document.getElementById("noButton");
  noButton.style.top = Math.random() * window.innerHeight + "px";
  noButton.style.left = Math.random() * window.innerWidth + "px";
}

// Add any specific animations or logic for flowers, gifts, etc.