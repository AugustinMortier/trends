#!/usr/bin/python3.2

# function that reads an EARLINET file and extract parameters according to vertical grid
# input:	path+file
#			parameter
#			zgrid
# output:	station
#			coordinates (lat,lon,ele)
#			date
#			time: [start_time, end_time] (UT)
#			range, parameter
#
# A. Mortier - Metno - 01/20/2016

import netCDF4 #for netCDF reading
import numpy as np
import warnings

def read_EARLINET( pathfile , parameter , zgrid):
	#print('pathfile: ', pathfile)
	#print('parameter: ', parameter)

	nc = netCDF4.Dataset(pathfile)

	# global attributes
	#attrs = nc.ncattrs()
	station =  nc.getncattr('Location')
	lat = nc.getncattr('Latitude_degrees_north')
	lon = nc.getncattr('Longitude_degrees_east')
	ele = nc.getncattr('Altitude_meter_asl')
	date = nc.getncattr('StartDate')
	starttime = nc.getncattr('StartTime_UT')
	stoptime = nc.getncattr('StopTime_UT')

	#variables
	z = nc.variables['Altitude'][:]
	var = nc.variables[parameter][:]

	#VAR=[]
	#for parameter in parameters:
	#	var = nc.variables[parameter][:]
	#	#VAR[:,i] = var
	#	VAR.append(var)
	
	#regrid
	dz = zgrid[1] - zgrid[0]
	z = np.array(z)
	zi = np.arange(len(z)) #index of z
	
	vargrid=[]
	for iz in zgrid:
		idx = zi[(z >= iz-dz) & (z < iz+dz)]
		#print('is: ',iz,'idx: ',idx)
		with warnings.catch_warnings():
			warnings.simplefilter("ignore", category=RuntimeWarning)
			vargrid.append(np.nanmean(var[idx]))
	
	#flag
	vargrid=np.array(vargrid)
	if np.nansum(vargrid)!=0:
		vargrid[vargrid>1000]=np.nan
		vargrid[vargrid<=-99]=np.nan
	

	return [station, lat, lon, ele, date, starttime, stoptime,  zgrid, vargrid]







