==This consideration applies only when the figure that appears in the oscilloscope screen is steady==.

There are 2 sources of uncertainty to be evaluated: 
1) ==the uncertainty associated with the instrument rating.== 
2) ==the uncertainty associated with the double reading on the display.==

We comment now specifically on what said:

1)  In the datasheet of the considered oscilloscope we can obtain the rating expressed in percentage on the voltage-scale or the time-scale. So that if we are doing a voltage measurement we will consider this percentage over the final measurement, independently of the division considered . ==E.g. I measure $20.6\ V$ over a $1\ \mbox{V/div}$ and the instrument as a rating of $\pm 3 \%$. Then $\sigma_{ins} = 0.618\ V$==. Same considerations holds for a time measurement.

2) I count the subdivisions of each square, according to the fact that I have to do a voltage measurement (I count the vertical subdivisions), or a time measurement (I count the horizontal subdivisions). Then the uncertainty is the scale considered, divided by the division, times 2. ==E.g. Each square has 10 vertical subdivisions, and we are in the $1\ \mbox{V/div}$, so that $\sigma_{read} = 0.2 \ V$==. Same considerations holds for a time measurement.

In order to obtain the final error:

$$\sigma_{tot} =  \sqrt{\sigma_{ins}^2 + \sigma_{read}^2 }$$

==In our worked example we would have obtained $\sigma_{tot} =  \sqrt{0.618^2 + 0.2^2 }=0.65\ V$

==Note that, in case of a finer measurement, one can decouple the 2) in two parts.== E.g. top-bottom for a voltage measurement and left-right for a time measurement 