#!/usr/bin/python3.4

path = '/lustre/storeB/project/aerocom/aerocom1/AEROCOM_OBSDATA/Export/EANET/'
params=['so2','so4_aero','so4_precip','so4_wet']

#required modules
import numpy as np
from scipy.stats import nanmean
from scipy.stats import kendalltau
from scipy.stats.mstats import theilslopes
import time
from datetime import datetime

for param in params:
    if param=='so4_wet':
        filparam='so4_precip'
    else:
        filparam=param

    #reading file
    fil='EANET_monthly_' + filparam + ".dat"
    inpath=path + fil
    print(inpath)

    import csv
    readCSV = csv.reader(open(inpath, encoding="ISO-8859-1"), delimiter=',')

    #indexes
    isite=0
    ilat,ilon=4,5

    # initialization
    sites, lats, lons = [], [], []
    i = 0
    for row in readCSV:
        if i >1: # 1 header line
            site = row[isite]
            lat = row[ilat]
            lon = row[ilon]
            
            #put in lists if in period
            sites.append(site)
            lats.append(lat)
            lons.append(lon)
        i=i+1

    #unique stations
    u, indices = np.unique(sites,return_index=True)

    #write list stations
    f = open( path + param + '_Stations.txt','w')

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

