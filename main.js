function loadingCover() {
    if (!(document.querySelector("div.loading"))) { 
        return;
    }

    const cover = document.querySelector("div.loading");
    cover.style.display = "flex";

    setTimeout(() => {
        if (document.readyState === "complete") {
            cover.style.transform = "translateY(100%)";
            cover.style.opacity = 0.75;
            setTimeout(() => {
                cover.style.display = "none";
            }, 400);
            return;
        }

        window.onload = function() {
            cover.style.transform = "translateY(100%)";
            cover.style.opacity = 0.75;
            setTimeout(() => {
                cover.style.display = "none";
            }, 400);
        }
    }, 600);

    const messageEls = document.querySelectorAll("div.loading p");
    const message = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    messageEls.forEach(msgEl => {
        msgEl.innerHTML = message;
    });
}

function buttonsAndLinks() {
/*
    const joinDiscordButtons = document.querySelectorAll(".act-join-discord");
    joinDiscordButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            window.open("https://discord.gg/aS5G7GdP5E", "_blank");
        })
    })

    const skyMilesButton = document.querySelector("nav .nav-SkyMiles");
    skyMilesButton.addEventListener("click", () => {
        window.location.href = "/skymiles";
    })
  
    const logoHomeButtons = document.querySelectorAll("nav img.nav-home");
    logoHomeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = "/";
        })
    })
  
    const navInfoButtons = document.querySelectorAll("nav div.dropdown div.dropdown-content.info a");
    navInfoButtons.forEach(btn => {
        let urlNeeded = btn.classList[0].substring(9);

        btn.addEventListener("click", () => {
            location.href = `/${urlNeeded}`;
        })
    })

    const navResourceButtons = document.querySelectorAll("nav div.dropdown div.dropdown-content.resources a");
    navResourceButtons.forEach(btn => {
        let urlNeeded = btn.classList[0].substring(14);

        btn.addEventListener("click", () => {
            location.href = `/${urlNeeded}`;
        })
    })
*/
    const chartAirportSelectionButtons = document.querySelectorAll("body#charts section.list div.airport");
    chartAirportSelectionButtons.forEach(cell => {
        cell.addEventListener("click", () => {
            const airportCode = cell.classList[1];
            location.href = `/charts/?airport=${airportCode}`;
        })
    });
/*
    const chartsAirportBackButton = document.querySelectorAll("section.airport div.nav i.back");
    chartsAirportBackButton.forEach(btn => {
        btn.addEventListener("click", () => {
            location.href = "/charts";
        })
    })*/
}

function randomBannerImage() {
    let bannerEl = document.querySelector("section.banner");
    if (bannerEl) {
        bannerEl.style.backgroundImage = `url(${dataBanners[Math.floor(Math.random() * dataBanners.length)]})`;
    }
    else if (bannerEl == null) {
        let bannerE1 = document.querySelector("section.background");
        if (bannerE1) {
            bannerE1.style.backgroundImage = `url(${dataBanners[Math.floor(Math.random() * dataBanners.length)]})`;
        }
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
    if (!(location.pathname == "/routes/")) {
        return;
    }

    function showInvalid(input) {
        input.classList.add("invalid");
        setTimeout(() => {
            input.classList.remove("invalid");
        }, 500);
    }

    const airportCodeList = airports.map(airport => airport.code);

        // SHORT (UNDER 20NM)
        // MEDIUM (20-30NM)
        // LONG (OVER 30NM)
        // DPC DST DAB! DCR!

    let dssDep;
    let dssArr;
    let depRwy;
    let arrRwy;
    let depAirportCode;
    let arrAirportCode;
    let depRunway;
    let arrRunway;
    let aircraftType;
    let flightNumber;
    let cruiseLevel;
    let sid; // Example: egkk.BOGNA1X
    let star; // Example: gclp.COSTI1C

    function getInformation() {
        let page = 0;

        const selectionRoute = document.querySelector("body#routes section.selection p.route");
        const selectionAircraft = document.querySelector("body#routes section.selection p.aircraft");

        const depAirportInput = document.querySelector("body#routes section.form div.page.pg0 input.answer");
        const arrAirportInput = document.querySelector("body#routes section.form div.page.pg1 input.answer");
        const depRunwayInput = document.querySelector("body#routes section.form div.page.pg2 input.answer");
        const aircraftTypeInput = document.querySelector("body#routes section.form div.page.pg3 input.answer");
        const arrRunwayInput = document.querySelector("body#routes section.form div.page.pg5 input.answer");

        if (depAirportInput && page == 0) {
            depAirportInput.focus();
            depAirportInput.addEventListener("keydown", (ev) => {
                if (ev.key == "Enter") {
                    let pKey = depAirportInput.value.toUpperCase();
                    if (airportCodeList.includes(pKey)) {
                        depAirportCode = pKey;
                        depAirportInput.value = "";
                        page++;
                        getArrivalAirport();
                        pageSwitch();
                        selectionRoute.innerHTML = `Departing ${depAirportCode}`;
                    } else {
                        showInvalid(depAirportInput);
                    }
                }
            })
        }

        function getArrivalAirport() {
            if (arrAirportInput && page == 1) {
                arrAirportInput.focus();
                arrAirportInput.addEventListener("keydown", (ev) => {
                    if (ev.key == "Enter") {
                        let pKey = arrAirportInput.value.toUpperCase();
                        if (airportCodeList.includes(pKey)) {
                            if (pKey == depAirportCode) {
                                showInvalid(arrAirportInput);
                                return;
                            }
                            arrAirportCode = pKey;
                            arrAirportInput.value = "";
                            page++;
                            getDepartureRunway();
                            pageSwitch();
                            selectionRoute.innerHTML = `${depAirportCode} - ${arrAirportCode}`;
                        } else {
                            showInvalid(arrAirportInput);
                        }
                    }
                })
            }
        }

        function getDepartureRunway() {
            if (depRunwayInput && page == 2) {
                depRunwayInput.focus();
                depRunwayInput.addEventListener("keydown", (ev) => {
                    if (ev.key == "Enter") {
                        let pKey = depRunwayInput.value.toUpperCase();
                        if (airports.find(airport => airport.code == depAirportCode).runways.includes(pKey)) {
                            depRunway = padRunway(pKey);
                            depRunwayInput.value = "";
                            page++;
                            getAircraftType();
                            pageSwitch();
                            selectionRoute.innerHTML = `${depAirportCode} (${depRunway}) - ${arrAirportCode}`;
                        } else {
                            showInvalid(depRunwayInput);
                        }
                    }
                })
            }
        }

        function getAircraftType() {
            if (aircraftTypeInput && page == 3) {
                aircraftTypeInput.focus();
                aircraftTypeInput.addEventListener("keydown", (ev) => {
                    if (ev.key == "Enter") {
                        let pKey = aircraftTypeInput.value.toUpperCase();
                        if (aircraftCodes.includes(pKey)) {
                            aircraftType = pKey;
                            aircraftTypeInput.value = "";
                            page++;
                            pageSwitch();
                            getArrivalRunwayDecision();
                            selectionAircraft.innerHTML = aircraftType;
                        } else {
                            showInvalid(aircraftTypeInput);
                        }
                    }
                })
            }
        }

        function getArrivalRunwayDecision() {
            if (page == 4) {
                openTap = 4;
                const yesButton = document.querySelector("body#routes section.form div.page.pg4 button.yes");
                const noButton = document.querySelector("body#routes section.form div.page.pg4 button.no");

                yesButton.addEventListener("click", () => {
                    openTap = 0;
                    page = 5;
                    pageSwitch();
                    getArrivalRunway();
                })

                noButton.addEventListener("click", () => {
                    openTap = 0;
                    determineSidStarOptions();
                })
            }
        }

        function getArrivalRunway() {
            if (arrRunwayInput && page == 5) {
                arrRunwayInput.focus();
                arrRunwayInput.addEventListener("keydown", (ev) => {
                    if (ev.key == "Enter") {
                        let pKey = arrRunwayInput.value.toUpperCase();
                        if (airports.find(airport => airport.code == arrAirportCode).runways.includes(pKey)) {
                            arrRunway = padRunway(pKey);
                            arrRunwayInput.value = "";
                            determineSidStarOptions();
                            selectionRoute.innerHTML = `${depAirportCode} (${depRunway}) - ${arrAirportCode} (${arrRunway})`;
                        } else {
                            showInvalid(arrRunwayInput);
                        }
                    }
                })
            }
        }

        let posSid;
        let posStar;

        const sidDecisionName = document.querySelector("body#routes section.form div.page.pg6 p.name");
        const sidDecisionWaypoints = document.querySelector("body#routes section.form div.page.pg6 p.waypoints");
        const starDecisionName = document.querySelector("body#routes section.form div.page.pg7 p.name");
        const starDecisionWaypoints = document.querySelector("body#routes section.form div.page.pg7 p.waypoints");
        const formEl = document.querySelector("body#routes section.form");

        function determineSidStarOptions(mod) {
            if (mod == "determineStar") {
                determineStar();
                return;
            }

            dssDep = depAirportCode.toLowerCase();
            dssArr = arrAirportCode.toLowerCase();
            depRwy = rawRunway(depRunway);
            if (arrRunway) {
                arrRwy = rawRunway(arrRunway);
            }

            posSid = routes[dssDep][dssArr].sid[depRwy];
            posStar = routes[dssDep][dssArr].star[arrRwy];

            if (!posSid && !posStar) {
                showFinish();
                return;
            }

            if (posSid.displayName && posSid.displayName !== "Vectors") {
                page = 6;
                pageSwitch();
                setTimeout(() => {
                    openTap = 6;
                }, 250);
                sidDecisionName.innerHTML = posSid.displayName;
                sidDecisionWaypoints.innerHTML = posSid.waypoints;

                const yesButton = document.querySelector("body#routes section.form div.page.pg6 button.yes");
                const noButton = document.querySelector("body#routes section.form div.page.pg6 button.no");

                yesButton.addEventListener("click", () => {
                    sid = posSid;
                    openTap = 0;
                    determineStar();
                })

                noButton.addEventListener("click", () => {
                    openTap = 0;
                    determineStar();
                })
                
            } else {
                determineStar();
            }

            function determineStar() {
                if (posStar && posStar.displayName !== "Vectors") {
                    page = 7;
                    pageSwitch();
                    setTimeout(() => {
                        openTap = 7;
                    }, 250);
                    starDecisionName.innerHTML = posStar.displayName;
                    starDecisionWaypoints.innerHTML = posStar.waypoints;

                    const yesButton = document.querySelector("body#routes section.form div.page.pg7 button.yes");
                    const noButton = document.querySelector("body#routes section.form div.page.pg7 button.no");
    
                    yesButton.addEventListener("click", () => {
                        star = posStar;
                        openTap = 0;
                        showFinish();
                    })
    
                    noButton.addEventListener("click", () => {
                        openTap = 0;
                        showFinish();
                    })
                } else {
                    showFinish();
                    return;
                }
            }
        }

        function showFinish() {
            formEl.style.display = "none";
            selectionAircraft.style.display = "none";
            selectionRoute.style.display = "none";
            const finalEl = document.querySelector("body#routes section.final");
            finalEl.style.display = "flex";
            const resultsDepHeading = document.querySelector("body#routes section.final section.results div.route p.departure");
            const resultsArrHeading = document.querySelector("body#routes section.final section.results div.route p.arrival");
            const resultsAircraftHeading = document.querySelector("body#routes section.final section.results div.aircraft p");
            const resultsDepAirport = document.querySelector("body#routes section.results div.information.departure div.content.airport-name p");
            const resultsDepRunway = document.querySelector("body#routes section.results div.information.departure div.content.runway p");
            const resultsDepSid = document.querySelector("body#routes section.results div.information.departure div.content.sid p");
            const resultsArrAirport = document.querySelector("body#routes section.results div.information.arrival div.content.airport-name p");
            const resultsArrRunway = document.querySelector("body#routes section.results div.information.arrival div.content.runway p");
            const resultsArrStar = document.querySelector("body#routes section.results div.information.arrival div.content.star p");
            const resultsEnrouteRoute = document.querySelector("body#routes section.results div.information.enroute div.content.route p");
            const resultsEnrouteAltitude = document.querySelector("body#routes section.results div.information.enroute div.content.altitude p");

            resultsDepHeading.innerHTML = depAirportCode;
            resultsArrHeading.innerHTML = arrAirportCode;
            resultsAircraftHeading.innerHTML = aircraftType;
            resultsDepAirport.innerHTML = airports.find(airport => airport.code == depAirportCode).name;
            resultsDepRunway.innerHTML = depRunway;
            resultsArrAirport.innerHTML = airports.find(airport => airport.code == arrAirportCode).name;
            resultsEnrouteRoute.innerHTML = routes[dssDep][dssArr].route;
            resultsEnrouteAltitude.innerHTML = "FL" + routes[dssDep][dssArr].altitude;

            if (sid) {
                resultsDepSid.innerHTML = sid.displayName;
                resultsDepSid.classList.add("mono");
            } else {
                resultsDepSid.innerHTML = "Vectors";
            }

            if (star) {
                resultsArrStar.innerHTML = star.displayName;
                resultsArrStar.classList.add("mono");
            } else {
                resultsArrStar.innerHTML = "Vectors";
            }

            if (arrRunway) {
                resultsArrRunway.innerHTML = arrRunway;
                resultsArrRunway.classList.add("mono");
            } else {
                resultsArrRunway.innerHTML = "N/A";
            }

            informationInteraction();
        }
        
        let openTap = 0;

        document.addEventListener("keydown", (ev) => {
            if (openTap == 0) {
                return;
            } else {
                if (ev.key == "Y" || ev.key == "y" || ev.key == "N" || ev.key == "n") {
                    ev.preventDefault();
                }
            }

            if (openTap == 4) {
                if (ev.key == "Y" || ev.key == "y") {
                    openTap = 0;
                    page = 5;
                    pageSwitch();
                    getArrivalRunway();
                } else if (ev.key == "N" || ev.key == "n") {
                    openTap = 0;
                    determineSidStarOptions();
                }
            }

            if (openTap == 6) {
                if (ev.key == "Y" || ev.key == "y") {
                    openTap = 0;
                    sid = posSid;
                    determineSidStarOptions("determineStar");
                } else if (ev.key == "N" || ev.key == "n") {
                    openTap = 0;
                    determineSidStarOptions("determineStar");
                }
            }

            if (openTap == 7) {
                if (ev.key == "Y" || ev.key == "y") {
                    star = posStar;
                    openTap = 0;
                    showFinish();
                } else if (ev.key == "N" || ev.key == "n") {
                    openTap = 0;
                    showFinish();
                }
            }
        })

        function padRunway(context) {
            let rememberThis = "";
            if (context.endsWith("L") || context.endsWith("R") || context.endsWith("C")) {
                rememberThis = context.slice(-1);
            }
            let noIdentifier = context.replace("L", "").replace("R", "").replace("C", "");
            let paddedRwy = noIdentifier.toString().padStart(2, "0");
            return paddedRwy + rememberThis;
        }

        function rawRunway(context) {
            return context.replace("L", "").replace("R", "").replace("C", "").replace("0", "");
        }

        function pageSwitch() {
            const pages = document.querySelectorAll("body#routes section.form div.page");
            pages.forEach(pg => pg.style.display = "none");
            const currentPage = document.querySelector(`body#routes section.form div.page.pg${page}`);
            if (currentPage) {
                currentPage.style.display = "flex";
                const currentPageInput = document.querySelector(`body#routes section.form div.page.pg${page} input.answer`);
                if (currentPageInput) {
                    currentPageInput.focus();
                }
            }
        }
    }

    function informationInteraction() {
        const copyFlightPlanButton = document.querySelector("body#routes section.final section.actions button.copy-plan");
        const copyFlightPlanIcon = document.querySelector("body#routes section.final section.actions button.copy-plan i");
        const copyRouteButton = document.querySelector("body#routes section.final section.actions button.copy-route");
        const copyRouteIcon = document.querySelector("body#routes section.final section.actions button.copy-route i");
        const depChartsButton = document.querySelector("body#routes section.final section.actions button.dep-charts");
        const arrChartsButton = document.querySelector("body#routes section.final section.actions button.arr-charts");

        copyFlightPlanButton.addEventListener("click", () => {
            const overlay = document.querySelector("body#routes div.overlay");
            overlay.style.display = "flex";
            const overlayFlightNumberInput = document.querySelector("body#routes div.overlay div.flight-number input");
            overlayFlightNumberInput.focus();

            overlayFlightNumberInput.addEventListener("keydown", (ev) => {
                if (ev.key == "Enter") {
                    if (overlayFlightNumberInput.value > 0 && overlayFlightNumberInput.value <= 9999) {
                        overlay.style.display = "none";
                        overlayFlightNumberInput.value = "";
                        flightNumber = overlayFlightNumberInput.value;
                        let planCopy;
                        if (!sid) {
                            planCopy = 
`Callsign: DELTA ${flightNumber}
Aircraft: ${aircraftType}
IFR/VFR: IFR
Departing: ${depAirportCode}
Arriving: ${arrAirportCode}
CRZ FL: ${routes[dssDep][dssArr.altitude]}`;
                        }
                        else if (sid.displayName && sid.displayName == "Name Unknown") {
                            planCopy =
`Callsign: DELTA ${flightNumber}
Aircraft: ${aircraftType}
IFR/VRF: IFR
Departing: ${depAirportCode}
Arriving: ${arrAirportCode}
CRZ FL: ${routes[dssDep][dssArr].altitude}
Notes: Departure of unknown name consisting of waypoints ${sid.waypoints} if possible.`;
                        }
                        else if (sid.displayName && sid.displayName !== "Vectors") {
                            planCopy = 
`Callsign: DELTA ${flightNumber}
Aircraft: ${aircraftType}
IFR/VFR: IFR
Departing: ${depAirportCode}
Arriving: ${arrAirportCode}
CRZ FL: ${routes[dssDep][dssArr].altitude}
Notes: ${sid.displayName} departure if possible.`;
                        }
                        else {  
                            planCopy = 
`Callsign: DELTA ${flightNumber}
Aircraft: ${aircraftType}
IFR/VFR: IFR
Departing: ${depAirportCode}
Arriving: ${arrAirportCode}
CRZ FL: ${routes[dssDep][dssArr].altitude}`;
                        }
                    
                        navigator.clipboard.writeText(planCopy);
                        copyFlightPlanIcon.classList = "fa-solid fa-check";
                        copyFlightPlanButton.classList.add("complete");
                        setTimeout(() => {
                            copyFlightPlanIcon.classList = "fa-solid fa-clipboard";
                            copyFlightPlanButton.classList.remove("complete");
                        }, 1500);
                    }
                } else if (ev.key == "Escape") {
                    overlay.style.display = "none";
                    overlayFlightNumberInput.value = "";
                }
            });
        })

        copyRouteButton.addEventListener("click", () => {
            let crSid;
            let crRoute;
            let crStar;

            if (sid) {
                crSid = sid.waypoints;
            } else {
                crSid = "";
            }

            if (star) {
                crStar = star.waypoints;
            } else {
                crStar = "";
            }

            if (routes[dssDep][dssArr].route) {
                crRoute = routes[dssDep][dssArr].route;
            }

            let routeCopy = (crSid + " " + crRoute + " " + crStar);
            console.log(crSid + " " + crRoute + " " + crStar);
            console.log(routeCopy);
            navigator.clipboard.writeText(routeCopy);
            copyRouteIcon.classList = "fa-solid fa-check";
            copyRouteButton.classList.add("complete");
            setTimeout(() => {
                copyRouteIcon.classList = "fa-solid fa-map";
                copyRouteButton.classList.remove("complete");
            }, 1500);
        })

        depChartsButton.addEventListener("click", () => {
            location.href = `/charts/?airport=${depAirportCode}`;
        });

        arrChartsButton.addEventListener("click", () => {
            location.href = `/charts/?airport=${arrAirportCode}`;
        });
    }

    getInformation();
}

function doCharts() {
    if (!(location.pathname == "/charts/")) {
        return;
    }

    function fillList() {
        const listSection = document.querySelector("body#charts section.list");

        airports.forEach(airport => {
            const newCell = document.createElement("div");
            newCell.classList.add("airport", airport.code);
            newCell.innerHTML = `
                <img src="/img/airports/${(airport.code).toLowerCase()}.png">
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
        const lclkSect = document.querySelector("body#charts section.airport.lclk");
        const efktSect = document.querySelector("body#charts section.airport.efkt");
        const lcphSect = document.querySelector("body#charts section.airport.lcph");

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

function doFleet() {
    if (!(location.pathname == "/fleet/")) {
        return;
    }

    function fillList() {
        const listSection = document.querySelector("body#fleet section.list");

        aircraftTypes.forEach(acft => {
            const newCell = document.createElement("div");
            newCell.classList.add("aircraft", acft.code.toLowerCase());
            newCell.innerHTML = `
                <img src="/img/fleet/${(acft.code).toLowerCase()}.png">
                <p class="code shown">${acft.name}</p>
                <div class="stats">
                    <p class="type">${acft.code}</p>
                    <p class="length"><b>Length:</b> ${acft.length} m (${Math.round(acft.length*32.8)/10} ft)</p>
                    <p class="wingspan"><b>Wingspan:</b> ${acft.span} m (${Math.round(acft.span*32.8)/10} ft)</p>
                    <p class="range"><b>Range:</b> ${acft.range} nm (${acft.range*1.85} km, ${Math.round(acft.range*1.15)} mi)</p>
                    <p class="seats"><b>Seats:</b> ${acft.seats}</p>
                </div>
            `

            listSection.appendChild(newCell);
        });
    }

    function aircraftClicks() {
        const aircraftCards = document.querySelectorAll("body#fleet section.list div.aircraft");
        aircraftCards.forEach(card => {
            card.addEventListener("click", () => {
                console.log(card.classList[1]);
                let statsDiv = document.querySelector(`body#fleet section.list div.aircraft.${card.classList[1].toLowerCase()} div.stats`);
                let acCode = document.querySelector(`body#fleet section.list div.aircraft.${card.classList[1].toLowerCase()} p`);
                if (statsDiv.classList.contains("shown")) {
                    statsDiv.classList.remove("shown");
                    acCode.classList.add("shown");
                } else {
                    statsDiv.classList.add("shown");
                    acCode.classList.remove("shown");
                }
            })
        })
    }

    fillList();
    aircraftClicks();
}

function navAndLoadingEls() {
    if (location.pathname == "/mobile/") {
        return;
    }

    const htmlContent = `
    <div class="loading">
        <p>There was an error.</p>
    </div>

    <nav>
        <a href="/">
            <img src="/img/logo.png" class="nav-home">
        </a>
        <a class="direct" href="https://discord.gg/aS5G7GdP5E" target="_blank">Join</a>
        <div class="navbarDropdown">
            <a class="navbarDropper">Careers</a>
            <div class="navbarDropdownWrapper">
                <div class="navbarDropdownContent">
                    <a class="navbarDropdownButton" href="/carrer/pilot">Pilot</a>
                    <a class="navbarDropdownButton" href="/carrer/atc">ATC</a>
                    <a class="navbarDropdownButton" href="/carrer/ground">Ground Crew</a>
                </div>
            </div>
        </div>
        <div class="navbarDropdown">
            <a class="navbarDropper">Info</a>
            <div class="navbarDropdownWrapper">
                <div class="navbarDropdownContent">
                    <a class="navbarDropdownButton" href="/fleet">Fleet</a>
                    <a class="navbarDropdownButton" href="/staff">Staff</a>
                    <a class="navbarDropdownButton" href="/partners">Partners</a>
                </div>
            </div>
        </div>
        <div class="navbarDropdown">
            <a class="navbarDropper">Resources</a>
            <div class="navbarDropdownWrapper">
                <div class="navbarDropdownContent">
                    <a class="navbarDropdownButton" href="/charts">Charts</a>
                    <a class="navbarDropdownButton" href="/routes">Routes</a>
                </div>
            </div>
        </div>
        <a class="direct" href="/skymiles">SkyMiles</a>
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
doFleet();