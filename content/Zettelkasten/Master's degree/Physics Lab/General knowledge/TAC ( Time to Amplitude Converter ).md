The TAC unit is a module that converts the time interval between two logic signal into an output whose height is proportional to said interval.

![[Images/TAC ( Time to Amplitude Converter ).png]]

The general functioning idea is that when the start signal arrives a capacitor discharges at a constant rate until the stop signal arrives. This output signal has height proportional to the time interval between the signals. 

![[Images/TAC ( Time to Amplitude Converter )_funct.png|500]]

Notice also that the same can be achieved by inverting charge and discharge:
![[Images/TAC ( Time to Amplitude Converter )_funct2.png|500]]


We begin by describing the two main different types:
### The START-STOP Time to amplitude converter

The idea is the general one, we have a capacitor at the charged regime, then a start signal arrives and the discharge process begins, till the stop signal arrives and the capacitor recharges.
This means implicitly that this system can measure with accuracy a time interval of $\sim 3\tau$ where $\tau =RC$
We observe that if no stop signal arrives, the system discharges completely and no meaningful measure can be made.
So generally START-STOP TAC's contains additional logic circuit to test the presence of the stop signal in the allowed time window in which the TAC operates.
System with said additional circuitry are called START-READY-STOP TAC:

![[Images/TAC ( Time to Amplitude Converter )_SRS_TAC.png|500]]

### Time overlap TAC

Let's consider 2 start and stop signals each of which of width $T_1$ and $T_2$ respectively and separated by a time interval $\tau$.
When the 2 signal are in overlap the capacitor is charged, when not in overlap the capacitor is discharged.

![[Images/TAC ( Time to Amplitude Converter )_overlap.png|500]]

Notice that this method will not distinguish between start and stop signal.

![[Images/TAC ( Time to Amplitude Converter )_out_overlap.png]]

If one then sees the output can say that its height is proportional to $T-\tau$, where $T$ is the full width of the output signal.
If one knows $T$, then $\tau$ can be deduced.

One can understand this proportionality better using the last images.
We will measure the time from the input 1 signal start.
Suppose, to simplify, that $T_1=T_2$. Then in the case of a symmetric output (obtain if $T<<RC=\tau_{RC}$) then one can say that $T\simeq T_1$.
Then only 2 situation can occur, either (a) or (b): 
- In the (a) case the signal starts at $t_1=\tau$ and reaches its maximum at $t_{peak}=T$ so that the peak height is proportional to $t_{peak}-t_{1} =T-\tau$.
- In the (b) case the signal starts at $t_1=0$ and reaches its maximum at $t_{peak}=T-\tau$ so that the peak height is proportional to $t_{peak}-t_{1} =T-\tau$.

