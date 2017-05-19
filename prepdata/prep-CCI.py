#!/usr/bin/python2.7
#prepare the montly files per station for CCI measurements
#/lustre/storeB/project/fou/kl/emep/People/svetlanat/PROJECTS/ECLIPSE/HIATUS/'
#Global.rv4_2873.2010_Emis1990_month.nc

#required modules
import numpy as np
from scipy.stats import nanmean
from scipy.stats import kendalltau
from scipy.stats.mstats import theilslopes
import time
from datetime import datetime
import netCDF4 #for netCDF reading

baspath='/lustre/storeB/project/aerocom/aerocom-users-database/CCI-Aerosol/CCI_AEROSOL_Phase2/'


param = 'od550aer'
model = 'CCI'
years = np.arange(1995,2012+1)

#initialization
YYYY, MM, DD, VAR =[], [], [], []
for iy, year in enumerate(years):

    if year<2003:
        sat='ATSR2_SU_v4.3'
    else:
        sat='AATSR_SU_v4.3'

    path=baspath+sat+'/renamed/'
    #read the netcdf file: sconcso4(time, lat, lon), time, lat lon
    fil='aerocom.'+sat+'.daily.'+param+'.'+str(year)+'.nc'
    ncfile = path + fil
    print(ncfile)
    nc = netCDF4.Dataset(ncfile)
    time = nc.variables['time'][:] #time:units = "days since 1900-01-01 00:00:00" ;
    lat = nc.variables['latitude'][:]
    lon = nc.variables['longitude'][:]
    #   float sconcso4(time, lat, lon) ;
    var = nc.variables[param][:][:][:]
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
