var caelus = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

  // node_modules/caelus/dist/src/index.js
  var index_exports = {};
  __export(index_exports, {
    ARCSEC: () => ARCSEC,
    ASHTOTTARI_ORDER: () => ASHTOTTARI_ORDER,
    ASHTOTTARI_YEARS: () => ASHTOTTARI_YEARS,
    ASPECTS: () => ASPECTS,
    AYANAMSA_J2000: () => AYANAMSA_J2000,
    BODIES: () => BODIES,
    BRIEF_INSTRUCTIONS: () => BRIEF_INSTRUCTIONS,
    CAZIMI_DEG: () => CAZIMI_DEG,
    COMBUST_DEG: () => COMBUST_DEG,
    ChebSeries: () => ChebSeries,
    DASHA_YEAR: () => DASHA_YEAR,
    DEFAULT_BODIES: () => DEFAULT_BODIES,
    DEFAULT_ORBS: () => DEFAULT_ORBS,
    DEFAULT_PARAN_BODIES: () => DEFAULT_PARAN_BODIES,
    DEFAULT_SALIENCE: () => DEFAULT_SALIENCE,
    DEG: () => DEG,
    DHANA_HOUSES: () => DHANA_HOUSES,
    DIAMETER_KM: () => DIAMETER_KM,
    DIGNITY_WEIGHTS: () => DIGNITY_WEIGHTS,
    DOMICILE: () => DOMICILE,
    DRISHTI: () => DRISHTI,
    EARTH_RADIUS_AU: () => EARTH_RADIUS_AU,
    ELEMENTS: () => ELEMENTS2,
    EXALTATION: () => EXALTATION,
    EXTRA_BODIES: () => EXTRA_BODIES,
    Engine: () => Engine,
    FACE_CYCLE: () => FACE_CYCLE,
    FIRDARIA_ORDER: () => FIRDARIA_ORDER,
    FIRDARIA_YEARS: () => FIRDARIA_YEARS,
    HERMETIC_LOTS: () => HERMETIC_LOTS,
    HOUSE_SYSTEMS: () => HOUSE_SYSTEMS,
    J2000: () => J2000,
    KENDRAS: () => KENDRAS,
    KEYS: () => KEYS,
    KeplerOrbit: () => KeplerOrbit,
    LENS_NAMES: () => LENS_NAMES,
    LEVEL_UNIT: () => LEVEL_UNIT,
    LIGHT_TIME_AU: () => LIGHT_TIME_AU,
    MODALITIES: () => MODALITIES2,
    NAKSHATRAS: () => NAKSHATRAS,
    NAK_SPAN: () => NAK_SPAN,
    NODE_PERIODS: () => NODE_PERIODS,
    NOT_ASPECTABLE: () => NOT_ASPECTABLE,
    PARAN_ANGLES: () => PARAN_ANGLES,
    PATTERN_ANGLES: () => PATTERN_ANGLES,
    PATTERN_ORBS: () => PATTERN_ORBS,
    PLANETS: () => PLANETS2,
    QUERY_ASPECTS: () => QUERY_ASPECTS,
    SIGNS: () => SIGNS,
    SIGN_RULERS: () => SIGN_RULERS,
    TERMS_EGYPTIAN: () => TERMS_EGYPTIAN,
    TIME_ANCHORED_REALMS: () => TIME_ANCHORED_REALMS,
    TRADITIONAL: () => TRADITIONAL,
    TRIKONAS: () => TRIKONAS,
    TRIPLICITY: () => TRIPLICITY,
    TROPICAL_YEAR: () => TROPICAL_YEAR,
    Turbo: () => Turbo,
    UNDER_BEAMS_DEG: () => UNDER_BEAMS_DEG,
    VARGA_DIVISIONS: () => VARGA_DIVISIONS,
    VIMSHOTTARI_ORDER: () => VIMSHOTTARI_ORDER,
    VIMSHOTTARI_YEARS: () => VIMSHOTTARI_YEARS,
    YOGA_PLANETS: () => YOGA_PLANETS,
    YOGINIS: () => YOGINIS,
    YOGINI_LORDS: () => YOGINI_LORDS,
    YOGINI_YEARS: () => YOGINI_YEARS,
    ZR_PERIODS: () => ZR_PERIODS,
    allOf: () => allOf,
    almuten: () => almuten,
    angles: () => angles,
    angularSeparation3d: () => angularSeparation3d,
    angularity: () => angularity,
    antiscion: () => antiscion,
    anyOf: () => anyOf,
    ashtottariActive: () => ashtottariActive,
    ashtottariAt: () => ashtottariAt,
    ashtottariDashas: () => ashtottariDashas,
    ashtottariLord: () => ashtottariLord,
    aspect: () => aspect,
    aspectBetween: () => aspectBetween,
    aspectPhase: () => aspectPhase,
    aspectsSign: () => aspectsSign,
    associationType: () => associationType,
    astrocartography: () => astrocartography,
    auditCitations: () => auditCitations,
    ayanamsa: () => ayanamsa,
    azAlt: () => azAlt,
    bodySource: () => bodySource,
    chartBrief: () => chartBrief,
    chartDiff: () => chartDiff,
    chartFeatures: () => chartFeatures,
    chartSignature: () => chartSignature,
    chartSignatureOf: () => chartSignatureOf,
    chironApparent: () => chironApparent,
    compileForm: () => compileForm,
    compositeLongitudes: () => compositeLongitudes,
    compositePlacements: () => compositePlacements,
    configurationFit: () => configurationFit,
    constraintLoss: () => constraintLoss,
    contraAntiscion: () => contraAntiscion,
    cosineSimilarity: () => cosineSimilarity,
    counterfactual: () => counterfactual,
    crossings: () => crossings,
    davisonParams: () => davisonParams,
    declinationAspect: () => declinationAspect,
    declinationAspects: () => declinationAspects,
    deltaT: () => deltaT,
    detectPatterns: () => detectPatterns,
    detectPatternsIn: () => detectPatternsIn,
    detectYogas: () => detectYogas,
    dhanaYogas: () => dhanaYogas,
    dhanaYogasAt: () => dhanaYogasAt,
    dignities: () => dignities,
    dignityOf: () => dignityOf,
    dignityScore: () => dignityScore,
    directedLongitude: () => directedLongitude,
    directionArcs: () => directionArcs,
    directionYears: () => directionYears,
    element: () => element,
    enrichContextOptions: () => enrichContextOptions,
    enrichSynastryOptions: () => enrichSynastryOptions,
    ephemeris: () => ephemeris,
    equationOfTime: () => equationOfTime,
    equatorial: () => equatorial,
    faceRuler: () => faceRuler,
    featureVector: () => featureVector,
    findAspects: () => findAspects,
    firdaria: () => firdaria,
    firdariaActive: () => firdariaActive,
    firdariaAt: () => firdariaAt,
    firdariaSequence: () => firdariaSequence,
    fmtLon: () => fmtLon,
    formLoss: () => formLoss,
    gast: () => gast,
    gauquelinSector: () => gauquelinSector,
    gmst: () => gmst,
    harmonicChart: () => harmonicChart,
    harmonicLongitude: () => harmonicLongitude,
    hasAngle: () => hasAngle,
    hasAspect: () => hasAspect,
    hasComposite: () => hasComposite,
    hasDignityFine: () => hasDignityFine,
    hasDispositor: () => hasDispositor,
    hasLot: () => hasLot,
    hasNakshatra: () => hasNakshatra,
    hasPattern: () => hasPattern,
    hasPlacement: () => hasPlacement,
    hasReception: () => hasReception,
    hasSignature: () => hasSignature,
    hasStar: () => hasStar,
    hasSynastry: () => hasSynastry,
    hasTimelord: () => hasTimelord,
    hasTransit: () => hasTransit,
    hasVarga: () => hasVarga,
    hasYoga: () => hasYoga,
    hermeticLots: () => hermeticLots,
    houseCusp: () => houseCusp,
    houseFromAsc: () => houseFromAsc,
    houseLord: () => houseLord,
    houseOf: () => houseOf,
    houseSign: () => houseSign,
    housesAlcabitius: () => housesAlcabitius,
    housesCampanus: () => housesCampanus,
    housesEqual: () => housesEqual,
    housesKoch: () => housesKoch,
    housesMeridian: () => housesMeridian,
    housesMorinus: () => housesMorinus,
    housesPlacidus: () => housesPlacidus,
    housesPolichPage: () => housesPolichPage,
    housesPorphyry: () => housesPorphyry,
    housesRegiomontanus: () => housesRegiomontanus,
    housesVehlow: () => housesVehlow,
    housesWholeSign: () => housesWholeSign,
    inSect: () => inSect,
    inSign: () => inSign,
    interpret: () => interpret,
    interpretationContext: () => interpretationContext,
    isDayChart: () => isDayChart,
    isTimeAnchored: () => isTimeAnchored,
    isoToJd: () => isoToJd,
    jdTT: () => jdTT,
    julianDay: () => julianDay,
    kemadruma: () => kemadruma,
    kemadrumaAt: () => kemadrumaAt,
    lotFortune: () => lotFortune,
    lotSpirit: () => lotSpirit,
    lots: () => lots,
    lunarEclipseLocal: () => lunarEclipseLocal,
    lunarEclipses: () => lunarEclipses,
    lunarPhases: () => lunarPhases,
    lunarReturn: () => lunarReturn,
    matchAll: () => matchAll,
    matchAny: () => matchAny,
    matchNone: () => matchNone,
    meanLilith: () => meanLilith,
    meanNode: () => meanNode,
    meanObliquity: () => meanObliquity,
    midpointLon: () => midpointLon,
    mod: () => mod,
    modality: () => modality,
    moonApparentPrecise: () => moonApparentPrecise,
    moonApparentSeries: () => moonApparentSeries,
    moonGeometric: () => moonGeometric,
    mundaneDirectionArc: () => mundaneDirectionArc,
    mundaneDirections: () => mundaneDirections,
    nakshatra: () => nakshatra,
    nakshatraAt: () => nakshatraAt,
    normalizeHouseSystem: () => normalizeHouseSystem,
    notOf: () => notOf,
    notRetrograde: () => notRetrograde,
    nutation: () => nutation,
    oscApogeePrecise: () => oscApogeePrecise,
    oscApogeeSeries: () => oscApogeeSeries,
    outOfBounds: () => outOfBounds,
    outOfBoundsMargin: () => outOfBoundsMargin,
    parans: () => parans,
    parivartana: () => parivartana,
    parseOffset: () => parseOffset,
    pheno: () => pheno,
    planetApparent: () => planetApparent,
    planetLines: () => planetLines,
    planetaryHour: () => planetaryHour,
    planetarySect: () => planetarySect,
    plutoApparent: () => plutoApparent,
    plutoHeliocentric: () => plutoHeliocentric,
    precessEcliptic: () => precessEcliptic,
    primaryDirections: () => primaryDirections,
    profectedSign: () => profectedSign,
    profection: () => profection,
    profectionAt: () => profectionAt,
    progressedJd: () => progressedJd,
    progressedLongitude: () => progressedLongitude,
    quadrant: () => quadrant,
    rajaYogas: () => rajaYogas,
    rajaYogasAt: () => rajaYogasAt,
    rankMoments: () => rankMoments,
    rankMomentsAsync: () => rankMomentsAsync,
    realize: () => realize,
    realmFraming: () => realmFraming,
    reconcile: () => reconcile,
    refractApparentToTrue: () => refractApparentToTrue,
    refractTrueToApparent: () => refractTrueToApparent,
    registerSyntheticSystem: () => registerSyntheticSystem,
    resolvePlace: () => resolvePlace,
    resolveTime: () => resolveTime,
    retrograde: () => retrograde,
    returns: () => returns,
    riseSet: () => riseSet,
    sampleCount: () => sampleCount,
    scan: () => scan,
    searchConfigurations: () => searchConfigurations,
    separation: () => separation,
    signLord: () => signLord,
    signRuler: () => signRuler,
    signedElongation: () => signedElongation,
    skyView: () => skyView,
    skyViewSequence: () => skyViewSequence,
    solarArc: () => solarArc,
    solarEclipseLimits: () => solarEclipseLimits,
    solarEclipseLocal: () => solarEclipseLocal,
    solarEclipseWhere: () => solarEclipseWhere,
    solarEclipses: () => solarEclipses,
    solarElongation: () => solarElongation,
    solarPhase: () => solarPhase,
    solarReturn: () => solarReturn,
    starAngleTimes: () => starAngleTimes,
    starApparent: () => starApparent,
    starParans: () => starParans,
    startingYogini: () => startingYogini,
    stations: () => stations,
    sunApparent: () => sunApparent,
    synastryAspects: () => synastryAspects,
    synastryOverlays: () => synastryOverlays,
    syntheticEphemeris: () => syntheticEphemeris,
    syntheticPositions: () => syntheticPositions,
    syntheticRender: () => syntheticRender,
    syntheticSources: () => syntheticSources,
    termRuler: () => termRuler,
    topocentricEcl: () => topocentricEcl,
    transitAspects: () => transitAspects,
    trueNodePrecise: () => trueNodePrecise,
    trueNodeSeries: () => trueNodeSeries,
    trueObliquity: () => trueObliquity,
    unitVector: () => unitVector,
    validateSyntheticSystem: () => validateSyntheticSystem,
    varga: () => varga,
    vargaAt: () => vargaAt,
    vargaChart: () => vargaChart,
    vertexEastPoint: () => vertexEastPoint,
    vimshottariActive: () => vimshottariActive,
    vimshottariAt: () => vimshottariAt,
    vimshottariDashas: () => vimshottariDashas,
    voidOfCourse: () => voidOfCourse,
    vsopHeliocentric: () => vsopHeliocentric,
    when: () => when,
    yogakarakas: () => yogakarakas,
    yogasAt: () => yogasAt,
    yoginiActive: () => yoginiActive,
    yoginiAt: () => yoginiAt,
    yoginiDashas: () => yoginiDashas,
    zrActive: () => zrActive,
    zrAt: () => zrAt,
    zrRelease: () => zrRelease
  });

  // node_modules/caelus/dist/src/core.js
  var DEG = Math.PI / 180;
  var ARCSEC = DEG / 3600;
  var J2000 = 2451545;
  var LIGHT_TIME_AU = 0.0057755183;
  var TWO_PI = 2 * Math.PI;
  var C_KM_PER_DAY = 299792.458 * 86400;
  function mod(a, b) {
    const r = a % b;
    return r !== 0 && r < 0 !== b < 0 ? r + b : r;
  }
  function julianDay(y, mo, d, h = 0, mi = 0, s = 0) {
    const frac = (h + mi / 60 + s / 3600) / 24;
    if (mo <= 2) {
      y -= 1;
      mo += 12;
    }
    const a = Math.floor(y / 100);
    const b = 2 - a + Math.floor(a / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (mo + 1)) + d + b - 1524.5 + frac;
  }
  var DT_OBS = [
    [1955, 31.1],
    [1960, 33.2],
    [1965, 35.7],
    [1970, 40.2],
    [1975, 45.5],
    [1980, 50.5],
    [1985, 54.3],
    [1990, 56.9],
    [1995, 60.8],
    [2e3, 63.8],
    [2005, 64.7],
    [2010, 66.1],
    [2015, 67.6],
    [2020, 69.4],
    [2025, 69.2]
  ];
  function deltaT(jdUt) {
    const y = 2e3 + (jdUt - J2000) / 365.25;
    if (y >= 1955 && y <= 2025) {
      for (let i = 0; i < DT_OBS.length - 1; i++) {
        const [y0, d0] = DT_OBS[i];
        const [y1, d1] = DT_OBS[i + 1];
        if (y >= y0 && y <= y1)
          return d0 + (d1 - d0) * (y - y0) / (y1 - y0);
      }
    }
    if (y > 2025) {
      const dy = y - 2025;
      return 69.2 - 0.04 * dy + 32 * (dy / 100) ** 2;
    }
    let t;
    if (y >= 1941 && y < 1955) {
      t = y - 1950;
      return 29.07 + 0.407 * t - t * t / 233 + t ** 3 / 2547;
    }
    if (y >= 1920 && y < 1941) {
      t = y - 1920;
      return 21.2 + 0.84493 * t - 0.0761 * t * t + 20936e-7 * t ** 3;
    }
    if (y >= 1900 && y < 1920) {
      t = y - 1900;
      return -2.79 + 1.494119 * t - 0.0598939 * t * t + 61966e-7 * t ** 3 - 197e-6 * t ** 4;
    }
    if (y >= 1860 && y < 1900) {
      t = y - 1860;
      return 7.62 + 0.5737 * t - 0.251754 * t * t + 0.01680668 * t ** 3 - 4473624e-10 * t ** 4 + t ** 5 / 233174;
    }
    if (y >= 1800 && y < 1860) {
      t = y - 1800;
      return 13.72 - 0.332447 * t + 68612e-7 * t * t + 41116e-7 * t ** 3 - 37436e-8 * t ** 4 + 121272e-10 * t ** 5 - 1699e-10 * t ** 6 + 875e-12 * t ** 7;
    }
    const u = (y - 1820) / 100;
    return -20 + 32 * u * u;
  }
  function jdTT(jdUt) {
    return jdUt + deltaT(jdUt) / 86400;
  }
  function vsopHeliocentric(series, jde) {
    const t = (jde - J2000) / 365250;
    const out = [];
    for (const v of [series.L, series.B, series.R]) {
      let total = 0;
      let tn = 1;
      for (const orderTerms of v) {
        let acc = 0;
        for (const [A, B, C] of orderTerms)
          acc += A * Math.cos(B + C * t);
        total += acc * tn;
        tn *= t;
      }
      out.push(total);
    }
    return [mod(out[0], TWO_PI), out[1], out[2]];
  }
  function nutation(data, jde) {
    const T = (jde - J2000) / 36525;
    const D = (297.85036 + 445267.11148 * T - 19142e-7 * T * T + T ** 3 / 189474) * DEG;
    const M = (357.52772 + 35999.05034 * T - 1603e-7 * T * T - T ** 3 / 3e5) * DEG;
    const N = (134.96298 + 477198.867398 * T + 86972e-7 * T * T + T ** 3 / 5620) * DEG;
    const F = (93.27191 + 483202.017538 * T - 36825e-7 * T * T + T ** 3 / 327270) * DEG;
    const Om = (125.04452 - 1934.136261 * T + 20708e-7 * T * T + T ** 3 / 45e4) * DEG;
    let dpsi = 0;
    let deps = 0;
    const tbl = data.nutation;
    for (let i = tbl.length - 1; i >= 0; i--) {
      const [d, m, n, f, om, s0, s1, c0, c1] = tbl[i];
      const arg = d * D + m * M + n * N + f * F + om * Om;
      dpsi += Math.sin(arg) * (s0 + s1 * T);
      deps += Math.cos(arg) * (c0 + c1 * T);
    }
    return [dpsi * 1e-4 * ARCSEC, deps * 1e-4 * ARCSEC];
  }
  function meanObliquity(jde) {
    const T = (jde - J2000) / 36525;
    return (84381.448 - 46.815 * T - 59e-5 * T * T + 1813e-6 * T ** 3) * ARCSEC;
  }
  function trueObliquity(data, jde) {
    return meanObliquity(jde) + nutation(data, jde)[1];
  }
  function fk5Correction(L, B, jde) {
    const T = (jde - J2000) / 36525;
    const Lp = L - (1.397 + 31e-5 * T) * T * DEG;
    const dL = -0.09033 * ARCSEC + 0.03916 * ARCSEC * (Math.cos(Lp) + Math.sin(Lp)) * Math.tan(B);
    const dB = 0.03916 * ARCSEC * (Math.cos(Lp) - Math.sin(Lp));
    return [L + dL, B + dB];
  }
  var PQ_POL = [
    [5851.607687, -0.1189, -28913e-8, 101e-9],
    [-1600.8863, 1.1689818, -2e-7, -437e-9]
  ];
  var PQ_PER = [
    [708.15, -5486.751211, -684.66156, 667.66673, -5523.863691],
    [2309, -17.127623, 2446.28388, -2354.886252, -549.74745],
    [1620, -617.517403, 399.671049, -428.152441, -310.998056],
    [492.2, 413.44294, -356.652376, 376.202861, 421.535876],
    [1183, 78.614193, -186.387003, 184.778874, -36.776172],
    [622, -180.732815, -316.80007, 335.321713, -145.278396],
    [882, -87.676083, 198.296701, -185.138669, -34.74445],
    [547, 46.140315, 101.135679, -120.97283, 22.885731]
  ];
  var XY_POL = [
    [5453.282155, 0.4252841, -37173e-8, -152e-9],
    [-73750.93035, -0.7675452, -18725e-8, 231e-9]
  ];
  var XY_PER = [
    [256.75, -819.940624, 75004.344875, 81491.287984, 1558.515853],
    [708.15, -8444.676815, 624.033993, 787.163481, 7774.939698],
    [274.2, 2600.009459, 1251.136893, 1251.296102, -2219.534038],
    [241.45, 2755.17563, -1102.212834, -1257.950837, -2523.969396],
    [2309, -167.659835, -2660.66498, -2966.79973, 247.850422],
    [492.2, 871.855056, 699.291817, 639.744522, -846.485643],
    [396.1, 44.769698, 153.16722, 131.600209, -1393.124055],
    [288.9, -512.313065, -950.865637, -445.040117, 368.526116],
    [231.1, -819.415595, 499.754645, 584.522874, 749.045012],
    [1610, -538.071099, -145.18821, -89.756563, 444.704518],
    [620, -189.793622, 558.116553, 524.42963, 235.934465],
    [157.87, -402.922932, -23.923029, -13.549067, 374.049623],
    [220.3, 179.516345, -165.405086, -210.157124, -171.33018],
    [1200, -9.814756, 9.344131, -44.919798, -22.899655]
  ];
  var EPS0_V = 84381.406 * ARCSEC;
  var EPS0_FRAME = 84381.448 * ARCSEC;
  function ltpPecl(jde) {
    const t = (jde - J2000) / 36525;
    let p = 0;
    let q = 0;
    const w = 2 * Math.PI * t;
    for (const [per, c1, c2, s1, s2] of PQ_PER) {
      const a = w / per;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      p += ca * c1 + sa * s1;
      q += ca * c2 + sa * s2;
    }
    let tn = 1;
    for (let i = 0; i < 4; i++) {
      p += PQ_POL[0][i] * tn;
      q += PQ_POL[1][i] * tn;
      tn *= t;
    }
    p *= ARCSEC;
    q *= ARCSEC;
    const z = Math.sqrt(Math.max(1 - p * p - q * q, 0));
    const s = Math.sin(EPS0_V);
    const c = Math.cos(EPS0_V);
    return [p, -q * c - z * s, -q * s + z * c];
  }
  function ltpPequ(jde) {
    const t = (jde - J2000) / 36525;
    let x = 0;
    let y = 0;
    const w = 2 * Math.PI * t;
    for (const [per, c1, c2, s1, s2] of XY_PER) {
      const a = w / per;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      x += ca * c1 + sa * s1;
      y += ca * c2 + sa * s2;
    }
    let tn = 1;
    for (let i = 0; i < 4; i++) {
      x += XY_POL[0][i] * tn;
      y += XY_POL[1][i] * tn;
      tn *= t;
    }
    x *= ARCSEC;
    y *= ARCSEC;
    return [x, y, Math.sqrt(Math.max(1 - x * x - y * y, 0))];
  }
  function ltpEclMatrix(jde) {
    const p = ltpPequ(jde);
    const z = ltpPecl(jde);
    const wx = [
      p[1] * z[2] - p[2] * z[1],
      p[2] * z[0] - p[0] * z[2],
      p[0] * z[1] - p[1] * z[0]
    ];
    const n = Math.sqrt(wx[0] ** 2 + wx[1] ** 2 + wx[2] ** 2);
    const x = [wx[0] / n, wx[1] / n, wx[2] / n];
    const y = [
      z[1] * x[2] - z[2] * x[1],
      z[2] * x[0] - z[0] * x[2],
      z[0] * x[1] - z[1] * x[0]
    ];
    return [x, y, z];
  }
  function precessEcliptic(lon, lat, jdeFrom, jdeTo) {
    const cb = Math.cos(lat);
    const v = [cb * Math.cos(lon), cb * Math.sin(lon), Math.sin(lat)];
    const [xf, yf, zf] = ltpEclMatrix(jdeFrom);
    const e = [0, 1, 2].map((i) => xf[i] * v[0] + yf[i] * v[1] + zf[i] * v[2]);
    const [xt, yt, zt] = ltpEclMatrix(jdeTo);
    const u = [
      xt[0] * e[0] + xt[1] * e[1] + xt[2] * e[2],
      yt[0] * e[0] + yt[1] * e[1] + yt[2] * e[2],
      zt[0] * e[0] + zt[1] * e[1] + zt[2] * e[2]
    ];
    return [
      mod(Math.atan2(u[1], u[0]), TWO_PI),
      Math.asin(Math.max(-1, Math.min(1, u[2])))
    ];
  }
  function eclJ2000ToEclDate(v, jde) {
    const [x, y, z] = v;
    const s = Math.sin(EPS0_FRAME);
    const c = Math.cos(EPS0_FRAME);
    const e = [x, y * c - z * s, y * s + z * c];
    const [xt, yt, zt] = ltpEclMatrix(jde);
    return [
      xt[0] * e[0] + xt[1] * e[1] + xt[2] * e[2],
      yt[0] * e[0] + yt[1] * e[1] + yt[2] * e[2],
      zt[0] * e[0] + zt[1] * e[1] + zt[2] * e[2]
    ];
  }
  function geoVector(data, name, jde) {
    const [L0, B0, R0] = vsopHeliocentric(data.vsop.earth, jde);
    const [L, B, R] = vsopHeliocentric(data.vsop[name], jde);
    return [
      R * Math.cos(B) * Math.cos(L) - R0 * Math.cos(B0) * Math.cos(L0),
      R * Math.cos(B) * Math.sin(L) - R0 * Math.cos(B0) * Math.sin(L0),
      R * Math.sin(B) - R0 * Math.sin(B0)
    ];
  }
  function planetApparent(data, name, jde) {
    let [x, y, z] = geoVector(data, name, jde);
    let delta = Math.sqrt(x * x + y * y + z * z);
    for (let i = 0; i < 2; i++) {
      const tau = LIGHT_TIME_AU * delta;
      [x, y, z] = geoVector(data, name, jde - tau);
      delta = Math.sqrt(x * x + y * y + z * z);
    }
    let lon = mod(Math.atan2(y, x), TWO_PI);
    let lat = Math.atan2(z, Math.sqrt(x * x + y * y));
    [lon, lat] = fk5Correction(lon, lat, jde);
    lon = mod(lon + nutation(data, jde)[0], TWO_PI);
    return [lon, lat, delta];
  }
  function sunApparent(data, jde) {
    const [L0, B0, R0] = vsopHeliocentric(data.vsop.earth, jde);
    let lon = mod(L0 + Math.PI, TWO_PI);
    let lat = -B0;
    [lon, lat] = fk5Correction(lon, lat, jde);
    lon -= 20.4898 * ARCSEC / R0;
    lon = mod(lon + nutation(data, jde)[0], TWO_PI);
    return [lon, lat, R0];
  }
  function moonFundamental(T) {
    const Lp = (218.3164477 + 481267.88123421 * T - 15786e-7 * T * T + T ** 3 / 538841 - T ** 4 / 65194e3) * DEG;
    const D = (297.8501921 + 445267.1114034 * T - 18819e-7 * T * T + T ** 3 / 545868 - T ** 4 / 113065e3) * DEG;
    const M = (357.5291092 + 35999.0502909 * T - 1535e-7 * T * T + T ** 3 / 2449e4) * DEG;
    const Mp = (134.9633964 + 477198.8675055 * T + 87414e-7 * T * T + T ** 3 / 69699 - T ** 4 / 14712e3) * DEG;
    const F = (93.272095 + 483202.0175233 * T - 36539e-7 * T * T - T ** 3 / 3526e3 + T ** 4 / 86331e4) * DEG;
    return [Lp, D, M, Mp, F];
  }
  function moonGeometric(data, jde) {
    const T = (jde - J2000) / 36525;
    const [Lp, D, M, Mp, F] = moonFundamental(T);
    const A1 = (119.75 + 131.849 * T) * DEG;
    const A2 = (53.09 + 479264.29 * T) * DEG;
    const A3 = (313.45 + 481266.484 * T) * DEG;
    const E = 1 - 2516e-6 * T - 74e-7 * T * T;
    const E2 = E * E;
    let sl = 3958 * Math.sin(A1) + 1962 * Math.sin(Lp - F) + 318 * Math.sin(A2);
    let sr = 0;
    let sb = -2235 * Math.sin(Lp) + 382 * Math.sin(A3) + 175 * Math.sin(A1 - F) + 175 * Math.sin(A1 + F) + 127 * Math.sin(Lp - Mp) - 115 * Math.sin(Lp + Mp);
    for (const [d, m, mp, f, lC, rC] of data.moonMeeus.ta) {
      const arg = d * D + m * M + mp * Mp + f * F;
      const e = Math.abs(m) === 1 ? E : Math.abs(m) === 2 ? E2 : 1;
      sl += lC * Math.sin(arg) * e;
      sr += rC * Math.cos(arg) * e;
    }
    for (const [d, m, mp, f, bC] of data.moonMeeus.tb) {
      const arg = d * D + m * M + mp * Mp + f * F;
      const e = Math.abs(m) === 1 ? E : Math.abs(m) === 2 ? E2 : 1;
      sb += bC * Math.sin(arg) * e;
    }
    return [
      mod(Lp + sl * 1e-6 * DEG, TWO_PI),
      sb * 1e-6 * DEG,
      385000.56 + sr * 1e-3
    ];
  }
  function moonApparentSeries(data, jde) {
    const [lon, lat, dist] = moonGeometric(data, jde);
    return [mod(lon + nutation(data, jde)[0], TWO_PI), lat, dist];
  }
  function clenshaw(coeffs, x) {
    let b0 = 0;
    let b1 = 0;
    for (let i = coeffs.length - 1; i >= 1; i--) {
      [b0, b1] = [2 * x * b0 - b1 + coeffs[i], b0];
    }
    return x * b0 - b1 + coeffs[0];
  }
  function clenshawDeriv(coeffs, x, halfSpanDays) {
    const n = coeffs.length;
    const d = new Array(n).fill(0);
    for (let k = n - 1; k >= 1; k--) {
      d[k - 1] = (k + 1 < n ? d[k + 1] : 0) + 2 * k * coeffs[k];
    }
    d[0] *= 0.5;
    return [clenshaw(coeffs, x), clenshaw(d.slice(0, Math.max(n - 1, 1)), x) / halfSpanDays];
  }
  var ChebSeries = class {
    jd0;
    seg;
    segments;
    jd1;
    scale;
    constructor(data) {
      this.jd0 = data.jd0;
      this.seg = data.seg_days;
      this.segments = data.segments;
      this.jd1 = this.jd0 + this.seg * this.segments.length;
      this.scale = data.scale ?? 1;
    }
    locate(jd) {
      if (jd < this.jd0 || jd > this.jd1) {
        throw new RangeError(`jd ${jd} outside fitted range ${this.jd0}-${this.jd1}`);
      }
      const i = Math.min(Math.floor((jd - this.jd0) / this.seg), this.segments.length - 1);
      const x = 2 * (jd - (this.jd0 + i * this.seg)) / this.seg - 1;
      return [i, x];
    }
    xyz(jd) {
      const [i, x] = this.locate(jd);
      const s = this.segments[i];
      return [
        clenshaw(s[0], x) * this.scale,
        clenshaw(s[1], x) * this.scale,
        clenshaw(s[2], x) * this.scale
      ];
    }
    xyzVel(jd) {
      const [i, x] = this.locate(jd);
      const s = this.segments[i];
      const half = this.seg / 2;
      const pos = [];
      const vel = [];
      for (const c of s) {
        const [p, v] = clenshawDeriv(c, x, half);
        pos.push(p * this.scale);
        vel.push(v * this.scale);
      }
      return [pos, vel];
    }
  };
  function moonApparentPrecise(data, cheb, jde) {
    let [x, y, z] = cheb.xyz(jde);
    const dist = Math.sqrt(x * x + y * y + z * z);
    const tau = dist / C_KM_PER_DAY;
    [x, y, z] = cheb.xyz(jde - tau);
    let lon = mod(Math.atan2(y, x), TWO_PI);
    let lat = Math.atan2(z, Math.sqrt(x * x + y * y));
    [lon, lat] = precessEcliptic(lon, lat, J2000, jde);
    lon = mod(lon + nutation(data, jde)[0], TWO_PI);
    return [lon, lat, dist];
  }
  function trueNodePrecise(data, cheb, jde) {
    const [[x, y, z], [vx, vy, vz]] = cheb.xyzVel(jde);
    const h = [
      y * vz - z * vy,
      z * vx - x * vz,
      x * vy - y * vx
    ];
    const [hx, hy] = eclJ2000ToEclDate(h, jde);
    const node = mod(Math.atan2(hx, -hy), TWO_PI);
    return mod(node + nutation(data, jde)[0], TWO_PI);
  }
  function meanNode(data, jde) {
    const T = (jde - J2000) / 36525;
    const om = (125.0445479 - 1934.1362891 * T + 20754e-7 * T * T + T ** 3 / 467441 - T ** 4 / 60616e3) * DEG;
    return mod(om + nutation(data, jde)[0], TWO_PI);
  }
  function trueNodeSeries(data, jde) {
    const h = 0.01;
    const xyz = (t) => {
      const [lon, lat, dist] = moonGeometric(data, t);
      return [
        dist * Math.cos(lat) * Math.cos(lon),
        dist * Math.cos(lat) * Math.sin(lon),
        dist * Math.sin(lat)
      ];
    };
    const [x0, y0, z0] = xyz(jde - h);
    const [x1, y1, z1] = xyz(jde + h);
    const [x, y, z] = xyz(jde);
    const vx = (x1 - x0) / (2 * h);
    const vy = (y1 - y0) / (2 * h);
    const vz = (z1 - z0) / (2 * h);
    const hx = y * vz - z * vy;
    const hy = z * vx - x * vz;
    const node = mod(Math.atan2(hx, -hy), TWO_PI);
    return mod(node + nutation(data, jde)[0], TWO_PI);
  }
  function equatorial(lon, lat, eps) {
    const ra = mod(Math.atan2(Math.sin(lon) * Math.cos(eps) - Math.tan(lat) * Math.sin(eps), Math.cos(lon)), TWO_PI);
    const dec = Math.asin(Math.sin(lat) * Math.cos(eps) + Math.cos(lat) * Math.sin(eps) * Math.sin(lon));
    return [ra, dec];
  }
  var AYANAMSA_J2000 = {
    lahiri: 23.857092325,
    fagan_bradley: 24.740299966,
    krishnamurti: 23.760240012,
    raman: 22.410791012,
    yukteshwar: 22.478803
  };
  function ayanamsa(jde, mode) {
    const a0 = AYANAMSA_J2000[mode];
    if (a0 === void 0)
      throw new Error(`unknown ayanamsa ${mode}`);
    const [lon] = precessEcliptic(a0 * DEG, 0, J2000, jde);
    return lon / DEG;
  }
  function meanLilith(data, jde) {
    const T = (jde - J2000) / 36525;
    const [Lp, , , Mp] = moonFundamental(T);
    const apog = Lp - Mp + Math.PI;
    const om = (125.0445479 - 1934.1362891 * T + 20754e-7 * T * T + T ** 3 / 467441 - T ** 4 / 60616e3) * DEG;
    const inc = 5.145396374 * DEG;
    const u = apog - om;
    const lat = Math.asin(Math.sin(inc) * Math.sin(u));
    let lon = om + Math.atan2(Math.cos(inc) * Math.sin(u), Math.cos(u));
    lon = mod(lon + nutation(data, jde)[0], TWO_PI);
    return [lon, lat];
  }
  var GM_EARTH_MOON = 403503.2356 * 86400 ** 2;
  function oscApogeeFromState(data, x, y, z, vx, vy, vz, jde, frameJ2000) {
    const mu = GM_EARTH_MOON;
    const r = Math.sqrt(x * x + y * y + z * z);
    const v2 = vx * vx + vy * vy + vz * vz;
    const rv = x * vx + y * vy + z * vz;
    const ex = (v2 * x - rv * vx) / mu - x / r;
    const ey = (v2 * y - rv * vy) / mu - y / r;
    const ez = (v2 * z - rv * vz) / mu - z / r;
    const e = Math.sqrt(ex * ex + ey * ey + ez * ez);
    const a = 1 / (2 / r - v2 / mu);
    const s = a * (1 + e) / e;
    let px = -ex * s;
    let py = -ey * s;
    let pz = -ez * s;
    if (frameJ2000)
      [px, py, pz] = eclJ2000ToEclDate([px, py, pz], jde);
    const lon = mod(Math.atan2(py, px) + nutation(data, jde)[0], TWO_PI);
    const lat = Math.atan2(pz, Math.hypot(px, py));
    return [lon, lat, Math.sqrt(px * px + py * py + pz * pz)];
  }
  function oscApogeePrecise(data, cheb, jde) {
    const [[x, y, z], [vx, vy, vz]] = cheb.xyzVel(jde);
    return oscApogeeFromState(data, x, y, z, vx, vy, vz, jde, true);
  }
  function oscApogeeSeries(data, jde) {
    const h = 0.01;
    const xyz = (t) => {
      const [lon, lat, dist] = moonGeometric(data, t);
      return [
        dist * Math.cos(lat) * Math.cos(lon),
        dist * Math.cos(lat) * Math.sin(lon),
        dist * Math.sin(lat)
      ];
    };
    const [x0, y0, z0] = xyz(jde - h);
    const [x1, y1, z1] = xyz(jde + h);
    const [x, y, z] = xyz(jde);
    return oscApogeeFromState(data, x, y, z, (x1 - x0) / (2 * h), (y1 - y0) / (2 * h), (z1 - z0) / (2 * h), jde, false);
  }
  var KeplerOrbit = class {
    els;
    epoch;
    constructor(els, epoch) {
      this.els = els;
      this.epoch = epoch;
    }
    xyz(jde) {
      const { a, e, i, node, peri: w, M0, n } = this.els;
      const M = M0 + n * (jde - this.epoch);
      let E = M;
      for (let k = 0; k < 30; k++) {
        E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
      }
      const xv = a * (Math.cos(E) - e);
      const yv = a * Math.sqrt(1 - e * e) * Math.sin(E);
      const cw = Math.cos(w);
      const sw = Math.sin(w);
      const cn = Math.cos(node);
      const sn = Math.sin(node);
      const ci = Math.cos(i);
      const si = Math.sin(i);
      const xp = xv * cw - yv * sw;
      const yp = xv * sw + yv * cw;
      return [xp * cn - yp * sn * ci, xp * sn + yp * cn * ci, yp * si];
    }
  };
  var EARTH_RADIUS_AU = 6378.14 / 1495978707e-1;
  var EARTH_FLAT = 0.99664719;
  function topocentricEcl(lon, lat, distAu, lst, obsLat, altM, eps) {
    const u = Math.atan(EARTH_FLAT * Math.tan(obsLat));
    const rs = EARTH_FLAT * Math.sin(u) + altM / 6378140 * Math.sin(obsLat);
    const rc = Math.cos(u) + altM / 6378140 * Math.cos(obsLat);
    const ox = EARTH_RADIUS_AU * rc * Math.cos(lst);
    const oy = EARTH_RADIUS_AU * rc * Math.sin(lst);
    const oz = EARTH_RADIUS_AU * rs;
    const [ra, dec] = equatorial(lon, lat, eps);
    const bx = distAu * Math.cos(dec) * Math.cos(ra);
    const by = distAu * Math.cos(dec) * Math.sin(ra);
    const bz = distAu * Math.sin(dec);
    const tx = bx - ox;
    const ty = by - oy;
    const tz = bz - oz;
    const ra2 = Math.atan2(ty, tx);
    const dec2 = Math.atan2(tz, Math.hypot(tx, ty));
    const lon2 = mod(Math.atan2(Math.sin(ra2) * Math.cos(eps) + Math.tan(dec2) * Math.sin(eps), Math.cos(ra2)), TWO_PI);
    const lat2 = Math.asin(Math.sin(dec2) * Math.cos(eps) - Math.cos(dec2) * Math.sin(eps) * Math.sin(ra2));
    return [lon2, lat2, Math.sqrt(tx * tx + ty * ty + tz * tz)];
  }
  function plutoHeliocentric(data, jde) {
    const T = (jde - J2000) / 36525;
    const J = (34.35 + 3034.9057 * T) * DEG;
    const S = (50.08 + 1222.1138 * T) * DEG;
    const P = (238.96 + 144.96 * T) * DEG;
    let l = 0;
    let b = 0;
    let r = 0;
    for (const [i, j, k, lA, lB, bA, bB, rA, rB] of data.pluto) {
      const a = i * J + j * S + k * P;
      const sa = Math.sin(a);
      const ca = Math.cos(a);
      l += lA * sa + lB * ca;
      b += bA * sa + bB * ca;
      r += rA * sa + rB * ca;
    }
    return [
      (l + 238.958116 + 144.96 * T) * DEG,
      (b - 3.908239) * DEG,
      r + 40.7241346
    ];
  }
  function plutoApparent(data, jde) {
    const helioJ2000 = (tJde) => plutoHeliocentric(data, tJde);
    const [L0d, B0d, R0d] = vsopHeliocentric(data.vsop.earth, jde);
    const [Lj, Bj] = precessEcliptic(L0d, B0d, jde, J2000);
    const ex = R0d * Math.cos(Bj) * Math.cos(Lj);
    const ey = R0d * Math.cos(Bj) * Math.sin(Lj);
    const ez = R0d * Math.sin(Bj);
    const geo = (t) => {
      const [l, b, r] = helioJ2000(t);
      return [
        r * Math.cos(b) * Math.cos(l) - ex,
        r * Math.cos(b) * Math.sin(l) - ey,
        r * Math.sin(b) - ez
      ];
    };
    let [x, y, z] = geo(jde);
    let delta = Math.sqrt(x * x + y * y + z * z);
    for (let i = 0; i < 2; i++) {
      [x, y, z] = geo(jde - LIGHT_TIME_AU * delta);
      delta = Math.sqrt(x * x + y * y + z * z);
    }
    let lon = mod(Math.atan2(y, x), TWO_PI);
    let lat = Math.atan2(z, Math.sqrt(x * x + y * y));
    const T = (jde - J2000) / 36525;
    const sunLon = mod(L0d + Math.PI, TWO_PI);
    const k = 20.4898 * ARCSEC;
    const e = 0.016708634 - 42037e-9 * T;
    const piPer = (102.93735 + 1.71946 * T) * DEG;
    lon += (-k * Math.cos(sunLon - lon) + e * k * Math.cos(piPer - lon)) / Math.cos(lat);
    [lon, lat] = precessEcliptic(lon, lat, J2000, jde);
    lon = mod(lon + nutation(data, jde)[0], TWO_PI);
    return [lon, lat, delta];
  }
  function chironApparent(data, cheb, jde) {
    const [L0, B0, R0] = vsopHeliocentric(data.vsop.earth, jde);
    const [Lj, Bj] = precessEcliptic(L0, B0, jde, J2000);
    const ex = R0 * Math.cos(Bj) * Math.cos(Lj);
    const ey = R0 * Math.cos(Bj) * Math.sin(Lj);
    const ez = R0 * Math.sin(Bj);
    const geo = (t) => {
      const [cx, cy, cz] = cheb.xyz(t);
      return [cx - ex, cy - ey, cz - ez];
    };
    let [x, y, z] = geo(jde);
    let delta = Math.sqrt(x * x + y * y + z * z);
    for (let i = 0; i < 2; i++) {
      [x, y, z] = geo(jde - LIGHT_TIME_AU * delta);
      delta = Math.sqrt(x * x + y * y + z * z);
    }
    let lon = mod(Math.atan2(y, x), TWO_PI);
    let lat = Math.atan2(z, Math.sqrt(x * x + y * y));
    const T = (jde - J2000) / 36525;
    const sunLon = mod(L0 + Math.PI, TWO_PI);
    const k = 20.4898 * ARCSEC;
    const e = 0.016708634 - 42037e-9 * T;
    const piPer = (102.93735 + 1.71946 * T) * DEG;
    lon += (-k * Math.cos(sunLon - lon) + e * k * Math.cos(piPer - lon)) / Math.cos(lat);
    [lon, lat] = precessEcliptic(lon, lat, J2000, jde);
    lon = mod(lon + nutation(data, jde)[0], TWO_PI);
    return [lon, lat, delta];
  }

  // node_modules/caelus/dist/src/houses.js
  var TWO_PI2 = 2 * Math.PI;
  function gmst(jdUt) {
    const T = (jdUt - J2000) / 36525;
    const deg = 280.46061837 + 360.98564736629 * (jdUt - J2000) + 387933e-9 * T * T - T ** 3 / 3871e4;
    return mod(deg, 360) * DEG;
  }
  function gast(data, jdUt) {
    const jde = jdTT(jdUt);
    const [dpsi] = nutation(data, jde);
    const eps = trueObliquity(data, jde);
    return mod(gmst(jdUt) + dpsi * Math.cos(eps), TWO_PI2);
  }
  function houseCusp(ra, pole, eps) {
    return mod(Math.atan2(Math.sin(ra), Math.cos(ra) * Math.cos(eps) - Math.sin(eps) * Math.tan(pole)), TWO_PI2);
  }
  function mcOf(armc, eps) {
    return mod(Math.atan2(Math.sin(armc), Math.cos(armc) * Math.cos(eps)), TWO_PI2);
  }
  function ascOf(armc, phi, eps) {
    let asc = houseCusp(armc + Math.PI / 2, phi, eps);
    if (mod(asc - mcOf(armc, eps), TWO_PI2) >= Math.PI) {
      asc = mod(asc + Math.PI, TWO_PI2);
    }
    return asc;
  }
  function angles(data, jdUt, latDeg, lonDeg) {
    const jde = jdTT(jdUt);
    const eps = trueObliquity(data, jde);
    const armc = mod(gast(data, jdUt) + lonDeg * DEG, TWO_PI2);
    const phi = latDeg * DEG;
    const mc = mcOf(armc, eps);
    const asc = ascOf(armc, phi, eps);
    return [asc, mc, armc, eps];
  }
  function vertexEastPoint(armc, phi, eps) {
    const colat = phi >= 0 ? Math.PI / 2 - phi : -Math.PI / 2 - phi;
    let vtx = houseCusp(armc + 3 * Math.PI / 2, colat, eps);
    const dx = Math.cos(vtx);
    const dy = Math.sin(vtx) * Math.cos(eps);
    if (dx * -Math.sin(armc) + dy * Math.cos(armc) > 0) {
      vtx = mod(vtx + Math.PI, TWO_PI2);
    }
    const east = houseCusp(armc + Math.PI / 2, 0, eps);
    return [vtx, east];
  }
  function housesWholeSign(asc) {
    const first = Math.floor(asc / (30 * DEG)) * 30 * DEG;
    return Array.from({ length: 12 }, (_, i) => mod(first + i * 30 * DEG, TWO_PI2));
  }
  function housesEqual(asc) {
    return Array.from({ length: 12 }, (_, i) => mod(asc + i * 30 * DEG, TWO_PI2));
  }
  function housesPorphyry(asc, mc) {
    const ic = mod(mc + Math.PI, TWO_PI2);
    const dsc = mod(asc + Math.PI, TWO_PI2);
    const span = (a, b) => mod(b - a, TWO_PI2);
    const cusps = new Array(12).fill(0);
    cusps[0] = asc;
    cusps[9] = mc;
    let s = span(mc, asc) / 3;
    cusps[10] = mod(mc + s, TWO_PI2);
    cusps[11] = mod(mc + 2 * s, TWO_PI2);
    s = span(asc, ic) / 3;
    cusps[1] = mod(asc + s, TWO_PI2);
    cusps[2] = mod(asc + 2 * s, TWO_PI2);
    cusps[3] = ic;
    cusps[6] = dsc;
    cusps[4] = mod(cusps[10] + Math.PI, TWO_PI2);
    cusps[5] = mod(cusps[11] + Math.PI, TWO_PI2);
    cusps[7] = mod(cusps[1] + Math.PI, TWO_PI2);
    cusps[8] = mod(cusps[2] + Math.PI, TWO_PI2);
    return cusps;
  }
  function signed(x) {
    return mod(x + Math.PI, TWO_PI2) - Math.PI;
  }
  function fillOpposites(out) {
    for (const k of [3, 4, 5])
      out[k] = mod(out[k + 6] + Math.PI, TWO_PI2);
    for (const k of [6, 7, 8])
      out[k] = mod(out[k - 6] + Math.PI, TWO_PI2);
    return out;
  }
  function quadrantFrame(armc, phi, eps, flipMc) {
    const out = new Array(12).fill(0);
    let mc = mcOf(armc, eps);
    let asc = houseCusp(armc + Math.PI / 2, phi, eps);
    if (mod(asc - mc, TWO_PI2) >= Math.PI) {
      asc = mod(asc + Math.PI, TWO_PI2);
      if (flipMc)
        mc = mod(mc + Math.PI, TWO_PI2);
    }
    out[0] = asc;
    out[9] = mc;
    return out;
  }
  function eastOfMeridian(lon, armc, eps) {
    const ra = Math.atan2(Math.sin(lon) * Math.cos(eps), Math.cos(lon));
    if (Math.sin(armc - ra) > 0)
      return mod(lon + Math.PI, TWO_PI2);
    return lon;
  }
  function normArc(lon, lo, d) {
    const off = signed(lon - lo);
    const inside = d >= 0 ? off >= 0 && off <= d : off >= d && off <= 0;
    return inside ? lon : mod(lon + Math.PI, TWO_PI2);
  }
  function housesKoch(armc, phi, eps) {
    if (Math.abs(phi) >= Math.PI / 2 - eps) {
      throw new RangeError("koch undefined at polar latitudes");
    }
    const out = quadrantFrame(armc, phi, eps, false);
    const decMc = Math.asin(Math.sin(eps) * Math.sin(out[9]));
    const x = Math.tan(phi) * Math.tan(decMc);
    if (Math.abs(x) > 1) {
      throw new RangeError("koch undefined: MC degree circumpolar");
    }
    const sa = Math.PI / 2 + Math.asin(x);
    out[10] = ascOf(armc - 2 * sa / 3, phi, eps);
    out[11] = ascOf(armc - sa / 3, phi, eps);
    out[1] = ascOf(armc + sa / 3, phi, eps);
    out[2] = ascOf(armc + 2 * sa / 3, phi, eps);
    return fillOpposites(out);
  }
  function housesRegiomontanus(armc, phi, eps) {
    const out = quadrantFrame(armc, phi, eps, true);
    for (const [k, h] of [[10, 30], [11, 60], [1, 120], [2, 150]]) {
      const pole = Math.atan(Math.tan(phi) * Math.sin(h * DEG));
      out[k] = eastOfMeridian(houseCusp(armc + h * DEG, pole, eps), armc, eps);
    }
    return fillOpposites(out);
  }
  function housesCampanus(armc, phi, eps) {
    const out = quadrantFrame(armc, phi, eps, true);
    const n = [
      -Math.sin(phi) * Math.cos(armc),
      -Math.sin(phi) * Math.sin(armc),
      Math.cos(phi)
    ];
    const zen = [
      Math.cos(phi) * Math.cos(armc),
      Math.cos(phi) * Math.sin(armc),
      Math.sin(phi)
    ];
    const east = [-Math.sin(armc), Math.cos(armc), 0];
    const pole = [0, -Math.sin(eps), Math.cos(eps)];
    const cusp = (theta) => {
      const t = theta * DEG;
      const v = [
        east[0] * Math.cos(t) + zen[0] * Math.sin(t),
        east[1] * Math.cos(t) + zen[1] * Math.sin(t),
        east[2] * Math.cos(t) + zen[2] * Math.sin(t)
      ];
      const m = [
        n[1] * v[2] - n[2] * v[1],
        n[2] * v[0] - n[0] * v[2],
        n[0] * v[1] - n[1] * v[0]
      ];
      const d = [
        m[1] * pole[2] - m[2] * pole[1],
        m[2] * pole[0] - m[0] * pole[2],
        m[0] * pole[1] - m[1] * pole[0]
      ];
      return mod(Math.atan2(d[1] * Math.cos(eps) + d[2] * Math.sin(eps), d[0]), TWO_PI2);
    };
    for (const [k, theta] of [[10, 30], [11, 60], [1, 120], [2, 150]]) {
      out[k] = cusp(theta);
    }
    const mc = out[9];
    const asc = out[0];
    const dUp = signed(asc - mc);
    const dDn = signed(mod(mc + Math.PI, TWO_PI2) - asc);
    for (const k of [10, 11])
      out[k] = normArc(out[k], mc, dUp);
    for (const k of [1, 2])
      out[k] = normArc(out[k], asc, dDn);
    if (Math.abs(signed(out[10] - mc)) > Math.abs(signed(out[11] - mc))) {
      [out[10], out[11]] = [out[11], out[10]];
    }
    if (Math.abs(signed(out[1] - asc)) > Math.abs(signed(out[2] - asc))) {
      [out[1], out[2]] = [out[2], out[1]];
    }
    return fillOpposites(out);
  }
  function housesAlcabitius(armc, phi, eps) {
    const out = quadrantFrame(armc, phi, eps, false);
    const dec = Math.asin(Math.sin(eps) * Math.sin(out[0]));
    const x = Math.max(-1, Math.min(1, Math.tan(phi) * Math.tan(dec)));
    const ad = Math.asin(x);
    const sda = Math.PI / 2 + ad;
    const sna = Math.PI / 2 - ad;
    const ras = [
      [10, armc + sda / 3],
      [11, armc + 2 * sda / 3],
      [1, armc + Math.PI - 2 * sna / 3],
      [2, armc + Math.PI - sna / 3]
    ];
    for (const [k, ra] of ras) {
      out[k] = mod(Math.atan2(Math.sin(ra), Math.cos(ra) * Math.cos(eps)), TWO_PI2);
    }
    return fillOpposites(out);
  }
  function housesMorinus(armc, _phi, eps) {
    return Array.from({ length: 12 }, (_, i) => mod(Math.atan2(Math.sin(armc + (i + 3) * 30 * DEG) * Math.cos(eps), Math.cos(armc + (i + 3) * 30 * DEG)), TWO_PI2));
  }
  function housesMeridian(armc, _phi, eps) {
    return Array.from({ length: 12 }, (_, i) => mod(Math.atan2(Math.sin(armc + (i + 3) * 30 * DEG), Math.cos(armc + (i + 3) * 30 * DEG) * Math.cos(eps)), TWO_PI2));
  }
  function housesPolichPage(armc, phi, eps) {
    const out = quadrantFrame(armc, phi, eps, true);
    const spec = [
      [10, 30, 1],
      [11, 60, 2],
      [1, 120, 2],
      [2, 150, 1]
    ];
    for (const [k, h, w] of spec) {
      const pole = Math.atan(Math.tan(phi) * w / 3);
      out[k] = eastOfMeridian(houseCusp(armc + h * DEG, pole, eps), armc, eps);
    }
    return fillOpposites(out);
  }
  function housesVehlow(armc, phi, eps) {
    const asc = ascOf(armc, phi, eps);
    return Array.from({ length: 12 }, (_, i) => mod(asc - 15 * DEG + i * 30 * DEG, TWO_PI2));
  }
  function housesPlacidus(armc, phi, eps) {
    const cusp = (offsetDeg, f) => {
      let lam = mod(armc + offsetDeg * DEG, TWO_PI2);
      for (let i = 0; i < 50; i++) {
        const dec = Math.asin(Math.sin(eps) * Math.sin(lam));
        let x = Math.tan(phi) * Math.tan(dec);
        x = Math.max(-1, Math.min(1, x));
        const ad = Math.asin(x);
        const raI = mod(armc + offsetDeg * DEG + f * ad, TWO_PI2);
        const lamNew = mod(Math.atan2(Math.sin(raI), Math.cos(raI) * Math.cos(eps)), TWO_PI2);
        if (Math.abs(mod(lamNew - lam + Math.PI, TWO_PI2) - Math.PI) < 1e-10) {
          lam = lamNew;
          break;
        }
        lam = lamNew;
      }
      return lam;
    };
    const mc = mod(Math.atan2(Math.sin(armc), Math.cos(armc) * Math.cos(eps)), TWO_PI2);
    const asc = mod(Math.atan2(Math.cos(armc), -(Math.sin(armc) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps))), TWO_PI2);
    const cusps = new Array(12).fill(0);
    cusps[0] = asc;
    cusps[9] = mc;
    cusps[10] = cusp(30, 1 / 3);
    cusps[11] = cusp(60, 2 / 3);
    cusps[1] = cusp(120, 2 / 3);
    cusps[2] = cusp(150, 1 / 3);
    cusps[3] = mod(mc + Math.PI, TWO_PI2);
    cusps[6] = mod(asc + Math.PI, TWO_PI2);
    cusps[4] = mod(cusps[10] + Math.PI, TWO_PI2);
    cusps[5] = mod(cusps[11] + Math.PI, TWO_PI2);
    cusps[7] = mod(cusps[1] + Math.PI, TWO_PI2);
    cusps[8] = mod(cusps[2] + Math.PI, TWO_PI2);
    return cusps;
  }

  // node_modules/caelus/dist/src/stars.js
  var TWO_PI3 = 2 * Math.PI;
  var KM_PER_AU = 1495978707e-1;
  var AU_PER_PC = 206264.806;
  function starApparent(data, s, jde) {
    const t = (jde - J2000) / 365.25;
    const ra = s.ra * DEG;
    const dec = s.dec * DEG;
    const rAu = s.plx > 0 ? AU_PER_PC / (s.plx * 1e-3) : 1e9 * AU_PER_PC;
    const cd = Math.cos(dec);
    const sd = Math.sin(dec);
    const cr = Math.cos(ra);
    const sr = Math.sin(ra);
    const p = [cd * cr, cd * sr, sd];
    const east = [-sr, cr, 0];
    const north = [-sd * cr, -sd * sr, cd];
    const pmra = s.pmra * 1e-3 * ARCSEC;
    const pmdec = s.pmdec * 1e-3 * ARCSEC;
    const rv = s.rv * 86400 * 365.25 / KM_PER_AU;
    const pos = [0, 1, 2].map((i) => p[i] * rAu + (east[i] * pmra * rAu + north[i] * pmdec * rAu + p[i] * rv) * t);
    const rn = Math.sqrt(pos[0] ** 2 + pos[1] ** 2 + pos[2] ** 2);
    const x = pos[0] / rn;
    const y = pos[1] / rn;
    const z = pos[2] / rn;
    const ra2 = Math.atan2(y, x);
    const dec2 = Math.asin(z);
    const e0 = 84381.448 * ARCSEC;
    let lat = Math.asin(Math.sin(dec2) * Math.cos(e0) - Math.cos(dec2) * Math.sin(e0) * Math.sin(ra2));
    let lon = mod(Math.atan2(Math.sin(ra2) * Math.cos(e0) + Math.tan(dec2) * Math.sin(e0), Math.cos(ra2)), TWO_PI3);
    [lon, lat] = precessEcliptic(lon, lat, J2000, jde);
    const [L0] = vsopHeliocentric(data.vsop.earth, jde);
    const sunLon = mod(L0 + Math.PI, TWO_PI3);
    const T = (jde - J2000) / 36525;
    const k = 20.4898 * ARCSEC;
    const e = 0.016708634 - 42037e-9 * T;
    const piPer = (102.93735 + 1.71946 * T) * DEG;
    lon += (-k * Math.cos(sunLon - lon) + e * k * Math.cos(piPer - lon)) / Math.cos(lat);
    lat += -k * Math.sin(lat) * (Math.sin(sunLon - lon) - e * Math.sin(piPer - lon));
    lon = mod(lon + nutation(data, jde)[0], TWO_PI3);
    return [lon, lat];
  }

  // node_modules/caelus/dist/src/pheno.js
  var TWO_PI4 = 2 * Math.PI;
  var KM_PER_AU2 = 1495978707e-1;
  var DIAMETER_KM = {
    sun: 1392e3,
    moon: 3475,
    mercury: 4878.8,
    venus: 12103.6,
    mars: 6779,
    jupiter: 139822,
    saturn: 116464,
    uranus: 50724,
    neptune: 49244,
    pluto: 2376.6
  };
  function magnitude(body, a, r, dlt, jde, lonDeg, latDeg) {
    const x = 5 * Math.log10(r * dlt);
    switch (body) {
      case "sun":
        return -26.86 + 5 * Math.log10(dlt);
      case "moon":
        return 0.233431 + x + 0.026 * Math.abs(a) + 4e-9 * a ** 4;
      case "mercury":
        return x - 0.613 + 0.06328 * a - 16336e-7 * a ** 2 + 33644e-9 * a ** 3 - 34265e-11 * a ** 4 + 16893e-13 * a ** 5 - 30334e-16 * a ** 6;
      case "venus":
        if (a <= 163.7) {
          return x - 4.384 - 1044e-6 * a + 3687e-7 * a ** 2 - 2814e-9 * a ** 3 + 8938e-12 * a ** 4;
        }
        return x + 236.05828 - 2.81914 * a + 839034e-8 * a ** 2;
      case "mars":
        return x - 1.601 + 0.02267 * a - 1302e-7 * a ** 2;
      case "jupiter":
        return x - 9.395 - 37e-5 * a + 616e-6 * a ** 2;
      case "saturn": {
        const T = (jde - J2000) / 36525;
        const i = (28.075216 - 0.012998 * T + 4e-6 * T * T) * DEG;
        const om = (169.50847 + 1.394681 * T + 412e-6 * T * T) * DEG;
        const lam = lonDeg * DEG;
        const bet = latDeg * DEG;
        const sinB = Math.sin(i) * Math.cos(bet) * Math.sin(lam - om) - Math.cos(i) * Math.sin(bet);
        const b = Math.abs(Math.asin(Math.max(-1, Math.min(1, sinB))));
        return x - 8.914 - 1.825 * Math.sin(b) + 0.026 * a - 0.378 * Math.sin(b) * Math.exp(-2.25 * a);
      }
      case "uranus":
        return x - 7.16 + 6587e-6 * a + 1045e-7 * a ** 2;
      case "neptune": {
        const y = 2e3 + (jde - J2000) / 365.25;
        const base = y < 1980 ? -6.89 : y < 2e3 ? -6.89 - 0.11 * (y - 1980) / 20 : -7;
        return x + base + 7944e-6 * a + 9617e-8 * a ** 2;
      }
      default:
        return x - 1.01;
    }
  }
  function pheno(engine, body, jdUt) {
    if (DIAMETER_KM[body] === void 0) {
      throw new Error(`pheno not available for '${body}'`);
    }
    const jde = jdTT(jdUt);
    const p = engine.position(body, jdUt);
    const s = body === "sun" ? p : engine.position("sun", jdUt);
    const dlt = p.dist;
    const a1 = p.lon * DEG;
    const d1 = p.lat * DEG;
    const a2 = s.lon * DEG;
    const d2 = s.lat * DEG;
    const elong = Math.acos(Math.max(-1, Math.min(1, Math.sin(d1) * Math.sin(d2) + Math.cos(d1) * Math.cos(d2) * Math.cos(a1 - a2))));
    let phaseAngle;
    let r;
    if (body === "sun") {
      phaseAngle = 0;
      r = dlt;
    } else if (body === "moon") {
      r = s.dist;
      const R = s.dist;
      phaseAngle = Math.atan2(R * Math.sin(elong), dlt - R * Math.cos(elong));
    } else {
      r = engine.heliocentric(body, jdUt).dist;
      const cosi = (r * r + dlt * dlt - s.dist ** 2) / (2 * r * dlt);
      phaseAngle = Math.acos(Math.max(-1, Math.min(1, cosi)));
    }
    const aDeg = phaseAngle / DEG;
    const diam = 2 * Math.asin(DIAMETER_KM[body] / (2 * dlt * KM_PER_AU2)) / DEG;
    return {
      phaseAngle: aDeg,
      phase: (1 + Math.cos(phaseAngle)) / 2,
      elongation: elong / DEG,
      diameter: diam,
      magnitude: magnitude(body, aDeg, r, dlt, jde, p.lon, p.lat)
    };
  }
  function equationOfTime(engine, jdUt) {
    const jde = jdTT(jdUt);
    const t = (jde - J2000) / 365250;
    const l0 = mod(280.4664567 + 360007.6982779 * t + 0.03032028 * t * t + t ** 3 / 49931 - t ** 4 / 15300 - t ** 5 / 2e6, 360);
    const [lon, lat] = sunApparent(engine.data, jde);
    const [ra] = equatorial(lon, lat, trueObliquity(engine.data, jde));
    const e = mod(l0 - 57183e-7 - ra / DEG + 180, 360) - 180;
    return e * 4;
  }
  function azAlt(data, lonDeg, latDeg, jdUt, obsLat, obsLonEast) {
    const jde = jdTT(jdUt);
    const eps = trueObliquity(data, jde);
    const [ra, dec] = equatorial(lonDeg * DEG, latDeg * DEG, eps);
    const lst = mod(gast(data, jdUt) + obsLonEast * DEG, TWO_PI4);
    const ha = lst - ra;
    const phi = obsLat * DEG;
    const alt = Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(ha));
    const azS = Math.atan2(Math.sin(ha), Math.cos(ha) * Math.sin(phi) - Math.tan(dec) * Math.cos(phi));
    return [mod(azS / DEG + 180, 360), alt / DEG];
  }
  function refractTrueToApparent(altDeg, pressure = 1013.25, tempC = 15) {
    if (altDeg < -2)
      return altDeg;
    let r = 1.02 / Math.tan((altDeg + 10.3 / (altDeg + 5.11)) * DEG);
    r *= pressure / 1010 * (283 / (273 + tempC));
    const out = altDeg + r / 60;
    return out < 0 ? altDeg : out;
  }
  function refractApparentToTrue(altDeg, pressure = 1013.25, tempC = 15) {
    if (altDeg < -2)
      return altDeg;
    let r = 1 / Math.tan((altDeg + 7.31 / (altDeg + 4.4)) * DEG);
    r *= pressure / 1010 * (283 / (273 + tempC));
    return altDeg - r / 60;
  }

  // node_modules/caelus/dist/src/events.js
  var TWO_PI5 = 2 * Math.PI;
  var KM_PER_AU3 = 1495978707e-1;
  var R0_ARCMIN = 34.076;
  function topoAltHa(engine, body, jdUt, latDeg, lonDeg, altM) {
    const jde = jdTT(jdUt);
    let [lon, lat, dist] = engine.ecliptic(body, jde);
    const eps = trueObliquity(engine.data, jde);
    const lst = mod(gast(engine.data, jdUt) + lonDeg * DEG, TWO_PI5);
    if (dist !== null) {
      [lon, lat, dist] = topocentricEcl(lon, lat, dist, lst, latDeg * DEG, altM, eps);
    }
    const [ra, dec] = equatorial(lon, lat, eps);
    const ha = mod(lst - ra + Math.PI, TWO_PI5) - Math.PI;
    const phi = latDeg * DEG;
    const alt = Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(ha));
    return [alt, ha, dist];
  }
  function bisect(f, a, b, iters = 45) {
    let fa = f(a);
    for (let i = 0; i < iters; i++) {
      const m = (a + b) / 2;
      if (fa * f(m) <= 0) {
        b = m;
      } else {
        a = m;
        fa = f(a);
      }
    }
    return (a + b) / 2;
  }
  function riseSet(engine, body, jdStart, latDeg, lonDeg, kind = "rise", opts = {}) {
    const altM = opts.altM ?? 0;
    const pressure = opts.pressure ?? 1013.25;
    const tempC = opts.tempC ?? 15;
    const searchDays = opts.searchDays ?? 2;
    const scale = pressure / 1010 * (283 / (273 + tempC));
    if (kind === "mtransit" || kind === "itransit") {
      const target = kind === "mtransit" ? 0 : Math.PI;
      const g = (t) => {
        const [, ha] = topoAltHa(engine, body, t, latDeg, lonDeg, altM);
        return mod(ha - target + Math.PI, TWO_PI5) - Math.PI;
      };
      const step2 = 1 / 48;
      let prev2 = g(jdStart);
      for (let t = jdStart + step2; t <= jdStart + searchDays; t += step2) {
        const cur = g(t);
        if (prev2 * cur < 0 && Math.abs(cur - prev2) < Math.PI) {
          return bisect(g, t - step2, t);
        }
        prev2 = cur;
      }
      return null;
    }
    const f = (t) => {
      const [alt, , dist] = topoAltHa(engine, body, t, latDeg, lonDeg, altM);
      let sd = 0;
      const diam = DIAMETER_KM[body];
      if (!opts.discCenter && diam !== void 0 && dist !== null) {
        sd = Math.asin(diam / (2 * dist * KM_PER_AU3));
      }
      const h0 = -(R0_ARCMIN / 60 * scale * DEG + sd);
      return alt - h0;
    };
    const step = 1 / 48;
    let prev = f(jdStart);
    for (let t = jdStart + step; t <= jdStart + searchDays; t += step) {
      const cur = f(t);
      if (kind === "rise" && prev < 0 && cur >= 0 || kind === "set" && prev > 0 && cur <= 0) {
        return bisect(f, t - step, t);
      }
      prev = cur;
    }
    return null;
  }
  function crossings(engine, body, targetLon, jdStart, jdEnd, zodiac = "tropical", maxHits = 60) {
    const f = (t) => mod(engine.longitude(body, t, { zodiac }) - targetLon + 180, 360) - 180;
    const fast = body === "moon" || body === "mean_node" || body === "true_node" || body === "mean_lilith" || body === "true_lilith";
    const step = fast ? 0.25 : 1;
    const out = [];
    let prev = f(jdStart);
    for (let t = jdStart + step; t <= jdEnd && out.length < maxHits; t += step) {
      const cur = f(t);
      if (prev * cur < 0 && Math.abs(cur - prev) < 180) {
        out.push(bisect(f, t - step, t));
      }
      prev = cur;
    }
    return out;
  }
  function lunarPhases(engine, jdStart, jdEnd, maxHits = 60) {
    const elong = (t) => mod(engine.longitude("moon", t) - engine.longitude("sun", t), 360);
    const names = [
      [0, "new"],
      [90, "first_quarter"],
      [180, "full"],
      [270, "last_quarter"]
    ];
    const out = [];
    const step = 0.25;
    for (const [angle, name] of names) {
      const f = (t) => mod(elong(t) - angle + 180, 360) - 180;
      let prev = f(jdStart);
      for (let t = jdStart + step; t <= jdEnd && out.length < maxHits; t += step) {
        const cur = f(t);
        if (prev * cur < 0 && Math.abs(cur - prev) < 180) {
          out.push([bisect(f, t - step, t), name]);
        }
        prev = cur;
      }
    }
    out.sort((a, b) => a[0] - b[0]);
    return out;
  }
  function stations(engine, body, jdStart, jdEnd, maxHits = 30) {
    const h = 0.25;
    const speed = (t) => {
      const l0 = engine.longitude(body, t - h);
      const l1 = engine.longitude(body, t + h);
      return (mod(l1 - l0 + 540, 360) - 180) / (2 * h);
    };
    const step = 2;
    const out = [];
    let prev = speed(jdStart);
    for (let t = jdStart + step; t <= jdEnd && out.length < maxHits; t += step) {
      const cur = speed(t);
      if (prev * cur < 0) {
        out.push([bisect(speed, t - step, t), prev > 0 ? "retrograde" : "direct"]);
      }
      prev = cur;
    }
    return out;
  }
  function gauquelinSector(engine, body, jdUt, latDeg, lonDeg) {
    const surrounding = (kind) => {
      let t = riseSet(engine, body, jdUt - 1.3, latDeg, lonDeg, kind, { discCenter: true });
      let prev = null;
      while (t !== null && t <= jdUt) {
        prev = t;
        t = riseSet(engine, body, t + 1e-4, latDeg, lonDeg, kind, { discCenter: true });
      }
      return [prev, t];
    };
    const [prevRise] = surrounding("rise");
    const [prevSet, nextSetA] = surrounding("set");
    if (prevRise === null || prevSet === null)
      return null;
    if (prevRise > prevSet) {
      if (nextSetA === null)
        return null;
      return 1 + 18 * (jdUt - prevRise) / (nextSetA - prevRise);
    }
    const [, nextRise] = surrounding("rise");
    if (nextRise === null)
      return null;
    return 19 + 18 * (jdUt - prevSet) / (nextRise - prevSet);
  }

  // node_modules/caelus/dist/src/derived.js
  var TROPICAL_YEAR = 365.24219;
  function midpointLon(a, b) {
    const d = mod(b - a + 180, 360) - 180;
    return mod(a + d / 2, 360);
  }
  function returns(engine, body, natalJd, jdStart, jdEnd, zodiac = "tropical", maxHits = 60) {
    const natalLon = engine.longitude(body, natalJd, { zodiac });
    return crossings(engine, body, natalLon, jdStart, jdEnd, zodiac, maxHits);
  }
  function solarReturn(engine, natalJd, jdStart, jdEnd, zodiac = "tropical") {
    return returns(engine, "sun", natalJd, jdStart, jdEnd, zodiac);
  }
  function lunarReturn(engine, natalJd, jdStart, jdEnd, zodiac = "tropical") {
    return returns(engine, "moon", natalJd, jdStart, jdEnd, zodiac);
  }
  function progressedJd(natalJd, targetJd, yearLength = TROPICAL_YEAR) {
    return natalJd + (targetJd - natalJd) / yearLength;
  }
  function progressedLongitude(engine, body, natalJd, targetJd, yearLength = TROPICAL_YEAR, zodiac = "tropical") {
    return engine.longitude(body, progressedJd(natalJd, targetJd, yearLength), { zodiac });
  }
  function solarArc(engine, natalJd, targetJd, yearLength = TROPICAL_YEAR, zodiac = "tropical") {
    const pjd = progressedJd(natalJd, targetJd, yearLength);
    const natalSun = engine.longitude("sun", natalJd, { zodiac });
    const progSun = engine.longitude("sun", pjd, { zodiac });
    return mod(progSun - natalSun, 360);
  }
  function directedLongitude(engine, body, natalJd, targetJd, yearLength = TROPICAL_YEAR, zodiac = "tropical") {
    const arc = solarArc(engine, natalJd, targetJd, yearLength, zodiac);
    return mod(engine.longitude(body, natalJd, { zodiac }) + arc, 360);
  }
  function compositeLongitudes(engine, jdA, jdB, bodies, zodiac = "tropical") {
    const out = {};
    for (const body of bodies) {
      const la = engine.longitude(body, jdA, { zodiac });
      const lb = engine.longitude(body, jdB, { zodiac });
      out[body] = midpointLon(la, lb);
    }
    return out;
  }
  function davisonParams(jdA, jdB, latA, lonEastA, latB, lonEastB) {
    const midJd = 0.5 * (jdA + jdB);
    const midLat = 0.5 * (latA + latB);
    let midLon = midpointLon(mod(lonEastA, 360), mod(lonEastB, 360));
    if (midLon > 180)
      midLon -= 360;
    return [midJd, midLat, midLon];
  }
  function harmonicLongitude(lon, n) {
    return mod(lon * n, 360);
  }
  function harmonicChart(engine, jd, bodies, n, zodiac = "tropical") {
    const out = {};
    for (const b of bodies)
      out[b] = harmonicLongitude(engine.longitude(b, jd, { zodiac }), n);
    return out;
  }
  function antiscion(lon) {
    return mod(180 - lon, 360);
  }
  function contraAntiscion(lon) {
    return mod(-lon, 360);
  }
  function declinationAspect(decA, decB, orb = 1) {
    if (Math.abs(decA - decB) <= orb)
      return "parallel";
    if (Math.abs(decA + decB) <= orb)
      return "contraparallel";
    return null;
  }
  function declinationAspects(engine, bodies, jd, orb = 1) {
    const decs = {};
    for (const b of bodies)
      decs[b] = engine.position(b, jd).dec;
    const out = [];
    for (let i = 0; i < bodies.length; i++) {
      for (let j = i + 1; j < bodies.length; j++) {
        const kind = declinationAspect(decs[bodies[i]], decs[bodies[j]], orb);
        if (kind)
          out.push({ a: bodies[i], b: bodies[j], kind });
      }
    }
    return out;
  }
  function outOfBoundsMargin(engine, body, jd) {
    const dec = engine.position(body, jd).dec;
    const eps = meanObliquity(jdTT(jd)) / DEG;
    return Math.abs(dec) - eps;
  }
  function outOfBounds(engine, body, jd) {
    return outOfBoundsMargin(engine, body, jd) > 0;
  }
  function dignityOf(engine, body, jd, zodiac = "tropical") {
    const lon = engine.longitude(body, jd, { zodiac });
    return dignities(body, mod(Math.floor(lon / 30), 12));
  }
  var DIURNAL = /* @__PURE__ */ new Set(["sun", "jupiter", "saturn"]);
  var NOCTURNAL = /* @__PURE__ */ new Set(["moon", "venus", "mars"]);
  function isDayChart(engine, jd, lat, lonEast) {
    const sun = engine.position("sun", jd);
    const [, alt] = azAlt(engine.data, sun.lon, sun.lat, jd, lat, lonEast);
    return alt > 0;
  }
  function planetarySect(body) {
    if (DIURNAL.has(body))
      return "diurnal";
    if (NOCTURNAL.has(body))
      return "nocturnal";
    return null;
  }
  function inSect(body, dayChart) {
    const s = planetarySect(body);
    if (s === null)
      return null;
    return s === "diurnal" === Boolean(dayChart);
  }

  // node_modules/caelus/dist/src/lots.js
  var HERMETIC_LOTS = [
    "fortune",
    "spirit",
    "eros",
    "necessity",
    "courage",
    "victory",
    "nemesis"
  ];
  function lot(asc, a, b, day) {
    return mod(asc + (day ? a - b : b - a), 360);
  }
  function lotFortune(asc, sun, moon, day) {
    return lot(asc, moon, sun, day);
  }
  function lotSpirit(asc, sun, moon, day) {
    return lot(asc, sun, moon, day);
  }
  function hermeticLots(asc, day, sun, moon, mercury, venus, mars, jupiter, saturn) {
    const fortune = lotFortune(asc, sun, moon, day);
    const spirit = lotSpirit(asc, sun, moon, day);
    return {
      fortune,
      spirit,
      eros: lot(asc, venus, spirit, day),
      necessity: lot(asc, fortune, mercury, day),
      courage: lot(asc, fortune, mars, day),
      victory: lot(asc, jupiter, spirit, day),
      nemesis: lot(asc, fortune, saturn, day)
    };
  }
  function lots(engine, jdUt, lat, lonEast, zodiac = "tropical") {
    const asc = engine.chartAt(jdUt, lat, lonEast, { zodiac }).angles.asc;
    const day = isDayChart(engine, jdUt, lat, lonEast);
    const lon = (b) => engine.longitude(b, jdUt, { zodiac });
    const h = hermeticLots(asc, day, lon("sun"), lon("moon"), lon("mercury"), lon("venus"), lon("mars"), lon("jupiter"), lon("saturn"));
    return { day, ...h };
  }

  // node_modules/caelus/dist/src/chart.js
  var TWO_PI6 = 2 * Math.PI;
  var BODIES = [
    "sun",
    "moon",
    "mercury",
    "venus",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto",
    "chiron",
    "mean_node",
    "true_node"
  ];
  var EXTRA_BODIES = ["mean_lilith", "true_lilith"];
  var NOT_ASPECTABLE = /* @__PURE__ */ new Set([
    "mean_node",
    "true_node",
    "mean_lilith",
    "true_lilith"
  ]);
  var SIGNS = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ];
  var ASPECTS = {
    conjunction: 0,
    sextile: 60,
    square: 90,
    trine: 120,
    opposition: 180
  };
  var DEFAULT_ORBS = {
    conjunction: 8,
    sextile: 4,
    square: 7,
    trine: 7,
    opposition: 8
  };
  var HOUSE_SYSTEMS = [
    "placidus",
    "porphyry",
    "equal",
    "whole_sign",
    "koch",
    "regiomontanus",
    "campanus",
    "alcabitius",
    "morinus",
    "meridian",
    "polich_page",
    "vehlow"
  ];
  var HOUSE_ALIASES = {
    whole: "whole_sign",
    signs: "whole_sign",
    wholesign: "whole_sign",
    equal_house: "equal",
    porphyrius: "porphyry",
    placidean: "placidus"
  };
  function normalizeHouseSystem(raw) {
    const key = raw.trim().toLowerCase().replace(/[\s-]+/g, "_");
    if (HOUSE_SYSTEMS.includes(key))
      return key;
    const alias = HOUSE_ALIASES[key];
    if (alias)
      return alias;
    throw new Error(`unknown house system '${raw}' (valid: ${HOUSE_SYSTEMS.join(", ")})`);
  }
  var ELEMENTS = ["fire", "earth", "air", "water"];
  var MODALITIES = ["cardinal", "fixed", "mutable"];
  function signIndex(sign) {
    return typeof sign === "number" ? mod(Math.floor(sign), 12) : SIGNS.indexOf(sign);
  }
  function element(sign) {
    return ELEMENTS[mod(signIndex(sign), 4)];
  }
  function modality(sign) {
    return MODALITIES[mod(signIndex(sign), 3)];
  }
  function quadrant(house) {
    return Math.floor(mod(house - 1, 12) / 3) + 1;
  }
  var DOMICILE = {
    sun: [4],
    moon: [3],
    mercury: [2, 5],
    venus: [1, 6],
    mars: [0, 7],
    jupiter: [8, 11],
    saturn: [9, 10]
  };
  var EXALTATION = {
    sun: 0,
    moon: 1,
    mercury: 5,
    venus: 11,
    mars: 9,
    jupiter: 3,
    saturn: 6
  };
  function dignities(body, sign) {
    const idx = signIndex(sign);
    const dom = DOMICILE[body] ?? [];
    const out = [];
    if (dom.includes(idx))
      out.push("domicile");
    if (EXALTATION[body] === idx)
      out.push("exaltation");
    if (dom.map((d) => mod(d + 6, 12)).includes(idx))
      out.push("detriment");
    if (body in EXALTATION && mod(EXALTATION[body] + 6, 12) === idx)
      out.push("fall");
    return out;
  }
  var KM_PER_AU4 = 1495978707e-1;
  var JD_SANE_MIN = -2e6;
  var JD_SANE_MAX = 9e6;
  function parseZodiac(zodiac) {
    if (zodiac === "tropical")
      return null;
    if (zodiac.startsWith("sidereal:")) {
      const mode = zodiac.slice("sidereal:".length);
      if (AYANAMSA_J2000[mode] !== void 0 || STAR_AYANAMSAS[mode])
        return mode;
    }
    throw new Error(`unknown zodiac ${JSON.stringify(zodiac)}`);
  }
  var STAR_AYANAMSAS = {
    galcent_0sag: ["Galactic Center", 240],
    true_citra: ["Spica", 180]
  };
  var VSOP_BODIES = /* @__PURE__ */ new Set([
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune"
  ]);
  var Engine = class {
    data;
    moonCheb;
    chironCheb;
    packs = /* @__PURE__ */ new Map();
    runtimeSources = /* @__PURE__ */ new Map();
    renderAttrs = /* @__PURE__ */ new Map();
    constructor(data) {
      this.data = data;
      this.moonCheb = data.moonCheb ? new ChebSeries(data.moonCheb) : null;
      this.chironCheb = data.chiron ? new ChebSeries(data.chiron) : null;
    }
    /**
     * Register a runtime {@link XyzSource} under a body id, so it resolves through
     * {@link Engine.position}, {@link Engine.longitude}, {@link Engine.chartAt},
     * and everything built on them (transits, returns, retrograde, SkyView) with
     * no special-casing — exactly like a baked-in Chebyshev or Kepler pack. The
     * source yields heliocentric ecliptic-J2000 xyz in AU at a **TT** Julian Day,
     * the same contract Chiron and the Uranian bodies satisfy; the engine applies
     * light-time, aberration, precession and nutation to it like any real body.
     *
     * This is the seam the `synthetic` module plugs imaginary bodies into (see
     * {@link registerSyntheticSystem}). A registered id shadows a baked-in pack of
     * the same name and persists for the engine's lifetime.
     *
     * @param id The body id to register (any string).
     * @param source A heliocentric xyz source; see {@link XyzSource}.
     * @returns This engine, for chaining.
     */
    registerSource(id, source) {
      this.runtimeSources.set(id, source);
      this.packs.set(id, source);
      return this;
    }
    /** Author how a runtime body should look in SkyView (size, magnitude, colour).
     *  Position still comes from {@link registerSource}; this owns appearance only. */
    registerRender(id, render) {
      this.renderAttrs.set(id, render);
      return this;
    }
    /** SkyView appearance for a registered body, if any. */
    renderFor(id) {
      return this.renderAttrs.get(id);
    }
    /** Whether `body` resolves through the generic packed-source path: a baked-in
     *  Chebyshev/Kepler pack or a runtime source from {@link registerSource}. */
    hasPack(body) {
      return !!(this.data.chebPacks?.[body] || this.data.keplerPack?.bodies[body]) || this.runtimeSources.has(body);
    }
    pack(body) {
      let s = this.packs.get(body);
      if (!s) {
        const raw = this.data.chebPacks?.[body];
        const kp = this.data.keplerPack;
        if (raw)
          s = new ChebSeries(raw);
        else if (kp?.bodies[body])
          s = new KeplerOrbit(kp.bodies[body], kp.epoch);
        else
          throw new Error(`no data loaded for body '${body}'`);
        this.packs.set(body, s);
      }
      return s;
    }
    moonInRange(jde) {
      return !!this.moonCheb && this.moonCheb.jd0 <= jde - 0.1 && jde + 0.1 <= this.moonCheb.jd1;
    }
    /**
     * The body ids this engine can compute, given the data pack it was
     * constructed with. The core set is always present; extra asteroids and
     * hypotheticals appear only when their Chebyshev or Kepler packs are loaded.
     *
     * @returns Body ids accepted by {@link Engine.position},
     *   {@link Engine.longitude}, and {@link Engine.chart}.
     * @example
     * ```ts
     * engine.bodies().includes("ceres"); // true only if the Ceres pack is loaded
     * ```
     */
    bodies() {
      return [
        ...[...BODIES, ...EXTRA_BODIES].filter((b) => b !== "chiron" || this.chironCheb),
        ...Object.keys(this.data.chebPacks ?? {}),
        ...Object.keys(this.data.keplerPack?.bodies ?? {}),
        ...this.runtimeSources.keys()
      ];
    }
    /**
     * Low-level apparent geocentric ecliptic coordinates at a **TT** Julian Day,
     * in **radians**. This is the engine's internal building block for the events
     * module; it takes TT (not UT) and does no zodiac shift. Most callers want
     * {@link Engine.position} (full Position in degrees) or
     * {@link Engine.longitude} (longitude in degrees) instead.
     *
     * @param body A body id from {@link Engine.bodies}.
     * @param jde Julian Day in **TT** (Terrestrial Time), e.g. `jdTT(jdUt)`.
     * @returns `[lon, lat, dist]` — longitude and latitude in **radians** (true
     *   equinox of date), distance in AU, or `null` distance for nodes and
     *   Lilith points.
     * @throws Error if no data is loaded for `body`.
     */
    ecliptic(body, jde) {
      if (body === "sun")
        return sunApparent(this.data, jde);
      if (body === "moon") {
        const [lon, lat, km] = this.moonInRange(jde) ? moonApparentPrecise(this.data, this.moonCheb, jde) : moonApparentSeries(this.data, jde);
        return [lon, lat, km / KM_PER_AU4];
      }
      if (body === "pluto" && !this.data.chebPacks?.pluto)
        return plutoApparent(this.data, jde);
      if (body === "chiron") {
        if (!this.chironCheb)
          throw new Error("chiron data not loaded");
        return chironApparent(this.data, this.chironCheb, jde);
      }
      if (body === "mean_node")
        return [meanNode(this.data, jde), 0, null];
      if (body === "true_node") {
        return [
          this.moonInRange(jde) ? trueNodePrecise(this.data, this.moonCheb, jde) : trueNodeSeries(this.data, jde),
          0,
          null
        ];
      }
      if (body === "mean_lilith") {
        const [lon, lat] = meanLilith(this.data, jde);
        return [lon, lat, null];
      }
      if (body === "true_lilith") {
        const [lon, lat, km] = this.moonInRange(jde) ? oscApogeePrecise(this.data, this.moonCheb, jde) : oscApogeeSeries(this.data, jde);
        return [lon, lat, km / KM_PER_AU4];
      }
      if (this.hasPack(body)) {
        return chironApparent(this.data, this.pack(body), jde);
      }
      if (this.data.vsop[body])
        return planetApparent(this.data, body, jde);
      throw new Error(`no data loaded for body '${body}'`);
    }
    /** Degrees to subtract from a true-equinox tropical longitude. */
    ayanShift(jde, mode) {
      const star = STAR_AYANAMSAS[mode];
      if (star) {
        const s = this.data.fixedStars?.stars[star[0]];
        if (!s)
          throw new Error(`zodiac 'sidereal:${mode}' needs the fixed-star catalog loaded`);
        const [lon] = starApparent(this.data, s, jde);
        return mod(lon / DEG - star[1], 360);
      }
      return mod(nutation(this.data, jde)[0] / DEG + ayanamsa(jde, mode), 360);
    }
    /**
     * Apparent place of a catalog fixed star at a Julian Day (UT). Requires the
     * fixed-star catalog to be present in the data pack; see
     * {@link Engine.starNames} for the available names.
     *
     * @param name Catalog star name, e.g. `"Regulus"` (see
     *   {@link Engine.starNames}).
     * @param jdUt Julian Day in UT.
     * @param opts Calculation options; only `zodiac` is meaningful here (tropical
     *   by default, or a sidereal ayanamsa).
     * @returns Ecliptic `lon`/`lat`, equatorial `ra`/`dec` (all degrees), the
     *   zodiac `sign` and `signDeg`, and the star's visual magnitude `mag`.
     * @throws Error if `name` is not in the loaded catalog.
     * @example
     * ```ts
     * const regulus = engine.fixedStar("Regulus", julianDay(2025, 1, 1));
     * regulus.sign;  // e.g. "Leo"
     * regulus.mag;   // apparent magnitude
     * ```
     */
    fixedStar(name, jdUt, opts = {}) {
      const s = this.data.fixedStars?.stars[name];
      if (!s)
        throw new Error(`no fixed-star catalog entry for '${name}'`);
      const mode = parseZodiac(opts.zodiac ?? "tropical");
      const jde = jdTT(jdUt);
      const [lonR, latR] = starApparent(this.data, s, jde);
      const [ra, dec] = equatorial(lonR, latR, trueObliquity(this.data, jde));
      let lon = lonR / DEG;
      if (mode !== null)
        lon = mod(lon - this.ayanShift(jde, mode), 360);
      return {
        lon,
        lat: latR / DEG,
        ra: ra / DEG,
        dec: dec / DEG,
        mag: s.mag,
        sign: SIGNS[Math.floor(lon / 30)],
        signDeg: mod(lon, 30)
      };
    }
    /**
     * The names in the loaded fixed-star catalog, sorted. Empty if no catalog is
     * present in the data pack. Pass any of these to {@link Engine.fixedStar}.
     *
     * @returns Sorted catalog star names.
     */
    starNames() {
      return Object.keys(this.data.fixedStars?.stars ?? {}).sort();
    }
    /**
     * Fixed-star conjunctions in a chart: each body within `orb` of a catalog
     * star, in the chart's own zodiac. Feed the result to
     * {@link interpretationContext} as `stars` to project `star` fact atoms (the
     * Chart itself carries no star catalog).
     *
     * @param chart A chart from {@link Engine.chart} / {@link Engine.chartAt}.
     * @param opts `orb` (default 1°); `stars` to restrict to named stars (then no
     *   magnitude filter); else `maxMag` keeps only stars brighter than it
     *   (default 2.5) so obscure catalog entries do not flood the result.
     * @returns Conjunctions sorted by increasing orb.
     */
    starConjunctions(chart, opts = {}) {
      const catalog = this.data.fixedStars?.stars;
      if (!catalog)
        return [];
      const orbLimit = opts.orb ?? 1;
      const names = opts.stars ?? Object.keys(catalog);
      const useMag = opts.stars === void 0;
      const maxMag = opts.maxMag ?? 2.5;
      const out = [];
      for (const name of names) {
        const s = catalog[name];
        if (!s || useMag && s.mag > maxMag)
          continue;
        const starLon = this.fixedStar(name, chart.jdUt, { zodiac: chart.zodiac }).lon;
        for (const [body, p] of Object.entries(chart.bodies)) {
          if (!p)
            continue;
          const sep = Math.abs(mod(p.lon - starLon + 180, 360) - 180);
          if (sep <= orbLimit)
            out.push({ body, star: name, orb: sep });
        }
      }
      out.sort((a, b) => a.orb - b.orb);
      return out;
    }
    /**
     * The seven Hermetic lots of a chart, each placed by sign and house. Sect is
     * read from the Sun (above the horizon -> a day chart). Feed the result to
     * {@link interpretationContext} as `lots` to project `lot` fact atoms.
     *
     * @param chart A chart from {@link Engine.chart} / {@link Engine.chartAt}; it
     *   must carry the seven classical planets.
     * @returns One entry per lot with its longitude, sign, `signDeg`, and house,
     *   or an empty array if a required planet is absent.
     */
    lots(chart) {
      const b = chart.bodies;
      const need = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"];
      if (need.some((k) => !b[k]))
        return [];
      const day = b.sun.house >= 7;
      const h = hermeticLots(chart.angles.asc, day, b.sun.lon, b.moon.lon, b.mercury.lon, b.venus.lon, b.mars.lon, b.jupiter.lon, b.saturn.lon);
      return HERMETIC_LOTS.map((lot2) => {
        const lon = mod(h[lot2], 360);
        return {
          lot: lot2,
          lon,
          sign: SIGNS[Math.floor(lon / 30)],
          signDeg: mod(lon, 30),
          house: houseIndex(lon, chart.cusps)
        };
      });
    }
    lonOnly(body, jdUt, mode, topo) {
      const jde = jdTT(jdUt);
      let [lon, lat, dist] = this.ecliptic(body, jde);
      if (topo !== null && dist !== null) {
        const lst = mod(gast(this.data, jdUt) + topo.lonEast * DEG, TWO_PI6);
        [lon, lat, dist] = topocentricEcl(lon, lat, dist, lst, topo.lat * DEG, topo.altM ?? 0, trueObliquity(this.data, jde));
      }
      let lonDeg = lon / DEG;
      if (mode !== null)
        lonDeg = mod(lonDeg - this.ayanShift(jde, mode), 360);
      return lonDeg;
    }
    /**
     * Apparent geocentric ecliptic longitude of a body, in degrees `[0, 360)`,
     * at a Julian Day (UT). The fast path when you need only a longitude — a
     * transit position, an aspect angle, a sign — without the full
     * {@link Position}. In the tropical zodiac this is referred to the true
     * equinox of date; sidereal subtracts the ayanamsa.
     *
     * @param body A body id from {@link Engine.bodies}.
     * @param jdUt Julian Day in UT.
     * @param opts Calculation options: `zodiac` (tropical or a sidereal
     *   ayanamsa), and `topocentric` with an `observer` for a parallax-corrected
     *   place.
     * @returns Ecliptic longitude in degrees, `[0, 360)`.
     * @example
     * ```ts
     * engine.longitude("mars", julianDay(2025, 6, 1));               // tropical
     * engine.longitude("mars", julianDay(2025, 6, 1), { zodiac: "sidereal:lahiri" });
     * ```
     * @see {@link Engine.position} for speed, retrograde, latitude, and distance.
     */
    longitude(body, jdUt, opts = {}) {
      const mode = parseZodiac(opts.zodiac ?? "tropical");
      const topo = opts.topocentric ? opts.observer ?? null : null;
      return this.lonOnly(body, jdUt, mode, topo);
    }
    /**
     * Geometric heliocentric ecliptic position (Sun-centred) at a Julian Day
     * (UT), referred to the ecliptic of date. Unlike {@link Engine.position},
     * this is a geometric place — no light-time, aberration, or nutation — and is
     * undefined for the Sun, the Moon, and the lunar nodes.
     *
     * @param body A Sun-orbiting body (planet or asteroid) from
     *   {@link Engine.bodies}.
     * @param jdUt Julian Day in UT.
     * @returns Heliocentric `lon`/`lat` in degrees and `dist` in AU.
     * @throws Error if `body` has no heliocentric solution (e.g. the Moon).
     */
    heliocentric(body, jdUt) {
      const jde = jdTT(jdUt);
      let l;
      let b;
      let r;
      if (body === "pluto" && !this.data.chebPacks?.pluto) {
        [l, b, r] = plutoHeliocentric(this.data, jde);
        [l, b] = precessEcliptic(l, b, J2000, jde);
      } else if (body === "chiron") {
        if (!this.chironCheb)
          throw new Error("chiron data not loaded");
        const [x, y, z] = this.chironCheb.xyz(jde);
        r = Math.sqrt(x * x + y * y + z * z);
        l = mod(Math.atan2(y, x), TWO_PI6);
        b = Math.atan2(z, Math.hypot(x, y));
        [l, b] = precessEcliptic(l, b, J2000, jde);
      } else if (this.hasPack(body)) {
        const [x, y, z] = this.pack(body).xyz(jde);
        r = Math.sqrt(x * x + y * y + z * z);
        l = mod(Math.atan2(y, x), TWO_PI6);
        b = Math.atan2(z, Math.hypot(x, y));
        [l, b] = precessEcliptic(l, b, J2000, jde);
      } else if (VSOP_BODIES.has(body) && this.data.vsop[body]) {
        [l, b, r] = vsopHeliocentric(this.data.vsop[body], jde);
      } else {
        throw new Error(`no heliocentric position for '${body}'`);
      }
      return { lon: l / DEG, lat: b / DEG, dist: r };
    }
    /**
     * Full apparent position of a body at a Julian Day (UT): ecliptic longitude
     * and daily speed (with a retrograde flag), the zodiac sign, ecliptic
     * latitude, geocentric distance, and equatorial right ascension and
     * declination. The general-purpose single-body call; use
     * {@link Engine.longitude} when you need only the longitude.
     *
     * @param body A body id from {@link Engine.bodies}.
     * @param jdUt Julian Day in UT.
     * @param opts Calculation options: `zodiac` (tropical or a sidereal
     *   ayanamsa), and `topocentric` with an `observer` for a parallax-corrected
     *   place.
     * @returns A {@link Position}: `lon`, `speed`, `retrograde`, `sign`,
     *   `signDeg`, `lat`, `dist` (AU; `null` for nodes and Lilith), `ra`, `dec`.
     * @example
     * ```ts
     * const mars = engine.position("mars", julianDay(2025, 6, 1));
     * mars.retrograde; // boolean
     * mars.speed;      // degrees/day (negative when retrograde)
     * ```
     */
    position(body, jdUt, opts = {}) {
      const mode = parseZodiac(opts.zodiac ?? "tropical");
      const topo = opts.topocentric ? opts.observer ?? null : null;
      const jde = jdTT(jdUt);
      let [lonR, latR, dist] = this.ecliptic(body, jde);
      if (topo !== null && dist !== null) {
        const lst = mod(gast(this.data, jdUt) + topo.lonEast * DEG, TWO_PI6);
        [lonR, latR, dist] = topocentricEcl(lonR, latR, dist, lst, topo.lat * DEG, topo.altM ?? 0, trueObliquity(this.data, jde));
      }
      const [ra, dec] = equatorial(lonR, latR, trueObliquity(this.data, jde));
      let lon = lonR / DEG;
      if (mode !== null)
        lon = mod(lon - this.ayanShift(jde, mode), 360);
      const h = 0.25;
      const l0 = this.lonOnly(body, jdUt - h, mode, topo);
      const l1 = this.lonOnly(body, jdUt + h, mode, topo);
      const speed = (mod(l1 - l0 + 540, 360) - 180) / (2 * h);
      return {
        lon,
        speed,
        retrograde: speed < 0,
        sign: SIGNS[Math.floor(lon / 30)],
        signDeg: mod(lon, 30),
        lat: latR / DEG,
        dist,
        ra: ra / DEG,
        dec: dec / DEG
      };
    }
    /**
     * Full natal chart: body positions, house cusps, angles, and aspects for one
     * instant and place.
     *
     * The first six arguments are calendar fields in **UT** — not local civil
     * time, and not a Julian Day. Passing a JD in `y` builds an absurd instant and
     * throws `RangeError`; use {@link Engine.chartAt} for a chart from a JD. For a
     * birth time given in a local time zone, resolve it to UT first (see the
     * `caelus-birth` package).
     *
     * @param y Year in UT, e.g. `1990` — a calendar year, not a Julian Day.
     * @param mo Month, `1`–`12`.
     * @param d Day of month, `1`–`31`.
     * @param h Hour in UT, `0`–`23`.
     * @param mi Minute, `0`–`59`.
     * @param s Second, `0`–`59`.
     * @param lat Geographic latitude in degrees, north positive.
     * @param lonEast Geographic longitude in degrees, **east positive** (so
     *   82.46° W is `-82.46`).
     * @param opts A house-system name (e.g. `"placidus"`) or a
     *   {@link ChartOptions} bag for zodiac, topocentric mode, extra bodies, and
     *   custom orbs. Defaults to Placidus houses in the tropical zodiac.
     * @returns A {@link Chart}: `bodies`, `cusps`, `angles`, and `aspects`, plus
     *   `jdUt` and the house system actually used (Placidus and Koch fall back to
     *   whole-sign above the polar circles). A body outside its fitted range
     *   (e.g. Chiron before ~1850) is omitted from `bodies` and listed in
     *   `unavailable` rather than failing the whole chart.
     * @throws RangeError only if the instant itself is absurd — far outside any
     *   supported epoch — which almost always means a Julian Day was passed where
     *   calendar fields belong.
     * @example
     * ```ts
     * // 1990-06-10 14:30 UT at Tampa, FL (27.95° N, 82.46° W), Placidus houses
     * const chart = engine.chart(1990, 6, 10, 14, 30, 0, 27.95, -82.46, "placidus");
     * chart.bodies.sun.lon; // Sun's ecliptic longitude, degrees
     * chart.angles.asc;     // Ascendant, degrees
     * ```
     * @see {@link Engine.chartAt} to build the same chart from a Julian Day.
     */
    chart(y, mo, d, h, mi, s, lat, lonEast, opts = "placidus") {
      return this.chartAt(julianDay(y, mo, d, h, mi, s), lat, lonEast, opts);
    }
    /**
     * Full natal chart from a Julian Day (UT) — identical output to
     * {@link Engine.chart}, without the calendar round-trip. Reach for this when
     * you already hold a JD: transit and event scans, `rankMoments` winners, or
     * `position`/`longitude` workflows.
     *
     * @param jdUt Julian Day in UT, e.g. from {@link julianDay} or a scan.
     * @param lat Geographic latitude in degrees, north positive.
     * @param lonEast Geographic longitude in degrees, east positive.
     * @param opts A house-system name or a {@link ChartOptions} bag. Defaults to
     *   Placidus houses in the tropical zodiac.
     * @returns The same {@link Chart} shape returned by {@link Engine.chart}.
     * @example
     * ```ts
     * const jd = julianDay(1990, 6, 10, 14, 30, 0);
     * const chart = engine.chartAt(jd, 27.95, -82.46, "placidus");
     * ```
     * @see {@link Engine.chart} for the calendar-field entry point.
     */
    chartAt(jdUt, lat, lonEast, opts = "placidus") {
      if (!Number.isFinite(jdUt) || jdUt < JD_SANE_MIN || jdUt > JD_SANE_MAX) {
        throw new RangeError(`chart instant (jd ${jdUt}) is far outside the supported range; if you meant a calendar date, pass year/month/day to chart() rather than a Julian Day.`);
      }
      const o = typeof opts === "string" ? { houseSystem: opts } : opts;
      const houseSystem = normalizeHouseSystem(o.houseSystem ?? "placidus");
      const zodiac = o.zodiac ?? "tropical";
      const mode = parseZodiac(zodiac);
      const calc = {
        zodiac,
        topocentric: o.topocentric,
        observer: o.topocentric ? o.observer ?? { lat, lonEast, altM: 0 } : void 0
      };
      const names = [
        ...BODIES,
        ...(o.bodies ?? []).filter((b) => !BODIES.includes(b))
      ];
      const bodies = {};
      const unavailable = [];
      for (const b of names) {
        try {
          bodies[b] = this.position(b, jdUt, calc);
        } catch (e) {
          if (e instanceof RangeError)
            unavailable.push(b);
          else
            throw e;
        }
      }
      const [asc, mc, armc, eps] = angles(this.data, jdUt, lat, lonEast);
      const [vtx, east] = vertexEastPoint(armc, lat * DEG, eps);
      const phi = lat * DEG;
      let used = houseSystem;
      let cusps;
      try {
        if (houseSystem === "placidus") {
          if (Math.abs(lat) >= 66) {
            throw new RangeError("placidus undefined above polar circles");
          }
          cusps = housesPlacidus(armc, phi, eps);
        } else if (houseSystem === "porphyry") {
          cusps = housesPorphyry(asc, mc);
        } else if (houseSystem === "equal") {
          cusps = housesEqual(asc);
        } else if (houseSystem === "whole_sign") {
          cusps = housesWholeSign(asc);
        } else if (houseSystem === "koch") {
          cusps = housesKoch(armc, phi, eps);
        } else if (houseSystem === "regiomontanus") {
          cusps = housesRegiomontanus(armc, phi, eps);
        } else if (houseSystem === "campanus") {
          cusps = housesCampanus(armc, phi, eps);
        } else if (houseSystem === "alcabitius") {
          cusps = housesAlcabitius(armc, phi, eps);
        } else if (houseSystem === "morinus") {
          cusps = housesMorinus(armc, phi, eps);
        } else if (houseSystem === "meridian") {
          cusps = housesMeridian(armc, phi, eps);
        } else if (houseSystem === "polich_page") {
          cusps = housesPolichPage(armc, phi, eps);
        } else if (houseSystem === "vehlow") {
          cusps = housesVehlow(armc, phi, eps);
        } else {
          throw new Error(`unknown house system '${houseSystem}' (valid: ${HOUSE_SYSTEMS.join(", ")})`);
        }
      } catch (err) {
        if (!(err instanceof RangeError))
          throw err;
        used = "whole_sign";
        cusps = housesWholeSign(asc);
      }
      const jde = jdTT(jdUt);
      let shift = 0;
      if (mode !== null)
        shift = this.ayanShift(jde, mode);
      const outDeg = (rad) => mod(rad / DEG - shift, 360);
      let cuspsDeg;
      if (mode !== null && used === "whole_sign") {
        const first = Math.floor(outDeg(asc) / 30) * 30;
        cuspsDeg = Array.from({ length: 12 }, (_, i) => mod(first + i * 30, 360));
      } else {
        cuspsDeg = cusps.map(outDeg);
      }
      const chartBodies = {};
      for (const b of names) {
        const p = bodies[b];
        if (!p)
          continue;
        chartBodies[b] = {
          ...p,
          house: houseIndex(p.lon, cuspsDeg),
          dignities: dignities(b, Math.floor(mod(p.lon, 360) / 30))
        };
      }
      return {
        jdUt,
        zodiac,
        houseSystem: used,
        houseSystemRequested: houseSystem,
        bodies: chartBodies,
        unavailable,
        angles: {
          asc: outDeg(asc),
          mc: outDeg(mc),
          vertex: outDeg(vtx),
          eastPoint: outDeg(east)
        },
        cusps: cuspsDeg,
        aspects: findAspects(chartBodies, o.orbs ?? DEFAULT_ORBS)
      };
    }
  };
  function houseIndex(lon, cusps) {
    for (let i = 0; i < 12; i++) {
      if (mod(lon - cusps[i], 360) < mod(cusps[(i + 1) % 12] - cusps[i], 360))
        return i + 1;
    }
    return 12;
  }
  function findAspects(bodies, orbs = DEFAULT_ORBS) {
    const out = [];
    const names = Object.keys(bodies).filter((b) => !NOT_ASPECTABLE.has(b));
    for (let i = 0; i < names.length; i++) {
      for (let j = i + 1; j < names.length; j++) {
        const a = names[i];
        const b = names[j];
        const e = mod(bodies[a].lon - bodies[b].lon + 180, 360) - 180;
        const sep = Math.abs(e);
        for (const [asp, angle] of Object.entries(ASPECTS)) {
          const orb = Math.abs(sep - angle);
          if (orb <= orbs[asp]) {
            const orbRounded = Math.round(orb * 100) / 100;
            const signedOrb = sep - angle;
            const dAbsOrbDt = (signedOrb >= 0 ? 1 : -1) * (e >= 0 ? 1 : -1) * (bodies[a].speed - bodies[b].speed);
            const phase = Math.abs(signedOrb) < 1e-9 ? "exact" : dAbsOrbDt < 0 ? "applying" : "separating";
            out.push({
              a,
              b,
              aspect: asp,
              orb: orbRounded,
              phase,
              strength: Math.max(0, 1 - orbRounded / orbs[asp])
            });
          }
        }
      }
    }
    return out;
  }
  function fmtLon(deg) {
    const norm2 = mod(deg, 360);
    const sign = SIGNS[Math.floor(norm2 / 30)];
    const d = mod(norm2, 30);
    const m = mod(d, 1) * 60;
    return `${String(Math.floor(d)).padStart(2)}\xB0${String(Math.floor(m)).padStart(2, "0")}' ${sign}`;
  }

  // node_modules/caelus/dist/src/eclipses.js
  var KM_PER_AU5 = 1495978707e-1;
  var R_EARTH = 6378.14;
  var R_SUN = 696e3;
  var R_MOON = 1737.4;
  var PI_SUN = 8.794 * ARCSEC;
  var DANJON = (1 + 1 / 85) * 0.99834;
  function lunarGeom(engine, jd) {
    const jde = jdTT(jd);
    const [slon, slat, sdist] = engine.ecliptic("sun", jde);
    const [mlon, mlat, mdist] = engine.ecliptic("moon", jde);
    const alon = mod(slon + Math.PI, 2 * Math.PI);
    const alat = -slat;
    const cosd = Math.sin(alat) * Math.sin(mlat) + Math.cos(alat) * Math.cos(mlat) * Math.cos(alon - mlon);
    const theta = Math.acos(Math.max(-1, Math.min(1, cosd)));
    const mkm = mdist * KM_PER_AU5;
    const piEff = DANJON * Math.asin(R_EARTH / mkm);
    const sM = Math.asin(R_MOON / mkm);
    const sS = Math.asin(R_SUN / (sdist * KM_PER_AU5));
    return [theta, piEff - sS + PI_SUN, piEff + sS + PI_SUN, sM];
  }
  function solarGeom(engine, jd) {
    const jde = jdTT(jd);
    const [slon, slat, sdist] = engine.ecliptic("sun", jde);
    const [mlon, mlat, mdist] = engine.ecliptic("moon", jde);
    const vec = (lon, lat, r) => [
      r * Math.cos(lat) * Math.cos(lon),
      r * Math.cos(lat) * Math.sin(lon),
      r * Math.sin(lat)
    ];
    const S = vec(slon, slat, sdist * KM_PER_AU5);
    const M = vec(mlon, mlat, mdist * KM_PER_AU5);
    const SM = [M[0] - S[0], M[1] - S[1], M[2] - S[2]];
    const smn = Math.sqrt(SM[0] ** 2 + SM[1] ** 2 + SM[2] ** 2);
    const d = SM.map((c) => c / smn);
    const t0 = -(M[0] * d[0] + M[1] * d[1] + M[2] * d[2]);
    const P = [M[0] + t0 * d[0], M[1] + t0 * d[1], M[2] + t0 * d[2]];
    const dAxis = Math.sqrt(P[0] ** 2 + P[1] ** 2 + P[2] ** 2);
    const f1 = Math.asin((R_SUN + R_MOON) / smn);
    const f2 = Math.asin((R_SUN - R_MOON) / smn);
    const rPen = (R_MOON / Math.tan(f1) + t0) * Math.tan(f1);
    const rUmb = (R_MOON / Math.tan(f2) - t0) * Math.tan(f2);
    return [dAxis, rPen, rUmb, t0, f2];
  }
  function minimize(f, lo, hi) {
    for (let i = 0; i < 60; i++) {
      const m1 = lo + (hi - lo) / 3;
      const m2 = hi - (hi - lo) / 3;
      if (f(m1) < f(m2))
        hi = m2;
      else
        lo = m1;
    }
    return (lo + hi) / 2;
  }
  function bisect2(f, a, b) {
    let fa = f(a);
    for (let i = 0; i < 50; i++) {
      const m = (a + b) / 2;
      if (fa * f(m) <= 0) {
        b = m;
      } else {
        a = m;
        fa = f(a);
      }
    }
    return (a + b) / 2;
  }
  function syzygies(engine, jdStart, jdEnd, angle) {
    const f = (t) => {
      const e = mod(engine.longitude("moon", t) - engine.longitude("sun", t), 360);
      return mod(e - angle + 180, 360) - 180;
    };
    const out = [];
    const step = 5;
    let prev = f(jdStart);
    for (let t = jdStart + step; t <= jdEnd + step; t += step) {
      const cur = f(t);
      if (prev * cur < 0 && Math.abs(cur - prev) < 180) {
        out.push(bisect2(f, t - step, t));
      }
      prev = cur;
    }
    return out;
  }
  function lunarEclipses(engine, jdStart, jdEnd) {
    const out = [];
    for (const tFull of syzygies(engine, jdStart - 1, jdEnd + 1, 180)) {
      const tMax = minimize((t) => lunarGeom(engine, t)[0], tFull - 0.3, tFull + 0.3);
      const [theta, u, pen, sM] = lunarGeom(engine, tMax);
      const magU = (u + sM - theta) / (2 * sM);
      const magP = (pen + sM - theta) / (2 * sM);
      if (magP <= 0 || tMax < jdStart || tMax > jdEnd)
        continue;
      const kind = magU >= 1 ? "total" : magU > 0 ? "partial" : "penumbral";
      const cross2 = (idx, sign) => {
        const f = (t) => {
          const g = lunarGeom(engine, t);
          return g[0] - (g[idx] + sign * g[3]);
        };
        return [bisect2(f, tMax - 0.35, tMax), bisect2(f, tMax, tMax + 0.35)];
      };
      const [penB, penE] = cross2(2, 1);
      const [parB, parE] = magU > 0 ? cross2(1, 1) : [null, null];
      const [totB, totE] = magU >= 1 ? cross2(1, -1) : [null, null];
      out.push({
        tMax,
        type: kind,
        magUmbral: Math.max(magU, 0),
        magPenumbral: magP,
        penumbralBegin: penB,
        penumbralEnd: penE,
        partialBegin: parB,
        partialEnd: parE,
        totalBegin: totB,
        totalEnd: totE
      });
    }
    return out;
  }
  function solarEclipses(engine, jdStart, jdEnd) {
    const out = [];
    for (const tNew of syzygies(engine, jdStart - 1, jdEnd + 1, 0)) {
      const tMax = minimize((t) => solarGeom(engine, t)[0], tNew - 0.4, tNew + 0.4);
      const [dAxis, rPen, rUmb, , f2] = solarGeom(engine, tMax);
      if (dAxis > R_EARTH + rPen || tMax < jdStart || tMax > jdEnd)
        continue;
      const gamma = dAxis / R_EARTH;
      let kind;
      if (dAxis < R_EARTH) {
        const depth = Math.sqrt(Math.max(R_EARTH ** 2 - dAxis ** 2, 0));
        const rUmbSurface = rUmb + depth * Math.tan(f2);
        kind = rUmb > 0 ? "total" : rUmbSurface > 0 ? "hybrid" : "annular";
      } else {
        kind = "partial";
      }
      const f = (t) => {
        const g = solarGeom(engine, t);
        return g[0] - (R_EARTH + g[1]);
      };
      out.push({
        tMax,
        type: kind,
        gamma,
        begin: bisect2(f, tMax - 0.35, tMax),
        end: bisect2(f, tMax, tMax + 0.35)
      });
    }
    return out;
  }
  var EARTH_FLAT2 = 0.99664719;
  var EARTH_FLAT22 = EARTH_FLAT2 * EARTH_FLAT2;
  function sunMoonEq(engine, jde) {
    const eps = trueObliquity(engine.data, jde);
    const vec = (body) => {
      const [lon, lat, dist] = engine.ecliptic(body, jde);
      const [ra, dec] = equatorial(lon, lat, eps);
      const r = dist * KM_PER_AU5;
      return [
        r * Math.cos(dec) * Math.cos(ra),
        r * Math.cos(dec) * Math.sin(ra),
        r * Math.sin(dec)
      ];
    };
    return { S: vec("sun"), M: vec("moon") };
  }
  function solarEclipseWhere(engine, jd) {
    const jde = jdTT(jd);
    const { S, M } = sunMoonEq(engine, jde);
    const SM = [M[0] - S[0], M[1] - S[1], M[2] - S[2]];
    const smn = Math.hypot(SM[0], SM[1], SM[2]);
    const d = SM.map((c2) => c2 / smn);
    const Mz = [M[0], M[1], M[2] / EARTH_FLAT2];
    const dz = [d[0], d[1], d[2] / EARTH_FLAT2];
    const a = dz[0] ** 2 + dz[1] ** 2 + dz[2] ** 2;
    const b = 2 * (Mz[0] * dz[0] + Mz[1] * dz[1] + Mz[2] * dz[2]);
    const c = Mz[0] ** 2 + Mz[1] ** 2 + Mz[2] ** 2 - R_EARTH ** 2;
    const disc = b * b - 4 * a * c;
    if (disc < 0)
      return null;
    const s = (-b - Math.sqrt(disc)) / (2 * a);
    const P = [M[0] + s * d[0], M[1] + s * d[1], M[2] + s * d[2]];
    const rho = Math.hypot(P[0], P[1]);
    const lat = Math.atan2(P[2], EARTH_FLAT22 * rho);
    const ra = Math.atan2(P[1], P[0]);
    const lonEast = mod(ra - gast(engine.data, jd) + Math.PI, 2 * Math.PI) - Math.PI;
    return { lat: lat / DEG, lonEast: lonEast / DEG };
  }
  function topoCircs(engine, jd, latDeg, lonEastDeg, altM) {
    const jde = jdTT(jd);
    const eps = trueObliquity(engine.data, jde);
    const lst = mod(gast(engine.data, jd) + lonEastDeg * DEG, 2 * Math.PI);
    const topo = (body) => {
      const [lon, lat, dist] = engine.ecliptic(body, jde);
      return topocentricEcl(lon, lat, dist, lst, latDeg * DEG, altM, eps);
    };
    const [slon, slat, sdist] = topo("sun");
    const [mlon, mlat, mdist] = topo("moon");
    const cosSep = Math.sin(slat) * Math.sin(mlat) + Math.cos(slat) * Math.cos(mlat) * Math.cos(slon - mlon);
    return {
      sep: Math.acos(Math.max(-1, Math.min(1, cosSep))),
      sS: Math.asin(R_SUN / (sdist * KM_PER_AU5)),
      sM: Math.asin(R_MOON / (mdist * KM_PER_AU5))
    };
  }
  function lensArea(d, r1, r2) {
    if (d >= r1 + r2)
      return 0;
    if (d <= Math.abs(r1 - r2))
      return Math.PI * Math.min(r1, r2) ** 2;
    const a1 = Math.acos((d * d + r1 * r1 - r2 * r2) / (2 * d * r1));
    const a2 = Math.acos((d * d + r2 * r2 - r1 * r1) / (2 * d * r2));
    return r1 * r1 * (a1 - Math.sin(2 * a1) / 2) + r2 * r2 * (a2 - Math.sin(2 * a2) / 2);
  }
  function contact(g, tMax, dir) {
    const step = 3e-3;
    let prev = tMax;
    let fprev = g(tMax);
    for (let i = 1; i <= 120; i++) {
      const t = tMax + dir * i * step;
      const f = g(t);
      if (fprev * f <= 0)
        return bisect2(g, Math.min(prev, t), Math.max(prev, t));
      prev = t;
      fprev = f;
    }
    return null;
  }
  function solarEclipseLocal(engine, jd, latDeg, lonEastDeg, altM = 0) {
    const sepAt = (t) => topoCircs(engine, t, latDeg, lonEastDeg, altM).sep;
    const tMax = minimize(sepAt, jd - 0.2, jd + 0.2);
    const { sep, sS, sM } = topoCircs(engine, tMax, latDeg, lonEastDeg, altM);
    const none = {
      type: "none",
      magnitude: 0,
      obscuration: 0,
      maxTime: null,
      c1: null,
      c2: null,
      c3: null,
      c4: null
    };
    if (sep >= sS + sM)
      return none;
    const type = sep <= sM - sS ? "total" : sep <= sS - sM ? "annular" : "partial";
    const gOuter = (t) => {
      const c = topoCircs(engine, t, latDeg, lonEastDeg, altM);
      return c.sep - (c.sS + c.sM);
    };
    let c2 = null;
    let c3 = null;
    if (type === "total" || type === "annular") {
      const gInner = (t) => {
        const c = topoCircs(engine, t, latDeg, lonEastDeg, altM);
        return c.sep - Math.abs(c.sM - c.sS);
      };
      c2 = contact(gInner, tMax, -1);
      c3 = contact(gInner, tMax, 1);
    }
    return {
      type,
      magnitude: sep <= Math.abs(sM - sS) ? sM / sS : (sS + sM - sep) / (2 * sS),
      obscuration: lensArea(sep, sS, sM) / (Math.PI * sS * sS),
      maxTime: tMax,
      c1: contact(gOuter, tMax, -1),
      c2,
      c3,
      c4: contact(gOuter, tMax, 1)
    };
  }
  var R_MEAN = 6371;
  function destPoint(lat, lon, bearingDeg, distKm) {
    const d = distKm / R_MEAN;
    const br = bearingDeg * DEG;
    const p1 = lat * DEG;
    const l1 = lon * DEG;
    const p2 = Math.asin(Math.sin(p1) * Math.cos(d) + Math.cos(p1) * Math.sin(d) * Math.cos(br));
    const l2 = l1 + Math.atan2(Math.sin(br) * Math.sin(d) * Math.cos(p1), Math.cos(d) - Math.sin(p1) * Math.sin(p2));
    return { lat: p2 / DEG, lonEast: mod(l2 / DEG + 540, 360) - 180 };
  }
  function bearing(a, b) {
    const p1 = a.lat * DEG;
    const p2 = b.lat * DEG;
    const dl = (b.lonEast - a.lonEast) * DEG;
    return mod(Math.atan2(Math.sin(dl) * Math.cos(p2), Math.cos(p1) * Math.sin(p2) - Math.sin(p1) * Math.cos(p2) * Math.cos(dl)) / DEG, 360);
  }
  function greatCircleKm(a, b) {
    const p1 = a.lat * DEG;
    const p2 = b.lat * DEG;
    const dp = (b.lat - a.lat) * DEG;
    const dl = (b.lonEast - a.lonEast) * DEG;
    const h = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
    return R_MEAN * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  }
  function solarEclipseLimits(engine, jd) {
    const center = solarEclipseWhere(engine, jd);
    if (center === null)
      return null;
    const ahead = solarEclipseWhere(engine, jd + 1 / 86400);
    const track = ahead ? bearing(center, ahead) : 0;
    const edge = (lat, lon) => {
      const c = topoCircs(engine, jd, lat, lon, 0);
      return c.sep - Math.abs(c.sM - c.sS);
    };
    const march = (brg) => {
      let gPrev = edge(center.lat, center.lonEast);
      for (let s = 4; s <= 400; s += 4) {
        const q = destPoint(center.lat, center.lonEast, brg, s);
        if (gPrev * edge(q.lat, q.lonEast) <= 0) {
          let lo = s - 4;
          let hi = s;
          for (let i = 0; i < 40; i++) {
            const mid = (lo + hi) / 2;
            const qm = destPoint(center.lat, center.lonEast, brg, mid);
            if (edge(qm.lat, qm.lonEast) <= 0)
              lo = mid;
            else
              hi = mid;
          }
          return destPoint(center.lat, center.lonEast, brg, (lo + hi) / 2);
        }
        gPrev = edge(q.lat, q.lonEast);
      }
      return null;
    };
    const a = march(mod(track - 90, 360));
    const b = march(mod(track + 90, 360));
    const [north, south] = !a || !b ? [a, b] : a.lat >= b.lat ? [a, b] : [b, a];
    return {
      center,
      north,
      south,
      widthKm: north && south ? greatCircleKm(north, south) : null
    };
  }
  function lunarEclipseLocal(engine, jd, latDeg, lonEastDeg) {
    const [mlon, mlat] = engine.ecliptic("moon", jdTT(jd));
    const [, altitude] = azAlt(engine.data, mlon / DEG, mlat / DEG, jd, latDeg, lonEastDeg);
    return { altitude, visible: altitude > 0 };
  }

  // node_modules/caelus/dist/src/query.js
  var QUERY_ASPECTS = {
    conjunction: 0,
    semisextile: 30,
    sextile: 60,
    square: 90,
    trine: 120,
    quincunx: 150,
    opposition: 180
  };
  var FAST = /* @__PURE__ */ new Set([
    "moon",
    "mean_node",
    "true_node",
    "mean_lilith",
    "true_lilith"
  ]);
  function wrap180(d) {
    return mod(d + 180, 360) - 180;
  }
  function mk(fn, bodies) {
    const p = fn;
    p.bodies = bodies;
    return p;
  }
  function aspect(body, kind, target, orb = 1, zodiac = "tropical") {
    const ang = QUERY_ASPECTS[kind];
    if (ang === void 0)
      throw new Error(`unknown aspect ${kind}`);
    const isLon = typeof target === "number";
    const bodies = /* @__PURE__ */ new Set([body]);
    if (!isLon)
      bodies.add(target);
    return mk((engine, t) => {
      const lon = engine.longitude(body, t, { zodiac });
      const tl = isLon ? target : engine.longitude(target, t, { zodiac });
      const sep = lon - tl;
      return orb - Math.min(Math.abs(wrap180(sep - ang)), Math.abs(wrap180(sep + ang)));
    }, bodies);
  }
  function inSign(body, sign, zodiac = "tropical") {
    const idx = typeof sign === "number" ? sign : SIGNS.indexOf(sign);
    if (idx < 0)
      throw new Error(`unknown sign ${sign}`);
    const lo = idx * 30;
    return mk((engine, t) => {
      const d = mod(engine.longitude(body, t, { zodiac }) - lo, 360);
      return d <= 30 ? Math.min(d, 30 - d) : -Math.min(d - 30, 360 - d);
    }, /* @__PURE__ */ new Set([body]));
  }
  function retrograde(body, zodiac = "tropical") {
    const h = 0.25;
    return mk((engine, t) => {
      const l0 = engine.longitude(body, t - h, { zodiac });
      const l1 = engine.longitude(body, t + h, { zodiac });
      return -wrap180(l1 - l0) / (2 * h);
    }, /* @__PURE__ */ new Set([body]));
  }
  function notRetrograde(body, zodiac = "tropical") {
    return notOf(retrograde(body, zodiac));
  }
  function combine(op, preds) {
    const bodies = /* @__PURE__ */ new Set();
    for (const p of preds)
      for (const b of p.bodies)
        bodies.add(b);
    return mk((engine, t) => op(preds.map((p) => p(engine, t))), bodies);
  }
  function allOf(...preds) {
    return combine((xs) => Math.min(...xs), preds);
  }
  function anyOf(...preds) {
    return combine((xs) => Math.max(...xs), preds);
  }
  function notOf(pred) {
    return mk((engine, t) => -pred(engine, t), new Set(pred.bodies));
  }
  function bisect3(f, a, b, tol = 1e-6) {
    let fa = f(a);
    for (let i = 0; i < 60; i++) {
      const m = 0.5 * (a + b);
      if (Math.abs(b - a) < tol)
        return m;
      const fm = f(m);
      if (fa < 0 !== fm < 0) {
        b = m;
      } else {
        a = m;
        fa = fm;
      }
    }
    return 0.5 * (a + b);
  }
  function when(engine, predicate, jdStart, jdEnd, opts = {}) {
    let step = opts.step;
    if (step === void 0) {
      let fast = false;
      for (const b of predicate.bodies)
        if (FAST.has(b))
          fast = true;
      step = fast ? 0.125 : 1;
    }
    const maxIntervals = opts.maxIntervals ?? 500;
    const f = (t2) => predicate(engine, t2);
    const intervals = [];
    let prev = f(jdStart);
    let openStart = prev >= 0 ? jdStart : null;
    let t = jdStart + step;
    while (t <= jdEnd + 1e-9 && intervals.length < maxIntervals) {
      if (t > jdEnd)
        t = jdEnd;
      const cur = f(t);
      if (prev < 0 !== cur < 0) {
        const edge = bisect3(f, t - step, t);
        if (cur >= 0) {
          openStart = edge;
        } else if (openStart !== null) {
          intervals.push([openStart, edge]);
          openStart = null;
        }
      }
      prev = cur;
      if (t >= jdEnd)
        break;
      t += step;
    }
    if (openStart !== null)
      intervals.push([openStart, jdEnd]);
    return intervals;
  }

  // node_modules/caelus/dist/src/turbo.js
  function clenshaw2(coeffs, x) {
    let b0 = 0;
    let b1 = 0;
    for (let i = coeffs.length - 1; i >= 1; i--) {
      const t = 2 * x * b0 - b1 + coeffs[i];
      b1 = b0;
      b0 = t;
    }
    return x * b0 - b1 + coeffs[0];
  }
  var Turbo = class {
    /** Start of the pack's valid Julian Day (UT) range. */
    jd0;
    /** End of the pack's valid Julian Day (UT) range. */
    jd1;
    bodies;
    /**
     * @param pack A {@link TurboPack}: the fitted segments plus its `jd0`/`jd1`
     *   range, minted offline for your bodies and span.
     */
    constructor(pack) {
      this.jd0 = pack.jd0;
      this.jd1 = pack.jd1;
      this.bodies = pack.bodies;
    }
    /**
     * Whether this pack can evaluate a given body.
     *
     * @param body Body id to test.
     * @returns `true` if {@link Turbo.longitude} accepts `body`.
     */
    has(body) {
      return body in this.bodies;
    }
    /**
     * Apparent ecliptic longitude (degrees) of a body from the turbo pack, in the
     * pack's own zodiac. The hot path for bulk scans.
     *
     * @param body A body id the pack contains (see {@link Turbo.has}).
     * @param jd Julian Day (UT), within `[jd0, jd1]`.
     * @returns Ecliptic longitude in degrees, `[0, 360)`.
     * @throws Error if the pack lacks `body`, or `jd` is outside `[jd0, jd1]`.
     */
    longitude(body, jd) {
      const b = this.bodies[body];
      if (!b)
        throw new Error(`turbo: no pack for ${body}`);
      if (jd < this.jd0 || jd > this.jd1) {
        throw new Error(`jd ${jd} outside turbo range ${this.jd0}-${this.jd1}`);
      }
      const seg = b.seg_days;
      const i = Math.min(Math.floor((jd - this.jd0) / seg), b.segments.length - 1);
      const x = 2 * (jd - (this.jd0 + i * seg)) / seg - 1;
      return mod(clenshaw2(b.segments[i], x), 360);
    }
  };

  // node_modules/caelus/dist/src/electional.js
  var CHALDEAN = ["saturn", "jupiter", "mars", "sun", "venus", "mercury", "moon"];
  var DAY_RULERS = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"];
  var CAZIMI_DEG = 0.2833;
  var COMBUST_DEG = 8.5;
  var UNDER_BEAMS_DEG = 15;
  function bisect4(f, a, b, iters = 45) {
    let fa = f(a);
    for (let i = 0; i < iters; i++) {
      const m = (a + b) / 2;
      if (fa * f(m) <= 0) {
        b = m;
      } else {
        a = m;
        fa = f(a);
      }
    }
    return (a + b) / 2;
  }
  function wrap1802(x) {
    return mod(x + 180, 360) - 180;
  }
  function signedElongation(lonA, lonB) {
    return wrap1802(lonA - lonB);
  }
  function separation(lonA, lonB) {
    return Math.abs(wrap1802(lonA - lonB));
  }
  function aspectPhase(lonA, speedA, lonB, speedB, aspectDeg) {
    const e = wrap1802(lonA - lonB);
    const sep = Math.abs(e);
    const dsepDt = (e >= 0 ? 1 : -1) * (speedA - speedB);
    const orb = sep - aspectDeg;
    if (Math.abs(orb) < 1e-9)
      return "exact";
    const dAbsOrbDt = (orb >= 0 ? 1 : -1) * dsepDt;
    return dAbsOrbDt < 0 ? "applying" : "separating";
  }
  function aspectBetween(engine, bodyA, bodyB, jdUt, zodiac = "tropical", orbs = DEFAULT_ORBS) {
    const pa = engine.position(bodyA, jdUt, { zodiac });
    const pb = engine.position(bodyB, jdUt, { zodiac });
    const sep = separation(pa.lon, pb.lon);
    let best = null;
    for (const [name2, deg] of Object.entries(ASPECTS)) {
      const orb2 = sep - deg;
      if (Math.abs(orb2) <= (orbs[name2] ?? 0)) {
        if (best === null || Math.abs(orb2) < Math.abs(best[1]))
          best = [name2, orb2];
      }
    }
    if (best === null)
      return null;
    const [name, orb] = best;
    return {
      aspect: name,
      orb,
      separation: sep,
      phase: aspectPhase(pa.lon, pa.speed, pb.lon, pb.speed, ASPECTS[name])
    };
  }
  function solarElongation(engine, body, jdUt, zodiac = "tropical") {
    return separation(engine.longitude(body, jdUt, { zodiac }), engine.longitude("sun", jdUt, { zodiac }));
  }
  function solarPhase(engine, body, jdUt, zodiac = "tropical", cazimi = CAZIMI_DEG, combust = COMBUST_DEG, underBeams = UNDER_BEAMS_DEG) {
    if (body === "sun")
      return null;
    const sep = solarElongation(engine, body, jdUt, zodiac);
    if (sep <= cazimi)
      return "cazimi";
    if (sep <= combust)
      return "combust";
    if (sep <= underBeams)
      return "under_beams";
    return null;
  }
  function planetaryHour(engine, jdUt, lat, lonEast) {
    let sr = riseSet(engine, "sun", jdUt - 1, lat, lonEast, "rise");
    if (sr === null)
      return null;
    let nxt = riseSet(engine, "sun", sr + 0.01, lat, lonEast, "rise");
    while (nxt !== null && nxt <= jdUt) {
      sr = nxt;
      nxt = riseSet(engine, "sun", sr + 0.01, lat, lonEast, "rise");
    }
    if (sr > jdUt)
      return null;
    const dayStart = sr;
    const dayEnd = riseSet(engine, "sun", dayStart + 0.01, lat, lonEast, "set");
    if (dayEnd === null)
      return null;
    const nightEnd = riseSet(engine, "sun", dayEnd + 0.01, lat, lonEast, "rise");
    if (nightEnd === null)
      return null;
    let span;
    let kind;
    let hourNumber;
    let start;
    if (jdUt < dayEnd) {
      span = (dayEnd - dayStart) / 12;
      const idx = Math.min(Math.floor((jdUt - dayStart) / span), 11);
      kind = "day";
      hourNumber = idx;
      start = dayStart + idx * span;
    } else {
      span = (nightEnd - dayEnd) / 12;
      const idx = Math.min(Math.floor((jdUt - dayEnd) / span), 11);
      kind = "night";
      hourNumber = 12 + idx;
      start = dayEnd + idx * span;
    }
    const weekday = Math.floor(dayStart + 1.5) % 7;
    const dayRuler = DAY_RULERS[weekday];
    const ruler = CHALDEAN[(CHALDEAN.indexOf(dayRuler) + hourNumber) % 7];
    return { ruler, kind, hour: hourNumber + 1, dayRuler, start, end: start + span };
  }
  function perfections(engine, bodyA, bodyB, aspectDeg, jdStart, jdEnd, zodiac, step) {
    const roots = [];
    const orientations = aspectDeg !== 0 && aspectDeg !== 180 ? [1, -1] : [1];
    for (const orient of orientations) {
      const f = (t) => {
        const la = engine.longitude(bodyA, t, { zodiac });
        const lb = engine.longitude(bodyB, t, { zodiac });
        return mod(la - lb - orient * aspectDeg + 180, 360) - 180;
      };
      let prev = f(jdStart);
      for (let t = jdStart + step; t <= jdEnd; t += step) {
        const cur = f(t);
        if (prev * cur < 0 && Math.abs(cur - prev) < 180) {
          roots.push(bisect4(f, t - step, t));
        }
        prev = cur;
      }
    }
    roots.sort((a, b) => a - b);
    return roots;
  }
  function voidOfCourse(engine, jdUt, zodiac = "tropical", maxDays = 14) {
    const moon = engine.longitude("moon", jdUt, { zodiac });
    const sign = mod(Math.floor(moon / 30), 12);
    const boundary = mod((sign + 1) * 30, 360);
    const edge = (t) => mod(engine.longitude("moon", t, { zodiac }) - boundary + 180, 360) - 180;
    let signExit = null;
    const step = 0.125;
    let prev = edge(jdUt);
    for (let t = jdUt + step; t <= jdUt + maxDays; t += step) {
      const cur = edge(t);
      if (prev * cur < 0 && Math.abs(cur - prev) < 180) {
        signExit = bisect4(edge, t - step, t);
        break;
      }
      prev = cur;
    }
    if (signExit === null)
      signExit = jdUt + maxDays;
    let nextAspect = null;
    for (const planet of ["sun", "mercury", "venus", "mars", "jupiter", "saturn"]) {
      for (const deg of Object.values(ASPECTS)) {
        for (const jd of perfections(engine, "moon", planet, deg, jdUt, signExit, zodiac, 0.125)) {
          if (jd > jdUt && (nextAspect === null || jd < nextAspect))
            nextAspect = jd;
        }
      }
    }
    return {
      isVoid: nextAspect === null,
      sign: SIGNS[sign],
      signExit,
      nextAspect
    };
  }
  function houseOf(lon, cusps) {
    lon = mod(lon, 360);
    for (let i = 0; i < 12; i++) {
      const a = mod(cusps[i], 360);
      const b = mod(cusps[(i + 1) % 12], 360);
      const span = mod(b - a, 360);
      if (span === 0)
        continue;
      if (mod(lon - a, 360) < span)
        return i + 1;
    }
    return 12;
  }
  function angularity(house) {
    return ["angular", "succedent", "cadent"][(house - 1) % 3];
  }

  // node_modules/caelus/dist/src/scan.js
  function sampleCount(start, end, step) {
    if (step <= 0)
      throw new Error("scan step must be positive");
    if (end < start)
      return 0;
    return Math.floor((end - start) / step + 1e-9) + 1;
  }
  function scan(opts, fn) {
    const total = sampleCount(opts.start, opts.end, opts.step);
    const every = opts.progressEvery ?? 256;
    const out = [];
    for (let i = 0; i < total; i++) {
      out.push(fn(opts.start + i * opts.step));
      if (opts.onProgress && (i + 1) % every === 0)
        opts.onProgress(i + 1, total);
    }
    if (opts.onProgress && total > 0)
      opts.onProgress(total, total);
    return out;
  }
  function rank(moments, limit) {
    moments.sort((a, b) => b.score - a.score || a.jd - b.jd);
    return limit === Infinity ? moments : moments.slice(0, limit);
  }
  function rankMoments(opts, score) {
    const minScore = opts.minScore ?? -Infinity;
    const moments = [];
    scan(opts, (jd) => {
      const s = score(jd);
      if (s >= minScore)
        moments.push({ jd, score: s });
      return s;
    });
    return rank(moments, opts.limit ?? Infinity);
  }
  async function rankMomentsAsync(opts, score, chunk = 256) {
    const minScore = opts.minScore ?? -Infinity;
    const total = sampleCount(opts.start, opts.end, opts.step);
    const moments = [];
    for (let i = 0; i < total; i++) {
      const jd = opts.start + i * opts.step;
      const s = score(jd);
      if (s >= minScore)
        moments.push({ jd, score: s });
      if ((i + 1) % chunk === 0) {
        if (opts.onProgress)
          opts.onProgress(i + 1, total);
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    }
    if (opts.onProgress && total > 0)
      opts.onProgress(total, total);
    return rank(moments, opts.limit ?? Infinity);
  }

  // node_modules/caelus/dist/src/spherical.js
  function unitVector(lonDeg, latDeg) {
    const lam = lonDeg * DEG;
    const beta = latDeg * DEG;
    const cb = Math.cos(beta);
    return [cb * Math.cos(lam), cb * Math.sin(lam), Math.sin(beta)];
  }
  function angularSeparation3d(lonA, latA, lonB, latB) {
    const [ax, ay, az] = unitVector(lonA, latA);
    const [bx, by, bz] = unitVector(lonB, latB);
    const dot2 = Math.max(-1, Math.min(1, ax * bx + ay * by + az * bz));
    return Math.acos(dot2) / DEG;
  }

  // node_modules/caelus/dist/src/skyview.js
  var dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  var cross = (a, b) => [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
  var norm = (a) => Math.sqrt(dot(a, a));
  var unit = (a) => {
    const n = norm(a);
    return [a[0] / n, a[1] / n, a[2] / n];
  };
  var clamp1 = (x) => Math.max(-1, Math.min(1, x));
  function dirFromAzAlt(azDeg, altDeg) {
    const a = azDeg * DEG;
    const h = altDeg * DEG;
    return [Math.cos(h) * Math.sin(a), Math.cos(h) * Math.cos(a), Math.sin(h)];
  }
  var COMPASS16 = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW"
  ];
  function compassOf(azDeg) {
    return COMPASS16[Math.round(mod(azDeg, 360) / 22.5) % 16];
  }
  function parseAzimuth(az) {
    if (typeof az === "number")
      return mod(az, 360);
    const key = az.trim().toUpperCase();
    const i = COMPASS16.indexOf(key);
    if (i >= 0)
      return i * 22.5;
    const n = Number(key);
    if (Number.isFinite(n))
      return mod(n, 360);
    throw new Error(`unknown azimuth '${az}' (degrees or a 16-point compass name)`);
  }
  var LENS_PRESETS = {
    ultrawide: { focalLengthMm: 14, projection: "fisheye" },
    wide: { focalLengthMm: 24, projection: "rectilinear" },
    standard: { focalLengthMm: 35, projection: "rectilinear" },
    normal: { focalLengthMm: 50, projection: "rectilinear" },
    portrait: { focalLengthMm: 85, projection: "rectilinear" },
    telephoto: { focalLengthMm: 135, projection: "rectilinear" },
    supertele: { focalLengthMm: 200, projection: "rectilinear" }
  };
  var LENS_NAMES = Object.keys(LENS_PRESETS);
  var SENSOR_MM = 36;
  var hfovFromFocal = (focal, sensor) => 2 * Math.atan(sensor / (2 * focal)) / DEG;
  var focalFromHfov = (hfovDeg, sensor) => sensor / (2 * Math.tan(hfovDeg * DEG / 2));
  function resolveLens(spec, width, height) {
    let name = "custom";
    let projection = "rectilinear";
    let focal;
    let sensor = SENSOR_MM;
    let hfovDeg;
    if (typeof spec === "string") {
      const p = LENS_PRESETS[spec];
      if (!p)
        throw new Error(`unknown lens '${spec}' (presets: ${LENS_NAMES.join(", ")})`);
      name = spec;
      focal = p.focalLengthMm;
      projection = p.projection;
      hfovDeg = hfovFromFocal(focal, sensor);
    } else if ("hfovDeg" in spec) {
      hfovDeg = spec.hfovDeg;
      projection = spec.projection ?? "rectilinear";
      focal = focalFromHfov(hfovDeg, sensor);
    } else {
      sensor = spec.sensorWidthMm ?? SENSOR_MM;
      focal = spec.focalLengthMm;
      projection = spec.projection ?? "rectilinear";
      hfovDeg = hfovFromFocal(focal, sensor);
    }
    const hfovR = hfovDeg * DEG;
    const vfovDeg = projection === "fisheye" ? hfovDeg * (height / width) : 2 * Math.atan(Math.tan(hfovR / 2) * (height / width)) / DEG;
    return {
      name,
      focalLengthMm: Math.round(focal * 10) / 10,
      sensorWidthMm: sensor,
      projection,
      hfovDeg: Math.round(hfovDeg * 100) / 100,
      vfovDeg: Math.round(vfovDeg * 100) / 100
    };
  }
  function twilightStage(sunAltDeg) {
    if (sunAltDeg > 0)
      return "day";
    if (sunAltDeg > -6)
      return "civil";
    if (sunAltDeg > -12)
      return "nautical";
    if (sunAltDeg > -18)
      return "astronomical";
    return "night";
  }
  var STAGE_CEILING = {
    day: -4,
    civil: 1.5,
    nautical: 4,
    astronomical: 5.5,
    night: Infinity
  };
  function limitingMag(stage, moonAltDeg, moonIllum, bortle) {
    const bortleLimit = bortle !== void 0 ? BORTLE_LIMIT[Math.round(bortle)] ?? 6 : 6;
    let lim = Math.min(STAGE_CEILING[stage], bortleLimit);
    if (lim > 0 && moonAltDeg !== null && moonAltDeg > 0 && (moonIllum ?? 0) > 0.3) {
      lim -= 1.5 * (moonIllum ?? 0);
    }
    return Math.round(lim * 10) / 10;
  }
  function moonPhaseName(illum, waxing) {
    if (illum < 0.03)
      return "new moon";
    if (illum > 0.97)
      return "full moon";
    if (Math.abs(illum - 0.5) < 0.06)
      return waxing ? "first quarter" : "last quarter";
    if (illum < 0.5)
      return waxing ? "waxing crescent" : "waning crescent";
    return waxing ? "waxing gibbous" : "waning gibbous";
  }
  function clockOf(angleDeg) {
    let h = Math.round((90 - angleDeg) / 30) % 12;
    if (h <= 0)
      h += 12;
    return `${h} o'clock`;
  }
  function jdToUtcIso(jd) {
    const z = Math.floor(jd + 0.5);
    const f = jd + 0.5 - z;
    let a = z;
    if (z >= 2299161) {
      const alpha = Math.floor((z - 186721625e-2) / 36524.25);
      a = z + 1 + alpha - Math.floor(alpha / 4);
    }
    const b = a + 1524;
    const c = Math.floor((b - 122.1) / 365.25);
    const d = Math.floor(365.25 * c);
    const e = Math.floor((b - d) / 30.6001);
    const dayF = b - d - Math.floor(30.6001 * e) + f;
    const day = Math.floor(dayF);
    const month = e < 14 ? e - 1 : e - 13;
    const year = month > 2 ? c - 4716 : c - 4715;
    let secs = Math.min(86399, Math.round((dayF - day) * 86400));
    const hh = Math.floor(secs / 3600);
    secs -= hh * 3600;
    const mm = Math.floor(secs / 60);
    const ss = secs - mm * 60;
    const p2 = (n) => String(n).padStart(2, "0");
    const yr = year < 0 ? `-${String(-year).padStart(4, "0")}` : String(year).padStart(4, "0");
    return `${yr}-${p2(month)}-${p2(day)}T${p2(hh)}:${p2(mm)}:${p2(ss)}Z`;
  }
  function displayName(id) {
    if (id.startsWith("star:"))
      return id.slice(5);
    return id.charAt(0).toUpperCase() + id.slice(1);
  }
  function applyRenderAttrs(body, id, render, lens, width, limit) {
    if (!render)
      return;
    if (render.sizeDeg !== void 0) {
      body.angularDiameterDeg = Math.round(render.sizeDeg * 1e4) / 1e4;
      body.sizePx = Math.max(1, Math.round(render.sizeDeg * width / lens.hfovDeg));
    }
    if (render.magnitude !== void 0) {
      body.magnitude = Math.round(render.magnitude * 100) / 100;
      body.nakedEye = id === "sun" || id === "moon" || render.magnitude <= limit;
      body.brightnessHint = brightnessDescriptor(body.magnitude, body.nakedEye);
    }
    if (render.color)
      body.color = render.color;
  }
  function brightnessDescriptor(mag, nakedEye) {
    if (mag === null)
      return void 0;
    if (!nakedEye)
      return "faint, just at the visibility limit";
    if (mag <= -3)
      return "brilliant, the dominant point in the sky; render with a soft glow and slight bloom";
    if (mag <= -1)
      return "very bright, with a slight glow";
    if (mag <= 1)
      return "bright point of light";
    return "modest point of light";
  }
  var ICRS_TO_GAL = [
    [-0.0548755604162154, -0.873437090234885, -0.4838350155487132],
    [0.4941094278755837, -0.4448296299600112, 0.746982244497219],
    [-0.8676661490190047, -0.1980763734312015, 0.4559837761750669]
  ];
  var ECL_OBLIQUITY_J2000 = 23.4392911 * DEG;
  function galacticEquatorToEclJ2000(lDeg) {
    const l = lDeg * DEG;
    const g = [Math.cos(l), Math.sin(l), 0];
    const xq = ICRS_TO_GAL[0][0] * g[0] + ICRS_TO_GAL[1][0] * g[1] + ICRS_TO_GAL[2][0] * g[2];
    const yq = ICRS_TO_GAL[0][1] * g[0] + ICRS_TO_GAL[1][1] * g[1] + ICRS_TO_GAL[2][1] * g[2];
    const zq = ICRS_TO_GAL[0][2] * g[0] + ICRS_TO_GAL[1][2] * g[1] + ICRS_TO_GAL[2][2] * g[2];
    const e = ECL_OBLIQUITY_J2000;
    const lon = Math.atan2(yq * Math.cos(e) + zq * Math.sin(e), xq);
    const lat = Math.asin(clamp1(-yq * Math.sin(e) + zq * Math.cos(e)));
    return [lon, lat];
  }
  var BORTLE_LIMIT = {
    1: 7.6,
    2: 7.4,
    3: 7,
    4: 6.5,
    5: 6,
    6: 5.5,
    7: 5,
    8: 4.5,
    9: 4
  };
  function starfieldClause(limit, dark, moonBright, field) {
    if (field.complete) {
      return `The structured \`bodies\` data holds a complete naked-eye field of ${field.count} stars to magnitude ${limit}; render each at its exact pixel as a fine point of light. Do not add, move, or omit stars.`;
    }
    if (!dark) {
      return "Beyond those you may add a few of the very brightest stars, but keep it sparse: do not fill the sky with stars.";
    }
    if (moonBright) {
      return "Moonlight suppresses the faint stars: beyond those, keep the background field sparse.";
    }
    if (limit >= 6.5) {
      return `Beyond those, fill the background with a dense, deep field of faint stars down to about magnitude ${limit}, with natural brightness variation; the listed stars stay exactly placed.`;
    }
    if (limit >= 5.5) {
      return `Beyond those, add a rich field of many hundreds of fainter stars, down to about magnitude ${limit}.`;
    }
    if (limit >= 4.5) {
      return `Beyond those, add a moderate scatter of stars, down to about magnitude ${limit}.`;
    }
    return "Beyond those, only a sparse scatter of stars is visible.";
  }
  function skyView(engine, jdUt, view, opts = {}) {
    const { lat, lonEast, altM } = view.observer;
    const { width, height } = view.image;
    if (!(width > 0) || !(height > 0)) {
      throw new Error("image width and height must be positive");
    }
    const aimAz = parseAzimuth(view.aim.azimuth);
    const aimAlt = view.aim.altitude;
    const lens = resolveLens(view.lens, width, height);
    const pressure = opts.pressure ?? 1013.25;
    const tempC = opts.tempC ?? 15;
    const refract = opts.refraction ?? true;
    const F = dirFromAzAlt(aimAz, aimAlt);
    let rightRaw = cross(F, [0, 0, 1]);
    if (norm(rightRaw) < 1e-6)
      rightRaw = cross(F, [0, 1, 0]);
    const right = unit(rightRaw);
    const up = cross(right, F);
    const hfovR = lens.hfovDeg * DEG;
    const vfovR = lens.vfovDeg * DEG;
    const tanH = Math.tan(hfovR / 2);
    const tanV = Math.tan(vfovR / 2);
    const place = (azDeg, altTrueDeg, refractThis = refract) => {
      const altApp = refractThis ? refractTrueToApparent(altTrueDeg, pressure, tempC) : altTrueDeg;
      const V = dirFromAzAlt(azDeg, altApp);
      const f = dot(V, F);
      const rr = dot(V, right);
      const uu = dot(V, up);
      let xn;
      let yn;
      let inFrame;
      if (lens.projection === "rectilinear") {
        if (f > 1e-9) {
          xn = rr / f / tanH;
          yn = uu / f / tanV;
          inFrame = Math.abs(xn) <= 1 && Math.abs(yn) <= 1;
        } else {
          xn = rr >= 0 ? Infinity : -Infinity;
          yn = uu >= 0 ? Infinity : -Infinity;
          inFrame = false;
        }
      } else {
        const theta = Math.acos(clamp1(f));
        const psi = Math.atan2(uu, rr);
        xn = theta * Math.cos(psi) / (hfovR / 2);
        yn = theta * Math.sin(psi) / (vfovR / 2);
        inFrame = Math.abs(xn) <= 1 && Math.abs(yn) <= 1;
      }
      const deltaDeg = Math.acos(clamp1(f)) / DEG;
      let side = "behind";
      if (f > 0) {
        side = Math.abs(xn) >= Math.abs(yn) ? xn > 0 ? "right" : "left" : yn > 0 ? "above" : "below";
      }
      const x = Number.isFinite(xn) ? Math.round((xn + 1) / 2 * width) : NaN;
      const y = Number.isFinite(yn) ? Math.round((1 - yn) / 2 * height) : NaN;
      return { altApp, x, y, inFrame, deltaDeg, side };
    };
    const sunPos = engine.position("sun", jdUt);
    const [sunAz, sunAltTrue] = azAlt(engine.data, sunPos.lon, sunPos.lat, jdUt, lat, lonEast);
    const stage = twilightStage(sunAltTrue);
    const moonPos = engine.position("moon", jdUt);
    const [moonAz, moonAltTrue] = azAlt(engine.data, moonPos.lon, moonPos.lat, jdUt, lat, lonEast);
    const moonPheno = pheno(engine, "moon", jdUt);
    const moonIllum = moonPheno.phase;
    const moonWaxing = mod(moonPos.lon - sunPos.lon, 360) < 180;
    const moonUp = moonAltTrue > 0;
    const bortle = opts.bortle;
    const limit = limitingMag(stage, moonUp ? moonAltTrue : null, moonIllum, bortle);
    const skyIsDark = stage === "astronomical" || stage === "night";
    const moonBright = moonUp && moonIllum > 0.55;
    let brightestAz = null;
    if (sunAltTrue > -18)
      brightestAz = sunAz;
    else if (moonUp && moonIllum > 0.3)
      brightestAz = moonAz;
    const lowNote = (id, altApp) => {
      if (altApp >= 5)
        return void 0;
      if (id === "sun")
        return "on the horizon: flattened by refraction, deep warm color";
      return "near the horizon: dimmed and reddened by the atmosphere";
    };
    const bodies = [];
    const offFrame = [];
    const bodyIds = opts.bodies ?? [
      "sun",
      "moon",
      "mercury",
      "venus",
      "mars",
      "jupiter",
      "saturn"
    ];
    for (const id of bodyIds) {
      const pos = id === "sun" ? sunPos : id === "moon" ? moonPos : engine.position(id, jdUt);
      const [az, altTrue] = id === "sun" ? [sunAz, sunAltTrue] : id === "moon" ? [moonAz, moonAltTrue] : azAlt(engine.data, pos.lon, pos.lat, jdUt, lat, lonEast);
      const p = place(az, altTrue);
      const visible2 = id === "sun" ? p.altApp > -1 : p.altApp > 0;
      if (!visible2)
        continue;
      let magnitude2 = null;
      let diamDeg = 0;
      if (DIAMETER_KM[id] !== void 0) {
        const ph = pheno(engine, id, jdUt);
        magnitude2 = Math.round(ph.magnitude * 100) / 100;
        diamDeg = ph.diameter;
      }
      const sizePx = Math.max(diamDeg > 0 ? 1 : 0, Math.round(diamDeg * width / lens.hfovDeg));
      const nakedEye = id === "sun" || id === "moon" || magnitude2 !== null && magnitude2 <= limit;
      if (!p.inFrame) {
        if (nakedEye) {
          offFrame.push({
            id,
            name: displayName(id),
            side: p.side,
            deltaDeg: Math.round(p.deltaDeg * 10) / 10,
            azimuthDeg: Math.round(az * 10) / 10,
            altitudeDeg: Math.round(p.altApp * 10) / 10,
            magnitude: magnitude2
          });
        }
        continue;
      }
      const body = {
        id,
        name: displayName(id),
        azimuthDeg: Math.round(az * 10) / 10,
        altitudeDeg: Math.round(p.altApp * 10) / 10,
        x: p.x,
        y: p.y,
        inFrame: true,
        sizePx,
        angularDiameterDeg: Math.round(diamDeg * 1e4) / 1e4,
        magnitude: magnitude2,
        nakedEye,
        brightnessHint: brightnessDescriptor(magnitude2, nakedEye),
        note: lowNote(id, p.altApp)
      };
      if (id === "moon") {
        body.illum = Math.round(moonIllum * 1e3) / 1e3;
        body.phaseName = moonPhaseName(moonIllum, moonWaxing);
        const M = dirFromAzAlt(moonAz, moonAltTrue);
        const S = dirFromAzAlt(sunAz, sunAltTrue);
        const t = unit([
          S[0] - dot(S, M) * M[0],
          S[1] - dot(S, M) * M[1],
          S[2] - dot(S, M) * M[2]
        ]);
        const angle = mod(Math.atan2(dot(t, up), dot(t, right)) / DEG, 360);
        body.brightLimbAngleDeg = Math.round(angle * 10) / 10;
        body.brightLimbClock = clockOf(angle);
      }
      const authored = {
        ...engine.renderFor(id),
        ...opts.render?.[id]
      };
      applyRenderAttrs(body, id, Object.keys(authored).length ? authored : void 0, lens, width, limit);
      bodies.push(body);
    }
    const wantStars = opts.includeStars ?? true;
    const deep = engine.data.deepStars;
    const useDeep = wantStars && deep !== void 0 && (opts.deepField ?? (skyIsDark && !moonBright));
    const starMagLimit = opts.maxStarMag ?? (bortle !== void 0 ? limit : 2.5);
    const starCap = Math.min(starMagLimit, limit);
    let starfield = { source: "none", count: 0, complete: false, limitingMag: limit };
    const toStarBody = (name, mag, az, p) => ({
      id: `star:${name}`,
      name,
      azimuthDeg: Math.round(az * 10) / 10,
      altitudeDeg: Math.round(p.altApp * 10) / 10,
      x: p.x,
      y: p.y,
      inFrame: true,
      sizePx: 0,
      angularDiameterDeg: 0,
      magnitude: Math.round(mag * 100) / 100,
      nakedEye: true,
      brightnessHint: brightnessDescriptor(Math.round(mag * 100) / 100, true)
    });
    if (useDeep && deep) {
      const jde = jdTT(jdUt);
      const found = [];
      for (const name in deep.stars) {
        const s = deep.stars[name];
        if (s.mag > limit)
          continue;
        const [lonR, latR] = starApparent(engine.data, s, jde);
        const [az, altTrue] = azAlt(engine.data, lonR / DEG, latR / DEG, jdUt, lat, lonEast);
        const p = place(az, altTrue);
        if (p.altApp <= 0 || !p.inFrame)
          continue;
        found.push(toStarBody(name, s.mag, az, p));
      }
      found.sort((a, b) => (a.magnitude ?? 99) - (b.magnitude ?? 99));
      const capped = found.slice(0, opts.maxStars ?? 4e3);
      bodies.push(...capped);
      starfield = { source: "deep", count: capped.length, complete: true, limitingMag: limit };
    } else if (wantStars && engine.starNames().length > 0 && starCap > -10) {
      const found = [];
      for (const name of engine.starNames()) {
        const s = engine.fixedStar(name, jdUt);
        if (s.mag > starCap)
          continue;
        const [az, altTrue] = azAlt(engine.data, s.lon, s.lat, jdUt, lat, lonEast);
        const p = place(az, altTrue);
        if (p.altApp <= 0 || !p.inFrame)
          continue;
        found.push(toStarBody(name, s.mag, az, p));
      }
      found.sort((a, b) => (a.magnitude ?? 99) - (b.magnitude ?? 99));
      const capped = found.slice(0, opts.maxStars ?? (bortle !== void 0 ? 250 : 40));
      bodies.push(...capped);
      starfield = { source: "named", count: capped.length, complete: false, limitingMag: limit };
    }
    const horizon = place(aimAz, 0, false);
    const horizonY = Number.isFinite(horizon.y) ? horizon.y : null;
    const offMax = Math.max(lens.hfovDeg, lens.vfovDeg);
    const offNear = offFrame.filter((o) => o.side !== "behind" && o.deltaDeg <= offMax).sort((a, b) => a.deltaDeg - b.deltaDeg);
    offFrame.length = 0;
    offFrame.push(...offNear);
    const mwDark = skyIsDark && !moonBright && (bortle === void 0 || bortle <= 6);
    const galSamples = [];
    let gcSamp = null;
    for (let l = 0; l < 360; l += 2) {
      const [lonR, latR] = galacticEquatorToEclJ2000(l);
      const [lonD, latD] = precessEcliptic(lonR, latR, J2000, jdUt);
      const [az, altTrue] = azAlt(engine.data, lonD / DEG, latD / DEG, jdUt, lat, lonEast);
      const pl = place(az, altTrue, false);
      const s = { l, x: pl.x, y: pl.y, inFrame: pl.inFrame, altApp: pl.altApp, side: pl.side };
      galSamples.push(s);
      if (l === 0)
        gcSamp = s;
    }
    const galUp = galSamples.filter((s) => s.altApp > 0);
    const galInFrame = galUp.filter((s) => s.inFrame && Number.isFinite(s.x));
    const visible = mwDark && galUp.length > 0;
    let entry = null;
    let exit = null;
    if (galInFrame.length >= 2) {
      const byX = [...galInFrame].sort((a, b) => a.x - b.x);
      entry = { x: byX[0].x, y: byX[0].y };
      exit = { x: byX[byX.length - 1].x, y: byX[byX.length - 1].y };
    }
    const gcUp = gcSamp !== null && gcSamp.altApp > 0 && Number.isFinite(gcSamp.x);
    const galacticCenter = gcUp && gcSamp !== null ? {
      x: gcSamp.x,
      y: gcSamp.y,
      inFrame: gcSamp.inFrame,
      altitudeDeg: Math.round(gcSamp.altApp * 10) / 10,
      side: gcSamp.side
    } : null;
    let mwNote;
    if (!mwDark) {
      mwNote = moonBright ? "washed out by a bright Moon" : bortle !== void 0 && bortle > 6 ? "lost to light pollution" : "the sky is too bright (daylight or twilight)";
    } else if (galUp.length === 0) {
      mwNote = "the galactic plane is entirely below the horizon";
    } else if (galInFrame.length === 0) {
      mwNote = "above the horizon but outside this frame";
    } else if (galacticCenter?.inFrame) {
      mwNote = "crosses the frame, with the bright center in view";
    } else {
      mwNote = `crosses the frame; the bright center is ${gcUp ? "above the horizon, off-frame" : "below the horizon"}`;
    }
    const milkyWay = {
      visible,
      inFrame: visible && galInFrame.length > 0,
      entry,
      exit,
      galacticCenter,
      note: mwNote
    };
    const fieldClause = starfieldClause(limit, skyIsDark, moonBright, starfield);
    const poleAltTrue = Math.abs(lat);
    const polePlace = place(lat >= 0 ? 0 : 180, poleAltTrue, false);
    const pole = {
      which: lat >= 0 ? "north" : "south",
      altitudeDeg: Math.round(poleAltTrue * 10) / 10,
      x: Number.isFinite(polePlace.x) ? polePlace.x : null,
      y: Number.isFinite(polePlace.y) ? polePlace.y : null,
      inFrame: polePlace.inFrame
    };
    let overlays = null;
    if (opts.overlays) {
      const req = opts.overlays;
      overlays = { ecliptic: null, signs: null, houses: null, constellations: null };
      const projEcl = (lonDeg, latDeg) => {
        const [az, altTrue] = azAlt(engine.data, lonDeg, latDeg, jdUt, lat, lonEast);
        return place(az, altTrue, false);
      };
      const polylines = (pts) => {
        const segs = [];
        let cur = [];
        for (const [lo, la] of pts) {
          const p = projEcl(lo, la);
          if (p.inFrame && Number.isFinite(p.x))
            cur.push({ x: p.x, y: p.y });
          else {
            if (cur.length > 1)
              segs.push(cur);
            cur = [];
          }
        }
        if (cur.length > 1)
          segs.push(cur);
        return segs;
      };
      if (req.ecliptic) {
        const path = [];
        for (let l = 0; l <= 360; l += 1)
          path.push([l, 0]);
        overlays.ecliptic = polylines(path).map((s) => ({ label: "ecliptic", points: s }));
      }
      if (req.signs) {
        const marks = [];
        for (let k = 0; k < 12; k++) {
          const lon = k * 30 + 15;
          const p = projEcl(lon, 0);
          if (p.inFrame && Number.isFinite(p.x))
            marks.push({ text: SIGNS[k], x: p.x, y: p.y, lon });
        }
        overlays.signs = marks;
      }
      if (req.houses) {
        const marks = [];
        try {
          const chart = engine.chartAt(jdUt, lat, lonEast, { houseSystem: req.houseSystem ?? "placidus" });
          for (let i = 0; i < 12; i++) {
            const p = projEcl(chart.cusps[i], 0);
            if (p.inFrame && Number.isFinite(p.x))
              marks.push({ text: `H${i + 1}`, x: p.x, y: p.y, lon: chart.cusps[i] });
          }
          const ang = [
            ["ASC", chart.angles.asc],
            ["MC", chart.angles.mc],
            ["DSC", mod(chart.angles.asc + 180, 360)],
            ["IC", mod(chart.angles.mc + 180, 360)]
          ];
          for (const [t, lo] of ang) {
            const p = projEcl(lo, 0);
            if (p.inFrame && Number.isFinite(p.x))
              marks.push({ text: t, x: p.x, y: p.y, lon: lo });
          }
        } catch {
        }
        overlays.houses = marks;
      }
      if (req.constellations && engine.data.constellations) {
        const jde = jdTT(jdUt);
        const lines = [];
        const toDate = (lo, la) => {
          const [l2, b2] = precessEcliptic(lo * DEG, la * DEG, J2000, jde);
          return [l2 / DEG, b2 / DEG];
        };
        for (const fig of engine.data.constellations.lines) {
          for (const seg of fig.segs) {
            const ofDate = seg.map(([lo, la]) => toDate(lo, la));
            for (const s of polylines(ofDate))
              lines.push({ label: fig.con, points: s });
          }
        }
        const labels = [];
        for (const lab of engine.data.constellations.labels) {
          const [lo, la] = toDate(lab.lon, lab.lat);
          const p = projEcl(lo, la);
          if (p.inFrame && Number.isFinite(p.x))
            labels.push({ text: lab.name, x: p.x, y: p.y });
        }
        overlays.constellations = { lines, labels };
      }
    }
    const sky = {
      twilight: stage,
      sunAltitudeDeg: Math.round(sunAltTrue * 10) / 10,
      sunAzimuthDeg: Math.round(sunAz * 10) / 10,
      limitingMag: limit,
      moonAltitudeDeg: Math.round(moonAltTrue * 10) / 10,
      moonIllum: Math.round(moonIllum * 1e3) / 1e3,
      brightestAzimuthDeg: brightestAz === null ? null : Math.round(brightestAz * 10) / 10,
      horizonY
    };
    const directives = buildDirectives(lens, sky, milkyWay, fieldClause, overlays, width, height, aimAz, aimAlt);
    const prompt = buildPrompt(bodies, offFrame, directives, starfield);
    const renderPlan = buildRenderPlan(sky, bodies, starfield, milkyWay, overlays, pole, directives, width, height);
    return {
      instant: { jdUt, utc: jdToUtcIso(jdUt) },
      observer: { lat, lonEast, ...altM !== void 0 ? { altM } : {} },
      aim: { azimuthDeg: Math.round(aimAz * 10) / 10, altitudeDeg: aimAlt, compass: compassOf(aimAz) },
      lens,
      image: { width, height },
      sky,
      bodies,
      offFrame,
      milkyWay,
      pole,
      starfield,
      overlays,
      renderPlan,
      directives,
      prompt
    };
  }
  var SIDEREAL_DEG_PER_MIN = 360 / 1436.0682;
  function skyViewSequence(engine, view, seq, opts = {}) {
    if (!Number.isInteger(seq.frames) || seq.frames < 1) {
      throw new Error("frames must be a positive integer");
    }
    let stepDays = 0;
    if (seq.frames > 1) {
      if (seq.endJdUt !== void 0) {
        stepDays = (seq.endJdUt - seq.startJdUt) / (seq.frames - 1);
      } else if (seq.stepMinutes !== void 0) {
        stepDays = seq.stepMinutes / 1440;
      } else {
        throw new Error("provide stepMinutes or endJdUt for a multi-frame sequence");
      }
    }
    const frames = [];
    for (let i = 0; i < seq.frames; i++) {
      frames.push(skyView(engine, seq.startJdUt + i * stepDays, view, opts));
    }
    const stepMinutes = stepDays * 1440;
    return {
      frames,
      count: frames.length,
      startJdUt: seq.startJdUt,
      endJdUt: seq.startJdUt + (seq.frames - 1) * stepDays,
      stepMinutes,
      durationMinutes: stepMinutes * (seq.frames - 1),
      rotationDegPerHour: SIDEREAL_DEG_PER_MIN * 60,
      rotationDegPerStep: SIDEREAL_DEG_PER_MIN * stepMinutes
    };
  }
  function buildDirectives(lens, sky, milkyWay, fieldClause, overlays, width, height, aimAz, aimAlt) {
    const out = [];
    out.push(`Frame ${width}x${height}px, ${lens.name} lens (${lens.focalLengthMm}mm, ${lens.hfovDeg} deg horizontal field), ${lens.projection} projection. Looking ${compassOf(aimAz)} (azimuth ${Math.round(aimAz)} deg) at altitude ${aimAlt} deg.`);
    if (lens.projection === "rectilinear" && lens.hfovDeg > 100) {
      out.push("Field of view exceeds 100 deg on a rectilinear projection; corners stretch heavily. Consider the ultrawide (fisheye) lens.");
    }
    if (sky.horizonY !== null && sky.horizonY >= 0 && sky.horizonY <= height) {
      const pct = Math.round(sky.horizonY / height * 100);
      out.push(`Keep the horizon level and straight at y=${sky.horizonY} (${pct}% down the frame).`);
    } else {
      out.push("The true horizon is outside the frame.");
    }
    if (sky.twilight === "night") {
      const moonLit = sky.moonAltitudeDeg !== null && sky.moonAltitudeDeg > 0 && (sky.moonIllum ?? 0) > 0.3;
      out.push(`Deep night: the Sun is ${Math.abs(sky.sunAltitudeDeg).toFixed(1)} deg below the horizon, no twilight. ` + (moonLit ? "Moonlight casts a soft, neutral blue-grey wash, brighter near the Moon. " : "The sky is dark all the way down to the horizon (at most faint airglow); do not paint a warm twilight glow. ") + "You choose exact colors.");
    } else {
      const sunWhere = sky.sunAltitudeDeg >= 0 ? "above" : "below";
      const grad = sky.brightestAzimuthDeg !== null ? `Render the sky brightest toward ${compassOf(sky.brightestAzimuthDeg)} (azimuth ${Math.round(sky.brightestAzimuthDeg)} deg), fading across the frame. ` : "";
      out.push(`${sky.twilight} twilight: the Sun is ${Math.abs(sky.sunAltitudeDeg).toFixed(1)} deg ${sunWhere} the horizon. ${grad}You choose exact colors; keep it warm low and cool high.`);
    }
    out.push(`Naked-eye limit about magnitude ${sky.limitingMag}. Render every body listed below. ${fieldClause}`);
    if (milkyWay.visible && milkyWay.inFrame && milkyWay.entry && milkyWay.exit) {
      const gc = milkyWay.galacticCenter;
      const center = gc?.inFrame ? `Its brightest part, the galactic center in Sagittarius, is at (${gc.x},${gc.y}). ` : gc ? `Its bright center (Sagittarius) lies off-frame ${gc.side}. ` : "Its bright center is below the horizon, so the band here is the fainter outer arm. ";
      out.push(`The Milky Way crosses the frame, entering near (${milkyWay.entry.x},${milkyWay.entry.y}) and exiting near (${milkyWay.exit.x},${milkyWay.exit.y}). ${center}Render it as a soft, mottled band of unresolved starlight, dustier and brighter toward the center; not individual stars.`);
    }
    if (overlays) {
      const parts = [];
      if (overlays.ecliptic?.length)
        parts.push("the ecliptic line");
      if (overlays.signs?.length) {
        parts.push(`zodiac signs (${overlays.signs.map((s) => s.text).join(", ")})`);
      }
      if (overlays.houses?.length)
        parts.push("house cusps and the angles (ASC, MC)");
      if (overlays.constellations?.labels.length) {
        const names = overlays.constellations.labels.map((l) => l.text);
        const shown = names.slice(0, 8).join(", ") + (names.length > 8 ? ", ..." : "");
        parts.push(`constellation figures (${shown})`);
      }
      if (parts.length) {
        out.push(`OVERLAY (optional annotation layer, not part of a photoreal sky): the structured \`overlays\` data holds exact pixels for ${parts.join("; ")}. Draw these only for an annotated star chart, as thin lines and small labels over the sky.`);
      }
    }
    out.push("You set color, light, and atmosphere. Do not move, resize, or recolor the placed bodies for composition; their positions and sizes are physically correct.");
    return out;
  }
  var ANCHOR_MAG = 2.5;
  function buildPrompt(bodies, offFrame, directives, starfield) {
    const lines = [];
    lines.push("PHOTOREALISTIC SKY, exact placement (pixel origin top-left):");
    lines.push("");
    lines.push("SCENE:");
    for (const d of directives)
      lines.push(`- ${d}`);
    lines.push("");
    lines.push("BODIES (render EVERY one at its given pixel; do not relocate, rescale, or omit any):");
    if (bodies.length === 0)
      lines.push("- none in frame");
    const isField = (b) => b.id.startsWith("star:") && (b.magnitude ?? 99) > ANCHOR_MAG;
    const fieldStars = bodies.filter(isField);
    for (const b of bodies) {
      if (isField(b))
        continue;
      const parts = [`${b.name} at (${b.x},${b.y})`];
      const isDisk = b.sizePx >= 3;
      if (isDisk) {
        parts.push(`~${b.sizePx}px wide disk`);
        if (b.phaseName) {
          parts.push(`${b.phaseName}, ${Math.round((b.illum ?? 0) * 100)}% lit`);
          if (b.brightLimbClock)
            parts.push(`bright side toward ${b.brightLimbClock}`);
        } else if (b.brightnessHint) {
          parts.push(b.brightnessHint);
        }
      } else {
        parts.push("point of light");
        if (b.brightnessHint)
          parts.push(b.brightnessHint);
      }
      if (b.color)
        parts.push(`colour ${b.color}`);
      let line = `- ${parts.join(", ")}`;
      if (b.note)
        line += `. ${b.note}`;
      lines.push(line);
    }
    if (fieldStars.length > 0) {
      lines.push(starfield.complete ? `- Plus ${fieldStars.length} field stars at the exact pixels in the structured \`bodies\` data, a complete naked-eye field to magnitude ${starfield.limitingMag}: render each as a fine point of light; do not add, move, or omit stars.` : `- Plus ${fieldStars.length} fainter stars at the exact pixels in the structured \`bodies\` data; render them as fine points, and you may add a sparse scatter more.`);
    }
    if (offFrame.length > 0) {
      lines.push("");
      lines.push("OUTSIDE THE FRAME (do not draw these inside it):");
      const sideText = {
        left: "off the left edge",
        right: "off the right edge",
        above: "above the top edge",
        below: "below the bottom edge",
        behind: "behind the camera"
      };
      for (const o of offFrame) {
        lines.push(`- ${o.name} is ${sideText[o.side]}, ${o.deltaDeg} deg from center`);
      }
    }
    return lines.join("\n");
  }
  function buildBackgroundPrompt(directives) {
    const drop = ["Naked-eye limit", "The Milky Way", "OVERLAY", "You set color"];
    const scene = directives.filter((d) => !drop.some((p) => d.startsWith(p)));
    const lines = ["PHOTOREALISTIC SKY PLATE (atmosphere and horizon only, no celestial bodies):", ""];
    for (const d of scene)
      lines.push(`- ${d}`);
    lines.push("- Render ONLY the sky gradient, clouds, atmosphere, and any horizon or foreground. Do NOT draw the Sun, Moon, planets, stars, the Milky Way, or any point of light: those are composited separately. Keep the sky clean and even, with no baked-in glare where bright bodies will sit.");
    return lines.join("\n");
  }
  function buildRenderPlan(sky, bodies, starfield, milkyWay, overlays, pole, directives, width, height) {
    const planetCount = bodies.filter((b) => !b.id.startsWith("star:")).length;
    const starCount = bodies.length - planetCount;
    const overlayCount = overlays ? (overlays.ecliptic?.length ?? 0) + (overlays.signs?.length ?? 0) + (overlays.houses?.length ?? 0) + (overlays.constellations?.lines.length ?? 0) : 0;
    const layers = [
      {
        kind: "bodies",
        present: planetCount > 0,
        count: planetCount,
        composite: "Additive sprites at each pixel: refraction-flattened disks for the Sun and Moon (the Moon at its lit fraction, bright limb toward its clock angle), brightness-scaled glints for the planets."
      },
      {
        kind: "stars",
        present: starCount > 0,
        count: starCount,
        composite: starfield.complete ? "Fine additive points at the exact pixels in `bodies` (a complete field to the limiting magnitude); size and brightness from magnitude. Do not add or move stars." : "Fine additive points at the listed pixels, brightness from magnitude; a faint scatter may be added between them."
      },
      {
        kind: "milkyWay",
        present: milkyWay.visible && milkyWay.inFrame,
        count: milkyWay.inFrame ? 1 : 0,
        composite: "A diffuse luminous band along the entry-to-exit path, brightest toward the galactic center; soft and mottled, not resolved into stars."
      },
      {
        kind: "overlays",
        present: overlayCount > 0,
        count: overlayCount,
        composite: "Vector annotations (lines and labels) drawn over the composite. Reference frames, not photoreal; optional."
      }
    ];
    return {
      background: {
        prompt: buildBackgroundPrompt(directives),
        width,
        height,
        constraints: [
          "No celestial bodies: no Sun, Moon, planets, stars, or Milky Way in the plate.",
          sky.horizonY !== null ? `Horizon at y=${sky.horizonY}.` : "Horizon outside the frame.",
          "Even, composite-ready sky; no baked-in glare or lens flare where bright bodies will sit."
        ]
      },
      layers,
      animation: {
        strategy: "static",
        rotationDegPerHour: Math.round(SIDEREAL_DEG_PER_MIN * 60 * 1e4) / 1e4,
        pole,
        notes: "For a sequence (skyViewSequence): generate one background plate (or a few for cloud motion), then per frame rotate the star layer about the pole at the sidereal rate and re-place the bodies, Moon, and Milky Way from each frame's spec. Use a video model only for cloud and atmosphere motion, never for the bodies."
      },
      postprocess: [
        "Apply atmospheric extinction and reddening to bodies below about 10 deg altitude.",
        "Add subtle bloom to bodies brighter than magnitude -1; keep faint stars crisp points.",
        "Match every composited layer to the plate's color temperature and exposure."
      ]
    };
  }

  // node_modules/caelus/dist/src/astrocartography.js
  function mapLon(deg) {
    const d = (deg % 360 + 360) % 360;
    return d > 180 ? d - 360 : d;
  }
  function planetLines(ra, dec, gastDeg, latMin = -85, latMax = 85, latStep = 1) {
    const mc = mapLon(ra - gastDeg);
    const ic = mapLon(ra - gastDeg - 180);
    const td = Math.tan(dec * DEG);
    const asc = [];
    const dsc = [];
    const n = Math.floor((latMax - latMin) / latStep + 1e-9);
    const EDGE = 1 - 1e-9;
    for (let i = 0; i <= n; i++) {
      const phi = latMin + i * latStep;
      const x = -Math.tan(phi * DEG) * td;
      if (x >= -EDGE && x <= EDGE) {
        const h0 = Math.acos(x) / DEG;
        asc.push([mapLon(ra - h0 - gastDeg), phi]);
        dsc.push([mapLon(ra + h0 - gastDeg), phi]);
      }
    }
    return { mc, ic, asc, dsc };
  }
  function astrocartography(engine, jdUt, bodies, latMin = -85, latMax = 85, latStep = 1) {
    const g = gast(engine.data, jdUt) / DEG;
    const out = {};
    for (const b of bodies) {
      const p = engine.position(b, jdUt);
      out[b] = planetLines(p.ra, p.dec, g, latMin, latMax, latStep);
    }
    return out;
  }

  // node_modules/caelus/dist/src/ephemeris.js
  function ephemeris(engine, bodies, opts) {
    if (opts.step <= 0)
      throw new Error("ephemeris step must be positive");
    const value = opts.value ?? "longitude";
    const zodiac = opts.zodiac ?? "tropical";
    const out = {};
    for (const b of bodies)
      out[b] = [];
    const total = Math.floor((opts.end - opts.start) / opts.step + 1e-9) + 1;
    for (let i = 0; i < total; i++) {
      const jd = opts.start + i * opts.step;
      for (const b of bodies) {
        let v;
        if (value === "longitude") {
          v = engine.longitude(b, jd, { zodiac });
        } else {
          const p = engine.position(b, jd, { zodiac });
          v = value === "latitude" ? p.lat : value === "declination" ? p.dec : value === "rightAscension" ? p.ra : p.speed;
        }
        out[b].push({ jd, value: v });
      }
    }
    return out;
  }

  // node_modules/caelus/dist/src/features.js
  var DEFAULT_BODIES = [
    "sun",
    "moon",
    "mercury",
    "venus",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto"
  ];
  function featureVector(weightedLons) {
    const out = [];
    for (const [lon, w] of weightedLons) {
      const r = lon * DEG;
      out.push(w * Math.cos(r), w * Math.sin(r));
    }
    return out;
  }
  function cosineSimilarity(a, b) {
    let dot2 = 0, na = 0, nb = 0;
    const n = Math.min(a.length, b.length);
    for (let i = 0; i < n; i++) {
      dot2 += a[i] * b[i];
      na += a[i] * a[i];
      nb += b[i] * b[i];
    }
    if (na === 0 || nb === 0)
      return 0;
    return dot2 / (Math.sqrt(na) * Math.sqrt(nb));
  }
  function chartFeatures(engine, jdUt, opts = {}) {
    const bodies = opts.bodies ?? DEFAULT_BODIES;
    const zodiac = opts.zodiac ?? "tropical";
    const wl = bodies.map((b) => [
      engine.longitude(b, jdUt, { zodiac }),
      opts.weights?.[b] ?? 1
    ]);
    return featureVector(wl);
  }
  function configurationFit(engine, jdUt, target, opts = {}) {
    return cosineSimilarity(chartFeatures(engine, jdUt, opts), target);
  }
  function searchConfigurations(engine, target, opts) {
    return rankMoments({ start: opts.start, end: opts.end, step: opts.step, limit: opts.limit }, (jd) => configurationFit(engine, jd, target, opts));
  }

  // node_modules/caelus/dist/src/compiler.js
  var PHI = 0.6180339887498949;
  function angDist(a, b) {
    return Math.abs((a - b + 180) % 360 - 180);
  }
  function signLoss(lon, sign) {
    const lo = (sign % 12 + 12) % 12 * 30;
    const d = ((lon - lo) % 360 + 360) % 360;
    if (d < 30)
      return 0;
    return Math.min(d - 30, 360 - d);
  }
  function constraintLoss(lons, c) {
    if (c.kind === "aspect")
      return Math.abs(angDist(lons[c.a], lons[c.b]) - c.angle);
    if (c.kind === "sign")
      return signLoss(lons[c.body], c.sign);
    return angDist(lons[c.body], c.degree);
  }
  function formLoss(lons, constraints) {
    let total = 0;
    for (const c of constraints)
      total += (c.weight ?? 1) * constraintLoss(lons, c);
    return total;
  }
  function bodiesOf(constraints) {
    const s = /* @__PURE__ */ new Set();
    for (const c of constraints) {
      if (c.kind === "aspect") {
        s.add(c.a);
        s.add(c.b);
      } else
        s.add(c.body);
    }
    return [...s].sort();
  }
  function involves(c, body) {
    return c.kind === "aspect" ? c.a === body || c.b === body : c.body === body;
  }
  function bodyLoss(lons, body, constraints) {
    let total = 0;
    for (const c of constraints)
      if (involves(c, body))
        total += (c.weight ?? 1) * constraintLoss(lons, c);
    return total;
  }
  function compileForm(constraints, opts = {}) {
    const restarts = opts.restarts ?? 12;
    const iters = opts.iters ?? 8;
    const impossibleDeg = opts.impossibleDeg ?? 5;
    const bodies = bodiesOf(constraints);
    const n = Math.max(bodies.length, 1);
    let best = null;
    for (let r = 0; r < restarts; r++) {
      const lons2 = {};
      bodies.forEach((b, i) => {
        lons2[b] = (r * n + i + 1) * PHI % 1 * 360;
      });
      for (let it = 0; it < iters; it++) {
        for (const b of bodies) {
          let bestL = lons2[b];
          let bestE = bodyLoss(lons2, b, constraints);
          for (let i = 0; i < 360; i++) {
            lons2[b] = i;
            const e2 = bodyLoss(lons2, b, constraints);
            if (e2 < bestE) {
              bestE = e2;
              bestL = i;
            }
          }
          for (let k = -20; k <= 20; k++) {
            const cand = ((bestL + k * 0.05) % 360 + 360) % 360;
            lons2[b] = cand;
            const e2 = bodyLoss(lons2, b, constraints);
            if (e2 < bestE) {
              bestE = e2;
              bestL = cand;
            }
          }
          lons2[b] = bestL;
        }
      }
      const e = formLoss(lons2, constraints);
      if (best === null || e < best.e)
        best = { e, lons: { ...lons2 } };
    }
    const lons = best.lons;
    let maxLoss = 0;
    for (const c of constraints)
      maxLoss = Math.max(maxLoss, constraintLoss(lons, c));
    return {
      longitudes: lons,
      residual: best.e,
      maxConstraintLoss: maxLoss,
      impossible: maxLoss > impossibleDeg,
      constraints: constraints.map((c) => ({ ...c, loss: constraintLoss(lons, c) }))
    };
  }

  // node_modules/caelus/dist/src/synthetic.js
  var TWO_PI7 = 2 * Math.PI;
  function validateSyntheticSystem(sys) {
    const problems = [];
    const seen = /* @__PURE__ */ new Set();
    for (const b of sys.bodies) {
      if (seen.has(b.id))
        problems.push(`duplicate body id '${b.id}'`);
      seen.add(b.id);
      if (b.mode === "periodic" && !(b.periodDays > 0)) {
        problems.push(`body '${b.id}': periodDays must be > 0 (got ${b.periodDays})`);
      }
      if (b.mode === "kepler") {
        if (!(b.periodDays > 0))
          problems.push(`body '${b.id}': periodDays must be > 0 (got ${b.periodDays})`);
        if (!(b.a > 0))
          problems.push(`body '${b.id}': a must be > 0 (got ${b.a})`);
        if (!(b.e >= 0 && b.e < 1))
          problems.push(`body '${b.id}': e must be in [0, 1) (got ${b.e})`);
      }
    }
    if (sys.observer !== void 0 && !seen.has(sys.observer)) {
      problems.push(`observer '${sys.observer}' is not a body in the system`);
    }
    return { impossible: problems.length > 0, problems };
  }
  function bodySource(body) {
    if (body.mode === "placement") {
      const R = 1e9;
      const lam = body.lonDeg * DEG;
      const v = [R * Math.cos(lam), R * Math.sin(lam), 0];
      return { xyz: () => v };
    }
    if (body.mode === "periodic") {
      const els2 = {
        a: Math.cbrt(body.periodDays * body.periodDays),
        e: 0,
        i: 0,
        node: 0,
        peri: 0,
        M0: body.phaseDeg * DEG,
        n: TWO_PI7 / body.periodDays
      };
      return new KeplerOrbit(els2, body.epoch ?? 0);
    }
    const els = {
      a: body.a,
      e: body.e,
      i: body.i * DEG,
      node: body.node * DEG,
      peri: body.peri * DEG,
      M0: body.M0 * DEG,
      n: TWO_PI7 / body.periodDays
    };
    return new KeplerOrbit(els, body.epoch ?? 0);
  }
  function syntheticSources(sys) {
    const out = {};
    for (const b of sys.bodies)
      out[b.id] = bodySource(b);
    return out;
  }
  function vecToPos(v) {
    const r = Math.hypot(v[0], v[1], v[2]);
    return {
      lonDeg: mod(Math.atan2(v[1], v[0]) / DEG, 360),
      latDeg: r === 0 ? 0 : Math.asin(v[2] / r) / DEG,
      r
    };
  }
  function syntheticPositions(sys, tDays) {
    const sources = syntheticSources(sys);
    const obs = sys.observer ? sources[sys.observer]?.xyz(tDays) ?? null : null;
    const out = {};
    for (const b of sys.bodies) {
      const v = sources[b.id].xyz(tDays);
      if (obs && sys.observer !== b.id) {
        out[b.id] = vecToPos([v[0] - obs[0], v[1] - obs[1], v[2] - obs[2]]);
      } else {
        out[b.id] = vecToPos(v);
      }
    }
    return out;
  }
  function syntheticEphemeris(sys) {
    const { impossible, problems } = validateSyntheticSystem(sys);
    const sources = syntheticSources(sys);
    const ids = sys.bodies.map((b) => b.id);
    const apparent = (id, t) => {
      const v = sources[id].xyz(t);
      if (sys.observer && sys.observer !== id) {
        const o = sources[sys.observer].xyz(t);
        return vecToPos([v[0] - o[0], v[1] - o[1], v[2] - o[2]]);
      }
      return vecToPos(v);
    };
    return {
      impossible,
      problems,
      bodies: () => [...ids],
      longitude: (id, t) => apparent(id, t).lonDeg,
      position: (id, t) => {
        const p = apparent(id, t);
        const h = 0.05;
        const l0 = apparent(id, t - h).lonDeg;
        const l1 = apparent(id, t + h).lonDeg;
        const speed = (mod(l1 - l0 + 540, 360) - 180) / (2 * h);
        return { ...p, speed, retrograde: speed < 0 };
      }
    };
  }
  function registerSyntheticSystem(engine, sys) {
    const sources = syntheticSources(sys);
    for (const b of sys.bodies) {
      engine.registerSource(b.id, sources[b.id]);
      const render = sys.render?.[b.id];
      if (render)
        engine.registerRender?.(b.id, render);
    }
    return sys.bodies.map((b) => b.id);
  }
  function syntheticRender(sys, id) {
    return sys.render?.[id];
  }

  // node_modules/caelus/dist/src/profections.js
  var SIGN_RULERS = [
    "mars",
    "venus",
    "mercury",
    "moon",
    "sun",
    "mercury",
    "venus",
    "mars",
    "jupiter",
    "saturn",
    "saturn",
    "jupiter"
  ];
  function signRuler(sign) {
    return SIGN_RULERS[mod(sign, 12)];
  }
  function profectedSign(ascSign, steps) {
    const sign = mod(ascSign + steps, 12);
    return { sign: SIGNS[sign], sign_index: sign, house: mod(steps, 12) + 1, lord: signRuler(sign) };
  }
  function profection(ascSign, natalJd, targetJd, yearLength = TROPICAL_YEAR) {
    const age = (targetJd - natalJd) / yearLength;
    const years = Math.floor(age);
    const month = Math.floor((age - years) * 12);
    return {
      age_years: years,
      month: month + 1,
      annual: profectedSign(ascSign, years),
      monthly: profectedSign(ascSign, years + month)
    };
  }
  function profectionAt(engine, natalJd, targetJd, lat, lonEast, zodiac = "tropical", yearLength = TROPICAL_YEAR) {
    const asc = engine.chartAt(natalJd, lat, lonEast, { zodiac }).angles.asc;
    const ascSign = mod(Math.floor(asc / 30), 12);
    return profection(ascSign, natalJd, targetJd, yearLength);
  }

  // node_modules/caelus/dist/src/firdaria.js
  var FIRDARIA_ORDER = [
    "sun",
    "venus",
    "mercury",
    "moon",
    "saturn",
    "jupiter",
    "mars"
  ];
  var FIRDARIA_YEARS = {
    sun: 10,
    venus: 8,
    mercury: 13,
    moon: 9,
    saturn: 11,
    jupiter: 12,
    mars: 7
  };
  var NODE_PERIODS = [
    ["north_node", 3],
    ["south_node", 2]
  ];
  function firdariaSequence(day) {
    const start = day ? 0 : FIRDARIA_ORDER.indexOf("moon");
    const planets = [];
    for (let i = 0; i < 7; i++) {
      const lord = FIRDARIA_ORDER[(start + i) % 7];
      planets.push([lord, FIRDARIA_YEARS[lord]]);
    }
    return [...planets, ...NODE_PERIODS.map((p) => [p[0], p[1]])];
  }
  function firdaria(day, natalJd, yearLength = TROPICAL_YEAR) {
    const out = [];
    let t = natalJd;
    for (const [lord, years] of firdariaSequence(day)) {
      const span = years * yearLength;
      const major = { lord, years, start: t, end: t + span, sub: [] };
      const li = FIRDARIA_ORDER.indexOf(lord);
      if (li >= 0) {
        const subSpan = span / 7;
        let st = t;
        for (let k = 0; k < 7; k++) {
          const sl = FIRDARIA_ORDER[(li + k) % 7];
          major.sub.push({ lord: sl, start: st, end: st + subSpan });
          st += subSpan;
        }
      }
      out.push(major);
      t += span;
    }
    return out;
  }
  function firdariaActive(day, natalJd, targetJd, yearLength = TROPICAL_YEAR) {
    for (const major of firdaria(day, natalJd, yearLength)) {
      if (major.start <= targetJd && targetJd < major.end) {
        const sub = major.sub.find((s) => s.start <= targetJd && targetJd < s.end);
        return { major: major.lord, sub: sub ? sub.lord : null };
      }
    }
    return { major: null, sub: null };
  }
  function firdariaAt(engine, natalJd, targetJd, lat, lonEast, yearLength = TROPICAL_YEAR) {
    const day = isDayChart(engine, natalJd, lat, lonEast);
    return { day, ...firdariaActive(day, natalJd, targetJd, yearLength) };
  }

  // node_modules/caelus/dist/src/releasing.js
  var ZR_PERIODS = [15, 8, 20, 25, 19, 20, 8, 15, 12, 27, 30, 12];
  var LEVEL_UNIT = { 1: 360, 2: 30, 3: 2.5, 4: 2.5 / 12 };
  var FULL_CYCLE = ZR_PERIODS.reduce((a, b) => a + b, 0) * 360;
  var EPS = 1e-9;
  function release(out, level, maxLevel, startSign, spanStart, spanEnd, horizon) {
    const unit2 = LEVEL_UNIT[level];
    let sign = startSign;
    let lb = false;
    let pendingLb = false;
    let cur = spanStart;
    while (cur < spanEnd - EPS && cur < horizon - EPS) {
      const plen = ZR_PERIODS[sign] * unit2;
      const subEnd = Math.min(cur + plen, spanEnd, horizon);
      out.push({ level, sign: SIGNS[sign], lord: SIGN_RULERS[sign], start: cur, end: subEnd, lb: pendingLb });
      if (level < maxLevel) {
        release(out, level + 1, maxLevel, sign, cur, Math.min(cur + plen, spanEnd), horizon);
      }
      cur += plen;
      pendingLb = false;
      const nxt = (sign + 1) % 12;
      if (nxt === startSign && !lb) {
        sign = (startSign + 6) % 12;
        lb = true;
        pendingLb = true;
      } else {
        sign = nxt;
      }
    }
  }
  function zrRelease(lotSign, natalJd, maxLevel = 2, horizonYears = 100) {
    const out = [];
    const horizon = natalJd + horizonYears * 360;
    release(out, 1, maxLevel, lotSign, natalJd, natalJd + FULL_CYCLE, horizon);
    return out;
  }
  function subAt(unit2, startSign, spanStart, spanEnd, target) {
    let sign = startSign;
    let lb = false;
    let cur = spanStart;
    while (cur < spanEnd - EPS) {
      const plen = ZR_PERIODS[sign] * unit2;
      const subEnd = Math.min(cur + plen, spanEnd);
      if (cur <= target && target < subEnd)
        return [sign, cur, subEnd];
      cur += plen;
      const nxt = (sign + 1) % 12;
      if (nxt === startSign && !lb) {
        sign = (startSign + 6) % 12;
        lb = true;
      } else
        sign = nxt;
    }
    return null;
  }
  function zrActive(lotSign, natalJd, targetJd) {
    const l1 = subAt(360, lotSign, natalJd, natalJd + FULL_CYCLE, targetJd);
    if (l1 === null)
      return null;
    const l2 = subAt(30, l1[0], l1[1], l1[2], targetJd);
    if (l2 === null)
      return null;
    const l3 = subAt(2.5, l2[0], l2[1], l2[2], targetJd);
    if (l3 === null)
      return null;
    const l4 = subAt(2.5 / 12, l3[0], l3[1], l3[2], targetJd);
    if (l4 === null)
      return null;
    return { l1: SIGNS[l1[0]], l2: SIGNS[l2[0]], l3: SIGNS[l3[0]], l4: SIGNS[l4[0]] };
  }
  function zrAt(engine, natalJd, targetJd, lat, lonEast, lot2 = "spirit", zodiac = "tropical") {
    const asc = engine.chartAt(natalJd, lat, lonEast, { zodiac }).angles.asc;
    const day = isDayChart(engine, natalJd, lat, lonEast);
    const sun = engine.longitude("sun", natalJd, { zodiac });
    const moon = engine.longitude("moon", natalJd, { zodiac });
    const lotLon = (lot2 === "spirit" ? lotSpirit : lotFortune)(asc, sun, moon, day);
    const lotSign = (Math.floor(lotLon / 30) % 12 + 12) % 12;
    const active = zrActive(lotSign, natalJd, targetJd) ?? {};
    return { lot: lot2, lot_sign: SIGNS[lotSign], day, ...active };
  }

  // node_modules/caelus/dist/src/vedic.js
  var NAKSHATRAS = [
    "Ashwini",
    "Bharani",
    "Krittika",
    "Rohini",
    "Mrigashira",
    "Ardra",
    "Punarvasu",
    "Pushya",
    "Ashlesha",
    "Magha",
    "Purva Phalguni",
    "Uttara Phalguni",
    "Hasta",
    "Chitra",
    "Swati",
    "Vishakha",
    "Anuradha",
    "Jyeshtha",
    "Mula",
    "Purva Ashadha",
    "Uttara Ashadha",
    "Shravana",
    "Dhanishta",
    "Shatabhisha",
    "Purva Bhadrapada",
    "Uttara Bhadrapada",
    "Revati"
  ];
  var VIMSHOTTARI_ORDER = [
    "ketu",
    "venus",
    "sun",
    "moon",
    "mars",
    "rahu",
    "jupiter",
    "saturn",
    "mercury"
  ];
  var VIMSHOTTARI_YEARS = {
    ketu: 7,
    venus: 20,
    sun: 6,
    moon: 10,
    mars: 7,
    rahu: 18,
    jupiter: 16,
    saturn: 19,
    mercury: 17
  };
  var NAK_SPAN = 360 / 27;
  var VIMSHOTTARI_TOTAL = 120;
  var DASHA_YEAR = 365.25;
  function mod360(x) {
    return (x % 360 + 360) % 360;
  }
  function nakshatra(siderealLon) {
    const lon = mod360(siderealLon);
    const i = Math.floor(lon / NAK_SPAN) % 27;
    const pos = lon - i * NAK_SPAN;
    const pada = Math.floor(pos / (NAK_SPAN / 4)) + 1;
    return { index: i, name: NAKSHATRAS[i], pada, lord: VIMSHOTTARI_ORDER[i % 9], pos };
  }
  function nakshatraAt(engine, jdUt, body = "moon", zodiac = "sidereal:lahiri") {
    return nakshatra(engine.longitude(body, jdUt, { zodiac }));
  }
  function vimshottariDashas(moonLon, natalJd, levels = 2, yearLength = DASHA_YEAR, count = 9) {
    const lon = mod360(moonLon);
    const nakI = Math.floor(lon / NAK_SPAN) % 27;
    const pos = lon - nakI * NAK_SPAN;
    const startLord = VIMSHOTTARI_ORDER[nakI % 9];
    const elapsed = pos / NAK_SPAN;
    const y0 = VIMSHOTTARI_YEARS[startLord];
    const li = VIMSHOTTARI_ORDER.indexOf(startLord);
    let t = natalJd - elapsed * y0 * yearLength;
    const dashas = [];
    for (let k = 0; k < count; k++) {
      const lord = VIMSHOTTARI_ORDER[(li + k) % 9];
      const years = VIMSHOTTARI_YEARS[lord];
      const span = years * yearLength;
      const maha = { level: 1, lord, start: t, end: t + span, sub: [] };
      if (levels >= 2) {
        const sli = VIMSHOTTARI_ORDER.indexOf(lord);
        let st = t;
        for (let j = 0; j < 9; j++) {
          const sl = VIMSHOTTARI_ORDER[(sli + j) % 9];
          const subSpan = years * VIMSHOTTARI_YEARS[sl] / VIMSHOTTARI_TOTAL * yearLength;
          maha.sub.push({ lord: sl, start: st, end: st + subSpan });
          st += subSpan;
        }
      }
      dashas.push(maha);
      t += span;
    }
    return { start_lord: startLord, balance_years: (1 - elapsed) * y0, dashas };
  }
  function activeIn(periods, target) {
    return periods.find((p) => p.start <= target && target < p.end) ?? null;
  }
  function vimshottariActive(moonLon, natalJd, targetJd, yearLength = DASHA_YEAR) {
    const timeline = vimshottariDashas(moonLon, natalJd, 2, yearLength, 10).dashas;
    const maha = activeIn(timeline, targetJd);
    if (maha === null)
      return null;
    const antar = activeIn(maha.sub, targetJd);
    if (antar === null)
      return { maha: maha.lord, antar: null, pratyantar: null };
    const ay = VIMSHOTTARI_YEARS[maha.lord] * VIMSHOTTARI_YEARS[antar.lord] / VIMSHOTTARI_TOTAL;
    const sli = VIMSHOTTARI_ORDER.indexOf(antar.lord);
    let st = antar.start;
    let pratyantar = null;
    for (let j = 0; j < 9; j++) {
      const sl = VIMSHOTTARI_ORDER[(sli + j) % 9];
      const span = ay * VIMSHOTTARI_YEARS[sl] / VIMSHOTTARI_TOTAL * yearLength;
      if (st <= targetJd && targetJd < st + span) {
        pratyantar = sl;
        break;
      }
      st += span;
    }
    return { maha: maha.lord, antar: antar.lord, pratyantar };
  }
  function vimshottariAt(engine, natalJd, targetJd, zodiac = "sidereal:lahiri", yearLength = DASHA_YEAR) {
    const moonLon = engine.longitude("moon", natalJd, { zodiac });
    const nak = nakshatra(moonLon);
    const active = vimshottariActive(moonLon, natalJd, targetJd, yearLength) ?? {};
    return {
      moon_nakshatra: nak.name,
      moon_pada: nak.pada,
      start_lord: VIMSHOTTARI_ORDER[nak.index % 9],
      ...active
    };
  }

  // node_modules/caelus/dist/src/directions.js
  var RAD = Math.PI / 180;
  var DEG2 = 180 / Math.PI;
  var KEYS = { ptolemy: 1, naibod: 0.9856473 };
  var TRADITIONAL = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"];
  var YEAR_DAYS = 365.2422;
  var mod3602 = (x) => (x % 360 + 360) % 360;
  function directionArcs(alpha, delta, ramc, phi) {
    const arcMc = mod3602(alpha - ramc);
    const arcIc = mod3602(alpha - ramc - 180);
    const t = Math.tan(phi * RAD) * Math.tan(delta * RAD);
    if (Math.abs(t) > 1)
      return { mc: arcMc, ic: arcIc, asc: null, dsc: null };
    const ad = Math.asin(t) * DEG2;
    return {
      mc: arcMc,
      ic: arcIc,
      asc: mod3602(alpha - ad - ramc - 90),
      dsc: mod3602(alpha + ad - ramc + 90)
    };
  }
  function directionYears(arc, key = "naibod") {
    return arc / KEYS[key];
  }
  function semiArcPosition(alpha, delta, ramc, phi) {
    const t = Math.tan(phi * RAD) * Math.tan(delta * RAD);
    if (Math.abs(t) > 1)
      return null;
    const ad = Math.asin(t) * DEG2;
    const mdu = ((alpha - ramc + 180) % 360 + 360) % 360 - 180;
    if (Math.abs(mdu) <= 90 + ad)
      return [mdu, 90 + ad];
    const sign = mdu >= 0 ? 1 : -1;
    return [sign * (180 - Math.abs(mdu)), 90 - ad];
  }
  function mundaneDirectionArc(alphaP, deltaP, alphaS, deltaS, ramc, phi) {
    const pp = semiArcPosition(alphaP, deltaP, ramc, phi);
    const ps = semiArcPosition(alphaS, deltaS, ramc, phi);
    if (pp === null || ps === null)
      return null;
    const [mdP, saP] = pp;
    const [mdS, saS] = ps;
    return mdP - mdS / saS * saP;
  }
  function mundaneDirections(engine, natalJd, lat, lonEast, bodies = TRADITIONAL, key = "naibod", maxYears = 90, yearLength = YEAR_DAYS) {
    const ramc = angles(engine.data, natalJd, lat, lonEast)[2] * DEG2;
    const pos = {};
    for (const b of bodies)
      pos[b] = engine.position(b, natalJd);
    const out = [];
    for (const p of bodies) {
      for (const s of bodies) {
        if (p === s)
          continue;
        const arc = mundaneDirectionArc(pos[p].ra, pos[p].dec, pos[s].ra, pos[s].dec, ramc, lat);
        if (arc === null)
          continue;
        const years = directionYears(arc, key);
        if (years >= 0 && years <= maxYears) {
          out.push({ promissor: p, significator: s, arc, years, jd: natalJd + years * yearLength });
        }
      }
    }
    out.sort((a, b) => a.years - b.years);
    return out;
  }
  function primaryDirections(engine, natalJd, lat, lonEast, bodies = TRADITIONAL, key = "naibod", maxYears = 90, yearLength = YEAR_DAYS) {
    const armc = angles(engine.data, natalJd, lat, lonEast)[2];
    const ramc = armc * DEG2;
    const out = [];
    const ANGLES = ["mc", "ic", "asc", "dsc"];
    for (const b of bodies) {
      const p = engine.position(b, natalJd);
      const arcs = directionArcs(p.ra, p.dec, ramc, lat);
      for (const angle of ANGLES) {
        const arc = arcs[angle];
        if (arc === null)
          continue;
        const years = directionYears(arc, key);
        if (years <= maxYears) {
          out.push({ body: b, angle: angle.toUpperCase(), arc, years, jd: natalJd + years * yearLength });
        }
      }
    }
    out.sort((a, b) => a.years - b.years);
    return out;
  }

  // node_modules/caelus/dist/src/vargas.js
  var NAVAMSA_START = [0, 9, 6, 3];
  var VARGA_DIVISIONS = [1, 2, 3, 9, 10, 12, 30];
  var TRIMSAMSA_ODD = [[5, 0], [10, 10], [18, 8], [25, 2], [30, 6]];
  var TRIMSAMSA_EVEN = [[5, 1], [12, 5], [20, 11], [25, 9], [30, 7]];
  function trimsamsa(rasi, within) {
    const bands = rasi % 2 === 0 ? TRIMSAMSA_ODD : TRIMSAMSA_EVEN;
    for (let i = 0; i < bands.length; i++)
      if (within < bands[i][0])
        return [bands[i][1], i + 1];
    return [bands[bands.length - 1][1], 5];
  }
  function vargaSign(rasi, div, n) {
    switch (n) {
      case 1:
        return rasi;
      // Parashari hora: odd sign first half -> Leo, second half -> Cancer; even
      // sign reversed (odd sign == even rasi index).
      case 2:
        return rasi % 2 === 0 === (div === 0) ? 4 : 3;
      case 3:
        return (rasi + 4 * div) % 12;
      case 9:
        return (NAVAMSA_START[rasi % 4] + div) % 12;
      case 10:
        return rasi % 2 === 0 ? (rasi + div) % 12 : (rasi + 8 + div) % 12;
      case 12:
        return (rasi + div) % 12;
      default:
        throw new Error(`unsupported varga D${n}`);
    }
  }
  function varga(siderealLon, n) {
    const lon = (siderealLon % 360 + 360) % 360;
    const rasi = Math.floor(lon / 30) % 12;
    const within = lon - rasi * 30;
    let s;
    let division;
    if (n === 30) {
      [s, division] = trimsamsa(rasi, within);
    } else {
      let div = Math.floor(within / (30 / n));
      if (div >= n)
        div = n - 1;
      s = vargaSign(rasi, div, n);
      division = div + 1;
    }
    return { varga: n, rasi: SIGNS[rasi], rasi_index: rasi, sign: SIGNS[s], sign_index: s, division };
  }
  function vargaAt(engine, jdUt, n, body = "moon", zodiac = "sidereal:lahiri") {
    return varga(engine.longitude(body, jdUt, { zodiac }), n);
  }
  function vargaChart(engine, jdUt, n, bodies = BODIES, zodiac = "sidereal:lahiri") {
    const out = {};
    for (const b of bodies)
      out[b] = varga(engine.longitude(b, jdUt, { zodiac }), n);
    return out;
  }

  // node_modules/caelus/dist/src/yogini.js
  var YOGINIS = [
    "Mangala",
    "Pingala",
    "Dhanya",
    "Bhramari",
    "Bhadrika",
    "Ulka",
    "Siddha",
    "Sankata"
  ];
  var YOGINI_LORDS = {
    Mangala: "moon",
    Pingala: "sun",
    Dhanya: "jupiter",
    Bhramari: "mars",
    Bhadrika: "mercury",
    Ulka: "saturn",
    Siddha: "venus",
    Sankata: "rahu"
  };
  var YOGINI_YEARS = [1, 2, 3, 4, 5, 6, 7, 8];
  var YOGINI_TOTAL = 36;
  function startingYogini(nakIndex) {
    const y = (nakIndex + 1 + 3) % 8;
    return ((y - 1) % 8 + 8) % 8;
  }
  function yoginiDashas(moonLon, natalJd, levels = 2, yearLength = DASHA_YEAR, count = 8) {
    const nak = nakshatra(moonLon);
    const start = startingYogini(nak.index);
    const elapsed = nak.pos / NAK_SPAN;
    const y0 = YOGINI_YEARS[start];
    let t = natalJd - elapsed * y0 * yearLength;
    const dashas = [];
    for (let k = 0; k < count; k++) {
      const yi = (start + k) % 8;
      const years = YOGINI_YEARS[yi];
      const span = years * yearLength;
      const maha = {
        level: 1,
        yogini: YOGINIS[yi],
        lord: YOGINI_LORDS[YOGINIS[yi]],
        years,
        start: t,
        end: t + span,
        sub: []
      };
      if (levels >= 2) {
        let st = t;
        for (let j = 0; j < 8; j++) {
          const sj = (yi + j) % 8;
          const subSpan = years * YOGINI_YEARS[sj] / YOGINI_TOTAL * yearLength;
          maha.sub.push({ yogini: YOGINIS[sj], lord: YOGINI_LORDS[YOGINIS[sj]], start: st, end: st + subSpan });
          st += subSpan;
        }
      }
      dashas.push(maha);
      t += span;
    }
    return { start_yogini: YOGINIS[start], balance_years: (1 - elapsed) * y0, dashas };
  }
  function yoginiActive(moonLon, natalJd, targetJd, yearLength = DASHA_YEAR) {
    const timeline = yoginiDashas(moonLon, natalJd, 2, yearLength, 24).dashas;
    const maha = timeline.find((p) => p.start <= targetJd && targetJd < p.end);
    if (!maha)
      return null;
    const antar = maha.sub.find((s) => s.start <= targetJd && targetJd < s.end);
    return { maha: maha.yogini, antar: antar ? antar.yogini : null };
  }
  function yoginiAt(engine, natalJd, targetJd, zodiac = "sidereal:lahiri", yearLength = DASHA_YEAR) {
    const moonLon = engine.longitude("moon", natalJd, { zodiac });
    const nak = nakshatra(moonLon);
    const active = yoginiActive(moonLon, natalJd, targetJd, yearLength) ?? {};
    return { moon_nakshatra: nak.name, start_yogini: YOGINIS[startingYogini(nak.index)], ...active };
  }

  // node_modules/caelus/dist/src/yogas.js
  var MAHAPURUSHA = [
    ["Ruchaka", "mars"],
    ["Bhadra", "mercury"],
    ["Hamsa", "jupiter"],
    ["Malavya", "venus"],
    ["Shasha", "saturn"]
  ];
  var KENDRA = /* @__PURE__ */ new Set([1, 4, 7, 10]);
  var YOGA_PLANETS = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"];
  function detectYogas(signs, ascSign) {
    const house = (sign) => ((sign - ascSign) % 12 + 12) % 12 + 1;
    const out = [];
    for (const [name, p] of MAHAPURUSHA) {
      const dig = dignities(p, signs[p]);
      if ((dig.includes("domicile") || dig.includes("exaltation")) && KENDRA.has(house(signs[p]))) {
        out.push({ yoga: name, planets: [p] });
      }
    }
    const jkFromMoon = ((signs.jupiter - signs.moon) % 12 + 12) % 12;
    if (jkFromMoon === 0 || jkFromMoon === 3 || jkFromMoon === 6 || jkFromMoon === 9) {
      out.push({ yoga: "Gajakesari", planets: ["jupiter", "moon"] });
    }
    if (signs.sun === signs.mercury)
      out.push({ yoga: "Budha-Aditya", planets: ["sun", "mercury"] });
    if (signs.moon === signs.mars)
      out.push({ yoga: "Chandra-Mangala", planets: ["moon", "mars"] });
    return out;
  }
  function kemadruma(signs, includeSun = false, includeNodes = false) {
    let planets = ["mars", "mercury", "jupiter", "venus", "saturn"];
    if (includeSun)
      planets = ["sun", ...planets];
    if (includeNodes)
      planets = [...planets, "rahu", "ketu"];
    planets = planets.filter((p) => p in signs);
    const moon = signs.moon;
    const occupied = /* @__PURE__ */ new Set([((moon - 1) % 12 + 12) % 12, moon, (moon + 1) % 12]);
    const present = !planets.some((p) => occupied.has(signs[p]));
    return { present, planets_checked: planets };
  }
  function kemadrumaAt(engine, natalJd, lat, lonEast, includeSun = false, includeNodes = false, zodiac = "sidereal:lahiri") {
    const chart = engine.chartAt(natalJd, lat, lonEast, { zodiac });
    const bodies = includeNodes ? [...YOGA_PLANETS, "mean_node"] : YOGA_PLANETS;
    const signs = {};
    for (const b of bodies)
      signs[b] = Math.floor(chart.bodies[b].lon / 30) % 12;
    if (includeNodes) {
      signs.rahu = signs.mean_node;
      signs.ketu = (signs.mean_node + 6) % 12;
    }
    return kemadruma(signs, includeSun, includeNodes);
  }
  function yogasAt(engine, natalJd, lat, lonEast, zodiac = "sidereal:lahiri") {
    const chart = engine.chartAt(natalJd, lat, lonEast, { zodiac });
    const ascSign = Math.floor(chart.angles.asc / 30) % 12;
    const signs = {};
    for (const b of YOGA_PLANETS)
      signs[b] = Math.floor(chart.bodies[b].lon / 30) % 12;
    return detectYogas(signs, ascSign);
  }

  // node_modules/caelus/dist/src/ashtottari.js
  var ASHTOTTARI_ORDER = [
    "sun",
    "moon",
    "mars",
    "mercury",
    "saturn",
    "jupiter",
    "rahu",
    "venus"
  ];
  var ASHTOTTARI_YEARS = {
    sun: 6,
    moon: 15,
    mars: 8,
    mercury: 17,
    saturn: 10,
    jupiter: 19,
    rahu: 12,
    venus: 21
  };
  var ASHTOTTARI_TOTAL = 108;
  var ASHTOTTARI_RANGES = [
    ["sun", 6, 4],
    ["moon", 10, 3],
    ["mars", 13, 4],
    ["mercury", 17, 3],
    ["saturn", 20, 3],
    ["jupiter", 23, 3],
    ["rahu", 26, 4],
    ["venus", 3, 3]
  ];
  function ashtottariLord(nakIndex) {
    for (const [lord, start, span] of ASHTOTTARI_RANGES) {
      if (((nakIndex - start) % 27 + 27) % 27 < span)
        return lord;
    }
    throw new Error(`no Ashtottari lord for nakshatra ${nakIndex}`);
  }
  function ashtottariDashas(moonLon, natalJd, levels = 2, yearLength = DASHA_YEAR, count = 8) {
    const lon = (moonLon % 360 + 360) % 360;
    const nakI = Math.floor(lon / NAK_SPAN) % 27;
    const startLord = ashtottariLord(nakI);
    const [, startNak, spanNak] = ASHTOTTARI_RANGES.find((r) => r[0] === startLord);
    const lordStartDeg = startNak * NAK_SPAN;
    const spanDeg = spanNak * NAK_SPAN;
    const elapsed = ((lon - lordStartDeg) % 360 + 360) % 360 / spanDeg;
    const y0 = ASHTOTTARI_YEARS[startLord];
    const li = ASHTOTTARI_ORDER.indexOf(startLord);
    let t = natalJd - elapsed * y0 * yearLength;
    const dashas = [];
    for (let k = 0; k < count; k++) {
      const lord = ASHTOTTARI_ORDER[(li + k) % 8];
      const years = ASHTOTTARI_YEARS[lord];
      const span = years * yearLength;
      const maha = { level: 1, lord, years, start: t, end: t + span, sub: [] };
      if (levels >= 2) {
        const sli = ASHTOTTARI_ORDER.indexOf(lord);
        let st = t;
        for (let j = 0; j < 8; j++) {
          const sl = ASHTOTTARI_ORDER[(sli + j) % 8];
          const subSpan = years * ASHTOTTARI_YEARS[sl] / ASHTOTTARI_TOTAL * yearLength;
          maha.sub.push({ lord: sl, start: st, end: st + subSpan });
          st += subSpan;
        }
      }
      dashas.push(maha);
      t += span;
    }
    return { start_lord: startLord, balance_years: (1 - elapsed) * y0, dashas };
  }
  function ashtottariActive(moonLon, natalJd, targetJd, yearLength = DASHA_YEAR) {
    const timeline = ashtottariDashas(moonLon, natalJd, 2, yearLength, 16).dashas;
    const maha = timeline.find((p) => p.start <= targetJd && targetJd < p.end);
    if (!maha)
      return null;
    const antar = maha.sub.find((s) => s.start <= targetJd && targetJd < s.end);
    return { maha: maha.lord, antar: antar ? antar.lord : null };
  }
  function ashtottariAt(engine, natalJd, targetJd, zodiac = "sidereal:lahiri", yearLength = DASHA_YEAR) {
    const moonLon = engine.longitude("moon", natalJd, { zodiac });
    const nak = nakshatra(moonLon);
    const active = ashtottariActive(moonLon, natalJd, targetJd, yearLength) ?? {};
    return { moon_nakshatra: nak.name, start_lord: ashtottariLord(nak.index), ...active };
  }

  // node_modules/caelus/dist/src/rajayoga.js
  var DRISHTI = {
    sun: [7],
    moon: [7],
    mercury: [7],
    venus: [7],
    mars: [4, 7, 8],
    jupiter: [5, 7, 9],
    saturn: [3, 7, 10]
  };
  var KENDRAS = [1, 4, 7, 10];
  var TRIKONAS = [1, 5, 9];
  var DHANA_HOUSES = [2, 5, 9, 11];
  var PURE_KENDRAS = [4, 7, 10];
  var PURE_TRIKONAS = [5, 9];
  var PLANETS = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"];
  function signLord(sign) {
    return SIGN_RULERS[(sign % 12 + 12) % 12];
  }
  function houseSign(ascSign, house) {
    return (ascSign + house - 1) % 12;
  }
  function houseLord(ascSign, house) {
    return signLord(houseSign(ascSign, house));
  }
  function houseFromAsc(ascSign, sign) {
    return ((sign - ascSign) % 12 + 12) % 12 + 1;
  }
  function aspectsSign(planet, planetSign, targetSign) {
    const dist = ((targetSign - planetSign) % 12 + 12) % 12 + 1;
    return (DRISHTI[planet] ?? [7]).includes(dist);
  }
  function parivartana(planetA, signA, planetB, signB) {
    return signLord(signA) === planetB && signLord(signB) === planetA;
  }
  function associationType(planetA, signA, planetB, signB) {
    if (planetA === planetB)
      return null;
    if (signA === signB)
      return "conjunction";
    if (parivartana(planetA, signA, planetB, signB))
      return "exchange";
    if (aspectsSign(planetA, signA, signB) && aspectsSign(planetB, signB, signA))
      return "aspect";
    return null;
  }
  function yogakarakas(ascSign) {
    const out = [];
    for (const p of PLANETS) {
      const ruled = /* @__PURE__ */ new Set();
      for (let h = 1; h <= 12; h++)
        if (houseLord(ascSign, h) === p)
          ruled.add(h);
      if (PURE_KENDRAS.some((h) => ruled.has(h)) && PURE_TRIKONAS.some((h) => ruled.has(h)))
        out.push(p);
    }
    return out.sort();
  }
  function lordPairYogas(ascSign, signs, housesA, housesB) {
    const lordsA = [...new Set(housesA.map((h) => houseLord(ascSign, h)))].sort();
    const lordsB = [...new Set(housesB.map((h) => houseLord(ascSign, h)))].sort();
    const seen = /* @__PURE__ */ new Map();
    for (const la of lordsA) {
      for (const lb of lordsB) {
        const via = associationType(la, signs[la], lb, signs[lb]);
        if (via === null)
          continue;
        const pair = [la, lb].sort().join("|");
        if (!seen.has(pair))
          seen.set(pair, via);
      }
    }
    return [...seen.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([pair, via]) => ({ lords: pair.split("|"), via }));
  }
  function rajaYogas(signs, ascSign) {
    return lordPairYogas(ascSign, signs, KENDRAS, TRIKONAS);
  }
  function dhanaYogas(signs, ascSign) {
    return lordPairYogas(ascSign, signs, DHANA_HOUSES, DHANA_HOUSES);
  }
  function signsOf(engine, natalJd, lat, lonEast, zodiac) {
    const chart = engine.chartAt(natalJd, lat, lonEast, { zodiac });
    const ascSign = Math.floor(chart.angles.asc / 30) % 12;
    const signs = {};
    for (const p of PLANETS)
      signs[p] = Math.floor(chart.bodies[p].lon / 30) % 12;
    return { signs, ascSign };
  }
  function rajaYogasAt(engine, natalJd, lat, lonEast, zodiac = "sidereal:lahiri") {
    const { signs, ascSign } = signsOf(engine, natalJd, lat, lonEast, zodiac);
    return { raja: rajaYogas(signs, ascSign), yogakarakas: yogakarakas(ascSign) };
  }
  function dhanaYogasAt(engine, natalJd, lat, lonEast, zodiac = "sidereal:lahiri") {
    const { signs, ascSign } = signsOf(engine, natalJd, lat, lonEast, zodiac);
    return dhanaYogas(signs, ascSign);
  }

  // node_modules/caelus/dist/src/patterns.js
  var PATTERN_ANGLES = {
    conjunction: 0,
    sextile: 60,
    square: 90,
    trine: 120,
    quincunx: 150,
    opposition: 180
  };
  var PATTERN_ORBS = {
    conjunction: 8,
    sextile: 4,
    square: 7,
    trine: 7,
    quincunx: 3,
    opposition: 8
  };
  var KIND_ORDER = [
    "grand_cross",
    "mystic_rectangle",
    "kite",
    "t_square",
    "grand_trine",
    "yod",
    "stellium_sign",
    "stellium_house"
  ];
  var separation2 = (la, lb) => Math.abs(mod(la - lb + 180, 360) - 180);
  function relation(la, lb, orbs) {
    const sep = separation2(la, lb);
    for (const name of Object.keys(PATTERN_ANGLES)) {
      const orb = Math.abs(sep - PATTERN_ANGLES[name]);
      if (orb <= orbs[name])
        return [name, orb];
    }
    return null;
  }
  function cmpBodies(a, b) {
    const n = Math.min(a.length, b.length);
    for (let i = 0; i < n; i++)
      if (a[i] !== b[i])
        return a[i] < b[i] ? -1 : 1;
    return a.length - b.length;
  }
  function detectPatternsIn(bodies, opts = {}) {
    const orbs = opts.orbs ?? PATTERN_ORBS;
    const names = (opts.bodies ?? Object.keys(bodies).filter((b) => !NOT_ASPECTABLE.has(b))).filter((b) => b in bodies);
    const lon = {};
    for (const b of names)
      lon[b] = mod(bodies[b].lon, 360);
    const key = (a, b) => a < b ? `${a}|${b}` : `${b}|${a}`;
    const rel = /* @__PURE__ */ new Map();
    for (let i = 0; i < names.length; i++) {
      for (let j = i + 1; j < names.length; j++) {
        const r = relation(lon[names[i]], lon[names[j]], orbs);
        if (r)
          rel.set(key(names[i], names[j]), r);
      }
    }
    const asp = (a, b) => rel.get(key(a, b)) ?? null;
    const isAspect = (a, b, kind) => {
      const r = asp(a, b);
      return r !== null && r[0] === kind;
    };
    const out = [];
    const grandTrines = [];
    for (let i = 0; i < names.length; i++) {
      for (let j = i + 1; j < names.length; j++) {
        for (let k = j + 1; k < names.length; k++) {
          const [a, b, c] = [names[i], names[j], names[k]];
          if (isAspect(a, b, "trine") && isAspect(b, c, "trine") && isAspect(a, c, "trine")) {
            const orb = Math.max(asp(a, b)[1], asp(b, c)[1], asp(a, c)[1]);
            grandTrines.push({ kind: "grand_trine", bodies: [a, b, c].sort(), orb });
          }
        }
      }
    }
    const grandCrosses = [];
    const mysticRectangles = [];
    for (let i = 0; i < names.length; i++) {
      for (let j = i + 1; j < names.length; j++) {
        for (let k = j + 1; k < names.length; k++) {
          for (let l = k + 1; l < names.length; l++) {
            const quad = [names[i], names[j], names[k], names[l]];
            const pairs = [
              [quad[0], quad[1]],
              [quad[0], quad[2]],
              [quad[0], quad[3]],
              [quad[1], quad[2]],
              [quad[1], quad[3]],
              [quad[2], quad[3]]
            ];
            const kinds = pairs.map(([a, b]) => asp(a, b));
            if (kinds.some((r) => r === null))
              continue;
            const counts = {};
            let worst = 0;
            for (const r of kinds) {
              counts[r[0]] = (counts[r[0]] ?? 0) + 1;
              if (r[1] > worst)
                worst = r[1];
            }
            if (counts.opposition === 2 && counts.square === 4) {
              grandCrosses.push({ kind: "grand_cross", bodies: [...quad].sort(), orb: worst });
            } else if (counts.opposition === 2 && counts.trine === 2 && counts.sextile === 2) {
              mysticRectangles.push({ kind: "mystic_rectangle", bodies: [...quad].sort(), orb: worst });
            }
          }
        }
      }
    }
    const kites = [];
    for (const gt of grandTrines) {
      const tri = gt.bodies;
      for (const d of names) {
        if (tri.includes(d))
          continue;
        for (const apex of tri) {
          const others = tri.filter((x) => x !== apex);
          if (isAspect(d, apex, "opposition") && isAspect(d, others[0], "sextile") && isAspect(d, others[1], "sextile")) {
            const orb = Math.max(gt.orb, asp(d, apex)[1], asp(d, others[0])[1], asp(d, others[1])[1]);
            kites.push({ kind: "kite", bodies: [...tri, d].sort(), apex, orb });
          }
        }
      }
    }
    const tSquares = [];
    for (let i = 0; i < names.length; i++) {
      for (let j = i + 1; j < names.length; j++) {
        const [a, b] = [names[i], names[j]];
        if (!isAspect(a, b, "opposition"))
          continue;
        for (const apex of names) {
          if (apex === a || apex === b)
            continue;
          if (isAspect(apex, a, "square") && isAspect(apex, b, "square")) {
            const orb = Math.max(asp(a, b)[1], asp(apex, a)[1], asp(apex, b)[1]);
            tSquares.push({ kind: "t_square", bodies: [a, b, apex].sort(), apex, orb });
          }
        }
      }
    }
    const yods = [];
    for (let i = 0; i < names.length; i++) {
      for (let j = i + 1; j < names.length; j++) {
        const [a, b] = [names[i], names[j]];
        if (!isAspect(a, b, "sextile"))
          continue;
        for (const apex of names) {
          if (apex === a || apex === b)
            continue;
          if (isAspect(apex, a, "quincunx") && isAspect(apex, b, "quincunx")) {
            const orb = Math.max(asp(a, b)[1], asp(apex, a)[1], asp(apex, b)[1]);
            yods.push({ kind: "yod", bodies: [a, b, apex].sort(), apex, orb });
          }
        }
      }
    }
    const subset = (small, big) => small.every((x) => big.includes(x));
    const keptTSquares = tSquares.filter((t) => !grandCrosses.some((g) => subset(t.bodies, g.bodies)));
    const keptTrines = grandTrines.filter((g) => !kites.some((k) => subset(g.bodies, k.bodies)));
    out.push(...grandCrosses, ...mysticRectangles, ...kites, ...keptTSquares, ...keptTrines, ...yods);
    const bySign = {};
    for (const b of names) {
      const s = Math.floor(lon[b] / 30) % 12;
      (bySign[s] ??= []).push(b);
    }
    for (const s of Object.keys(bySign)) {
      const members = bySign[Number(s)];
      if (members.length >= 3) {
        out.push({ kind: "stellium_sign", bodies: [...members].sort(), sign: SIGNS[Number(s)], orb: 0 });
      }
    }
    const byHouse = {};
    for (const b of names) {
      const h = bodies[b].house;
      if (h != null)
        (byHouse[h] ??= []).push(b);
    }
    for (const h of Object.keys(byHouse)) {
      const members = byHouse[Number(h)];
      if (members.length >= 3) {
        out.push({ kind: "stellium_house", bodies: [...members].sort(), house: Number(h), orb: 0 });
      }
    }
    out.sort((a, b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind) || cmpBodies(a.bodies, b.bodies));
    for (const p of out)
      p.orb = Math.round(p.orb * 1e4) / 1e4;
    return out;
  }
  function detectPatterns(chart, opts = {}) {
    const bodies = {};
    for (const [name, p] of Object.entries(chart.bodies)) {
      if (p)
        bodies[name] = { lon: p.lon, house: p.house };
    }
    return detectPatternsIn(bodies, opts);
  }

  // node_modules/caelus/dist/src/signature.js
  var ELEMENTS2 = ["fire", "earth", "air", "water"];
  var MODALITIES2 = ["cardinal", "fixed", "mutable"];
  var ANGULARITY = ["angular", "succedent", "cadent"];
  var RULERS = [
    "mars",
    "venus",
    "mercury",
    "moon",
    "sun",
    "mercury",
    "venus",
    "mars",
    "jupiter",
    "saturn",
    "saturn",
    "jupiter"
  ];
  function argmax(counts, order) {
    let best = order[0];
    let bestV = -1;
    for (const k of order)
      if (counts[k] > bestV) {
        bestV = counts[k];
        best = k;
      }
    return best;
  }
  function chartSignatureOf(bodies, opts = {}) {
    const names = (opts.bodies ?? Object.keys(bodies).filter((b) => !NOT_ASPECTABLE.has(b))).filter((b) => b in bodies);
    const elements = { fire: 0, earth: 0, air: 0, water: 0 };
    const modalities = { cardinal: 0, fixed: 0, mutable: 0 };
    const angularity2 = { angular: 0, succedent: 0, cadent: 0 };
    const quadrants = { 1: 0, 2: 0, 3: 0, 4: 0 };
    const hemispheres = { above: 0, below: 0, eastern: 0, western: 0 };
    const signCounts = {};
    for (const b of names) {
      const sign = Math.floor(mod(bodies[b].lon, 360) / 30) % 12;
      elements[ELEMENTS2[sign % 4]]++;
      modalities[MODALITIES2[sign % 3]]++;
      signCounts[sign] = (signCounts[sign] ?? 0) + 1;
      const h = bodies[b].house;
      if (h != null) {
        angularity2[ANGULARITY[(h - 1) % 3]]++;
        quadrants[String(Math.floor((h - 1) / 3) + 1)]++;
        hemispheres[h >= 7 ? "above" : "below"]++;
        hemispheres[[10, 11, 12, 1, 2, 3].includes(h) ? "eastern" : "western"]++;
      }
    }
    let domSign = null;
    let best = 1;
    for (const s of Object.keys(signCounts).map(Number).sort((a, b) => a - b)) {
      if (signCounts[s] > best) {
        best = signCounts[s];
        domSign = s;
      }
    }
    return {
      elements,
      modalities,
      angularity: angularity2,
      quadrants,
      hemispheres,
      dominant: {
        element: argmax(elements, ELEMENTS2),
        modality: argmax(modalities, MODALITIES2),
        sign: domSign !== null ? SIGNS[domSign] : null
      },
      ruler: opts.ascSign != null ? RULERS[opts.ascSign] : null,
      bodies: [...names].sort()
    };
  }
  function chartSignature(chart, opts = {}) {
    const bodies = {};
    for (const [name, p] of Object.entries(chart.bodies))
      if (p)
        bodies[name] = { lon: p.lon, house: p.house };
    const ascSign = opts.ascSign ?? Math.floor(mod(chart.angles.asc, 360) / 30) % 12;
    return chartSignatureOf(bodies, { ...opts, ascSign });
  }

  // node_modules/caelus/dist/src/dignity-score.js
  var PLANETS2 = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"];
  var DIGNITY_WEIGHTS = {
    rulership: 5,
    exaltation: 4,
    triplicity: 3,
    term: 2,
    face: 1,
    detriment: -5,
    fall: -4
  };
  var TRIPLICITY = [
    ["sun", "jupiter", "saturn"],
    // fire
    ["venus", "moon", "mars"],
    // earth
    ["saturn", "mercury", "jupiter"],
    // air
    ["venus", "mars", "moon"]
    // water
  ];
  var TERMS_EGYPTIAN = [
    [["jupiter", 6], ["venus", 12], ["mercury", 20], ["mars", 25], ["saturn", 30]],
    // Aries
    [["venus", 8], ["mercury", 14], ["jupiter", 22], ["saturn", 27], ["mars", 30]],
    // Taurus
    [["mercury", 6], ["jupiter", 12], ["venus", 17], ["mars", 24], ["saturn", 30]],
    // Gemini
    [["mars", 7], ["venus", 13], ["mercury", 19], ["jupiter", 26], ["saturn", 30]],
    // Cancer
    [["jupiter", 6], ["venus", 11], ["saturn", 18], ["mercury", 24], ["mars", 30]],
    // Leo
    [["mercury", 7], ["venus", 17], ["jupiter", 21], ["mars", 28], ["saturn", 30]],
    // Virgo
    [["saturn", 6], ["mercury", 14], ["jupiter", 21], ["venus", 28], ["mars", 30]],
    // Libra
    [["mars", 7], ["venus", 11], ["mercury", 19], ["jupiter", 24], ["saturn", 30]],
    // Scorpio
    [["jupiter", 12], ["venus", 17], ["mercury", 21], ["saturn", 26], ["mars", 30]],
    // Sagittarius
    [["mercury", 7], ["jupiter", 14], ["venus", 22], ["saturn", 26], ["mars", 30]],
    // Capricorn
    [["mercury", 7], ["venus", 13], ["jupiter", 20], ["mars", 25], ["saturn", 30]],
    // Aquarius
    [["venus", 12], ["jupiter", 16], ["mercury", 19], ["mars", 28], ["saturn", 30]]
    // Pisces
  ];
  var FACE_CYCLE = ["mars", "sun", "venus", "mercury", "moon", "saturn", "jupiter"];
  function termRuler(sign, degInSign, terms = TERMS_EGYPTIAN) {
    for (const [ruler, upper] of terms[sign])
      if (degInSign < upper)
        return ruler;
    return terms[sign][terms[sign].length - 1][0];
  }
  function faceRuler(lon) {
    return FACE_CYCLE[Math.floor(mod(lon, 360) / 10) % 7];
  }
  function dignityScore(planet, lon, sect = "day", terms = TERMS_EGYPTIAN) {
    const L = mod(lon, 360);
    const sign = Math.floor(L / 30) % 12;
    const deg = L - sign * 30;
    const held = {};
    if (DOMICILE[planet]?.includes(sign))
      held.rulership = DIGNITY_WEIGHTS.rulership;
    if (EXALTATION[planet] === sign)
      held.exaltation = DIGNITY_WEIGHTS.exaltation;
    const trip = TRIPLICITY[sign % 4][sect === "day" ? 0 : 1];
    if (planet === trip)
      held.triplicity = DIGNITY_WEIGHTS.triplicity;
    const tr = termRuler(sign, deg, terms);
    if (planet === tr)
      held.term = DIGNITY_WEIGHTS.term;
    const fr = faceRuler(L);
    if (planet === fr)
      held.face = DIGNITY_WEIGHTS.face;
    if (DOMICILE[planet]?.some((d) => (d + 6) % 12 === sign))
      held.detriment = DIGNITY_WEIGHTS.detriment;
    if (planet in EXALTATION && (EXALTATION[planet] + 6) % 12 === sign)
      held.fall = DIGNITY_WEIGHTS.fall;
    const positive = ["rulership", "exaltation", "triplicity", "term", "face"].some((k) => k in held);
    return {
      planet,
      rulership: held.rulership ?? 0,
      exaltation: held.exaltation ?? 0,
      triplicity: held.triplicity ?? 0,
      term: held.term ?? 0,
      face: held.face ?? 0,
      detriment: held.detriment ?? 0,
      fall: held.fall ?? 0,
      total: Object.values(held).reduce((a, b) => a + b, 0),
      peregrine: !positive,
      term_ruler: tr,
      face_ruler: fr
    };
  }
  function almuten(lon, sect = "day", terms = TERMS_EGYPTIAN) {
    let best = null;
    let bestScore = -1;
    for (const p of PLANETS2) {
      const d = dignityScore(p, lon, sect, terms);
      const score = d.rulership + d.exaltation + d.triplicity + d.term + d.face;
      if (score > bestScore) {
        bestScore = score;
        best = p;
      }
    }
    return { planet: best, score: bestScore };
  }

  // node_modules/caelus/dist/src/interpretation.js
  var LUMINARIES = /* @__PURE__ */ new Set(["sun", "moon"]);
  var ANGULAR_HOUSES = /* @__PURE__ */ new Set([1, 4, 7, 10]);
  var HARD_ASPECTS = /* @__PURE__ */ new Set(["conjunction", "square", "opposition"]);
  var CLASSICAL = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"];
  var SIGN_RULER = (() => {
    const r = new Array(12);
    for (const [body, signs] of Object.entries(DOMICILE)) {
      for (const s of signs)
        r[s] = body;
    }
    return r;
  })();
  var SIGN_EXALT = (() => {
    const r = new Array(12);
    for (const [body, sign] of Object.entries(EXALTATION))
      r[sign] = body;
    return r;
  })();
  var DIGNITY_RANK = { domicile: 3, exaltation: 2, triplicity: 1 };
  var DEFAULT_SALIENCE = {
    base: 1,
    luminary: 1.5,
    angular: 1,
    chartRuler: 1,
    dignity: 0.5,
    hardAspect: 1,
    pattern: 4,
    dispositor: 0.5,
    reception: 2,
    star: 2,
    lot: 2,
    transit: 1.5,
    synastry: 1,
    composite: 0.8,
    timelord: 2,
    dignityFine: 0.4,
    vedic: 1
  };
  var TIME_SENSITIVE_KEEP = {
    exact: 1,
    approximate: 0.7,
    representative: 0.6,
    none: 0.5
  };
  function timeSensitive(atom) {
    return atom.kind === "angle" || atom.kind === "lot" || atom.bodies.includes("moon");
  }
  function title(body) {
    return body.split("_").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
  }
  function humanizePattern(kind) {
    const special = {
      t_square: "T-square",
      grand_trine: "Grand trine",
      grand_cross: "Grand cross",
      mystic_rectangle: "Mystic rectangle",
      stellium_sign: "Stellium",
      stellium_house: "Stellium"
    };
    return special[kind] ?? title(kind);
  }
  function interpretationContext(chart, opts = {}) {
    const w = { ...DEFAULT_SALIENCE, ...opts.salience };
    const sig = opts.signature ?? chartSignature(chart);
    const patterns = opts.patterns ?? detectPatterns(chart);
    const atoms = [];
    for (const [body, p] of Object.entries(chart.bodies)) {
      if (!p)
        continue;
      let salience = w.base;
      if (LUMINARIES.has(body))
        salience += w.luminary;
      if (ANGULAR_HOUSES.has(p.house))
        salience += w.angular;
      if (sig.ruler === body)
        salience += w.chartRuler;
      salience += w.dignity * p.dignities.length;
      const extra = [
        p.retrograde ? "retrograde" : null,
        ...p.dignities
      ].filter(Boolean);
      atoms.push({
        id: `placement:${body}`,
        kind: "placement",
        bodies: [body],
        salience,
        body,
        sign: p.sign,
        signDeg: p.signDeg,
        house: p.house,
        retrograde: p.retrograde,
        dignities: p.dignities,
        text: `${title(body)} in ${p.sign}, house ${p.house}` + (extra.length ? ` (${extra.join(", ")})` : "")
      });
    }
    for (const asp of chart.aspects) {
      let salience = w.base + asp.strength;
      if (HARD_ASPECTS.has(asp.aspect))
        salience += w.hardAspect;
      if (LUMINARIES.has(asp.a) || LUMINARIES.has(asp.b))
        salience += w.luminary;
      const [x, y] = [asp.a, asp.b].sort();
      atoms.push({
        id: `aspect:${x}~${y}:${asp.aspect}`,
        kind: "aspect",
        bodies: [asp.a, asp.b],
        salience,
        a: asp.a,
        b: asp.b,
        aspect: asp.aspect,
        orb: asp.orb,
        phase: asp.phase,
        strength: asp.strength,
        text: `${title(asp.a)} ${asp.aspect} ${title(asp.b)} (${asp.phase}, orb ${Math.abs(asp.orb).toFixed(1)}\xB0)`
      });
    }
    for (const pat of patterns) {
      let salience = w.pattern;
      if (pat.bodies.some((b) => LUMINARIES.has(b)))
        salience += w.luminary;
      const names = pat.bodies.map(title).join(", ");
      atoms.push({
        id: `pattern:${pat.kind}:${pat.bodies.join("-")}`,
        kind: "pattern",
        bodies: pat.bodies,
        salience,
        pattern: pat.kind,
        apex: pat.apex,
        text: `${humanizePattern(pat.kind)}: ${names}` + (pat.apex ? ` (apex ${title(pat.apex)})` : "") + (pat.sign ? ` in ${pat.sign}` : "")
      });
    }
    const sigAtom = (facet, value, text) => {
      if (value === null)
        return;
      atoms.push({
        id: `signature:${facet}:${value}`,
        kind: "signature",
        bodies: facet === "ruler" ? [value] : [],
        salience: w.base + 1,
        facet,
        value,
        text
      });
    };
    sigAtom("element", sig.dominant.element, `${title(sig.dominant.element)} is the dominant element`);
    sigAtom("modality", sig.dominant.modality, `${title(sig.dominant.modality)} is the dominant modality`);
    sigAtom("sign", sig.dominant.sign, `${sig.dominant.sign} is the most-occupied sign`);
    sigAtom("ruler", sig.ruler, `${title(sig.ruler ?? "")} is the chart ruler`);
    const dispositorOf = (body) => {
      const p = chart.bodies[body];
      return p ? SIGN_RULER[Math.floor(mod(p.lon, 360) / 30)] : null;
    };
    for (const body of CLASSICAL) {
      if (!chart.bodies[body])
        continue;
      const disp = dispositorOf(body);
      const final = disp === body;
      let salience = w.base + w.dispositor + (final ? w.dispositor : 0);
      if (LUMINARIES.has(body))
        salience += w.luminary;
      atoms.push({
        id: `dispositor:${body}`,
        kind: "dispositor",
        bodies: [body],
        salience,
        body,
        dispositor: disp,
        final,
        text: final ? `${title(body)} is in its own domicile (final dispositor)` : `${title(body)} is disposited by ${title(disp)}`
      });
    }
    const sunHouse = chart.bodies.sun?.house;
    const sect = sunHouse !== void 0 && sunHouse >= 7 ? 0 : 1;
    const signOf2 = (body) => Math.floor(mod(chart.bodies[body].lon, 360) / 30);
    const receives = (a, otherSign) => {
      const ds = [];
      if (SIGN_RULER[otherSign] === a)
        ds.push("domicile");
      if (SIGN_EXALT[otherSign] === a)
        ds.push("exaltation");
      if (TRIPLICITY[otherSign % 4][sect] === a)
        ds.push("triplicity");
      return ds;
    };
    const strongest = (ds) => ds.reduce((best, d) => DIGNITY_RANK[d] > DIGNITY_RANK[best] ? d : best, ds[0]);
    for (let i = 0; i < CLASSICAL.length; i++) {
      for (let j = i + 1; j < CLASSICAL.length; j++) {
        const a = CLASSICAL[i];
        const b = CLASSICAL[j];
        if (!chart.bodies[a] || !chart.bodies[b])
          continue;
        const aRec = receives(a, signOf2(b));
        const bRec = receives(b, signOf2(a));
        if (!aRec.length || !bRec.length)
          continue;
        const da = strongest(aRec);
        const db = strongest(bRec);
        const by = da === db ? da : [da, db].sort().join("-");
        let salience = w.base + w.reception * (Math.min(DIGNITY_RANK[da], DIGNITY_RANK[db]) / 3);
        if (LUMINARIES.has(a) || LUMINARIES.has(b))
          salience += w.luminary;
        atoms.push({
          id: `reception:${a}~${b}`,
          kind: "reception",
          bodies: [a, b],
          salience,
          by,
          text: `Mutual reception: ${title(a)} and ${title(b)} (${by})`
        });
      }
    }
    const angleAtom = (angle, lon) => {
      const sign = SIGNS[Math.floor(mod(lon, 360) / 30)];
      const label = { asc: "Ascendant", mc: "Midheaven", vertex: "Vertex", eastPoint: "East Point" }[angle];
      atoms.push({
        id: `angle:${angle}`,
        kind: "angle",
        bodies: [],
        salience: w.base + w.angular,
        angle,
        sign,
        signDeg: mod(lon, 30),
        text: `${label} in ${sign}`
      });
    };
    angleAtom("asc", chart.angles.asc);
    angleAtom("mc", chart.angles.mc);
    angleAtom("vertex", chart.angles.vertex);
    angleAtom("eastPoint", chart.angles.eastPoint);
    for (const sc of opts.stars ?? []) {
      let salience = w.base + w.star;
      if (LUMINARIES.has(sc.body))
        salience += w.luminary;
      atoms.push({
        id: `star:${sc.body}:${sc.star}`,
        kind: "star",
        bodies: [sc.body],
        salience,
        body: sc.body,
        star: sc.star,
        orb: sc.orb,
        text: `${title(sc.body)} conjunct ${sc.star} (orb ${sc.orb.toFixed(1)}\xB0)`
      });
    }
    for (const l of opts.lots ?? []) {
      atoms.push({
        id: `lot:${l.lot}`,
        kind: "lot",
        bodies: [],
        salience: w.base + w.lot,
        lot: l.lot,
        sign: l.sign,
        signDeg: l.signDeg,
        house: l.house,
        text: `Lot of ${title(l.lot)} in ${l.sign}, house ${l.house}`
      });
    }
    const chartSect = sunHouse !== void 0 && sunHouse >= 7 ? "day" : "night";
    for (const body of CLASSICAL) {
      const p = chart.bodies[body];
      if (!p)
        continue;
      const ds = dignityScore(body, p.lon, chartSect);
      const alm = almuten(p.lon, chartSect);
      let sal = w.base + w.dignityFine;
      if (LUMINARIES.has(body))
        sal += w.luminary;
      atoms.push({
        id: `term:${body}:${ds.term_ruler}`,
        kind: "dignity",
        bodies: [body],
        salience: sal,
        facet: "term",
        body,
        ruler: ds.term_ruler,
        text: `${title(body)} in the term of ${title(ds.term_ruler)}` + (ds.term > 0 ? " (holds term dignity)" : "")
      });
      atoms.push({
        id: `face:${body}:${ds.face_ruler}`,
        kind: "dignity",
        bodies: [body],
        salience: sal,
        facet: "face",
        body,
        ruler: ds.face_ruler,
        text: `${title(body)} in the face of ${title(ds.face_ruler)}` + (ds.face > 0 ? " (holds face dignity)" : "")
      });
      if (ds.triplicity > 0) {
        atoms.push({
          id: `triplicity:${body}`,
          kind: "dignity",
          bodies: [body],
          salience: sal + w.dignity,
          facet: "triplicity",
          body,
          text: `${title(body)} holds ${chartSect} triplicity`
        });
      }
      atoms.push({
        id: `almuten:${body}:${alm.planet}`,
        kind: "dignity",
        bodies: [body],
        salience: sal + (alm.planet === body ? w.dignity : 0),
        facet: "almuten",
        body,
        ruler: alm.planet,
        text: `${title(alm.planet)} is almuten of ${title(body)}'s degree`
      });
    }
    for (const t of opts.transits ?? []) {
      let salience = w.base + w.transit + t.strength;
      if (HARD_ASPECTS.has(t.aspect))
        salience += w.hardAspect;
      if (LUMINARIES.has(t.transit) || LUMINARIES.has(t.natal))
        salience += w.luminary;
      atoms.push({
        id: `transit:${t.transit}~natal_${t.natal}:${t.aspect}`,
        kind: "transit",
        bodies: [t.transit, t.natal],
        salience,
        transit: t.transit,
        natal: t.natal,
        aspect: t.aspect,
        orb: t.orb,
        phase: t.phase,
        strength: t.strength,
        natalHouse: t.natalHouse,
        text: `Transiting ${title(t.transit)} ${t.aspect} natal ${title(t.natal)} (${t.phase}, orb ${t.orb.toFixed(1)}\xB0, natal house ${t.natalHouse})`
      });
    }
    for (const s of opts.synastry?.aspects ?? []) {
      let salience = w.base + w.synastry + s.strength;
      if (HARD_ASPECTS.has(s.aspect))
        salience += w.hardAspect;
      if (LUMINARIES.has(s.a) || LUMINARIES.has(s.b))
        salience += w.luminary;
      atoms.push({
        id: `synastry:${s.a}~b_${s.b}:${s.aspect}`,
        kind: "synastry",
        bodies: [s.a, s.b],
        salience,
        mode: "aspect",
        a: s.a,
        b: s.b,
        aspect: s.aspect,
        orb: s.orb,
        strength: s.strength,
        text: `${title(s.a)} ${s.aspect} partner's ${title(s.b)} (orb ${s.orb.toFixed(1)}\xB0)`
      });
    }
    const overlays = opts.synastry?.overlays;
    if (overlays) {
      for (const [body, house] of Object.entries(overlays.aInB)) {
        atoms.push({
          id: `synastry:overlay:a:${body}:house:${house}`,
          kind: "synastry",
          bodies: [body],
          salience: w.base + w.synastry,
          mode: "overlay",
          body,
          partner: "a",
          house,
          text: `${title(body)} falls in partner's house ${house}`
        });
      }
      for (const [body, house] of Object.entries(overlays.bInA)) {
        atoms.push({
          id: `synastry:overlay:b:${body}:house:${house}`,
          kind: "synastry",
          bodies: [body],
          salience: w.base + w.synastry,
          mode: "overlay",
          body,
          partner: "b",
          house,
          text: `Partner's ${title(body)} falls in house ${house}`
        });
      }
    }
    for (const c of opts.composite ?? []) {
      atoms.push({
        id: `composite:${c.body}`,
        kind: "composite",
        bodies: [c.body],
        salience: w.base + w.composite + (LUMINARIES.has(c.body) ? w.luminary : 0),
        body: c.body,
        sign: c.sign,
        signDeg: c.signDeg,
        text: `Composite ${title(c.body)} in ${c.sign}`
      });
    }
    const tl = opts.timelords;
    if (tl?.profection) {
      const pf = tl.profection;
      atoms.push({
        id: `profection:year:${pf.annual.sign.toLowerCase()}:${pf.annual.lord}`,
        kind: "timelord",
        bodies: [pf.annual.lord],
        salience: w.base + w.timelord,
        system: "profection",
        level: "year",
        lord: pf.annual.lord,
        sign: pf.annual.sign,
        text: `Annual profection: ${pf.annual.sign} (house ${pf.annual.house}), lord ${title(pf.annual.lord)}`
      });
      atoms.push({
        id: `profection:month:${pf.monthly.sign.toLowerCase()}:${pf.monthly.lord}`,
        kind: "timelord",
        bodies: [pf.monthly.lord],
        salience: w.base + w.timelord * 0.7,
        system: "profection",
        level: "month",
        lord: pf.monthly.lord,
        sign: pf.monthly.sign,
        text: `Monthly profection: ${pf.monthly.sign} (house ${pf.monthly.house}), lord ${title(pf.monthly.lord)}`
      });
    }
    if (tl?.zr) {
      const zrWeight = { l1: 1, l2: 0.75, l3: 0.5, l4: 0.35 };
      const zrLevels = [
        ["l1", tl.zr.l1],
        ["l2", tl.zr.l2],
        ["l3", tl.zr.l3],
        ["l4", tl.zr.l4]
      ];
      for (const [level, sign] of zrLevels) {
        if (!sign)
          continue;
        const signIdx = SIGNS.indexOf(sign);
        const lord = signIdx >= 0 ? SIGN_RULER[signIdx] : "";
        atoms.push({
          id: `zr:${level}:${sign.toLowerCase()}:${lord}`,
          kind: "timelord",
          bodies: lord ? [lord] : [],
          salience: w.base + w.timelord * (zrWeight[level] ?? 0.5),
          system: "zr",
          level,
          lord,
          sign,
          text: `Zodiacal releasing ${level.toUpperCase()}: ${sign}` + (lord ? `, lord ${title(lord)}` : "") + (tl.zr.lot ? ` (from Lot of ${title(tl.zr.lot)})` : "")
        });
      }
    }
    if (tl?.firdaria?.major) {
      atoms.push({
        id: `firdaria:major:${tl.firdaria.major}`,
        kind: "timelord",
        bodies: [tl.firdaria.major],
        salience: w.base + w.timelord,
        system: "firdaria",
        level: "major",
        lord: tl.firdaria.major,
        text: `Firdaria major period: ${title(tl.firdaria.major)}` + (tl.firdaria.day !== void 0 ? ` (${tl.firdaria.day ? "day" : "night"} chart)` : "")
      });
      if (tl.firdaria.sub) {
        atoms.push({
          id: `firdaria:sub:${tl.firdaria.sub}`,
          kind: "timelord",
          bodies: [tl.firdaria.sub],
          salience: w.base + w.timelord * 0.7,
          system: "firdaria",
          level: "sub",
          lord: tl.firdaria.sub,
          text: `Firdaria sub-period: ${title(tl.firdaria.sub)}`
        });
      }
    }
    if (tl?.dasha?.maha) {
      const d = tl.dasha;
      atoms.push({
        id: `dasha:maha:${d.maha}`,
        kind: "timelord",
        bodies: [d.maha],
        salience: w.base + w.timelord,
        system: "dasha",
        level: "maha",
        lord: d.maha,
        text: `Vimshottari mahadasha: ${title(d.maha)}` + (d.moon_nakshatra ? ` (Moon in ${d.moon_nakshatra})` : "")
      });
      if (d.antar) {
        atoms.push({
          id: `dasha:antar:${d.antar}`,
          kind: "timelord",
          bodies: [d.antar],
          salience: w.base + w.timelord * 0.8,
          system: "dasha",
          level: "antar",
          lord: d.antar,
          text: `Vimshottari antardasha: ${title(d.antar)}`
        });
      }
      if (d.pratyantar) {
        atoms.push({
          id: `dasha:pratyantar:${d.pratyantar}`,
          kind: "timelord",
          bodies: [d.pratyantar],
          salience: w.base + w.timelord * 0.6,
          system: "dasha",
          level: "pratyantar",
          lord: d.pratyantar,
          text: `Vimshottari pratyantardasha: ${title(d.pratyantar)}`
        });
      }
    }
    const vedic = opts.vedic;
    if (vedic) {
      const nakBodies = vedic.nakshatraBodies ?? ["moon", "sun", "mars", "mercury", "jupiter", "venus", "saturn"];
      for (const body of nakBodies) {
        const p = chart.bodies[body];
        if (!p)
          continue;
        const nak = nakshatra(p.lon);
        let salience = w.base + w.vedic;
        if (body === "moon")
          salience += w.luminary;
        atoms.push({
          id: `nakshatra:${body}:${nak.name.replace(/\s+/g, "_")}`,
          kind: "nakshatra",
          bodies: [body],
          salience,
          body,
          name: nak.name,
          pada: nak.pada,
          lord: nak.lord,
          text: `${title(body)} in ${nak.name} (pada ${nak.pada}, lord ${title(nak.lord)})`
        });
      }
      const vargaDivs = vedic.vargas === true ? [9] : vedic.vargas ?? [];
      for (const n of vargaDivs) {
        for (const body of nakBodies) {
          const p = chart.bodies[body];
          if (!p)
            continue;
          const v = varga(p.lon, n);
          atoms.push({
            id: `varga:d${n}:${body}:${v.sign.toLowerCase()}`,
            kind: "varga",
            bodies: [body],
            salience: w.base + w.vedic,
            division: n,
            body,
            sign: v.sign,
            text: `${title(body)} D${n} (${v.sign})`
          });
        }
      }
      for (const y of vedic.yogas ?? []) {
        atoms.push({
          id: `yoga:${y.yoga.replace(/\s+/g, "_")}`,
          kind: "yoga",
          bodies: y.planets,
          salience: w.base + w.timelord * 0.5 + w.vedic,
          yoga: y.yoga,
          planets: y.planets,
          text: `Yoga ${y.yoga} (${y.planets.map(title).join(", ")})`
        });
      }
    }
    const prov = opts.provenance;
    if (prov?.certainty && prov.certainty !== "exact") {
      const keep = TIME_SENSITIVE_KEEP[prov.certainty];
      for (const a of atoms)
        if (timeSensitive(a))
          a.salience *= keep;
    }
    atoms.sort((m, n) => n.salience - m.salience || (m.id < n.id ? -1 : 1));
    return {
      jdUt: chart.jdUt,
      zodiac: chart.zodiac,
      atoms,
      realm: prov?.realm,
      certainty: prov?.certainty
    };
  }

  // node_modules/caelus/dist/src/relational.js
  function houseIndex2(lon, cusps) {
    for (let i = 0; i < 12; i++) {
      if (mod(lon - cusps[i], 360) < mod(cusps[(i + 1) % 12] - cusps[i], 360))
        return i + 1;
    }
    return 12;
  }
  function aspectHits(lonA, speedA, labelA, lonB, speedB, labelB, maxOrb, orbs) {
    const sep = Math.abs(mod(lonA - lonB + 180, 360) - 180);
    const out = [];
    for (const [name, angle] of Object.entries(ASPECTS)) {
      const limit = Math.min(maxOrb, orbs[name] ?? maxOrb);
      const orb = Math.abs(sep - angle);
      if (orb > limit)
        continue;
      const orbRounded = Math.round(orb * 100) / 100;
      out.push({
        a: labelA,
        b: labelB,
        aspect: name,
        orb: orbRounded,
        phase: aspectPhase(lonA, speedA, lonB, speedB, angle),
        strength: Math.max(0, 1 - orbRounded / limit)
      });
    }
    return out;
  }
  function transitAspects(natal, engine, transitJd, opts = {}) {
    const maxOrb = opts.maxOrb ?? 3;
    const orbs = opts.orbs ?? DEFAULT_ORBS;
    const zodiac = opts.zodiac ?? natal.zodiac;
    const bodies = opts.bodies ?? BODIES;
    const natalBodies = bodies.filter((b) => natal.bodies[b] && !NOT_ASPECTABLE.has(b));
    const out = [];
    for (const tb of bodies) {
      if (NOT_ASPECTABLE.has(tb))
        continue;
      const tp = engine.position(tb, transitJd, { zodiac });
      const natalHouse = houseIndex2(tp.lon, natal.cusps);
      for (const nb of natalBodies) {
        const nLon = natal.bodies[nb].lon;
        for (const hit2 of aspectHits(tp.lon, tp.speed, tb, nLon, 0, nb, maxOrb, orbs)) {
          out.push({
            transit: hit2.a,
            natal: hit2.b,
            aspect: hit2.aspect,
            orb: hit2.orb,
            phase: hit2.phase,
            strength: hit2.strength,
            natalHouse
          });
        }
      }
    }
    return out;
  }
  function synastryAspects(chartA, chartB, maxOrb = 4, orbs = DEFAULT_ORBS) {
    const bodies = BODIES.filter((b) => chartA.bodies[b] && chartB.bodies[b] && !NOT_ASPECTABLE.has(b));
    const out = [];
    for (const ba of bodies) {
      const la = chartA.bodies[ba].lon;
      for (const bb of bodies) {
        const lb = chartB.bodies[bb].lon;
        for (const hit2 of aspectHits(la, 0, ba, lb, 0, bb, maxOrb, orbs)) {
          out.push({ a: hit2.a, b: hit2.b, aspect: hit2.aspect, orb: hit2.orb, strength: hit2.strength });
        }
      }
    }
    return out;
  }
  function synastryOverlays(chartA, chartB) {
    const bodies = BODIES.filter((b) => chartA.bodies[b] && chartB.bodies[b]);
    const aInB = {};
    const bInA = {};
    for (const b of bodies) {
      aInB[b] = houseIndex2(chartA.bodies[b].lon, chartB.cusps);
      bInA[b] = houseIndex2(chartB.bodies[b].lon, chartA.cusps);
    }
    return { aInB, bInA };
  }
  function compositePlacements(engine, jdA, jdB, bodies = BODIES, zodiac = "tropical") {
    const lons = compositeLongitudes(engine, jdA, jdB, bodies, zodiac);
    return bodies.map((body) => {
      const lon = mod(lons[body], 360);
      const signIdx = Math.floor(lon / 30) % 12;
      return { body, lon, sign: SIGNS[signIdx], signDeg: mod(lon, 30) };
    });
  }

  // node_modules/caelus/dist/src/interpretation-enrich.js
  function enrichContextOptions(engine, chart, target, flags = {}) {
    const zodiac = target.zodiac ?? chart.zodiac;
    const { lat, lonEast } = target;
    const out = {};
    if (flags.transits !== false) {
      out.transits = transitAspects(chart, engine, target.jd, {
        maxOrb: flags.transitOrb ?? 3,
        zodiac
      });
    }
    if (flags.timelords !== false) {
      const prof = profectionAt(engine, chart.jdUt, target.jd, lat, lonEast, zodiac);
      const zr = zrAt(engine, chart.jdUt, target.jd, lat, lonEast);
      const fir = firdariaAt(engine, chart.jdUt, target.jd, lat, lonEast);
      const dasha = vimshottariAt(engine, chart.jdUt, target.jd, "sidereal:lahiri");
      out.timelords = {
        profection: prof,
        zr: {
          l1: zr.l1,
          l2: zr.l2,
          l3: zr.l3,
          l4: zr.l4,
          lot: zr.lot
        },
        firdaria: { major: fir.major, sub: fir.sub, day: fir.day },
        dasha: {
          maha: dasha.maha,
          antar: dasha.antar ?? null,
          pratyantar: dasha.pratyantar ?? null,
          moon_nakshatra: dasha.moon_nakshatra
        }
      };
    }
    const wantVedic = flags.vedic ?? zodiac.startsWith("sidereal");
    if (wantVedic) {
      out.vedic = {
        nakshatraBodies: ["moon", "sun", "mars", "mercury", "jupiter", "venus", "saturn"],
        vargas: [9],
        yogas: yogasAt(engine, chart.jdUt, lat, lonEast, "sidereal:lahiri")
      };
    }
    return out;
  }
  function enrichSynastryOptions(engine, chartA, chartB, opts = {}) {
    const orb = opts.orb ?? 4;
    const zodiac = opts.zodiac ?? chartA.zodiac;
    return {
      synastry: {
        aspects: synastryAspects(chartA, chartB, orb),
        overlays: synastryOverlays(chartA, chartB)
      },
      composite: compositePlacements(engine, chartA.jdUt, chartB.jdUt, BODIES, zodiac)
    };
  }

  // node_modules/caelus/dist/src/interpret.js
  var hit = (atoms) => ({ matched: atoms.length > 0, atoms });
  function hasPlacement(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "placement" && (filter.body === void 0 || a.body === filter.body) && (filter.sign === void 0 || a.sign === filter.sign) && (filter.house === void 0 || a.house === filter.house) && (filter.retrograde === void 0 || a.retrograde === filter.retrograde) && (filter.dignity === void 0 || a.dignities.includes(filter.dignity))));
  }
  function hasAspect(filter = {}) {
    const pair = filter.between ? [...filter.between].sort() : null;
    return (ctx) => hit(ctx.atoms.filter((at) => {
      if (at.kind !== "aspect")
        return false;
      if (filter.a !== void 0 && at.a !== filter.a)
        return false;
      if (filter.b !== void 0 && at.b !== filter.b)
        return false;
      if (pair && [at.a, at.b].sort().join() !== pair.join())
        return false;
      if (filter.aspect !== void 0 && at.aspect !== filter.aspect)
        return false;
      if (filter.phase !== void 0 && at.phase !== filter.phase)
        return false;
      if (filter.minStrength !== void 0 && at.strength < filter.minStrength)
        return false;
      return true;
    }));
  }
  function hasPattern(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "pattern" && (filter.kind === void 0 || a.pattern === filter.kind) && (filter.body === void 0 || a.bodies.includes(filter.body))));
  }
  function hasSignature(facet, value) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "signature" && a.facet === facet && (value === void 0 || a.value === value)));
  }
  function hasAngle(angle, sign) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "angle" && a.angle === angle && (sign === void 0 || a.sign === sign)));
  }
  function hasDispositor(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "dispositor" && (filter.body === void 0 || a.body === filter.body) && (filter.dispositor === void 0 || a.dispositor === filter.dispositor) && (filter.final === void 0 || a.final === filter.final)));
  }
  function hasReception(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "reception" && (filter.body === void 0 || a.bodies.includes(filter.body))));
  }
  function hasStar(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "star" && (filter.body === void 0 || a.body === filter.body) && (filter.star === void 0 || a.star === filter.star)));
  }
  function hasLot(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "lot" && (filter.lot === void 0 || a.lot === filter.lot) && (filter.sign === void 0 || a.sign === filter.sign) && (filter.house === void 0 || a.house === filter.house)));
  }
  function hasTransit(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => {
      if (a.kind !== "transit")
        return false;
      if (filter.transit !== void 0 && a.transit !== filter.transit)
        return false;
      if (filter.natal !== void 0 && a.natal !== filter.natal)
        return false;
      if (filter.aspect !== void 0 && a.aspect !== filter.aspect)
        return false;
      if (filter.phase !== void 0 && a.phase !== filter.phase)
        return false;
      if (filter.minStrength !== void 0 && a.strength < filter.minStrength)
        return false;
      return true;
    }));
  }
  function hasSynastry(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => {
      if (a.kind !== "synastry")
        return false;
      if (filter.mode !== void 0 && a.mode !== filter.mode)
        return false;
      if (filter.a !== void 0 && a.a !== filter.a)
        return false;
      if (filter.b !== void 0 && a.b !== filter.b)
        return false;
      if (filter.aspect !== void 0 && a.aspect !== filter.aspect)
        return false;
      if (filter.body !== void 0 && a.body !== filter.body)
        return false;
      if (filter.partner !== void 0 && a.partner !== filter.partner)
        return false;
      if (filter.house !== void 0 && a.house !== filter.house)
        return false;
      return true;
    }));
  }
  function hasComposite(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "composite" && (filter.body === void 0 || a.body === filter.body) && (filter.sign === void 0 || a.sign === filter.sign)));
  }
  function hasTimelord(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "timelord" && (filter.system === void 0 || a.system === filter.system) && (filter.level === void 0 || a.level === filter.level) && (filter.lord === void 0 || a.lord === filter.lord)));
  }
  function hasDignityFine(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "dignity" && (filter.facet === void 0 || a.facet === filter.facet) && (filter.body === void 0 || a.body === filter.body) && (filter.ruler === void 0 || a.ruler === filter.ruler)));
  }
  function hasNakshatra(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "nakshatra" && (filter.body === void 0 || a.body === filter.body) && (filter.name === void 0 || a.name === filter.name) && (filter.lord === void 0 || a.lord === filter.lord)));
  }
  function hasVarga(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "varga" && (filter.division === void 0 || a.division === filter.division) && (filter.body === void 0 || a.body === filter.body) && (filter.sign === void 0 || a.sign === filter.sign)));
  }
  function hasYoga(filter = {}) {
    return (ctx) => hit(ctx.atoms.filter((a) => a.kind === "yoga" && (filter.yoga === void 0 || a.yoga === filter.yoga) && (filter.body === void 0 || a.bodies.includes(filter.body))));
  }
  function matchAll(...sels) {
    return (ctx) => {
      const parts = sels.map((s) => s(ctx));
      return parts.every((p) => p.matched) ? { matched: true, atoms: dedupe(parts.flatMap((p) => p.atoms)) } : { matched: false, atoms: [] };
    };
  }
  function matchAny(...sels) {
    return (ctx) => {
      const matched = sels.map((s) => s(ctx)).filter((p) => p.matched);
      return matched.length ? { matched: true, atoms: dedupe(matched.flatMap((p) => p.atoms)) } : { matched: false, atoms: [] };
    };
  }
  function matchNone(sel) {
    return (ctx) => ({ matched: !sel(ctx).matched, atoms: [] });
  }
  function dedupe(atoms) {
    const seen = /* @__PURE__ */ new Set();
    return atoms.filter((a) => seen.has(a.id) ? false : seen.add(a.id));
  }
  function interpret(ctx, sources) {
    const entries = [];
    for (const src of sources) {
      for (const rule of src.rules) {
        const m = rule.when(ctx);
        if (!m.matched)
          continue;
        const text = typeof rule.text === "function" ? rule.text(m, ctx) : rule.text;
        const salience = m.atoms.reduce((s, a) => s + a.salience, 0) * (rule.weight ?? 1);
        entries.push({
          id: `${src.id}/${rule.id}`,
          source: src.id,
          rule: rule.id,
          text,
          atomIds: m.atoms.map((a) => a.id),
          salience,
          tags: rule.tags
        });
      }
    }
    entries.sort((p, q) => q.salience - p.salience || (p.id < q.id ? -1 : 1));
    return { jdUt: ctx.jdUt, entries };
  }
  function reconcile(reading, opts = {}) {
    let entries = reading.entries;
    if (opts.dedupe) {
      const seen = /* @__PURE__ */ new Set();
      entries = entries.filter((e) => seen.has(e.text) ? false : seen.add(e.text));
    }
    const parent = entries.map((_, i) => i);
    const find = (x) => {
      while (parent[x] !== x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
      }
      return x;
    };
    const firstByAtom = /* @__PURE__ */ new Map();
    entries.forEach((e, i) => {
      for (const id of e.atomIds) {
        const seen = firstByAtom.get(id);
        if (seen === void 0)
          firstByAtom.set(id, i);
        else
          parent[find(i)] = find(seen);
      }
    });
    const buckets = /* @__PURE__ */ new Map();
    entries.forEach((e, i) => {
      const r = find(i);
      (buckets.get(r) ?? buckets.set(r, []).get(r)).push(e);
    });
    const conflicts = opts.conflicts ?? [];
    const groups = [...buckets.values()].map((es) => {
      es.sort((a, b) => b.salience - a.salience || (a.id < b.id ? -1 : 1));
      const tags = [...new Set(es.flatMap((e) => e.tags ?? []))];
      return {
        atomIds: [...new Set(es.flatMap((e) => e.atomIds))],
        entries: es,
        tags,
        contested: conflicts.some(([x, y]) => tags.includes(x) && tags.includes(y)),
        salience: Math.max(...es.map((e) => e.salience))
      };
    });
    groups.sort((a, b) => b.salience - a.salience || (a.atomIds.join() < b.atomIds.join() ? -1 : 1));
    return groups;
  }

  // node_modules/caelus/dist/src/brief.js
  var BRIEF_INSTRUCTIONS = "Natal chart facts follow, each with a stable id in [brackets]. Interpret them in your own words; after each statement, cite the id(s) it rests on as [id]. Do not introduce astrological facts that are not listed here.";
  var REALM_FRAMING = {
    observed: "",
    reported: "",
    planned: "This is a planned future moment; frame statements as potentials, not settled facts.",
    forecast: "This is a forecast moment; frame statements as tendencies, not certainties.",
    fictional: "This is a fictional subject; interpret the symbolism, not a real person's life.",
    mythic: "This is a mythic subject; read it as a symbol or story, not a biography.",
    counterfactual: "This is a hypothetical variant of a real event; keep it conditional.",
    archetypal: "This is an archetype, not a person; interpret the configuration's meaning itself.",
    conceptual: "This is a concept or organization, not a person; interpret it as such."
  };
  function realmFraming(realm, certainty) {
    const parts = [];
    if (realm && REALM_FRAMING[realm])
      parts.push(REALM_FRAMING[realm]);
    if (certainty && certainty !== "exact") {
      parts.push(`The time is ${certainty}, so the Moon, the angles, and the houses are uncertain -- lean on the slower planets and sign-level statements.`);
    }
    return parts.join(" ");
  }
  function chartBrief(ctx, opts = {}) {
    let atoms = ctx.atoms;
    if (opts.kinds)
      atoms = atoms.filter((a) => opts.kinds.includes(a.kind));
    if (opts.minSalience !== void 0)
      atoms = atoms.filter((a) => a.salience >= opts.minSalience);
    if (opts.limit !== void 0)
      atoms = atoms.slice(0, opts.limit);
    const facts = atoms.map((a) => ({
      id: a.id,
      kind: a.kind,
      text: a.text,
      salience: a.salience
    }));
    const lines = facts.map((f) => `[${f.id}] ${f.text}`);
    const framing = realmFraming(ctx.realm, ctx.certainty);
    let prompt = (opts.header === false ? "" : `${BRIEF_INSTRUCTIONS}

`) + (framing ? `${framing}

` : "") + lines.join("\n");
    if (opts.reading && opts.reading.entries.length) {
      prompt += "\n\nSuggested readings (cite the same fact ids):\n" + opts.reading.entries.map((e) => `${e.atomIds.map((id) => `[${id}]`).join("")} ${e.text}`).join("\n");
    }
    return { jdUt: ctx.jdUt, zodiac: ctx.zodiac, facts, prompt };
  }
  function auditCitations(claims, ctx) {
    const ids = new Set(ctx.atoms.map((a) => a.id));
    const valid = /* @__PURE__ */ new Set();
    const unknown = /* @__PURE__ */ new Set();
    let cited = 0;
    for (const c of claims) {
      if (c.cites.length)
        cited++;
      for (const id of c.cites)
        (ids.has(id) ? valid : unknown).add(id);
    }
    return {
      ok: unknown.size === 0,
      claims: claims.length,
      cited,
      uncited: claims.length - cited,
      valid: [...valid],
      unknown: [...unknown]
    };
  }

  // node_modules/caelus/dist/src/provenance.js
  var JD_UNIX_EPOCH = 24405875e-1;
  function isoToJd(iso) {
    const ms = Date.parse(iso);
    return Number.isNaN(ms) ? null : JD_UNIX_EPOCH + ms / 864e5;
  }
  var UNIT_DAYS = {
    y: 365.2425,
    mo: 30.436875,
    w: 7,
    d: 1,
    h: 1 / 24,
    m: 1 / 1440,
    s: 1 / 86400
  };
  function parseOffset(offset) {
    const s = offset.trim();
    if (/^[+-]?P/i.test(s)) {
      const m2 = s.match(/^([+-]?)P(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i);
      if (!m2 || s.replace(/^[+-]/, "") === "P")
        return NaN;
      const [, sign, y, mo, w, d, h, mi, sec] = m2;
      const n = (v) => v ? parseFloat(v) : 0;
      const days = n(y) * UNIT_DAYS.y + n(mo) * UNIT_DAYS.mo + n(w) * UNIT_DAYS.w + n(d) + n(h) / 24 + n(mi) / 1440 + n(sec) / 86400;
      return sign === "-" ? -days : days;
    }
    const m = s.match(/^([+-]?\d*\.?\d+)\s*(mo|[ywdhms])$/i);
    if (!m)
      return NaN;
    return parseFloat(m[1]) * UNIT_DAYS[m[2].toLowerCase()];
  }
  function resolveTime(anchor, registry = {}) {
    switch (anchor.kind) {
      case "instant": {
        const jd = isoToJd(anchor.utc);
        return jd === null ? { jd: null, certainty: "none", note: `unparseable utc ${anchor.utc}` } : { jd, certainty: "exact" };
      }
      case "range": {
        const e = isoToJd(anchor.earliest);
        const l = isoToJd(anchor.latest);
        if (e === null || l === null) {
          return { jd: null, certainty: "none", note: "unparseable range bound" };
        }
        const [lo, hi] = e <= l ? [e, l] : [l, e];
        return {
          jd: (lo + hi) / 2,
          certainty: "representative",
          earliest: lo,
          latest: hi,
          note: "midpoint of the range"
        };
      }
      case "relative": {
        const base = registry.instants?.[anchor.anchorId];
        if (base === void 0) {
          return { jd: null, certainty: "none", note: `unknown anchor ${anchor.anchorId}` };
        }
        if (anchor.relation === "during") {
          return { jd: base, certainty: "representative", note: `during ${anchor.anchorId}` };
        }
        if (anchor.offset === void 0) {
          return {
            jd: base,
            certainty: "approximate",
            note: `${anchor.relation} ${anchor.anchorId} with no offset; using the reference instant`
          };
        }
        const off = parseOffset(anchor.offset);
        if (Number.isNaN(off)) {
          return { jd: null, certainty: "none", note: `unparseable offset ${anchor.offset}` };
        }
        const jd = anchor.relation === "before" ? base - off : base + off;
        return { jd, certainty: "approximate", note: `${anchor.offset} ${anchor.relation} ${anchor.anchorId}` };
      }
      case "narrative": {
        const resolver = anchor.calendar ? registry.calendars?.[anchor.calendar] : void 0;
        if (!resolver) {
          return {
            jd: null,
            certainty: "none",
            note: `no resolver for calendar ${anchor.calendar ?? "(unspecified)"}` + (anchor.sequence !== void 0 ? `; sequence ${anchor.sequence}` : "")
          };
        }
        const jd = resolver(anchor.value);
        return jd === null ? { jd: null, certainty: "none", note: `calendar ${anchor.calendar} could not map ${anchor.value}` } : { jd, certainty: "approximate", note: `${anchor.calendar}: ${anchor.value}` };
      }
      case "symbolic":
        return { jd: null, certainty: "none", note: anchor.rationale };
      case "none":
        return { jd: null, certainty: "none", note: anchor.reason };
    }
  }
  function resolvePlace(anchor, registry = {}) {
    switch (anchor.kind) {
      case "geo":
        return {
          place: { lat: anchor.lat, lonEast: anchor.lonEast, altM: anchor.altM },
          certainty: "exact"
        };
      case "named": {
        const place = registry.gazetteer?.(anchor.placeId) ?? null;
        return place ? { place, certainty: "approximate", note: `gazetteer: ${anchor.placeId}` } : { place: null, certainty: "none", note: `unknown place ${anchor.placeId}` };
      }
      case "region":
        return {
          place: { lat: anchor.lat, lonEast: anchor.lonEast },
          certainty: "representative",
          radiusKm: anchor.radiusKm,
          note: `centre of a ${anchor.radiusKm} km region`
        };
      case "relative": {
        const place = registry.places?.[anchor.anchorId] ?? null;
        return place ? { place, certainty: "approximate", note: `${anchor.relation} ${anchor.anchorId}` } : { place: null, certainty: "none", note: `unknown place anchor ${anchor.anchorId}` };
      }
      case "fictional":
        return { place: null, certainty: "none", note: anchor.value };
      case "none":
        return { place: null, certainty: "none", note: anchor.reason };
    }
  }
  var TIME_ANCHORED_REALMS = /* @__PURE__ */ new Set([
    "observed",
    "reported",
    "planned",
    "forecast",
    "counterfactual"
  ]);
  function isTimeAnchored(realm) {
    return TIME_ANCHORED_REALMS.has(realm);
  }

  // node_modules/caelus/dist/src/anchored.js
  function realize(engine, anchored, registry = {}, opts = {}) {
    const time = resolveTime(anchored.when, registry);
    const place = resolvePlace(anchored.where ?? { kind: "none", reason: "intentionally_unset" }, registry);
    const base = { realm: anchored.realm, time, place };
    if (time.jd !== null) {
      const chart = engine.chartAt(time.jd, place.place?.lat ?? 0, place.place?.lonEast ?? 0, opts);
      return {
        ...base,
        via: "ephemeris",
        chart,
        form: null,
        note: `ephemeris (${time.certainty}) ` + (place.place ? `at ${place.note ?? "given coordinates"}` : "no place; houses nominal at 0,0")
      };
    }
    if (anchored.constraints?.length) {
      const form = compileForm(anchored.constraints);
      return {
        ...base,
        via: "compiler",
        chart: null,
        form,
        note: `compiler synthesis (${form.impossible ? "impossible form" : `residual ${form.residual.toFixed(2)}`})`
      };
    }
    return {
      ...base,
      via: "none",
      chart: null,
      form: null,
      note: isTimeAnchored(anchored.realm) ? `time-anchored realm but no instant resolved (${time.note ?? "no time"}); supply a resolvable anchor or constraints` : `${anchored.realm} realm has no instant; supply constraints to synthesize a form`
    };
  }

  // node_modules/caelus/dist/src/counterfactual.js
  var signOf = (lon) => SIGNS[Math.floor(mod(lon, 360) / 30)];
  var aspectKey = (x) => `${[x.a, x.b].sort().join("~")}:${x.aspect}`;
  function chartDiff(a, b) {
    const bodies = [];
    for (const [name, pa] of Object.entries(a.bodies)) {
      const pb = b.bodies[name];
      if (!pa || !pb || pa.sign === pb.sign && pa.house === pb.house)
        continue;
      bodies.push({
        body: name,
        dLon: mod(pb.lon - pa.lon + 180, 360) - 180,
        signFrom: pa.sign,
        signTo: pb.sign,
        houseFrom: pa.house,
        houseTo: pb.house
      });
    }
    const aset = new Set(a.aspects.map(aspectKey));
    const bset = new Set(b.aspects.map(aspectKey));
    const angles2 = [];
    for (const ang of ["asc", "mc", "vertex", "eastPoint"]) {
      const from = signOf(a.angles[ang]);
      const to = signOf(b.angles[ang]);
      if (from !== to)
        angles2.push({ angle: ang, from, to });
    }
    return {
      bodies,
      aspectsGained: b.aspects.filter((x) => !aset.has(aspectKey(x))),
      aspectsLost: a.aspects.filter((x) => !bset.has(aspectKey(x))),
      angles: angles2
    };
  }
  function spliceLongitudes(chart, overrides) {
    const bodies = { ...chart.bodies };
    for (const [name, lon] of Object.entries(overrides)) {
      const cur = bodies[name];
      if (!cur)
        continue;
      const L = mod(lon, 360);
      bodies[name] = {
        ...cur,
        lon: L,
        sign: SIGNS[Math.floor(L / 30)],
        signDeg: L % 30,
        house: houseOf(L, chart.cusps)
      };
    }
    return {
      ...chart,
      bodies,
      aspects: findAspects(bodies, DEFAULT_ORBS)
    };
  }
  function counterfactual(engine, base, edit, registry = {}, opts = {}) {
    const original = realize(engine, base, registry, opts);
    if (!original.chart) {
      return { edit, original, variant: null, diff: null, note: `nothing to perturb (${original.note})` };
    }
    const shiftsTimeOrPlace = edit.shiftTime !== void 0 || edit.place !== void 0;
    let variant = original.chart;
    if (shiftsTimeOrPlace) {
      const off = edit.shiftTime !== void 0 ? parseOffset(edit.shiftTime) : 0;
      if (Number.isNaN(off))
        throw new Error(`unparseable shiftTime ${edit.shiftTime}`);
      const lat = edit.place?.lat ?? original.place.place?.lat ?? 0;
      const lon = edit.place?.lonEast ?? original.place.place?.lonEast ?? 0;
      variant = engine.chartAt(original.time.jd + off, lat, lon, opts);
    }
    if (edit.setLongitudes)
      variant = spliceLongitudes(variant, edit.setLongitudes);
    const bits = [
      edit.shiftTime !== void 0 ? `time ${edit.shiftTime}` : null,
      edit.place ? "place" : null,
      edit.setLongitudes ? `moved ${Object.keys(edit.setLongitudes).join(", ")}` : null
    ].filter(Boolean);
    return {
      edit,
      original,
      variant,
      diff: chartDiff(original.chart, variant),
      note: bits.length ? `perturbed: ${bits.join("; ")}` : "no edit applied"
    };
  }

  // node_modules/caelus/dist/src/parans.js
  var PARAN_ANGLES = ["rise", "mtransit", "set", "itransit"];
  var DEFAULT_PARAN_BODIES = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"];
  var TWO_PI8 = 2 * Math.PI;
  var SID_RATE = 360.98564736629 * DEG;
  var RISE_ALT = -0.5667 * DEG;
  function parans(engine, jd, lat, bodies = DEFAULT_PARAN_BODIES, toleranceMin = 30) {
    const events = [];
    for (const b of bodies) {
      for (const kind of PARAN_ANGLES) {
        const t = riseSet(engine, b, jd, lat, 0, kind);
        if (t !== null && t < jd + 1)
          events.push([b, kind, t]);
      }
    }
    const out = [];
    for (let i = 0; i < events.length; i++) {
      for (let j = i + 1; j < events.length; j++) {
        const [ab, aa, ta] = events[i];
        const [bb, ba, tb] = events[j];
        if (ab === bb)
          continue;
        const gap = Math.abs(ta - tb) * 1440;
        if (gap > toleranceMin)
          continue;
        const [pa, paa, pb, pba] = ab <= bb ? [ab, aa, bb, ba] : [bb, ba, ab, aa];
        out.push({
          a: pa,
          a_angle: paa,
          b: pb,
          b_angle: pba,
          jd: Math.round((ta + tb) / 2 * 1e6) / 1e6,
          gap_min: Math.round(gap * 1e4) / 1e4
        });
      }
    }
    out.sort((x, y) => x.a < y.a ? -1 : x.a > y.a ? 1 : x.b < y.b ? -1 : x.b > y.b ? 1 : x.jd - y.jd);
    return out;
  }
  function timeAtLst(engine, jd, target) {
    const dlst = mod(target - gast(engine.data, jd), TWO_PI8);
    let t = jd + dlst / SID_RATE;
    for (let i = 0; i < 2; i++) {
      const err = mod(gast(engine.data, t) - target + Math.PI, TWO_PI8) - Math.PI;
      t -= err / SID_RATE;
    }
    return t;
  }
  function starAngleTimes(engine, star, jd, lat) {
    const fs = engine.fixedStar(star, jd);
    const alpha = mod(fs.ra * DEG, TWO_PI8);
    const delta = fs.dec * DEG;
    const phi = lat * DEG;
    const out = {
      mtransit: timeAtLst(engine, jd, alpha),
      itransit: timeAtLst(engine, jd, mod(alpha + Math.PI, TWO_PI8))
    };
    const denom = Math.cos(phi) * Math.cos(delta);
    if (denom !== 0) {
      const cosH0 = (Math.sin(RISE_ALT) - Math.sin(phi) * Math.sin(delta)) / denom;
      if (cosH0 >= -1 && cosH0 <= 1) {
        const h0 = Math.acos(cosH0);
        out.rise = timeAtLst(engine, jd, mod(alpha - h0, TWO_PI8));
        out.set = timeAtLst(engine, jd, mod(alpha + h0, TWO_PI8));
      }
    }
    return out;
  }
  function starParans(engine, jd, lat, stars, bodies = DEFAULT_PARAN_BODIES, toleranceMin = 30) {
    const bodyEvents = [];
    for (const b of bodies) {
      for (const kind of PARAN_ANGLES) {
        const t = riseSet(engine, b, jd, lat, 0, kind);
        if (t !== null && t < jd + 1)
          bodyEvents.push([b, kind, t]);
      }
    }
    const out = [];
    for (const s of stars) {
      const at = starAngleTimes(engine, s, jd, lat);
      for (const [sa, ts] of Object.entries(at)) {
        if (!(ts >= jd && ts < jd + 1))
          continue;
        for (const [b, ba, tb] of bodyEvents) {
          const gap = Math.abs(ts - tb) * 1440;
          if (gap <= toleranceMin) {
            out.push({
              star: s,
              star_angle: sa,
              body: b,
              body_angle: ba,
              jd: Math.round((ts + tb) / 2 * 1e6) / 1e6,
              gap_min: Math.round(gap * 1e4) / 1e4
            });
          }
        }
      }
    }
    out.sort((x, y) => x.star < y.star ? -1 : x.star > y.star ? 1 : x.body < y.body ? -1 : x.body > y.body ? 1 : x.jd - y.jd);
    return out;
  }
  return __toCommonJS(index_exports);
})();
