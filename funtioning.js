

const title = document.getElementById("side-title");

const highlightClasses = [
    "highlight-red",
    "highlight-blue",
    "highlight-green",
    "highlight-purple"
];

let index = 0;

title.addEventListener("click", () => {
    // Remove old highlight
    title.classList.remove(...highlightClasses);

    // Add new one
    title.classList.add(highlightClasses[index]);

    // Move to next
    index = (index + 1) % highlightClasses.length;
});

const searchBox = document.getElementById("search-box");
const noResults = document.getElementById("no-results");

searchBox.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const allCards = document.querySelectorAll(".genre-card, .artist-card");

    let visibleCount = 0;

    allCards.forEach(card => {
        const cardText = card.innerText.toLowerCase();
        if (cardText.includes(searchTerm)) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    // Show or hide the "no results" message
    if (visibleCount === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
});




// Show/hide back-to-top button
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll smoothly to top on click
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Login / Signup Modal Logic
const modal = document.getElementById("auth-modal");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.querySelector(".close-btn");

document.querySelector(".login").addEventListener("click", () => {
    modal.style.display = "block";
    modalTitle.textContent = "Login";
});

document.querySelector(".signup").addEventListener("click", () => {
    modal.style.display = "block";
    modalTitle.textContent = "Sign Up";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
// Download button function
document.querySelector(".download").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3"; // dummy mp3
    link.download = "sample-music.mp3";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});



