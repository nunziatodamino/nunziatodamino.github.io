Suppose we want to devise a method to measure a time interval between two events to which a signal is associated.

Its of paramount importance to know the resolution associated to that method, i.e. the minimum amount of time one can measure with accuracy.
There are 2 main contribution to this resolution, walk and jitter.

- **Walk effect**

Imagine to have 2 coincident analog signal, but of different pulse height as in the picture:
![[Images/Timing resolution_walk.png|300]]
Both signals triggers at the same threshold fixed by a discriminator, by due to the different pulse height, one triggers before the other, resulting in a non-coincident output

- **Jitter effect**

![[Images/Timing resolution_jitter.png|300]]

The natural statistical fluctuation of the signal will make it trigger between a certain time range $t_{trigger} \pm \sigma_{time}$, where this time range can be evaluated as:

$$ \sigma_{time} = \frac{\sigma_{noise}}{\left| \frac{dV}{dt} \right|} $$

One can notice that the jitter effect can be reduce by faster rising times.


Notice that walk effect can be eliminated by a proper triggering method, while jitter no.
