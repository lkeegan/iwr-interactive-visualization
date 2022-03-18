// groups: [professor name, group name, webpage]
var group_names = [
  [
    "Prof Peter Albers",
    "Symplectic Dynamics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Artur Andrzejak",
    "Parallel and Distributed Systems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Peter Bastian",
    "Parallel Computing",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Gebhard Böckle",
    "Computational Arithmetic Geometry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof André Butz",
    "Atmospheric Physics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Alpha Beta",
    "Symplectic Geometry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Peter Comba",
    "Theory and Modeling in Inorganic  and Bioinorganic Chemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Andreas Dreuw",
    "Theoretical and Computational Chemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr Stefan Fischer",
    "Computational Biochemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Anette Frank",
    "Natural Language Processing Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Frauke Gräter",
    "Molecular Biomechanics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr Frederik Graw",
    "Modelling Infection & Immunity",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr Ganna Gryn'ova",
    "Computational Carbon Chemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Eva Gutheil",
    "Modelling Infection & Immunity",
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
var method_color = "#e13535";
var method_weights = [
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Atmospheric Physics",
  [1.0, 0.5, 0.0, 0.0, 0.0], //"Parallel Computing",
  [1.0, 0.5, 0.0, 0.0, 0.0], //"Scientific Computing",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Software Engineering",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Symplectic Geometry",
  [0.0, 0.5, 0.0, 0.5, 0.0], //"Theoretical Star Formation",
  [0.0, 0.5, 1.0, 0.0, 0.0], //"Visual Computing",
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
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Atmospheric Physics",
  [0.0, 0.0, 0.0, 0.0, 0.5, 0.0], //"Parallel Computing",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Scientific Computing",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Software Engineering",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Symplectic Geometry",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"Theoretical Star Formation",
  [0.25, 0.5, 0.0, 0.5, 0.25, 0.5], //"Visual Computing",
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

function updateGroups(groups) {
  updateSegments();
  var items = SVG.find(".iwr-vis-group-item");
  if (typeof groups === "undefined") {
    items.css({ opacity: 1, visibility: "visible" });
    return;
  }
  for (var i = 0; i < groups.length; i++) {
    if (groups[i] == 0) {
      items[i].css({ opacity: 0, visibility: "hidden" });
    } else {
      items[i].css({ opacity: groups[i], visibility: "visible" });
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
    group.mouseover(hoverSegment);
    group.mouseout(leaveSegment);
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

window.onload = function () {
  var svg = SVG("#iwr-vis-menu-svg");
  // background
  var bg_group = svg.group().addClass("iwr-vis-bg");
  bg_group.click(resetAll);
  bg_group.rect(400, 400).cx(200).cy(200).fill("#ffffff").stroke("#ffffff");

  // groups
  var h = 150 / group_names.length;
  for (var i = 0; i < group_names.length; i++) {
    var group = svg.group().addClass("iwr-vis-group-item");
    group.mouseover(highlightSegments);
    group.mouseout(updateSegments);
    group.data("text", group_names[i][1]);
    group.data("method_weights", method_weights[i]);
    group.data("application_weights", application_weights[i]);
    group.css({ transition: "opacity 0.6s, visibility 0.6s" });
    var cx = 200;
    var cy = 145 + h * i;
    // link to group webpage
    var link = group.link(group_names[i][2]);
    // box
    link
      .rect(160, h)
      .cx(cx)
      .cy(cy)
      .fill(group_colour)
      .stroke(group_border_colour);
    // professor name
    var profNamePath = link
      .path(["M", cx - 80, cy - 4, "L", cx + 80, cy - 4].join(" "))
      .fill("none")
      .stroke("none");
    profNamePath
      .text(group_names[i][0])
      .attr("startOffset", "50%")
      .attr("dominant-baseline", "middle")
      .attr("text-anchor", "middle")
      .attr("font-size", "0.4em");
    // group name
    var groupNamePath = link
      .path(["M", cx - 80, cy + 4, "L", cx + 80, cy + 4].join(" "))
      .fill("none")
      .stroke("none");
    groupNamePath
      .text(group_names[i][1])
      .attr("startOffset", "50%")
      .attr("dominant-baseline", "middle")
      .attr("text-anchor", "middle")
      .attr("font-size", "0.4em");
  }
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
  // iwr logo: animate dot colors
  for (i = 1; i < 7; ++i) {
    SVG("#iwr-logo-dot" + i)
      .animate({
        duration: 800,
        delay: 500 * i,
        swing: i < 6,
        times: 2 - Math.floor(i / 6),
        wait: 300,
      })
      .attr({ fill: "#a1131b" });
  }
};
