#!/bin/bash

path='/lustre/storeB/project/aerocom/aerocom1/AEROCOM_OBSDATA/Export/'
networks=('AERONETSun2.0' 'GAW_TAD' 'GAW_IMPROVE' 'GAW_ACTRIS' 'EANET')

rm data_release.txt

for network in ${networks[@]}; do
	echo $network
	#list=`ls  $path$network | grep $param'_'$time'_'`
	list=`ls $path$network'/' -1 -t | head -1`

	modate=`stat -c '%y' $path$network'/'$list | head -n1 | cut -d " " -f1`
	#modatefmt= $modate
	echo $modate
	
	echo $network $'\t' $modate >> data_release.txt 

done #network loop
		
