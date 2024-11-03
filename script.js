const menuToggle = document.getElementById("menu");
const navMenu = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});
