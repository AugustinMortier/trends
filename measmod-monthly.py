#!/usr/bin/python3.2
print("Montly plot : measurements and model")

#input reading
#site="Helgoland"
#param="od550aer"
sig=0.95
nmkmin=3 #min number for statistics
import sys
if len(sys.argv)<2+1:
	print('3 arguments expected: site, model, parameter')
	sys.exit()

site, model, param = sys.argv[1], sys.argv[2], sys.argv[3]
print(site, model, param)

#required modules
import numpy as np
#from scipy.stats import kendalltau
#from scipy.stats.mstats import theilslopes
import time
from datetime import datetime


def reading(fil):
#reading file
	import csv
	readCSV = csv.reader(open(path + fil), delimiter='\t')

	# initialization
	dates, years, months, datas, odays = [], [], [], [], []
	i = 0
	for row in readCSV:
		if i == 0:
			lts = eval(row[0])-1
		if i == lts:
			year1 = eval(row[1])
		if i >= lts:
			date = row[0]
			year = row[1]
			month = row[2]
			day = row[3]
			data = row[7]
			#conversion ordinal day
			oday=datetime.toordinal(datetime(int(year),int(month),int(day)))	
			#put in lists
			dates.append(date)
			years.append(float(year))
			months.append(float(month))
			datas.append(float(data))
			odays.append(oday)
		i = i+1
	return(dates, years, months, datas, odays)
#end of reading function


path="data/"
i=0
for s in [site,site+'_'+model]:
	i=i+1
	fil=param + "_daily_" + s + ".txt"
	if i==1:
		[meas_dates, meas_years, meas_months, meas_datas, meas_odays] = reading(fil)
	elif i==2:
		[mod_dates, mod_years, mod_months, mod_datas, mod_odays] = reading(fil)

def monthlyavg(years, months, datas):
	#monthly averages for each year
	list_years=np.linspace(years[1],years[-1],1+years[-1]-years[1])
	list_months=np.linspace(1,12,12)

	nmin=1 #min number of observations per month
	mdatas, myears, mmonths, mods, mdatasok, myearsok, mmonthsok, modsok = [], [], [], [], [], [], [], []
	for year in list_years:
		for month in list_months:
			cdatas=[]
			for i in range(1, len(datas)):
				if not np.isnan(datas[i]) and years[i]==year and months[i]==month:
					cdatas.append(datas[i])
			if len(cdatas)>0:
				mdata=sum(cdatas)/float(len(cdatas))
				mdatas.append(mdata)
				myears.append(year)
				mmonths.append(month)
				mods.append(datetime.toordinal(datetime(int(year),int(month),1)))
				if len(cdatas)>nmin:
					mdatasok.append(mdata)
					myearsok.append(year)
					mmonthsok.append(month)
					modsok.append(datetime.toordinal(datetime(int(year),int(month),1)))
	return(mdatas, myears, mmonths, mods, mdatasok, myearsok, mmonthsok, modsok)
#end of monthlyavg function


for i in [1,2]:
	if i==1:
		[meas_mdatas, meas_myears, meas_mmonths, meas_mods, meas_mdatasok, meas_myearsok, meas_mmonthsok, meas_modsok ] = monthlyavg(meas_years, meas_months, meas_datas)
	elif i==2:
		[mod_mdatas, mod_myears, mod_mmonths, mod_mods, mod_mdatasok, mod_myearsok, mod_mmonthsok, mod_modsok ] = monthlyavg(mod_years, mod_months, mod_datas)


#analysis per season
seasons=['all']
taus, pvals, spyrs = [], [], []
for season in seasons:
	sdatasok, sodsok = [], []
	import time
	from datetime import datetime
	print(season)
	if season == 'all':
		mis=[1,2,3,4,5,6,7,8,9,10,11,12]
	if season == 'spring':
		mis=[3,4,5]
	if season == 'summer':
		mis=[6,7,8]
	if season == 'autumn':
		mis=[9,10,11]
	if season == 'winter':
		mis=[12,1,2]

#	for i in range(1,len(mdatasok)):
#		if mmonthsok[i] in mis:
#			#put vars of the season in a list
#			sdatasok.append(mdatasok[i])
#			sodsok.append(modsok[i])
#
#	if len(sdatasok)==0:
#		tau, pval, spyr = float('NaN'), float('NaN'), float('NaN')
#	else:
#		X = sodsok
#		Y = sdatasok
#		if len(sdatasok)>=nmkmin:
#			#Mann-Kendall test
#			[tau,pval]=kendalltau(X,Y)
#			print(tau,pval)
#			str_tau = "%5.4f" % tau
#			str_pval = "%5.4f" % pval
#
#			#theil slope
#			res=theilslopes(Y,X,sig)
#			reg=res[0]*np.asarray(X)+res[1]*np.ones(len(X))
#			spyr=res[0]*365 #per year
#			str_a = "%5.4f" % spyr
#			#str_b = "%3.2f" % res[1]
#		else:
#			tau, pval, spyr = float('NaN'), float('NaN'), float('NaN')
#
#	#listing of statistics
#	taus.append(tau), pvals.append(pval), spyrs.append(spyr)

	#plotting
	import matplotlib.pyplot as plt
	import matplotlib.dates as mdates

	#vertical axis
	import math
	if param=='od550aer':
		ylab=r"${AOD_{550}}$"
		ymin, ymax = 0, math.ceil(max(meas_mdatas)*10)/10
		xmin, xmax = datetime.toordinal(datetime(2000,1,1)), datetime.toordinal(datetime(2011,12,31))

	from pylab import *
	figure(num=None, figsize=(10, 3), dpi=80, facecolor='w', edgecolor='k')
	ax=gca();
	
	#plot
	fig = plt.plot_date(meas_mods,meas_mdatas,color="#1f77b4", markersize=4.5, markeredgewidth=0.0, alpha=0.3)
	if len(meas_mdatasok)>0:
		plt.plot_date(meas_modsok,meas_mdatasok,color="#1f77b4", markersize=4.5, markeredgewidth=0.0, alpha=1.0)
	plt.plot_date(meas_mods,meas_mdatas,color="#1f77b4", linestyle='-', linewidth=2.3, markersize=0.0, markeredgewidth=0.0, alpha=0.2)
	
	fig = plt.plot_date(mod_mods,mod_mdatas,color="#e93737", markersize=4.5, markeredgewidth=0.0, alpha=0.3)
	if len(mod_mdatasok)>0:
		plt.plot_date(mod_modsok,mod_mdatasok,color="#e93737", markersize=4.5, markeredgewidth=0.0, alpha=1.0)
	plt.plot_date(mod_mods,mod_mdatas,color="#e93737", linestyle='-', linewidth=2.3, markersize=0.0, markeredgewidth=0.0, alpha=0.2)
	
	#add title
	text(xmin+0.38*(xmax-xmin),ymin+1.02*(ymax-ymin),site + ' - ' + model + ' - monthly',bbox=dict(facecolor='white', alpha=0.0, linewidth=0))
	
	#add legend
	text(xmin+0.01*(xmax-xmin),ymin+0.05*(ymax-ymin),'$\\bf{Obs}$',bbox=dict(facecolor='white', alpha=0.4, linewidth=0),color="#1f77b4")
	text(xmin+0.06*(xmax-xmin),ymin+0.05*(ymax-ymin),'$\\bf{Model}$',bbox=dict(facecolor='white', alpha=0.4, linewidth=0),color="#e93737")
	#if len(sdatasok)>=nmkmin:
	#	if pval<=1-sig:
	#		plt.plot(modsok,reg, color="#ff7f0e",linewidth=2.6, alpha=0.7)
	#		text(xmin+0.01*(xmax-xmin),ymin+0.05*(ymax-ymin),'$\\bf{Mann-Kendall}$ ${\\tau=}$' + str_tau + ' p-value=' + str_pval + ' ' + '$\\bf{Trend}$' + ' (' + str(sig*100) + '%): '+ '${\\checkmark}$' + ' ' + '$\\bf{Theil\ Slope}$' + ' ' + str_a + '/yr',bbox=dict(facecolor='white', alpha=0.4, linewidth=0))
	#	else:
	#		text(xmin+0.01*(xmax-xmin),ymin+0.05*(ymax-ymin),'$\\bf{Mann-Kendall}$ ${\\tau=}$' + str_tau + ' p-value=' + str_pval + ' ' + '$\\bf{Trend}$' + ' (' + str(sig*100) + '%): '+ '$\\mathbf{\\times}$',bbox=dict(facecolor='white', alpha=0.4, linewidth=0))

	#axis
	plt.ylabel(ylab)
	xlim(xmin,xmax)
	ylim(ymin,ymax)
	plt.subplots_adjust(left=0.1, right=0.95, top=0.9, bottom=0.1)
	ax.xaxis.set_minor_locator(mdates.MonthLocator())
	ax.xaxis.set_major_locator(mdates.YearLocator())
	plt.show()

	#recording of figure
#	plt.savefig('fig/' + site + param + '-monthly-' + season + '.png', dpi=120)


#write in ascii file
#f = open('out/' + site + param + '-monthly.txt', 'w')
stats=['MK_tau ','MK_pval','TS(/yr)']

#header
#f.write('stats')
#for season in seasons:
#	f.write('\t'+season)
#f.write('\n')


#stats writing
for stat in stats:
	if stat == 'MK_tau ':
		curstat = taus
	if stat == 'MK_pval':
		curstat = pvals
	if stat == 'TS(/yr)':
		curstat = spyrs

#	f.write(stat)
	i = 0
	for season in seasons:
		curst_stat="%5.4f" % curstat[i]
#		f.write('\t'+curst_stat)
		i=i+1
#	f.write('\n')

#f.close()

sys.exit()

