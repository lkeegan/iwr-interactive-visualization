// groups: [professor name, group name, webpage]
var group_names = [
  [
    "Prof Peter\nAlbers",
    "Symplectic\nDynamics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Artur\nAndrzejak",
    "Parallel and\nDistributed Systems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Peter\nBastian",
    "Parallel\nComputing",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Hans Georg\nBock",
    "Simulation\nand Optimization",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Gebhard\nBöckle",
    "Computational\nArithmetic\nGeometry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof André\nButz",
    "Atmospheric\nPhysics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Peter\nComba",
    "Theory and\nModeling in\nInorganic and\nBioinorganic Chemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Andreas\nDreuw",
    "Theoretical\nand Computational\nChemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr Stefan\nFischer",
    "Computational\nBiochemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Anette\nFrank",
    "Natural\nLanguage\nProcessing\nGroup",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Frauke\nGräter",
    "Molecular\nBiomechanics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr Frederik\nGraw",
    "Modelling\nInfection & Immunity",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr Ganna\nGryn'ova",
    "Computational\nCarbon Chemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Eva\nGutheil",
    "Multiphase\nFlows and\nCombustion",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Roland\nHerzog",
    "Scientific\nComputing and\nOptimization",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Jürgen\nHesser",
    "Data Analysis\nand Modeling\nin Medicine",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Vincent\nHeuveline",
    "Engineering\nMathematics and\nComputing Lab\n(EMCL)",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "PD Dr Ahmad\nHujeirat",
    "Theoretical\nand Computational\nAstrophysics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Bernhard\nHöfle",
    "3DGeo\n3D Geospatial\nData Processing",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Jan\nJohannes",
    "Statistics of\nInverse Problems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Bernd\nJähne",
    "Air-Sea\nInteractions",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Guido\nKanschat",
    "Mathematical\nMethods of\nSimulation",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Ralf\nKlessen",
    "Theoretical\nStar Formation\nStudies",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Hans\nKnüpfer",
    "Applied\nAnalysis\n(CV/PDE)",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Ekaterina\nKostina",
    "Numerical\nOptimization",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Kurt\nKremer",
    "Polymer\nTheory",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr Susanne\nKrömker",
    "Visualization\nand Numerical\nGeometry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Ursula\nKummer",
    "Modeling of\nBiological\nProcesses",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Anna\nMarciniak-Czochra",
    "Applied\nAnalysis and\nModelling in\nBiosciences",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Björn\nOmmer",
    "Computer\nVision",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Barbara\nPaech",
    "Software\nEngineering",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Jun Prof Maria Beatrice\nPozzetti",
    "Geometric\nGroup Theory",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Ralf\nRannacher",
    "Numerical\nMethods",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Stefan\nRiezler",
    "Statistical\nNatural Language\nProcessing Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Joacim\nRocklöv",
    "Artificial\nIntelligence in\nthe Research of\nInfectious Diseases\nImpacted by\nClimate Change",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Kurt\nRoth",
    "Terrestrial\nSystems & Chaotic,\nComplex, and Evolving\nEnvironmental Systems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Carsten\nRother",
    "Computer\nVision and\nLearning Lab",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Filip\nSadlo",
    "Visual\nComputing",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Robert\nScheichl",
    "Numerical\nAnalysis and\nUncertainty\nQuantification",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Christoph\nSchnörr",
    "Image and\nPattern Analysis",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Ulrich\nSchwarz",
    "Physics\nof Complex\nBiosystems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Oriol\nVendrell",
    "Theoretical\nChemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Rebecca\nWade",
    "Molecular\nand Cellular\nModeling Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Anna\nWienhard",
    "Differential\nGeometry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Jun Prof Jakob\nZech",
    "Machine\nLearning",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Alexander\nZipf",
    "GIScience\nResearch Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
];
var group_colour = "#cccccc";
var group_border_colour = "#ffffff";

// methods
var method_names = [
  "Mathematical and Numerical Analysis",
  "Numerical Algorithms and Software",
  "Data Analysis and Graphics",
  "Machine Learning and Computer Vision",
  "Arithmetic, Geometry and Topology",
];
var method_anim_ms = 1000;
var method_color = "#e13535";
var method_weights = [
  [1.0, 0.0, 1.0, 0.0, 1.0], //"Prof Peter Albers",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof Artur Andrzejak",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Peter Bastian",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Hans Georg Bock",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Prof Gebhard Böckle",
  [0.0, 1.0, 1.0, 0.0, 0.0], //"Prof André Butz",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Peter Comba",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Andreas Dreuw",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Dr Stefan Fischer",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof Anette Frank",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Frauke Gräter",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Dr Frederik Graw",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Dr Ganna Gryn'ova",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Eva Gutheil",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Roland Herzog",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof Jürgen Hesser",
  [0.0, 1.0, 1.0, 0.0, 0.0], //"Prof Vincent Heuveline",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"PD Dr Ahmad Hujeirat",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof Bernhard Höfle",
  [1.0, 0.0, 1.0, 0.0, 0.0], //"Prof Jan Johannes",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof Bernd Jähne",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Guido Kanschat",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Ralf Klessen",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Hans Knüpfer",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Ekaterina Kostina",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Kurt Kremer",
  [0.0, 0.0, 1.0, 0.0, 1.0], //"Dr Susanne Krömker",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Ursula Kummer",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Anna Marciniak-Czochra",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Björn Ommer",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Barbara Paech",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Jun Prof Maria Beatrice Pozzetti",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Rolf Rannacher",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Stefan Riezler",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Joacim Rocklöv",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Kurt Roth",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Carsten Rother",
  [0.0, 0.5, 1.0, 0.0, 1.0], //"Prof Filip Sadlo",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Robert Scheichl",
  [1.0, 0.0, 0.0, 1.0, 0.0], //"Prof Christoph Schnörr",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Ulrich Schwarz",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Oriol Vendrell",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Rebecca Wade",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Prof Anna Wienhard",
  [1.0, 0.0, 0.0, 1.0, 0.0], //"Jun Prof Jakob Zech",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof Alexander Zipf",
];

// applications
var application_names = [
  "Molecular Material Science",
  "Medicine and Bioscience",
  "Humanities",
  "Astrophysics",
  "Environmental Sciences",
  "Engineering",
];
var application_color = "#499bce";
var application_weights = [
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Peter Albers",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Artur Andrzejak",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Peter Bastian",
  [0.0, 1.0, 0.0, 0.0, 0.0, 1.0], //"Prof Hans Georg Bock",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Gebhard Böckle",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof André Butz",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Peter Comba",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Andreas Dreuw",
  [1.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Dr Stefan Fischer",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Anette Frank",
  [1.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Frauke Gräter",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Dr Frederik Graw",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Dr Ganna Gryn'ova",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Eva Gutheil",
  [0.0, 0.0, 0.0, 0.0, 0.0, 1.0], //"Prof Roland Herzog",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Jürgen Hesser",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Vincent Heuveline",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"PD Dr Ahmad Hujeirat",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Bernhard Höfle",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Jan Johannes",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Bernd Jähne",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"Prof Guido Kanschat",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"Prof Ralf Klessen",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Hans Knüpfer",
  [0.0, 1.0, 0.0, 0.0, 0.0, 1.0], //"Prof Ekaterina Kostina",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Kurt Kremer",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Dr Susanne Krömker",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Ursula Kummer",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Anna Marciniak-Czochra",
  [0.0, 1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Björn Ommer",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Barbara Paech",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Jun Prof Maria Beatrice Pozzetti",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Rolf Rannacher",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Stefan Riezler",
  [0.0, 1.0, 0.0, 0.0, 1.0, 0.0], //"Prof Joacim Rocklöv",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Kurt Roth",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Carsten Rother",
  [0.25, 0.5, 0.0, 0.5, 0.25, 0.5], //"Prof Filip Sadlo",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Robert Scheichl",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Christoph Schnörr",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Ulrich Schwarz",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Oriol Vendrell",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Rebecca Wade",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Anna Wienhard",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Jun Prof Jakob Zech",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Alexander Zipf",
];

// https://stackoverflow.com/a/36164530/6465472
function transpose(m) {
  return m[0].map((x, i) => m.map((x) => x[i]));
}

var method_groups = transpose(method_weights);
var application_groups = transpose(application_weights);

// svg circle arc math based on https://stackoverflow.com/a/18473154/6465472
function xy(radius, deg) {
  var rad = ((deg - 90) * Math.PI) / 180.0;
  return {
    x: 200 + radius * Math.cos(rad),
    y: 200 + radius * Math.sin(rad),
  };
}

// svg path for text inside a segment (single arc)
function makeTextArc(radius, startAngle, endAngle, width) {
  var anticlockwise = startAngle > 70 && endAngle < 290;
  if (anticlockwise) {
    radius = radius + Math.floor(width / 2) - 4;
  } else {
    radius = radius - Math.floor(width / 2) + 1;
  }
  var p0 = xy(radius, startAngle);
  var p1 = xy(radius, endAngle);
  if (anticlockwise) {
    return ["M", p1.x, p1.y, "A", radius, radius, 0, 0, 0, p0.x, p0.y].join(
      " "
    );
  }
  return ["M", p0.x, p0.y, "A", radius, radius, 0, 0, 1, p1.x, p1.y].join(" ");
}

// svg path for a segment (two arcs connected by straight lines)
function makeSegment(radius, startAngle, endAngle, width) {
  var rm = radius - width;
  var rp = radius + width;
  var p0 = xy(rm, startAngle);
  var p1 = xy(rm, endAngle);
  var p2 = xy(rp, endAngle);
  var p3 = xy(rp, startAngle);
  return [
    "M",
    p0.x,
    p0.y,
    "A",
    rm,
    rm,
    0,
    0,
    1,
    p1.x,
    p1.y,
    "L",
    p2.x,
    p2.y,
    "A",
    rp,
    rp,
    0,
    0,
    0,
    p3.x,
    p3.y,
    "z",
  ].join(" ");
}

/*global SVG*/

var updateSegments = function () {
  var segments = SVG.find(".iwr-vis-segment-item");
  for (var i = 0; i < segments.length; i++) {
    if (segments[i].hasClass("selected")) {
      segments[i].css({ opacity: 1, filter: "grayscale(0)" });
      segments[i].animate().attr("stroke-width", 2);
    } else if (segments[i].hasClass("hovered")) {
      segments[i].css({ opacity: 1, filter: "grayscale(0)" });
      segments[i].attr("stroke-width", 1);
    } else {
      segments[i].css({
        filter: "grayscale(80%)",
        opacity: "20%",
      });
      segments[i].attr("stroke-width", 1);
    }
  }
};

function nextGroupBoxIndex(p, ncols) {
  if (p.x + 1 < ncols) {
    return { x: p.x + 1, y: p.y };
  }
  return { x: 0, y: p.y + 1 };
}

function updateGroups(groups) {
  updateSegments();
  var items = SVG.find(".iwr-vis-group-item");
  if (typeof groups != "undefined") {
    console.assert(items.length == groups.length, items, groups);
  }
  var groupBoxIndex = { x: 0, y: 0 };
  var ncols = 2;
  var height = 50;
  var width = 72;
  var x0 = 0;
  var y0 = 0;
  if (typeof groups == "undefined") {
    ncols = 4;
    var nrows = 9.7;
    width = 50;
    height = 29;
    SVG.find(".iwr-vis-logo").css({ opacity: 1, visibility: "visible" });
    // for now just hard-code indices of boxes in grid
    var xs = [
      1.5, 0.75, 2.25, 0.0, 1.5, 3.0, 0.75, 2.25, 0.0, 1.5, 3.0, 0.75, 2.25,
      0.0, 1.5, 3.0, -0.75, 0.75, 2.25, 3.75, 0.0, 3.0, -0.75, 0.75, 2.25, 3.75,
      0.0, 1.5, 3.0, -0.75, 0.75, 2.25, 3.75, 0.0, 1.5, 3.0, 0.75, 2.25, 0.0,
      1.5, 3.0, 0.75, 2.25, 1.5, 0.75, 2.25, 1.5, 0.75, 2.25,
    ];
    var ys = [
      0, 0.5, 0.5, 1, 1, 1, 1.5, 1.5, 2, 2, 2, 2.5, 2.5, 3, 3, 3, 3.5, 3.5, 3.5,
      3.5, 4, 4, 4.5, 4.5, 4.5, 4.5, 5, 5, 5, 5.5, 5.5, 5.5, 5.5, 6, 6, 6, 6.5,
      6.5, 7, 7, 7, 7.5, 7.5, 8, 8.5, 8.5, 9, 9.5, 9.5, 10,
    ];
    x0 = 200 - (width * ncols) / 2;
    y0 = 200 - (height * nrows) / 2;
    for (var j = 0; j < items.length; j++) {
      items[j].animate(method_anim_ms, 0, "now").size(width, height);
      items[j]
        .animate(method_anim_ms, 0, "now")
        .move(x0 + width * xs[j], y0 + height * ys[j]);
      items[j].css({ opacity: 1, visibility: "visible" });
    }
    return;
  }
  SVG.find(".iwr-vis-logo").css({ opacity: 0, visibility: "hidden" });
  var nGroups = 0;
  for (var k = 0; k < items.length; k++) {
    if (groups[k] != 0) {
      ++nGroups;
    }
  }
  if (nGroups > 8) {
    ncols = 3;
  }
  if (nGroups > 12) {
    ncols = 4;
    height = 40;
    width = 58;
  }
  x0 = 200 - (width * ncols) / 2;
  y0 = 200 - (height * Math.floor((nGroups + 1) / 2)) / ncols;
  for (var i = 0; i < items.length; i++) {
    if (groups[i] == 0) {
      items[i].css({ opacity: 0, visibility: "hidden" });
    } else {
      items[i].animate(method_anim_ms, 0, "now").size(width, height);
      items[i]
        .animate(method_anim_ms, 0, "now")
        .move(x0 + width * groupBoxIndex.x, y0 + height * groupBoxIndex.y);
      items[i].css({ opacity: groups[i], visibility: "visible" });
      groupBoxIndex = nextGroupBoxIndex(groupBoxIndex, ncols);
    }
  }
}

var resetAll = function () {
  SVG.find(".iwr-vis-segment-item").addClass("hovered").removeClass("selected");
  updateGroups();
};

var selectSegment = function () {
  var segments = SVG.find(".iwr-vis-segment-item");
  var nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (this.hasClass("selected") && nSelected == 1) {
    resetAll();
  } else {
    segments.removeClass("hovered");
    segments.removeClass("selected");
    this.addClass("selected");
    updateGroups(this.data("groups"));
  }
};

var hoverSegment = function () {
  var segments = SVG.find(".iwr-vis-segment-item");
  var nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (nSelected == 1) {
    return;
  }
  segments.removeClass("selected").removeClass("hovered");
  this.addClass("hovered");
  updateGroups(this.data("groups"));
};

var leaveSegment = function () {
  var segments = SVG.find(".iwr-vis-segment-item");
  var nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (nSelected == 1) {
    return;
  }
  segments.addClass("hovered");
  updateGroups();
};

function applyWeightedHighlights(items, weights) {
  console.assert(items.length == weights.length, items, weights);
  items.css({ filter: "grayscale(80%)", opacity: "20%" });
  for (var i = 0; i < weights.length; i++) {
    if (weights[i] > 0) {
      items[i].css({ filter: "grayscale(0)" });
      items[i].css({ opacity: weights[i] });
    }
  }
}

var highlightSegments = function () {
  applyWeightedHighlights(
    SVG.find(".iwr-vis-method-item"),
    this.data("method_weights")
  );
  applyWeightedHighlights(
    SVG.find(".iwr-vis-application-item"),
    this.data("application_weights")
  );
};

function addSegments(svg, names, groups, color, radius, width, segmentClass) {
  var delta = 360 / names.length;
  for (var i = 0; i < names.length; i++) {
    var group = svg
      .group()
      .addClass("iwr-vis-segment-item")
      .addClass(segmentClass)
      .addClass("highlighted");
    group.click(selectSegment);
    group.on("mouseenter", hoverSegment);
    group.on("mouseleave", leaveSegment);
    group.data("text", names[i]);
    group.data("groups", groups[i]);
    group.css({
      "transition-property": "opacity",
      "transition-duration": "0.6s",
    });
    group
      .path(makeSegment(radius, i * delta, (i + 1) * delta, width))
      .fill(color)
      .stroke("#000000")
      .css({ filter: "drop-shadow(1px 1px 2px)" });
    var strPath = group
      .path(makeTextArc(radius, i * delta, (i + 1) * delta, width))
      .fill("none")
      .stroke("none");
    strPath
      .text(names[i])
      .attr("startOffset", "50%")
      .attr("text-anchor", "middle")
      .attr("font-size", "0.55em");
  }
}

function addGroups(
  svg,
  names,
  method_weights,
  application_weights,
  color,
  border_colour
) {
  var linear = svg
    .gradient("linear", function (add) {
      add.stop({ offset: 0, color: application_color, opacity: 0.3 });
      add.stop({ offset: 1, color: method_color, opacity: 0.1 });
    })
    .from(0, 0)
    .to(0, 1);

  var boxHeight = 200;
  var boxWidth = 200;
  for (var i = 0; i < names.length; i++) {
    var group = svg.group().addClass("iwr-vis-group-item");
    group.on("mouseenter", highlightSegments);
    group.on("mouseleave", updateSegments);
    group.data("text", names[i][1]);
    group.data("method_weights", method_weights[i]);
    group.data("application_weights", application_weights[i]);
    group.css({ transition: "opacity 0.6s, visibility 0.6s" });
    var link = group.link(names[i][2]);
    // box
    link
      .polygon("0,100 50,13.4 150,13.4 200,100 150,186.6 50,186.6")
      .fill(color)
      .stroke({ color: border_colour, width: 5 })
      .fill(linear);
    // outline
    link
      .polyline("4,100 51,17 149,17 196,100 149,183 51,183 4,100")
      .fill("none")
      .stroke({ color: "#000000", width: 1 });
    var padding = 40;
    // group name
    var groupNamePath = link
      .path(["M", 0, padding, "L", boxWidth, padding].join(" "))
      .fill("none")
      .stroke("none");
    groupNamePath
      .text(names[i][1])
      .attr("startOffset", "50%")
      .attr("dominant-baseline", "hanging")
      .attr("text-anchor", "middle")
      .attr("font-size", "1em");
    // professor name
    var profNamePath = link
      .path(
        ["M", 0, boxHeight - padding, "L", boxWidth, boxHeight - padding].join(
          " "
        )
      )
      .fill("none")
      .stroke("none");
    profNamePath
      .text(names[i][0])
      .attr("startOffset", "50%")
      .attr("dominant-baseline", "auto")
      .attr("text-anchor", "middle")
      .attr("font-size", "0.8em");
    group.size(50, 29);
    group.move(175, 175);
  }
}

window.onload = function () {
  var svg = SVG("#iwr-vis-menu-svg");
  // background
  var bg_group = svg.group().addClass("iwr-vis-bg");
  bg_group.click(resetAll);
  bg_group.rect(400, 400).cx(200).cy(200).fill("#ffffff").stroke("#ffffff");

  // groups
  addGroups(
    svg,
    group_names,
    method_weights,
    application_weights,
    group_colour,
    group_border_colour
  );
  // methods
  addSegments(
    svg,
    method_names,
    method_groups,
    method_color,
    157,
    13,
    "iwr-vis-method-item"
  );
  // applications
  addSegments(
    svg,
    application_names,
    application_groups,
    application_color,
    183,
    13,
    "iwr-vis-application-item"
  );
  resetAll();
  // iwr logo: animate dot colors
  var logoGroup = svg.group().addClass("iwr-vis-logo");
  logoGroup.css({ transition: "opacity 0.6s, visibility 0.6s" });
  var logo = logoGroup.group();
  logo.fill("#2a2a2b");
  // dots
  logo
    .path(
      "m1285.3 136.65c0-11.109-9.09-20.121-20.3-20.121s-20.3 9.012-20.3 20.121c0 11.11 9.09 20.118 20.3 20.118s20.3-9.008 20.3-20.118"
    )
    .animate({
      duration: 800,
      delay: 0,
      swing: true,
      times: 2,
      wait: 300,
    })
    .attr({ fill: "#a1131b" });
  logo
    .path(
      "m1374.7 136.65c0-11.109-9.08-20.121-20.29-20.121s-20.3 9.012-20.3 20.121c0 11.11 9.09 20.118 20.3 20.118s20.29-9.008 20.29-20.118"
    )
    .animate({
      duration: 800,
      delay: 500,
      swing: true,
      times: 2,
      wait: 300,
    })
    .attr({ fill: "#a1131b" });
  logo
    .path(
      "m1464.1 136.65c0-11.109-9.08-20.121-20.3-20.121-11.21 0-20.29 9.012-20.29 20.121 0 11.11 9.08 20.118 20.29 20.118 11.22 0 20.3-9.008 20.3-20.118"
    )
    .animate({
      duration: 800,
      delay: 1000,
      swing: true,
      times: 2,
      wait: 300,
    })
    .attr({ fill: "#a1131b" });
  logo
    .path(
      "m1553.5 136.71c0-11.109-9.09-20.117-20.3-20.117s-20.29 9.008-20.29 20.117 9.08 20.117 20.29 20.117 20.3-9.008 20.3-20.117"
    )
    .animate({
      duration: 800,
      delay: 1500,
      swing: true,
      times: 2,
      wait: 300,
    })
    .attr({ fill: "#a1131b" });
  logo
    .path(
      "m1643 136.9c0-11.109-9.09-20.121-20.3-20.121s-20.3 9.012-20.3 20.121c0 11.11 9.09 20.118 20.3 20.118s20.3-9.008 20.3-20.118"
    )
    .animate({
      duration: 800,
      delay: 2000,
      swing: true,
      times: 2,
      wait: 300,
    })
    .attr({ fill: "#a1131b" });
  logo
    .path(
      "m1768.8 134.56c0-9.922-9.01-17.965-20.13-17.965h-41.32c-11.13 0-20.14 8.043-20.14 17.965v4.492c0 9.922 9.01 17.965 20.14 17.965h41.32c11.12 0 20.13-8.043 20.13-17.965v-4.492"
    )
    .animate({
      duration: 800,
      delay: 2500,
      swing: false,
      times: 1,
      wait: 300,
    })
    .attr({ fill: "#a1131b" });
  // the rest
  logo.path(
    "m1285.1 334.99c-0.56-12.675-7.58-22.129-20.25-21.937-11.87-0.211-20.36 10.57-20.03 21.937l0.01 166.38c0.08 6.735 6.08 20.262 20.02 19.852 13.42 0.308 20.34-12.649 20.29-19.856l-0.04-166.37"
  );
  logo.path(
    "m1374 334.99c-0.56-12.679-7.58-22.129-20.24-21.937-11.87-0.211-20.37 10.57-20.04 21.937l0.01 166.37c0.08 6.735 6.08 20.266 20.03 19.856 13.41 0.308 20.33-12.652 20.29-19.856l-0.05-166.37"
  );
  logo.path(
    "m1552.6 334.99c-0.56-12.679-7.58-22.129-20.24-21.937-11.87-0.211-20.37 10.57-20.04 21.937l0.01 166.37c0.08 6.735 6.08 20.266 20.03 19.856 13.41 0.308 20.33-12.652 20.29-19.856l-0.05-166.37"
  );
  logo.path(
    "m1643.4 334.99c-0.56-12.679-7.58-22.129-20.24-21.937-11.88-0.211-20.37 10.57-20.04 21.937l0.01 166.37c0.08 6.735 6.08 20.266 20.03 19.856 13.41 0.308 20.33-12.652 20.28-19.856l-0.04-166.37"
  );
  logo.path(
    "m1522.7 315.57c-8.8 5.489-40.66 39.067-81.74 38.879-39.42-0.629-64.96-30.129-74.32-36.867l7.01 53.129s35.51 21.098 68.83 20.723c32.28 1.125 70.74-21.293 70.74-21.293l9.48-54.571"
  );
  logo.path(
    "m1650.3 505.31c2.38 19.816 19.88 16.07 43.46 15.882 35.84-0.371 46.63-7.109 58.36-19.648 12.29-12.602 14.97-38.801 10.23-55.77-9.42-32.187-38.24-36.804-42.17-38.425 12.47-21.024 42.54-56.364 46.66-72.114 2.81-7.422 0.47-14.379-6.92-19.152-14.93-7.484-24.96 0.441-30.02 7.18-15.13 20.519-35.05 68.343-56.26 76.57-4.07 0.98-21.85-2.293-23.3 17.309 1.74 24.843 26.64 13.816 56.05 18.152 17.9 2.621 25.83 5.055 26.26 25.203-0.04 15.328-11.72 23.207-19.33 24.703-35.19 6.52-63.07-8.125-63.02 20.11"
  );
  logo.path("m1248.5 279.62h3.34v-33.336h-3.34v33.336");
  logo.path(
    "m1259.3 270.94h3.17v-4.418c1.27 1.691 2.68 2.957 4.22 3.796 1.54 0.84 3.22 1.258 5.03 1.258 1.84 0 3.48-0.469 4.91-1.406 1.43-0.938 2.48-2.195 3.16-3.785 0.68-1.582 1.02-4.055 1.02-7.41v-12.692h-3.17v11.762c0 2.84-0.12 4.738-0.36 5.691-0.37 1.629-1.07 2.856-2.11 3.684-1.04 0.82-2.4 1.23-4.08 1.23-1.92 0-3.64-0.632-5.16-1.902-1.52-1.269-2.52-2.84-3-4.715-0.3-1.218-0.46-3.457-0.46-6.707v-9.043h-3.17v24.657"
  );
  logo.path(
    "m1290.7 280.09h3.17v-9.156h5.04v-2.743h-5.04v-21.914h-3.17v21.914h-4.33v2.743h4.33v9.156"
  );
  logo.path(
    "m1324.8 261.1c-0.43 1.692-1.05 3.043-1.86 4.055-0.8 1.012-1.87 1.828-3.21 2.449-1.32 0.618-2.73 0.93-4.19 0.93-2.42 0-4.5-0.781-6.24-2.336-1.27-1.133-2.23-2.832-2.88-5.098zm0-6.64 2.67-1.406c-0.88-1.723-1.89-3.11-3.04-4.168-1.15-1.059-2.44-1.864-3.88-2.414-1.44-0.551-3.06-0.829-4.87-0.829-4.03 0-7.17 1.317-9.44 3.954-2.27 2.636-3.4 5.617-3.4 8.941 0 3.129 0.96 5.914 2.87 8.363 2.44 3.114 5.7 4.668 9.78 4.668 4.2 0 7.56-1.594 10.07-4.781 1.79-2.25 2.69-5.063 2.72-8.43h-22.18c0.06-2.863 0.97-5.215 2.74-7.043 1.77-1.832 3.96-2.746 6.56-2.746 1.26 0 2.48 0.215 3.67 0.653 1.18 0.437 2.19 1.015 3.02 1.738 0.84 0.723 1.74 1.887 2.71 3.5"
  );
  logo.path(
    "m1333.4 270.94h3.24v-3.602c0.97 1.422 1.99 2.48 3.06 3.184 1.07 0.703 2.19 1.054 3.35 1.054 0.88 0 1.82-0.281 2.82-0.84l-1.66-2.671c-0.66 0.285-1.22 0.429-1.68 0.429-1.06 0-2.07-0.433-3.06-1.304-0.98-0.868-1.73-2.215-2.24-4.043-0.39-1.407-0.59-4.247-0.59-8.52v-8.344h-3.24v24.657"
  );
  logo.path(
    "m1360.9 268.52c-1.77 0-3.4-0.434-4.9-1.305-1.49-0.863-2.68-2.086-3.56-3.652-0.88-1.571-1.33-3.231-1.33-4.981 0-1.734 0.45-3.398 1.34-4.98 0.89-1.586 2.09-2.821 3.59-3.7 1.5-0.886 3.11-1.324 4.83-1.324 1.74 0 3.38 0.438 4.94 1.313 1.55 0.875 2.75 2.058 3.58 3.551 0.84 1.496 1.26 3.179 1.26 5.05 0 2.848-0.94 5.235-2.82 7.153-1.88 1.914-4.19 2.875-6.93 2.875zm12.68 11.941v-34.176h-3.13v4.239c-1.33-1.618-2.82-2.832-4.48-3.649-1.65-0.816-3.47-1.223-5.43-1.223-3.49 0-6.46 1.266-8.94 3.797-2.47 2.532-3.7 5.61-3.7 9.235 0 3.55 1.25 6.586 3.74 9.109 2.49 2.524 5.49 3.785 8.99 3.785 2.03 0 3.86-0.429 5.5-1.293 1.64-0.859 3.08-2.152 4.32-3.875v14.051h3.13"
  );
  logo.path(
    "m1380.6 270.94h3.18v-24.657h-3.18zm1.58 10.152c0.72 0 1.34-0.254 1.85-0.77 0.51-0.511 0.76-1.132 0.76-1.855 0-0.711-0.25-1.324-0.76-1.84-0.51-0.512-1.13-0.77-1.85-0.77-0.71 0-1.32 0.258-1.83 0.77-0.51 0.516-0.77 1.129-0.77 1.84 0 0.723 0.26 1.344 0.77 1.855 0.51 0.516 1.12 0.77 1.83 0.77"
  );
  logo.path(
    "m1403.2 268.24-2.04-2.109c-1.7 1.648-3.36 2.472-4.98 2.472-1.03 0-1.91-0.339-2.65-1.019-0.73-0.68-1.1-1.473-1.1-2.383 0-0.797 0.3-1.562 0.91-2.285 0.6-0.742 1.88-1.609 3.82-2.605 2.36-1.227 3.96-2.403 4.81-3.54 0.83-1.144 1.25-2.437 1.25-3.875 0-2.023-0.71-3.738-2.13-5.14-1.43-1.406-3.2-2.11-5.34-2.11-1.42 0-2.78 0.313-4.07 0.93s-2.36 1.473-3.21 2.563l1.99 2.261c1.62-1.824 3.34-2.738 5.16-2.738 1.27 0 2.35 0.406 3.25 1.223 0.89 0.816 1.34 1.773 1.34 2.879 0 0.906-0.3 1.714-0.89 2.425-0.59 0.696-1.92 1.567-4 2.629-2.22 1.145-3.74 2.282-4.54 3.395-0.8 1.121-1.2 2.398-1.2 3.832 0 1.875 0.63 3.43 1.92 4.668 1.27 1.238 2.89 1.859 4.84 1.859 2.27 0 4.56-1.109 6.86-3.332"
  );
  logo.path(
    "m1433.1 265.82-2.52-1.562c-2.17 2.887-5.14 4.328-8.89 4.328-3 0-5.5-0.965-7.48-2.898-1.99-1.93-2.98-4.278-2.98-7.039 0-1.797 0.46-3.485 1.37-5.071s2.17-2.812 3.76-3.687 3.37-1.313 5.35-1.313c3.62 0 6.58 1.442 8.87 4.324l2.52-1.652c-1.18-1.773-2.76-3.152-4.75-4.129-1.98-0.976-4.25-1.469-6.78-1.469-3.9 0-7.14 1.239-9.7 3.715-2.57 2.481-3.86 5.492-3.86 9.043 0 2.387 0.6 4.606 1.81 6.653 1.19 2.046 2.85 3.644 4.95 4.793 2.1 1.148 4.44 1.722 7.05 1.722 1.62 0 3.2-0.25 4.72-0.75 1.52-0.496 2.8-1.148 3.86-1.945 1.06-0.801 1.96-1.824 2.7-3.063"
  );
  logo.path(
    "m1439.1 270.94h3.17v-24.657h-3.17zm1.58 10.152c0.72 0 1.33-0.254 1.84-0.77 0.52-0.511 0.77-1.132 0.77-1.855 0-0.711-0.25-1.324-0.77-1.84-0.51-0.512-1.12-0.77-1.84-0.77-0.71 0-1.32 0.258-1.83 0.77-0.51 0.516-0.77 1.129-0.77 1.84 0 0.723 0.26 1.344 0.77 1.855 0.51 0.516 1.12 0.77 1.83 0.77"
  );
  logo.path(
    "m1461.9 268.52c-2.75 0-5.06-0.961-6.94-2.875-1.87-1.918-2.81-4.305-2.81-7.153 0-1.871 0.42-3.554 1.26-5.05 0.83-1.493 2.03-2.676 3.59-3.551s3.21-1.313 4.94-1.313c1.7 0 3.31 0.438 4.81 1.324 1.5 0.879 2.69 2.114 3.58 3.7 0.89 1.582 1.33 3.246 1.33 4.98 0 1.75-0.44 3.41-1.32 4.981-0.88 1.566-2.07 2.789-3.56 3.652-1.49 0.871-3.12 1.305-4.88 1.305zm-12.69 2.422h3.17v-4.532c1.25 1.723 2.69 3.016 4.32 3.875 1.63 0.864 3.45 1.293 5.46 1.293 3.5 0 6.5-1.261 8.98-3.785 2.5-2.523 3.74-5.559 3.74-9.109 0-3.625-1.23-6.703-3.7-9.235-2.47-2.531-5.45-3.797-8.93-3.797-1.97 0-3.77 0.407-5.41 1.223-1.65 0.817-3.13 2.031-4.46 3.649v-13.258h-3.17v33.676"
  );
  logo.path("m1480.8 280.46h3.18v-34.176h-3.18v34.176");
  logo.path(
    "m1490.4 270.94h3.18v-24.657h-3.18zm1.58 10.152c0.72 0 1.34-0.254 1.85-0.77 0.51-0.511 0.77-1.132 0.77-1.855 0-0.711-0.26-1.324-0.77-1.84-0.51-0.512-1.13-0.77-1.85-0.77-0.7 0-1.31 0.258-1.83 0.77-0.51 0.516-0.77 1.129-0.77 1.84 0 0.723 0.26 1.344 0.77 1.855 0.52 0.516 1.13 0.77 1.83 0.77"
  );
  logo.path(
    "m1500.6 270.94h3.18v-4.418c1.27 1.691 2.67 2.957 4.21 3.796 1.54 0.84 3.22 1.258 5.03 1.258 1.85 0 3.48-0.469 4.91-1.406 1.43-0.938 2.48-2.195 3.16-3.785 0.68-1.582 1.02-4.055 1.02-7.41v-12.692h-3.17v11.762c0 2.84-0.12 4.738-0.35 5.691-0.37 1.629-1.08 2.856-2.12 3.684-1.04 0.82-2.4 1.23-4.08 1.23-1.92 0-3.64-0.632-5.16-1.902-1.52-1.269-2.52-2.84-3-4.715-0.3-1.218-0.45-3.457-0.45-6.707v-9.043h-3.18v24.657"
  );
  logo.path(
    "m1541.1 268.52c-1.77 0-3.4-0.434-4.89-1.305-1.5-0.863-2.68-2.086-3.57-3.652-0.88-1.571-1.32-3.231-1.32-4.981 0-1.734 0.45-3.398 1.33-4.98 0.89-1.586 2.09-2.821 3.59-3.7 1.5-0.886 3.11-1.324 4.83-1.324 1.74 0 3.38 0.438 4.94 1.313 1.55 0.875 2.75 2.058 3.59 3.551 0.83 1.496 1.25 3.179 1.25 5.05 0 2.848-0.94 5.235-2.82 7.153-1.87 1.914-4.19 2.875-6.93 2.875zm12.68 2.422v-24.657h-3.13v4.239c-1.33-1.618-2.82-2.832-4.47-3.649-1.66-0.816-3.47-1.223-5.43-1.223-3.5 0-6.48 1.266-8.95 3.797-2.46 2.532-3.7 5.61-3.7 9.235 0 3.55 1.25 6.586 3.74 9.109 2.49 2.524 5.49 3.785 9 3.785 2.02 0 3.85-0.429 5.49-1.293 1.64-0.859 3.08-2.152 4.32-3.875v4.532h3.13"
  );
  logo.path(
    "m1560.1 270.94h3.24v-3.602c0.96 1.422 1.98 2.48 3.06 3.184 1.07 0.703 2.19 1.054 3.35 1.054 0.88 0 1.81-0.281 2.81-0.84l-1.66-2.671c-0.66 0.285-1.22 0.429-1.67 0.429-1.06 0-2.08-0.433-3.06-1.304-0.98-0.868-1.73-2.215-2.25-4.043-0.39-1.407-0.58-4.247-0.58-8.52v-8.344h-3.24v24.657"
  );
  logo.path(
    "m1573 270.94h3.35l8.47-18.985 8.23 18.985h3.38l-14.71-33.676h-3.35l4.75 10.89-10.12 22.786"
  );
  logo.path(
    "m1645.7 273.43-2.63-2.016c-1.45 1.887-3.19 3.316-5.22 4.293-2.03 0.973-4.27 1.461-6.7 1.461-2.66 0-5.12-0.637-7.38-1.914-2.27-1.281-4.03-2.992-5.27-5.149-1.25-2.148-1.87-4.57-1.87-7.261 0-4.063 1.39-7.453 4.18-10.176 2.78-2.719 6.3-4.078 10.55-4.078 4.66 0 8.57 1.828 11.71 5.484l2.63-1.996c-1.66-2.113-3.73-3.746-6.22-4.902-2.49-1.157-5.26-1.735-8.33-1.735-5.83 0-10.43 1.942-13.8 5.825-2.83 3.277-4.24 7.238-4.24 11.875 0 4.878 1.71 8.984 5.13 12.316 3.43 3.332 7.71 4.996 12.87 4.996 3.11 0 5.92-0.617 8.43-1.848 2.5-1.23 4.56-2.957 6.16-5.175"
  );
  logo.path(
    "m1673 261.1c-0.42 1.692-1.04 3.043-1.84 4.055-0.81 1.012-1.88 1.828-3.22 2.449-1.32 0.618-2.73 0.93-4.19 0.93-2.42 0-4.51-0.781-6.24-2.336-1.27-1.133-2.23-2.832-2.88-5.098zm0-6.64 2.68-1.406c-0.88-1.723-1.89-3.11-3.04-4.168-1.15-1.059-2.44-1.864-3.88-2.414-1.44-0.551-3.06-0.829-4.88-0.829-4.02 0-7.16 1.317-9.43 3.954-2.27 2.636-3.4 5.617-3.4 8.941 0 3.129 0.96 5.914 2.87 8.363 2.44 3.114 5.7 4.668 9.78 4.668 4.21 0 7.56-1.594 10.07-4.781 1.79-2.25 2.69-5.063 2.72-8.43h-22.18c0.06-2.863 0.97-5.215 2.74-7.043 1.77-1.832 3.96-2.746 6.56-2.746 1.26 0 2.48 0.215 3.67 0.653 1.18 0.437 2.19 1.015 3.02 1.738 0.84 0.723 1.74 1.887 2.7 3.5"
  );
  logo.path(
    "m1682.8 270.94h3.17v-4.418c1.27 1.691 2.68 2.957 4.22 3.796 1.54 0.84 3.22 1.258 5.03 1.258 1.84 0 3.48-0.469 4.9-1.406 1.43-0.938 2.48-2.195 3.16-3.785 0.68-1.582 1.03-4.055 1.03-7.41v-12.692h-3.17v11.762c0 2.84-0.13 4.738-0.36 5.691-0.37 1.629-1.07 2.856-2.12 3.684-1.04 0.82-2.4 1.23-4.07 1.23-1.92 0-3.65-0.632-5.16-1.902-1.52-1.269-2.52-2.84-3-4.715-0.31-1.218-0.46-3.457-0.46-6.707v-9.043h-3.17v24.657"
  );
  logo.path(
    "m1714.2 280.09h3.17v-9.156h5.03v-2.743h-5.03v-21.914h-3.17v21.914h-4.33v2.743h4.33v9.156"
  );
  logo.path(
    "m1748.3 261.1c-0.42 1.692-1.04 3.043-1.85 4.055-0.8 1.012-1.88 1.828-3.21 2.449-1.33 0.618-2.73 0.93-4.2 0.93-2.41 0-4.5-0.781-6.23-2.336-1.27-1.133-2.24-2.832-2.88-5.098zm0-6.64 2.68-1.406c-0.88-1.723-1.89-3.11-3.04-4.168-1.15-1.059-2.44-1.864-3.88-2.414-1.44-0.551-3.07-0.829-4.88-0.829-4.02 0-7.17 1.317-9.43 3.954-2.27 2.636-3.41 5.617-3.41 8.941 0 3.129 0.96 5.914 2.88 8.363 2.44 3.114 5.7 4.668 9.78 4.668 4.2 0 7.56-1.594 10.07-4.781 1.79-2.25 2.69-5.063 2.72-8.43h-22.18c0.06-2.863 0.97-5.215 2.74-7.043 1.77-1.832 3.96-2.746 6.56-2.746 1.25 0 2.47 0.215 3.66 0.653 1.19 0.437 2.2 1.015 3.03 1.738s1.74 1.887 2.7 3.5"
  );
  logo.path(
    "m1756.9 270.94h3.24v-3.602c0.97 1.422 1.99 2.48 3.06 3.184 1.07 0.703 2.19 1.054 3.35 1.054 0.88 0 1.81-0.281 2.81-0.84l-1.65-2.671c-0.67 0.285-1.22 0.429-1.68 0.429-1.06 0-2.08-0.433-3.06-1.304-0.98-0.868-1.73-2.215-2.24-4.043-0.39-1.407-0.59-4.247-0.59-8.52v-8.344h-3.24v24.657"
  );
  logo.path(
    "m1258 225.62v-3.105c-1.16 0.5-2.16 0.746-2.99 0.746-0.62 0-1.13-0.125-1.54-0.375-0.41-0.246-0.66-0.536-0.77-0.86s-0.16-1.187-0.16-2.593v-3.333h5.14v-2.742h-5.14l-0.02-21.914h-3.18v21.914h-3.23v2.742h3.23v3.852c0 1.77 0.17 3.031 0.49 3.789 0.33 0.754 0.88 1.359 1.65 1.82 0.79 0.461 1.72 0.692 2.83 0.692 1.03 0 2.26-0.211 3.69-0.633"
  );
  logo.path(
    "m1273.5 213.64c-2.64 0-4.91-0.977-6.8-2.922-1.9-1.949-2.84-4.309-2.84-7.074 0-1.782 0.43-3.446 1.29-4.985 0.87-1.539 2.03-2.73 3.5-3.57 1.48-0.836 3.09-1.258 4.85-1.258 1.75 0 3.37 0.422 4.84 1.258 1.47 0.84 2.64 2.031 3.5 3.57 0.87 1.539 1.3 3.203 1.3 4.985 0 2.765-0.95 5.125-2.85 7.074-1.91 1.945-4.17 2.922-6.79 2.922zm0.01 3.105c3.8 0 6.94-1.375 9.44-4.125 2.27-2.508 3.41-5.476 3.41-8.906 0-3.445-1.2-6.457-3.6-9.031-2.4-2.575-5.48-3.864-9.25-3.864-3.79 0-6.88 1.289-9.27 3.864-2.4 2.574-3.6 5.586-3.6 9.031 0 3.414 1.13 6.375 3.4 8.883 2.5 2.761 5.66 4.148 9.47 4.148"
  );
  logo.path(
    "m1290.4 216.1h3.25v-3.601c0.96 1.418 1.98 2.48 3.05 3.184 1.07 0.703 2.19 1.054 3.36 1.054 0.87 0 1.81-0.281 2.81-0.84l-1.66-2.675c-0.66 0.289-1.22 0.429-1.67 0.429-1.06 0-2.08-0.433-3.06-1.301-0.99-0.871-1.73-2.218-2.25-4.046-0.39-1.403-0.58-4.246-0.58-8.52v-8.34h-3.25v24.656"
  );
  logo.path(
    "m1314.3 197.66 2.84 1.699c1.99-3.671 4.29-5.507 6.91-5.507 1.12 0 2.17 0.261 3.15 0.781 0.98 0.523 1.73 1.222 2.24 2.097s0.77 1.805 0.77 2.786c0 1.121-0.38 2.214-1.13 3.289-1.04 1.48-2.95 3.261-5.71 5.347-2.78 2.102-4.51 3.618-5.19 4.555-1.18 1.57-1.77 3.27-1.77 5.098 0 1.453 0.35 2.773 1.04 3.965 0.7 1.195 1.68 2.136 2.94 2.824 1.26 0.687 2.63 1.031 4.11 1.031 1.57 0 3.04-0.391 4.41-1.168 1.36-0.777 2.81-2.211 4.34-4.297l-2.72-2.058c-1.26 1.66-2.32 2.757-3.21 3.285-0.88 0.527-1.85 0.793-2.89 0.793-1.34 0-2.44-0.41-3.29-1.223-0.86-0.816-1.28-1.82-1.28-3.016 0-0.722 0.14-1.425 0.45-2.105 0.3-0.684 0.85-1.422 1.65-2.223 0.44-0.422 1.88-1.535 4.31-3.332 2.88-2.129 4.86-4.023 5.94-5.687 1.07-1.664 1.6-3.332 1.6-5.008 0-2.418-0.91-4.52-2.75-6.301s-4.07-2.676-6.7-2.676c-2.02 0-3.86 0.543-5.5 1.621-1.65 1.083-3.17 2.891-4.56 5.43"
  );
  logo.path(
    "m1363.6 210.98-2.52-1.562c-2.17 2.883-5.13 4.328-8.89 4.328-3.01 0-5.5-0.969-7.48-2.898-1.99-1.934-2.98-4.278-2.98-7.039 0-1.797 0.45-3.489 1.37-5.071 0.91-1.586 2.17-2.816 3.76-3.687 1.59-0.879 3.37-1.317 5.35-1.317 3.62 0 6.58 1.446 8.87 4.328l2.52-1.652c-1.18-1.777-2.76-3.152-4.75-4.129-1.99-0.98-4.25-1.469-6.79-1.469-3.89 0-7.13 1.239-9.7 3.715-2.57 2.481-3.85 5.492-3.85 9.043 0 2.387 0.6 4.602 1.8 6.653 1.2 2.046 2.86 3.644 4.96 4.793 2.09 1.144 4.45 1.722 7.04 1.722 1.64 0 3.21-0.25 4.73-0.75 1.52-0.496 2.81-1.148 3.86-1.949 1.06-0.801 1.96-1.82 2.7-3.059"
  );
  logo.path(
    "m1368.6 216.1h3.18v-24.656h-3.18zm1.58 10.153c0.72 0 1.34-0.254 1.85-0.77 0.51-0.511 0.77-1.133 0.77-1.859 0-0.711-0.26-1.32-0.77-1.836-0.51-0.512-1.13-0.77-1.85-0.77-0.71 0-1.31 0.258-1.83 0.77-0.51 0.516-0.76 1.125-0.76 1.836 0 0.726 0.25 1.348 0.76 1.859 0.52 0.516 1.12 0.77 1.83 0.77"
  );
  logo.path(
    "m1398.6 206.27c-0.43 1.695-1.04 3.046-1.85 4.058s-1.88 1.828-3.21 2.449c-1.33 0.618-2.73 0.926-4.2 0.926-2.42 0-4.5-0.777-6.24-2.336-1.27-1.129-2.23-2.828-2.88-5.097zm0-6.637 2.67-1.406c-0.87-1.723-1.89-3.114-3.04-4.172-1.15-1.055-2.44-1.86-3.88-2.414-1.43-0.551-3.06-0.825-4.87-0.825-4.02 0-7.17 1.317-9.44 3.954-2.27 2.636-3.4 5.617-3.4 8.941 0 3.125 0.96 5.914 2.88 8.363 2.43 3.11 5.69 4.668 9.78 4.668 4.2 0 7.55-1.594 10.07-4.781 1.78-2.254 2.69-5.063 2.72-8.43h-22.19c0.06-2.867 0.98-5.215 2.75-7.047 1.77-1.828 3.95-2.746 6.56-2.746 1.25 0 2.47 0.219 3.66 0.657 1.19 0.433 2.2 1.015 3.03 1.738 0.83 0.722 1.73 1.887 2.7 3.5"
  );
  logo.path(
    "m1407.4 216.1h3.17v-4.417c1.27 1.691 2.67 2.957 4.22 3.796 1.54 0.836 3.22 1.258 5.03 1.258 1.84 0 3.48-0.469 4.91-1.406 1.42-0.938 2.48-2.199 3.16-3.785s1.02-4.055 1.02-7.41v-12.692h-3.18v11.762c0 2.84-0.11 4.738-0.35 5.687-0.37 1.633-1.07 2.86-2.12 3.684-1.04 0.824-2.4 1.234-4.07 1.234-1.92 0-3.64-0.632-5.16-1.902-1.52-1.269-2.52-2.84-3-4.715-0.31-1.222-0.46-3.461-0.46-6.707v-9.043h-3.17v24.656"
  );
  logo.path(
    "m1437.8 225.26h3.17v-9.157h5.03v-2.742h-5.03v-21.914h-3.17v21.914h-4.33v2.742h4.33v9.157"
  );
  logo.path(
    "m1449.7 216.1h3.17v-24.656h-3.17zm1.57 10.153c0.73 0 1.34-0.254 1.85-0.77 0.52-0.511 0.77-1.133 0.77-1.859 0-0.711-0.25-1.32-0.77-1.836-0.51-0.512-1.12-0.77-1.85-0.77-0.7 0-1.31 0.258-1.83 0.77-0.5 0.516-0.76 1.125-0.76 1.836 0 0.726 0.26 1.348 0.76 1.859 0.52 0.516 1.13 0.77 1.83 0.77"
  );
  logo.path(
    "m1469 225.62v-3.105c-1.17 0.5-2.16 0.746-3 0.746-0.61 0-1.13-0.125-1.54-0.375-0.41-0.246-0.66-0.536-0.77-0.86-0.1-0.324-0.16-1.187-0.16-2.593v-3.333h5.15v-2.742h-5.15l-0.02-21.914h-3.17v21.914h-3.24v2.742h3.24v3.852c0 1.77 0.16 3.031 0.49 3.789 0.32 0.754 0.87 1.359 1.65 1.82s1.72 0.692 2.82 0.692c1.03 0 2.26-0.211 3.7-0.633"
  );
  logo.path(
    "m1472.4 216.1h3.17v-24.656h-3.17zm1.57 10.153c0.72 0 1.34-0.254 1.85-0.77 0.51-0.511 0.77-1.133 0.77-1.859 0-0.711-0.26-1.32-0.77-1.836-0.51-0.512-1.13-0.77-1.85-0.77-0.71 0-1.32 0.258-1.83 0.77-0.51 0.516-0.76 1.125-0.76 1.836 0 0.726 0.25 1.348 0.76 1.859 0.51 0.516 1.12 0.77 1.83 0.77"
  );
  logo.path(
    "m1505.5 210.98-2.51-1.562c-2.18 2.883-5.14 4.328-8.9 4.328-3 0-5.5-0.969-7.48-2.898-1.99-1.934-2.98-4.278-2.98-7.039 0-1.797 0.46-3.489 1.37-5.071 0.91-1.586 2.17-2.816 3.76-3.687 1.59-0.879 3.38-1.317 5.35-1.317 3.62 0 6.58 1.446 8.88 4.328l2.51-1.652c-1.18-1.777-2.76-3.152-4.75-4.129-1.98-0.98-4.25-1.469-6.78-1.469-3.9 0-7.14 1.239-9.71 3.715-2.56 2.481-3.85 5.492-3.85 9.043 0 2.387 0.6 4.602 1.81 6.653 1.2 2.046 2.85 3.644 4.95 4.793 2.09 1.144 4.45 1.722 7.04 1.722 1.64 0 3.21-0.25 4.73-0.75 1.52-0.496 2.8-1.148 3.86-1.949s1.96-1.82 2.7-3.059"
  );
  logo.path(
    "m1554.8 218.6-2.63-2.016c-1.45 1.887-3.2 3.32-5.22 4.297-2.04 0.973-4.27 1.457-6.7 1.457-2.66 0-5.12-0.637-7.39-1.914s-4.02-2.988-5.27-5.145c-1.25-2.152-1.87-4.57-1.87-7.261 0-4.063 1.39-7.457 4.18-10.176s6.3-4.078 10.55-4.078c4.67 0 8.57 1.828 11.72 5.484l2.63-1.996c-1.67-2.113-3.74-3.75-6.23-4.906-2.48-1.153-5.26-1.735-8.32-1.735-5.84 0-10.43 1.946-13.8 5.829-2.83 3.277-4.24 7.234-4.24 11.871 0 4.882 1.71 8.988 5.13 12.32 3.42 3.328 7.71 4.996 12.86 4.996 3.11 0 5.93-0.617 8.43-1.848 2.51-1.23 4.57-2.957 6.17-5.179"
  );
  logo.path(
    "m1572 213.64c-2.64 0-4.91-0.977-6.8-2.922-1.9-1.949-2.84-4.309-2.84-7.074 0-1.782 0.43-3.446 1.29-4.985 0.87-1.539 2.03-2.73 3.5-3.57 1.47-0.836 3.09-1.258 4.85-1.258 1.75 0 3.37 0.422 4.84 1.258 1.47 0.84 2.64 2.031 3.5 3.57 0.87 1.539 1.3 3.203 1.3 4.985 0 2.765-0.95 5.125-2.85 7.074-1.91 1.945-4.17 2.922-6.79 2.922zm0.01 3.105c3.8 0 6.95-1.375 9.44-4.125 2.27-2.508 3.41-5.476 3.41-8.906 0-3.445-1.2-6.457-3.6-9.031-2.4-2.575-5.48-3.864-9.25-3.864-3.79 0-6.88 1.289-9.28 3.864-2.39 2.574-3.59 5.586-3.59 9.031 0 3.414 1.13 6.375 3.4 8.883 2.5 2.761 5.66 4.148 9.47 4.148"
  );
  logo.path(
    "m1590.1 216.1h3.17v-4.261c1.11 1.574 2.24 2.722 3.41 3.445 1.6 0.969 3.29 1.453 5.06 1.453 1.19 0 2.33-0.234 3.4-0.703s1.95-1.094 2.63-1.871 1.27-1.891 1.77-3.344c1.05 1.938 2.37 3.403 3.96 4.41 1.58 1.004 3.28 1.508 5.11 1.508 1.7 0 3.21-0.429 4.51-1.293 1.3-0.859 2.27-2.062 2.9-3.605 0.64-1.539 0.95-3.852 0.95-6.934v-13.461h-3.24v13.461c0 2.645-0.19 4.461-0.56 5.453-0.38 0.985-1.03 1.785-1.94 2.391-0.91 0.601-1.99 0.902-3.26 0.902-1.54 0-2.94-0.449-4.21-1.359-1.28-0.902-2.21-2.113-2.79-3.625-0.59-1.508-0.88-4.031-0.88-7.567v-9.656h-3.17v12.625c0 2.973-0.19 4.996-0.56 6.063-0.37 1.062-1.01 1.918-1.94 2.558-0.92 0.641-2.01 0.961-3.28 0.961-1.47 0-2.84-0.437-4.12-1.324-1.27-0.883-2.22-2.074-2.83-3.566-0.61-1.496-0.92-3.786-0.92-6.868v-10.449h-3.17v24.656"
  );
  logo.path(
    "m1645.8 213.68c-2.74 0-5.05-0.961-6.93-2.879-1.88-1.914-2.81-4.301-2.81-7.153 0-1.871 0.41-3.55 1.25-5.047 0.84-1.492 2.04-2.679 3.59-3.55 1.57-0.879 3.21-1.317 4.95-1.317 1.7 0 3.3 0.442 4.8 1.325 1.5 0.882 2.7 2.117 3.58 3.703 0.89 1.582 1.34 3.242 1.34 4.976 0 1.75-0.44 3.414-1.33 4.985-0.87 1.566-2.06 2.785-3.56 3.652-1.49 0.867-3.12 1.305-4.88 1.305zm-12.69 2.421h3.17v-4.531c1.26 1.723 2.7 3.016 4.33 3.875 1.63 0.864 3.44 1.293 5.45 1.293 3.5 0 6.5-1.262 8.99-3.785s3.74-5.559 3.74-9.109c0-3.629-1.24-6.707-3.71-9.235-2.46-2.535-5.44-3.797-8.93-3.797-1.96 0-3.76 0.407-5.41 1.223-1.64 0.816-3.13 2.031-4.46 3.649v-13.258h-3.17v33.675"
  );
  logo.path(
    "m1663.7 216.1h3.18v-11.511c0-2.809 0.15-4.742 0.45-5.801 0.46-1.512 1.32-2.707 2.6-3.582s2.8-1.313 4.57-1.313 3.27 0.426 4.51 1.282c1.23 0.851 2.08 1.972 2.55 3.363 0.32 0.949 0.48 2.969 0.48 6.051v11.511h3.24v-12.101c0-3.399-0.4-5.961-1.19-7.684-0.8-1.722-1.99-3.07-3.58-4.043-1.6-0.976-3.6-1.461-6-1.461s-4.4 0.485-6.01 1.461c-1.61 0.973-2.82 2.336-3.61 4.078-0.79 1.747-1.19 4.372-1.19 7.875v11.875"
  );
  logo.path(
    "m1694.5 225.26h3.17v-9.157h5.03v-2.742h-5.03v-21.914h-3.17v21.914h-4.33v2.742h4.33v9.157"
  );
  logo.path(
    "m1706.4 216.1h3.17v-24.656h-3.17zm1.58 10.153c0.71 0 1.33-0.254 1.84-0.77 0.51-0.511 0.77-1.133 0.77-1.859 0-0.711-0.26-1.32-0.77-1.836-0.51-0.512-1.13-0.77-1.84-0.77-0.72 0-1.32 0.258-1.83 0.77-0.51 0.516-0.77 1.125-0.77 1.836 0 0.726 0.26 1.348 0.77 1.859 0.51 0.516 1.11 0.77 1.83 0.77"
  );
  logo.path(
    "m1715.5 216.1h3.17v-4.417c1.27 1.691 2.68 2.957 4.22 3.796 1.54 0.836 3.22 1.258 5.03 1.258 1.85 0 3.48-0.469 4.91-1.406 1.43-0.938 2.48-2.199 3.16-3.785s1.02-4.055 1.02-7.41v-12.692h-3.18v11.762c0 2.84-0.11 4.738-0.35 5.687-0.37 1.633-1.07 2.86-2.11 3.684s-2.4 1.234-4.08 1.234c-1.92 0-3.64-0.632-5.16-1.902-1.52-1.269-2.52-2.84-3-4.715-0.3-1.222-0.46-3.461-0.46-6.707v-9.043h-3.17v24.656"
  );
  logo.path(
    "m1755.1 213.68c-1.8 0-3.47-0.438-5-1.305-1.55-0.871-2.75-2.07-3.63-3.602-0.88-1.535-1.32-3.195-1.32-4.976 0-2.703 0.91-4.942 2.72-6.707 1.81-1.77 4.17-2.653 7.05-2.653 2.92 0 5.26 0.875 7.03 2.629 1.78 1.754 2.67 4.055 2.67 6.914 0 1.856-0.41 3.512-1.22 4.973-0.82 1.457-1.98 2.609-3.47 3.457-1.5 0.844-3.1 1.27-4.83 1.27zm9.36 2.421h3.17v-19.648c0-3.457-0.3-5.988-0.9-7.59-0.83-2.265-2.28-4.012-4.33-5.234-2.06-1.227-4.53-1.836-7.41-1.836-2.12 0-4.02 0.297-5.7 0.898-1.69 0.598-3.05 1.399-4.11 2.407-1.06 1.007-2.04 2.48-2.93 4.421h3.45c0.93-1.632 2.15-2.839 3.63-3.628 1.48-0.782 3.32-1.176 5.51-1.176 2.16 0 3.99 0.402 5.48 1.211 1.49 0.804 2.55 1.816 3.19 3.035 0.63 1.223 0.95 3.187 0.95 5.906v1.27c-1.19-1.512-2.65-2.672-4.38-3.481-1.72-0.805-3.55-1.211-5.48-1.211-2.27 0-4.41 0.563-6.4 1.688-2 1.125-3.54 2.64-4.63 4.547-1.09 1.902-1.64 3.996-1.64 6.277 0 2.277 0.57 4.406 1.71 6.379 1.13 1.973 2.7 3.531 4.71 4.68 2 1.144 4.11 1.722 6.33 1.722 1.85 0 3.57-0.383 5.17-1.148 1.59-0.762 3.13-2.02 4.61-3.77v4.281"
  );
  var matrix = new SVG.Matrix(1.3333, 0, 0, -1.3333, -165.96, 69.546);
  logo.transform(matrix);
  logoGroup.size(28);
  logoGroup.move(186, 179);
};
