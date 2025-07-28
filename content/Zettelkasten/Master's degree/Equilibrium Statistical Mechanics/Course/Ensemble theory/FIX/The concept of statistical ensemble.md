Imagine to have an isolated system of $N$ particles. We have different ways to describe this system

One possible way is to specify at a specific instant of time $t$ all its coordinates $\bar{r}^N(t) \equiv \{\bar{r}_1(t), \bar{r}_2(t), \dots, \bar{r}_N(t)\}$ and all is momenta $\bar{p}^N(t) \equiv \{\bar{p}_1(t), \bar{p}_2(t), \dots, \bar{p}_N(t)\}$. 
This kind of description, i.e. the specification of a point in the phase space $(\bar{r}^N(t),\bar{p}^N(t))$ is called microstate description, or simply microstate.

Another way is to define some extensive properties of the system, i.e. specify the system total energy $E$, is volume $V$, etc.
This kind of description is called macrostate description, or simply macrostate.

> One goal is to connect the microstates to the macrostates by means of quantities averaged over the microstates.

We start by the easy, yet important observation: the dimension of the space spanned by the microstate is much larger than the dimension of the space spanned by the macrostates.
This implies that to one macrostate description will correspond multiple microstate descriptions.
But because we know that to one microstate correspond one macrostate we have to introduce ficticious copies of the macrostates in order to make it work.


Suppose we want to define a probability density function in phase space, i.e. $\rho = \frac{d\mathbb{P}}{dV} \to d\mathbb{P} = \rho dV$.
If we find a way to define a probability, we can use this for defining $\rho$.





We start by saying that the problem of time evolution is unsolvable for number of particles like the one typical for real systems. 
Also we are not generally interested in this detailed level of knowledge of the system, but are instead interested in evaluating the time-average quantities. Suppose we want to now for our system the physical quantity $f$, then we can define the time-average as:

$$ \braket{f}_{time} = \lim_{T \to \infty} \int_0^T f(\bar{r}^N(t),\bar{p}^N(t))\ dt $$

But even this definition implies knowledge of the system's microstates for every time $t$.
We then should consider another strategy.

On one hand we have a system that evolves on time, and in each instant it can occupy a microstates with the same probability (this is guaranteed by the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Ensemble theory/Fundamental postulate of equilibrium statistical mechanics]]). We can then reasonably assume that if a long time passes (formally an infinite amount of time), the system will occupy every possible microstate. 

Instead of waiting we can propose the following: I fix an instant of time $t$ and create a collection of systems such that together occupy all the possible microstates.
This collection is called statistical ensemble.

Note that, having defined an ensemble, is not possible to specify a single point in the phase space at the time $t$, but rather each ensemble rapresentative will occupy every possible microstate at time $t$. So we will not talk about a point in the phase space but of a density function $\tilde{\rho}(\bar{r}^N(t),\bar{p}^N(t))$ in the phase space when we describe an ensemble.
So that one, can define the ensemble-average as:

$$ \braket{f}_{ensemble} =\frac{ \int f(\bar{r}^N(t),\bar{p}^N(t))\tilde{\rho}(\bar{r}^N(t),\bar{p}^N(t)) d\bar{r}^Nd\bar{p}^N}{\int \tilde{\rho}(\bar{r}^N(t),\bar{p}^N(t)) d\bar{r}^Nd\bar{p}^N} $$

Note that the this expression is simplyfied when the density function is normalised.

If we are in the hypothesis of the ergodic system we can finally:

$$  \braket{f}_{ensemble} \equiv  \braket{f}_{time} $$
