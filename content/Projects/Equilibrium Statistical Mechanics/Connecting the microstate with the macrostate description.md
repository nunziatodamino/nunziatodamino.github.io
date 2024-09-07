If one considers a system with many degrees of freedom, generally there is control only on the macroscopic quantities rather than the microscopic ones.
I.e. in a typical system $(N\sim10^{23})$ one can know easily the temperature of the system (macrostate), while nothing can be said one the singular trajectory of each particle (microstate).

Yet, the macroscopic properties must arise from the particles collective behavior.

So, in order to achieve a coherent theory, is of paramount importance the following:

> One has to connect the microstates to the macrostates by means of quantities averaged over the microstates.

We begin by defining the most intuitive type of average: the time-average
#### Time-average
Suppose to have at a time instant $t$ a microstate $\bar{\mu}(t)=\{\bar{q}_1(t) \dots \bar{q}_N(t) , \bar{p}_1(t) \dots \bar{p}_N(t) \} \equiv \{ \bar{q}^N(t),\bar{p}^N(t)\}$ of an $N$ particle system, where $N$ is very large, and to know the system Hamiltonian, so that one can set the time evolution of the system.
Suppose also to have an observable $f$, e.g. an extensive property of the system, that depends upon the generalized coordinates and the conjugated momenta.
One can then evaluate the time average as:

$$ \braket{f}_{time} = \lim_{T \to \infty} \frac{1}{T} \int_0^T f( \bar{q}^N(t),\bar{p}^N(t))\ dt $$

And impose that in fact the system, at equilibrium, will take as value of $f$ the average value $\braket{f}_{time}$.
Note that one can require the time to be finite only if is long enough for the point in the phase space for it to visit most (all in principle) of the possible microstates.
This approach, even if totally reasonable, is simply not applicable in a real situation, due to the enormous amount of equations involved.
So one has to devise another strategy.
#### Ensemble average
Instead of thinking of 1 system changing over time to different microstates , say $N$ to fix the ideas, one can fix a time and consider $N$ systems, each of which occupies one of the microstate considered before.

This equivalence is exact, and we will justify it, when $N \to +\infty$.

This idea originates from the [[Fundamental postulate of equilibrium statistical mechanics]]. In fact if we consider an infinite amount of time (so that a system occupies infinite microstates) is reasonable to say that the system will ''cover'' every accessible microstate.
We will call the set of the $N$ identical systems statistical ensemble.
When dealing with an ensemble we will consider at a time t all the systems altogether so that one has in the phase space the representation of $N$ microstates.
In this context is essential to define a probability density function in order to work, because we have multiple microstates.
Suppose then we want to define a probability density function in phase space, i.e. $\rho = \frac{d\mathbb{P}}{dV} \to d\mathbb{P} = \rho dV$, where $dV$ is an infinitesimal volume element in phase space centered around a point $\{\bar{\mathbb{q}}(t),\bar{\mathbb{p}}(t) \}$$ .
We can approximate the probability $d\mathbb{P}$ by considering the number of microstates inside the phase space volume $dV$ over the total number of microstates $N$, in the limit of $N \to +\infty$:

$$ d\mathbb{P} = \lim_{N \to +\infty} \frac{dN(\bar{\mathbb{q}},\bar{\mathbb{p}},t)}{N} = \rho(\bar{\mathbb{q}},\bar{\mathbb{p}},t)dV $$

Note that by integrating both members one obtains the normalization condition:

$$ \int_{\Gamma} \rho(\bar{\mathbb{q}},\bar{\mathbb{p}},t)dV = \int d\mathbb{P} = 1  $$