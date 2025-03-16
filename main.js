const airports = [
    { code: "MDPC", name: "Punta Cana", runways: ["8", "9", "08", "09", "26", "27"] },
    { code: "MDST", name: "Cibao", runways: ["11", "29"] },
    { code: "EGKK", name: "London Gatwick", runways: ["8L", "8R", "08L", "08R", "26L", "26R"] },
    { code: "LEMH", name: "Menorca", runways: ["1", "01", "19"] },
    { code: "GCLP", name: "Gran Canaria", runways: ["3L", "3R", "03L", "03R", "21L", "21R"] },
    { code: "LYTV", name: "Tivat", runways: ["14", "32"] },
    { code: "EFKT", name: "Kittilä", runways: ["16", "34"] }
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
    const bannerEl = document.querySelector("section.banner");
    if (bannerEl) {
        bannerEl.style.backgroundImage = `url(${dataBanners[Math.floor(Math.random() * dataBanners.length)]})`;
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

function doRoutes() {
    if (!(location.pathname == "/dalv/routes/")) {
        return;
    }

    const airportCodeList = airports.map(airport => airport.code);

    // SHORT (UNDER 20NM)
    // MEDIUM (20-30NM)
    // LONG (OVER 30NM)
    // DPC DST DAB! DCR!

    function getInformation() {
        let page = 0;
        let depAirportCode;
        let arrAirportCode;
        let depRunway;
        let arrRunway;
        let aircraftType;

        const depAirportInput = document.querySelector("body#routes section.form div.page.pg1 input.answer");

        if (depAirportInput) {
            page = 1;
            depAirportInput.focus();
        } else {
            console.error("The departure airport input element was not found.");
            return;
        }

        console.log(page);

        depAirportInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                if (airportCodeList.includes(depAirportInput.value.toUpperCase())) {
                    depAirportCode = depAirportInput.value.toUpperCase();
                    nextPage();
                    getArrAirportCode();
                    console.log("Departure airport code:", depAirportCode);
                } else {
                    depAirportInput.value = "";
                    console.error("An invalid airport code was entered for the departure airport.");
                    depAirportInput.classList.add("invalid");
                    setTimeout(() => {
                        depAirportInput.classList.remove("invalid");
                    }, 500);
                }
            }

            console.log(page);
        });

        function nextPage() {
            const form = document.querySelector("body#routes section.form");
            const pages = form.querySelectorAll("div.page");

            pages.forEach(page => {
                page.style.display = "none";
            });

            pages[page].style.display = "flex";
            page++;
        }

        function getArrAirportCode() {
            if (page == 2) {
                const arrAirportInput = document.querySelector("body#routes section.form div.page.pg2 input.answer");
                arrAirportInput.focus();
                arrAirportInput.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        if (airportCodeList.includes(arrAirportInput.value.toUpperCase())) {
                            arrAirportCode = arrAirportInput.value.toUpperCase();
                            nextPage();
                            getDepRunway();
                        } else {
                            arrAirportInput.value = "";
                            console.error("An invalid airport code was entered for the arrival airport.");
                            arrAirportInput.classList.add("invalid");
                            setTimeout(() => {
                                arrAirportInput.classList.remove("invalid");
                            }, 500);
                        }
                    }
                });
            }
        }
        
        function getDepRunway() {
            if (page == 3) {
                console.log(depAirportCode);
                console.log(arrAirportCode);
                const depRunwayInput = document.querySelector("body#routes section.form div.page.pg3 input.answer");
                depRunwayInput.focus();
                depRunwayInput.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        console.log(airports.find(airport => airport.code == depAirportCode).runways);
                        if ((airports.find(airport => airport.code == depAirportCode).runways).includes(depRunwayInput.value)) {
                            depRunwayCode = depRunwayInput.value.toUpperCase();
                            nextPage();
                            getDepRunway();
                        } else {
                            depRunwayInput.value = "";
                            console.error("An invalid runway was entered for the departure runway.");
                            depRunwayInput.classList.add("invalid");
                            setTimeout(() => {
                                depRunwayInput.classList.remove("invalid");
                            }, 500);
                        }
                    }
                });
            }
        }
    }

    getInformation();
}

function doCharts() {
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

navAndLoadingEls();
loadingCover();
buttonsAndLinks();
randomBannerImage();
hideOnScroll();
doRoutes();
doCharts();