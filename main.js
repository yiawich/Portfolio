// =========================================================
// BURGER MENU
// =========================================================

const burger = document.getElementById("burger");
const sidebar = document.querySelector(".sidebar");

if (burger && sidebar) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        sidebar.classList.toggle("open");
    });
}


// =========================================================
// ANIMATION DES COMPÉTENCES
// =========================================================

window.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector("#competences");
    const competenceLink = document.querySelector('a[href="#competences"]');

    const bars = {
        html: document.querySelector(".skills-html"),
        css3: document.querySelector(".skills-css3"),
        js: document.querySelector(".skills-js"),
        react: document.querySelector(".skills-react"),
        php: document.querySelector(".skills-php"),
        node: document.querySelector(".skills-node"),
        git: document.querySelector(".skills-git"),
        github: document.querySelector(".skills-github"),
        vscode: document.querySelector(".skills-vscode"),
        figma: document.querySelector(".skills-figma"),
        uiux: document.querySelector(".skills-uiux")
    };

    const percentages = {
        html: "90%",
        css3: "85%",
        js: "70%",
        react: "65%",
        php: "60%",
        node: "55%",
        git: "75%",
        github: "75%",
        vscode: "80%",
        figma: "65%",
        uiux: "65%"
    };


    // =====================================================
    // REMETTRE TOUTES LES BARRES À 0
    // =====================================================

    function resetBars() {
        Object.values(bars).forEach((bar) => {
            if (bar) {
                bar.style.width = "0";
            }
        });
    }


    // =====================================================
    // ANIMER LES BARRES
    // =====================================================

    function animateBars() {

        Object.keys(bars).forEach((skill) => {

            if (bars[skill]) {
                bars[skill].style.width = percentages[skill];
            }

        });
    }


    // =====================================================
    // QUAND ON CLIQUE SUR "COMPÉTENCES"
    // =====================================================

    if (competenceLink) {

        competenceLink.addEventListener("click", () => {

            // Remettre les barres à zéro
            resetBars();

            // Attendre un tout petit peu puis lancer l'animation
            setTimeout(() => {
                animateBars();
            }, 100);

        });
    }

});