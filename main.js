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
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/737-taxiing.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/757-moon-water.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/757-snow-moon.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-cibao-moon.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-gate-port-forward.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/behind-right-a350.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/city-a350.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/moon-tail.png",
        "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/taxi-light-a350.png" 
    ];

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
                egkk: { haul: "Long", time: "47m 24s", altitude: "090", sid: "KATOK 2T", route: "KATOK BANZAI COSTI LORPO ISKAL BOGNA MAYFIELD", star: "VECTORS" },
                lemh: { haul: "Medium", time: "24m 30s", altitude: "070", sid: "KATOK 2T", route: "KATOK VAXRI SYOL4", star: { 1: "NAME UNKNOWN, WAYPOINTS: SYOL4 CARME CAT", 19: "VECTORS"} }, // 
                gclp: { haul: "Short", time: "40m 54s", altitude: "050", sid: "KATOK 2T", route: "KATOK BANZAI COSTI", star: "COSTI 1C" },
                lytv: { haul: "Long", time: "37m 40s", altitude: "050", sid: "KATOK 2T", route: "KATOK VAXRI NAPEV", star: {14: "NAPEV 14R", 32: "NAPEV 32D"} },
                efkt: { haul: "Long", time: "52m 46s", altitude: "110", sid: "KATOK 2T", route: "KATOK BANZAI MUNCHY SENOT MEROS KONAN LIMA", star: "VECTORS" }
            }
        },

        { origin: "MDST", destination:
            {
                egkk: { haul: "Long", time: "41m 31s", altitude: "090", sid: "VECTORS", route: "PIXAR KOLBI HDWA BOGNA MAYFIELD", star: "VECTORS" },
                lemh: { haul: "Long", time: "No Time Data", altitude: "070", sid: "VECTORS", route: "PC113 PC115 PC114 ODEGI VAXRI SYOL4", star: { 1: "NAME UNKNOWN, WAYPOINTS: SYOL4 CARME CAT", 19: "VECTORS"} },
                gclp: { haul: "Medium", time: "40m 9s", altitude: "050", sid: "VECTORS", route: "PC113 PC115 PC114 GOLVER BETIR LP1O3 COSTI", star: "COSTI 1C" },
                lytv: { haul: "Long", time: "37m 11s", altitude: "050", sid: "VECTORS", route: "PC113 PC102 ANTEX NAPEV", star: "NAPEV 14R if rw 14, NAPEV 32D if rw 32" },
                efkt: { haul: "Long", time: "44m 33s", altitude: "110", sid: "VECTORS", route: "PC113 PC115 FAHAZ KOPUD LUNIK KONAN LIMA", star: "VECTORS" }
            }
        },

        { origin: "EGKK", destination:
            {
                mdpc: { haul: "Long", time: "59m 38s", altitude: "080", sid: {26: "NOVMA 1X", 8: "VECTORS"}, route: "NOVMA LEDGO FALCON POKEG", star: "POKEG 1W" }, 
                mdst: { haul: "Long", time: "No Time Data", altitude: "080", sid: {26: "NOVMA 1X", 8: "VECTORS"}, route: "NOVMA LEDGO FALCON POKEG PC113", star: "VECTORS" },
                lemh: { haul: "Short", time: "32m 35s", altitude: "050", sid: {26: "BOGNA 1X", 8: "VECTORS"}, route: "BOGNA LUNIK SENOT", star: { 1: "SENOT 3C", 19: "VECTORS"} },
                gclp: { haul: "Medium", time: "No Time Data", altitude: "060", sid: {26: "NOVMA 1X", 8: "VECTORS"}, route: "NOVMA ROGER BRICK", star: { 21: "ORTIS 5C", 3: "KONBA 4D"} }, 
                efkt: { haul: "Short", time: "42m 7s", altitude: "050", sid: {26: "WIZAD 1X", 8: "VECTORS"}, route: "WIZAD MINTY LIMA", star: "VECTORS" }
            }
        },

        { origin: "LEMH", destination:
            {
                mdpc: { haul: "Medium", time: "No Time Data", altitude: "060", sid: { 1: "ISKAL 1A", 19: "VECTORS"}, route: "ISKAL KOPUD DICEY BETIR", star: "BETIR 1W" },
                mdst: { haul: "Long", time: "38m 29s", altitude: "060", sid: { 1: "ISKAL 1A", 19: "VECTORS"}, route: "ISKAL KOPUD DICEY BETIR GOLVER PC114 PC115 PC113", star: "VECTORS" },
                egkk: { haul: "Short", time: "14m 38s", altitude: "060", sid: { 1: "SARGO 2B", 19: "VECTORS"}, route: "SARGO MAYFIELD", star: "VECTORS" },
                lytv: { haul: "Short", time: "25m 5s", altitude: "050", sid: "VECTORS", route: "MORSS OXY", star: {14: "OXY 14R", 32: "OXY 32D"} },
                efkt: { haul: "Medium", time: "30m 24s", altitude: "070", sid: { 1: "MEROS 3C", 19: "VECTORS"}, route: "MEROS KONAN LIMA", star: "VECTORS" }
            }
        },

        { origin: "GCLP", destination:
            {
                mdpc: { haul: "Short", time: "No Time Data", altitude: "050", sid: { 21: "ODEGI 2B", 3: "ODEGI 2A" }, route: "ODEGI PC112", star: "VECTORS" },
                mdst: { haul: "Medium", time: "No Time Data", altitude: "060", sid: { 21: "ODEGI 2B", 3: "ODEGI 2A" }, route: "ODEGI PC114 PC115 PC113", star: "VECTORS" },
                egkk: { haul: "Short", time: "No Time Data", altitude: "050", sid: { 21: "KOPUD 1B", 3: "KOPUD 1A" }, route: "KOPUD ISKAL BOGNA MAYFIELD", star: "VECTORS" },
                lytv: { haul: "Short", time: "32m 4s", altitude: "065", sid: {21: "COSTI 4B", 3: "COSTI 4A" }, route: "COSTI MUNCHY NAPEV", star: {14: "NAPEV 14R", 32: "NAPEV 32D"} },
                efkt: { haul: "Medium", time: "1h 2m 30s", altitude: "080", sid: { 21: "KOPUD 1B", 3: "KOPUD 1A" }, route: "KOPUD HARDY KUNAV LIMA", star: "VECTORS" }
            }
        },

        { origin: "LYTV", destination:
            {
                mdpc: { haul: "Long", time: "34m 41s", altitude: "080", sid: { 32: "NAME UNKNOWN, WAYPOINTS: GOSUT STAR NIK OLIVU", 14: "NAME UNKNOWN, WAYPOINTS: TIVTI DEALT NAPEV"}, route: "OLIVU SYOL4 JELLY BETIR", star: "BETIR 1W" },
                mdst: { haul: "Long", time: "No Time Data", altitude: "085", sid: { 32: "NAME UNKNOWN, WAYPOINTS: GOSUT STAR NIK OLIVU", 14: "NAME UNKNOWN, WAYPOINTS: TIVTI DEALT NAPEV"}, route: "OLIVU SYOL4 VAXRI ODEGI PC114 PC115 PC113", star: "VECTORS" },
                lemh: { haul: "Short", time: "No Time Data", altitude: "050", sid: { 32: "NAME UNKNOWN, WAYPOINTS: GOSUT STAR NIK OLIVU", 14: "NAME UNKNOWN, WAYPOINTS: TIVTI DEALT NAPEV"}, route: "OLIVU MNH31", star: "VECTORS" },
                gclp: { haul: "Short", time: "No Time Data", altitude: "070", sid: { 32: "NAME UNKNOWN, WAYPOINTS: GOSUT STAR NIK OLIVU", 14: "NAME UNKNOWN, WAYPOINTS: TIVTI DEALT NAPEV"}, route: "SYOL4 MUNCHY COSTI", star: "COSTI 1C" },
            }
        },

        { origin: "EFKT", destination:
            {
                mdpc: { haul: "Long", time: "No Time Data", altitude: "090", sid: { 34: "ROSE 3C", 16: "VECTORS"}, route: "ROSE TEBRA LIZAD KOLBI POKEG", star: "POKEG 1W" },
                mdst: { haul: "Long", time: "No Time Data", altitude: "090", sid: { 34: "ROSE 3C", 16: "VECTORS"}, route: "ROSE TEBRA LIZAD KOLBI POKEG PC113", star: "VECTORS" },
                egkk: { haul: "Short", time: "No Time Data", altitude: "050", sid: { 34: "ROSE 3C", 16: "VECTORS"}, route: "ROSE FRANE DETLING", star: "VECTORS" },
                lemh: { haul: "Medium", time: "34m 28s", altitude: "070", sid: { 34: "ROSE 3C", 16: "VECTORS"}, route: "ROSE MINTY KUNAV SENOT", star: "SENOT 3C" },
                gclp: { haul: "Medium", time: "27m 36s", altitude: "080", sid: { 34: "ROSE 3C", 16: "VECTORS"}, route: "ROSE FRANE MAYFIELD LIZAD BRICK", star: { 21: "ORTIS 5C", 3: "KONBA 4D"} }
            }
        }
    ]

    // EXAMPLE
    // console.log(routes.find(route => route.origin === "MDPC").destination.mdst.sid.34);

    function formFirst() {
        let selAirports = [];
        let selAircraft;
        let invalid1 = true;
        let invalid2 = true;

        function airportInputValidation() {
            const depAirport = document.querySelector("body#routes div.form div.airports input.departure");
            const arrAirport = document.querySelector("body#routes div.form div.airports input.arrival");
            const bothAirports = document.querySelectorAll("body#routes div.form div.airports input");

            let depAprt;
            let arrAprt;

            bothAirports.forEach(aport => {
                aport.addEventListener("change", () => {

                    if (airportCodeList.includes(aport.value.toUpperCase())) {
                        aport.classList.remove("invalid");
                        invalid1 = false;
                    } else {
                        invalid1 = true;
                        if (aport.value == "") {
                        } else {
                            aport.classList.add("invalid");
                            aport.classList.add("shake");
                            setTimeout(() => {
                                aport.classList.remove("shake");
                            }, 500);
                        }
                    }

                    if (aport.classList.contains("departure")) {
                        depAprt = aport.value.toUpperCase();
                    } else if (aport.classList.contains("arrival")) {
                        arrAprt = aport.value.toUpperCase();
                    }

                    selAirports = [depAprt, arrAprt];
                    aircraftSelectValidation();
                })

                aport.addEventListener("focus", () => {
                    aport.classList.remove("invalid");
                })
            });
        }

        function aircraftSelect() {
            const aircraftButtons = document.querySelectorAll("body#routes div.form div.aircraft button");

            aircraftButtons.forEach(btn => {
                btn.addEventListener("click", () => {
                    if (btn.classList.contains("unselectable")) {
                        return;
                    }

                    const attemptVal = btn.innerHTML;
                    if (attemptVal == selAircraft) {
                        btn.classList.remove("selected");
                        selAircraft = "";
                        invalid2 = true;
                    } else {
                        aircraftButtons.forEach(optButton => {
                            optButton.classList.remove("selected");
                        })
                        btn.classList.add("selected");
                        selAircraft = attemptVal;
                        invalid2 = false;
                    }
                })
            });
        }

        function aircraftSelectValidation() {
            const restrictions = [
                { airport: "EFKT", aircraft: ["A350"] },
                { airport: "LYTV", aircraft: ["A350", "MD11", "B757"] },
                { airport: "LEMH", aircraft: ["A350"] },
            ]

            if (selAirports[0] == "EFKT" || selAirports[0] == "LYTV" || selAirports[0] == "LEMH") {
                if (selAircraft == "A350") {
                    document.querySelector("body#routes div.form div.aircraft button.a350").classList.remove("selected");
                    selAircraft = "";
                }
            }

            if (selAirports[0] == "EFKT") {
                document.querySelector("body#routes div.form div.aircraft button.a350").classList.add("unselectable");

            } else if (selAirports[0] == "LYTV") {
                document.querySelector("body#routes div.form div.aircraft button.md11").classList.add("unselectable");
                document.querySelector("body#routes div.form div.aircraft button.b757").classList.add("unselectable");
                document.querySelector("body#routes div.form div.aircraft button.a350").classList.add("unselectable");

                if (selAircraft == "B757" || selAircraft == "MD11") {
                    document.querySelector("body#routes div.form div.aircraft button.md11").classList.remove("selected");
                    document.querySelector("body#routes div.form div.aircraft button.b757").classList.remove("selected");
                    selAircraft = "";
                }

            } else if (selAirports[0] == "LEMH") {
                document.querySelector("body#routes div.form div.aircraft button.a350").classList.add("unselectable");

            } else {
                document.querySelectorAll("body#routes div.form div.aircraft button").forEach(btn => {
                    btn.classList.remove("unselectable");
                })
            }
        }

        function workNextButton() {
            const nextBtn = document.querySelector("body#routes div.form section.f1 button.next");
            const firstSect = document.querySelector("body#routes div.form section.f1");
            const secondSect = document.querySelector("body#routes div.form section.f2");
            

            if (!nextBtn) {
                return;
            }

            nextBtn.addEventListener("click", () => {

                if (invalid1 == true || invalid2 == true) {
                    nextBtn.classList.add("shake");
                    setTimeout(() => {
                        nextBtn.classList.remove("shake");
                    }, 500);
                } else {
                    nextBtn.classList.remove("shake");
                    firstSect.style.display = "none";
                    secondSect.style.display = "flex";
                }
            })
        }

        airportInputValidation();
        aircraftSelect();
        aircraftSelectValidation();
        workNextButton();
    }

    formFirst();
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

        listSect.style.display = "none";
        let newSection = document.querySelector(`body#charts section.airport.${airportParam.toLowerCase()}`);
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
