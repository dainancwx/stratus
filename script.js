// Handles tab switching
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".tab-content");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // Update active link
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Show corresponding section
    const target = link.getAttribute("href").substring(1);
    sections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === target) sec.classList.add("active");
    });
  });
});
