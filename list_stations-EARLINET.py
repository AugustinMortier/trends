#!/usr/bin/python3.2
#write ascii files for each station/parameter with coordinates (Jan-like file)

#required modules
import numpy as np

#list of stations
stations=["ab", "at", "be", "ca", "co", "ev", "gr", "hp", "ju", "ku", "lc", "lk", "mi", "mu", "ne", "po", "sf", "an", "ba", "bu", "cl", "ct", "gp", "hh", "is", "kb", "la", "le", "ma", "ms", "na", "pl" ,"py", "th"]

params=["e355", "e532", "e1064", "b355", "b532", "b1064"]


#list of files for each station and open one
import os
from read_EARLINET import read_EARLINET
r = '/metno/aerocom/work/aerocom1/AEROCOM_OBSDATA/Export/Earlinet/data/'
pattern = ""

for station in stations:
	print(station)
	for param in params:
		j=0
		for path, subdirs, files in os.walk(r+station):
			for subdirname in subdirs:
				listf=os.listdir(r+'/'+station+'/'+subdirname)
				for fil in listf:
					if param in fil:
						j=j+1
						if j==1:
							fulfil=r+'/'+station+'/'+subdirname+'/'+fil
							print('found: ',fulfil)
							#create ascii files with coordinates

							#read netcdf file
							if param == 'e355' or 'e532' or param == 'e1064':
								parameter = 'Extinction'
							if param == 'b355' or 'b532' or param == 'b1064':
								parameter = 'Backscatter'
							
							zgrid=[0,100]
							[stat, lat, lon, ele, date, starttime, stoptime, z, var] = read_EARLINET( fulfil , parameter, zgrid )
							print(lat, lon)
							
							#e532_@_le.txt name of file

							#12
							#Latitude:   51.33
							#Longitude:  12.38
							#Altitude:   nan
							#Station name:   Leipzig


							f = open(r + param + '_' + '@' + '_' + station + '.txt','w')
							f.write('12'+'\n')
							f.write('Latitude: '+'\t'+str(lat)+'\n')
							f.write('Longitude: '+'\t'+str(lon)+'\n')
							f.write('Altitude: '+'\t'+str(ele)+'\n')
							f.write('Station name: '+'\t'+stat+'\n')
							f.write('\n')
							f.write('see Netcdf files for data')


							f.close()

sys.exit()




