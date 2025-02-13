function loadingCover() {
    const cover = document.querySelector("div.loading");

    function doCover() {
        cover.style.display = "flex";

        setTimeout(() => {
            if (document.readyState === "complete") {
                cover.style.transform = "translateY(100%)";
                cover.style.opacity = 0.75;
                return;
            }

            window.onload = function() {
                cover.style.transform = "translateY(100%)";
                cover.style.opacity = 0.75;
            }
        }, 850);

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

        const messageEls = document.querySelectorAll("div.loading p");
        const message = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
        messageEls.forEach(msgEl => {
            msgEl.innerHTML = message;
        });
    }

    doCover();
}

function buttonsAndLinks() {
    const joinDiscordButtons = document.querySelectorAll(".act-join-discord");
    joinDiscordButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            window.open("https://discord.gg/aS5G7GdP5E", "_blank");
        })
    })

    const logoHomeButtons = document.querySelectorAll("img.nav-home");
    logoHomeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = "/dalv";
        })
    })

    const routesButtons = document.querySelectorAll("a.nav-info-routes");
    routesButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = "/dalv/routes";
        })
    }) 
    // TODO (IN CLASS IG): do a forEach for each item in the dropdown
}

function randomBannerImage() {
    const banners = [
        "/dalv/images/banners/a350-forward-port.png",
        "/dalv/images/banners/gclp-2-a350-tails.png",
        "/dalv/images/banners/gclp-4-a350s.png",
        "/dalv/images/banners/luggage-night-727.png",
        "/dalv/images/banners/moon-717.png",
        "/dalv/images/banners/4-a350-tails-port.png",
        "/dalv/images/banners/757-approach.png",
    ]

    const bannerEl = document.querySelector("section.banner");
    if (bannerEl) {
        bannerEl.style.backgroundImage = `url(${banners[Math.floor(Math.random() * banners.length)]})`;
    }
}

function hideOnScroll() {
    const hintArrow = document.querySelector("section.banner i.hint-arrow");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            hintArrow.style.display = "none";
        } else {
            hintArrow.style.display = "block";
        }
    })
}

loadingCover();
buttonsAndLinks();
randomBannerImage();
hideOnScroll();