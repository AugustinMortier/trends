#!/usr/bin/python2.7

path = '/lustre/storeB/project/aerocom/aerocom1/AEROCOM_OBSDATA/Export/AERONETSun2.0/'
params=['od550aer','ang4487aer']

#required modules
import numpy as np
from scipy.stats import nanmean
from scipy.stats import kendalltau
from scipy.stats.mstats import theilslopes
import time
from datetime import datetime

#for param in params:
for param in params:
    filparam=param

    #check all the files that satisfy criteria
    freq='daily'

    from os import listdir
    from os.path import isfile, join
    files = [f for f in listdir(path) if isfile(join(path, f))]

    #filter on criteria
    import re
    filesok = []
    for i, fil in enumerate(files):
        if re.search(param+'_'+freq,fil):
            if not re.search('.swp',fil):
                filesok.append(fil)

    #read all the files (iName, lat)
    import csv
    names, lats, lons = [], [], []
    for fil in filesok:
        print fil
        #the delimiter of the first lines is :
        readCSV = csv.reader(open(path+fil), delimiter=':')
        for i, row in enumerate(readCSV):
            if i == 1:
                lat = row[1]
            if i == 2:
                lon = row[1]
            if i == 4:
                name = row[1]
                break
        names.append(name)
        lats.append(lat)
        lons.append(lon)


    #write list stations
    f = open( path + param + '_Stations.txt','w')
    #header 
    f.write('Name'+'\t'+'Lat'+'\t'+'Lon'+'\n')

    # for each station, get the data and create the file
    for i, name in enumerate(names):
        lat=lats[i]
        lon=lons[i]

        # initialization
        '''name=name.replace(" ","") #remove white space
        name=name.replace("\\","") #remove backslash
        name=name.replace("'","") #remove '''
        f.write(name+'\t'+lat+'\t'+lon+'\n')
    f.close()


import sys
sys.exit()
