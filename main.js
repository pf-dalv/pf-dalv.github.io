const airports = [
    { code: "MDPC", name: "Punta Cana" },
    { code: "MDST", name: "Cibao" },
    { code: "EGKK", name: "London Gatwick" },
    { code: "LEMH", name: "Menorca" },
    { code: "GCLP", name: "Gran Canaria" },
    { code: "LYTV", name: "Tivat" },
    { code: "EFKT", name: "Kittilä" }
]

function loadingCover() {
    if (!(document.querySelector("div.loading"))) { 
        return;
    }

    const cover = document.querySelector("div.loading");
    cover.style.display = "flex";

    function doCover() {
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
        }, 600);

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

    const logoHomeButtons = document.querySelectorAll("nav img.nav-home");
    logoHomeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = "/dalv";
        })
    })

    const navInfoButtons = document.querySelectorAll("nav div.dropdown div.dropdown-content.info a");
    navInfoButtons.forEach(btn => {
        let urlNeeded = btn.classList[0].substring(9);

        btn.addEventListener("click", () => {
            location.href = `/dalv/${urlNeeded}`;
        })
    })

    const navResourceButtons = document.querySelectorAll("nav div.dropdown div.dropdown-content.resources a");
    navResourceButtons.forEach(btn => {
        let urlNeeded = btn.classList[0].substring(14);

        btn.addEventListener("click", () => {
            location.href = `/dalv/${urlNeeded}`;
        })
    })

    const chartAirportSelectionButtons = document.querySelectorAll("body#charts section.list div.airport");
    chartAirportSelectionButtons.forEach(cell => {
        cell.addEventListener("click", () => {
            const airportCode = cell.classList[1];
            location.href = `/dalv/charts/?airport=${airportCode}`;
        })
    });

    const chartsAirportBackButton = document.querySelectorAll("section.airport div.nav i.back");
    chartsAirportBackButton.forEach(btn => {
        btn.addEventListener("click", () => {
            location.href = "/dalv/charts";
        })
    })
}

function randomBannerImage() {
    const banners = [
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/5-delta-dish.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/757-approach.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/moon-717.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/4-a350-tails-port.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/luggage-night-727.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/gclp-4-a350s.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/gclp-2-a350-tails.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-forward-port.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/737-final-egkk.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/737-over-egkk-birdseye.png",
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
    if (!(location.pathname == "/dalv/routes/")) {
        return;
    }

    const airportCodeList = airports.map(airport => airport.code);

    // SHORT (UNDER 20NM)
    // MEDIUM (20-30NM)
    // LONG (OVER 30NM)
    // DPC DST DAB DCR

    const routes = [

        { origin: "MDPC", destination:
            {
                mdst: { haul: "Short", time: "No Time Data", altitude: "020", route: "No Route Data" },
                egkk: { haul: "Long", time: "47m 24s", altitude: "090", route: "No Route Data" },
                lemh: { haul: "Medium", time: "24m 30s", altitude: "070", route: "No Route Data" },
                gclp: { haul: "Short", time: "40m 54s", altitude: "050", route: "No Route Data" },
                lytv: { haul: "Long", time: "37m 40s", altitude: "050", route: "No Route Data" },
                efkt: { haul: "Long", time: "52m 46s", altitude: "110", route: "No Route Data" }
            }
        },

        { origin: "MDST", destination:
            {
                mdpc: { haul: "Short", time: "No Time Data", altitude: "020", route: "No Route Data" },
                egkk: { haul: "Long", time: "36m 33s", altitude: "090", route: "No Route Data" },
                lemh: { haul: "Long", time: "No Time Data", altitude: "070", route: "No Route Data" },
                gclp: { haul: "Medium", time: "40m 9s", altitude: "050", route: "No Route Data" },
                lytv: { haul: "Long", time: "37m 11s", altitude: "050", route: "No Route Data" },
                efkt: { haul: "Long", time: "44m 33s", altitude: "110", route: "No Route Data" }
            }
        },

        { origin: "EGKK", destination:
            {
                mdpc: { haul: "Long", time: "51m 26s", altitude: "080", route: "No Route Data" },
                mdst: { haul: "Long", time: "No Time Data", altitude: "080", route: "No Route Data" },
                lemh: { haul: "Short", time: "32m 35s", altitude: "050", route: "No Route Data" },
                gclp: { haul: "Medium", time: "No Time Data", altitude: "060", route: "No Route Data" },
                lytv: { haul: "Long", time: "No Time Data", altitude: "090", route: "No Route Data" },
                efkt: { haul: "Short", time: "42m 7s", altitude: "050", route: "No Route Data" }
            }
        },

        { origin: "LEMH", destination:
            {
                mdpc: { haul: "Medium", time: "No Time Data", altitude: "060", route: "No Route Data" },
                mdst: { haul: "Long", time: "38m 29s", altitude: "060", route: "No Route Data" },
                egkk: { haul: "Short", time: "14m 38s", altitude: "060", route: "No Route Data" },
                gclp: { haul: "Short", time: "No Time Data", altitude: "060", route: "No Route Data" },
                lytv: { haul: "Short", time: "25m 5s", altitude: "050", route: "No Route Data" },
                efkt: { haul: "Medium", time: "30m 24s", altitude: "070", route: "No Route Data" }
            }
        },

        { origin: "GCLP", destination:
            {
                mdpc: { haul: "Short", time: "No Time Data", altitude: "", route: "No Route Data" },
                mdst: { haul: "Medium", time: "No Time Data", altitude: "No Altitude Data", route: "No Route Data" },
                egkk: { haul: "Short", time: "39m 44s", altitude: "No Altitude Data", route: "No Route Data" },
                lemh: { haul: "Short", time: "No Time Data", altitude: "No Altitude Data", route: "No Route Data" },
                lytv: { haul: "Short", time: "32m 4s", altitude: "No Altitude Data", route: "No Route Data" },
                efkt: { haul: "Medium", time: "1h 2m 30s", altitude: "No Altitude Data", route: "No Route Data" }
            }
        },

        { origin: "LYTV", destination:
            {
                mdpc: { haul: "Long", time: "34m 41s", altitude: "No Altitude Data", route: "No Route Data" },
                mdst: { haul: "Long", time: "No Time Data", altitude: "No Altitude Data", route: "No Route Data" },
                egkk: { haul: "Long", time: "No Time Data", altitude: "No Altitude Data", route: "No Route Data" },
                lemh: { haul: "Short", time: "No Time Data", altitude: "No Altitude Data", route: "No Route Data" },
                gclp: { haul: "Short", time: "No Time Data", altitude: "No Altitude Data", route: "No Route Data" },
                efkt: { haul: "Long", time: "No Time Data", altitude: "No Altitude Data", route: "No Route Data" }
            }
        },

        { origin: "EFKT", destination:
            {
                mdpc: { haul: "Long", time: "28m 18s", altitude: "No Altitude Data", route: "No Route Data" },
                mdst: { haul: "Long", time: "No Time Data", altitude: "No Altitude Data", route: "No Route Data" },
                egkk: { haul: "Short", time: "No Time Data", altitude: "No Altitude Data", route: "No Route Data" },
                lemh: { haul: "Medium", time: "34m 28s", altitude: "No Altitude Data", route: "No Route Data" },
                gclp: { haul: "Medium", time: "27m 36s", altitude: "No Altitude Data", route: "No Route Data" },
                efkt: { haul: "Long", time: "No Time Data", altitude: "No Altitude Data", route: "No Route Data" }
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

        depInput.addEventListener("input", () => {
            if (airportCodeList.includes(depInput.value.toUpperCase())) {
                depAirport = depInput.value;
            } else {
                depAirport = "";
            }
            determine();

        })

        arrInput.addEventListener("input", () => {
            if (airportCodeList.includes(arrInput.value.toUpperCase())) {
                arrAirport = arrInput.value;
            } else {
                arrAirport = "";
            }
            determine();
        })

        function determine() {
            const haulEl = document.querySelector("body#routes div.search div.output p.haul");
            const airplanesEl = document.querySelector("body#routes div.search div.output p.airplanes");
            const altitudeEl = document.querySelector("body#routes div.search div.output p.altitude");
            const routeEl = document.querySelector("body#routes div.search div.output p.route");

            if (depAirport && arrAirport) {
                const time = routes.find(route => route.origin === depAirport.toUpperCase()).destination[arrAirport.toLowerCase()].time;
                const haul = routes.find(route => route.origin === depAirport.toUpperCase()).destination[arrAirport.toLowerCase()].haul;
                const altitude = routes.find(route => route.origin === depAirport.toUpperCase()).destination[arrAirport.toLowerCase()].altitude;
                const route = routes.find(route => route.origin === depAirport.toUpperCase()).destination[arrAirport.toLowerCase()].route;

                let airplanes;
                if (haul == "Long") {
                    airplanes = "A350, MD11";
                } else if (haul == "Medium") {
                    airplanes = "B757"
                } else if (haul == "Short") {
                    airplanes = "B737, B717, B727, A320, A220"
                }

                haulEl.innerHTML = `${haul} Haul - ${time}`;
                airplanesEl.innerHTML = airplanes;
                if (!(altitude == "No Altitude Data")) {
                    altitudeEl.innerHTML = `FL${altitude}`;
                } else {
                    altitudeEl.innerHTML = `${altitude}`;
                }
                routeEl.innerHTML = route;
            } else {
                haulEl.innerHTML = `Haul - Time`;
                airplanesEl.innerHTML = `Aircraft`;
                altitudeEl.innerHTML = `Altitude`;
                routeEl.innerHTML = `Route`;
            }
        }
    }

    getRouteInfo();
}

function charts() {
    if (!(location.pathname == "/dalv/charts/")) {
        return;
    }

    function fillList() {
        const listSection = document.querySelector("body#charts section.list");

        airports.forEach(airport => {
            const newCell = document.createElement("div");
            newCell.classList.add("airport", airport.code);
            newCell.innerHTML = `
                <img src="https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/airports/${(airport.code).toLowerCase()}.png">
                <p class="code">${airport.code}</p>
                <p class="name">${airport.name}</p>
            `

            listSection.appendChild(newCell);
        });
    }

    function loadAirportCharts() {
        const urlParams = new URLSearchParams(window.location.search);
        const paramList = [];
        const listSect = document.querySelector("body#charts section.list");
        const mdpcSect = document.querySelector("body#charts section.airport.mdpc");
        const mdstSect = document.querySelector("body#charts section.airport.mdst");
        const egkkSect = document.querySelector("body#charts section.airport.egkk");
        const lemhSect = document.querySelector("body#charts section.airport.lemh");
        const gclpSect = document.querySelector("body#charts section.airport.gclp");
        const lytvSect = document.querySelector("body#charts section.airport.lytv");
        const efktSect = document.querySelector("body#charts section.airport.efkt");

        for (const [key, value] of urlParams) {
            paramList.push({ key, value });
        }

        let airportParam;
        if (paramList.find(param => param.key == "airport")) {
            airportParam = (paramList.find(param => param.key == "airport").value);
        } else {
            return;
        }

        console.log(airportParam);

        listSect.style.display = "none";
        let newSection = document.querySelector(`body#charts section.airport.${airportParam.toLowerCase()}`);
        console.log(newSection);
        newSection.style.display = "flex";
    }

    fillList();
    loadAirportCharts();
}

function navAndLoadingEls() {
    if (location.pathname == "/dalv/mobile/") {
        return;
    }

    const htmlContent = `
    <div class="loading">
        <p>There was an error.</p>
    </div>

    <nav>
        <img src="https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/logo.png" class="nav-home">
        <a class="nav-join direct act-join-discord">Join</a>
        <div class="dropdown">
            <a class="nav-info dropper">Info</a>
            <div class="dropdown-content-wrapper">
                <div class="dropdown-content info">
                    <a class="nav-info-fleet">Fleet</a>
                    <a class="nav-info-staff">Staff</a>
                    <a class="nav-info-partnerships">Partnerships</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <a class="nav-resources dropper">Resources</a>
            <div class="dropdown-content-wrapper">
                <div class="dropdown-content resources">
                    <a class="nav-resources-charts">Charts</a>
                    <a class="nav-resources-routes">Routes</a>
                    <a class="nav-resources-checklists">Checklists</a>
                </div>
            </div>
        </div>
    </nav>
    
    `;

    // Insert at the beginning of the body
    document.body.insertAdjacentHTML("afterbegin", htmlContent);    
}

function checkMobile() {
    window.addEventListener("resize", () => {
        toggleMobile();
    });

    function toggleMobile() {
        if (innerWidth <= 800) {
            if (location.pathname.includes("mobile")) {
                return;
            }

            location.href = "/dalv/mobile/";
        } else {
            if (location.pathname.includes("mobile")) {
                location.href = "/dalv/";
            }
        }
    }

    toggleMobile();
}

navAndLoadingEls();
loadingCover();
document.addEventListener("DOMContentLoaded", () => {
    buttonsAndLinks();
});
randomBannerImage();
checkMobile();
hideOnScroll();
routes();
charts();
