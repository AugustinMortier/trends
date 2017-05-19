function worldmap(id){

	$(function(){
	
	$("."+id).mapael({
	map : {
	name : "world_countries"
	, zoom: {
	enabled: true,
	maxLevel : 70,
	init: {
	level:zoomLevel,
	x: mapX,
	y: mapY
	}
	}

	// Set default plots and areas style
	, defaultPlot : {
	type: "circle",
	attrs : {fill: "#0e8cdb", opacity : 0.8}
	, attrsHover : {opacity : 0.5   }
	, text : {
	attrs : {fill : "#000"}
	, attrsHover : {fill : "#000"}
	}
	,eventHandlers: {
	click: function(e, id, mapElem, textElem, elemOptions){
	change_img(elemOptions.URL,"2002-2012","od550aer","ECMWF_EAC3");
	},
	mouseover: function (e, id, mapElem, textElem, elemOptions) {
	//change_img(elemOptions.URL,"2002-2012","od550aer","ECMWF_EAC3");
	}
	}
	}
	, defaultArea: {
	attrs : {fill: "#ffffff", opacity: 1.0, stroke: "#a0a0a0", "stroke-width": 1,"stroke-linejoin": "round"}
	, attrsHover : {fill: "#E6E8FA"}
	, text : {attrs : {fill : "#505444"}
	, attrsHover : {fill : "#000"}}
	}
	},
	legend: {
	display: true,
	plot: {
	cssClass: "mapLegend",
	title: "AOD550 Obs/ECMWF_EAC3 - year averages - 2002-2012",
	mode: "horizontal",
	type: "circle",
	hideElemsOnClick: {
	opacity: 0,
	},
	slices: [{
			size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -98,
        max: -4,
        attrs: {
        fill: col7
        },
        label: "< -4"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -4.0,
        max: -2.0,
        attrs: {
        fill: col6
        },
        label: "[-4:-2]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -2.0,
        max: -0.0001,
        attrs: {
        fill: col5
        },
        label: "[-2:0]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: 0.0001,
        max: 2.0,
        attrs: {
        fill: col3
        },
        label: "[0:+2]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: 2.0,
        max: 4.0,
        attrs: {
        fill: col2
        },
        label: "[+2:+4]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: 4.0,
        max: 98,
        attrs: {
        fill: col1
        },
        label: "> +4 (%/yr)"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -0.001,
        max: 0.001,
        attrs: {
        fill: col4
        },
        label: "No Trend"
        },{
        size: siz2,
        legendSpecificAttrs: {r: 5},
        min: -99.1,
        max: -98.9,
        attrs: {
        fill: col0,
        opacity: 0.15
        },
        label: "<7 years"		
	}]
	}
	},


	// Customize some areas of the map
	plots: {
	
},});
	
	//zoom function

	$("."+id).on("zoom", function() {
	zoomLevel = $("."+id).data("zoomLevel");
	mapX= $("."+id).data("zoomX");
	mapY= $("."+id).data("zoomY");

	siz1 = 15 / (1 + 0.25 * zoomLevel);
	siz2 = 10 / (1 + 0.25 * zoomLevel);

	$("."+id).trigger("update",
	[{
	legend: {
	plot: {
	slices: [{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz2
	}]
	}
	}
	}]
	);
	});

	$("."+id).on("mouseup", function() {
	zoomLevel = $("."+id).data("zoomLevel");
	mapX= $("."+id).data("zoomX");
	mapY= $("."+id).data("zoomY");
	});

	});
	}
	
function worldmap(id){

	$(function(){
	
	$("."+id).mapael({
	map : {
	name : "world_countries"
	, zoom: {
	enabled: true,
	maxLevel : 70,
	init: {
	level:zoomLevel,
	x: mapX,
	y: mapY
	}
	}

	// Set default plots and areas style
	, defaultPlot : {
	type: "circle",
	attrs : {fill: "#0e8cdb", opacity : 0.8}
	, attrsHover : {opacity : 0.5   }
	, text : {
	attrs : {fill : "#000"}
	, attrsHover : {fill : "#000"}
	}
	,eventHandlers: {
	click: function(e, id, mapElem, textElem, elemOptions){
	change_img(elemOptions.URL,"2002-2012","od550aer","ECMWF_EAC3");
	},
	mouseover: function (e, id, mapElem, textElem, elemOptions) {
	//change_img(elemOptions.URL,"2002-2012","od550aer","ECMWF_EAC3");
	}
	}
	}
	, defaultArea: {
	attrs : {fill: "#ffffff", opacity: 1.0, stroke: "#a0a0a0", "stroke-width": 1,"stroke-linejoin": "round"}
	, attrsHover : {fill: "#E6E8FA"}
	, text : {attrs : {fill : "#505444"}
	, attrsHover : {fill : "#000"}}
	}
	},
	legend: {
	display: true,
	plot: {
	cssClass: "mapLegend",
	title: "AOD550 Obs/ECMWF_EAC3 - year averages - 2002-2012",
	mode: "horizontal",
	type: "circle",
	hideElemsOnClick: {
	opacity: 0,
	},
	slices: [{
			size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -98,
        max: -4,
        attrs: {
        fill: col7
        },
        label: "< -4"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -4.0,
        max: -2.0,
        attrs: {
        fill: col6
        },
        label: "[-4:-2]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -2.0,
        max: -0.0001,
        attrs: {
        fill: col5
        },
        label: "[-2:0]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: 0.0001,
        max: 2.0,
        attrs: {
        fill: col3
        },
        label: "[0:+2]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: 2.0,
        max: 4.0,
        attrs: {
        fill: col2
        },
        label: "[+2:+4]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: 4.0,
        max: 98,
        attrs: {
        fill: col1
        },
        label: "> +4 (%/yr)"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -0.001,
        max: 0.001,
        attrs: {
        fill: col4
        },
        label: "No Trend"
        },{
        size: siz2,
        legendSpecificAttrs: {r: 5},
        min: -99.1,
        max: -98.9,
        attrs: {
        fill: col0,
        opacity: 0.15
        },
        label: "<7 years"		
	}]
	}
	},


	// Customize some areas of the map
	plots: {
	
},});
	
	//zoom function

	$("."+id).on("zoom", function() {
	zoomLevel = $("."+id).data("zoomLevel");
	mapX= $("."+id).data("zoomX");
	mapY= $("."+id).data("zoomY");

	siz1 = 15 / (1 + 0.25 * zoomLevel);
	siz2 = 10 / (1 + 0.25 * zoomLevel);

	$("."+id).trigger("update",
	[{
	legend: {
	plot: {
	slices: [{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz2
	}]
	}
	}
	}]
	);
	});

	$("."+id).on("mouseup", function() {
	zoomLevel = $("."+id).data("zoomLevel");
	mapX= $("."+id).data("zoomX");
	mapY= $("."+id).data("zoomY");
	});

	});
	}
	
function worldmap(id){

	$(function(){
	
	$("."+id).mapael({
	map : {
	name : "world_countries"
	, zoom: {
	enabled: true,
	maxLevel : 70,
	init: {
	level:zoomLevel,
	x: mapX,
	y: mapY
	}
	}

	// Set default plots and areas style
	, defaultPlot : {
	type: "circle",
	attrs : {fill: "#0e8cdb", opacity : 0.8}
	, attrsHover : {opacity : 0.5   }
	, text : {
	attrs : {fill : "#000"}
	, attrsHover : {fill : "#000"}
	}
	,eventHandlers: {
	click: function(e, id, mapElem, textElem, elemOptions){
	change_img(elemOptions.URL,"2002-2012","od550aer","ECMWF_EAC3");
	},
	mouseover: function (e, id, mapElem, textElem, elemOptions) {
	//change_img(elemOptions.URL,"2002-2012","od550aer","ECMWF_EAC3");
	}
	}
	}
	, defaultArea: {
	attrs : {fill: "#ffffff", opacity: 1.0, stroke: "#a0a0a0", "stroke-width": 1,"stroke-linejoin": "round"}
	, attrsHover : {fill: "#E6E8FA"}
	, text : {attrs : {fill : "#505444"}
	, attrsHover : {fill : "#000"}}
	}
	},
	legend: {
	display: true,
	plot: {
	cssClass: "mapLegend",
	title: "AOD550 Obs/ECMWF_EAC3 - year averages - 2002-2012",
	mode: "horizontal",
	type: "circle",
	hideElemsOnClick: {
	opacity: 0,
	},
	slices: [{
			size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -98,
        max: -4,
        attrs: {
        fill: col7
        },
        label: "< -4"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -4.0,
        max: -2.0,
        attrs: {
        fill: col6
        },
        label: "[-4:-2]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -2.0,
        max: -0.0001,
        attrs: {
        fill: col5
        },
        label: "[-2:0]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: 0.0001,
        max: 2.0,
        attrs: {
        fill: col3
        },
        label: "[0:+2]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: 2.0,
        max: 4.0,
        attrs: {
        fill: col2
        },
        label: "[+2:+4]"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: 4.0,
        max: 98,
        attrs: {
        fill: col1
        },
        label: "> +4 (%/yr)"
        },{
        size: siz1,
        legendSpecificAttrs: {r: 7},
        min: -0.001,
        max: 0.001,
        attrs: {
        fill: col4
        },
        label: "No Trend"
        },{
        size: siz2,
        legendSpecificAttrs: {r: 5},
        min: -99.1,
        max: -98.9,
        attrs: {
        fill: col0,
        opacity: 0.15
        },
        label: "<7 years"		
	}]
	}
	},


	// Customize some areas of the map
	plots: {
	
'Abisko' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 68.3500,
longitude: 18.8170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Abisko</span>"},
URL: "Abisko"
},
'AbracosHill' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -10.7600,
longitude: -62.3580,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AbracosHill</span>"},
URL: "AbracosHill"
},
'AbuAlBukhoosh' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 25.4950,
longitude: 53.1460,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AbuAlBukhoosh</span>"},
URL: "AbuAlBukhoosh"
},
'AbuDhabi' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.4760,
longitude: 54.3290,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AbuDhabi</span>"},
URL: "AbuDhabi"
},
'AdelaideSite7' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: -34.7250,
longitude: 138.656,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AdelaideSite7</span>"},
URL: "AdelaideSite7"
},
'Agoufou' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 15.3450,
longitude: -1.47900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Agoufou</span>"},
URL: "Agoufou"
},
'AhiDeCara' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.1170,
longitude: -3.23000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AhiDeCara</span>"},
URL: "AhiDeCara"
},
'AlAin' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.2420,
longitude: 55.7050,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AlAin</span>"},
URL: "AlAin"
},
'Alboran' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.9450,
longitude: -3.03700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Alboran</span>"},
URL: "Alboran"
},
'AlKhaznah' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.1590,
longitude: 55.1010,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AlKhaznah</span>"},
URL: "AlKhaznah"
},
'AlQlaa' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.1330,
longitude: 53.0330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AlQlaa</span>"},
URL: "AlQlaa"
},
'AltaFloresta' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -9.87100,
longitude: -56.1040,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AltaFloresta</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "AltaFloresta"
},
'Ames' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 42.0210,
longitude: -93.7750,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ames</span>"},
URL: "Ames"
},
'AmsterdamIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -37.8100,
longitude: 77.5730,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AmsterdamIsland</span>"},
URL: "AmsterdamIsland"
},
'Andenes' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 69.2780,
longitude: 16.0090,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Andenes</span>"},
URL: "Andenes"
},
'Anmyon' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.5390,
longitude: 126.330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Anmyon</span>"},
URL: "Anmyon"
},
'AppalachianState' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 36.2150,
longitude: -81.6940,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AppalachianState</span>"},
URL: "AppalachianState"
},
'AppledoreIsland' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 42.9870,
longitude: -70.6150,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AppledoreIsland</span>"},
URL: "AppledoreIsland"
},
'Arcachon' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 44.6640,
longitude: -1.16300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Arcachon</span>"},
URL: "Arcachon"
},
'Arica' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -18.4720,
longitude: -70.3130,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Arica</span>"},
URL: "Arica"
},
'ARMBarnstableMA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 41.6700,
longitude: -70.2900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ARMBarnstableMA</span>"},
URL: "ARMBarnstableMA"
},
'ARMDarwin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -12.4250,
longitude: 130.891,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ARMDarwin</span>"},
URL: "ARMDarwin"
},
'ARMGanIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -0.691000,
longitude: 73.1500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ARMGanIsland</span>"},
URL: "ARMGanIsland"
},
'ARMHighlandsMA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 42.0300,
longitude: -70.0490,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ARMHighlandsMA</span>"},
URL: "ARMHighlandsMA"
},
'Armilla' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.1330,
longitude: -3.24200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Armilla</span>"},
URL: "Armilla"
},
'ARMNainital' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 29.3590,
longitude: 79.4580,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ARMNainital</span>"},
URL: "ARMNainital"
},
'AscensionIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -7.97600,
longitude: -14.4150,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AscensionIsland</span>"},
URL: "AscensionIsland"
},
'ATHENSNOA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.9880,
longitude: 23.7750,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ATHENSNOA</span>"},
URL: "ATHENSNOA"
},
'AubiereLAMP' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 45.7610,
longitude: 3.11100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AubiereLAMP</span>"},
URL: "AubiereLAMP"
},
'Autilla' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 41.9970,
longitude: -4.60300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Autilla</span>"},
URL: "Autilla"
},
'Avignon' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 43.9330,
longitude: 4.87800,
value: -1.3,
tooltip: {content : "<span style=\"font-weight:bold;\">Avignon</span><br/>Obs: -1.3 %/yr<br/>Mod: -1.5 %/yr"},
URL: "Avignon"
},
'Azores' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.5300,
longitude: -28.6300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Azores</span>"},
URL: "Azores"
},
'BacGiang' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 21.2910,
longitude: 106.225,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BacGiang</span>"},
URL: "BacGiang"
},
'BachLongVy' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 20.1330,
longitude: 107.733,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BachLongVy</span>"},
URL: "BachLongVy"
},
'BackGardenGZ' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.2960,
longitude: 113.021,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BackGardenGZ</span>"},
URL: "BackGardenGZ"
},
'BacLieu' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 9.28000,
longitude: 105.730,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BacLieu</span>"},
URL: "BacLieu"
},
'Badajoz' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 38.8830,
longitude: -7.01100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Badajoz</span>"},
URL: "Badajoz"
},
'Baengnyeong' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.9660,
longitude: 124.630,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Baengnyeong</span>"},
URL: "Baengnyeong"
},
'Bahrain' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 26.2080,
longitude: 50.6090,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bahrain</span>"},
URL: "Bahrain"
},
'Balbina' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -1.91700,
longitude: -59.4870,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Balbina</span>"},
URL: "Balbina"
},
'BambeyISRA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 14.7090,
longitude: -16.4770,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BambeyISRA</span>"},
URL: "BambeyISRA"
},
'Bandung' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -6.88800,
longitude: 107.610,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bandung</span>"},
URL: "Bandung"
},
'Baneasa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.5110,
longitude: 26.0780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Baneasa</span>"},
URL: "Baneasa"
},
'Banizoumbou' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.5410,
longitude: 2.66500,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Banizoumbou</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Banizoumbou"
},
'Barcelona' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 41.3860,
longitude: 2.11700,
value: -2.6,
tooltip: {content : "<span style=\"font-weight:bold;\">Barcelona</span><br/>Obs: -2.6 %/yr<br/>Mod: -2.3 %/yr"},
URL: "Barcelona"
},
'Bareilly' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.3900,
longitude: 79.4370,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bareilly</span>"},
URL: "Bareilly"
},
'BariUniversity' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 41.1080,
longitude: 16.8840,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BariUniversity</span>"},
URL: "BariUniversity"
},
'Barrow' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 71.3120,
longitude: -156.665,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Barrow</span>"},
URL: "Barrow"
},
'Bayfordbury' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.7760,
longitude: -0.0960000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bayfordbury</span>"},
URL: "Bayfordbury"
},
'Beijing' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.9770,
longitude: 116.381,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Beijing</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Beijing"
},
'Belsk' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 51.8370,
longitude: 20.7920,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Belsk</span>"},
URL: "Belsk"
},
'Belterra' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -2.64800,
longitude: -54.9520,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Belterra</span>"},
URL: "Belterra"
},
'Bermuda' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.3700,
longitude: -64.6960,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bermuda</span>"},
URL: "Bermuda"
},
'BigMeadows' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.5220,
longitude: -78.4360,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BigMeadows</span>"},
URL: "BigMeadows"
},
'Billerica' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 42.5280,
longitude: -71.2690,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Billerica</span>"},
URL: "Billerica"
},
'Birdsville' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -25.8990,
longitude: 139.346,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Birdsville</span>"},
URL: "Birdsville"
},
'Birkenes' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 58.3880,
longitude: 8.25200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Birkenes</span>"},
URL: "Birkenes"
},
'BlackForestAMF' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 48.5400,
longitude: 8.39700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BlackForestAMF</span>"},
URL: "BlackForestAMF"
},
'Blida' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.5080,
longitude: 2.88100,
value: -4.2,
tooltip: {content : "<span style=\"font-weight:bold;\">Blida</span><br/>Obs: -4.2 %/yr<br/>Mod: No Trend"},
URL: "Blida"
},
'Bodele' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 16.8830,
longitude: 18.5500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bodele</span>"},
URL: "Bodele"
},
'Bolzano' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 46.4570,
longitude: 11.3300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bolzano</span>"},
URL: "Bolzano"
},
'BonanzaCreek' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 64.7430,
longitude: -148.316,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BonanzaCreek</span>"},
URL: "BonanzaCreek"
},
'BONDVILLE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.0530,
longitude: -88.3720,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BONDVILLE</span>"},
URL: "BONDVILLE"
},
'BORDEAUX' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 44.7880,
longitude: -0.579000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BORDEAUX</span>"},
URL: "BORDEAUX"
},
'BordjBadjiMokhtar' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 21.3300,
longitude: 0.950000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BordjBadjiMokhtar</span>"},
URL: "BordjBadjiMokhtar"
},
'Bozeman' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.6620,
longitude: -111.045,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bozeman</span>"},
URL: "Bozeman"
},
'Bragansa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -0.834000,
longitude: -46.6410,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bragansa</span>"},
URL: "Bragansa"
},
'BrattsLake' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 50.2800,
longitude: -104.700,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BrattsLake</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "BrattsLake"
},
'BrisbaneUniofQLD' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -27.4970,
longitude: 153.014,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BrisbaneUniofQLD</span>"},
URL: "BrisbaneUniofQLD"
},
'Brookhaven' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 40.8700,
longitude: -72.8890,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Brookhaven</span>"},
URL: "Brookhaven"
},
'Brussels' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 50.7830,
longitude: 4.35000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Brussels</span>"},
URL: "Brussels"
},
'BSRNBAOBoulder' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.0450,
longitude: -105.006,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BSRNBAOBoulder</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "BSRNBAOBoulder"
},
'BucharestInoe' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 44.3480,
longitude: 26.0300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BucharestInoe</span>"},
URL: "BucharestInoe"
},
'Buesum' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 54.1320,
longitude: 8.87900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Buesum</span>"},
URL: "Buesum"
},
'BureOPE' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 48.5620,
longitude: 5.50500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BureOPE</span>"},
URL: "BureOPE"
},
'Burjassot' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.5080,
longitude: -0.418000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Burjassot</span>"},
URL: "Burjassot"
},
'Bushland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.1870,
longitude: -102.094,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bushland</span>"},
URL: "Bushland"
},
'Cabauw' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.9710,
longitude: 4.92700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Cabauw</span>"},
URL: "Cabauw"
},
'CabodaRoca' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 38.7830,
longitude: -9.50000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CabodaRoca</span>"},
URL: "CabodaRoca"
},
'CaboRaso' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 38.7090,
longitude: -9.48600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CaboRaso</span>"},
URL: "CaboRaso"
},
'Caceres' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 39.4790,
longitude: -6.34300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Caceres</span>"},
URL: "Caceres"
},
'CairoEMA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 30.0810,
longitude: 31.2900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CairoEMA</span>"},
URL: "CairoEMA"
},
'CairoUniversity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 30.0260,
longitude: 31.2070,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CairoUniversity</span>"},
URL: "CairoUniversity"
},
'CalernOCA' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 43.7490,
longitude: 6.92700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CalernOCA</span>"},
URL: "CalernOCA"
},
'Calhau' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 16.8640,
longitude: -24.8670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Calhau</span>"},
URL: "Calhau"
},
'CalipsoRidgely' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.9490,
longitude: -75.8820,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CalipsoRidgely</span>"},
URL: "CalipsoRidgely"
},
'CalipsoWestDenton' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.9150,
longitude: -75.8940,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CalipsoWestDenton</span>"},
URL: "CalipsoWestDenton"
},
'CalipsoZion' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.9320,
longitude: -76.1990,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CalipsoZion</span>"},
URL: "CalipsoZion"
},
'CalTech' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.1370,
longitude: -118.126,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CalTech</span>"},
URL: "CalTech"
},
'Camaguey' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 21.4220,
longitude: -77.8500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Camaguey</span>"},
URL: "Camaguey"
},
'CampoGrandeSONDA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -20.4380,
longitude: -54.5380,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CampoGrandeSONDA</span>"},
URL: "CampoGrandeSONDA"
},
'Canberra' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -35.2710,
longitude: 149.111,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Canberra</span>"},
URL: "Canberra"
},
'CapeSanJuan' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 18.3840,
longitude: -65.6200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CapeSanJuan</span>"},
URL: "CapeSanJuan"
},
'CapoVerde' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 16.7330,
longitude: -22.9350,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CapoVerde</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "CapoVerde"
},
'Carpentras' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 44.0830,
longitude: 5.05800,
value: -3.7,
tooltip: {content : "<span style=\"font-weight:bold;\">Carpentras</span><br/>Obs: -3.7 %/yr<br/>Mod: -1.5 %/yr"},
URL: "Carpentras"
},
'CARTEL' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.3790,
longitude: -71.9310,
value: -3.8,
tooltip: {content : "<span style=\"font-weight:bold;\">CARTEL</span><br/>Obs: -3.8 %/yr<br/>Mod: No Trend"},
URL: "CARTEL"
},
'CartelX' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.3790,
longitude: -71.9310,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CartelX</span>"},
URL: "CartelX"
},
'CartSite' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.6070,
longitude: -97.4860,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CartSite</span>"},
URL: "CartSite"
},
'CARTSITE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.6070,
longitude: -97.4860,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CARTSITE</span>"},
URL: "CARTSITE"
},
'CASLEO' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -31.7990,
longitude: -69.3060,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CASLEO</span>"},
URL: "CASLEO"
},
'CCNY' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 40.8210,
longitude: -73.9490,
value: -3.1,
tooltip: {content : "<span style=\"font-weight:bold;\">CCNY</span><br/>Obs: -3.1 %/yr<br/>Mod: -1.8 %/yr"},
URL: "CCNY"
},
'CEILAPBA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -34.5670,
longitude: -58.5000,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CEILAPBA</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "CEILAPBA"
},
'CEILAPRG' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -51.6000,
longitude: -69.3200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CEILAPRG</span>"},
URL: "CEILAPRG"
},
'CEILAPUTN' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -34.6600,
longitude: -58.4690,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CEILAPUTN</span>"},
URL: "CEILAPUTN"
},
'CerroPoyos' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.1080,
longitude: -3.48700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CerroPoyos</span>"},
URL: "CerroPoyos"
},
'ChaoJou' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.5130,
longitude: 120.529,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ChaoJou</span>"},
URL: "ChaoJou"
},
'Chapais' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 49.8220,
longitude: -74.9750,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Chapais</span>"},
URL: "Chapais"
},
'CheboguePoint' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.7470,
longitude: -66.1230,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CheboguePoint</span>"},
URL: "CheboguePoint"
},
'ChenKungUniv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.0000,
longitude: 120.217,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ChenKungUniv</span>"},
URL: "ChenKungUniv"
},
'Chequamegon' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.9330,
longitude: -90.2500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Chequamegon</span>"},
URL: "Chequamegon"
},
'ChiangMaiMetSta' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 18.7710,
longitude: 98.9720,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ChiangMaiMetSta</span>"},
URL: "ChiangMaiMetSta"
},
'ChiangMai' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 18.8130,
longitude: 98.9870,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ChiangMai</span>"},
URL: "ChiangMai"
},
'ChibaUniversity' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.6250,
longitude: 140.104,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ChibaUniversity</span>"},
URL: "ChibaUniversity"
},
'Chilbolton' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 51.1440,
longitude: -1.43700,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Chilbolton</span><br/>Obs: No Trend<br/>Mod: -1.8 %/yr"},
URL: "Chilbolton"
},
'Chulalongkorn' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.7360,
longitude: 100.530,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Chulalongkorn</span>"},
URL: "Chulalongkorn"
},
'Churchill' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 58.7360,
longitude: -93.8180,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Churchill</span>"},
URL: "Churchill"
},
'CityGZ' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.0810,
longitude: 113.158,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CityGZ</span>"},
URL: "CityGZ"
},
'CLUJUBB' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 46.7680,
longitude: 23.5510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CLUJUBB</span>"},
URL: "CLUJUBB"
},
'CoconutIsland' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 21.4330,
longitude: -157.790,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CoconutIsland</span>"},
URL: "CoconutIsland"
},
'Coleambally' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -34.8100,
longitude: 146.064,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Coleambally</span>"},
URL: "Coleambally"
},
'ColumbiaSC' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.0230,
longitude: -81.0360,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ColumbiaSC</span>"},
URL: "ColumbiaSC"
},
'Corcoran' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.1030,
longitude: -119.566,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Corcoran</span>"},
URL: "Corcoran"
},
'CordobaCETT' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: -31.5240,
longitude: -64.4640,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CordobaCETT</span>"},
URL: "CordobaCETT"
},
'Coruna' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.3630,
longitude: -8.42100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Coruna</span>"},
URL: "Coruna"
},
'COVESEAPRISM' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.9000,
longitude: -75.7100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">COVESEAPRISM</span>"},
URL: "COVESEAPRISM"
},
'COVE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.9000,
longitude: -75.7100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">COVE</span>"},
URL: "COVE"
},
'Creteil' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 48.7880,
longitude: 2.44300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Creteil</span>"},
URL: "Creteil"
},
'CrozetIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -46.4350,
longitude: 51.8500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CrozetIsland</span>"},
URL: "CrozetIsland"
},
'CRPSMMalindi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -2.99600,
longitude: 40.1940,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CRPSMMalindi</span>"},
URL: "CRPSMMalindi"
},
'CRYSTALFACE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 25.6500,
longitude: -80.4220,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CRYSTALFACE</span>"},
URL: "CRYSTALFACE"
},
'CUIABAMIRANDA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -15.7290,
longitude: -56.0210,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CUIABAMIRANDA</span>"},
URL: "CUIABAMIRANDA"
},
'CUTTEPAK' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.6750,
longitude: 33.0430,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CUTTEPAK</span>"},
URL: "CUTTEPAK"
},
'Dahkla' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.7170,
longitude: -15.9500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dahkla</span>"},
URL: "Dahkla"
},
'Dakar' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 14.3940,
longitude: -16.9590,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dakar</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Dakar"
},
'Dalanzadgad' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.5770,
longitude: 104.419,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dalanzadgad</span>"},
URL: "Dalanzadgad"
},
'Dalma' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.5020,
longitude: 52.3320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dalma</span>"},
URL: "Dalma"
},
'Darwin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -12.4240,
longitude: 130.892,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Darwin</span>"},
URL: "Darwin"
},
'Davos' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 46.8130,
longitude: 9.84400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Davos</span>"},
URL: "Davos"
},
'Dayton' : {
latitude: 39.7760,
longitude: -84.1100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dayton</span>"},
URL: "Dayton"
},
'Dhabi' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.4810,
longitude: 54.3830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dhabi</span>"},
URL: "Dhabi"
},
'Dhadnah' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 25.5130,
longitude: 56.3250,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dhadnah</span>"},
URL: "Dhadnah"
},
'DhakaUniversity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.7280,
longitude: 90.3980,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DhakaUniversity</span>"},
URL: "DhakaUniversity"
},
'Djougou' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 9.76000,
longitude: 1.59900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Djougou</span>"},
URL: "Djougou"
},
'DMNMaineSoroa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.2170,
longitude: 12.0230,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DMNMaineSoroa</span>"},
URL: "DMNMaineSoroa"
},
'Donetsk' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 48.0210,
longitude: 37.8090,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Donetsk</span>"},
URL: "Donetsk"
},
'DongshaIsland' : {
latitude: 20.6990,
longitude: 116.729,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DongshaIsland</span>"},
URL: "DongshaIsland"
},
'DRAGONABERD' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.5150,
longitude: -76.1650,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONABERD</span>"},
URL: "DRAGONABERD"
},
'DRAGONAldino' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.5630,
longitude: -76.2040,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONAldino</span>"},
URL: "DRAGONAldino"
},
'DRAGONAnmyeon' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.5390,
longitude: 126.330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONAnmyeon</span>"},
URL: "DRAGONAnmyeon"
},
'DRAGONANNEA' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.1650,
longitude: -76.6250,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONANNEA</span>"},
URL: "DRAGONANNEA"
},
'DRAGONARNCC' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.1590,
longitude: -76.7210,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONARNCC</span>"},
URL: "DRAGONARNCC"
},
'DRAGONARNLS' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.0580,
longitude: -76.5130,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONARNLS</span>"},
URL: "DRAGONARNLS"
},
'DRAGONBakersfield' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.3320,
longitude: -119.000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBakersfield</span>"},
URL: "DRAGONBakersfield"
},
'DRAGONBATMR' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.3990,
longitude: -76.4760,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBATMR</span>"},
URL: "DRAGONBATMR"
},
'DRAGONBelAir' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.5000,
longitude: -76.2630,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBelAir</span>"},
URL: "DRAGONBelAir"
},
'DRAGONBeltsville' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.0540,
longitude: -76.8770,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBeltsville</span>"},
URL: "DRAGONBeltsville"
},
'DRAGONBLDND' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.2580,
longitude: -76.5200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBLDND</span>"},
URL: "DRAGONBLDND"
},
'DRAGONBLLRT' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.3890,
longitude: -76.5780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBLLRT</span>"},
URL: "DRAGONBLLRT"
},
'DRAGONBLTCC' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.3620,
longitude: -76.6880,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBLTCC</span>"},
URL: "DRAGONBLTCC"
},
'DRAGONBLTIM' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.2630,
longitude: -76.6510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBLTIM</span>"},
URL: "DRAGONBLTIM"
},
'DRAGONBLTNR' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.2160,
longitude: -76.6190,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBLTNR</span>"},
URL: "DRAGONBLTNR"
},
'DRAGONBokjeong' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.4570,
longitude: 127.131,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBokjeong</span>"},
URL: "DRAGONBokjeong"
},
'DRAGONBOWEM' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.9750,
longitude: -76.7510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBOWEM</span>"},
URL: "DRAGONBOWEM"
},
'DRAGONBTMDL' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.2390,
longitude: -76.4420,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBTMDL</span>"},
URL: "DRAGONBTMDL"
},
'DRAGONCHASE' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.9790,
longitude: -77.0800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONCHASE</span>"},
URL: "DRAGONCHASE"
},
'DRAGONCLLGP' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.9910,
longitude: -76.9090,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONCLLGP</span>"},
URL: "DRAGONCLLGP"
},
'DRAGONClovis' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.8190,
longitude: -119.716,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONClovis</span>"},
URL: "DRAGONClovis"
},
'DRAGONCLRST' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.2050,
longitude: -76.9440,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONCLRST</span>"},
URL: "DRAGONCLRST"
},
'DRAGONCorcoran' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.1020,
longitude: -119.566,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONCorcoran</span>"},
URL: "DRAGONCorcoran"
},
'DRAGONCPSDN' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.1110,
longitude: -76.4630,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONCPSDN</span>"},
URL: "DRAGONCPSDN"
},
'DRAGONCTNVL' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.2760,
longitude: -76.7720,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONCTNVL</span>"},
URL: "DRAGONCTNVL"
},
'DRAGONDrummond' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.7060,
longitude: -119.741,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONDrummond</span>"},
URL: "DRAGONDrummond"
},
'DRAGONEaglePoint' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.3980,
longitude: -76.2700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONEaglePoint</span>"},
URL: "DRAGONEaglePoint"
},
'DRAGONEDCMS' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.9220,
longitude: -76.5600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONEDCMS</span>"},
URL: "DRAGONEDCMS"
},
'DRAGONEdgewood' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.4100,
longitude: -76.2960,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONEdgewood</span>"},
URL: "DRAGONEdgewood"
},
'DRAGONELLCT' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.2660,
longitude: -76.8620,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONELLCT</span>"},
URL: "DRAGONELLCT"
},
'DRAGONEssex' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.3110,
longitude: -76.4740,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONEssex</span>"},
URL: "DRAGONEssex"
},
'DRAGONFairHill' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.7010,
longitude: -75.8600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONFairHill</span>"},
URL: "DRAGONFairHill"
},
'DRAGONFLLST' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.5220,
longitude: -76.4130,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONFLLST</span>"},
URL: "DRAGONFLLST"
},
'DRAGONFukue2' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.6720,
longitude: 128.817,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONFukue2</span>"},
URL: "DRAGONFukue2"
},
'DRAGONFukue3' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.6000,
longitude: 128.745,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONFukue3</span>"},
URL: "DRAGONFukue3"
},
'DRAGONFukue' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.7520,
longitude: 128.682,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONFukue</span>"},
URL: "DRAGONFukue"
},
'DRAGONFukuoka' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.5240,
longitude: 130.475,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONFukuoka</span>"},
URL: "DRAGONFukuoka"
},
'DRAGONGangneungWNU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.7710,
longitude: 128.867,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONGangneungWNU</span>"},
URL: "DRAGONGangneungWNU"
},
'DRAGONGuwol' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.4500,
longitude: 126.724,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONGuwol</span>"},
URL: "DRAGONGuwol"
},
'DRAGONGwangjuGIST' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.2280,
longitude: 126.843,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONGwangjuGIST</span>"},
URL: "DRAGONGwangjuGIST"
},
'DRAGONHanford' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.3160,
longitude: -119.643,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONHanford</span>"},
URL: "DRAGONHanford"
},
'DRAGONHankukUFS' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.3390,
longitude: 127.266,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONHankukUFS</span>"},
URL: "DRAGONHankukUFS"
},
'DRAGONJalanChainF' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 5.40100,
longitude: 100.381,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONJalanChainF</span>"},
URL: "DRAGONJalanChainF"
},
'DRAGONKampungBharu' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 5.34200,
longitude: 100.463,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKampungBharu</span>"},
URL: "DRAGONKampungBharu"
},
'DRAGONKentIsland' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.9790,
longitude: -76.3080,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKentIsland</span>"},
URL: "DRAGONKentIsland"
},
'DRAGONKobe' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.7200,
longitude: 135.291,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKobe</span>"},
URL: "DRAGONKobe"
},
'DRAGONKohriyama' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.3610,
longitude: 140.383,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKohriyama</span>"},
URL: "DRAGONKohriyama"
},
'DRAGONKongjuNU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.4710,
longitude: 127.140,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKongjuNU</span>"},
URL: "DRAGONKongjuNU"
},
'DRAGONKonkukUniv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.5420,
longitude: 127.080,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKonkukUniv</span>"},
URL: "DRAGONKonkukUniv"
},
'DRAGONKoreaUniv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.5850,
longitude: 127.025,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKoreaUniv</span>"},
URL: "DRAGONKoreaUniv"
},
'DRAGONKunsanNU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.9410,
longitude: 126.683,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKunsanNU</span>"},
URL: "DRAGONKunsanNU"
},
'DRAGONKyoto' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.0260,
longitude: 135.781,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKyoto</span>"},
URL: "DRAGONKyoto"
},
'DRAGONKyungilUniv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.0720,
longitude: 128.824,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKyungilUniv</span>"},
URL: "DRAGONKyungilUniv"
},
'DRAGONLAREL' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.0810,
longitude: -76.8550,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONLAREL</span>"},
URL: "DRAGONLAREL"
},
'DRAGONLAUMD' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.1430,
longitude: -76.8590,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONLAUMD</span>"},
URL: "DRAGONLAUMD"
},
'DRAGONMaderaCity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.9530,
longitude: -120.034,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONMaderaCity</span>"},
URL: "DRAGONMaderaCity"
},
'DRAGONMatsue' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.4800,
longitude: 133.010,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONMatsue</span>"},
URL: "DRAGONMatsue"
},
'DRAGONMEWRCentral' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 1.31100,
longitude: 103.836,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONMEWRCentral</span>"},
URL: "DRAGONMEWRCentral"
},
'DRAGONMNKTN' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.5730,
longitude: -76.6520,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONMNKTN</span>"},
URL: "DRAGONMNKTN"
},
'DRAGONMokpoNU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.9130,
longitude: 126.437,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONMokpoNU</span>"},
URL: "DRAGONMokpoNU"
},
'DRAGONMtIkoma' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.6800,
longitude: 135.679,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONMtIkoma</span>"},
URL: "DRAGONMtIkoma"
},
'DRAGONMtRokko' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.7570,
longitude: 135.230,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONMtRokko</span>"},
URL: "DRAGONMtRokko"
},
'DRAGONNara' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.6880,
longitude: 135.828,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONNara</span>"},
URL: "DRAGONNara"
},
'DRAGONNIER' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.5690,
longitude: 126.640,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONNIER</span>"},
URL: "DRAGONNIER"
},
'DRAGONNishiharima' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.0260,
longitude: 134.336,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONNishiharima</span>"},
URL: "DRAGONNishiharima"
},
'DRAGONOLNES' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.1490,
longitude: -77.0680,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONOLNES</span>"},
URL: "DRAGONOLNES"
},
'DRAGONONNGS' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.3880,
longitude: -76.8190,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONONNGS</span>"},
URL: "DRAGONONNGS"
},
'DRAGONOsakaCenter' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.6680,
longitude: 135.531,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONOsakaCenter</span>"},
URL: "DRAGONOsakaCenter"
},
'DRAGONOsakaNorth' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.7740,
longitude: 135.510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONOsakaNorth</span>"},
URL: "DRAGONOsakaNorth"
},
'DRAGONOsakaSouth' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.5440,
longitude: 135.504,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONOsakaSouth</span>"},
URL: "DRAGONOsakaSouth"
},
'DRAGONPadonia' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.4620,
longitude: -76.6320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPadonia</span>"},
URL: "DRAGONPadonia"
},
'DRAGONPandanResrv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 1.31900,
longitude: 103.742,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPandanResrv</span>"},
URL: "DRAGONPandanResrv"
},
'DRAGONParlier' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.5970,
longitude: -119.504,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONParlier</span>"},
URL: "DRAGONParlier"
},
'DRAGONPasadena' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.1120,
longitude: -76.4550,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPasadena</span>"},
URL: "DRAGONPasadena"
},
'DRAGONPATUX' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.8270,
longitude: -76.7090,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPATUX</span>"},
URL: "DRAGONPATUX"
},
'DRAGONPayaTerubong' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 5.37600,
longitude: 100.276,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPayaTerubong</span>"},
URL: "DRAGONPayaTerubong"
},
'DRAGONPermatangDL' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 5.27800,
longitude: 100.271,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPermatangDL</span>"},
URL: "DRAGONPermatangDL"
},
'DRAGONPineyOrchard' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.0610,
longitude: -76.7190,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPineyOrchard</span>"},
URL: "DRAGONPineyOrchard"
},
'DRAGONPondokUpeh' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 5.33300,
longitude: 100.227,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPondokUpeh</span>"},
URL: "DRAGONPondokUpeh"
},
'DRAGONPusanNU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.2350,
longitude: 129.083,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPusanNU</span>"},
URL: "DRAGONPusanNU"
},
'DRAGONPylesville' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.6750,
longitude: -76.4050,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPylesville</span>"},
URL: "DRAGONPylesville"
},
'DRAGONRCKMD' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.0660,
longitude: -77.0960,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONRCKMD</span>"},
URL: "DRAGONRCKMD"
},
'DRAGONSanggye' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.6590,
longitude: 127.068,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONSanggye</span>"},
URL: "DRAGONSanggye"
},
'DRAGONShafter' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.5040,
longitude: -119.272,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONShafter</span>"},
URL: "DRAGONShafter"
},
'DRAGONSinjeong' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.5230,
longitude: 126.859,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONSinjeong</span>"},
URL: "DRAGONSinjeong"
},
'DRAGONSoha' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.4520,
longitude: 126.885,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONSoha</span>"},
URL: "DRAGONSoha"
},
'DRAGONSPBRK' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.0580,
longitude: -77.0060,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONSPBRK</span>"},
URL: "DRAGONSPBRK"
},
'DRAGONStJohnsIs' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 1.21800,
longitude: 103.850,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONStJohnsIs</span>"},
URL: "DRAGONStJohnsIs"
},
'DRAGONTemasekPoly' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 1.34500,
longitude: 103.931,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONTemasekPoly</span>"},
URL: "DRAGONTemasekPoly"
},
'DRAGONTKMPR' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.9950,
longitude: -76.9970,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONTKMPR</span>"},
URL: "DRAGONTKMPR"
},
'DRAGONTranquility' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.6340,
longitude: -120.382,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONTranquility</span>"},
URL: "DRAGONTranquility"
},
'DRAGONTsukuba' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.0510,
longitude: 140.120,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONTsukuba</span>"},
URL: "DRAGONTsukuba"
},
'DRAGONUiTM' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 5.38300,
longitude: 100.416,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONUiTM</span>"},
URL: "DRAGONUiTM"
},
'DRAGONUMRLB' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.8910,
longitude: -76.8140,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONUMRLB</span>"},
URL: "DRAGONUMRLB"
},
'DRAGONWileyFord' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.6100,
longitude: -78.7740,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONWileyFord</span>"},
URL: "DRAGONWileyFord"
},
'DRAGONWorton' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.2850,
longitude: -76.0920,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONWorton</span>"},
URL: "DRAGONWorton"
},
'DRAGONWSTFD' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.3020,
longitude: -76.9460,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONWSTFD</span>"},
URL: "DRAGONWSTFD"
},
'DRAGONYishunITE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 1.43500,
longitude: 103.845,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONYishunITE</span>"},
URL: "DRAGONYishunITE"
},
'DryTortugas' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 24.6280,
longitude: -82.8720,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DryTortugas</span>"},
URL: "DryTortugas"
},
'Dunedin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -45.8640,
longitude: 170.514,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dunedin</span>"},
URL: "Dunedin"
},
'DunhuangLZU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.4920,
longitude: 94.9550,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DunhuangLZU</span>"},
URL: "DunhuangLZU"
},
'Dunkerque' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 51.0350,
longitude: 2.36800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dunkerque</span>"},
URL: "Dunkerque"
},
'Dushanbe' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.5530,
longitude: 68.8580,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dushanbe</span>"},
URL: "Dushanbe"
},
'EastonAirport' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.8070,
longitude: -76.0730,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">EastonAirport</span>"},
URL: "EastonAirport"
},
'Edinburgh' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 55.9240,
longitude: -3.17900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Edinburgh</span>"},
URL: "Edinburgh"
},
'Eforie' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.0750,
longitude: 28.6320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Eforie</span>"},
URL: "Eforie"
},
'Egbert' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 44.2260,
longitude: -79.7500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Egbert</span>"},
URL: "Egbert"
},
'EgbertX' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 44.2260,
longitude: -79.7500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">EgbertX</span>"},
URL: "EgbertX"
},
'Eilat' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 29.5030,
longitude: 34.9170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Eilat</span>"},
URL: "Eilat"
},
'EIMSindos' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.6900,
longitude: 22.8000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">EIMSindos</span>"},
URL: "EIMSindos"
},
'Elandsfontein' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -26.2450,
longitude: 29.4180,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Elandsfontein</span>"},
URL: "Elandsfontein"
},
'ElArenosillo' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.1050,
longitude: -6.73300,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ElArenosillo</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "ElArenosillo"
},
'ElNidoAirport' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 11.2050,
longitude: 119.413,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ElNidoAirport</span>"},
URL: "ElNidoAirport"
},
'ElSegundo' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.9130,
longitude: -118.382,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ElSegundo</span>"},
URL: "ElSegundo"
},
'EPANCU' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 24.9680,
longitude: 121.185,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">EPANCU</span>"},
URL: "EPANCU"
},
'Epanomi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.3750,
longitude: 22.9780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Epanomi</span>"},
URL: "Epanomi"
},
'Ersa' : {
latitude: 43.0040,
longitude: 9.35900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ersa</span>"},
URL: "Ersa"
},
'ETNA' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.6140,
longitude: 15.0190,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ETNA</span>"},
URL: "ETNA"
},
'EVK2CNR' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 27.9590,
longitude: 86.8130,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">EVK2CNR</span>"},
URL: "EVK2CNR"
},
'Evora' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 38.5680,
longitude: -7.91200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Evora</span>"},
URL: "Evora"
},
'FarmingtonRSVP' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.7970,
longitude: -108.480,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FarmingtonRSVP</span>"},
URL: "FarmingtonRSVP"
},
'Fontainebleau' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 48.4070,
longitude: 2.68000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Fontainebleau</span>"},
URL: "Fontainebleau"
},
'FORTHCRETE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.3330,
longitude: 25.2820,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FORTHCRETE</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "FORTHCRETE"
},
'FortMcMurray' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 56.7520,
longitude: -111.476,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FortMcMurray</span>"},
URL: "FortMcMurray"
},
'FrenchmanFlat' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.8090,
longitude: -115.935,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FrenchmanFlat</span>"},
URL: "FrenchmanFlat"
},
'Fresno2' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.7850,
longitude: -119.773,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Fresno2</span>"},
URL: "Fresno2"
},
'Fresno' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.7820,
longitude: -119.773,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Fresno</span>"},
URL: "Fresno"
},
'FresnoX' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.7820,
longitude: -119.773,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FresnoX</span>"},
URL: "FresnoX"
},
'Frioul' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 43.2660,
longitude: 5.29300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Frioul</span>"},
URL: "Frioul"
},
'Fukue' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.7520,
longitude: 128.682,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Fukue</span>"},
URL: "Fukue"
},
'Fukuoka' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.5240,
longitude: 130.475,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Fukuoka</span>"},
URL: "Fukuoka"
},
'FZJJOYCE' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 50.9080,
longitude: 6.41200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FZJJOYCE</span>"},
URL: "FZJJOYCE"
},
'GageochoStation' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.9420,
longitude: 124.593,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GageochoStation</span>"},
URL: "GageochoStation"
},
'GainesvilleAirport' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 29.6960,
longitude: -82.2610,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GainesvilleAirport</span>"},
URL: "GainesvilleAirport"
},
'GandhiCollege' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 25.8710,
longitude: 84.1280,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GandhiCollege</span>"},
URL: "GandhiCollege"
},
'GangneungWNU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.7710,
longitude: 128.867,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GangneungWNU</span>"},
URL: "GangneungWNU"
},
'GeorgiaTech' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 33.7800,
longitude: -84.4000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GeorgiaTech</span>"},
URL: "GeorgiaTech"
},
'GISS' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 40.7980,
longitude: -73.9600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GISS</span>"},
URL: "GISS"
},
'Gloria' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 44.6000,
longitude: 29.3600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Gloria</span>"},
URL: "Gloria"
},
'Goldstone' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.2330,
longitude: -116.792,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Goldstone</span>"},
URL: "Goldstone"
},
'Gorongosa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -18.9780,
longitude: 34.3510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Gorongosa</span>"},
URL: "Gorongosa"
},
'GosanSNU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.2920,
longitude: 126.162,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GosanSNU</span>"},
URL: "GosanSNU"
},
'Gotland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 57.9170,
longitude: 18.9500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Gotland</span>"},
URL: "Gotland"
},
'GOTSeaprism' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 9.28600,
longitude: 101.412,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GOTSeaprism</span>"},
URL: "GOTSeaprism"
},
'Graciosa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.0910,
longitude: -28.0300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Graciosa</span>"},
URL: "Graciosa"
},
'Granada' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.1640,
longitude: -3.60500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Granada</span>"},
URL: "Granada"
},
'GrandForks' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 47.9120,
longitude: -97.3250,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GrandForks</span>"},
URL: "GrandForks"
},
'GSFC' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.9920,
longitude: -76.8400,
value: -3.7,
tooltip: {content : "<span style=\"font-weight:bold;\">GSFC</span><br/>Obs: -3.7 %/yr<br/>Mod: -2.6 %/yr"},
URL: "GSFC"
},
'Guadeloup' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 16.3330,
longitude: -61.5000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Guadeloup</span>"},
URL: "Guadeloup"
},
'GualPahari' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.4260,
longitude: 77.1500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GualPahari</span>"},
URL: "GualPahari"
},
'Guam' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 13.4310,
longitude: 144.801,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Guam</span>"},
URL: "Guam"
},
'GustavDalenTower' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 58.5940,
longitude: 17.4670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GustavDalenTower</span>"},
URL: "GustavDalenTower"
},
'GwangjuGIST' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.2280,
longitude: 126.843,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GwangjuGIST</span>"},
URL: "GwangjuGIST"
},
'Halifax' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.6380,
longitude: -63.5940,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Halifax</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Halifax"
},
'Hamburg' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 53.5680,
longitude: 9.97300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Hamburg</span>"},
URL: "Hamburg"
},
'Hamim' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 22.9670,
longitude: 54.3000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Hamim</span>"},
URL: "Hamim"
},
'HangzhouZFU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 30.2570,
longitude: 119.727,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HangzhouZFU</span>"},
URL: "HangzhouZFU"
},
'HankukUFS' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.3390,
longitude: 127.266,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HankukUFS</span>"},
URL: "HankukUFS"
},
'HarvardForest' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 42.5320,
longitude: -72.1880,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HarvardForest</span>"},
URL: "HarvardForest"
},
'Hefei' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 31.9050,
longitude: 117.162,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Hefei</span>"},
URL: "Hefei"
},
'Helgoland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 54.1780,
longitude: 7.88700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Helgoland</span>"},
URL: "Helgoland"
},
'HelsinkiLighthouse' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 59.9490,
longitude: 24.9260,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HelsinkiLighthouse</span>"},
URL: "HelsinkiLighthouse"
},
'Helsinki' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 60.2040,
longitude: 24.9610,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Helsinki</span>"},
URL: "Helsinki"
},
'HentiesBay' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: -22.0950,
longitude: 14.2600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HentiesBay</span>"},
URL: "HentiesBay"
},
'Hermosillo' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 29.0750,
longitude: -110.960,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Hermosillo</span>"},
URL: "Hermosillo"
},
'Hetauda' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 27.4280,
longitude: 85.0310,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Hetauda</span>"},
URL: "Hetauda"
},
'HJAndrews' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 44.2390,
longitude: -122.224,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HJAndrews</span>"},
URL: "HJAndrews"
},
'HongKongHokTsui' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 22.2100,
longitude: 114.258,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HongKongHokTsui</span>"},
URL: "HongKongHokTsui"
},
'HongKongPolyU' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 22.3030,
longitude: 114.180,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HongKongPolyU</span>"},
URL: "HongKongPolyU"
},
'HongKongSheung' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 22.4830,
longitude: 114.117,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HongKongSheung</span>"},
URL: "HongKongSheung"
},
'Hornsund' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 77.0010,
longitude: 15.5600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Hornsund</span>"},
URL: "Hornsund"
},
'Howland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.2000,
longitude: -68.7330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Howland</span>"},
URL: "Howland"
},
'HuaHin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 12.6340,
longitude: 99.9510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HuaHin</span>"},
URL: "HuaHin"
},
'Huelva' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.0160,
longitude: -6.56900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Huelva</span>"},
URL: "Huelva"
},
'Hyytiala' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 61.8460,
longitude: 24.2960,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Hyytiala</span>"},
URL: "Hyytiala"
},
'IASBS' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.7050,
longitude: 48.5070,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IASBS</span>"},
URL: "IASBS"
},
'IasiLOASL' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 47.1930,
longitude: 27.5560,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IasiLOASL</span>"},
URL: "IasiLOASL"
},
'ICIPEMbita' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -0.417000,
longitude: 34.2000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ICIPEMbita</span>"},
URL: "ICIPEMbita"
},
'IERCinzana' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.2780,
longitude: -5.93400,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IERCinzana</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "IERCinzana"
},
'IHOPHomestead' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.5580,
longitude: -100.606,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IHOPHomestead</span>"},
URL: "IHOPHomestead"
},
'IITKGPEXTKolkata' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 22.5740,
longitude: 88.4180,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IITKGPEXTKolkata</span>"},
URL: "IITKGPEXTKolkata"
},
'Ilorin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 8.32000,
longitude: 4.34000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ilorin</span>"},
URL: "Ilorin"
},
'IMAAPotenza' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 40.6000,
longitude: 15.7200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IMAAPotenza</span>"},
URL: "IMAAPotenza"
},
'IMCOristano' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 39.9100,
longitude: 8.50000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IMCOristano</span>"},
URL: "IMCOristano"
},
'IMSMETUERDEMLI' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.5650,
longitude: 34.2550,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IMSMETUERDEMLI</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "IMSMETUERDEMLI"
},
'Inhaca' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -26.0410,
longitude: 32.9050,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Inhaca</span>"},
URL: "Inhaca"
},
'Iqaluit' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 63.7480,
longitude: -68.5430,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Iqaluit</span>"},
URL: "Iqaluit"
},
'Irkutsk' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.8000,
longitude: 103.087,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Irkutsk</span>"},
URL: "Irkutsk"
},
'ISDGMCNR' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 45.4370,
longitude: 12.3320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ISDGMCNR</span>"},
URL: "ISDGMCNR"
},
'Ispra' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 45.8030,
longitude: 8.62700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ispra</span>"},
URL: "Ispra"
},
'IssykKul' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 42.6230,
longitude: 76.9830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IssykKul</span>"},
URL: "IssykKul"
},
'Ittoqqortoormiit' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 70.4850,
longitude: -21.9510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ittoqqortoormiit</span>"},
URL: "Ittoqqortoormiit"
},
'Izana' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.3090,
longitude: -16.4990,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Izana</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Izana"
},
'JabalHafeet' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.0580,
longitude: 55.7760,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">JabalHafeet</span>"},
URL: "JabalHafeet"
},
'Jabiru' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -12.6610,
longitude: 132.893,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Jabiru</span>"},
URL: "Jabiru"
},
'Jaipur' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 26.9060,
longitude: 75.8060,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Jaipur</span>"},
URL: "Jaipur"
},
'Jambi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -1.63200,
longitude: 103.642,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Jambi</span>"},
URL: "Jambi"
},
'JaruReserve' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -10.0830,
longitude: -61.9330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">JaruReserve</span>"},
URL: "JaruReserve"
},
'Jingtai' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.3330,
longitude: 104.100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Jingtai</span>"},
URL: "Jingtai"
},
'JiParanaSE' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -10.9340,
longitude: -61.8520,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">JiParanaSE</span>"},
URL: "JiParanaSE"
},
'JiParanaUNIR' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -10.8830,
longitude: -61.9670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">JiParanaUNIR</span>"},
URL: "JiParanaUNIR"
},
'Jomsom' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.7780,
longitude: 83.7140,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Jomsom</span>"},
URL: "Jomsom"
},
'Kaiping' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 22.3150,
longitude: 112.539,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kaiping</span>"},
URL: "Kaiping"
},
'Kandahar' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 31.5090,
longitude: 65.8480,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kandahar</span>"},
URL: "Kandahar"
},
'Kangerlussuaq' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 66.9960,
longitude: -50.6210,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kangerlussuaq</span>"},
URL: "Kangerlussuaq"
},
'Kanpur' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 26.5130,
longitude: 80.2320,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kanpur</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Kanpur"
},
'KanzelhoheObs' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 46.6780,
longitude: 13.9070,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KanzelhoheObs</span>"},
URL: "KanzelhoheObs"
},
'Karachi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.8700,
longitude: 67.0300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Karachi</span>"},
URL: "Karachi"
},
'Karlsruhe' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 49.0930,
longitude: 8.42800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Karlsruhe</span>"},
URL: "Karlsruhe"
},
'KathmanduBode' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 27.6800,
longitude: 85.3900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KathmanduBode</span>"},
URL: "KathmanduBode"
},
'KathmanduUniv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 27.6010,
longitude: 85.5380,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KathmanduUniv</span>"},
URL: "KathmanduUniv"
},
'KAUSTCampus' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 22.3050,
longitude: 39.1030,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KAUSTCampus</span>"},
URL: "KAUSTCampus"
},
'KelloggLTER' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 42.4080,
longitude: -85.3720,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KelloggLTER</span>"},
URL: "KelloggLTER"
},
'Kelowna' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 49.9550,
longitude: -119.373,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kelowna</span>"},
URL: "Kelowna"
},
'KelownaUAS' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 49.9410,
longitude: -119.400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KelownaUAS</span>"},
URL: "KelownaUAS"
},
'KeyBiscayne' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 25.7320,
longitude: -80.1630,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KeyBiscayne</span>"},
URL: "KeyBiscayne"
},
'Kibale' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 0.560000,
longitude: 30.3580,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kibale</span>"},
URL: "Kibale"
},
'KirtlandAFB' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.9510,
longitude: -106.507,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KirtlandAFB</span>"},
URL: "KirtlandAFB"
},
'Kobe' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.7200,
longitude: 135.291,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kobe</span>"},
URL: "Kobe"
},
'KONZAEDC' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.1020,
longitude: -96.6100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KONZAEDC</span>"},
URL: "KONZAEDC"
},
'KoreaUniversity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.5850,
longitude: 127.025,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KoreaUniversity</span>"},
URL: "KoreaUniversity"
},
'Krasnoyarsk' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 55.9830,
longitude: 92.7670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Krasnoyarsk</span>"},
URL: "Krasnoyarsk"
},
'Kuching' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 1.49100,
longitude: 110.349,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kuching</span>"},
URL: "Kuching"
},
'Kuopio' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 62.8920,
longitude: 27.6340,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kuopio</span>"},
URL: "Kuopio"
},
'Kuujjuarapik' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 55.3000,
longitude: -77.8000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kuujjuarapik</span>"},
URL: "Kuujjuarapik"
},
'KuwaitAirport' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 29.2420,
longitude: 47.9720,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KuwaitAirport</span>"},
URL: "KuwaitAirport"
},
'KuwaitUniversity' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 29.3250,
longitude: 47.9710,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KuwaitUniversity</span>"},
URL: "KuwaitUniversity"
},
'KyivAO' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 50.4520,
longitude: 30.4980,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KyivAO</span>"},
URL: "KyivAO"
},
'Kyiv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 50.3640,
longitude: 30.4970,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kyiv</span>"},
URL: "Kyiv"
},
'KyungilUniversity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.0720,
longitude: 128.824,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KyungilUniversity</span>"},
URL: "KyungilUniversity"
},
'LaCrau' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 43.5770,
longitude: 4.81900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LaCrau</span>"},
URL: "LaCrau"
},
'Laegeren' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 47.4800,
longitude: 8.35100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Laegeren</span>"},
URL: "Laegeren"
},
'Lahore' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 31.5420,
longitude: 74.3250,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lahore</span>"},
URL: "Lahore"
},
'LaJolla' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.8700,
longitude: -117.250,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LaJolla</span>"},
URL: "LaJolla"
},
'LakeArgyle' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -16.1080,
longitude: 128.749,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LakeArgyle</span>"},
URL: "LakeArgyle"
},
'LakeLefroy' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -31.2550,
longitude: 121.705,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LakeLefroy</span>"},
URL: "LakeLefroy"
},
'LaLaguna' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.4820,
longitude: -16.3210,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LaLaguna</span>"},
URL: "LaLaguna"
},
'Lampedusa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.5170,
longitude: 12.6320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lampedusa</span>"},
URL: "Lampedusa"
},
'Lanai' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 20.7350,
longitude: -156.922,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lanai</span>"},
URL: "Lanai"
},
'Langtang' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.0120,
longitude: 85.4930,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Langtang</span>"},
URL: "Langtang"
},
'Lannion' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 48.7310,
longitude: -3.46200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lannion</span>"},
URL: "Lannion"
},
'LanzhouCity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.0480,
longitude: 103.853,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LanzhouCity</span>"},
URL: "LanzhouCity"
},
'LaParguera' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 17.9700,
longitude: -67.0450,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LaParguera</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "LaParguera"
},
'LaPaz' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -16.5390,
longitude: -68.0660,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LaPaz</span>"},
URL: "LaPaz"
},
'LecceUniversity' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 40.3350,
longitude: 18.1110,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LecceUniversity</span>"},
URL: "LecceUniversity"
},
'LeFauga' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 43.3840,
longitude: 1.28500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LeFauga</span>"},
URL: "LeFauga"
},
'Leicester' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 52.6190,
longitude: -1.12200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Leicester</span>"},
URL: "Leicester"
},
'Leipzig' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 51.3520,
longitude: 12.4350,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Leipzig</span>"},
URL: "Leipzig"
},
'Liangning' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 41.5120,
longitude: 122.701,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Liangning</span>"},
URL: "Liangning"
},
'Lille' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 50.6120,
longitude: 3.14200,
value: -2.2,
tooltip: {content : "<span style=\"font-weight:bold;\">Lille</span><br/>Obs: -2.2 %/yr<br/>Mod: -1.6 %/yr"},
URL: "Lille"
},
'LISCO' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 40.9550,
longitude: -73.3420,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LISCO</span>"},
URL: "LISCO"
},
'LondonUCLUAO' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.5240,
longitude: -0.131000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LondonUCLUAO</span>"},
URL: "LondonUCLUAO"
},
'Longyearbyen' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 78.2230,
longitude: 15.6490,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Longyearbyen</span>"},
URL: "Longyearbyen"
},
'LosAlamos' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.8740,
longitude: -106.326,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LosAlamos</span>"},
URL: "LosAlamos"
},
'LSU' : {
latitude: 30.4070,
longitude: -91.1840,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LSU</span>"},
URL: "LSU"
},
'LuangNamtha' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 20.9310,
longitude: 101.416,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LuangNamtha</span>"},
URL: "LuangNamtha"
},
'Lucinda' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: -18.5200,
longitude: 146.386,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lucinda</span>"},
URL: "Lucinda"
},
'Lugansk' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 48.5700,
longitude: 39.3650,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lugansk</span>"},
URL: "Lugansk"
},
'Lulin' : {
latitude: 23.4690,
longitude: 120.874,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lulin</span>"},
URL: "Lulin"
},
'LWSCAN' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.9600,
longitude: -97.9790,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LWSCAN</span>"},
URL: "LWSCAN"
},
'MAARCO' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.7000,
longitude: 54.6590,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MAARCO</span>"},
URL: "MAARCO"
},
'MaceHead' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 53.3300,
longitude: -9.90000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MaceHead</span>"},
URL: "MaceHead"
},
'Madrid' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 40.4520,
longitude: -3.72400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Madrid</span>"},
URL: "Madrid"
},
'Mainz' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 49.9990,
longitude: 8.30000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Mainz</span>"},
URL: "Mainz"
},
'Malaga' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.7150,
longitude: -4.47800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Malaga</span>"},
URL: "Malaga"
},
'MALE' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 4.19200,
longitude: 73.5290,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MALE</span>"},
URL: "MALE"
},
'ManausEMBRAPA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -2.89100,
longitude: -59.9700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ManausEMBRAPA</span>"},
URL: "ManausEMBRAPA"
},
'Manaus' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -2.59900,
longitude: -60.0390,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Manaus</span>"},
URL: "Manaus"
},
'ManilaObservatory' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 14.6350,
longitude: 121.078,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ManilaObservatory</span>"},
URL: "ManilaObservatory"
},
'Manus' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: -2.06000,
longitude: 147.425,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Manus</span>"},
URL: "Manus"
},
'MarbellaSanPedro' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.4860,
longitude: -4.99300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MarbellaSanPedro</span>"},
URL: "MarbellaSanPedro"
},
'Maricopa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.0690,
longitude: -111.972,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Maricopa</span>"},
URL: "Maricopa"
},
'MasdarInstitute' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.4420,
longitude: 54.6170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MasdarInstitute</span>"},
URL: "MasdarInstitute"
},
'MaunaLoa' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 19.5390,
longitude: -155.578,
value: 2.9,
tooltip: {content : "<span style=\"font-weight:bold;\">MaunaLoa</span><br/>Obs: 2.9 %/yr<br/>Mod: 1.3 %/yr"},
URL: "MaunaLoa"
},
'McClellanAFB' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.6680,
longitude: -121.399,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">McClellanAFB</span>"},
URL: "McClellanAFB"
},
'MCOHanimaadhoo' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 6.77600,
longitude: 73.1830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MCOHanimaadhoo</span>"},
URL: "MCOHanimaadhoo"
},
'MDScienceCenter' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.2830,
longitude: -76.6170,
value: -3.5,
tooltip: {content : "<span style=\"font-weight:bold;\">MDScienceCenter</span><br/>Obs: -3.5 %/yr<br/>Mod: -2.6 %/yr"},
URL: "MDScienceCenter"
},
'Medellin' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 6.26100,
longitude: -75.5780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Medellin</span>"},
URL: "Medellin"
},
'Merredin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -31.4930,
longitude: 118.226,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Merredin</span>"},
URL: "Merredin"
},
'Messina' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 38.1970,
longitude: 15.5670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Messina</span>"},
URL: "Messina"
},
'MexicoCity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 19.3340,
longitude: -99.1820,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MexicoCity</span>"},
URL: "MexicoCity"
},
'Mezaira' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 23.1450,
longitude: 53.7790,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Mezaira</span>"},
URL: "Mezaira"
},
'MidwayIsland' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 28.2100,
longitude: -177.378,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MidwayIsland</span>"},
URL: "MidwayIsland"
},
'Milyering' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -22.0290,
longitude: 113.923,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Milyering</span>"},
URL: "Milyering"
},
'Minqin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.6070,
longitude: 102.959,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Minqin</span>"},
URL: "Minqin"
},
'Minsk' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 53.9200,
longitude: 27.6010,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Minsk</span>"},
URL: "Minsk"
},
'MISRJPL' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.1990,
longitude: -118.174,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MISRJPL</span>"},
URL: "MISRJPL"
},
'Missoula' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 46.9170,
longitude: -114.083,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Missoula</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Missoula"
},
'Modena' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 44.6320,
longitude: 10.9450,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Modena</span>"},
URL: "Modena"
},
'Moldova' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 47.0000,
longitude: 28.8160,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Moldova</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Moldova"
},
'Mongu' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -15.2540,
longitude: 23.1510,
value: -2.5,
tooltip: {content : "<span style=\"font-weight:bold;\">Mongu</span><br/>Obs: -2.5 %/yr<br/>Mod: No Trend"},
URL: "Mongu"
},
'Monterey' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.5930,
longitude: -121.855,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Monterey</span>"},
URL: "Monterey"
},
'MontesoroBastia' : {
latitude: 42.6720,
longitude: 9.43500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MontesoroBastia</span>"},
URL: "MontesoroBastia"
},
'Montsec' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 42.0510,
longitude: 0.730000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Montsec</span>"},
URL: "Montsec"
},
'MoscowMSUMO' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 55.7000,
longitude: 37.5100,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MoscowMSUMO</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "MoscowMSUMO"
},
'MossLanding' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.7930,
longitude: -121.788,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MossLanding</span>"},
URL: "MossLanding"
},
'MountChacaltaya' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -16.3500,
longitude: -68.1320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MountChacaltaya</span>"},
URL: "MountChacaltaya"
},
'MountGibbes' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 35.7830,
longitude: -82.2930,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MountGibbes</span>"},
URL: "MountGibbes"
},
'Mukdahan' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 16.6070,
longitude: 104.676,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Mukdahan</span>"},
URL: "Mukdahan"
},
'MunichMaisach' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 48.2090,
longitude: 11.2580,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MunichMaisach</span>"},
URL: "MunichMaisach"
},
'MunichUniversity' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 48.1480,
longitude: 11.5730,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MunichUniversity</span>"},
URL: "MunichUniversity"
},
'Murcia' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.0010,
longitude: -1.17100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Murcia</span>"},
URL: "Murcia"
},
'Muscat' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 23.6060,
longitude: 58.4360,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Muscat</span>"},
URL: "Muscat"
},
'Mussafa' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.3720,
longitude: 54.4670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Mussafa</span>"},
URL: "Mussafa"
},
'MuztaghAta' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.4080,
longitude: 75.0390,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MuztaghAta</span>"},
URL: "MuztaghAta"
},
'MVCO' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 41.3000,
longitude: -70.5500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MVCO</span>"},
URL: "MVCO"
},
'Nainital' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 29.3590,
longitude: 79.4580,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Nainital</span>"},
URL: "Nainital"
},
'Nairobi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -1.33900,
longitude: 36.8650,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Nairobi</span>"},
URL: "Nairobi"
},
'NAMCO' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 30.7730,
longitude: 90.9620,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NAMCO</span>"},
URL: "NAMCO"
},
'Nara' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.6880,
longitude: 135.828,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Nara</span>"},
URL: "Nara"
},
'NASAAmes' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.4200,
longitude: -122.057,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NASAAmes</span>"},
URL: "NASAAmes"
},
'NASALaRC' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.1050,
longitude: -76.3790,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NASALaRC</span>"},
URL: "NASALaRC"
},
'Nauru' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -0.521000,
longitude: 166.916,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Nauru</span><br/>Obs: No Trend<br/>Mod: 3.1 %/yr"},
URL: "Nauru"
},
'NCUTaiwan' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 24.9670,
longitude: 121.192,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NCUTaiwan</span>"},
URL: "NCUTaiwan"
},
'NDMarbelUniv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 6.49600,
longitude: 124.843,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NDMarbelUniv</span>"},
URL: "NDMarbelUniv"
},
'NEONBoulder' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.0080,
longitude: -105.268,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONBoulder</span>"},
URL: "NEONBoulder"
},
'NEONCVALLA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.1610,
longitude: -105.167,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONCVALLA</span>"},
URL: "NEONCVALLA"
},
'NEONGrandJunction' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.1270,
longitude: -108.535,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONGrandJunction</span>"},
URL: "NEONGrandJunction"
},
'NEONHarvardForest' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 42.5330,
longitude: -72.1900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONHarvardForest</span>"},
URL: "NEONHarvardForest"
},
'NEONHighParkFire' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.6240,
longitude: -105.336,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONHighParkFire</span>"},
URL: "NEONHighParkFire"
},
'NEONIvanpah' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.5510,
longitude: -115.382,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONIvanpah</span>"},
URL: "NEONIvanpah"
},
'NesZiona' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 31.9220,
longitude: 34.7890,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NesZiona</span>"},
URL: "NesZiona"
},
'NewDelhi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.6300,
longitude: 77.1750,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NewDelhi</span>"},
URL: "NewDelhi"
},
'NGHIADO' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 21.0480,
longitude: 105.800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NGHIADO</span>"},
URL: "NGHIADO"
},
'NhaTrang' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 12.2050,
longitude: 109.206,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NhaTrang</span>"},
URL: "NhaTrang"
},
'Niamey' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.4810,
longitude: 2.17200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Niamey</span>"},
URL: "Niamey"
},
'NicelliAirport' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 45.4260,
longitude: 12.3820,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NicelliAirport</span>"},
URL: "NicelliAirport"
},
'NorfolkStateUniv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.8480,
longitude: -76.2590,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NorfolkStateUniv</span>"},
URL: "NorfolkStateUniv"
},
'Noto' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.3340,
longitude: 137.137,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Noto</span>"},
URL: "Noto"
},
'NUIST' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.2060,
longitude: 118.717,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NUIST</span>"},
URL: "NUIST"
},
'NyAlesund' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 78.9290,
longitude: 11.8610,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NyAlesund</span>"},
URL: "NyAlesund"
},
'OBERNAI' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 48.4430,
longitude: 7.54300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OBERNAI</span>"},
URL: "OBERNAI"
},
'OHPOBSERVATOIRE' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 43.9350,
longitude: 5.71000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OHPOBSERVATOIRE</span>"},
URL: "OHPOBSERVATOIRE"
},
'OKStUniv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.0460,
longitude: -97.9170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OKStUniv</span>"},
URL: "OKStUniv"
},
'Omkoi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 17.7980,
longitude: 98.4320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Omkoi</span>"},
URL: "Omkoi"
},
'Oostende' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.2250,
longitude: 2.92500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Oostende</span>"},
URL: "Oostende"
},
'OPAL' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 79.9900,
longitude: -85.9390,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OPAL</span>"},
URL: "OPAL"
},
'OrdwaySwisher' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 29.6980,
longitude: -81.9880,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OrdwaySwisher</span>"},
URL: "OrdwaySwisher"
},
'OsakaNorth' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.7740,
longitude: 135.510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OsakaNorth</span>"},
URL: "OsakaNorth"
},
'Osaka' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.6510,
longitude: 135.591,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Osaka</span>"},
URL: "Osaka"
},
'Ouagadougou' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 12.2000,
longitude: -1.40000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ouagadougou</span>"},
URL: "Ouagadougou"
},
'Ouarzazate' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 30.9280,
longitude: -6.91300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ouarzazate</span>"},
URL: "Ouarzazate"
},
'Oujda' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.6530,
longitude: -1.89900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Oujda</span>"},
URL: "Oujda"
},
'Oukaimeden' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 31.2140,
longitude: -7.88100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Oukaimeden</span>"},
URL: "Oukaimeden"
},
'Palaiseau' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 48.7000,
longitude: 2.20800,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Palaiseau</span><br/>Obs: No Trend<br/>Mod: -1.8 %/yr"},
URL: "Palaiseau"
},
'Palangkaraya' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -2.22800,
longitude: 113.946,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Palangkaraya</span>"},
URL: "Palangkaraya"
},
'Palencia' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 41.9890,
longitude: -4.51600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Palencia</span>"},
URL: "Palencia"
},
'Palgrunden' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 58.7550,
longitude: 13.1520,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Palgrunden</span>"},
URL: "Palgrunden"
},
'PalmadeMallorca' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.5530,
longitude: 2.62500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PalmadeMallorca</span>"},
URL: "PalmadeMallorca"
},
'PanamaBCI' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 9.16700,
longitude: -79.8500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PanamaBCI</span>"},
URL: "PanamaBCI"
},
'Pantnagar' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 29.0460,
longitude: 79.5210,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Pantnagar</span>"},
URL: "Pantnagar"
},
'Paposo' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -25.0070,
longitude: -70.4500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Paposo</span>"},
URL: "Paposo"
},
'Paris' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 48.8670,
longitude: 2.33300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Paris</span>"},
URL: "Paris"
},
'PEARL' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 80.0540,
longitude: -86.4170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PEARL</span>"},
URL: "PEARL"
},
'Perth' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -32.0080,
longitude: 115.894,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Perth</span>"},
URL: "Perth"
},
'PetrolinaSONDA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -9.38300,
longitude: -40.5000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PetrolinaSONDA</span>"},
URL: "PetrolinaSONDA"
},
'PickleLake' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.4490,
longitude: -90.2180,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PickleLake</span>"},
URL: "PickleLake"
},
'Pimai' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 15.1820,
longitude: 102.564,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Pimai</span>"},
URL: "Pimai"
},
'Pitres' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.9330,
longitude: -3.22200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Pitres</span>"},
URL: "Pitres"
},
'PKUPEK' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.5930,
longitude: 116.184,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PKUPEK</span>"},
URL: "PKUPEK"
},
'Pokhara' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.1510,
longitude: 83.9710,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Pokhara</span>"},
URL: "Pokhara"
},
'Pontianak' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 0.0750000,
longitude: 109.191,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Pontianak</span>"},
URL: "Pontianak"
},
'Porquerolles' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 43.0010,
longitude: 6.16100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Porquerolles</span>"},
URL: "Porquerolles"
},
'PortoVelho' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -8.77000,
longitude: -63.9500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PortoVelho</span>"},
URL: "PortoVelho"
},
'PortoVelhoUNIR' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -8.83700,
longitude: -63.9400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PortoVelhoUNIR</span>"},
URL: "PortoVelhoUNIR"
},
'Praia' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 14.9470,
longitude: -23.4840,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Praia</span>"},
URL: "Praia"
},
'PretoriaCSIRDPSS' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -25.7570,
longitude: 28.2800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PretoriaCSIRDPSS</span>"},
URL: "PretoriaCSIRDPSS"
},
'ProspectHill' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.3700,
longitude: -64.6960,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ProspectHill</span>"},
URL: "ProspectHill"
},
'Pune' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 18.5370,
longitude: 73.8050,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Pune</span>"},
URL: "Pune"
},
'PusanNU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.2350,
longitude: 129.083,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PusanNU</span>"},
URL: "PusanNU"
},
'Puspiptek' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -6.35600,
longitude: 106.664,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Puspiptek</span>"},
URL: "Puspiptek"
},
'QOMSCAS' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.3650,
longitude: 86.9480,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">QOMSCAS</span>"},
URL: "QOMSCAS"
},
'Quarzazate' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 30.9390,
longitude: -6.90900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Quarzazate</span>"},
URL: "Quarzazate"
},
'RaggedPoint' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.1650,
longitude: -59.4320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RaggedPoint</span>"},
URL: "RaggedPoint"
},
'RailroadValley' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 38.5040,
longitude: -115.962,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RailroadValley</span><br/>Obs: No Trend<br/>Mod: -0.9 %/yr"},
URL: "RailroadValley"
},
'RasElAin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 31.6700,
longitude: -7.59900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RasElAin</span>"},
URL: "RasElAin"
},
'RedMountainPass' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.9080,
longitude: -107.725,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RedMountainPass</span>"},
URL: "RedMountainPass"
},
'RedRiverDelta' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 20.7290,
longitude: 106.128,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RedRiverDelta</span>"},
URL: "RedRiverDelta"
},
'ResoluteBay' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 74.7330,
longitude: -94.9000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ResoluteBay</span>"},
URL: "ResoluteBay"
},
'REUNIONSTDENIS' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -20.8830,
longitude: 55.4830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">REUNIONSTDENIS</span>"},
URL: "REUNIONSTDENIS"
},
'Richland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 46.3400,
longitude: -119.280,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Richland</span>"},
URL: "Richland"
},
'Rimrock' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 46.4870,
longitude: -116.992,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Rimrock</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Rimrock"
},
'RioBranco' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -9.95700,
longitude: -67.8690,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RioBranco</span>"},
URL: "RioBranco"
},
'RiodeJaneiroUFRJ' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -22.8570,
longitude: -43.2340,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RiodeJaneiroUFRJ</span>"},
URL: "RiodeJaneiroUFRJ"
},
'RioPiedras' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 18.4020,
longitude: -66.0510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RioPiedras</span>"},
URL: "RioPiedras"
},
'RogersDryLake' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 34.9260,
longitude: -117.885,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RogersDryLake</span>"},
URL: "RogersDryLake"
},
'RomeTorVergata' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 41.8400,
longitude: 12.6470,
value: -2.8,
tooltip: {content : "<span style=\"font-weight:bold;\">RomeTorVergata</span><br/>Obs: -2.8 %/yr<br/>Mod: -1.7 %/yr"},
URL: "RomeTorVergata"
},
'Rossfeld' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 48.3350,
longitude: 7.62500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Rossfeld</span>"},
URL: "Rossfeld"
},
'RottnestIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -32.0000,
longitude: 115.502,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RottnestIsland</span>"},
URL: "RottnestIsland"
},
'Saada' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 31.6260,
longitude: -8.15600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Saada</span>"},
URL: "Saada"
},
'SableIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.9330,
longitude: -60.0100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SableIsland</span>"},
URL: "SableIsland"
},
'SACOL' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.9460,
longitude: 104.137,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SACOL</span>"},
URL: "SACOL"
},
'SAGRES' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.0480,
longitude: -8.87400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SAGRES</span>"},
URL: "SAGRES"
},
'SaihSalam' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.8290,
longitude: 55.3130,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SaihSalam</span>"},
URL: "SaihSalam"
},
'SaintMandrier' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 43.0670,
longitude: 5.94400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SaintMandrier</span>"},
URL: "SaintMandrier"
},
'SalondeProvence' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 43.6060,
longitude: 5.12000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SalondeProvence</span>"},
URL: "SalondeProvence"
},
'SandiaNMPSEL' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.0550,
longitude: -106.540,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SandiaNMPSEL</span>"},
URL: "SandiaNMPSEL"
},
'SanGiuliano' : {
latitude: 42.2860,
longitude: 9.51900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SanGiuliano</span>"},
URL: "SanGiuliano"
},
'SanNicolas' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.2570,
longitude: -119.487,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SanNicolas</span>"},
URL: "SanNicolas"
},
'SanNicolasVandal' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.2620,
longitude: -119.537,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SanNicolasVandal</span>"},
URL: "SanNicolasVandal"
},
'SantaCruzTenerife' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.4730,
longitude: -16.2470,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SantaCruzTenerife</span>"},
URL: "SantaCruzTenerife"
},
'SANTACRUZ' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -17.8020,
longitude: -63.1780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SANTACRUZ</span>"},
URL: "SANTACRUZ"
},
'SANTACRUZUTEPSA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -17.7670,
longitude: -63.2010,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SANTACRUZUTEPSA</span>"},
URL: "SANTACRUZUTEPSA"
},
'Santiago' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -33.4900,
longitude: -70.7170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Santiago</span>"},
URL: "Santiago"
},
'SaoMartinhoSONDA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -29.4430,
longitude: -53.8230,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SaoMartinhoSONDA</span>"},
URL: "SaoMartinhoSONDA"
},
'SaoPaulo' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -23.5610,
longitude: -46.7350,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SaoPaulo</span>"},
URL: "SaoPaulo"
},
'SaturnIsland' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 48.7830,
longitude: -123.133,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SaturnIsland</span>"},
URL: "SaturnIsland"
},
'SEDEBOKER' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 30.8550,
longitude: 34.7820,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SEDEBOKER</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "SEDEBOKER"
},
'SeoulSNU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.4580,
longitude: 126.951,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SeoulSNU</span>"},
URL: "SeoulSNU"
},
'SERC' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.8830,
longitude: -76.5000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SERC</span>"},
URL: "SERC"
},
'Sevastopol' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.6160,
longitude: 33.5170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Sevastopol</span>"},
URL: "Sevastopol"
},
'Sevilleta' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.3550,
longitude: -106.885,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Sevilleta</span>"},
URL: "Sevilleta"
},
'Seysses' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 43.5030,
longitude: 1.26000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Seysses</span>"},
URL: "Seysses"
},
'Shirahama' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.6930,
longitude: 135.357,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Shirahama</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Shirahama"
},
'Shouxian' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.5580,
longitude: 116.782,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Shouxian</span>"},
URL: "Shouxian"
},
'SilpakornUniv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.8190,
longitude: 100.041,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SilpakornUniv</span>"},
URL: "SilpakornUniv"
},
'Singapore' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 1.29800,
longitude: 103.780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Singapore</span>"},
URL: "Singapore"
},
'SiouxFalls' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.7360,
longitude: -96.6260,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SiouxFalls</span>"},
URL: "SiouxFalls"
},
'SirBuNuair' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 25.2170,
longitude: 54.2330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SirBuNuair</span>"},
URL: "SirBuNuair"
},
'Skukuza' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -24.9920,
longitude: 31.5870,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Skukuza</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Skukuza"
},
'SMARTPOL' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.2490,
longitude: 55.6120,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SMARTPOL</span>"},
URL: "SMARTPOL"
},
'SMART' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 24.2490,
longitude: 55.6120,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SMART</span>"},
URL: "SMART"
},
'SMEX' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 41.9360,
longitude: -93.6640,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SMEX</span>"},
URL: "SMEX"
},
'SMHI' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 58.5800,
longitude: 16.1500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SMHI</span>"},
URL: "SMHI"
},
'Sodankyla' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 67.3670,
longitude: 26.6300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Sodankyla</span>"},
URL: "Sodankyla"
},
'SolarVillage' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 24.9070,
longitude: 46.3970,
value: 7.2,
tooltip: {content : "<span style=\"font-weight:bold;\">SolarVillage</span><br/>Obs: 7.2 %/yr<br/>Mod: 1.1 %/yr"},
URL: "SolarVillage"
},
'SongkhlaMetSta' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 7.18400,
longitude: 100.605,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SongkhlaMetSta</span>"},
URL: "SongkhlaMetSta"
},
'SonLa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 21.3320,
longitude: 103.905,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SonLa</span>"},
URL: "SonLa"
},
'Sopot' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 54.4510,
longitude: 18.5650,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Sopot</span>"},
URL: "Sopot"
},
'SouthPoleObsNOAA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -89.9960,
longitude: 70.3000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SouthPoleObsNOAA</span>"},
URL: "SouthPoleObsNOAA"
},
'SteamboatSprings' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.4640,
longitude: -106.817,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SteamboatSprings</span>"},
URL: "SteamboatSprings"
},
'Stennis' : {
latitude: 30.3680,
longitude: -89.6170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Stennis</span>"},
URL: "Stennis"
},
'Suffield' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 50.2820,
longitude: -111.131,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Suffield</span>"},
URL: "Suffield"
},
'T0MAXMEX' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 19.4900,
longitude: -99.1480,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">T0MAXMEX</span>"},
URL: "T0MAXMEX"
},
'T1MAXMEX' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 19.7030,
longitude: -98.9820,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">T1MAXMEX</span>"},
URL: "T1MAXMEX"
},
'TabernasPSADLR' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.0910,
longitude: -2.35800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TabernasPSADLR</span>"},
URL: "TabernasPSADLR"
},
'TABLEMOUNTAINCA' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 34.3800,
longitude: -117.680,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TABLEMOUNTAINCA</span>"},
URL: "TABLEMOUNTAINCA"
},
'TableMountain' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.1250,
longitude: -105.237,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TableMountain</span>"},
URL: "TableMountain"
},
'Tahir' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 5.41100,
longitude: 100.197,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tahir</span>"},
URL: "Tahir"
},
'Tahiti' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -17.5770,
longitude: -149.606,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tahiti</span>"},
URL: "Tahiti"
},
'Taichung' : {
latitude: 24.1060,
longitude: 120.491,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Taichung</span>"},
URL: "Taichung"
},
'Taihu' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 31.4210,
longitude: 120.215,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Taihu</span>"},
URL: "Taihu"
},
'TaipeiCWB' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 25.0300,
longitude: 121.500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TaipeiCWB</span>"},
URL: "TaipeiCWB"
},
'TamanrassetINM' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.7900,
longitude: 5.53000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TamanrassetINM</span>"},
URL: "TamanrassetINM"
},
'TamanrassetTMP' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.7900,
longitude: 5.53000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TamanrassetTMP</span>"},
URL: "TamanrassetTMP"
},
'Tamihua' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 21.2610,
longitude: -97.4420,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tamihua</span>"},
URL: "Tamihua"
},
'TampicoMAXMEX' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 22.2780,
longitude: -97.8640,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TampicoMAXMEX</span>"},
URL: "TampicoMAXMEX"
},
'Tenosique' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 17.4880,
longitude: -91.4260,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tenosique</span>"},
URL: "Tenosique"
},
'TheHague' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 52.1100,
longitude: 4.32700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TheHague</span>"},
URL: "TheHague"
},
'Thessaloniki' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.6300,
longitude: 22.9600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Thessaloniki</span>"},
URL: "Thessaloniki"
},
'ThompsonFarm' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 43.1090,
longitude: -70.9480,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ThompsonFarm</span>"},
URL: "ThompsonFarm"
},
'Thompson' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 55.8000,
longitude: -97.8500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Thompson</span>"},
URL: "Thompson"
},
'Thule' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 76.5160,
longitude: -68.7690,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Thule</span>"},
URL: "Thule"
},
'Tiksi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 71.5870,
longitude: 128.921,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tiksi</span>"},
URL: "Tiksi"
},
'Timisoara' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 45.7460,
longitude: 21.2270,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Timisoara</span>"},
URL: "Timisoara"
},
'TingaTingana' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -28.9760,
longitude: 139.991,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TingaTingana</span>"},
URL: "TingaTingana"
},
'TiziOuzou' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 36.6990,
longitude: 4.05600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TiziOuzou</span>"},
URL: "TiziOuzou"
},
'Tombstone' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 31.7420,
longitude: -110.050,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tombstone</span>"},
URL: "Tombstone"
},
'Tomsk22' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 56.4170,
longitude: 84.0740,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tomsk22</span>"},
URL: "Tomsk22"
},
'Tomsk' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 56.4770,
longitude: 85.0470,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tomsk</span>"},
URL: "Tomsk"
},
'TonopahAirport' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 38.0500,
longitude: -117.091,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TonopahAirport</span>"},
URL: "TonopahAirport"
},
'Toravere' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 58.2550,
longitude: 26.4600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Toravere</span>"},
URL: "Toravere"
},
'Toronto' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 43.9700,
longitude: -79.4700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Toronto</span>"},
URL: "Toronto"
},
'Toulon' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 43.1360,
longitude: 6.00900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Toulon</span>"},
URL: "Toulon"
},
'Trelew' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -43.2500,
longitude: -65.3090,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Trelew</span>"},
URL: "Trelew"
},
'Tremiti' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 42.1180,
longitude: 15.4900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tremiti</span>"},
URL: "Tremiti"
},
'TrinidadHead' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 41.0540,
longitude: -124.151,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TrinidadHead</span>"},
URL: "TrinidadHead"
},
'TUBITAKUZAYAnkara' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.8910,
longitude: 32.7780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TUBITAKUZAYAnkara</span>"},
URL: "TUBITAKUZAYAnkara"
},
'Tucson' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.2330,
longitude: -110.953,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tucson</span>"},
URL: "Tucson"
},
'TudorHill' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.2640,
longitude: -64.8790,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TudorHill</span>"},
URL: "TudorHill"
},
'TuxtlaGutierrez' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 16.7550,
longitude: -93.1520,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TuxtlaGutierrez</span>"},
URL: "TuxtlaGutierrez"
},
'TuzGolu2' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.8370,
longitude: 33.4490,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TuzGolu2</span>"},
URL: "TuzGolu2"
},
'TuzGolu' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.7490,
longitude: 33.3360,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TuzGolu</span>"},
URL: "TuzGolu"
},
'UAHuntsville' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 34.7250,
longitude: -86.6450,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UAHuntsville</span>"},
URL: "UAHuntsville"
},
'UbonRatchathani' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 15.2460,
longitude: 104.871,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UbonRatchathani</span>"},
URL: "UbonRatchathani"
},
'UCLA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.0700,
longitude: -118.450,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UCLA</span>"},
URL: "UCLA"
},
'UCSB' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.4150,
longitude: -119.845,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UCSB</span>"},
URL: "UCSB"
},
'UHCoastalCenter' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 29.3880,
longitude: -95.0430,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UHCoastalCenter</span>"},
URL: "UHCoastalCenter"
},
'UMBC' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.2550,
longitude: -76.7090,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UMBC</span>"},
URL: "UMBC"
},
'UmmAlQuwain' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 25.5330,
longitude: 55.6580,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UmmAlQuwain</span>"},
URL: "UmmAlQuwain"
},
'UnivofHouston' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 29.7180,
longitude: -95.3420,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UnivofHouston</span>"},
URL: "UnivofHouston"
},
'UnivofLethbridge' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 49.6820,
longitude: -112.869,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UnivofLethbridge</span>"},
URL: "UnivofLethbridge"
},
'UnivofNevadaReno' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.5410,
longitude: -119.814,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UnivofNevadaReno</span>"},
URL: "UnivofNevadaReno"
},
'UofWisconsinSSEC' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.0720,
longitude: -89.4110,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UofWisconsinSSEC</span>"},
URL: "UofWisconsinSSEC"
},
'USCSEAPRISM' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.5640,
longitude: -118.118,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">USCSEAPRISM</span>"},
URL: "USCSEAPRISM"
},
'USDABARC' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.0310,
longitude: -76.9320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">USDABARC</span>"},
URL: "USDABARC"
},
'USDAHoward' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.0540,
longitude: -76.8770,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">USDAHoward</span>"},
URL: "USDAHoward"
},
'USMPenang' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 5.35800,
longitude: 100.302,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">USMPenang</span>"},
URL: "USMPenang"
},
'Ussuriysk' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.7000,
longitude: 132.163,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ussuriysk</span>"},
URL: "Ussuriysk"
},
'Valladolid' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 41.6640,
longitude: -4.70600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Valladolid</span>"},
URL: "Valladolid"
},
'Venise' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 45.3140,
longitude: 12.5080,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Venise</span>"},
URL: "Venise"
},
'Vientiane' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 17.9920,
longitude: 102.570,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Vientiane</span>"},
URL: "Vientiane"
},
'Villefranche' : {
latitude: 43.6840,
longitude: 7.32900,
value: -4.2,
tooltip: {content : "<span style=\"font-weight:bold;\">Villefranche</span><br/>Obs: -4.2 %/yr<br/>Mod: -2.0 %/yr"},
URL: "Villefranche"
},
'Vishkhapatnam' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 17.7240,
longitude: 83.3270,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Vishkhapatnam</span>"},
URL: "Vishkhapatnam"
},
'WalkerBranch' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 35.9580,
longitude: -84.2870,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">WalkerBranch</span>"},
URL: "WalkerBranch"
},
'Wallops' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 37.9420,
longitude: -75.4750,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Wallops</span>"},
URL: "Wallops"
},
'Waskesiu' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 53.9170,
longitude: -106.083,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Waskesiu</span>"},
URL: "Waskesiu"
},
'WaveCISSiteCSI6' : {
latitude: 28.8670,
longitude: -90.4830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">WaveCISSiteCSI6</span>"},
URL: "WaveCISSiteCSI6"
},
'WhiteSandsHELSTF' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.6350,
longitude: -106.338,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">WhiteSandsHELSTF</span>"},
URL: "WhiteSandsHELSTF"
},
'WindsorB' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 42.2830,
longitude: -83.0830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">WindsorB</span>"},
URL: "WindsorB"
},
'WitsUniversity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -26.1920,
longitude: 28.0290,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">WitsUniversity</span>"},
URL: "WitsUniversity"
},
'WythamWoods' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.7700,
longitude: -1.33300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">WythamWoods</span>"},
URL: "WythamWoods"
},
'Xanthi' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 41.1470,
longitude: 24.9190,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Xanthi</span>"},
URL: "Xanthi"
},
'XiangHe' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.7540,
longitude: 116.962,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">XiangHe</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "XiangHe"
},
'Xinglong' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.3960,
longitude: 117.578,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Xinglong</span>"},
URL: "Xinglong"
},
'Yakutsk' : {
attrs:{stroke:col1,"stroke-width":2.5},
latitude: 61.6620,
longitude: 129.367,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Yakutsk</span>"},
URL: "Yakutsk"
},
'Yaqui' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 27.2810,
longitude: -109.912,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Yaqui</span>"},
URL: "Yaqui"
},
'Yekaterinburg' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 57.0380,
longitude: 59.5450,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Yekaterinburg</span>"},
URL: "Yekaterinburg"
},
'YellowknifeAurora' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 62.4510,
longitude: -114.376,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">YellowknifeAurora</span>"},
URL: "YellowknifeAurora"
},
'Yellowknife' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 62.4520,
longitude: -114.407,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Yellowknife</span>"},
URL: "Yellowknife"
},
'YonseiUniversity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.5640,
longitude: 126.935,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">YonseiUniversity</span>"},
URL: "YonseiUniversity"
},
'YufaPEK' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.3090,
longitude: 116.184,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">YufaPEK</span>"},
URL: "YufaPEK"
},
'Yulin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.2830,
longitude: 109.717,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Yulin</span>"},
URL: "Yulin"
},
'Yuma' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.6440,
longitude: -114.583,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Yuma</span>"},
URL: "Yuma"
},
'Zaragoza' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 41.6330,
longitude: -0.882000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Zaragoza</span>"},
URL: "Zaragoza"
},
'Zhangye' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.0790,
longitude: 100.276,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Zhangye</span>"},
URL: "Zhangye"
},
'ZhongshanUniv' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 23.0600,
longitude: 113.390,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ZhongshanUniv</span>"},
URL: "ZhongshanUniv"
},
'ZinderAirport' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.7770,
longitude: 8.99000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ZinderAirport</span>"},
URL: "ZinderAirport"
},
'ZinderDMN' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.7750,
longitude: 8.98400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ZinderDMN</span>"},
URL: "ZinderDMN"
},
'Zvenigorod' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 55.6950,
longitude: 36.7750,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Zvenigorod</span>"},
URL: "Zvenigorod"
},
},});
	
	//zoom function

	$("."+id).on("zoom", function() {
	zoomLevel = $("."+id).data("zoomLevel");
	mapX= $("."+id).data("zoomX");
	mapY= $("."+id).data("zoomY");

	siz1 = 15 / (1 + 0.25 * zoomLevel);
	siz2 = 10 / (1 + 0.25 * zoomLevel);

	$("."+id).trigger("update",
	[{
	legend: {
	plot: {
	slices: [{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz1
	},{
	size: siz2
	}]
	}
	}
	}]
	);
	});

	$("."+id).on("mouseup", function() {
	zoomLevel = $("."+id).data("zoomLevel");
	mapX= $("."+id).data("zoomX");
	mapY= $("."+id).data("zoomY");
	});

	});
	}
	
