const searchLogo = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");

const searchPages = {
  "about": "about.html",
  "students": "students.html",
  "staffs": "staff.html",
  "sitemap": "sitemap.html",
  "contact": "contact.html",
  "library": "library.html",
  "syllabus": "syllabus.html",
  "director": "director.html",
  "dean": "dean.html",
  "registrar": "registrar.html",
  "senate": "senate.html",
  "cse": "cse.html",
  "it": "it.html",
  "ece": "ece.html",
  "ee": "ee.html",
  "mec": "mec.html",
  "che": "che.html",
  "civ": "civ.html",
  "mme": "mme.html"
};

function performSearch() {
  const query = searchBox.value.toLowerCase().trim();
  if (query && searchPages[query]) {
    window.location.href = searchPages[query];
  } else if (query) {
    alert("No result found. Please enter correct search");
  }
}

// 🔍 icon click
searchLogo.addEventListener("click", () => {
  if (!searchBox.classList.contains("active")) {
    // first click → open box
    searchBox.classList.add("active");
    searchBox.focus();
  } else {
    // second click → run search
    performSearch();
  }
});

// Enter key press
searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch();
    searchBox.classList.remove("active");
    searchBox.value = ""; // clear after search
  }
});
