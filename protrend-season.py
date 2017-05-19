#!/usr/bin/python3.2
#pro trend: trend in vertical profiles

sig=0.90
ndps=10 #days per season

import sys
path, site, param, yrmin, yrmax, nmkmin = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4]), int(sys.argv[5]), int(sys.argv[6])

#path, site, param, yrmin, yrmax, nmkmin = '/metno/aerocom/work/aerocom1/AEROCOM_OBSDATA/Export/Earlinet/data/', 'le', 'e532', 2002, 2012, 7


#required modules
import numpy as np
from scipy.stats import nanmean
from scipy.stats import kendalltau
from scipy.stats.mstats import theilslopes
import time
from datetime import datetime


#parameters=['Extinction', 'ErrorExtinction', 'Backscatter', 'ErrorBackscatter']
if param == 'e355' or param == 'e532' or param == 'e1064':
    parameter = 'Extinction'
if param == 'b355' or param == 'b532' or param == 'b1064':
    parameter = 'Backscatter'


import subprocess
import shlex
#list of the files in the station directory (look into each year subdir)
full_fil=[]
if param == 'e355' or param == 'e532' or param == 'e1064':
    parameter = 'Extinction'
if param == 'b355' or param == 'b532' or param == 'b1064':
    parameter = 'Backscatter'
for yr in range(yrmin,yrmax+1):
	path2 = path + site + '/' + 'f' + str(yr) + '/'
	process = subprocess.Popen("ls " + path2 + " | grep " + param,shell=True,stdout=subprocess.PIPE,)
	stdout_list = process.communicate()[0]
	ascii_out = stdout_list.decode("utf-8")
	listf=ascii_out.split('\n')
	
	for fil in listf[0:len(listf)-1]:
		full_fil.append(path2 + fil)


#read each file of the list and append into arrays
stations, lats, lons, eles, dates, starttimes, stoptimes, zs, mvar = [], [], [], [], [], [], [], [], []

#zgrid
zmin, zmax, dz = 0, 20000, 100
zgrid=np.arange(zmin, zmax, dz)

from read_EARLINET import read_EARLINET
for fil in full_fil:
	[station, lat, lon, ele, date, starttime, stoptime, z, var] = read_EARLINET( fil , parameter, zgrid )
	dates.append(date)
	mvar.append(var)

if param == 'e355' or param == 'e532' or param == 'e1064' or param == 'b355' or param == 'b532' or param == 'b1064':
	#extinction in km-1
	mvar=np.array(mvar)
	mvar = np.multiply(mvar,1000)

#monthly averages
yyyy, mm, yyyymm, m_mvar = [], [], [], []
m_yyyy = []
for date in dates:
	date = str(date)
	yyyymm.append(date[:6])
	yyyy.append(date[:4])
	mm.append(date[4:6])

#unique months
u, indices = np.unique(yyyymm, return_index=True)

for month in u:
	idx = []
	k = 0
	for m in yyyymm:
		if m == month:
			idx.append(k)
		k = k + 1
	m_avg=np.nanmean(mvar[idx,:], axis=0) #avg alt. by alt.
	m_mvar.append(m_avg)
	m_yyyy.append(yyyy[idx[0]])	

#analysis per season for yearly averages
import time
from datetime import datetime
years=np.arange(yrmin,yrmax+1)


seasons=['spring','summer','autumn','winter']
taus, pvals, spyrs = [], [], []
for season in seasons:
	#mdatasok=[]
	sdatas, sdatasok, sodsok = [], [], []

	if season == 'spring':
		mis=[3,4,5]
	if season == 'summer':
		mis=[6,7,8]
	if season == 'autumn':
		mis=[9,10,11]
	if season == 'winter':
		mis=[12,1,2]

	for y in years:
		cur_sdatas = []
		for i in range(0,len(dates)):
			if (int(yyyy[i])==y and int(mm[i]) in mis):
				#put vars of the season in a list
				cur_sdatas.append(mvar[i,:])
		
		if len(cur_sdatas)>0:
			cur_sdatas=np.array(cur_sdatas)
			smean=np.nanmean(cur_sdatas[:,:], axis=0)
			smean=np.array(smean)
			# filter: min. number of measurements per season
			#if (avgtime=='daily'):
			#	if (len(cur_sdatas)>=ndps):
			#		sdatasok.append(smean)
			#		sdatas.append(smean)
			#	else:
			#		sdatasok.append(np.nan)
			#		sdatas.append(smean)
			#else: #monthly
			#	sdatasok.append(smean)
			#	sdatas.append(smean)
			sdatasok.append(smean)
			sdatas.append(smean)
		else:
			#no seasonal data
			nanmat = np.nan*np.ones(len(zgrid))
			sdatasok.append(nanmat)
			sdatas.append(nanmat)


	# - - - - - - - - - - - - - - - - - - - - - - - 
	#statistics - on which paramater to focus for trends analysis: ratio between altitudes?
	# - - - - - - - - - - - - - - - - - - - - - - - 
	# just to plot on the map: 
	tau, pval, spyr = float('NaN'), float('NaN'), float('NaN')
	#listing of statistics
	taus.append(tau), pvals.append(pval), spyrs.append(spyr)



	#plotting
	import matplotlib.pyplot as plt
	import matplotlib.dates as mdates

	#vertical axis
	import math
	from datetime import datetime
	xmin, xmax = datetime.toordinal(datetime(yrmin,1,1)), datetime.toordinal(datetime(yrmax,12,31))
	if param=='e355':
		xlab=r"${\sigma_ {ext,355}\ (km^{-1})}$"	
		ylab=r"${Altitude_{AGL}\ (km)}$"
		xax_fmt="%3.2f"
		xspace=0.1
		xmin, xmax = 0, 0.8
		ymin, ymax = 0, 10
	if param=='e532':
		xlab=r"${\sigma_ {ext,532}\ (km^{-1})}$"	
		ylab=r"${Altitude_{AGL}\ (km)}$"
		xax_fmt="%3.2f"
		xspace=0.1
		xmin, xmax = 0, 0.4
		ymin, ymax = 0, 10
	if param=='e1064':
		xlab=r"${\sigma_ {ext,1064}\ (km^{-1})}$"	
		ylab=r"${Altitude_{AGL}\ (km)}$"
		xax_fmt="%3.2f"
		xspace=0.2
		xmin, xmax = 0, 0.2
		ymin, ymax = 0, 10
	if param=='b355':
		xlab=r"${\beta_ {355}\ (km^{-1}.sr^{-1})}$"
		ylab=r"${Altitude_{AGL}\ (km)}$"
		xax_fmt="%3.2f"
		xspace=0.1
		xmin, xmax = 0, 0.8/50
		ymin, ymax = 0, 10
	if param=='b532':
		xlab=r"${\beta_ {532}\ (km^{-1}.sr^{-1r^{-1})}$"
		ylab=r"${Altitude_{AGL}\ (km)}$"
		xax_fmt="%3.2f"
		xspace=0.1
		xmin, xmax = 0, 0.4/50
		ymin, ymax = 0, 10
	if param=='b1064':
		xlab=r"${\beta_ {1064}\ (km^{-1}.sr^{-1})}$"
		ylab=r"${Altitude_{AGL}\ (km)}$"
		xax_fmt="%3.2f"
		xspace=0.2
		xmin, xmax = 0, 0.2/50
		ymin, ymax = 0, 10


	#plot
	from pylab import *
	figure(num=None, figsize=(7.0, 2.50), dpi=120, facecolor='w', edgecolor='k')
	ax=gca();


	#font
	plt.rcParams['text.usetex'] = False
	plt.rc('ytick', labelsize=9)
	plt.rcParams['font.family']='Arial'
	plt.rcParams.update({'font.size': 9})
	plt.rcParams['xtick.labelsize'] = 9


	#monthly
	i=0
	for y in m_yyyy:
		#monthly average
		l1 = plt.plot(np.add(int(y),np.multiply(mvar[i,:],(1/xmax))),z*1e-3,color="#2b2d39", linestyle='-', linewidth=0.5, alpha=0.20, zorder=1)
		i = i + 1

	i=0
	for y in years:
		#yearly average
		sdatas=np.array(sdatas)
		sdatasok=np.array(sdatasok)
		l2 = plt.plot(np.add(int(y),np.multiply(sdatas[i,:],(1/xmax))),z*1e-3,color="#2b2d39", linestyle='-', linewidth=1.5, alpha=0.35,zorder=2)
		#yearly ok average
		l3 = plt.plot(np.add(int(y),np.multiply(sdatasok[i,:],(1/xmax))),z*1e-3,color="#2b2d39", linestyle='-', linewidth=2.5, alpha=0.6,zorder=3)
		i = i + 1


	#add title
	ax.set_title(station+' - '+season,bbox=dict(facecolor='white', alpha=0.0, linewidth=0),weight='normal',color='.32')

	#axis thickness
	for axis in ['top','bottom','left','right']:
		ax.spines[axis].set_linewidth(0.75)
		ax.spines[axis].set_zorder(10)

	#axis
	plt.ylabel(ylab,size=12,color='.32')
	xlim(yrmin,yrmax+1)
	ylim(ymin,ymax)
	plt.subplots_adjust(left=0.1, right=0.95, top=0.9, bottom=0.1)

	#plot year separator
	for y in years:
		plt.plot(y*np.ones(11),np.arange(11),color="#2b2d39", linestyle='-', linewidth=0.05, alpha=1,zorder=0)

	#move x ticks (center years)
	ax.get_xaxis().set_visible(False)
	fy=max(1,int(np.ceil((yrmax-yrmin)/15)))
	i=0
	sby=[0,-90,180,0] #pre space for ticks depending on fy [1,2,3,4]
	vecyear=np.linspace(yrmin,yrmax,1+yrmax-yrmin)

	yrpos=[]
	for y in years:
		yrpos.append(y+0.25)

	for y in vecyear:
		if i<len(vecyear):
			text(yrpos[i],ymin-0.075*(ymax-ymin),str(int(vecyear[i])),bbox=dict(facecolor='white', alpha=0.4, linewidth=0),size=10,color='.32')
		i=i+fy

	#grid
	ax.xaxis.grid(True,linestyle='-',color='.90',zorder=1)


	#add  variable axis (top right)
	xar, yar = yrmin, ymax-1
	plt.plot([xar,xar+1],[yar,yar],linestyle='-',linewidth=0.5,color='#2b2d39',alpha=1,zorder=10)
	plt.plot(xar+1,yar,linestyle='None',marker=5,color='#2b2d39',zorder=10)
	text(xar+0.05, yar-0.7,  r"${"+str(xmin)+"}$", fontsize=8,bbox=dict(facecolor='white', alpha=0.4, linewidth=0))
	text(xar+0.05, yar+0.3,  xlab, fontsize=9,bbox=dict(facecolor='white', alpha=0.4, linewidth=0))
	text(xar+1-0.30, yar-0.7, r"${"+str(xmax)+"}$", fontsize=8,bbox=dict(facecolor='white', alpha=0.4, linewidth=0))

	#recording of figure
	plt.savefig('fig/' + site + '_' + param + '_' + season + '_' + str(yrmin) + '-' + str(yrmax) + '.png', dpi=120)

#write in ascii file
f = open('out/' + site + '-' + param + '_seasons_' + str(int(yrmin)) + '-' + str(int(yrmax)) + '.txt', 'w')
stats=['MK_tau ','MK_pval','TS(%/y)']

#header
f.write('stats')
for season in seasons:
	f.write('\t'+season)
f.write('\n')


#stats writing
for stat in stats:
	if stat == stats[0]:
		curstat = taus
	if stat == stats[1]:
		curstat = pvals
	if stat == stats[2]:
		curstat = spyrs

	f.write(stat)
	i = 0
	for season in seasons:
		curst_stat="%5.4f" % curstat[i]
		f.write('\t'+curst_stat)
		i=i+1
	f.write('\n')
f.write(str(int(years[0]))+'\t'+str(int(years[-1]))+'\n')

f.close()
sys.exit()
