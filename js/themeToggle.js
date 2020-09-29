const btn = document.querySelector(".theme-change-btn");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function(e) {
    btn.classList.toggle("dark-theme");
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme") ?
            "light" :
            "dark";
    } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme") ?
            "dark" :
            "light";
    }
    localStorage.setItem("theme", theme);
    e.preventDefault();
});