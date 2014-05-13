# SWINGENTRYRATING
# WGRIFFITH2 (C) 2014

declare lower;

# STOCHASTICSLOW
DEF KPERIOD = 14;
DEF DPERIOD = 3;
DEF FASTLINE = ROUND(SIMPLEMOVINGAVG(100 * ((CLOSE - LOWEST(LOW, KPERIOD)) / (HIGHEST(HIGH, KPERIOD) - LOWEST(LOW, KPERIOD))), LENGTH = DPERIOD));
DEF SLOWLINE = ROUND(SIMPLEMOVINGAVG(SIMPLEMOVINGAVG(100 * ((CLOSE - LOWEST(LOW, KPERIOD)) / (HIGHEST(HIGH, KPERIOD) - LOWEST(LOW, KPERIOD))), LENGTH = DPERIOD), LENGTH = DPERIOD));

# TEST
DEF GREENPRICE = FASTLINE > SLOWLINE;
DEF REDPRICE = FASTLINE < SLOWLINE;

plot RATING =

if
GREENPRICE
AND CLOSE >= OPEN
AND LOWEST(FASTLINE[1],2) <= 20
then 1

else if
REDPRICE
AND CLOSE <= OPEN
AND HIGHEST(FASTLINE[1],2) >= 80
then -1

else 0;