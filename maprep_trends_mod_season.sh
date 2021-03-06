#!/bin/bash

network=$1 #'AERONETSun2.0'
net=$2 #'AERONET' #net name in interface
param=$3 #'od550aer' #'ang4487aer' #'od550aer'
time=$4 #'daily'
path=$5 #'/metno/aerocom/work/aerocom1/AEROCOM_OBSDATA/Export/'
period=$6 #'2002-2012'
param2=$7
model=$8

declare -a seasons=('spring' 'summer' 'autumn' 'winter') #'spring' 
for season in "${seasons[@]}" 
	do
	
	#declare -a periods=('1995-2014' '2002-2012')
	#for period in "${periods[@]}" 
	#	do
		
		list=`ls $path$network | grep $param'_'$time'_'`
		lpara=`expr length $param`
		ltime=`expr length $time`
		beg=`expr $lpara + $ltime + 2 `
		echo $beg
		
		declare -a typs=('hover' 'click')
		for typ in "${typs[@]}"
			do	
			out='maps/worldmap_'$typ'_'$net'_'$param'_'$period'_'$season'_'$model'.js'

			#index of column in file
			if [ "$season" = "spring" ]; then
				ncol=1
			fi
			if [ "$season" = "summer" ]; then
				ncol=2
			fi
			if [ "$season" = "autumn" ]; then
				ncol=3
			fi
			if [ "$season" = "winter" ]; then
				ncol=4
			fi

			#comment hover if typ: click
			pref=''
			if [ "$typ" = "click" ]; then
				pref='//'
			fi

			#write header
			echo 'function worldmap(id){

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
			change_img(elemOptions.URL,"'$period'","'$param'","'$model'");
			},
			mouseover: function (e, id, mapElem, textElem, elemOptions) {
			'$pref'change_img(elemOptions.URL,"'$period'","'$param'","'$model'");
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
			title: "'$param2' Obs/'$model' - '$season' averages - '$period'",
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
			' >> $out


			for line in $list; do
				end=`expr length $line`
				end=`expr $end - 4`
				len=`expr $end - $beg`
				site=${line:beg:len}
				echo $param2 ' - ' $season ' - ' $period ' - ' $typ ' - ' $site

				l1=`cat $path$network'/'$line | head -6`
				read -a arr <<<$l1
				lat=${arr[2]}
				lon=${arr[4]}
				stt=${arr[8]}
				
				#echo './out/'$site'-'$param'_seasons_'$period'.txt'
				#read stat file
				if [ -a './out/'$site'-'$param'_seasons_'$period'.txt' ]; then
					l2=`cat './out/'$site'-'$param'_seasons_'$period'.txt' | head -4 | tail -2`	
					#l2=`cat './out/'$site'-'$param'_seasons_'$period'.txt' | tail -2`	
					read -a arr <<<$l2
					trend=${arr[$(($ncol + 5))]}

					#file can be empty
					#ltren=`expr length $trend`
					#if [ "$ltren" -gt 0 ];then
					if [ -n "$trend" ];then
						pval=$(expr ${arr[$ncol]}*10000 | bc)  #integer only!
						printf -v pval "%.0f\n" $pval
						pval=${pval::-1}
						if [ "$trend" = 'nan' ]; then
							trend=0
							trend=-99
						else
							#test sur pval: signifiance
							if [ "$pval" -gt 1000 ]; then
								trend=0
							fi
						fi
					else
						trend=-999
					fi
				else
					trend=-999
				fi
				
				#read stat file - MOD
				if [ -a './out/'$site'-'$param'_seasons_'$period'-'$model'.txt' ]; then
					l2=`cat './out/'$site'-'$param'_seasons_'$period'-'$model'.txt' | head -4 | tail -2`	
					read -a arr <<<$l2
					mod_trend=${arr[$(($ncol + 5))]}

					#file can be empty
					if [ -n "$mod_trend" ];then
						mod_pval=$(expr ${arr[$ncol]}*10000 | bc)  #integer only!
						printf -v mod_pval "%.0f\n" $mod_pval
						mod_pval=${mod_pval::-1}
						if [ "$mod_trend" = 'nan' ]; then
							mod_trend=0
							mod_trend=-99
						else
							#test sur pval: signifiance
							if [ "$mod_pval" -gt 1000 ]; then
								mod_trend=0
							fi
						fi
					else
						mod_trend=-999
					fi
				else
					mod_trend=-999
				fi
		
				#one decimal rounding
				printf -v trend "%.1f" $trend
				printf -v mod_trend "%.1f" $mod_trend
				
				itrend=$(expr ${trend}*10000 | bc)  #integer only!
				printf -v itrend "%.0f\n" $itrend
				itrend=${itrend::-1}
				mod_itrend=$(expr ${mod_trend}*10000 | bc)  #integer only!
				printf -v mod_itrend "%.0f\n" $mod_itrend
				mod_itrend=${mod_itrend::-1}
				#if site not empty
				if [ "$itrend" -ne -9990000 ]; then
					echo \'$site\' : { >>$out
					#echo 'type: "circle",' >>$out
					if  [ "$mod_itrend" -ne -990000 ] && [ "$mod_itrend" -ne -9990000 ]; then
						echo $mod_itrend	
						if [ "$mod_itrend" -ge 40000 ]; then
							echo 'attrs:{stroke:col1,"stroke-width":2.5},' >>$out
						fi
						if [ "$mod_itrend" -ge 20000 ] && [ "$mod_itrend" -lt 40000 ]; then
							echo 'attrs:{stroke:col2,"stroke-width":2.5},' >>$out
						fi
						if [ "$mod_itrend" -gt 0 ] && [ "$mod_itrend" -lt 20000 ]; then
							echo 'attrs:{stroke:col3,"stroke-width":2.5},' >>$out
						fi
						if [ "$mod_itrend" -eq 0 ]; then
							echo 'attrs:{stroke:col4,"stroke-width":2.5},' >>$out
						fi
						if [ "$mod_itrend" -gt -20000 ] && [ "$mod_itrend" -lt 0 ]; then
							echo 'attrs:{stroke:col5,"stroke-width":2.5},' >>$out
						fi
						if [ "$mod_itrend" -ge -40000 ] && [ "$mod_itrend" -lt -20000 ]; then
							echo 'attrs:{stroke:col6,"stroke-width":2.5},' >>$out
						fi
						if [ "$mod_itrend" -le -40000 ]; then
							echo 'attrs:{stroke:col7,"stroke-width":2.5},' >>$out
						fi
					fi
					if [ "$mod_itrend" -eq -990000 ]; then
						echo 'attrs:{stroke:col0m,"stroke-width":2.5},' >>$out
					fi
					echo 'latitude: '$lat',' >>$out
					echo 'longitude: '$lon',' >>$out
					echo 'value: '$trend',' >>$out
					if [ "$itrend" -ne 0 ] && [ "$itrend" -ne -990000 ] && [ "$itrend" -ne -9990000 ]; then
						if [ "$mod_itrend" -ne 0 ] && [ "$mod_itrend" -ne -990000 ] && [ "$mod_itrend" -ne -9990000 ]; then
							echo 'tooltip: {content : "<span style=\"font-weight:bold;\">'$site'</span><br/>Obs: '$trend' %/yr<br/>Mod: '$mod_trend' %/yr"},'>>$out
						else
							echo 'tooltip: {content : "<span style=\"font-weight:bold;\">'$site'</span><br/>Obs: '$trend' %/yr<br/>Mod: No Trend"},'>>$out
						fi
						if [ "$mod_itrend" -eq -990000 ] ; then
							echo 'tooltip: {content : "<span style=\"font-weight:bold;\">'$site'</span><br/>Obs: '$trend' %/yr<br/>Mod: <7 years"},'>>$out
					fi
					else
						if [ "$itrend" -eq -990000 ] || [ "$itrend" -eq -999000 ] ; then
							echo 'tooltip: {content : "<span style=\"font-weight:bold;\">'$site'</span>"},'>>$out
						else
							if [ "$mod_itrend" -ne 0 ] && [ "$mod_itrend" -ne -990000 ] && [ "$mod_itrend" -ne -9990000 ]; then
								echo 'tooltip: {content : "<span style=\"font-weight:bold;\">'$site'</span><br/>Obs: No Trend<br/>Mod: '$mod_trend' %/yr"},'>>$out
							else
								if [ "$mod_itrend" -eq -990000 ] ; then
									echo 'tooltip: {content : "<span style=\"font-weight:bold;\">'$site'</span><br/>Obs: No Trend<br/>Mod: <7 years"},'>>$out
								else
									echo 'tooltip: {content : "<span style=\"font-weight:bold;\">'$site'</span><br/>Obs: No Trend<br/>Mod: No Trend"},'>>$out
								fi
							fi
						fi
					fi
					#echo 'text : {content : ""},'>>$out
					echo 'URL: "'$site'"'>>$out
					echo '},'>>$out
				fi #site not empty

			done


			#end of js
			echo '},});
	
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
			' >>$out

			done #typs loop
		
#		done #periods loop

	done #season loop

