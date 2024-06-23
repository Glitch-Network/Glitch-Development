document.addEventListener("DOMContentLoaded", function() {
    function load_theme() {
        const theme = localStorage.getItem("theme");
        const theme_background = document.createElement('img');
        theme_background.style = `
        z-index: -15;
            position: fixed;
            height: 100%;
            top: 0;
            left: 0;
            width: 100%;
        `;
        document.body.appendChild(theme_background);

        const themeSettings = {
            "void": { backgroundColor: "#131313", color: "white", src: "" },
            "dark": { backgroundColor: "#131313", color: "white", src: "assets/backgrounds/earth.gif" },
            "ocean": { backgroundColor: "black", color: "white", src: "assets/backgrounds/ocean.jpg" },
            "light": { backgroundColor: "white", color: "black", src: "" },
            "forest": { backgroundColor: "#013220", color: "white", src: "assets/backgrounds/forest.webp" },
            "forest2": { backgroundColor: "#013220", color: "white", src: "assets/backgrounds/forest2.png" },
            "sunset": { backgroundColor: "orange", color: "white", src: "assets/backgrounds/sunset.png" },
            "custom-image": { backgroundColor: localStorage.getItem("custom-image"), color: "white", src: localStorage.getItem("custom-image"), objectFit: "cover" },
            "rain": { backgroundColor: "black", color: "white", src: "assets/backgrounds/rain.gif" },
            "wheat": { backgroundColor: "black", color: "white", src: "assets/backgrounds/wheat.jpg" },
            "capy": { backgroundColor: "black", color: "white", src: "assets/backgrounds/capybara.jpg" },
            "s1": { backgroundColor: "black", color: "white", src: "assets/backgrounds/autism.jpg" },
            "s2": { backgroundColor: "black", color: "white", src: "assets/backgrounds/sirbia.png" },
            "s3": { backgroundColor: "black", color: "white", src: "assets/backgrounds/yoisthatkanye.png" }
        };

        if (theme in themeSettings) {
            document.body.style.backgroundColor = themeSettings[theme].backgroundColor;
            document.body.style.color = themeSettings[theme].color;
            if (themeSettings[theme].src) {
                theme_background.src = themeSettings[theme].src;
                theme_background.style.objectFit = themeSettings[theme].objectFit || "";
            } else {
                theme_background.remove();
            }
        }

        if (theme !== "dark") {
            removeStars();
        } else {
            addStars();
        }
    }

    function removeStars() {
        const cssLinks = document.getElementsByTagName('link');
        Array.from(cssLinks).forEach(link => {
            if (link.getAttribute('href') === 'stars.css') {
                link.parentNode.removeChild(link);
            }
        });

        const mainDiv = document.getElementById("main");
        if (mainDiv) mainDiv.remove();
    }

    function addStars() {
        if (!document.getElementById("main")) {
            const main = document.createElement('div');
            main.id = "main";
            document.body.appendChild(main);
        }
    }

    let old_theme = localStorage.getItem("theme");
    setInterval(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme !== old_theme) {
            load_theme();
            old_theme = currentTheme;
        }
    }, 100);

    load_theme();
});
