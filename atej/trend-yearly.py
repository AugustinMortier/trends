#!/usr/bin/python3.2
print("Mann-Kendall - Sen Slope for daily parameters")

#input reading
#site="Helgoland"
#param="od550aer"
sig=0.95
nmkmin=3
import sys
if len(sys.argv)<3+1:
	print('3 arguments expected: site, parameter')
	sys.exit()

path, site, param = sys.argv[1], sys.argv[2], sys.argv[3]
print(path, site, param)

#required modules
import numpy as np
from scipy.stats import kendalltau
from scipy.stats.mstats import theilslopes
import time
from datetime import datetime

#reading file
fil=param + "_daily_" + site + ".txt"
inpath=path + '/' + fil

import csv
readCSV = csv.reader(open(inpath), delimiter='\t')

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

#yearly averages
list_years=np.linspace(years[1],years[-1],1+years[-1]-years[1])

nmin=1 #min number of observatoins per year
ydatas, yyears, ydatasok, yyearsok = [], [], [], []
for year in list_years:
	cdatas=[]
	for i in range(1, len(datas)):
		if not np.isnan(datas[i]) and years[i]==year:
			cdatas.append(datas[i])
	if len(cdatas)>0:
		ydata=sum(cdatas)/float(len(cdatas))
		ydatas.append(ydata)
		yyears.append(year)
		if len(cdatas)>nmin:
			ydatasok.append(ydata)
			yyearsok.append(year)
	else:
		ydatas.append(np.nan)
		yyears.append(np.nan)


if len(ydatasok)==0:
	tau, pval, spyr = float('NaN'), float('NaN'), float('NaN')
else:
	X = yyearsok
	Y = ydatasok
	if len(ydatasok)>=nmkmin:
		#Mann-Kendall test
		[tau,pval]=kendalltau(X,Y)
		print(tau,pval)
		str_tau = "%5.4f" % tau
		str_pval = "%5.4f" % pval

		#theil slope
		res=theilslopes(Y,X,sig)
		reg=res[0]*np.asarray(X)+res[1]*np.ones(len(X))
		spyr=res[0] #per year
		str_a = "%5.4f" % spyr
		#str_b = "%3.2f" % res[1]
	else:
		tau, pval, spyr = float('NaN'), float('NaN'), float('NaN')


#plotting
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

#years to ordinal days
pyears, pyearsok = [], []
for year in yyears:
	pyears.append(datetime.toordinal(datetime(int(year),1,1)))
for year in yyearsok:
	pyearsok.append(datetime.toordinal(datetime(int(year),1,1)))

#vertical axis
import math
if param=='od550aer':
	ylab=r"${AOD_{550}}$"
	if not np.isnan(np.nanmax(mdatas)):
		ymin, ymax = 0, math.ceil(np.nanmax(mdatas)*10)/10
	else:
		ymin, ymax = 0, 1
	xmin, xmax = datetime.toordinal(datetime(2000,1,1)), datetime.toordinal(datetime(2011,12,31))

from pylab import *
figure(num=None, figsize=(10, 3), dpi=80, facecolor='w', edgecolor='k')
ax=gca();
	
#plot
fig = plt.plot_date(pyears,ydatas,color="#1f77b4", markersize=4.5, markeredgewidth=0.0, alpha=0.3)
if len(ydatasok)>0:
	plt.plot_date(pyearsok,ydatasok,color="#1f77b4", markersize=4.5, markeredgewidth=0.0, alpha=1.0)
plt.plot_date(pyears,ydatas,color="#1f77b4", linestyle='-', linewidth=2.3, markersize=0.0, markeredgewidth=0.0, alpha=0.2)
	
	
#add title
text(xmin+0.38*(xmax-xmin),ymin+1.02*(ymax-ymin),site + ' - yearly',bbox=dict(facecolor='white', alpha=0.0, linewidth=0))
	
#add legend
if len(ydatasok)>=nmkmin:
	if pval<=1-sig:
		plt.plot(pyearsok,reg, color="#ff7f0e",linewidth=2.6, alpha=0.7)
		text(xmin+0.01*(xmax-xmin),ymin+0.05*(ymax-ymin),'$\\bf{Mann-Kendall}$ ${\\tau=}$' + str_tau + ' p-value=' + str_pval + ' ' + '$\\bf{Trend}$' + ' (' + str(sig*100) + '%): '+ '${\\checkmark}$' + ' ' + '$\\bf{Theil\ Slope}$' + ' ' + str_a + '/yr',bbox=dict(facecolor='white', alpha=0.4, linewidth=0))
	else:
		text(xmin+0.01*(xmax-xmin),ymin+0.05*(ymax-ymin),'$\\bf{Mann-Kendall}$ ${\\tau=}$' + str_tau + ' p-value=' + str_pval + ' ' + '$\\bf{Trend}$' + ' (' + str(sig*100) + '%): '+ '$\\mathbf{\\times}$',bbox=dict(facecolor='white', alpha=0.4, linewidth=0))

#axis
plt.ylabel(ylab)
xlim(xmin,xmax)
ylim(ymin,ymax)
plt.subplots_adjust(left=0.1, right=0.95, top=0.9, bottom=0.1)
ax.xaxis.set_major_locator(mdates.YearLocator())
#plt.show()

#recording of figure
plt.savefig('fig/' + site + '_' + param + '_yearly.png', dpi=120)


#write in ascii file
f = open('out/' + site + '_' + param + '_yearly.txt', 'w')
stats=['MK_tau ','MK_pval','TS(/yr)']

#header
f.write('stats')
f.write('\n')

#stats writing
for stat in stats:
	if stat == 'MK_tau ':
		curstat = tau
	if stat == 'MK_pval':
		curstat = pval
	if stat == 'TS(/yr)':
		curstat = spyr
	
	f.write(stat)
	curst_stat="%5.4f" % curstat
	f.write('\t'+curst_stat)
	f.write('\n')

f.close()

sys.exit()

