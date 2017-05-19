#!/bin/bash

path='/lustre/storeB/project/aerocom/aerocom1/AEROCOM_OBSDATA/Export/'

networks=('AERONETSun2.0' 'GAW_TAD_EANET' 'GAW_IMPROVE' 'GAW_ACTRIS')
networks=('AERONETSun2.0')

for network in ${networks[@]}; do
	echo $network

	case "$network" in
	AERONETSun2.0)	net='AERONET' #net name in the interface
					params=('ang4487aer' 'od550aer')
					params2=('AE' 'AOD550') #name in the interface
					params=('od550aer')
					params2=('AOD550') #name in the interface
					time='daily'
					periods=('2002-2012' '1995-2014')
					models=('ECMWF' 'EMEP' 'EMEP_new' 'CCI')
					models=('ECMWF_EAC3')
					;;
	GAW_TAD)		net='GAW_TAD'
					params=('so4_precip' 'so2' 'so4_aero')
					params2=('SO4wet' 'SO2' 'SO4aer')
					time='monthly'
					periods=('2002-2012' '1995-2014' '1980-2013' '1990-2013' '2000-2013')
					models=('')
					;;
	GAW_IMPROVE)	net='GAW_IMPROVE'
					params=('SC' 'BC')
					params2=('SC550' 'BC')
					time='daily'
					periods=('2002-2012' '1995-2014')
					models=('')
					;;
	GAW_ACTRIS)		net='GAW_IMPROVE'
					params=('NC')
					params2=('NC')
					time='daily'
					periods=('2002-2012' '1995-2014')
					models=('')
					;;
	Earlinet)		net='EARLINET'
					params=('e355' 'e532' 'e1064' 'b355' 'b532' 'b1064')
					params2=('Ext355' 'Ext532' 'Ext1064' 'Back355' 'Back532' 'Back1064')
					time='@'
					periods=('2002-2012' '2000-2014')
					models=('')
					;;
	GAW_TAD_EANET)			net='GAW_TAD_EANET'
					params=('so4_precip' 'so2' 'so4_aero')
					params2=('SO4wet' 'SO2' 'SO4aer')
					params=('so4_precip')
					params2=('SO4wet')
					time='monthly'
					periods=('2002-2012' '1995-2014' '1980-2013' '1990-2013' '2000-2013')
					models=('')
					;;
	esac


	for period in ${periods[@]}; do
		i=0
		for param in ${params[@]}; do
			echo $param
			
			#seasonly maps
			echo 'Season Maps'
			'''
                        if [ $network = "Earlinet" ]; then
				./maprep_trends_season.sh $network'/data/' $net $param $time $path $period ${params2[$i]}
			else
				./maprep_trends_season.sh $network $net $param $time $path $period ${params2[$i]}
			fi
			#yearly maps
			echo 'Year Maps'
			if [ $network = "Earlinet" ]; then
				./maprep_trends_year.sh $network'/data/' $net $param $time $path $period ${params2[$i]}
			else
				./maprep_trends_year.sh $network $net $param $time $path $period ${params2[$i]}
			fi
                        '''

			#models
			for model in ${models[@]}; do
				#seasonly maps
				echo 'Season Maps - '$model
				./maprep_trends_mod_season.sh $network $net $param $time $path $period ${params2[$i]} $model
				#yearly maps
				echo 'Year Maps - '$model
				./maprep_trends_mod_year.sh $network $net $param $time $path $period ${params2[$i]} $model
			done
			i=$((i + 1 ))
		done
	done

	#scp maps
	echo 'Map writing on AEROCOM'
	rsync -rtvu maps/ /lustre/storeB/project/aerocom/aerocom_img/web/trends/jQuery/trends_maps/
	rsync -rtvu maps/ /lustre/storeB/project/aerocom/aerocom_img/web/trends/jQuery/trends_maps_min/

done #networks loop
