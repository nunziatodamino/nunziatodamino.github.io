The CFD is an electronic apparatus that permits to transform an analog signal into a logic one when said signal reaches a constant fraction of the peak height.

This fraction is chosen empirically given the signal type, and is chosen to reduce as much as possible the $\sigma_{time}$ in the [[Zettelkasten/Master's degree/Physics Lab/General knowledge/Timing resolution|jitter effect]] consideration.
Also this method leads to a walk-free timing method, as seen in the following picture in the particular case of a constant fraction of $50\%$:

![[Images/CFD (Constant fraction discriminator)_walkfree.png|200]]

- **Functioning**
The functioning idea is the following.

An incoming signal arrives at the CFD, is then split in 2: $V_0,V_1$ and one part, say $V_1$ is delayed by a time $\tau_d$, and once delayed we relabel it as $V_d$.
This time is chosen as the rising time of the non-delayed signal from the constant fraction $k$ to which the CFD is set up to the pulse peak, i.e. if the CFD is set to a constant fraction of $50\%$ the $\tau_d$ is the rising time from $50\%$ to $100\%$ of the peak height of $V_0$.
The non-delayed part, in our example $V_0$ is inverted and attenuated by a factor $k$, such that $V_c = -kV_0$.
Then a bipolar pulse $V_{out}=V_c+V_d$ is obtained.
This signal has the property that its zero crossing point defines a time for which the original delayed signal $V_d$ is at a constant fraction $k$ of its original height.

![[Images/CFD (Constant fraction discriminator).png]]

So one can use this output as the following, if I have a positive signal in $V_{out}$ then the triggering condition is satisfied, and this signal can be used as is or then be converted into a logic one with a shaper module

We observe that coincidence signals with different rise times trigger at different times, so that is required that the input signals have the same rising time.
If this condition is met, then a walk-free signal is produce, if not one can still use the method, but a walk effect in the output signal must be considered.

#### Amplitude and Rise-time Compensated triggering (ARC)

Suppose we would wish to have a walk free signal.
Then we should compensate the CFD in the following way: we adjust the delay $\tau_d$ so that is smaller, i.e. we stop before to reach the pulse peak.
This produces an output signal with zero-crossing point below the k fraction, but that is not afflicted by the walk effect.
This happens because the negative lobe of $V_{out}$ is reduced to the minimum.

![[Images/CFD (Constant fraction discriminator)_ARC.png]]

