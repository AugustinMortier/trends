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
			change_img(elemOptions.URL,"2002-2012","od550aer","No Model");
			},
			mouseover: function (e, id, mapElem, textElem, elemOptions) {
			//change_img(elemOptions.URL,"2002-2012","od550aer","No Model");
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
			title: "AOD550 - winter averages - 2002-2012",
			mode: "horizontal",
			type: "circle",
			hideElemsOnClick: {
			opacity: 0,
			},
			slices: [{
			size: siz1,
			legendSpecificAttrs: {r: 7},
			min: -98,
			max: -4.0,
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
			
