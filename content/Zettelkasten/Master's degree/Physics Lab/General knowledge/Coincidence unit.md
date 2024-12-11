![[Images/Coincidence unit.png]]

The functioning of a coincidence unit is extremely simple: one has as input 2 signals and if they overlap one sums them up.
If the sum exceeds a fixed threshold then we generate a logic output.
This idea works in principle with any input signal height, but in order to work simply one can reshape the inputs such as they have the same height.
This makes it simple to fix a threshold , one can choose $kV_{in}$, where $1<k<2$, and $V_{in}$ is the height of the input signal.