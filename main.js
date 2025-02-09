function loadingCover() {
    const cover = document.getElementById("loading");

    function doCover() {
        cover.style.display = "flex";

        setTimeout(() => {
            if (document.readyState === "complete") {
                cover.style.transform = "translateY(100%)";
                return;
            }

            window.onload = function() {
                cover.style.transform = "translateY(100%)";
            }
        }, 750);

        const loadingMessages = [
            "Finalizing your flight plan...",
            "Spooling up the engines...",
            "Fueling up...",
            "Aligning with the runway...",
            "Waiting for takeoff clearance...",
            "Waiting for IFR clearance...",
            "Adjusting seatbacks and tray tables...",
            "Calculating cruise altitude..."
        ]

        const messageEl = document.querySelector("div#loading h1");
        const message = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
        messageEl.innerHTML = message;
    }

    setTimeout(() => {
        if (document.readyState === "complete") {
            cover.style.display = "none";
        } else {
            doCover();
        }
    }, 50);
}

function buttonsAndLinks() {
    const joinDiscordButtons = document.querySelectorAll("button.join-discord");
    joinDiscordButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            window.open("https://discord.gg/aS5G7GdP5E", "_blank");
        })
    })
}

loadingCover();
buttonsAndLinks();