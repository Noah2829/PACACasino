
roulette.addEventListener("click", function () {

roulette.classList.add("rotate");
setTimeout(() => roulette.classList.remove("rotate"), 600);

if (theme.getAttribute("href") === "../css/style.css") {
theme.setAttribute("href", "../css/dark.css");
} else {
theme.setAttribute("href", "../css/style.css");
}
});