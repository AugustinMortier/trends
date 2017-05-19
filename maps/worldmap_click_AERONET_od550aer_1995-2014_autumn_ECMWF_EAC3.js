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
			change_img(elemOptions.URL,"1995-2014","od550aer","ECMWF_EAC3");
			},
			mouseover: function (e, id, mapElem, textElem, elemOptions) {
			//change_img(elemOptions.URL,"1995-2014","od550aer","ECMWF_EAC3");
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
			title: "AOD550 Obs/ECMWF_EAC3 - autumn averages - 1995-2014",
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

			siz1 = 15  / (1 + 0.25 * zoomLevel);
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
			change_img(elemOptions.URL,"1995-2014","od550aer","ECMWF_EAC3");
			},
			mouseover: function (e, id, mapElem, textElem, elemOptions) {
			//change_img(elemOptions.URL,"1995-2014","od550aer","ECMWF_EAC3");
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
			title: "AOD550 Obs/ECMWF_EAC3 - autumn averages - 1995-2014",
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AbracosHill</span><br/>Obs: No Trend<br/>Mod: -6.0 %/yr"},
URL: "AbracosHill"
},
'AbuAlBukhoosh' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 25.4950,
longitude: 53.1460,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AbuAlBukhoosh</span>"},
URL: "AbuAlBukhoosh"
},
'AbuDhabi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.4760,
longitude: 54.3290,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AbuDhabi</span>"},
URL: "AbuDhabi"
},
'AdelaideSite7' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -34.7250,
longitude: 138.656,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AdelaideSite7</span>"},
URL: "AdelaideSite7"
},
'Agoufou' : {
latitude: 15.3450,
longitude: -1.47900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Agoufou</span>"},
URL: "Agoufou"
},
'AguasEmendadas' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -15.5820,
longitude: -47.6560,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AguasEmendadas</span>"},
URL: "AguasEmendadas"
},
'AhiDeCara' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.1170,
longitude: -3.23000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AhiDeCara</span>"},
URL: "AhiDeCara"
},
'AireAdour' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.7000,
longitude: 0.250000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AireAdour</span>"},
URL: "AireAdour"
},
'AlAin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.2420,
longitude: 55.7050,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AlAin</span>"},
URL: "AlAin"
},
'Alboran' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.9450,
longitude: -3.03700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Alboran</span>"},
URL: "Alboran"
},
'AlDhafra' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.2540,
longitude: 54.5500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AlDhafra</span>"},
URL: "AlDhafra"
},
'AlKhaznah' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.1590,
longitude: 55.1010,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AlKhaznah</span>"},
URL: "AlKhaznah"
},
'AlQlaa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.1330,
longitude: 53.0330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AlQlaa</span>"},
URL: "AlQlaa"
},
'AltaFloresta' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -9.87100,
longitude: -56.1040,
value: -2.7,
tooltip: {content : "<span style=\"font-weight:bold;\">AltaFloresta</span><br/>Obs: -2.7 %/yr<br/>Mod: -5.4 %/yr"},
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
'AndrosIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.7000,
longitude: -77.8000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AndrosIsland</span>"},
URL: "AndrosIsland"
},
'Angiola' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.9470,
longitude: -119.538,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Angiola</span>"},
URL: "Angiola"
},
'Anmyon' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.5390,
longitude: 126.330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Anmyon</span>"},
URL: "Anmyon"
},
'AOEBaotou' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.8520,
longitude: 109.629,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AOEBaotou</span>"},
URL: "AOEBaotou"
},
'AppalachianState' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.2150,
longitude: -81.6940,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AppalachianState</span>"},
URL: "AppalachianState"
},
'AppledoreIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 42.9870,
longitude: -70.6150,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AppledoreIsland</span>"},
URL: "AppledoreIsland"
},
'Arcachon' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Arica</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col5,"stroke-width":2.5},
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
'ARMHyytialaFinland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 61.8440,
longitude: 24.2880,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ARMHyytialaFinland</span>"},
URL: "ARMHyytialaFinland"
},
'Armilla' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
'ARMOliktokAK' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 70.4990,
longitude: -149.880,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ARMOliktokAK</span>"},
URL: "ARMOliktokAK"
},
'AscensionIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -7.97600,
longitude: -14.4150,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AscensionIsland</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.7610,
longitude: 3.11100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">AubiereLAMP</span>"},
URL: "AubiereLAMP"
},
'Autilla' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 41.9970,
longitude: -4.60300,
value: -7.1,
tooltip: {content : "<span style=\"font-weight:bold;\">Autilla</span><br/>Obs: -7.1 %/yr<br/>Mod: No Trend"},
URL: "Autilla"
},
'Avignon' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.9330,
longitude: 4.87800,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Avignon</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 21.2910,
longitude: 106.225,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BacGiang</span>"},
URL: "BacGiang"
},
'BachLongVy' : {
attrs:{stroke:col6,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.8830,
longitude: -7.01100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Badajoz</span>"},
URL: "Badajoz"
},
'Baengnyeong' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.9660,
longitude: 124.630,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Baengnyeong</span>"},
URL: "Baengnyeong"
},
'Bahrain' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 26.2080,
longitude: 50.6090,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bahrain</span>"},
URL: "Bahrain"
},
'Balbina' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: -1.91700,
longitude: -59.4870,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Balbina</span>"},
URL: "Balbina"
},
'BambeyISRA' : {
attrs:{stroke:col5,"stroke-width":2.5},
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
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 13.5410,
longitude: 2.66500,
value: -1.8,
tooltip: {content : "<span style=\"font-weight:bold;\">Banizoumbou</span><br/>Obs: -1.8 %/yr<br/>Mod: -1.8 %/yr"},
URL: "Banizoumbou"
},
'BarbadosSALTRACE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.1490,
longitude: -59.6250,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BarbadosSALTRACE</span>"},
URL: "BarbadosSALTRACE"
},
'Barbados' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.1500,
longitude: -59.6170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Barbados</span>"},
URL: "Barbados"
},
'Barcelona' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 41.3860,
longitude: 2.11700,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Barcelona</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
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
'Baskin' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 32.2820,
longitude: -91.7390,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Baskin</span>"},
URL: "Baskin"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.8370,
longitude: 20.7920,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Belsk</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Belsk"
},
'Belterra' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: -2.64800,
longitude: -54.9520,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Belterra</span>"},
URL: "Belterra"
},
'BenSalem' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.5510,
longitude: 9.91400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BenSalem</span>"},
URL: "BenSalem"
},
'Bermuda' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 32.3700,
longitude: -64.6960,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bermuda</span><br/>Obs: No Trend<br/>Mod: -0.9 %/yr"},
URL: "Bermuda"
},
'Bethlehem' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: -28.2480,
longitude: 28.3330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bethlehem</span>"},
URL: "Bethlehem"
},
'Bhola' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.1670,
longitude: 90.7500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bhola</span>"},
URL: "Bhola"
},
'Biarritz' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.4830,
longitude: -1.55000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Biarritz</span>"},
URL: "Biarritz"
},
'BidiBahn' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 14.0600,
longitude: -2.45000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BidiBahn</span>"},
URL: "BidiBahn"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 42.5280,
longitude: -71.2690,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Billerica</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Billerica"
},
'Birdsville' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -25.8990,
longitude: 139.346,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Birdsville</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Blida</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Blida"
},
'Bodele' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 16.8830,
longitude: 18.5500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bodele</span>"},
URL: "Bodele"
},
'Bolzano' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BonanzaCreek</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "BonanzaCreek"
},
'Bondoukoui' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 11.8500,
longitude: -3.75000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bondoukoui</span>"},
URL: "Bondoukoui"
},
'BONDVILLE' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 40.0530,
longitude: -88.3720,
value: -2.4,
tooltip: {content : "<span style=\"font-weight:bold;\">BONDVILLE</span><br/>Obs: -2.4 %/yr<br/>Mod: -1.8 %/yr"},
URL: "BONDVILLE"
},
'BORDEAUX' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.7880,
longitude: -0.579000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BORDEAUX</span>"},
URL: "BORDEAUX"
},
'BordjBadjiMokhtar' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 21.3300,
longitude: 0.950000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BordjBadjiMokhtar</span>"},
URL: "BordjBadjiMokhtar"
},
'Boulder' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.0170,
longitude: -105.250,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Boulder</span>"},
URL: "Boulder"
},
'BoydCountyMS' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 38.4270,
longitude: -82.7000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BoydCountyMS</span>"},
URL: "BoydCountyMS"
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
'Brasilia' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -15.9170,
longitude: -47.9000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Brasilia</span>"},
URL: "Brasilia"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.8700,
longitude: -72.8890,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Brookhaven</span>"},
URL: "Brookhaven"
},
'Brussels' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
'Bucarest' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.4500,
longitude: 26.5250,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bucarest</span>"},
URL: "Bucarest"
},
'BucharestInoe' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
'Bujumbura' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -3.38000,
longitude: 29.3840,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Bujumbura</span>"},
URL: "Bujumbura"
},
'BureOPE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 48.5620,
longitude: 5.50500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">BureOPE</span>"},
URL: "BureOPE"
},
'Burjassot' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.5080,
longitude: -0.418000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Burjassot</span>"},
URL: "Burjassot"
},
'Burtonsville' : {
latitude: 39.0940,
longitude: -76.9500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Burtonsville</span>"},
URL: "Burtonsville"
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
value: -5.1,
tooltip: {content : "<span style=\"font-weight:bold;\">Cabauw</span><br/>Obs: -5.1 %/yr<br/>Mod: No Trend"},
URL: "Cabauw"
},
'CabodaRoca' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.7830,
longitude: -9.50000,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CabodaRoca</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "CabodaRoca"
},
'CaboRaso' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.7090,
longitude: -9.48600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CaboRaso</span>"},
URL: "CaboRaso"
},
'Caceres' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
'CaldwellParishHS' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 32.0600,
longitude: -92.0960,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CaldwellParishHS</span>"},
URL: "CaldwellParishHS"
},
'CalernOCA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.7490,
longitude: 6.92700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CalernOCA</span>"},
URL: "CalernOCA"
},
'Calhau' : {
latitude: 16.8640,
longitude: -24.8670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Calhau</span>"},
URL: "Calhau"
},
'CalipsoCarthage' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 32.0640,
longitude: -94.0660,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CalipsoCarthage</span>"},
URL: "CalipsoCarthage"
},
'CalipsoRidgely' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 38.9490,
longitude: -75.8820,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CalipsoRidgely</span>"},
URL: "CalipsoRidgely"
},
'CalipsoSabineFrst' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 31.6070,
longitude: -93.8670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CalipsoSabineFrst</span>"},
URL: "CalipsoSabineFrst"
},
'CalipsoWestDenton' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 38.9150,
longitude: -75.8940,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CalipsoWestDenton</span>"},
URL: "CalipsoWestDenton"
},
'CalipsoZion' : {
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 21.4220,
longitude: -77.8500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Camaguey</span>"},
URL: "Camaguey"
},
'CampoGrandeSONDA' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -20.4380,
longitude: -54.5380,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CampoGrandeSONDA</span><br/>Obs: No Trend<br/>Mod: -4.4 %/yr"},
URL: "CampoGrandeSONDA"
},
'CampoGrande' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -20.4500,
longitude: -54.6170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CampoGrande</span>"},
URL: "CampoGrande"
},
'Canberra' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -35.2710,
longitude: 149.111,
value: 4.2,
tooltip: {content : "<span style=\"font-weight:bold;\">Canberra</span><br/>Obs: 4.2 %/yr<br/>Mod: 3.5 %/yr"},
URL: "Canberra"
},
'CANDLELAKE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 53.7330,
longitude: -105.267,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CANDLELAKE</span>"},
URL: "CANDLELAKE"
},
'CapdEnFont' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.8260,
longitude: 4.20800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CapdEnFont</span>"},
URL: "CapdEnFont"
},
'CapeRomain' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 32.9410,
longitude: -79.6570,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CapeRomain</span>"},
URL: "CapeRomain"
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
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 16.7330,
longitude: -22.9350,
value: -1.9,
tooltip: {content : "<span style=\"font-weight:bold;\">CapoVerde</span><br/>Obs: -1.9 %/yr<br/>Mod: -2.2 %/yr"},
URL: "CapoVerde"
},
'Carlsbad' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.3690,
longitude: -104.233,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Carlsbad</span>"},
URL: "Carlsbad"
},
'Carpentras' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.0830,
longitude: 5.05800,
value: -5.2,
tooltip: {content : "<span style=\"font-weight:bold;\">Carpentras</span><br/>Obs: -5.2 %/yr<br/>Mod: No Trend"},
URL: "Carpentras"
},
'CARTEL' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.3790,
longitude: -71.9310,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CARTEL</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
value: -2.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CartSite</span><br/>Obs: -2.0 %/yr<br/>Mod: No Trend"},
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
'CatSpring' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 29.8290,
longitude: -96.3260,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CatSpring</span>"},
URL: "CatSpring"
},
'CCNY' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.8210,
longitude: -73.9490,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CCNY</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Chapais</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Chapais"
},
'CheboguePoint' : {
attrs:{stroke:col5,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ChenKungUniv</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
'Cheritan' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.2890,
longitude: -75.9720,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Cheritan</span>"},
URL: "Cheritan"
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
'Chiayi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.4960,
longitude: 120.496,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Chiayi</span>"},
URL: "Chiayi"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.1440,
longitude: -1.43700,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Chilbolton</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Chilbolton"
},
'ChinaLake' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.6740,
longitude: -117.745,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ChinaLake</span>"},
URL: "ChinaLake"
},
'Chinhae' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.1560,
longitude: 128.652,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Chinhae</span>"},
URL: "Chinhae"
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Churchill</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
'ClermontFerrand' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.7600,
longitude: 2.96200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ClermontFerrand</span>"},
URL: "ClermontFerrand"
},
'CLUJUBB' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 46.7680,
longitude: 23.5510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CLUJUBB</span>"},
URL: "CLUJUBB"
},
'CoconutIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 21.4330,
longitude: -157.790,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CoconutIsland</span>"},
URL: "CoconutIsland"
},
'Coleambally' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -34.8100,
longitude: 146.064,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Coleambally</span>"},
URL: "Coleambally"
},
'ColumbiaSC' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.0230,
longitude: -81.0360,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ColumbiaSC</span>"},
URL: "ColumbiaSC"
},
'Concepcion' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -16.1380,
longitude: -62.0280,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Concepcion</span>"},
URL: "Concepcion"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -31.5240,
longitude: -64.4640,
value: -2.7,
tooltip: {content : "<span style=\"font-weight:bold;\">CordobaCETT</span><br/>Obs: -2.7 %/yr<br/>Mod: No Trend"},
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
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.9000,
longitude: -75.7100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">COVESEAPRISM</span>"},
URL: "COVESEAPRISM"
},
'COVE' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.9000,
longitude: -75.7100,
value: 3.6,
tooltip: {content : "<span style=\"font-weight:bold;\">COVE</span><br/>Obs: 3.6 %/yr<br/>Mod: -1.2 %/yr"},
URL: "COVE"
},
'Creteil' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -15.7290,
longitude: -56.0210,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">CUIABAMIRANDA</span><br/>Obs: No Trend<br/>Mod: -5.3 %/yr"},
URL: "CUIABAMIRANDA"
},
'Cuiaba' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -15.5000,
longitude: -56.0000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Cuiaba</span>"},
URL: "Cuiaba"
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
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 23.7170,
longitude: -15.9500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dahkla</span>"},
URL: "Dahkla"
},
'Dakar' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 14.3940,
longitude: -16.9590,
value: -2.2,
tooltip: {content : "<span style=\"font-weight:bold;\">Dakar</span><br/>Obs: -2.2 %/yr<br/>Mod: -1.7 %/yr"},
URL: "Dakar"
},
'Dalanzadgad' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.5770,
longitude: 104.419,
value: 6.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dalanzadgad</span><br/>Obs: 6.0 %/yr<br/>Mod: No Trend"},
URL: "Dalanzadgad"
},
'Dalma' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.5020,
longitude: 52.3320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dalma</span>"},
URL: "Dalma"
},
'Darwin' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: -12.4240,
longitude: 130.892,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Darwin</span>"},
URL: "Darwin"
},
'Davos' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 46.8130,
longitude: 9.84400,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Davos</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Davos"
},
'Dayton' : {
latitude: 39.7760,
longitude: -84.1100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dayton</span>"},
URL: "Dayton"
},
'DeadSea' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 31.1000,
longitude: 35.4500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DeadSea</span>"},
URL: "DeadSea"
},
'Dhabi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.4810,
longitude: 54.3830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dhabi</span>"},
URL: "Dhabi"
},
'Dhadnah' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
'Dharwar' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 15.4290,
longitude: 74.9890,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dharwar</span>"},
URL: "Dharwar"
},
'Djougou' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 9.76000,
longitude: 1.59900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Djougou</span>"},
URL: "Djougou"
},
'DMNMaineSoroa' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 13.2170,
longitude: 12.0230,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DMNMaineSoroa</span>"},
URL: "DMNMaineSoroa"
},
'DoiAngKhang' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 19.9320,
longitude: 99.0450,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DoiAngKhang</span>"},
URL: "DoiAngKhang"
},
'DollySods' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 39.1100,
longitude: -79.4300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DollySods</span>"},
URL: "DollySods"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 20.6990,
longitude: 116.729,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DongshaIsland</span>"},
URL: "DongshaIsland"
},
'DRAGONABERD' : {
latitude: 39.5150,
longitude: -76.1650,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONABERD</span>"},
URL: "DRAGONABERD"
},
'DRAGONAldine' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 29.9010,
longitude: -95.3260,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONAldine</span>"},
URL: "DRAGONAldine"
},
'DRAGONAldino' : {
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
latitude: 39.1650,
longitude: -76.6250,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONANNEA</span>"},
URL: "DRAGONANNEA"
},
'DRAGONARNCC' : {
latitude: 39.1590,
longitude: -76.7210,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONARNCC</span>"},
URL: "DRAGONARNCC"
},
'DRAGONARNLS' : {
latitude: 39.0580,
longitude: -76.5130,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONARNLS</span>"},
URL: "DRAGONARNLS"
},
'DRAGONArvin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.2380,
longitude: -118.788,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONArvin</span>"},
URL: "DRAGONArvin"
},
'DRAGONAuroraEast' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.6390,
longitude: -104.569,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONAuroraEast</span>"},
URL: "DRAGONAuroraEast"
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
latitude: 39.3990,
longitude: -76.4760,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBATMR</span>"},
URL: "DRAGONBATMR"
},
'DRAGONBelAir' : {
latitude: 39.5000,
longitude: -76.2630,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBelAir</span>"},
URL: "DRAGONBelAir"
},
'DRAGONBeltsville' : {
latitude: 39.0540,
longitude: -76.8770,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBeltsville</span>"},
URL: "DRAGONBeltsville"
},
'DRAGONBLDND' : {
latitude: 39.2580,
longitude: -76.5200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBLDND</span>"},
URL: "DRAGONBLDND"
},
'DRAGONBLLRT' : {
latitude: 39.3890,
longitude: -76.5780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBLLRT</span>"},
URL: "DRAGONBLLRT"
},
'DRAGONBLTCC' : {
latitude: 39.3620,
longitude: -76.6880,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBLTCC</span>"},
URL: "DRAGONBLTCC"
},
'DRAGONBLTIM' : {
latitude: 39.2630,
longitude: -76.6510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBLTIM</span>"},
URL: "DRAGONBLTIM"
},
'DRAGONBLTNR' : {
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
'DRAGONBoulder' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.9920,
longitude: -105.261,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBoulder</span>"},
URL: "DRAGONBoulder"
},
'DRAGONBOWEM' : {
latitude: 38.9750,
longitude: -76.7510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBOWEM</span>"},
URL: "DRAGONBOWEM"
},
'DRAGONBTMDL' : {
latitude: 39.2390,
longitude: -76.4420,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONBTMDL</span>"},
URL: "DRAGONBTMDL"
},
'DRAGONChannelView' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 29.8020,
longitude: -95.1260,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONChannelView</span>"},
URL: "DRAGONChannelView"
},
'DRAGONCHASE' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.9790,
longitude: -77.0800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONCHASE</span>"},
URL: "DRAGONCHASE"
},
'DRAGONChatfieldPk' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.5350,
longitude: -105.070,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONChatfieldPk</span>"},
URL: "DRAGONChatfieldPk"
},
'DRAGONClinton' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 29.7340,
longitude: -95.2570,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONClinton</span>"},
URL: "DRAGONClinton"
},
'DRAGONCLLGP' : {
latitude: 38.9910,
longitude: -76.9090,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONCLLGP</span>"},
URL: "DRAGONCLLGP"
},
'DRAGONClovis' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.8190,
longitude: -119.716,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONClovis</span>"},
URL: "DRAGONClovis"
},
'DRAGONCLRST' : {
latitude: 39.2050,
longitude: -76.9440,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONCLRST</span>"},
URL: "DRAGONCLRST"
},
'DRAGONConroe' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 30.3500,
longitude: -95.4250,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONConroe</span>"},
URL: "DRAGONConroe"
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
latitude: 39.1110,
longitude: -76.4630,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONCPSDN</span>"},
URL: "DRAGONCPSDN"
},
'DRAGONCTNVL' : {
latitude: 39.2760,
longitude: -76.7720,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONCTNVL</span>"},
URL: "DRAGONCTNVL"
},
'DRAGONDeerPark' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 29.6700,
longitude: -95.1280,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONDeerPark</span>"},
URL: "DRAGONDeerPark"
},
'DRAGONDenverLaCasa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.7790,
longitude: -105.005,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONDenverLaCasa</span>"},
URL: "DRAGONDenverLaCasa"
},
'DRAGONDrummond' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.7060,
longitude: -119.741,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONDrummond</span>"},
URL: "DRAGONDrummond"
},
'DRAGONEaglePoint' : {
latitude: 39.3980,
longitude: -76.2700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONEaglePoint</span>"},
URL: "DRAGONEaglePoint"
},
'DRAGONEDCMS' : {
latitude: 38.9220,
longitude: -76.5600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONEDCMS</span>"},
URL: "DRAGONEDCMS"
},
'DRAGONEdgewood' : {
latitude: 39.4100,
longitude: -76.2960,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONEdgewood</span>"},
URL: "DRAGONEdgewood"
},
'DRAGONELLCT' : {
latitude: 39.2660,
longitude: -76.8620,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONELLCT</span>"},
URL: "DRAGONELLCT"
},
'DRAGONEssex' : {
latitude: 39.3110,
longitude: -76.4740,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONEssex</span>"},
URL: "DRAGONEssex"
},
'DRAGONFairHill' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 39.7010,
longitude: -75.8600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONFairHill</span>"},
URL: "DRAGONFairHill"
},
'DRAGONFLLST' : {
latitude: 39.5220,
longitude: -76.4130,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONFLLST</span>"},
URL: "DRAGONFLLST"
},
'DRAGONFortCollins' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.5930,
longitude: -105.141,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONFortCollins</span>"},
URL: "DRAGONFortCollins"
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
'DRAGONGalvestonDP' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 29.2540,
longitude: -94.8610,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONGalvestonDP</span>"},
URL: "DRAGONGalvestonDP"
},
'DRAGONGalveston' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 29.2540,
longitude: -94.8610,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONGalveston</span>"},
URL: "DRAGONGalveston"
},
'DRAGONGangneungWNU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.7710,
longitude: 128.867,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONGangneungWNU</span>"},
URL: "DRAGONGangneungWNU"
},
'DRAGONGarland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.7850,
longitude: -119.773,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONGarland</span>"},
URL: "DRAGONGarland"
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
'DRAGONHuron' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.2060,
longitude: -120.105,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONHuron</span>"},
URL: "DRAGONHuron"
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
latitude: 38.9790,
longitude: -76.3080,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKentIsland</span>"},
URL: "DRAGONKentIsland"
},
'DRAGONKobe' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.7200,
longitude: 135.291,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONKobe</span>"},
URL: "DRAGONKobe"
},
'DRAGONKohriyama' : {
attrs:{stroke:col5,"stroke-width":2.5},
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
attrs:{stroke:col5,"stroke-width":2.5},
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
latitude: 39.0810,
longitude: -76.8550,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONLAREL</span>"},
URL: "DRAGONLAREL"
},
'DRAGONLAUMD' : {
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
'DRAGONManvelCroix' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 29.5200,
longitude: -95.3930,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONManvelCroix</span>"},
URL: "DRAGONManvelCroix"
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
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.6800,
longitude: 135.679,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONMtIkoma</span>"},
URL: "DRAGONMtIkoma"
},
'DRAGONMtRokko' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.7570,
longitude: 135.230,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONMtRokko</span>"},
URL: "DRAGONMtRokko"
},
'DRAGONNara' : {
attrs:{stroke:col5,"stroke-width":2.5},
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
'DRAGONNiwotRidge' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.0320,
longitude: -105.533,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONNiwotRidge</span>"},
URL: "DRAGONNiwotRidge"
},
'DRAGONNRELGolden' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.7440,
longitude: -105.178,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONNRELGolden</span>"},
URL: "DRAGONNRELGolden"
},
'DRAGONNWHarrisCO' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 30.0390,
longitude: -95.6740,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONNWHarrisCO</span>"},
URL: "DRAGONNWHarrisCO"
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
latitude: 39.3880,
longitude: -76.8190,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONONNGS</span>"},
URL: "DRAGONONNGS"
},
'DRAGONOsakaCenter' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.6680,
longitude: 135.531,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONOsakaCenter</span>"},
URL: "DRAGONOsakaCenter"
},
'DRAGONOsakaNorth' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.7740,
longitude: 135.510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONOsakaNorth</span>"},
URL: "DRAGONOsakaNorth"
},
'DRAGONOsakaSouth' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.5440,
longitude: 135.504,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONOsakaSouth</span>"},
URL: "DRAGONOsakaSouth"
},
'DRAGONPadonia' : {
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.5970,
longitude: -119.504,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONParlier</span>"},
URL: "DRAGONParlier"
},
'DRAGONPasadena' : {
latitude: 39.1120,
longitude: -76.4550,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPasadena</span>"},
URL: "DRAGONPasadena"
},
'DRAGONPATUX' : {
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
latitude: 39.0610,
longitude: -76.7190,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPineyOrchard</span>"},
URL: "DRAGONPineyOrchard"
},
'DRAGONPlatteville' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.1830,
longitude: -104.726,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPlatteville</span>"},
URL: "DRAGONPlatteville"
},
'DRAGONPondokUpeh' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 5.33300,
longitude: 100.227,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPondokUpeh</span>"},
URL: "DRAGONPondokUpeh"
},
'DRAGONPorterville' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.0320,
longitude: -119.055,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONPorterville</span>"},
URL: "DRAGONPorterville"
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
'DRAGONRockyFlats' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.9130,
longitude: -105.189,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONRockyFlats</span>"},
URL: "DRAGONRockyFlats"
},
'DRAGONSanggye' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.6590,
longitude: 127.068,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONSanggye</span>"},
URL: "DRAGONSanggye"
},
'DRAGONSeabrookPark' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 29.5830,
longitude: -95.0160,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONSeabrookPark</span>"},
URL: "DRAGONSeabrookPark"
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
'DRAGONSmithPoint' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 29.5460,
longitude: -94.7870,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONSmithPoint</span>"},
URL: "DRAGONSmithPoint"
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
'DRAGONUHSugarland' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 29.5740,
longitude: -95.6520,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONUHSugarland</span>"},
URL: "DRAGONUHSugarland"
},
'DRAGONUHWLiberty' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 30.0580,
longitude: -94.9780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONUHWLiberty</span>"},
URL: "DRAGONUHWLiberty"
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
latitude: 38.8910,
longitude: -76.8140,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONUMRLB</span>"},
URL: "DRAGONUMRLB"
},
'DRAGONVisalia' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.3140,
longitude: -119.393,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONVisalia</span>"},
URL: "DRAGONVisalia"
},
'DRAGONWelch' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.6390,
longitude: -105.140,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONWelch</span>"},
URL: "DRAGONWelch"
},
'DRAGONWeldCoTwr' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.3860,
longitude: -104.737,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONWeldCoTwr</span>"},
URL: "DRAGONWeldCoTwr"
},
'DRAGONWestHouston' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 29.8330,
longitude: -95.6570,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONWestHouston</span>"},
URL: "DRAGONWestHouston"
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
latitude: 39.2850,
longitude: -76.0920,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DRAGONWorton</span>"},
URL: "DRAGONWorton"
},
'DRAGONWSTFD' : {
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.6280,
longitude: -82.8720,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DryTortugas</span>"},
URL: "DryTortugas"
},
'Dunedin' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: -45.8640,
longitude: 170.514,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dunedin</span>"},
URL: "Dunedin"
},
'DunhuangLZU' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 40.4920,
longitude: 94.9550,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DunhuangLZU</span>"},
URL: "DunhuangLZU"
},
'Dunhuang' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 40.0380,
longitude: 94.7940,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dunhuang</span>"},
URL: "Dunhuang"
},
'Dunkerque' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.0350,
longitude: 2.36800,
value: -2.8,
tooltip: {content : "<span style=\"font-weight:bold;\">Dunkerque</span><br/>Obs: -2.8 %/yr<br/>Mod: No Trend"},
URL: "Dunkerque"
},
'DurbanUKZN' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -29.8170,
longitude: 30.9440,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">DurbanUKZN</span>"},
URL: "DurbanUKZN"
},
'Dushanbe' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 38.5530,
longitude: 68.8580,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Dushanbe</span>"},
URL: "Dushanbe"
},
'EastonAirport' : {
attrs:{stroke:col5,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.2260,
longitude: -79.7500,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Egbert</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Egbert"
},
'EgbertX' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.1050,
longitude: -6.73300,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ElArenosillo</span><br/>Obs: No Trend<br/>Mod: -1.6 %/yr"},
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
'ElRefugio' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -14.7660,
longitude: -62.0350,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ElRefugio</span>"},
URL: "ElRefugio"
},
'ElSegundo' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.9130,
longitude: -118.382,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ElSegundo</span>"},
URL: "ElSegundo"
},
'EOPACE1' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.1820,
longitude: -75.7510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">EOPACE1</span>"},
URL: "EOPACE1"
},
'EOPACE2' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.1840,
longitude: -75.7450,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">EOPACE2</span>"},
URL: "EOPACE2"
},
'EPANCU' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
'EPAResTrianglePk' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.8800,
longitude: -78.8700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">EPAResTrianglePk</span>"},
URL: "EPAResTrianglePk"
},
'Ersa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.0040,
longitude: 9.35900,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ersa</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Ersa"
},
'ETNA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.6140,
longitude: 15.0190,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ETNA</span>"},
URL: "ETNA"
},
'EtoshaPan' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -19.1750,
longitude: 15.9140,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">EtoshaPan</span>"},
URL: "EtoshaPan"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.5680,
longitude: -7.91200,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Evora</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
'FLINFLON' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 54.6700,
longitude: -101.690,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FLINFLON</span>"},
URL: "FLINFLON"
},
'Fontainebleau' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 48.4070,
longitude: 2.68000,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Fontainebleau</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Fontainebleau"
},
'FORTHCRETE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.3330,
longitude: 25.2820,
value: -2.8,
tooltip: {content : "<span style=\"font-weight:bold;\">FORTHCRETE</span><br/>Obs: -2.8 %/yr<br/>Mod: No Trend"},
URL: "FORTHCRETE"
},
'FortMcKay' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 57.1840,
longitude: -111.640,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FortMcKay</span>"},
URL: "FortMcKay"
},
'FortMcMurray' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 56.7520,
longitude: -111.476,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FortMcMurray</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "FortMcMurray"
},
'FowlersGap' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -31.0860,
longitude: 141.701,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FowlersGap</span>"},
URL: "FowlersGap"
},
'FrenchmanFlat' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.8090,
longitude: -115.935,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FrenchmanFlat</span>"},
URL: "FrenchmanFlat"
},
'Fresno2' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.7850,
longitude: -119.773,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Fresno2</span>"},
URL: "Fresno2"
},
'Fresno' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.7820,
longitude: -119.773,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Fresno</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Fresno"
},
'FresnoX' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.7820,
longitude: -119.773,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FresnoX</span>"},
URL: "FresnoX"
},
'Frioul' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.2660,
longitude: 5.29300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Frioul</span>"},
URL: "Frioul"
},
'FugueiCape' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 25.2970,
longitude: 121.538,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">FugueiCape</span>"},
URL: "FugueiCape"
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
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 29.6960,
longitude: -82.2610,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GainesvilleAirport</span>"},
URL: "GainesvilleAirport"
},
'Gaithersburg' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 39.1330,
longitude: -77.2080,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Gaithersburg</span>"},
URL: "Gaithersburg"
},
'GalataPlatform' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.0450,
longitude: 28.1930,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GalataPlatform</span>"},
URL: "GalataPlatform"
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
'Gerlitzen' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 46.6780,
longitude: 13.9070,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Gerlitzen</span>"},
URL: "Gerlitzen"
},
'GISS' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.7980,
longitude: -73.9600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GISS</span>"},
URL: "GISS"
},
'Gloria' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.6000,
longitude: 29.3600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Gloria</span>"},
URL: "Gloria"
},
'GOAINDIA' : {
latitude: 15.4530,
longitude: 73.8060,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GOAINDIA</span>"},
URL: "GOAINDIA"
},
'Goldstone' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
'Gozo' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.0340,
longitude: 14.2650,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Gozo</span>"},
URL: "Gozo"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.1640,
longitude: -3.60500,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Granada</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
latitude: 38.9920,
longitude: -76.8400,
value: -1.8,
tooltip: {content : "<span style=\"font-weight:bold;\">GSFC</span><br/>Obs: -1.8 %/yr<br/>Mod: -2.0 %/yr"},
URL: "GSFC"
},
'Guadeloup' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 16.3330,
longitude: -61.5000,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Guadeloup</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
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
value: -4.0,
tooltip: {content : "<span style=\"font-weight:bold;\">GwangjuGIST</span><br/>Obs: -4.0 %/yr<br/>Mod: No Trend"},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Hamburg</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Hamburg"
},
'Hamim' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.9670,
longitude: 54.3000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Hamim</span>"},
URL: "Hamim"
},
'HamptonRoads' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 36.7830,
longitude: -76.4500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HamptonRoads</span>"},
URL: "HamptonRoads"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 42.5320,
longitude: -72.1880,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HarvardForest</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Helgoland</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
'HengChun' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.0550,
longitude: 120.700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HengChun</span>"},
URL: "HengChun"
},
'HentiesBay' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.2390,
longitude: -122.224,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HJAndrews</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "HJAndrews"
},
'HogIsland' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.4200,
longitude: -75.7000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HogIsland</span>"},
URL: "HogIsland"
},
'HohenpeissenbergDWD' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 47.8020,
longitude: 11.0120,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HohenpeissenbergDWD</span>"},
URL: "HohenpeissenbergDWD"
},
'HongKongHokTsui' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.2100,
longitude: 114.258,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HongKongHokTsui</span>"},
URL: "HongKongHokTsui"
},
'HongKongPolyU' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.3030,
longitude: 114.180,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HongKongPolyU</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "HongKongPolyU"
},
'HongKongSheung' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.4830,
longitude: 114.117,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HongKongSheung</span>"},
URL: "HongKongSheung"
},
'HOPEHambach' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 50.8970,
longitude: 6.46400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HOPEHambach</span>"},
URL: "HOPEHambach"
},
'HOPEInselhombroich' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.1510,
longitude: 6.64400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HOPEInselhombroich</span>"},
URL: "HOPEInselhombroich"
},
'HOPEKrauthausen' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 50.8800,
longitude: 6.41500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HOPEKrauthausen</span>"},
URL: "HOPEKrauthausen"
},
'HOPEMelpitz' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.5260,
longitude: 12.9280,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HOPEMelpitz</span>"},
URL: "HOPEMelpitz"
},
'HOPERWTHAachen' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 50.7780,
longitude: 6.06100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HOPERWTHAachen</span>"},
URL: "HOPERWTHAachen"
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Howland</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Howland"
},
'HuaHin' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 12.6340,
longitude: 99.9510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">HuaHin</span>"},
URL: "HuaHin"
},
'Huelva' : {
attrs:{stroke:col5,"stroke-width":2.5},
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
'IeodoStation' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.1230,
longitude: 125.182,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IeodoStation</span>"},
URL: "IeodoStation"
},
'IERCinzana' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 13.2780,
longitude: -5.93400,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IERCinzana</span><br/>Obs: No Trend<br/>Mod: -1.6 %/yr"},
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
attrs:{stroke:col3,"stroke-width":2.5},
latitude: 22.5740,
longitude: 88.4180,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IITKGPEXTKolkata</span>"},
URL: "IITKGPEXTKolkata"
},
'Ilorin' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 8.32000,
longitude: 4.34000,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ilorin</span><br/>Obs: No Trend<br/>Mod: -2.3 %/yr"},
URL: "Ilorin"
},
'IMAAPotenza' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.6000,
longitude: 15.7200,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IMAAPotenza</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "IMAAPotenza"
},
'IMCOristano' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.9100,
longitude: 8.50000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IMCOristano</span>"},
URL: "IMCOristano"
},
'IMPROVEMammothCave' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.1320,
longitude: -86.1480,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">IMPROVEMammothCave</span>"},
URL: "IMPROVEMammothCave"
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
'InnerMongolia' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 42.6830,
longitude: 115.954,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">InnerMongolia</span>"},
URL: "InnerMongolia"
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Irkutsk</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Irkutsk"
},
'ISDGMCNR' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.4370,
longitude: 12.3320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ISDGMCNR</span>"},
URL: "ISDGMCNR"
},
'Ispra' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.8030,
longitude: 8.62700,
value: -2.1,
tooltip: {content : "<span style=\"font-weight:bold;\">Ispra</span><br/>Obs: -2.1 %/yr<br/>Mod: No Trend"},
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
'Itajuba' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -22.4130,
longitude: -45.4520,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Itajuba</span>"},
URL: "Itajuba"
},
'Ittoqqortoormiit' : {
attrs:{stroke:col1,"stroke-width":2.5},
latitude: 70.4850,
longitude: -21.9510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ittoqqortoormiit</span>"},
URL: "Ittoqqortoormiit"
},
'Izana' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 28.3090,
longitude: -16.4990,
value: -6.3,
tooltip: {content : "<span style=\"font-weight:bold;\">Izana</span><br/>Obs: -6.3 %/yr<br/>Mod: -3.0 %/yr"},
URL: "Izana"
},
'JabalHafeet' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Jabiru</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
'JamesResCenter' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.8730,
longitude: -76.6590,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">JamesResCenter</span>"},
URL: "JamesResCenter"
},
'JaruReserve' : {
attrs:{stroke:col7,"stroke-width":2.5},
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
'JiParana' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -10.8600,
longitude: -61.8000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">JiParana</span>"},
URL: "JiParana"
},
'JiParanaUNIR' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -10.8830,
longitude: -61.9670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">JiParanaUNIR</span>"},
URL: "JiParanaUNIR"
},
'Joberg' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -26.1860,
longitude: 28.0290,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Joberg</span>"},
URL: "Joberg"
},
'Jomsom' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.7780,
longitude: 83.7140,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Jomsom</span>"},
URL: "Jomsom"
},
'JonesERC' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 31.2310,
longitude: -84.4710,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">JonesERC</span>"},
URL: "JonesERC"
},
'Jornada' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.3510,
longitude: -106.517,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Jornada</span>"},
URL: "Jornada"
},
'JugBay' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 38.7670,
longitude: -76.7780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">JugBay</span>"},
URL: "JugBay"
},
'Kaashidhoo' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 4.96500,
longitude: 73.4660,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kaashidhoo</span>"},
URL: "Kaashidhoo"
},
'Kaiping' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.3150,
longitude: 112.539,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kaiping</span>"},
URL: "Kaiping"
},
'Kaloma' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: -14.8600,
longitude: 24.8280,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kaloma</span>"},
URL: "Kaloma"
},
'Kandahar' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 46.6780,
longitude: 13.9070,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KanzelhoheObs</span>"},
URL: "KanzelhoheObs"
},
'Kaoma' : {
attrs:{stroke:col3,"stroke-width":2.5},
latitude: -14.7930,
longitude: 24.7950,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kaoma</span>"},
URL: "Kaoma"
},
'Karachi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.8700,
longitude: 67.0300,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Karachi</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Karachi"
},
'Karlsruhe' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 49.0930,
longitude: 8.42800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Karlsruhe</span>"},
URL: "Karlsruhe"
},
'KarunyaUniversity' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 10.9350,
longitude: 76.7440,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KarunyaUniversity</span>"},
URL: "KarunyaUniversity"
},
'Kasama' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -10.1670,
longitude: 31.1830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kasama</span>"},
URL: "Kasama"
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
'Katibougou' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 12.9170,
longitude: -7.53200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Katibougou</span>"},
URL: "Katibougou"
},
'KAUSTCampus' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.3050,
longitude: 39.1030,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KAUSTCampus</span>"},
URL: "KAUSTCampus"
},
'Kejimkujik' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.3830,
longitude: -65.2830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kejimkujik</span>"},
URL: "Kejimkujik"
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
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.7200,
longitude: 135.291,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kobe</span>"},
URL: "Kobe"
},
'Kolimbari' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.5330,
longitude: 23.7830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kolimbari</span>"},
URL: "Kolimbari"
},
'KONZAEDC' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 39.1020,
longitude: -96.6100,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KONZAEDC</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 29.2420,
longitude: 47.9720,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">KuwaitAirport</span>"},
URL: "KuwaitAirport"
},
'KuwaitUniversity' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Kyiv</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.5770,
longitude: 4.81900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LaCrau</span>"},
URL: "LaCrau"
},
'Laegeren' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 47.4800,
longitude: 8.35100,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Laegeren</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
value: -3.3,
tooltip: {content : "<span style=\"font-weight:bold;\">LaJolla</span><br/>Obs: -3.3 %/yr<br/>Mod: No Trend"},
URL: "LaJolla"
},
'LakeArgyle' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -16.1080,
longitude: 128.749,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LakeArgyle</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "LakeArgyle"
},
'LakeLefroy' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -31.2550,
longitude: 121.705,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LakeLefroy</span>"},
URL: "LakeLefroy"
},
'LaLaguna' : {
attrs:{stroke:col6,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lampedusa</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.3350,
longitude: 18.1110,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LecceUniversity</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "LecceUniversity"
},
'LeFauga' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 51.3520,
longitude: 12.4350,
value: -4.5,
tooltip: {content : "<span style=\"font-weight:bold;\">Leipzig</span><br/>Obs: -4.5 %/yr<br/>Mod: No Trend"},
URL: "Leipzig"
},
'LelandHS' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 33.4020,
longitude: -90.8930,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LelandHS</span>"},
URL: "LelandHS"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 50.6120,
longitude: 3.14200,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lille</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Lille"
},
'LISCO' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.9550,
longitude: -73.3420,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LISCO</span>"},
URL: "LISCO"
},
'Lochiel' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 49.0280,
longitude: -122.602,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lochiel</span>"},
URL: "Lochiel"
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
attrs:{stroke:col1,"stroke-width":2.5},
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
'LOSFIEROS98' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -14.5560,
longitude: -60.9290,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LOSFIEROS98</span>"},
URL: "LOSFIEROS98"
},
'LosFieros' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -14.5500,
longitude: -60.6170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LosFieros</span>"},
URL: "LosFieros"
},
'LSU' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 30.4070,
longitude: -91.1840,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LSU</span>"},
URL: "LSU"
},
'LuangNamtha' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 20.9310,
longitude: 101.416,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LuangNamtha</span>"},
URL: "LuangNamtha"
},
'Lucinda' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.4690,
longitude: 120.874,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lulin</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Lulin"
},
'Lumbini' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 27.4900,
longitude: 83.2800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Lumbini</span>"},
URL: "Lumbini"
},
'LunarLake' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.3900,
longitude: -115.988,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">LunarLake</span>"},
URL: "LunarLake"
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
attrs:{stroke:col4,"stroke-width":2.5},
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
'Madison' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 43.0700,
longitude: -89.4100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Madison</span>"},
URL: "Madison"
},
'Madrid' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.4520,
longitude: -3.72400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Madrid</span>"},
URL: "Madrid"
},
'Maeson' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 19.8300,
longitude: 99.1710,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Maeson</span>"},
URL: "Maeson"
},
'MaggieValley' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.5200,
longitude: -83.0950,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MaggieValley</span>"},
URL: "MaggieValley"
},
'Mainz' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 49.9990,
longitude: 8.30000,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Mainz</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Mainz"
},
'Malaga' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.7150,
longitude: -4.47800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Malaga</span>"},
URL: "Malaga"
},
'MALE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 4.19200,
longitude: 73.5290,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MALE</span>"},
URL: "MALE"
},
'ManausEMBRAPA' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: -2.89100,
longitude: -59.9700,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ManausEMBRAPA</span>"},
URL: "ManausEMBRAPA"
},
'Manaus' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: -2.59900,
longitude: -60.0390,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Manaus</span>"},
URL: "Manaus"
},
'ManilaObservatory' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 14.6350,
longitude: 121.078,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ManilaObservatory</span>"},
URL: "ManilaObservatory"
},
'Manus' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -2.06000,
longitude: 147.425,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Manus</span>"},
URL: "Manus"
},
'MarbellaSanPedro' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Maricopa</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Maricopa"
},
'Marseille' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.2820,
longitude: 5.38400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Marseille</span>"},
URL: "Marseille"
},
'MasdarInstitute' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.4420,
longitude: 54.6170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MasdarInstitute</span>"},
URL: "MasdarInstitute"
},
'MaunaLoa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 19.5390,
longitude: -155.578,
value: 3.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MaunaLoa</span><br/>Obs: 3.0 %/yr<br/>Mod: No Trend"},
URL: "MaunaLoa"
},
'MaunTower' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -19.9000,
longitude: 23.5500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MaunTower</span>"},
URL: "MaunTower"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 6.77600,
longitude: 73.1830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MCOHanimaadhoo</span>"},
URL: "MCOHanimaadhoo"
},
'MDScienceCenter' : {
latitude: 39.2830,
longitude: -76.6170,
value: -1.2,
tooltip: {content : "<span style=\"font-weight:bold;\">MDScienceCenter</span><br/>Obs: -1.2 %/yr<br/>Mod: -2.0 %/yr"},
URL: "MDScienceCenter"
},
'Medellin' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 6.26100,
longitude: -75.5780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Medellin</span>"},
URL: "Medellin"
},
'Merredin' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -31.4930,
longitude: 118.226,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Merredin</span>"},
URL: "Merredin"
},
'Messina' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.1970,
longitude: 15.5670,
value: -4.7,
tooltip: {content : "<span style=\"font-weight:bold;\">Messina</span><br/>Obs: -4.7 %/yr<br/>Mod: No Trend"},
URL: "Messina"
},
'MexicoCity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 19.3340,
longitude: -99.1820,
value: -1.3,
tooltip: {content : "<span style=\"font-weight:bold;\">MexicoCity</span><br/>Obs: -1.3 %/yr<br/>Mod: No Trend"},
URL: "MexicoCity"
},
'Mezaira' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.1450,
longitude: 53.7790,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Mezaira</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Mezaira"
},
'Mfuwe' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -13.2570,
longitude: 31.9310,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Mfuwe</span>"},
URL: "Mfuwe"
},
'MidwayIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 28.2100,
longitude: -177.378,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MidwayIsland</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
'Mingo' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 36.9720,
longitude: -90.1430,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Mingo</span>"},
URL: "Mingo"
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Minsk</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.6320,
longitude: 10.9450,
value: -6.5,
tooltip: {content : "<span style=\"font-weight:bold;\">Modena</span><br/>Obs: -6.5 %/yr<br/>Mod: No Trend"},
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
'MonguInn' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -15.2670,
longitude: 23.1340,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MonguInn</span>"},
URL: "MonguInn"
},
'Mongu' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -15.2540,
longitude: 23.1510,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Mongu</span><br/>Obs: No Trend<br/>Mod: 2.3 %/yr"},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 42.6720,
longitude: 9.43500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MontesoroBastia</span>"},
URL: "MontesoroBastia"
},
'MontJoli' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 48.6400,
longitude: -68.1560,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MontJoli</span>"},
URL: "MontJoli"
},
'Montsec' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: -4.3,
tooltip: {content : "<span style=\"font-weight:bold;\">MoscowMSUMO</span><br/>Obs: -4.3 %/yr<br/>Mod: No Trend"},
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
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.7830,
longitude: -82.2930,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MountGibbes</span>"},
URL: "MountGibbes"
},
'Mukdahan' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 16.6070,
longitude: 104.676,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Mukdahan</span><br/>Obs: No Trend<br/>Mod: -2.2 %/yr"},
URL: "Mukdahan"
},
'MunichMaisach' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 48.2090,
longitude: 11.2580,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MunichMaisach</span>"},
URL: "MunichMaisach"
},
'MunichUniversity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 48.1480,
longitude: 11.5730,
value: -7.4,
tooltip: {content : "<span style=\"font-weight:bold;\">MunichUniversity</span><br/>Obs: -7.4 %/yr<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.6060,
longitude: 58.4360,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Muscat</span>"},
URL: "Muscat"
},
'Mussafa' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 41.3000,
longitude: -70.5500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">MVCO</span>"},
URL: "MVCO"
},
'Mwinilunga' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -11.7400,
longitude: 24.4310,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Mwinilunga</span>"},
URL: "Mwinilunga"
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
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.6880,
longitude: 135.828,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Nara</span>"},
URL: "Nara"
},
'Narsarsuaq' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 61.1560,
longitude: -45.4190,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Narsarsuaq</span>"},
URL: "Narsarsuaq"
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
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.1050,
longitude: -76.3790,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NASALaRC</span>"},
URL: "NASALaRC"
},
'Nauru' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -0.521000,
longitude: 166.916,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Nauru</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Nauru"
},
'NCUTaiwan' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.9670,
longitude: 121.192,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NCUTaiwan</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
'Ndola' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -12.9950,
longitude: 28.6580,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ndola</span>"},
URL: "Ndola"
},
'NEON17SJER' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.0900,
longitude: -119.722,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEON17SJER</span>"},
URL: "NEON17SJER"
},
'NEONBoulder' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.0080,
longitude: -105.268,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONBoulder</span>"},
URL: "NEONBoulder"
},
'NEONCPER' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.8120,
longitude: -104.744,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONCPER</span>"},
URL: "NEONCPER"
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
attrs:{stroke:col4,"stroke-width":2.5},
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
'NEONHQ' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.0160,
longitude: -105.247,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONHQ</span>"},
URL: "NEONHQ"
},
'NEONIvanpah' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.5510,
longitude: -115.382,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONIvanpah</span>"},
URL: "NEONIvanpah"
},
'NEONRailroadValley' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.4970,
longitude: -115.691,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONRailroadValley</span>"},
URL: "NEONRailroadValley"
},
'NEONSoaprootSaddle' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.0370,
longitude: -119.281,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NEONSoaprootSaddle</span>"},
URL: "NEONSoaprootSaddle"
},
'NesZiona' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 31.9220,
longitude: 34.7890,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NesZiona</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col6,"stroke-width":2.5},
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
'Niabrara' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 42.7650,
longitude: -100.020,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Niabrara</span>"},
URL: "Niabrara"
},
'Niamey' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 13.4810,
longitude: 2.17200,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Niamey</span>"},
URL: "Niamey"
},
'NicelliAirport' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.4260,
longitude: 12.3820,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NicelliAirport</span>"},
URL: "NicelliAirport"
},
'NorfolkStateUniv' : {
attrs:{stroke:col5,"stroke-width":2.5},
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
'Noumea' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -22.3020,
longitude: 166.444,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Noumea</span>"},
URL: "Noumea"
},
'NSAYJPBOREAS' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 55.9030,
longitude: -98.2900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NSAYJPBOREAS</span>"},
URL: "NSAYJPBOREAS"
},
'NUIST' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.2060,
longitude: 118.717,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NUIST</span>"},
URL: "NUIST"
},
'NWChapelHill' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.9710,
longitude: -79.0930,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NWChapelHill</span>"},
URL: "NWChapelHill"
},
'NyAlesund' : {
attrs:{stroke:col1,"stroke-width":2.5},
latitude: 78.9290,
longitude: 11.8610,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">NyAlesund</span>"},
URL: "NyAlesund"
},
'OBERNAI' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 48.4430,
longitude: 7.54300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OBERNAI</span>"},
URL: "OBERNAI"
},
'OceolaNF' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 30.2050,
longitude: -82.4430,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OceolaNF</span>"},
URL: "OceolaNF"
},
'OHPOBSERVATOIRE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.9350,
longitude: 5.71000,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OHPOBSERVATOIRE</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "OHPOBSERVATOIRE"
},
'OkefenokeeNWR' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 30.7410,
longitude: -82.1290,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OkefenokeeNWR</span>"},
URL: "OkefenokeeNWR"
},
'Okinawa' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 26.3570,
longitude: 127.768,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Okinawa</span>"},
URL: "Okinawa"
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
attrs:{stroke:col6,"stroke-width":2.5},
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
value: -3.2,
tooltip: {content : "<span style=\"font-weight:bold;\">Oostende</span><br/>Obs: -3.2 %/yr<br/>Mod: No Trend"},
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
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 29.6980,
longitude: -81.9880,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OrdwaySwisher</span>"},
URL: "OrdwaySwisher"
},
'ORSHermosillo' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 29.0270,
longitude: -111.146,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ORSHermosillo</span>"},
URL: "ORSHermosillo"
},
'OsakaNorth' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.7740,
longitude: 135.510,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">OsakaNorth</span>"},
URL: "OsakaNorth"
},
'Osaka' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 34.6510,
longitude: 135.591,
value: -3.2,
tooltip: {content : "<span style=\"font-weight:bold;\">Osaka</span><br/>Obs: -3.2 %/yr<br/>Mod: -1.5 %/yr"},
URL: "Osaka"
},
'Ouagadougou' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 12.2000,
longitude: -1.40000,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ouagadougou</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Ouagadougou"
},
'Ouarzazate' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 30.9280,
longitude: -6.91300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ouarzazate</span>"},
URL: "Ouarzazate"
},
'Oujda' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.6530,
longitude: -1.89900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Oujda</span>"},
URL: "Oujda"
},
'Oukaimeden' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 31.2140,
longitude: -7.88100,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Oukaimeden</span>"},
URL: "Oukaimeden"
},
'Oyster' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.2950,
longitude: -75.9330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Oyster</span>"},
URL: "Oyster"
},
'Paardefontein' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -25.4960,
longitude: 28.3750,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Paardefontein</span>"},
URL: "Paardefontein"
},
'Paddockwood' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 53.5000,
longitude: -105.500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Paddockwood</span>"},
URL: "Paddockwood"
},
'Palaiseau' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 48.7000,
longitude: 2.20800,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Palaiseau</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 41.9890,
longitude: -4.51600,
value: -2.2,
tooltip: {content : "<span style=\"font-weight:bold;\">Palencia</span><br/>Obs: -2.2 %/yr<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 48.8670,
longitude: 2.33300,
value: -5.8,
tooltip: {content : "<span style=\"font-weight:bold;\">Paris</span><br/>Obs: -5.8 %/yr<br/>Mod: No Trend"},
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
'PennStateUniv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.7420,
longitude: -78.0810,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PennStateUniv</span>"},
URL: "PennStateUniv"
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
'Philadelphia' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.0360,
longitude: -75.0050,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Philadelphia</span>"},
URL: "Philadelphia"
},
'PickleLake' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 51.4490,
longitude: -90.2180,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PickleLake</span><br/>Obs: No Trend<br/>Mod: -2.7 %/yr"},
URL: "PickleLake"
},
'Pietersburg' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -23.8830,
longitude: 29.4500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Pietersburg</span>"},
URL: "Pietersburg"
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
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
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
'PotosiMine' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -9.28300,
longitude: -62.8670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">PotosiMine</span>"},
URL: "PotosiMine"
},
'Praia' : {
attrs:{stroke:col6,"stroke-width":2.5},
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
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 32.3700,
longitude: -64.6960,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ProspectHill</span>"},
URL: "ProspectHill"
},
'Puli' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.9690,
longitude: 120.967,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Puli</span>"},
URL: "Puli"
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
attrs:{stroke:col6,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RaggedPoint</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "RaggedPoint"
},
'RailroadValley' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.5040,
longitude: -115.962,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RailroadValley</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "RailroadValley"
},
'RameHead' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 50.3660,
longitude: -4.14900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RameHead</span>"},
URL: "RameHead"
},
'RasElAin' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 31.6700,
longitude: -7.59900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RasElAin</span>"},
URL: "RasElAin"
},
'Realtor' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.4860,
longitude: 5.38400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Realtor</span>"},
URL: "Realtor"
},
'RedMountainPass' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.9080,
longitude: -107.725,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RedMountainPass</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "RedMountainPass"
},
'RedRiverDelta' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 20.7290,
longitude: 106.128,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RedRiverDelta</span>"},
URL: "RedRiverDelta"
},
'ResoluteBay' : {
attrs:{stroke:col3,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">REUNIONSTDENIS</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RioBranco</span><br/>Obs: No Trend<br/>Mod: -5.6 %/yr"},
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
'Rochester' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.2340,
longitude: -77.5860,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Rochester</span>"},
URL: "Rochester"
},
'RogersDryLake' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.9260,
longitude: -117.885,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RogersDryLake</span>"},
URL: "RogersDryLake"
},
'RomeTorVergata' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 41.8400,
longitude: 12.6470,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RomeTorVergata</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "RomeTorVergata"
},
'RooseveltRoads' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 18.2000,
longitude: -65.6000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">RooseveltRoads</span>"},
URL: "RooseveltRoads"
},
'Rossfeld' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 31.6260,
longitude: -8.15600,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Saada</span><br/>Obs: No Trend<br/>Mod: -3.0 %/yr"},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.8290,
longitude: 55.3130,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SaihSalam</span>"},
URL: "SaihSalam"
},
'SaintMandrier' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.0670,
longitude: 5.94400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SaintMandrier</span>"},
URL: "SaintMandrier"
},
'SalondeProvence' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
'SandyHook' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.4480,
longitude: -73.9930,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SandyHook</span>"},
URL: "SandyHook"
},
'SanGiuliano' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 28.4730,
longitude: -16.2470,
value: -5.9,
tooltip: {content : "<span style=\"font-weight:bold;\">SantaCruzTenerife</span><br/>Obs: -5.9 %/yr<br/>Mod: -2.7 %/yr"},
URL: "SantaCruzTenerife"
},
'SANTACRUZ' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -17.8020,
longitude: -63.1780,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SANTACRUZ</span><br/>Obs: No Trend<br/>Mod: -4.9 %/yr"},
URL: "SANTACRUZ"
},
'SANTACRUZUTEPSA' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -17.7670,
longitude: -63.2010,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SANTACRUZUTEPSA</span>"},
URL: "SANTACRUZUTEPSA"
},
'SantaMonicaColg' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.0170,
longitude: -118.471,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SantaMonicaColg</span>"},
URL: "SantaMonicaColg"
},
'Santarem' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: -2.43300,
longitude: -54.7500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Santarem</span>"},
URL: "Santarem"
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SaoPaulo</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "SaoPaulo"
},
'SaturnIsland' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 48.7830,
longitude: -123.133,
value: 5.4,
tooltip: {content : "<span style=\"font-weight:bold;\">SaturnIsland</span><br/>Obs: 5.4 %/yr<br/>Mod: No Trend"},
URL: "SaturnIsland"
},
'SEARCHCentreville2' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 32.9030,
longitude: -87.2500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SEARCHCentreville2</span>"},
URL: "SEARCHCentreville2"
},
'SEARCHCentreville' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 32.9030,
longitude: -87.2500,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SEARCHCentreville</span>"},
URL: "SEARCHCentreville"
},
'SEARCHOLF' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 30.5500,
longitude: -87.3750,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SEARCHOLF</span>"},
URL: "SEARCHOLF"
},
'SEARCHYorkville' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 33.9280,
longitude: -85.0460,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SEARCHYorkville</span>"},
URL: "SEARCHYorkville"
},
'SEDEBOKER' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 30.8550,
longitude: 34.7820,
value: -0.8,
tooltip: {content : "<span style=\"font-weight:bold;\">SEDEBOKER</span><br/>Obs: -0.8 %/yr<br/>Mod: No Trend"},
URL: "SEDEBOKER"
},
'Senanga' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -16.1090,
longitude: 23.2930,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Senanga</span>"},
URL: "Senanga"
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
latitude: 38.8830,
longitude: -76.5000,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SERC</span><br/>Obs: No Trend<br/>Mod: -2.0 %/yr"},
URL: "SERC"
},
'Sesheke' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -17.4810,
longitude: 24.3040,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Sesheke</span>"},
URL: "Sesheke"
},
'Sevastopol' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 44.6160,
longitude: 33.5170,
value: -2.2,
tooltip: {content : "<span style=\"font-weight:bold;\">Sevastopol</span><br/>Obs: -2.2 %/yr<br/>Mod: No Trend"},
URL: "Sevastopol"
},
'Sevilleta' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.3550,
longitude: -106.885,
value: -1.8,
tooltip: {content : "<span style=\"font-weight:bold;\">Sevilleta</span><br/>Obs: -1.8 %/yr<br/>Mod: No Trend"},
URL: "Sevilleta"
},
'Seysses' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.5030,
longitude: 1.26000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Seysses</span>"},
URL: "Seysses"
},
'Shelton' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 40.7500,
longitude: -98.7600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Shelton</span>"},
URL: "Shelton"
},
'Shirahama' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 33.6930,
longitude: 135.357,
value: -1.9,
tooltip: {content : "<span style=\"font-weight:bold;\">Shirahama</span><br/>Obs: -1.9 %/yr<br/>Mod: No Trend"},
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
'SigmaSpaceCorp' : {
latitude: 38.9530,
longitude: -76.8360,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SigmaSpaceCorp</span>"},
URL: "SigmaSpaceCorp"
},
'SilpakornUniv' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 13.8190,
longitude: 100.041,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SilpakornUniv</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "SilpakornUniv"
},
'Singapore' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 1.29800,
longitude: 103.780,
value: 19.4,
tooltip: {content : "<span style=\"font-weight:bold;\">Singapore</span><br/>Obs: 19.4 %/yr<br/>Mod: No Trend"},
URL: "Singapore"
},
'SiouxFalls' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.7360,
longitude: -96.6260,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SiouxFalls</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "SiouxFalls"
},
'SiouxFallsX' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.7360,
longitude: -96.6260,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SiouxFallsX</span>"},
URL: "SiouxFallsX"
},
'SirBuNuair' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 25.2170,
longitude: 54.2330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SirBuNuair</span>"},
URL: "SirBuNuair"
},
'SKUKUZAAEROPORT' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -24.9690,
longitude: 31.5930,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SKUKUZAAEROPORT</span>"},
URL: "SKUKUZAAEROPORT"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.2490,
longitude: 55.6120,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SMARTPOL</span>"},
URL: "SMARTPOL"
},
'SMART' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 24.9070,
longitude: 46.3970,
value: 2.1,
tooltip: {content : "<span style=\"font-weight:bold;\">SolarVillage</span><br/>Obs: 2.1 %/yr<br/>Mod: No Trend"},
URL: "SolarVillage"
},
'Solwezi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -12.1710,
longitude: 26.3630,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Solwezi</span>"},
URL: "Solwezi"
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
attrs:{stroke:col6,"stroke-width":2.5},
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
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -89.9960,
longitude: 70.3000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SouthPoleObsNOAA</span>"},
URL: "SouthPoleObsNOAA"
},
'SPBayboro' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 27.7620,
longitude: -82.6330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SPBayboro</span>"},
URL: "SPBayboro"
},
'SSAYJPBOREAS' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 53.6750,
longitude: -104.650,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SSAYJPBOREAS</span>"},
URL: "SSAYJPBOREAS"
},
'SSOJPBOREAS' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 53.9160,
longitude: -104.690,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SSOJPBOREAS</span>"},
URL: "SSOJPBOREAS"
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
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 30.3680,
longitude: -89.6170,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Stennis</span>"},
URL: "Stennis"
},
'Sterling' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 38.9830,
longitude: -77.4670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Sterling</span>"},
URL: "Sterling"
},
'StLouisUniversity' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 38.6360,
longitude: -90.2320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">StLouisUniversity</span>"},
URL: "StLouisUniversity"
},
'SuaPan' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: -20.5330,
longitude: 26.0670,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">SuaPan</span>"},
URL: "SuaPan"
},
'Suffield' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 50.2820,
longitude: -111.131,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Suffield</span>"},
URL: "Suffield"
},
'Surinam' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 5.80000,
longitude: -55.2000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Surinam</span>"},
URL: "Surinam"
},
'Swakopmund' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -22.6580,
longitude: 14.5640,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Swakopmund</span>"},
URL: "Swakopmund"
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 37.0910,
longitude: -2.35800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TabernasPSADLR</span>"},
URL: "TabernasPSADLR"
},
'TABLEMOUNTAINCA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 34.3800,
longitude: -117.680,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TABLEMOUNTAINCA</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tahiti</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Tahiti"
},
'Taichung' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Taihu</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Taihu"
},
'TaipeiCWB' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 25.0300,
longitude: 121.500,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TaipeiCWB</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "TaipeiCWB"
},
'Tallahassee' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 30.4460,
longitude: -84.2990,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tallahassee</span>"},
URL: "Tallahassee"
},
'TamanrassetINM' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 22.7900,
longitude: 5.53000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TamanrassetINM</span>"},
URL: "TamanrassetINM"
},
'TamanrassetTMP' : {
attrs:{stroke:col6,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 22.2780,
longitude: -97.8640,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TampicoMAXMEX</span>"},
URL: "TampicoMAXMEX"
},
'Tarbes' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 43.2500,
longitude: 0.0830000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tarbes</span>"},
URL: "Tarbes"
},
'Tenerife' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 28.0330,
longitude: -16.6330,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tenerife</span>"},
URL: "Tenerife"
},
'Tenosique' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 17.4880,
longitude: -91.4260,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tenosique</span>"},
URL: "Tenosique"
},
'THALA' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 35.5500,
longitude: 8.68300,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">THALA</span>"},
URL: "THALA"
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
value: -4.8,
tooltip: {content : "<span style=\"font-weight:bold;\">Thessaloniki</span><br/>Obs: -4.8 %/yr<br/>Mod: No Trend"},
URL: "Thessaloniki"
},
'ThompsonFarm' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Thompson</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 71.5870,
longitude: 128.921,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tiksi</span>"},
URL: "Tiksi"
},
'Timisoara' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TingaTingana</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "TingaTingana"
},
'TiziOuzou' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tomsk</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Tomsk"
},
'TonopahAirport' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: -5.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Toravere</span><br/>Obs: -5.0 %/yr<br/>Mod: No Trend"},
URL: "Toravere"
},
'Toronto' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.9700,
longitude: -79.4700,
value: -3.6,
tooltip: {content : "<span style=\"font-weight:bold;\">Toronto</span><br/>Obs: -3.6 %/yr<br/>Mod: No Trend"},
URL: "Toronto"
},
'Toulon' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.1360,
longitude: 6.00900,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Toulon</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Toulon"
},
'Toulouse' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.5750,
longitude: 1.37400,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Toulouse</span>"},
URL: "Toulouse"
},
'TOULOUSE' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.5620,
longitude: 1.47600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TOULOUSE</span>"},
URL: "TOULOUSE"
},
'Trelew' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -43.2500,
longitude: -65.3090,
value: 26.7,
tooltip: {content : "<span style=\"font-weight:bold;\">Trelew</span><br/>Obs: 26.7 %/yr<br/>Mod: No Trend"},
URL: "Trelew"
},
'Tremiti' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TrinidadHead</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 32.2640,
longitude: -64.8790,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">TudorHill</span>"},
URL: "TudorHill"
},
'Tukurui' : {
attrs:{stroke:col7,"stroke-width":2.5},
latitude: -3.71700,
longitude: -49.6830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Tukurui</span>"},
URL: "Tukurui"
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
latitude: 34.7250,
longitude: -86.6450,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UAHuntsville</span>"},
URL: "UAHuntsville"
},
'Uberlandia' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -18.9000,
longitude: -48.2830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Uberlandia</span>"},
URL: "Uberlandia"
},
'UbonRatchathani' : {
attrs:{stroke:col6,"stroke-width":2.5},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UCSB</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "UCSB"
},
'UHCoastalCenter' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 29.3880,
longitude: -95.0430,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UHCoastalCenter</span>"},
URL: "UHCoastalCenter"
},
'Ulaangom' : {
attrs:{stroke:col2,"stroke-width":2.5},
latitude: 49.9730,
longitude: 92.0780,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ulaangom</span>"},
URL: "Ulaangom"
},
'UMBC' : {
latitude: 39.2550,
longitude: -76.7090,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UMBC</span>"},
URL: "UMBC"
},
'UmmAlQuwain' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 25.5330,
longitude: 55.6580,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UmmAlQuwain</span>"},
URL: "UmmAlQuwain"
},
'UNCBogota' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 4.63700,
longitude: -74.0810,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UNCBogota</span>"},
URL: "UNCBogota"
},
'UnivofHouston' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 29.7180,
longitude: -95.3420,
value: -4.8,
tooltip: {content : "<span style=\"font-weight:bold;\">UnivofHouston</span><br/>Obs: -4.8 %/yr<br/>Mod: -1.7 %/yr"},
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
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 43.0720,
longitude: -89.4110,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UofWisconsinSSEC</span>"},
URL: "UofWisconsinSSEC"
},
'UpperBuffalo' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.8260,
longitude: -93.2030,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">UpperBuffalo</span>"},
URL: "UpperBuffalo"
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
latitude: 39.0310,
longitude: -76.9320,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">USDABARC</span>"},
URL: "USDABARC"
},
'USDAHoward' : {
latitude: 39.0540,
longitude: -76.8770,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">USDAHoward</span>"},
URL: "USDAHoward"
},
'USDA' : {
latitude: 39.0300,
longitude: -76.8800,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">USDA</span>"},
URL: "USDA"
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Ussuriysk</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Ussuriysk"
},
'Valladolid' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 41.6640,
longitude: -4.70600,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Valladolid</span>"},
URL: "Valladolid"
},
'Venise' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.3140,
longitude: 12.5080,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Venise</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Venise"
},
'Vientiane' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 17.9920,
longitude: 102.570,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Vientiane</span>"},
URL: "Vientiane"
},
'Villefranche' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.6840,
longitude: 7.32900,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Villefranche</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Villefranche"
},
'Vinon' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 43.7090,
longitude: 5.75900,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Vinon</span>"},
URL: "Vinon"
},
'Vishkhapatnam' : {
attrs:{stroke:col1,"stroke-width":2.5},
latitude: 17.7240,
longitude: 83.3270,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Vishkhapatnam</span>"},
URL: "Vishkhapatnam"
},
'WalkerBranch' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 35.9580,
longitude: -84.2870,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">WalkerBranch</span>"},
URL: "WalkerBranch"
},
'Wallops' : {
attrs:{stroke:col5,"stroke-width":2.5},
latitude: 37.9420,
longitude: -75.4750,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Wallops</span><br/>Obs: No Trend<br/>Mod: -1.5 %/yr"},
URL: "Wallops"
},
'Waskesiu' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 53.9170,
longitude: -106.083,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Waskesiu</span><br/>Obs: No Trend<br/>Mod: No Trend"},
URL: "Waskesiu"
},
'WaveCISSiteCSI6' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 28.8670,
longitude: -90.4830,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">WaveCISSiteCSI6</span>"},
URL: "WaveCISSiteCSI6"
},
'WhiteSalmon' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.7670,
longitude: -121.513,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">WhiteSalmon</span>"},
URL: "WhiteSalmon"
},
'WhiteSandsHELSTF' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 32.6350,
longitude: -106.338,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">WhiteSandsHELSTF</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 61.6620,
longitude: 129.367,
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Yakutsk</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
value: 0.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Yekaterinburg</span><br/>Obs: No Trend<br/>Mod: No Trend"},
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
'Yevpatoria' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 45.2150,
longitude: 33.1420,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Yevpatoria</span>"},
URL: "Yevpatoria"
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
'Yushan' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.4890,
longitude: 120.952,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Yushan</span>"},
URL: "Yushan"
},
'Zambezi' : {
attrs:{stroke:col4,"stroke-width":2.5},
latitude: -13.5330,
longitude: 23.1070,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">Zambezi</span>"},
URL: "Zambezi"
},
'Zaragoza' : {
attrs:{stroke:col4,"stroke-width":2.5},
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
attrs:{stroke:col4,"stroke-width":2.5},
latitude: 23.0600,
longitude: 113.390,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ZhongshanUniv</span>"},
URL: "ZhongshanUniv"
},
'ZinderAirport' : {
attrs:{stroke:col6,"stroke-width":2.5},
latitude: 13.7770,
longitude: 8.99000,
value: -99.0,
tooltip: {content : "<span style=\"font-weight:bold;\">ZinderAirport</span>"},
URL: "ZinderAirport"
},
'ZinderDMN' : {
attrs:{stroke:col6,"stroke-width":2.5},
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

			siz1 = 15  / (1 + 0.25 * zoomLevel);
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
			
