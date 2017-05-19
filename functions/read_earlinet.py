#!/usr/bin/python3.2

#function that reads an EARLINET file and extract parameters
#input:  path+file
#		 parameter(s)
#output: station
#		 coordinates (lat,lon,ele)
#		 date
#		 time: [start_time, end_time] (UT)
#		 range, parameter(s)
		

import sys #for arguments
import numpy as np #for tables manipulation
import netCDF4 #for netCDF reading
import matplotlib.pyplot as plt

def read_EARLINET(pathfile,parameters):
    print('pathfile: ', pathfile)
    print('parameters: ', parameters)

	nc = netCDF4.Dataset(pathfile)
	station =  nc.attributes['Location']
	lat = nc.attributes['Latitude_degrees_north']
	lon = nc.attributes['Longitude_degrees_east']
	ele = nc.attributes['Altitude_meter_asl']
	date = nc.attributes['StartDate']
	time = nc.variables['time']
	
	z = nc.variables['Altitude'][:]
	
	jd = netCDF4.num2date(time[:], time.units)
	
	#initialize nan matrice (length(z),size(parameters))
	#VAR=
	i=0
	for parameter in parameters:
		var = nc.variables[variable][:]
		#VAR[:,i] = var
		VAR.append(var)
	return station, lat, lon, ele, date, time, z, VAR
