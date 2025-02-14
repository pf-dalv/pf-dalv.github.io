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
        "/dalv/images/banners/5-delta-dish.png",
    ]

    const bannerEl = document.querySelector("section.banner");
    if (bannerEl) {
        bannerEl.style.backgroundImage = `url(${banners[Math.floor(Math.random() * banners.length)]})`;
    }
}

function hideOnScroll() {
    const hintArrow = document.querySelector("section.banner i.hint-arrow");

    if (hintArrow) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                hintArrow.style.display = "none";
            } else {
                hintArrow.style.display = "block";
            }
        })
    } else {
        return;
    }
}

function routes() {
    const airports = [
        { code: "MDPC", name: "Punta Cana", atcDefault: 1 },
        { code: "MDST", name: "Cibao", atcDefault: 0 },
        { code: "MDAB", name: "Arroyo Barril", atcDefault: 0 },
        { code: "EGKK", name: "London Gatwick", atcDefault: 1 },
        { code: "EGHI", name: "Southampthon", atcDefault: 0 },
        { code: "LEMH", name: "Menorca", atcDefault: 0 },
        { code: "GCLP", name: "Gran Canaria", atcDefault: 0 },
        { code: "LYTV", name: "Tivat", atcDefault: 0 },
        { code: "EFKT", name: "Kittilä", atcDefault: 0 }
    ]
    
    const airportCodeList = airports.map(airport => airport.code);

    // SHORT (UNDER 20)
    // MEDIUM (20-30)
    // LONG (OVER 30)

    const routes = [
        { origin: "MDPC", destination:
            {
                mdst: { haul: "Short", time: "None" },
                mdab: { haul: "Short", time: "None" },
                egkk: { haul: "Long", time: "47m 24s" },
                eghi: { haul: "Long", time: "None" },
                lemh: { haul: "Medium", time: "24m 30s" },
                gclp: { haul: "Short", time: "40m 54s" },
                lytv: { haul: "Long", time: "37m 40s" },
                efkt: { haul: "Long", time: "52m 46s" }
            }
        },

        { origin: "MDST", destination:
            {
                mdpc: { haul: "Short", time: "None" },
                mdab: { haul: "Short", time: "None" },
                egkk: { haul: "Long", time: "41m 31s" },
                eghi: { haul: "Long", time: "None" },
                lemh: { haul: "Long", time: "None" },
                gclp: { haul: "Medium", time: "40m 9s" },
                lytv: { haul: "Long", time: "37m 11s" },
                efkt: { haul: "Long", time: "44m 33s" }
            }
        },

        { origin: "MDAB", destination:
            {
                mdpc: { haul: "Short", time: "None" },
                mdst: { haul: "Short", time: "None" },
                egkk: { haul: "Long", time: "None" },
                eghi: { haul: "Long", time: "None" },
                lemh: { haul: "Medium", time: "None" },
                gclp: { haul: "Short", time: "None" },
                lytv: { haul: "Long", time: "None" },
                efkt: { haul: "Long", time: "None" }
            }
        },

        { origin: "EGKK", destination:
            {
                mdpc: { haul: "Long", time: "59m 38s" },
                mdst: { haul: "Long", time: "None" },
                mdab: { haul: "Long", time: "None" },
                eghi: { haul: "Short", time: "None" },
                lemh: { haul: "Short", time: "None" },
                gclp: { haul: "Medium", time: "None" },
                lytv: { haul: "Long", time: "None" },
                efkt: { haul: "Short", time: "None" }
            }
        },

        { origin: "EGHI", destination:
            {
                mdpc: { haul: "Long", time: "None" },
                mdst: { haul: "Long", time: "None" },
                mdab: { haul: "Long", time: "None" },
                egkk: { haul: "Short", time: "None" },
                lemh: { haul: "Short", time: "None" },
                gclp: { haul: "Medium", time: "None" },
                lytv: { haul: "Long", time: "None" },
                efkt: { haul: "Short", time: "None" }
            }
        },

        { origin: "LEMH", destination:
            {
                mdpc: { haul: "Medium", time: "None" },
                mdst: { haul: "Long", time: "None" },
                mdab: { haul: "Medium", time: "None" },
                egkk: { haul: "Short", time: "None" },
                eghi: { haul: "Short", time: "None" },
                gclp: { haul: "Short", time: "None" },
                lytv: { haul: "Short", time: "None" },
                efkt: { haul: "Medium", time: "None" }
            }
        },

        { origin: "GCLP", destination:
            {
                mdpc: { haul: "Short", time: "None" },
                mdst: { haul: "Medium", time: "None" },
                mdab: { haul: "Short", time: "None" },
                egkk: { haul: "Short", time: "None" },
                eghi: { haul: "Short", time: "None" },
                lemh: { haul: "Short", time: "None" },
                lytv: { haul: "Short", time: "None" },
                efkt: { haul: "Medium", time: "None" }
            }
        },

        { origin: "LYTV", destination:
            {
                mdpc: { haul: "Long", time: "None" },
                mdst: { haul: "Long", time: "None" },
                mdab: { haul: "Long", time: "None" },
                egkk: { haul: "Long", time: "None" },
                eghi: { haul: "Long", time: "None" },
                lemh: { haul: "Short", time: "None" },
                gclp: { haul: "Short", time: "None" },
                efkt: { haul: "Long", time: "None" }
            }
        },

        { origin: "EFKT", destination:
            {
                mdpc: { haul: "Long", time: "None" },
                mdst: { haul: "Long", time: "None" },
                mdab: { haul: "Long", time: "None" },
                egkk: { haul: "Short", time: "None" },
                eghi: { haul: "Short", time: "None" },
                lemh: { haul: "Medium", time: "None" },
                gclp: { haul: "Medium", time: "None" },
                efkt: { haul: "Long", time: "None" }
            }
        }
    ]

    // EXAMPLE
    // console.log(routes.find(route => route.origin === "MDPC").destination.mdst.time);

    function getRouteInfo() {
        const depInput = document.querySelector("body#routes div.search div.inputs div.departure input");
        const arrInput = document.querySelector("body#routes div.search div.inputs div.arrival input");

        let depAirport;
        let arrAirport;

        console.log("yp");

        depInput.addEventListener("input", () => {
            if (airportCodeList.includes(depInput.value.toUpperCase())) {
                depAirport = depInput.value;
                console.log(depAirport);
                determine();
            }
        })

        arrInput.addEventListener("input", () => {
            if (airportCodeList.includes(arrInput.value.toUpperCase())) {
                arrAirport = arrInput.value;
                console.log(arrAirport);
                determine();
            }
        })

        function determine() {
            if (depAirport && arrAirport) {
                console.log("TRUE!");
                const time = routes.find(route => route.origin === depAirport.toUpperCase()).destination[arrAirport.toLowerCase()].time;
                const haul = routes.find(route => route.origin === depAirport.toUpperCase()).destination[arrAirport.toLowerCase()].haul;
                let airplanes;
                if (haul == "Long") {
                    airplanes = "A350, MD11";
                } else if (haul == "Medium") {
                    airplanes = "B757"
                } else if (haul == "Short") {
                    airplanes = "B737, B717, B727, A320, A220"
                }
                
                const haulEl = document.querySelector("body#routes div.search div.output p.haul");
                const airplanesEl = document.querySelector("body#routes div.search div.output p.airplanes");
                haulEl.innerHTML = `${haul} Haul - ${time}`;
                airplanesEl.innerHTML = `${airplanes}`
            }
        }
    }

    getRouteInfo();
}

loadingCover();
buttonsAndLinks();
randomBannerImage();
hideOnScroll();
routes();