let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navlinks = document.querySelectorAll("header nav a");

// Initially hide navlinks
navbar.classList.add("hidden");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");

  // Toggle visibility of navlinks
  navlinks.forEach(link => {
    link.classList.toggle("hidden");
  });
}
