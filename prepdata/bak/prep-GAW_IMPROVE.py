#!/usr/bin/python3.2

import sys
if len(sys.argv)<2+1:
	print('2 arguments expected: path, param')
	sys.exit()

path, param  = sys.argv[1], sys.argv[2]

#print(path, site, param)

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
listfile=glob.glob(path + '/' + param + "*.csv")
#listfile=glob.glob(path + '/' + 'PSAP' + "*.csv")


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

print(codeok)
print(f)
# * * * * * * * * * * * * * * * * * * * * * * * *


i=0
#for the different sites, create formatted file
for f in listfile:
	# initialization
	j=0
	year, month, day, data = [], [], [], []
	
	readCSV = csv.reader(open(f), delimiter=';')
	for row in readCSV:
		if (j>=1):
			if (param=='SC'):
				year.append(row[0])
				month.append(row[1])
				day.append(row[2])
				if(codeok[i]=='JFJ'):
					data.append(float(row[10])*1e6) #SC_green
				else:
					data.append(float(row[10])) #SC_green
			if (param=='BC'):
				year.append(row[0])
				month.append(row[1])
				day.append(row[2])
				if(codeok[i]=='FNK' or codeok[i]=='NMY' or codeok[i]=='HPB' or codeok[i]=='MLO'):
					data.append(float(row[6])*1e3) #SC_green
				else:
					data.append(float(row[6])) #SC_green
					
		j=j+1	
	

	#write of the file
	outfile=param + '_daily_' + stationok[i] + '.txt'
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
	while k<len(data):
		f.write('datestring'+'\t'+year[k]+'\t'+month[k]+'\t'+day[k]+'\t'+'hour'+'\t'+'minute'+'\t'+'second'+'\t'+str(data[k])+'\t'+'\n')
		k=k+1
	f.close()

	i=i+1

import sys
sys.exit()

	





#unique stations
stations= np.unique(sites)

# for each station, get the data and create the file
for station in stations:
	# initialization
	ok_sites, ok_lats, ok_lons, ok_years, ok_months, ok_datas = [], [], [], [], [], []
	print(station)
	i=0
	while i < len(sites):
		if (sites[i]==station):
			ok_lats.append(lats[i])
			ok_lons.append(lons[i])
			ok_years.append(years[i])
			ok_months.append(months[i])
			ok_datas.append(datas[i])
		i=i+1

	station=station.replace(" ","") #remove white space
	station=station.replace("\\","") #remove backslash
	station=station.replace("'","") #remove '
	
	#write of the file
	outfile=param + '_monthly_' + station + '.txt'
	f = open(path + outfile, 'w')
	
	#header 
	f.write('12'+'\n')
	f.write('Latitude:'+'\t'+ok_lats[0]+'\n')
	f.write('Longitude:'+'\t'+ok_lons[0]+'\n')
	f.write('Altitude:'+'\t'+str(np.nan)+'\n')
	f.write('Station name:'+'\t'+station+'\n')
	f.write('\n')
	f.write('\n')
	f.write('\n')
	f.write('\n')
	f.write('\n')
	f.write('datestring'+'\t'+'year'+'\t'+'month'+'\t'+'day'+'\t'+'hour'+'\t'+'minute'+'\t'+'second'+'\t'+'value'+'\n')
	j=0
	while j<len(ok_datas):
		f.write('datestring'+'\t'+ok_years[j]+'\t'+ok_months[j]+'\t'+'day'+'\t'+'hour'+'\t'+'minute'+'\t'+'second'+'\t'+ok_datas[j]+'\t'+'\n')
		j=j+1
	f.close()


import sys
sys.exit()

