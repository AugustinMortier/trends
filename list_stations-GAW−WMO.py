#!/usr/bin/python3.2

import sys
if len(sys.argv)<2+1:
	print('2 arguments expected: path, parameter')
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

#reading file
fil='monthly_' + param + ".csv"
inpath=path + fil
print(inpath)

import csv
readCSV = csv.reader(open(inpath, encoding="ISO-8859-1"), delimiter=',')

# initialization
sites, lats, lons = [], [], []
i = 0
for row in readCSV:
	if i >1: # 1 header line
		if (param=='so4_precip'):
			site = row[0]
			lat = row[4]
			lon = row[5]
		if (param=='so2'):
			site = row[0]
			lat = row[4]
			lon = row[5]
		if (param=='so4_aero'):
			site = row[0]
			lat = row[4]
			lon = row[5]
		
		#put in lists if in period
		sites.append(site)
		lats.append(lat)
		lons.append(lon)
	i=i+1

#unique stations
u, indices = np.unique(sites,return_index=True)

#write list stations
f = open('./' + param + '_Stations.txt','w')

#header 
f.write('Name'+'\t'+'Lat'+'\t'+'Lon'+'\n')

# for each station, get the data and create the file
for i in indices:
	station=sites[i]
	latitude=lats[i]
	longitude=lons[i]

	# initialization
	station=station.replace(" ","") #remove white space
	station=station.replace("\\","") #remove backslash
	station=station.replace("'","") #remove '
	print(station)
	f.write(station+'\t'+latitude+'\t'+longitude+'\n')
f.close()


import sys
sys.exit()

