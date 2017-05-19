#!/usr/bin/python3.2
#prepare files from Asmi dataset

path = '/lustre/storeB/project/aerocom/aerocom1/AEROCOM_OBSDATA/Export/GAW_ACTRIS/'
param  = 'NC'

#required modules
import numpy as np
from scipy.stats import nanmean
from scipy.stats import kendalltau
from scipy.stats.mstats import theilslopes
import time
from datetime import datetime

#Stations-definition reading file
import csv
readCSV = csv.reader(open(path+'/'+'Stations.txt'), delimiter='\t')
#init
i = 0
code, station, lat, lon = [], [], [], []
for row in readCSV:
	if(i>=1):
		code.append(row[0])
		station.append(row[1])
		lat.append(row[2])
		lon.append(row[3])
	i=i+1	

#list of files for parameter
import glob
listfile=sorted(glob.glob(path + '/' + "*.dat"))
# * * * * * * * * * * * * * * * * * * * * * * * *
#reduce list of code - coo to list of stations available for parameter
codeok, stationok, latok, lonok, = [], [], [], []
i=0
for c in code:
	for f in listfile:
		if (c  in f):
			codeok.append(code[i])
			stationok.append(station[i])
			latok.append(lat[i])
			lonok.append(lon[i])
	i = i + 1
# * * * * * * * * * * * * * * * * * * * * * * * *

#for the different sites, create formatted file
i=0
for f in listfile:
	print('****' + codeok[i]+' - '+f + '****')
	# initialization
	ods, year, month, day, data = [], [], [], [], []
	from datetime import date
	readCSV = csv.reader(open(f), delimiter='\t')
	for row in readCSV:
		if (codeok[i]=='DMPSMPZ' or codeok[i]=='DMPSPAL' or codeok[i]=='DMPSSMR' or codeok[i]=='DMPSVAR' or codeok[i]=='DMPSVHL'):
			tim, dat, dat2, dat3, flag=row[0].split()
			if (float(flag)==1):
				tim=int(np.floor(float(tim)))
				time=date.fromordinal(tim)
				t=time.timetuple()
				year.append(t[0])
				month.append(t[1])
				day.append(t[2])
				data.append(dat)
				ods.append(tim)
		else:
			tim, dat, flag=row[0].split()
			if (float(flag)==1):
				tim=int(np.floor(float(tim)))
				time=date.fromordinal(tim)
				t=time.timetuple()
				year.append(t[0])
				month.append(t[1])
				day.append(t[2])
				data.append(dat)
				ods.append(tim)
	

	#unique ordinal days
	odays,uidx=np.unique(ods,return_index=True)

	#for each unique oday, average data
	j=0
	okyear, okmonth, okday, okdata = [], [], [], []
	for uod in odays: # for the unique odays
		avg_data=[]
		k=uidx[j] #start from this index
		while(ods[k]==uod and k+1<len(ods)):
			avg_data.append(float(data[k]))	
			k=k+1
		if len(avg_data)>0:
			okdata.append(sum(avg_data)/len(avg_data))
			okday.append(day[k-1])
			okmonth.append(month[k-1])
			okyear.append(year[k-1])
		j=j+1

	#write of the file
	outfile=param+'_daily_' + stationok[i] + '.txt'
	f = open(path + '/' + outfile, 'w')
	print(path + '/' + outfile)

	#header 
	f.write('12'+'\n')
	f.write('Latitude:'+'\t'+latok[i]+'\n')
	f.write('Longitude:'+'\t'+lonok[i]+'\n')
	f.write('Altitude:'+'\t'+str(np.nan)+'\n')
	f.write('Station name:'+'\t'+stationok[i]+'\n')
	f.write('\n')
	f.write('\n')
	f.write('\n')
	f.write('\n')
	f.write('\n')
	f.write('datestring'+'\t'+'year'+'\t'+'month'+'\t'+'day'+'\t'+'hour'+'\t'+'minute'+'\t'+'second'+'\t'+'value'+'\n')
	k=0
	while k<len(okdata):
		f.write('datestring'+'\t'+str(okyear[k])+'\t'+str(okmonth[k])+'\t'+str(okday[k])+'\t'+'hour'+'\t'+'minute'+'\t'+'second'+'\t'+str(okdata[k])+'\t'+'\n')
		k=k+1
	f.close()

	i=i+1

import sys
sys.exit()

	
