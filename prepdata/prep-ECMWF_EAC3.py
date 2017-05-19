#!/usr/bin/python2.7
#prepare the montly files per station for CCI measurements
#/lustre/storeB/project/fou/kl/emep/People/svetlanat/PROJECTS/ECLIPSE/HIATUS/'
#Global.rv4_2873.2010_Emis1990_month.nc
#/lustre/storeB/project/aerocom/aerocom-users-database/ECMWF/ECMWF_EAC3/renamed
#ECMWF_EAC3.daily.od550aer.2004.nc

#required modules
import numpy as np
from scipy.stats import nanmean
from scipy.stats import kendalltau
from scipy.stats.mstats import theilslopes
import time
from datetime import datetime
import netCDF4 #for netCDF reading

path='/lustre/storeB/project/aerocom/aerocom-users-database/ECMWF/ECMWF_EAC3/renamed/'

param = 'od550aer'
model = 'ECMWF_EAC3'
years = np.arange(2003,2015+1)

#initialization
YYYY, MM, DD, VAR =[], [], [], []
for iy, year in enumerate(years):

    
    #read the netcdf file: sconcso4(time, lat, lon), time, lat lon
    fil=model+'.daily.'+param+'.'+str(year)+'.nc'
    ncfile = path + fil
    print(ncfile)
    nc = netCDF4.Dataset(ncfile)
    lat = nc.variables['lat'][:]
    lon = nc.variables['lon'][:]
    #   float sconcso4(time, lat, lon) ;
    var = nc.variables[param][:][:][:]

    time = np.arange(0,len(nc.dimensions['time']));

    #conversion 0|360 to -180|180
    for il,l in enumerate(lon):
        if l>180:
            lon[il]=lon[il]-360

    #clean dataset
    var=np.array(var)
    var[var=='--']=np.nan
    var[var=='_']=np.nan
    var[var==-999.]=np.nan
    #conversion time
    #days since 1995-1-1 0:0:0;
    from datetime import date, timedelta
    start = date(year,1,1)
    yyyy, mm, dd = [], [], []
    for t in time:
        delta = timedelta(int(t))
        ntime = start + np.array(delta)  
        yyyy.append(int(ntime.strftime('%Y')))
        mm.append(int(ntime.strftime('%m')))
        dd.append(int(ntime.strftime('%d')))

    #concatenate year results
    YYYY.extend(yyyy)
    MM.extend(mm)
    DD.extend(dd)
    LAT=lat
    LON=lon
    if iy==0:
        VAR=var
    else:
        VAR=np.append(VAR,var,axis=0)

    
    print(np.shape(YYYY),np.shape(MM),np.shape(DD))
    print(np.shape(VAR))
#reading stations file: so2: GAW_TAD_EANET: name and coordinates
pathstat='/lustre/storeB/project/aerocom/aerocom1/AEROCOM_OBSDATA/Export/AERONETSun2.0/'
statfile= pathstat + param + '_Stations.txt'

import csv
readCSV = csv.reader(open(statfile), delimiter='\t')

statname, statlat, statlon = [], [], []
i = 0
for row in readCSV:
    if i >1: # 1 header line
        statname.append(row[0])
        statlat.append(float(row[1]))
        statlon.append(float(row[2]))
    i += 1

for s, stat in enumerate(statname):
    #closest index
    ilat=np.abs(LAT-statlat[s]).argmin()
    ilon=np.abs(LON-statlon[s]).argmin()

    #maximum deviation: 1 degree

    print(statname[s]+' : '+str(ilat)+':'+str(ilon))
    #for each statoin in the list, pick the location and write the file


    outpath='/lustre/storeB/project/aerocom/aerocom1/AEROCOM_OBSDATA/Export/AERONETSun2.0-'+model+'/'
    #write of the file
    outfile=outpath + param + '_daily_' + statname[s] + '.txt'
    f = open(outfile, 'w')
    
    #header 
    f.write('12'+'\n')
    f.write('Latitude:'+'\t'+str(statlat[s])+'\n')
    f.write('Longitude:'+'\t'+str(statlon[s])+'\n')
    f.write('Altitude:'+'\t'+str(np.nan)+'\n')
    f.write('Station name:'+'\t'+statname[s]+'\n')
    f.write('\n')
    f.write('\n')
    f.write('\n')
    f.write('\n')
    f.write('\n')
    f.write('datestring'+'\t'+'year'+'\t'+'month'+'\t'+'day'+'\t'+'hour'+'\t'+'minute'+'\t'+'second'+'\t'+'value'+'\n')
    
    j=0
    #print line by line (month by month)
    for t, tim in enumerate(YYYY):
        #print(statname[s],yyyy[t],mm[t],param[t,ilat,ilon])
        if abs(LAT[ilat]-statlat[s])<=2 and abs(LON[ilon]-statlon[s])<=2:
            var=str(VAR[t,ilat,ilon])
        else:
            var='NaN'
        f.write('datestring'+'\t'+str(YYYY[t])+'\t'+str(MM[t])+'\t'+str(DD[t])+'\t'+'hour'+'\t'+'minute'+'\t'+'second'+'\t'+var+'\t'+'\n')
            
    f.close()
