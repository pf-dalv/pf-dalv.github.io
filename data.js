// SHORT (UNDER 20NM)
// MEDIUM (20-30NM)
// LONG (OVER 30NM)

const dataBanners = [
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/5-delta-dish.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/757-approach.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/moon-717.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/4-a350-tails-port.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/luggage-night-727.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/gclp-4-a350s.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/gclp-2-a350-tails.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-forward-port.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/737-final-egkk.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/737-over-egkk-birdseye.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/737-taxiing.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/757-moon-water.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/757-snow-moon.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-cibao-moon.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-gate-port-forward.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/behind-right-a350.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/city-a350.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/moon-tail.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/taxi-light-a350.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/2-a320s-moon.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/717-boeing-bldg-moon.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/737-sun.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a320-climbing.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a320-gate.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a320-hold-short.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a320-taxi-moon.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-cones.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-departing.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-flaring.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-hsbc-night.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-huge-moon.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-nose-moon-virgin.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-taxi-starboard.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-turning-moon.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/a350-turning-smoke.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/amazing-thirds-lines.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/arrival-huge-moon-rwylights-night.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/bravo-right.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/bulb-moon-14.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/bulb-rotate.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/detached-gate.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/dont-cross-alpha-a320s.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/even-more-a320s.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/fenced-moon.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/gate-pov-2.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/gate-pov.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/landing-lights.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/md11-forward-slight-starboard.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/md11-gate.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/md11-tail.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/sun-wing-glow.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/tail-moon-greenlight-port.png",
    "https://raw.githubusercontent.com/pf-dalv/img/refs/heads/main/dalv/banners/tivat-a320-air.png",
];

const sids = {
    _vectors: { displayName: "Vectors", waypoints: "VECTORS" },

    egkk: {
        BOGNA1X: { displayName: "BOGNA 1X", waypoints: "KKWO6 KKWO8 KKS11 KKS2O KKS25 BOGNA" },
        NOVMA1X: { displayName: "NOVMA 1X", waypoints: "KKWO7 KKWO9 NOVMA" },
        WIZAD1X: { displayName: "WIZAD 1X", waypoints: "KKWO4 KKWO6 KKSO9 KKS14 KKS33 WIZAD" }
    },
    
    lemh: {
        ISKAL1A: { displayName: "ISKAL 1A", waypoints: "TIMOR LUNIK ISKAL" },
        SARGO2B: { displayName: "SARGO 2B", waypoints: "TIMOR SARGO" },
        MEROS3C: { displayName: "MEROS 3C", waypoints: "TIMOR MEROS" },
        AVI4D: { displayName: "AVI 4D" , waypoints: "TIMOR MORSS AVI" },
    },

    gclp: {
        KOPUD1A: { displayName: "KOPUD 1A", waypoints: "ECKOS KOPUD" },
        KOPUD1B: { displayName: "KOPUD 1B", waypoints: "LP1O1 TUPIK KOPUD" },
        ODEGI2A: { displayName: "ODEGI 2A", waypoints: "ECKOS LP1O2 LP1O3 ODEGI" },
        ODEGI2B: { displayName: "ODEGI 2B", waypoints: "DRANO ODEGI" },
        COSTI4A: { displayName: "COSTI 4A", waypoints: "ECKOS COSTI" },
        COSTI4B: { displayName: "COSTI 4B", waypoints: "LP1O1 COSTI" }
    },

    lclk: {
        BONEK2W: { displayName: "BONEK 2W", waypoints: "LK400 OTESA ADLAS DAROS BONEK" },
        NORDI1W: { displayName: "NORDI 1W", waypoints: "LK400 OTESA ADLAS NORDI" },
        RUDER1W: { displayName: "RUDER 1W", waypoints: "LK400 SOBOS RUDER" },
        EMEDA1W: { displayName: "EMEDA 1W", waypoints: "LK400 REXAL EMEDA" },
        LUBES1W: { displayName: "LUBES 1W", waypoints: "LK601 RIMEX PEEKO NORDI LUBES" },
        KURSA1W: { displayName: "KURSA 1W", waypoints: "LK601 RIMEX GIPRO KURSA" },
        EMEDA1D: { displayName: "EMEDA 1D", waypoints: "LK601 BOSIS EMEDA" },
        RUDER1D: { displayName: "RUDER 1D", waypoints: "LK601 BOSIS KOBER RUDER" }
    },

    efkt: {
        ROSE3C: { displayName: "ROSE 3C", waypoints: "KITTL DELTA ROSE" },
        KETF2D: { displayName: "KETF 2D", waypoints: "KITTL KRDSH KETF" },
        SPECA1A: { displayName: "SPECA 1A", waypoints: "KITTL HTML SPECA" }
    },
    
    mdpc: {
        KATOK2T: { displayName: "KATOK 2T", waypoints: "MAROG PC101 KATOK" },
        CHUMA2T: { displayName: "CHUMA 2T", waypoints: "MAROG PC101 PC102 PC114 CHUMA" },
        PIXAR2T: { displayName: "PIXAR 2T", waypoints: "MAROG PC101 PC102 PC114 PC115 PIXAR" },
        ETBOD2T: { displayName: "ETBOD 2T", waypoints: "MAROG PC100 PC106 MIBNI ETBOD" },
    },    
};

const stars = {
    _vectors: { displayName: "Vectors", waypoints: "VECTORS" },

    egkk: {
        KUNAV1G: { displayName: "KUNAV 1G", waypoints: "KUNAV AMDUT KKE64 TIMBA" },
        VASUX1G: { displayName: "VASUX 1G", waypoints: "VASUX DISVO TELTU HOLLY WILLO" }
    },

    lemh: {
        SENOT3C: { displayName: "SENOT 3C", waypoints: "SENOT MORSS MNH61 MNH76 MNH31 CARME CAT" }
    },

    gclp: {
        LORPO1C: { displayName: "LORPO 1C", waypoints: "LORPO ENETA" },
        LORPO1Z: { displayName: "LORPO 1Z", waypoints: "LORPO LALTO" },
        ORTIS5C: { displayName: "ORTIS 5C", waypoints: "BRICK DELAP" },
        KONBA4D: { displayName: "KONBA 4D", waypoints: "LP1O4 MADAS" },
        COSTI1C: { displayName: "COSTI 1C", waypoints: "COSTI CANIS" }
    },

    lclk: {
        LUBES1R: { displayName: "LUBES 1R", waypoints: "LUBES NORDI PEEKO RIEMX" },
        KURSA1R: { displayName: "KURSA 1R", waypoints: "KURSA GIPRO RIMEX" },
        BONEK1R: { displayName: "BONEK 1R", waypoints: "BONEK ADLAS AMAKO SOBOS ROKIK" },
        NIMSI1R: { displayName: "NIMSI 1R", waypoints: "NIMSI ESERI BETID BOSIS AMAKO SOBOS ROKIK" },
        KRASI1V: { displayName: "KRASI 1V", waypoints: "KRASI MURAT ROKIK" }
    },

    efkt: {
        KRDSH1A: { displayName: "KRDSH 1A", waypoints: "KRDSH DELTA LIMA SUDIP" },
        KITTL2D: { displayName: "KITTL 2D", waypoints: "KIT SUDIP" },
        KEFLA3C: { displayName: "KEFLA 3C", waypoints: "EFLA BRAVO SUDIP" }
    },

    mdpc: {
        POKEG1W: { displayName: "POKEG 1W", waypoints: "POKEG PC115 PC113 BEREL" },
        BETIR1W: { displayName: "BETIR 1W", waypoints: "BETIR PC112 PC115 PC113 BEREL" },
        ANTEX1W: { displayName: "ANTEX 1W", waypoints: "ANTEK PC112 PC115 PC113 BEREL" }
    }
};

const routes = {
    _vectors: { displayName: "Vectors", waypoints: "VECTORS" },

    mdpc: {
        egkk: { altitude: "090", sid: { 8: sids.mdpc.KATOK2T, 9: sids.mdpc.KATOK2T, 26: sids._vectors, 27: sids._vectors }, route: "BANZAI COSTI LORPO ISKAL BOGNA MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        lemh: { altitude: "050", sid: { 8: sids.mdpc.KATOK2T, 9: sids.mdpc.KATOK2T, 26: sids._vectors, 27: sids._vectors }, route: "VAXRI SYOL4", star: { 1: stars._vectors, 19: stars._vectors } },
        gclp: { altitude: "050", sid: { 8: sids.mdpc.KATOK2T, 9: sids.mdpc.KATOK2T, 26: sids._vectors, 27: sids._vectors }, route: "BANZAI COSTI", star: { 3: stars.gclp.COSTI1C, 21: stars.gclp.COSTI1C } },
        efkt: { altitude: "110", sid: { 8: sids.mdpc.KATOK2T, 9: sids.mdpc.KATOK2T, 26: sids._vectors, 27: sids._vectors }, route: "BANZAI MUNCHY SENOT MEROS KONAN LIMA", star: { 16: stars._vectors, 34: stars._vectors } },
        lclk: { altitude: "090", sid: { 8: sids.mdpc.KATOK2T, 9: sids.mdpc.KATOK2T, 26: sids._vectors, 27: sids._vectors }, route: "JELLY", star: { 4: stars.lclk.KURSA1R, 22: stars.lclk.NIMSI1R } }
    },

    mdst: {
        egkk: { altitude: "090", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PIXAR KOLBI HDWA BOGNA MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        lemh: { altitude: "070", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC115 PC114 ODEGI VAXRI SYOL4", star: { 1: stars._vectors, 19: stars._vectors } },
        gclp: { altitude: "050", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC115 PC114 GOLVER BETIR LP1O3", star: stars.gclp.COSTI1C },
        efkt: { altitude: "110", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC115 FAHAZ KOPUD LUNIK KONAN LIMA", star: { 16: stars._vectors, 34: stars._vectors } },
        lclk: { altitude: "090", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC102 ANTEX NAPEV", star: { 4: stars.lclk.KURSA1R, 22: stars._vectors } }
    },

    egkk: {
        mdpc: { altitude: "080", sid: { 26: sids.egkk.NOVMA1X, 8: sids._vectors }, route: "LEDGO FALCON", star: { 8: stars.mdpc.POKEG1W, 9: stars.mdpc.POKEG1W, 26: stars._vectors, 27: stars._vectors } },
        mdst: { altitude: "080", sid: { 26: sids.egkk.NOVMA1X, 8: sids._vectors }, route: "LEDGO FALCON POKEG PC113", star: { 11: stars._vectors, 29: stars._vectors } },
        lemh: { altitude: "060", sid: { 26: sids.egkk.BOGNA1X, 8: sids._vectors }, route: "LUNIK", star: { 1: stars.lemh.SENOT3C, 19: stars._vectors } },
        gclp: { altitude: "060", sid: { 26: sids.egkk.NOVMA1X, 8: sids._vectors }, route: "ROGER", star: { 21: stars.gclp.ORTIS5C, 3: stars.gclp.KONBA4D } },
        efkt: { altitude: "050", sid: { 26: sids.egkk.WIZAD1X, 8: sids._vectors }, route: "MINTY LIMA", star: { 16: stars._vectors, 34: stars._vectors } },
        lclk: { altitude: "090", sid: { 26: sids.egkk.BOGNA1X, 8: sids._vectors }, route: "LUNIK TIMOR", star: { 4: stars.lclk.LUBES1R, 22: stars._vectors } }
    },

    lemh: {
        mdpc: { altitude: "060", sid: { 1: sids.lemh.ISKAL1A, 19: sids._vectors }, route: "KOPUD DICEY", star: { 8: stars.mdpc.BETIR1W, 9: stars.mdpc.BETIR1W, 26: stars._vectors, 27: stars._vectors } },
        mdst: { altitude: "060", sid: { 1: sids.lemh.ISKAL1A, 19: sids._vectors }, route: "KOPUD DICEY BETIR GOLVER PC114 PC115", star: { 11: stars._vectors, 29: stars._vectors } },
        egkk: { altitude: "060", sid: { 1: sids.lemh.SARGO2B, 19: sids._vectors }, route: "MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        efkt: { altitude: "070", sid: { 1: sids.lemh.MEROS3C, 19: sids._vectors }, route: "KONAN LIMA", star: { 16: stars._vectors, 34: stars._vectors } },
        gclp: { altitude: "060", sid: { 1: sids.lemh.ISKAL1A, 19: sids._vectors }, route: "KOPUD", star: { 3: stars.gclp.KONBA4D, 21: stars.gclp.ORTIS5C } },
        lclk: { altitude: "050", sid: { 1: sids.lemh.MEROS3C, 19: sids._vectors }, route: "MORSS", star: { 4: stars.lclk.LUBES1R, 22: stars._vectors } }
    },

    gclp: {
        mdpc: { altitude: "060", sid: { 21: sids.gclp.ODEGI2B, 3: sids.gclp.ODEGI2A }, route: "PC112", star: { 8: stars._vectors, 9: stars._vectors, 26: stars._vectors, 27: stars._vectors } },
        mdst: { altitude: "060", sid: { 21: sids.gclp.ODEGI2B, 3: sids.gclp.ODEGI2A }, route: "PC114 PC115", star: { 11: stars._vectors, 29: stars._vectors } },
        egkk: { altitude: "050", sid: { 21: sids.gclp.KOPUD1B, 3: sids.gclp.KOPUD1A }, route: "ISKAL BOGNA", star: { 8: stars._vectors, 26: stars._vectors } },
        efkt: { altitude: "070", sid: { 21: sids.gclp.KOPUD1B, 3: sids.gclp.KOPUD1A }, route: "HARDY KUNAV LIMA", star: { 16: stars._vectors, 34: stars._vectors } },
        lemh: { altitude: "050", sid: { 21: sids.gclp.COSTI4B, 3: sids.gclp.COSTI4A }, route: "HEAT", star: { 1: stars._vectors, 19: stars._vectors } },
        lclk: { altitude: "090", sid: { 21: sids.gclp.COSTI4B, 3: sids.gclp.COSTI4A }, route: "CARME", star: { 4: stars.lclk.LUBES1R, 22: stars._vectors } }
    },

    efkt: {
        mdpc: { altitude: "100", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "TEBRA LIZAD KOLBI", star: { 8: stars.mdpc.POKEG1W, 9: stars.mdpc.POKEG1W, 26: stars._vectors, 27: stars._vectors } },
        mdst: { altitude: "100", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "TEBRA LIZAD KOLBI", star: { 11: stars._vectors, 29: stars._vectors } },
        egkk: { altitude: "060", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "FRANE DELTING", star: { 8: stars._vectors, 26: stars._vectors } },
        lemh: { altitude: "060", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "MINTY KUNAV", star: { 1: stars.lemh.SENOT3C, 19: stars._vectors } },
        gclp: { altitude: "080", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "FRANE KUNAV", star: { 21: stars.gclp.ORTIS5C, 3: stars.gclp.KONBA4D } },
        lclk: { altitude: "080", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "FRANE MAYFIELD LIZAD", star: { 4: stars.lclk.LUBES1R, 22: stars._vectors } }
    },

    lclk: {
        mdpc: { altitude: "080", sid: { 4: sids.lclk.NORDI1W, 22: sids.lclk.KURSA1W }, route: "NAPEV ANTEX", star: { 8: stars.mdpc.BETIR1W, 9: stars.mdpc.BETIR1W, 26: stars._vectors, 27: stars._vectors } },
        mdst: { altitude: "080", sid: { 4: sids.lclk.NORDI1W, 22: sids.lclk.KURSA1W }, route: "NAPEV ANTEX", star: { 8: stars.mdpc.BETIR1W, 9: stars.mdpc.BETIR1W, 26: stars._vectors, 27: stars._vectors } },
        egkk: { altitude: "060", sid: { 4: sids.lclk.BONEK2W, 22: sids.lclk.LUBES1W }, route: "MORSS SENOT HARDY", star: { 8: stars._vectors, 26: stars._vectors } },
        lemh: { altitude: "060", sid: { 4: sids.lclk.BONEK2W, 22: sids.lclk.LUBES1W }, route: "CDP75", star: { 1: stars._vectors, 19: stars._vectors } },
        gclp: { altitude: "080", sid: {  }, route: "", star: {  } },
        efkt: { altitude: "050", sid: {  }, route: "", star: {  } }
    }
}

const airports = [
    { code: "MDPC", name: "Punta Cana", runways: ["8", "9", "08", "09", "26", "27"] },
    { code: "MDST", name: "Cibao", runways: ["11", "29"] },
    { code: "EGKK", name: "London Gatwick", runways: ["8L", "8R", "08L", "08R", "26L", "26R"] },
    { code: "GCLP", name: "Gran Canaria", runways: ["3L", "3R", "03L", "03R", "21L", "21R"] },
    { code: "LCLK", name: "Larnaca", runways: ["4", "04", "22"] },
    { code: "LCPH", name: "Paphos", runways: ["3", "03", "21"] },
    { code: "LEMH", name: "Menorca", runways: ["1", "01", "19"] },
    { code: "EFKT", name: "Kittilä", runways: ["16", "34"] }
]

const aircraftCodes = ["A350", "A320", "B737", "B757", "B717", "MD11", "B727", "A220"];
const aircraftTypes = [
    { code: "A220", name: "Airbus A220-300", length: "38.7", span: "35.1", seats: "130", range: "3,400" },
    { code: "A320", name: "Airbus A320-200", length: "37.6", span: "34.1", seats: "150", range: "3,300" },
    { code: "A350", name: "Airbus A350-900", length: "66.8", span: "64.75", seats: "306", range: "8,300" },
    { code: "B717", name: "Boeing 717", length: "38.1", span: "28.4", seats: "110", range: "2,060" },
    { code: "B727", name: "Boeing 727-200", length: "46.7", span: "32.9", seats: "150", range: "2,500" },
    { code: "B737", name: "Boeing 737-800", length: "39.5", span: "35.8", seats: "160", range: "2,935" },
    { code: "B757", name: "Boeing 757-200", length: "47.3", span: "38.1", seats: "180", range: "3,915" },
    { code: "MD11", name: "McDonnell Douglas MD-11", length: "61.3", span: "51.7", seats: "285", range: "6,800" },
];
  
