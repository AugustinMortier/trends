#!/bin/bash

path='/metno/aerocom/work/aerocom1/AEROCOM_OBSDATA/Export/'

networks=('AERONETSun2.0' 'GAW_TAD' 'GAW_IMPROVE' 'GAW_ACTRIS')
networks=('AERONETSun2.0')

for network in ${networks[@]}; do
	echo $network

	case "$network" in
	AERONETSun2.0)	net='AERONET' #net name in the interface
					params=('ang4487aer' 'od550aer')
					params2=('AE' 'AOD550') #name in the interface
					time='daily'
					periods=('2002-2012' '1995-2014')
					models=('')
					;;
	GAW_TAD)		net='GAW_TAD'
					params=('so4_precip' 'so2' 'so4_aero')
					params2=('SO4wet' 'SO2' 'SO4aer')
					time='monthly'
					periods=('2002-2012' '1995-2014' '1980-2013' '1990-2013' '2000-2013')
					;;
	GAW_IMPROVE)	net='GAW_IMPROVE'
					params=('SC' 'BC')
					params2=('SC550' 'BC')
					time='daily'
					periods=('2002-2012' '1995-2014')
					;;
	GAW_ACTRIS)		net='GAW_ACTRIS'
					params=('NC')
					params2=('NC')
					time='daily'
					periods=('2002-2012' '1995-2014')
					;;
	esac


	for period in ${periods[@]}; do
		i=0
		for param in ${params[@]}; do
			echo $param
			
			#seasonly maps
			echo 'Season Maps'
			./maprep_trends_season.sh $network $net $param $time $path $period ${params2[$i]}
			#yearly maps
			echo 'Year Maps'
			./maprep_trends_year.sh $network $net $param $time $path $period ${params2[$i]}
			i=$((i + 1 ))

			#models
			for model in ${models[@]}; do
				#seasonly maps
				echo 'Season Maps - '$model
				./maprep_trends_mod_season.sh $network $net $param $time $path $period ${params2[$i]} $model
				#yearly maps
				echo 'Year Maps - '$model
				./maprep_trends_mod_year.sh $network $net $param $time $path $period ${params2[$i]} $model
			done
		done
	done

	#scp maps
	echo 'Map writing on AEROCOM'
	rsync -rtvu maps/ aerocom:/metno/aerocom_img/web/trends/jQuery/trends_maps_work/

done #networks loop
