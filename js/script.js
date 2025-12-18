if (typeof roulette !== 'undefined') {
    roulette.addEventListener("click", function () {
        roulette.classList.add("rotate");
        setTimeout(() => roulette.classList.remove("rotate"), 600);

        let currentHref = theme.getAttribute("href");

        if (currentHref.includes("dark.css")) {
            theme.setAttribute("href", currentHref.replace("dark.css", "light.css"));
        } else {
            theme.setAttribute("href", currentHref.replace("light.css", "dark.css"));
        }
    });
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", (e) => {
            if (link.parentElement.classList.contains("menu-deroulant") || link.getAttribute("href") === "#") {
                return;
            }
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}