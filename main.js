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

    function randomBackground() {
        const bannerEl = document.querySelector("section.background");
        if (bannerEl) {
            const randomImg = dataBanners[Math.floor(Math.random() * dataBanners.length)];
            bannerEl.style.backgroundImage = `url(${randomImg})`;
        }
    }

    function getInformation() {
        let page = 0;
        let depAirportCode;
        let arrAirportCode;
        let depRunway;
        let arrRunway;
        let aircraftType;

        // These variables are for internalized code
        let depCode;
        let arrCode;
        let depRwy;
        let fPlan;
        let inSid;

        let sid; // Example: egkk[BOGNA 1X]
        let star;

        const depAirportInput = document.querySelector("body#routes section.form div.page.pg1 input.answer");
        const selectionRoute = document.querySelector("body#routes section.selection p.route");
        const selectionAircraft = document.querySelector("body#routes section.selection p.aircraft");

        if (depAirportInput) {
            page = 1;
            depAirportInput.focus();
        } else {
            console.error("The departure airport input element was not found.");
            return;
        }

        depAirportInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                if (airportCodeList.includes(depAirportInput.value.toUpperCase())) {
                    depAirportCode = depAirportInput.value.toUpperCase();
                    selectionRoute.innerHTML = `Departing ${depAirportCode}`;
                    nextPage();
                    getArrAirportCode();
                } else {
                    depAirportInput.value = "";
                    console.error("An invalid airport code was entered for the departure airport.");
                    showInvalid(depAirportInput);
                }
            }
        });

        function nextPage() {
            if (page > 4) {
                return;
            }
            const form = document.querySelector("body#routes section.form");
            const pages = form.querySelectorAll("div.page");

            pages.forEach(page => {
                page.style.display = "none";
            });

            if (pages[page] == undefined) {
                console.error("The page element was not found. Page: " + (page + 1));
                alert("An error occurred. Check the console for more information.");
            } else {
                pages[page].style.display = "flex";
                page++;
            }
        }

        function goToPage(pageNum) {
            page = pageNum;
            lclPage = pageNum - 1;
            const form = document.querySelector("body#routes section.form");
            const pages = form.querySelectorAll("div.page");

            pages.forEach(page => {
                page.style.display = "none";
            });

            if (pages[lclPage] == undefined) {
                console.error("The page element was not found. Page: " + page);
                alert("An error occurred. Check the console for more information.");
            } else {
                pages[lclPage].style.display = "flex";
            }
        }

        function getArrAirportCode() {
            if (page == 2) {
                const arrAirportInput = document.querySelector("body#routes section.form div.page.pg2 input.answer");
                arrAirportInput.focus();
                arrAirportInput.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        if (airportCodeList.includes(arrAirportInput.value.toUpperCase())) {
                            if (depAirportCode !== arrAirportInput.value.toUpperCase()) {
                                arrAirportCode = arrAirportInput.value.toUpperCase();
                                selectionRoute.innerHTML = `${depAirportCode} - ${arrAirportCode}`;
                                nextPage();
                                getDepRunway();
                            } else {
                                arrAirportInput.value = "";
                                console.error("The arrival airport cannot be the same as the departure airport.");
                                showInvalid(arrAirportInput);
                            }
                        } else {
                            arrAirportInput.value = "";
                            console.error("An invalid airport code was entered for the arrival airport.");
                            showInvalid(arrAirportInput);
                        }
                    }
                });
            }
        }
        
        function getDepRunway() {
            if (page == 3) {
                const depRunwayInput = document.querySelector("body#routes section.form div.page.pg3 input.answer");
                depRunwayInput.focus();
                depRunwayInput.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        if ((airports.find(airport => airport.code == depAirportCode).runways).includes(depRunwayInput.value.toUpperCase())) {
                            depRunway = depRunwayInput.value.toUpperCase();
                            let depRunwayNumberLength = (depRunway.replace(/\D/g, '').length);
                            if (depRunwayNumberLength == 1) {
                                depRunway = "0" + depRunway;
                            }
                            selectionRoute.innerHTML = `${depAirportCode} (${depRunway}) - ${arrAirportCode}`;
                            nextPage();
                            getAircraftType();

                            depCode = depAirportCode.toLowerCase();
                            arrCode = arrAirportCode.toLowerCase();
                            depRwy = depRunway.replace("0", '');
                            fPlan = routes[depCode][arrCode];
                            console.log(fPlan);
                            console.log(depRwy);
                            console.log(fPlan.sid);
                            let sidInfo = fPlan.sid[depRwy];
                            console.log(sidInfo);
                            inSid = sidInfo.displayName;
                        } else {
                            depRunwayInput.value = "";
                            console.error("An invalid runway was entered for the departure runway.");
                            showInvalid(depRunwayInput);
                        }
                    }
                });
            }
        }

        function getAircraftType() {
            if (page == 4) {
                const aircraftInput = document.querySelector("body#routes section.form div.page.pg4 input.answer");
                aircraftInput.focus();
                aircraftInput.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        if (aircraft.includes(aircraftInput.value.toUpperCase())) {
                            aircraftType = aircraftInput.value.toUpperCase();
                            selectionAircraft.innerHTML = aircraftType;
                            nextPage();
                            getArrivalRunwayDecide();
                        } else {
                            aircraftInput.value = "";
                            console.error("An invalid aircraft type was entered.");
                            showInvalid(aircraftInput);
                        }
                    }
                });
            }
        }

        function getArrivalRunwayDecide() {
            if (page == 5) {
                const yesButton = document.querySelector("body#routes section.form div.page.pg5 button.yes");
                const noButton = document.querySelector("body#routes section.form div.page.pg5 button.no");
                
                yesButton.addEventListener("click", () => {
                    goToPage(6);
                    getArrRunway();
                });

                noButton.addEventListener("click", () => {
                    goToPage(7);
                    getSidDecide();
                });
            }
        }

        function getArrRunway() {
            if (page == 6) {
                const arrRunwayInput = document.querySelector("body#routes section.form div.page.pg6 input.answer");
                arrRunwayInput.focus();
                arrRunwayInput.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        if ((airports.find(airport => airport.code == arrAirportCode).runways).includes(arrRunwayInput.value.toUpperCase())) {
                            arrRunway = arrRunwayInput.value.toUpperCase();
                            let arrRunwayNumberLength = (arrRunway.replace(/\D/g, '').length);
                            if (arrRunwayNumberLength == 1) {
                                arrRunway = "0" + arrRunway;
                            }
                            selectionRoute.innerHTML = `${depAirportCode} (${depRunway}) - ${arrAirportCode} (${arrRunway})`;
                            goToPage(7);
                            getSidDecide();
                        } else {
                            arrRunwayInput.value = "";
                            console.error("An invalid runway was entered for the departure runway.");
                            showInvalid(arrRunwayInput);
                        }
                    }
                });
            }
        }

        function getSidDecide() {
            if (page == 7) {
                document.querySelector("body#routes section.form div.page.pg7 p.name").innerHTML = inSid;
                document.querySelector("body#routes section.form div.page.pg7 p.waypoints").innerHTML = sids[depCode][inSid.replace(/\s/g, '')].waypoints;

                const yesButton = document.querySelector("body#routes section.form div.page.pg7 button.yes");
                const noButton = document.querySelector("body#routes section.form div.page.pg7 button.no");
               
                yesButton.addEventListener("click", () => {
                    sid = inSid;
                    alert("Sorry, but this feature is not yet available.");
                });
              
                noButton.addEventListener("click", () => {
                    alert("Sorry, but this feature is not yet available.");
                });
            }
        }

        function showInvalid(input) {
            input.classList.add("invalid");
            setTimeout(() => {
                input.classList.remove("invalid");
            }, 500);
        }
    }

    getInformation();
    randomBackground();
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