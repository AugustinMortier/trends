#!/usr/bin/python3.2

path = '/lustre/storeB/project/aerocom/aerocom1/AEROCOM_OBSDATA/Export/GAW_ACTRIS/'
params = ['SURF_ug_SO2','SURF_ug_SO4']

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

import csv
readCSV = csv.reader(open(inpath, encoding="UTF-8"), delimiter=',')

for p, param in enumerate(params):
    # initialization
    sites, lats, lons, years, months, datas = [], [], [], [], [], []
    i = 0
    for row in readCSV:
        if i >1: # 1 header line
            if (param=='so4_precip'):
                site = row[0]
                lat = row[4]
                lon = row[5]
                year = row[9]
                month = row[10]
                data = row[13]
            if (param=='so2'):
                site = row[0]
                lat = row[4]
                lon = row[5]
                year = row[9]
                month = row[10]
                data = row[11]
            if (param=='so4_aero'):
                site = row[0]
                lat = row[4]
                lon = row[5]
                year = row[9]
                month = row[10]
                data = row[11]
            
            #put in lists if in period
            sites.append(site)
            lats.append(lat)
            lons.append(lon)
            years.append(year)
            months.append(month)
            datas.append(data)
        i=i+1

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

