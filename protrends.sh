#!/bin/bash

path='/metno/aerocom/work/aerocom1/AEROCOM_OBSDATA/Export/'

networks=('Earlinet')

for network in ${networks[@]}; do
	echo $network

	case "$network" in
	Earlinet)		params=('e355' 'e532' 'e1064' 'b355' 'b532' 'b1064') #params=('e532' 'e1064' 'b532' 'b1064')
					periods=('2002-2012' '2000-2014')
					models=('')
					;;
	esac
		

	for param in ${params[@]}; do
		echo $param
		#list of direc6tories only
		list=`ls -d $path$network'/data/'*/`

		for period in ${periods[@]}; do
			
			case "$period" in
			2002-2012)	yrmin=2002
						yrmax=2012
						nmkmin=7 #8
						;;
			2000-2014)	yrmin=2000
						yrmax=2014
						nmkmin=7 #8
						;;
			esac
			
			for line in $list; do
				echo $line
				site=`basename $line`
				
				#seasonly trends
				echo 'season - ' $period ' - ' $line
				./protrend-season.py $path$network'/data/' $site $param $yrmin $yrmax $nmkmin
				
				#yearly trends
				echo 'year - ' $period ' - ' $site
				./protrend-year.py $path$network'/data/' $site $param $yrmin $yrmax $nmkmin 
				
		#		for model in ${models[@]}; do
		#			#seasonly trends
		#			echo 'season - ' $period ' - ' $line '-' $model
		#			./trend-mod-season.py $path$network $model $site $param $yrmin $yrmax $nmkmin $time
		#			#yearly trends
		#			echo 'year - ' $period ' - ' $line '-' $model
		#			./trend-mod-year.py $path$network $model $site $param $yrmin $yrmax $nmkmin $time
		#		done #models loop
			done #line loop
			
			#scp figures to AEROCOM
			rsync -rtvu fig/ aerocom:/metno/aerocom_img/web/trends/fig/
		
		done #period loop
	done #param loop

done #network loop
			
