#!/bin/bash

path='/lustre/storeB/project/aerocom/aerocom1/AEROCOM_OBSDATA/Export/'

networks=('AERONETSun2.0' 'GAW_TAD_EANET' 'GAW_IMPROVE' 'GAW_ACTRIS')
networks=('AERONETSun2.0')

for network in ${networks[@]}; do
	echo $network

	case "$network" in
	#AERONETSun2.0)	params=('ang4487aer' 'od550aer')
	AERONETSun2.0)	params=('od550aer')
			time='daily'
			periods=('2002-2012' '1995-2014')
			models=('')
		    ;;
	GAW_TAD_EANET)	params=('so4_precip' 'so2' 'so4_aero')
			time='monthly'
			periods=('2002-2012' '1995-2014' '1980-2013' '1990-2013' '2000-2013')
			periods=('1980-1990' '1990-2000' '2000-2010' '1980-2015')
			models=('')
		    ;;
	GAW_IMPROVE)	params=('SC' 'BC')
			time='daily'
			periods=('2002-2012' '1995-2014')
			models=('')
		    ;;
	GAW_ACTRIS)	params=('NC')
			time='daily'
			periods=('2002-2012' '1995-2014')
			models=('')
		    ;;
	EANET)		params=('so4_precip' 'so2' 'so4_aero')
			time='monthly'
			periods=('2002-2012' '1995-2014' '1980-2013' '1990-2013' '2000-2013')
			periods=('1980-1990' '1990-2000' '2000-2010' '1980-2015')
			models=('')
		    ;;
	esac
		
	
	release=$(cat data_release.txt | grep $network | cut -d ' ' -f 3)


	for param in ${params[@]}; do
		echo $param
		list=`ls $path$network | grep $param'_'$time'_'`
		#list=`ls $path$network | grep $param'_'$time'_' | grep 'Blida.txt'`
		lpara=`expr length $param`
		ltime=`expr length $time`
		beg=`expr $lpara + $ltime + 2 `
		echo $beg
		
		if [ "$param" = "od550aer" ]; then
			models=('ECMWF_EAC3' 'ECMWF' 'EMEP' 'EMEP_new' 'CCI_SU' 'CCI_ORAC' 'CCI_ADV')
			models=('CCI_SU' 'CCI_ORAC' 'CCI_ADV')
		fi

		for period in ${periods[@]}; do
		        yrmin=${period%-*}
                        yrmax=${period##*-}
                        nmkmin=7 
			case "$period" in
			2002-2012)	nmkmin=7 #8
				    ;;
			1995-2014)	nmkmin=7 #10
				    ;;
			1980-2013)	nmkmin=7 #10
				    ;;
			1990-2013)	nmkimn=7 #10
				    ;;
			2000-2013)	nmkmin=7 #10
				    ;;
			esac
			
			for line in $list; do
				end=`expr length $line`
				end=`expr $end - 4`
				len=`expr $end - $beg`
				site=${line:beg:len}
			        '''	
				#seasonly trends
				echo 'season - ' $period ' - ' $line
				./trend-season.py $path$network $site $param $yrmin $yrmax $nmkmin $time $release
				
				#yearly trends
				echo 'year - ' $period ' - ' $line ' - ' $release
				./trend-year.py $path$network $site $param $yrmin $yrmax $nmkmin $time $release
				'''
				for model in ${models[@]}; do
					#seasonly trends
					echo 'season - ' $period ' - ' $line '-' $model
					./trend-mod-season.py $path$network $model $site $param $yrmin $yrmax $nmkmin $time $release
					#yearly trends
					echo 'year - ' $period ' - ' $line '-' $model
					./trend-mod-year.py $path$network $model $site $param $yrmin $yrmax $nmkmin $time $release
				done #models loop
                                
			done #line loop
			
			#scp figures to AEROCOM
			rsync -rtvu fig/ /lustre/storeB/project/aerocom/aerocom_img/web/trends/fig/
		
		done #period loop
	done #param loop

done #network loop
			
