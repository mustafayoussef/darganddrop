window.onload = function () {
  // Active Users
  var chart1 = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    title: {
      text: "Active Users",
    },
    axisY: {
      title: "",
      valueFormatString: "#0,,.",
      suffix: "",
      prefix: "",
    },
    data: [
      {
        type: "splineArea",
        color: "rgba(54,158,173,.7)",
        markerSize: 5,
        xValueFormatString: "YYYY",
        yValueFormatString: "#,##0.##",
        dataPoints: [
          { x: new Date(2000, 0), y: 3289000 },
          { x: new Date(2001, 0), y: 3830000 },
          { x: new Date(2002, 0), y: 2009000 },
          { x: new Date(2003, 0), y: 2840000 },
          { x: new Date(2004, 0), y: 2396000 },
          { x: new Date(2005, 0), y: 1613000 },
          { x: new Date(2006, 0), y: 2821000 },
          { x: new Date(2007, 0), y: 2000000 },
          { x: new Date(2008, 0), y: 1397000 },
          { x: new Date(2009, 0), y: 2506000 },
          { x: new Date(2010, 0), y: 2798000 },
          { x: new Date(2011, 0), y: 3386000 },
          { x: new Date(2012, 0), y: 6704000 },
          { x: new Date(2013, 0), y: 6026000 },
          { x: new Date(2014, 0), y: 2394000 },
          { x: new Date(2015, 0), y: 1872000 },
          { x: new Date(2016, 0), y: 2140000 },
        ],
      },
    ],
  });
  chart1.render();

  // Requset
  var chart2 = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Requset",
    },
    axisX: {
      valueFormatString: "DD MMM",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      title: "",
      crosshair: {
        enabled: true,
      },
    },
    axis: {
      title: "Number of Visits",
      crosshair: {
        enabled: true,
      },
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      verticalAlign: "bottom",
      horizontalAlign: "left",
      dockInsidePlotArea: true,
      itemclick: toogleDataSeries,
    },
    data: [
      {
        type: "line",
        showInLegend: true,
        name: "Total Visit",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        color: "#F08080",
        dataPoints: [
          { x: new Date(2017, 0, 3), y: 650 },
          { x: new Date(2017, 0, 4), y: 700 },
          { x: new Date(2017, 0, 5), y: 710 },
          { x: new Date(2017, 0, 6), y: 658 },
          { x: new Date(2017, 0, 7), y: 734 },
          { x: new Date(2017, 0, 8), y: 963 },
          { x: new Date(2017, 0, 9), y: 847 },
          { x: new Date(2017, 0, 10), y: 853 },
          { x: new Date(2017, 0, 11), y: 869 },
          { x: new Date(2017, 0, 12), y: 943 },
          { x: new Date(2017, 0, 13), y: 970 },
          { x: new Date(2017, 0, 14), y: 869 },
          { x: new Date(2017, 0, 15), y: 890 },
          { x: new Date(2017, 0, 16), y: 930 },
        ],
      },
      {
        type: "line",
        showInLegend: true,
        name: "Unique Visit",
        lineDashType: "dash",
        dataPoints: [
          { x: new Date(2017, 0, 3), y: 510 },
          { x: new Date(2017, 0, 4), y: 560 },
          { x: new Date(2017, 0, 5), y: 540 },
          { x: new Date(2017, 0, 6), y: 558 },
          { x: new Date(2017, 0, 7), y: 544 },
          { x: new Date(2017, 0, 8), y: 693 },
          { x: new Date(2017, 0, 9), y: 657 },
          { x: new Date(2017, 0, 10), y: 663 },
          { x: new Date(2017, 0, 11), y: 639 },
          { x: new Date(2017, 0, 12), y: 673 },
          { x: new Date(2017, 0, 13), y: 660 },
          { x: new Date(2017, 0, 14), y: 562 },
          { x: new Date(2017, 0, 15), y: 643 },
          { x: new Date(2017, 0, 16), y: 570 },
        ],
      },
    ],
  });
  chart2.render();

  function toogleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart2.render();
  }

  // Top Active
  var chart3 = new CanvasJS.Chart("chartContainer3", {
    animationEnabled: true,
    backgroundColor: "transparent",
    zoomEnabled: true,
    theme: "light2",
    title: {
      text: "Top Active",
    },
    axisX: {
      title: "",
      suffix: "",
      minimum: 0,
      maximum: 61,
      gridThickness: 0,
    },
    axisY: {
      title: "",
      suffix: "",
    },
    data: [
      {
        type: "bubble",
        toolTipContent: "<b>{name}</b><br/>Uses: xx% ",
        dataPoints: [
          { x: 39.6, y: 5.225, z: 2347, name: "China" },
          { x: 5, y: 5.5, z: 50.49, name: "Australia" },
          { x: 15, y: 4.5, z: 304.09, name: "US" },
          { x: 17.4, y: 2, z: 2.64, name: "Brazil" },
          { x: 21.5, y: 7, z: 14.95, name: "Russia" },
          { x: 30.6, y: 4, z: 78.12, name: "Egypt" },
        ],
      },
    ],
  });
  chart3.render();
};


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}