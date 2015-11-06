#!/bin/bash

path='/metno/aerocom/work/aerocom1/AEROCOM_OBSDATA/Export/'

networks=('AERONETSun2.0' 'GAW_TAD' 'GAW_IMPROVE' 'GAW_ACTRIS')

for network in ${networks[@]}; do
	echo $network

	case "$network" in
	AERONETSun2.0)	params=('ang4487aer' 'od550aer')
					time='daily'
					periods=('2002-2012' '1995-2014')
					models=('ECMWF')
					;;
	GAW_TAD)		params=('so4_precip' 'so2' 'so4_aero')
					time='monthly'
					periods=('2002-2012' '1995-2014' '1980-2013' '1990-2013' '2000-2013')
					models=('')
					;;
	GAW_IMPROVE)	params=('SC' 'BC')
					time='daily'
					periods=('2002-2012' '1995-2014')
					models=('')
					;;
	GAW_ACTRIS)		params=('NC')
					time='daily'
					periods=('2002-2012' '1995-2014')
					models=('')
					;;
	esac
		

	for param in ${params[@]}; do
		echo $param
		list=`ls $path$network | grep $param'_'$time'_'`
		lpara=`expr length $param`
		ltime=`expr length $time`
		beg=`expr $lpara + $ltime + 2 `
		echo $beg

		for period in ${periods[@]}; do
			
			case "$period" in
			2002-2012)	yrmin=2002
						yrmax=2012
						nmkmin=7 #8
						;;
			1995-2014)	yrmin=1995
						yrmax=2014
						nmkmin=7 #10
						;;
			1980-2013)	yrmin=1980
						yrmax=2013
						nmkmin=7 #10
						;;
			1990-2013)	yrmin=1990
						yrmax=2013
						nmkmin=7 #10
						;;
			2000-2013)	yrmin=2000
						yrmax=2013
						nmkmin=7 #10
						;;
			esac
			
			for line in $list; do
				echo $line
				end=`expr length $line`
				end=`expr $end - 4`
				len=`expr $end - $beg`
				site=${line:beg:len}
				
				#seasonly trends
				#echo 'season - ' $period ' - ' $line
				#./trend-season.py $path$network $site $param $yrmin $yrmax $nmkmin $time
				
				#yearly trends
				#echo 'year - ' $period ' - ' $line
				#./trend-year.py $path$network $site $param $yrmin $yrmax $nmkmin $time
				
				for model in ${models[@]}; do
					#seasonly trends
					echo 'season - ' $period ' - ' $line '-' $model
					./trend-mod-season.py $path$network $model $site $param $yrmin $yrmax $nmkmin $time
					#yearly trends
					echo 'year - ' $period ' - ' $line '-' $model
					./trend-mod-year.py $path$network $model $site $param $yrmin $yrmax $nmkmin $time
				done #models loop
			done #line loop
			
			#scp figures to AEROCOM
			rsync -rtvu fig/ aerocom:/metno/aerocom_img/web/trends/fig/
		
		done #period loop
	done #param loop

done #network loop
