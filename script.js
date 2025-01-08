let currentPage = 1;

function nextPage() {
  document.getElementById(`page-${currentPage}`).classList.add("hidden");
  currentPage++;
  document.getElementById(`page-${currentPage}`).classList.remove("hidden");
}

function prevPage() {
  document.getElementById(`page-${currentPage}`).classList.add("hidden");
  currentPage--;
  document.getElementById(`page-${currentPage}`).classList.remove("hidden");
}

function chooseYes() {
  document.getElementById("page-4").classList.add("hidden");
  document.getElementById("page-4-yes").classList.remove("hidden");
}

function chooseNo() {
  document.getElementById("page-4").classList.add("hidden");
  document.getElementById("page-4-no").classList.remove("hidden");
}

function wrongAnswer() {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.textContent = "Galat jawab 😑";
}