const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const tabButtons = document.querySelectorAll(".category-tabs button");
const truckArticles = document.querySelectorAll(".truck-grid article");

// Hamburger Menu
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

// Close menu when clicking on links
const menuLinks = document.querySelectorAll(".mobile-menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

// Category Tabs
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    // Get selected category
    const category = button.getAttribute("data-category");

    // Filter trucks
    truckArticles.forEach((article) => {
      if (
        category === "all" ||
        article.getAttribute("data-category") === category
      ) {
        article.classList.remove("hidden");
      } else {
        article.classList.add("hidden");
      }
    });

    // Scroll tabs container to show active button
    const tabsContainer = document.querySelector(".category-tabs-container");
    const buttonRect = button.getBoundingClientRect();
    const containerRect = tabsContainer.getBoundingClientRect();

    if (buttonRect.right > containerRect.right) {
      tabsContainer.scrollLeft += buttonRect.right - containerRect.right + 20;
    } else if (buttonRect.left < containerRect.left) {
      tabsContainer.scrollLeft -= containerRect.left - buttonRect.left + 20;
    }
  });
});
  document.getElementById("language-select").addEventListener("change", function () {
    const lang = this.value;

    // Dilə görə yönləndirilmə (nümunəlik .html fayllar)
    switch (lang) {
      case "ru":
        window.location.href = "indexru.html";
        break;
      case "en":
        window.location.href = "indexen.html";
        break;
      default:
        window.location.href = "index.html";
    }
  });