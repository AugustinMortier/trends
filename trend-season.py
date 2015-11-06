#!/usr/bin/python3.2
#print("Mann-Kendall - Sen Slope for monthly parameters")

#input reading
#site="Helgoland"
#param="od550aer"
sig=0.90
#yrmin, yrmax, nmkmin = 2002, 2012, 8
#yrmin, yrmax, nmkmin = 1995, 2014, 10
ndps=10 #days per season
ply='nop'
import sys
if len(sys.argv)<3+1:
	print('2 arguments expected: site, parameter')
	sys.exit()

path, site, param, yrmin, yrmax, nmkmin, avgtime = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4]), int(sys.argv[5]), int(sys.argv[6]), sys.argv[7]

#path, site, param, yrmin, yrmax, nmkmin, avgtime = '/metno/aerocom/work/aerocom1/AEROCOM_OBSDATA/Export/AERONETSun2.0', 'Dakar', 'od550aer', 1980, 2013, 7, 'daily'


#print(path, site, param)

#required modules
import numpy as np
from scipy.stats import nanmean
import time
from scipy.stats import kendalltau
from scipy.stats.mstats import theilslopes
from datetime import datetime

#reading file
fil=param + "_" + avgtime + "_" + site + ".txt"
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
		if avgtime=='daily':
			#conversion ordinal day
			oday=datetime.toordinal(datetime(int(year),int(month),int(day)))
		else:
			#conversion ordinal day
			oday=datetime.toordinal(datetime(int(year),int(month),int(1)))
		
		#put in lists if in period
		if float(year)>=yrmin and float(year)<=yrmax:
			dates.append(date)
			years.append(float(year))
			months.append(float(month))
			datas.append(float(data))
			odays.append(oday)
	i = i+1

if len(datas)>0:
	#monthly averages
	mdatas, mods, mmonths, myears = [], [], [], []
	for y in np.linspace(years[1],years[-1],1+years[-1]-years[1]):
		for m in np.linspace(1,12,12):
			cur_mdatas=[]
			mods.append(datetime.toordinal(datetime(int(y),int(m),1)))
			mmonths.append(int(m))
			myears.append(int(y))
			for i in range(1, len(datas)):  
				if not np.isnan(datas[i]) and years[i]==y and months[i]==m:
					cur_mdatas.append(datas[i])
			if len(cur_mdatas)>0:
				mdata=sum(cur_mdatas)/float(len(cur_mdatas))
				mdatas.append(mdata)
			else:
				mdatas.append(np.nan)

	#analysis per season
	seasons=['spring','summer','autumn','winter']
	taus, pvals, spyrs = [], [], []
	for season in seasons:
		tau, pval, spyr = float('NaN'), float('NaN'), float('NaN')
		X, Y, sdatas, sdatasok, sodsok = [], [], [], [], []
		lok=0
		mdatasok=[]

		import time
		from datetime import datetime
		print(season)
		#if season in ['all'] :
		#	mis=[1,2,3,4,5,6,7,8,9,10,11,12]
		if season == 'spring':
			mis=[3,4,5]
		if season == 'summer':
			mis=[6,7,8]
		if season == 'autumn':
			mis=[9,10,11]
		if season == 'winter':
			mis=[12,1,2]
		
		for y in np.linspace(years[1],years[-1],1+years[-1]-years[1]):
			cur_sdatas=[]
			sodok=datetime.toordinal(datetime(int(y),int(mis[1]),1))
			sodsok.append(sodok)
			for i in range(0,len(datas)):
				if years[i]==y and months[i] in mis and not np.isnan(datas[i]):
					#put vars of the season in a list
					cur_sdatas.append(datas[i])
			if len(cur_sdatas)>0:
				smean=sum(cur_sdatas)/float(len(cur_sdatas))
				if avgtime==('daily'):
					if len(cur_sdatas)>=ndps:
						sdatasok.append(smean)
						sdatas.append(smean)
						lok=lok+1
					else:
						sdatasok.append(np.nan)
						sdatas.append(smean)
				else: #monthly
					sdatasok.append(smean)
					sdatas.append(smean)
					lok=lok+1
			else:
				sdatasok.append(np.nan)
				sdatas.append(np.nan)

		for i in range(0,len(mdatas)):
			if mmonths[i] in mis:
				mdatasok.append(mdatas[i])
			else:
				mdatasok.append(np.nan)
		
		#statistics
		p_stat='no'
		if len(sdatasok)==0:
			tau, pval, spyr = float('NaN'), float('NaN'), float('NaN')
		else:
			x = sodsok
			y = sdatasok
			X, Y = [], []
			#only work with notnan values
			for i in range(0,len(x)):
				if not np.isnan(x[i]) and not np.isnan(y[i]):
					X.append(x[i])
					Y.append(y[i])

			if lok>=nmkmin:
				p_stat='yes'
				#Mann-Kendall test
				[tau,pval]=kendalltau(X,Y)
				print(tau,pval)

				#theil slope
				res=theilslopes(Y,X,sig)
				reg=res[0]*np.asarray(X)+res[1]*np.ones(len(X))
				regg=res[0]*np.asarray(mods)+res[1]*np.ones(len(mods))
				spyr=res[0]*365*100/reg[0] #% per year
				#str_b = "%3.2f" % res[1]
			else:
				tau, pval, spyr = float('NaN'), float('NaN'), float('NaN')
			str_tau = "%5.2f" % tau
			str_pval = "%5.4f" % pval
			str_a = "%4.1f" % spyr

		#listing of statistics
		taus.append(tau), pvals.append(pval), spyrs.append(spyr)

		#plotting
		import matplotlib.pyplot as plt
		import matplotlib.dates as mdates

		#vertical axis
		import math
		xmin, xmax = datetime.toordinal(datetime(yrmin,1,1)), datetime.toordinal(datetime(yrmax,12,31))
		if param=='od550aer':
			ylab=r"${AOD_{550}}$"
			yax_fmt="%3.2f"
			yspace=0.1
			if not np.isnan(np.nanmax(mdatas)):
				ymin, ymax = 0, math.ceil(np.nanmax(mdatas)*10)/10
			else:
				ymin, ymax = 0, 1
		if param=='ang4487aer':
			ylab=r"${AE_{440-870}}$"
			yax_fmt="%3.2f"
			yspace=0.2
			if not np.isnan(np.nanmax(mdatas)):
				ymin, ymax = 0, math.ceil(np.nanmax(mdatas)*10)/10
			else:
				ymin, ymax = 0, 2
		if param=='so4_precip':
			ylab="${SO4\ deposition\ (kgS/ha)}$"
			yax_fmt="%3.2f"
			yspace=0.1
			if not np.isnan(np.nanmax(mdatas)):
				ymin, ymax = 0, math.ceil(np.nanmax(mdatas)*10)/10
			else:
				ymin, ymax = 0, 2
		if param=='so4_aero':
			ylab="${SO4\ concentration\ (\mu gS/m^3)}$"
			yax_fmt="%3.2f"
			yspace=0.1
			if not np.isnan(np.nanmax(mdatas)):
				ymin, ymax = 0, math.ceil(np.nanmax(mdatas)*10)/10
			else:
				ymin, ymax = 0, 2
		if param=='so2':
			ylab="${SO2\ concentration\ (\mu gS/m^3)}$"
			yax_fmt="%3.2f"
			yspace=0.1
			if not np.isnan(np.nanmax(mdatas)):
				ymin, ymax = 0, math.ceil(np.nanmax(mdatas)*10)/10
			else:
				ymin, ymax = 0, 5
		if param=='SC':
			ylab="${Scattering\ Coefficient\ (Mm^{-1})}$"
			yax_fmt="%3.0f"
			yspace=1
			if not np.isnan(np.nanmax(mdatas)):
				ymin, ymax = 0, math.ceil(np.nanmax(mdatas)*10)/10
			else:
				ymin, ymax = 0, 50
		if param=='BC':
			ylab="${Black\ Carbon}$"
			yax_fmt="%3.2f"
			yspace=0.01
			if not np.isnan(np.nanmax(mdatas)):
				ymin, ymax = 0, math.ceil(np.nanmax(mdatas)*10)/10
			else:
				ymin, ymax = 0, 50
		if param=='NC': #Number Concentration
			ylab="${Number\ Concentration\ (cm^{-3})}$"
			yax_fmt="%5.0f"
			yspace=10
			if not np.isnan(np.nanmax(mdatas)):
				ymin, ymax = 0, math.ceil(np.nanmax(mdatas)*10)/10
			else:
				ymin, ymax = 0, 20000

		#check number of y
		ny=(ymax-ymin)/yspace
		while ny>10:
			yspace= 2 * yspace
			ny=(ymax-ymin)/yspace	

		yrpos=[]
		for y in np.linspace(yrmin,yrmax,1+yrmax-yrmin):
			yrpos.append(datetime.toordinal(datetime(int(y),3,15)))
		
		if ply=='yes':
			#plotly preparation
			from datetime import date
			md, sd = [], []
			for i in range(0,len(mdatas)):
				d=date(int(myears[i]), mmonths[i],1)
				md.append(d.isoformat())
			for i in range(0,len(sdatas)):
				d=date.fromordinal(sodsok[i])
				sd.append(d.isoformat())
			if yrmin==2002 and yrmax==2012:
				xlymin, xlymax= 1009839600000, 1356908400000 #unit ??
				preticks="                 "
			if yrmin==1995 and yrmax==2014:
				xlymin, xlymax= 788918400000, 1419984000000 #unit ??
				preticks="              "
			if yrmin==1980 and yrmax==2013:
				xlymin, xlymax= 315532800000, 1388361600000 #unit ??
				preticks="       "
			if yrmin==1990 and yrmax==2013:
				xlymin, xlymax= 631152000000, 1388361600000 #unit ??
				preticks="        "
			if yrmin==2000 and yrmax==2013:
				xlymin, xlymax= 946684800000, 1388361600000 #unit ??
				preticks="                "

		from pylab import *
		figure(num=None, figsize=(7.0, 2.50), dpi=120, facecolor='w', edgecolor='k')
		ax=gca();
		
		#plot
		#font
		plt.rcParams['text.usetex'] = False
		plt.rc('ytick', labelsize=10)
		plt.rcParams['font.family']='Arial'
		plt.rcParams.update({'font.size': 10})
		mpl.rcParams['xtick.labelsize'] = 10

		#monthly
		l1=plt.plot_date(mods,mdatas,fillstyle='none',markersize=4, markeredgewidth=0.5,markeredgecolor=matplotlib.colors.colorConverter.to_rgba('#1f77b4', alpha=.5),zorder=2)
		l2=plt.plot_date(mods,mdatasok,color="#1f77b4", markersize=4, markeredgewidth=0.0, alpha=0.5,zorder=3)
		l3=plt.plot_date(mods,mdatas,color="#1f77b4", linestyle='-', linewidth=0.5, markersize=0.0, markeredgewidth=0.0, alpha=0.1,zorder=4)
		#yearly
		l4=plt.plot_date(sodsok,sdatas,color="#1f77b4", markersize=9, markeredgewidth=0.0, alpha=0.35,zorder=5)
		if len(sdatasok)>0:
			l5=plt.plot_date(sodsok,sdatasok,color="#1f77b4", markersize=9, markeredgewidth=0.0, alpha=0.8,zorder=6)
		l6=plt.plot_date(sodsok,sdatasok,color="#1f77b4", linestyle='-', linewidth=3.0, markersize=0.0, markeredgewidth=0.0, alpha=0.6,zorder=7)

		#add title
		ax.set_title(site+' - '+season,bbox=dict(facecolor='white', alpha=0.0, linewidth=0),weight='normal',color='.32')

		#axis thickness
		for axis in ['top','bottom','left','right']:
			ax.spines[axis].set_linewidth(0.75)
			ax.spines[axis].set_zorder(10)

		#add legend
		if p_stat=='yes':
			if pval<=1-sig:
				l7=plt.plot(X,reg, color="#ff7f0e",linewidth=2.5, alpha=0.4,zorder=8)
				text(xmin+0.87*(xmax-xmin),ymin+0.85*(ymax-ymin),str_a + '%/yr',bbox=dict(facecolor='white', alpha=0.4, linewidth=0),color="#ff7f0e")

		#axis
		plt.ylabel(ylab,size=12,color='.32')
		xlim(xmin,xmax)
		ylim(ymin,ymax)
		plt.subplots_adjust(left=0.1, right=0.95, top=0.9, bottom=0.1)
		#frequency of years
		fy=max(1,int(np.ceil((yrmax-yrmin)/15)))
		ax.xaxis.set_major_locator(mdates.YearLocator(base=fy))
		ax.xaxis.set_minor_locator(mdates.YearLocator(base=1))
		plt.setp( ax.get_xticklabels(), visible=False)
		from matplotlib.ticker import FuncFormatter
		
		#move ticks
		i=0
		sby=[0,-90,180,0] #pre space for ticks depending on fy [1,2,3,4]
		vecyear=np.linspace(yrmin,yrmax,1+yrmax-yrmin)
		if yrmin==1980 and yrmax==2013:
			vecyear=vecyear[0:-1]
		for y in vecyear:
			if i<len(vecyear):
				text(yrpos[i]+sby[fy-1],ymin-0.075*(ymax-ymin),str(int(vecyear[i])),bbox=dict(facecolor='white', alpha=0.4, linewidth=0),size=10,color='.32')
			i=i+fy
		
		#grid
		ax.xaxis.grid(True,linestyle='-',color='.90',zorder=1)
		#plt.show()
		
		#colors
		ax.spines['bottom'].set_color('.32')
		ax.spines['top'].set_color('.32')
		ax.spines['left'].set_color('.32')
		ax.spines['right'].set_color('.32')
		ax.xaxis.label.set_color('.32')
		ax.tick_params(axis='x', colors='.32', size=0)
		ax.tick_params(axis='x', which='minor', size=1, colors='.64')
		ax.yaxis.label.set_color('.32')
		ax.tick_params(axis='y', colors='.32', size=3)
		
		#margins
		ax.yaxis.labelpad = 0
		plt.subplots_adjust(left=0.080, right=0.98, top=0.90, bottom=0.10)
	

		#recording of figure
		plt.savefig('fig/' + site + '_' + param + '_' + season + '_' + str(yrmin) + '-' + str(yrmax) + '.png', dpi=120)
		
		if ply=='yes':
			#plotly
			import plotly.plotly as py
			from plotly.graph_objs import *
			trace0 = Scatter(
				x=md,y=mdatas,mode='lines+markers',name='monthly',
				marker=Marker(
					color='rgba(31,119,180,0.3)',
					symbol= "circle-open"),
					line=Line(
					width=1,color='rgba(31,119,180,0.2)')
			)
			trace1 = Scatter(
				x=md,y=mdatasok,mode='markers',name='monthly-'+season,
				marker=Marker(
					color="rgba(31,119,180,0.6)")
			)
			trace2 = Scatter(
				x=sd,y=sdatasok,mode='lines+markers',name=season,
				marker=Marker(
					color="rgba(31,119,180,0.9)",size=15),
				line=Line(
					width=4.5,color="rgba(31,119,180,0.7)")
			)
			trace22 = Scatter(
				x=sd,y=sdatas,mode='markers',name=season,
				marker=Marker(
					color="rgba(31,119,180,0.4)",size=15),
				line=Line(
					width=4.5,color="rgba(31,119,180,0.7)")
			)
			tracet = Scatter(
				x=date.fromordinal(int(xmin+0.01*(xmax-xmin))),
				y=ymin+0.05*(ymax-ymin),
				name='Stats',
				mode='text',
				text=['$\\bf{Mann-Kendall}$ ${\\tau=}$' + str_tau + ' p-val=' + str_pval],
				textposition='top'
			)
			traceT = Scatter(
				x=date.fromordinal(int(xmin+0.01*(xmax-xmin))),
				y=ymin+0.05*(ymax-ymin),
				name='Stats',
				mode='text',
				text=['$\\bf{Mann-Kendall}$ ${\\tau=}$' + str_tau + ' p-val=' + str_pval + ' ' + '$\\bf{Theil\ Slope}$' + ' ' + str_a + '%/yr'],
				textposition='top'
			)
			
			if pval<=1-sig:
				trace3 = Scatter(
				x=md, y=regg, mode='lines',name='trend',
				line=Line(
				color="rgba(255,127,14,0.5)", width=4)
				)
				data = Data([trace0,trace1,trace2,trace3, trace22])
				layout=Layout(
					title=site + ' - ' + season, autosize=False,
					width=850,height=300,
					showlegend=False,
					margin=Margin(
						t=30,
						r=20,
						l=50,
						b=30,
					),
					annotations=Annotations([
						Annotation(
							xref="paper",
							yref="paper",
							x=0.95,
							y=0.90,
							text=str_a + '%/yr',
							showarrow=False,
							font=Font(
								size=16,
								color="rgba(255,127,14,0.8)",
								),
							bgcolor="rgba(255, 255, 255, 0.2)"
							),
					]),
					xaxis=XAxis(
						range=[xlymin, xlymax],
						autorange=False,
						showline=True,
						mirror='ticks',
						linewidth=1,
						nticks=20,
						tickprefix=preticks,
						tickangle=0
					),
					yaxis=YAxis(
						range=[ymin, ymax],
						title=ylab,
						showline=True,
						mirror='ticks',
						linewidth=1,
						dtick=yspace,
						showgrid=False,
						tickformat=yax_fmt[1:]
					),
				)
			else:
				data = Data([trace0,trace1,trace2, trace22])
				layout=Layout(
					title=site + ' - ' + season, autosize=False,
					width=850,height=300,
					showlegend=False,
					margin=Margin(
						t=30,
						r=20,
						l=50,
						b=30,
					),
					xaxis=XAxis(
						range=[xlymin, xlymax],
						autorange=False,
						showline=True,
						mirror='ticks',
						linewidth=1,
						nticks=20,
						tickprefix=preticks,
						tickangle=0
					),
					yaxis=YAxis(
						range=[ymin, ymax],
						title=ylab,
						showline=True,
						mirror='ticks',
						linewidth=1,
						dtick=yspace,
						showgrid=False,
						tickformat=yax_fmt[1:]
					),
				)
			
			#if season == 'summer':
			fig = Figure(data=data, layout=layout)
			#plot_url = py.plot(fig, filename=site + '/' + param + '/'+ site + '_' + param + '_' + season + '_' + str(yrmin) + '-' + str(yrmax))
			py.image.save_as(fig,'fig_py/' + site + '_' + param + '_' + season + '_' + str(yrmin) + '-' + str(yrmax) + '.png')

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

