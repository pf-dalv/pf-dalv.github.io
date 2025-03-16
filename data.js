const dataBanners = [
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
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/taxi-light-a350.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/2-a320s-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/717-boeing-bldg-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/737-sun.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a320-climbing.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a320-gate.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a320-hold-short.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a320-taxi-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-cones.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-departing.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-flaring.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-hsbc-night.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-huge-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-nose-moon-virgin.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-taxi-starboard.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-turning-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-turning-smoke.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/amazing-thirds-lines.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/arrival-huge-moon-rwylights-night.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/bravo-right.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/bulb-moon-14.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/bulb-rotate.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/detached-gate.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/dont-cross-a1pha-a320s.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/even-more-a320s.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/fenced-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/gate-pov-2.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/gate-pov.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/landing-lights.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/md11-forward-slight-starboard.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/md11-gate.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/md11-tail.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/sun-wing-glow.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/tail-moon-greenlight-port.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/tivat-a320-air.png",
];

const sids = {
    _vectors: { displayName: "Vectors", waypoints: "VECTORS" },

    egkk: {
        BOGN1X: { displayName: "BOGNA 1X", waypoints: "KKWO6 KKWO8 KKS11 KKS2O KKS25 BOGNA" },
        NOVM1X: { displayName: "NOVMA 1X", waypoints: "KKWO7 KKWO9 NOVMA" },
        WIZA1X: { displayName: "WIZAD 1X", waypoints: "KKWO4 KKWO6 KKSO9 KKS14 KKS33 WIZAD" }
    },
    
    lemh: {
        ISKA1A: { displayName: "ISKAL 1A", waypoints: "TIMOR LUNIK ISKAL" },
        SARG2B: { displayName: "SARGO 2B", waypoints: "TIMOR SARGO" },
        MERO3C: { displayName: "MEROS 3C", waypoints: "TIMOR MEROS" }
    },

    gclp: {
        KOPU1A: { displayName: "KOPUD 1A", waypoints: "ECKOS KOPUD" },
        KOPU1B: { displayName: "KOPUD 1B", waypoints: "LP1O1 TUPIK KOPUD" },
        ODEG2A: { displayName: "ODEGI 2A", waypoints: "ECKOS LP1O2 LP1O3 ODEGI" },
        ODEG2B: { displayName: "ODEGI 2B", waypoints: "DRANO ODEGI" },
        COST4A: { displayName: "COSTI 4A", waypoints: "ECKOS COSTI" },
        COST4B: { displayName: "COSTI 4B", waypoints: "LP1O1 COSTI" }
    },

    lytv: {
        NAPEV14: { displayName: "Name unknown", waypoints: "TIVTI DEALT NAPEV" },
        DESOL14: { displayName: "Name unknown", waypoints: "TIVTI OKLA MAMOL DESOL" },
        OLIVU14: { displayName: "Name unknown", waypoints: "TIVTI OKLA NEROX GANTU EBOVA STAR NIK OLIVU" },
        OLIVU32: { displayName: "Name unknown", waypoints: "GOSUT STAR NIK OLIVU" },
        DESOL32: { displayName: "Name unknown", waypoints: "GOSUT STAR EBOVA VEDUR MOON DESOL" }
    },

    efkt: {
        ROSE3C: { displayName: "ROSE 3C", waypoints: "KITTL DELTA ROSE" },
        KETF2D: { displayName: "KETF 2D", waypoints: "KITTL KRDSH KETF" },
        SPEC1A: { displayName: "SPECA 1A", waypoints: "KITTL HTML SPECA" }
    },
    
    mdpc: {
        KATO2T: { displayName: "KATOK 2T", waypoints: " MAROG PC101 KATOK" },
        CHUM2T: { displayName: "CHUMA 2T", waypoints: " MAROG PC101 PC102 PC114 CHUMA" },
        PIXA2T: { displayName: "PIXAR 2T", waypoints: " MAROG PC101 PC102 PC114 PC115 PIXAR" },
        ETBO2T: { displayName: "ETBOD 2T", waypoints: " MAROG PC100 PC106 MIBNI ETBOD" },
    },    
};

const stars = {
    _vectors: { displayName: "Vectors", waypoints: "VECTORS" },

    egkk: {
        KUNA1G: { displayName: "KUNAV 1G", waypoints: "KUNAV AMDUT KKE64 TIMBA" },
        VASU1G: { displayName: "VASUX 1G", waypoints: "VASUX DISVO TELTU HOLLY WILLO" }
    },

    lemh: {
        SENO3C: { displayName: "SENOT 3C", waypoints: "SENOT MORSS MNH61 MNH76 MNH31 CARME CAT" },
        OPER2B: { displayName: "Name unknown", waypoints: "OPERA CDP63 CDP75 CARME CAT" },
        SYOL1A: { displayName: "Name unknown", waypoints: "SYOL4 CARME CAT" }
    },

    gclp: {
        LORP1C: { displayName: "LORPO 1C", waypoints: "LORPO ENETA" },
        LORP1Z: { displayName: "LORPO 1Z", waypoints: "LORPO LALTO" },
        ORTI5C: { displayName: "ORTIS 5C", waypoints: "BRICK DELAP" },
        KONB4D: { displayName: "KONBA 4D", waypoints: "LP1O4 MADAS" },
        COST1C: { displayName: "COSTI 1C", waypoints: "COSTI CANIS" }
    },

    lytv: {
        NAPEV14R: { displayName: "NAPEV 14R", waypoints: "NAPEV ULTRA BABY GOSUT" },
        NAPEV32D: { displayName: "NAPEV 32D", waypoints: "NAPEV DEALT AGEN TIVTI" },
        DESOL14R: { displayName: "DESOL 14R", waypoints: "DESOL MOON ROMEO EROVA BABY GOSUT" },
        DESOL32D: { displayName: "DESOL 32D", waypoints: "DESOL COD MAMOL OKLA TIVTI" },
        OXY14R: { displayName: "OXY 14R", waypoints: "OXY NEON EROVA BABY GOSUT" },
        OXY32D: { displayName: "OXY 32D", waypoints: "OXY UBER MOON COD MAMOL OKLA TIVTI" }
    },

    efkt: {
        KRDS1A: { displayName: "KRDSH 1A", waypoints: "KRDSH DELTA LIMA SUDIP" },
        KIT2D: { displayName: "KITTL 2D", waypoints: "KIT SUDIP" },
        KEFL3C: { displayName: "KEFLA 3C", waypoints: "EFLA BRAVO SUDIP" }
    },

    mdpc: {
        POKE1W: { displayName: "POKEG 1W", waypoints: "POKEG PC115 PC113 BEREL" },
        BETI1W: { displayName: "BETIR 1W", waypoints: "BETIR PC112 PC115 PC113 BEREL" },
        ANTE1W: { displayName: "ANTEX 1W", waypoints: "ANTEK PC112 PC115 PC113 BEREL" }
    }
};

const routes = {
    mdpc: {
        egkk: { haul: "Long", time: "47m 24s", altitude: "090", sid: { 8: sids.mdpc.KATO2T, 9: sids.mdpc.KATO2T, 26: sids._vectors, 27: sids._vectors }, route: "KATOK BANZAI COSTI LORPO ISKAL BOGNA MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        lemh: { haul: "Medium", time: "24m 30s", altitude: "070", sid: { 8: sids.mdpc.KATO2T, 9: sids.mdpc.KATO2T, 26: sids._vectors, 27: sids._vectors }, route: "KATOK VAXRI SYOL4", star: { 1: stars.lemh.SYOL1A, 19: stars._vectors } },
        gclp: { haul: "Short", time: "40m 54s", altitude: "050", sid: { 8: sids.mdpc.KATO2T, 9: sids.mdpc.KATO2T, 26: sids._vectors, 27: sids._vectors }, route: "KATOK BANZAI COSTI", star: { 3: stars.gclp.COST1C, 21: stars.gclp.COST1C } },
        lytv: { haul: "Long", time: "37m 40s", altitude: "050", sid: { 8: sids.mdpc.KATO2T, 9: sids.mdpc.KATO2T, 26: sids._vectors, 27: sids._vectors }, route: "KATOK VAXRI NAPEV", star: { 14: stars.lytv.NAPEV14R, 32: stars.lytv.NAPEV32D } },
        efkt: { haul: "Long", time: "52m 46s", altitude: "110", sid: { 8: sids.mdpc.KATO2T, 9: sids.mdpc.KATO2T, 26: sids._vectors, 27: sids._vectors }, route: "KATOK BANZAI MUNCHY SENOT MEROS KONAN LIMA", star: { 16: stars._vectors, 34: stars._vectors } }
    },
    
    mdst: {
        egkk: { haul: "Long", time: "41m 31s", altitude: "090", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PIXAR KOLBI HDWA BOGNA MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        lemh: { haul: "Long", time: "No Time Data", altitude: "070", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC115 PC114 ODEGI VAXRI SYOL4", star: { 1: stars.lemh.SYOL1A, 19: stars._vectors} },
        gclp: { haul: "Medium", time: "40m 9s", altitude: "050", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC115 PC114 GOLVER BETIR LP1O3 COSTI", star: stars.gclp.COST1C },
        lytv: { haul: "Long", time: "37m 11s", altitude: "050", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC102 ANTEX NAPEV", star: {14: stars.lytv.NAPEV14R, 32: stars.lytv.NAPEV32D} },
        efkt: { haul: "Long", time: "44m 33s", altitude: "110", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC115 FAHAZ KOPUD LUNIK KONAN LIMA", star: { 16: stars._vectors, 34: stars._vectors } }
    },
    
    egkk: {
        mdpc: { haul: "Long", time: "59m 38s", altitude: "080", sid: { 26: sids.egkk.NOVM1X, 8: sids._vectors }, route: "NOVMA LEDGO FALCON POKEG", star: { 8: stars.mdpc.POKE1W, 9: stars.mdpc.POKE1W, 26: stars._vectors, 27: stars._vectors } }, 
        mdst: { haul: "Long", time: "No Time Data", altitude: "080", sid: { 26: sids.egkk.NOVM1X, 8: sids._vectors }, route: "NOVMA LEDGO FALCON POKEG PC113", star: { 11: stars._vectors, 29: stars._vectors } },
        lemh: { haul: "Short", time: "32m 35s", altitude: "050", sid: { 26: sids.egkk.BOGN1X, 8: sids._vectors }, route: "BOGNA LUNIK SENOT", star: { 1: stars.lemh.SENO3C, 19: stars._vectors} },
        gclp: { haul: "Medium", time: "No Time Data", altitude: "060", sid: { 26: sids.egkk.NOVM1X, 8: sids._vectors }, route: "NOVMA ROGER BRICK", star: { 21: stars.gclp.ORTI5C, 3: stars.gclp.KONB4D} }, 
        efkt: { haul: "Short", time: "42m 7s", altitude: "050", sid: { 26: sids.egkk.WIZA1X, 8: sids._vectors }, route: "WIZAD MINTY LIMA", star: { 16: stars._vectors, 34: stars._vectors } }
    },

    lemh: {
        mdpc: { haul: "Medium", time: "No Time Data", altitude: "060", sid: { 1: sids.lemh.ISKA1A, 19: sids._vectors}, route: "ISKAL KOPUD DICEY BETIR", star: { 8: stars.mdpc.BETI1W, 9: stars.mdpc.BETI1W, 26: stars._vectors, 27: stars._vectors } },
        mdst: { haul: "Long", time: "38m 29s", altitude: "060", sid: { 1: sids.lemh.ISKA1A, 19: sids._vectors}, route: "ISKAL KOPUD DICEY BETIR GOLVER PC114 PC115 PC113", star: { 11: stars._vectors, 29: stars._vectors } },
        egkk: { haul: "Short", time: "14m 38s", altitude: "060", sid: { 1: sids.lemh.SARG2B, 19: sids._vectors}, route: "SARGO MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        lytv: { haul: "Short", time: "25m 5s", altitude: "050", sid: { 1: sids._vectors, 19: sids._vectors}, route: "MORSS OXY", star: {14: stars.lytv.OXY14R, 32: stars.lytv.OXY32D} },
        efkt: { haul: "Medium", time: "30m 24s", altitude: "070", sid: { 1: sids.lemh.MERO3C, 19: sids._vectors}, route: "MEROS KONAN LIMA", star: { 16: stars._vectors, 34: stars._vectors } }
    },

    gclp: {
        mdpc: { haul: "Short", time: "No Time Data", altitude: "050", sid: { 21: sids.gclp.ODEG2B, 3: sids.gclp.ODEG2A }, route: "ODEGI PC112", star: { 8: stars._vectors, 9: stars._vectors, 26: stars._vectors, 27: stars._vectors } },
        mdst: { haul: "Medium", time: "No Time Data", altitude: "060", sid: { 21: sids.gclp.ODEG2B, 3: sids.gclp.ODEG2A }, route: "ODEGI PC114 PC115 PC113", star: { 11: stars._vectors, 29: stars._vectors } },
        egkk: { haul: "Short", time: "No Time Data", altitude: "050", sid: { 21: sids.gclp.KOPU1B, 3: sids.gclp.KOPU1A }, route: "KOPUD ISKAL BOGNA MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        lytv: { haul: "Short", time: "32m 4s", altitude: "065", sid:  {21: sids.gclp.COST4B, 3: sids.gclp.COST4A }, route: "COSTI MUNCHY NAPEV", star: {14: stars.lytv.NAPEV14R, 32: stars.lytv.NAPEV32D } },
        efkt: { haul: "Medium", time: "1h 2m 30s", altitude: "080", sid: { 21: sids.gclp.KOPU1B, 3: sids.gclp.KOPU1A }, route: "KOPUD HARDY KUNAV LIMA", star: { 16: stars._vectors, 34: stars._vectors } }
    },

    lytv: {
        mdpc: { haul: "Long", time: "34m 41s", altitude: "080", sid: { 32: sids.lytv.OLIVU32, 14: sids.lytv.NAPEV14 }, route: "OLIVU SYOL4 JELLY BETIR", star: { 8: stars.mdpc.BETI1W, 9: stars.mdpc.BETI1W, 26: stars._vectors, 27: stars._vectors } },
        mdst: { haul: "Long", time: "No Time Data", altitude: "085", sid: { 32: sids.lytv.OLIVU32, 14: sids.lytv.NAPEV14 }, route: "OLIVU SYOL4 VAXRI ODEGI PC114 PC115 PC113", star: { 11: stars._vectors, 29: stars._vectors } },
        lemh: { haul: "Short", time: "No Time Data", altitude: "050", sid: { 32: sids.lytv.OLIVU32, 14: sids.lytv.NAPEV14 }, route: "OLIVU MNH31", star: { 1: stars._vectors, 19: stars._vectors} },
        gclp: { haul: "Short", time: "No Time Data", altitude: "070", sid: { 32: sids.lytv.OLIVU32, 14: sids.lytv.NAPEV14 }, route: "SYOL4 MUNCHY COSTI", star: { 3: stars.gclp.COST1C, 21: stars.gclp.COST1C} }
    },

    efkt: {
        mdpc: { haul: "Long", time: "No Time Data", altitude: "090", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "ROSE TEBRA LIZAD KOLBI POKEG", star: { 8: stars.mdpc.POKE1W, 9: stars.mdpc.POKE1W, 26: stars._vectors, 27: stars._vectors } },
        mdst: { haul: "Long", time: "No Time Data", altitude: "090", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "ROSE TEBRA LIZAD KOLBI POKEG PC113", star: { 11: stars._vectors, 29: stars._vectors } },
        egkk: { haul: "Short", time: "No Time Data", altitude: "050", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "ROSE FRANE DETLING", star: { 8: stars._vectors, 26: stars._vectors } },
        lemh: { haul: "Medium", time: "34m 28s", altitude: "070", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "ROSE MINTY KUNAV SENOT", star: { 1: stars.lemh.SENO3C, 19: stars._vectors } },
        gclp: { haul: "Medium", time: "27m 36s", altitude: "080", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "ROSE FRANE MAYFIELD LIZAD BRICK", star: { 21: stars.gclp.ORTI5C, 3: stars.gclp.KONB4D } }
    }
}

//This code was for testing purposes

/*
const departureCode = "gclp";
const arrivalCode = "egkk";

const departureRunway = 3;
const arrivalRunway = 26;

const flightPlan = routes[departureCode][arrivalCode];
console.log(flightPlan.sid[departureRunway].waypoints, flightPlan.route, flightPlan.star[arrivalRunway].waypoints, "\n" + flightPlan.haul, "haul,", "ETA:", flightPlan.time+",", "FL:", flightPlan.altitude)
*/