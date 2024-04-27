In the preliminary study of thermodynamics one consider in a phase change the entirety of the object to study in the first phase, say liquid, and then the entirety of the object in the second phase, say solid, without thinking to what happen in the middle of the process.

Now we pay particular attention to development of the phase change (in this way we will talk more precisely of phase transition).

Consider a system at a phase, say liquid. When the thermodynamic condition for the phase change are met this change doesn't happen abruptly. 

This process is called nucleation and happens in different phases, the first of which is the so ''nucleus'' formation, i.e. a cluster of atoms at the different phase we want to study, say solid.

### Nucleus formation

The nucleus formation can be regulated by 2 major mechanisms:

- Heterogeneous nucleation: the nucleation process will happen with higher probability around defects or walls of the system. The probability of this happening is regulated by stochastic processes. 

- Homogeneous nucleation: The nucleation process can happen uniformly in the system. The probability of this happening is regulated by stochastic processes.

==In this treatment we will discuss only homogenous nucleation.==

### Nucleus stability

Once the nucleation happened this cluster has different choices, dictated by its free energy.
Let's consider as the Gibbs free energy of the cluster the reversible work necessary to form it (we are implicitly assuming a constant temperature). In the hypothesis of formation of a spherical nucleus:

$$ \Delta G = -\frac{4}{3} \pi R^3 \Delta g_V  + 4 \pi R^2 \gamma$$

There are 2 conventions in literature, one is the one presented, assuming $\Delta g_V >0$. The second is to drop the negative sign in front of the volume term and consider $\Delta g_V <0$.
Moreover is important to notice that the volume term tends to dominate at higher $R$ than the surface term and viceversa (as expected, because in the bulk limit $R \to \infty$ surfaces are irrelevant).
Also the $\Delta g_V$ term can then be expressed in terms of the supersaturation rate $P^*$ using [[Gibbs-Thomson equation]] so that one can write:

$$ \Delta G = -\frac{4}{3} \pi R^3 \rho k_B T \ln P^*  + 4 \pi R^2 \gamma$$

In this way we see how much the supersaturation rate $P^*$, and the temperature $T$ tends to decrease the overall variation of free energy as the radius increase.
Note also that we have a supersaturation regime only if $P^*>1$, and hence a positive logarithm and a possibility to stabilize the system with the proper radius or temperature. Conversely if $P^*<1$ is impossibile to have spontaneous process, because the logarithm is negative and $\Delta G >0$ overall.

As can we observe from the graph of this free energy variation:

![[Pasted image 20230510153514.png|300]]

The $\Delta G$ has a global maxima, i.e. an instable equilibrium point, for a certain critical radius $R^*$.
This can be easily found by imposing the condition:

$$\frac{\partial \Delta G}{\partial R} = 0 \qquad \Rightarrow \qquad R^* = \frac{2 \gamma}{\Delta g_V}  = \frac{2 \gamma}{\rho k_B T \ln P^*}$$

From this global maxima the cluster has 2 choices: it can either shrink or expand, but the expansion is energetically favoured.

![[Pasted image 20230510161047.png|300]]

With the critical radius we can recast our understanding of the nucleation formation in a simple way.
When the nucleus is formed due to the stochastic processes, if the radius of the nucleus is more or equal than the critical radius, the nucleus doesn't shrink, and can begin its growth process.

So let's revue the nucleation formation dynamics with an example.
I am at a defined temperature $T$, and my system is in supersaturation, i.e $\ln P^* >1$
Suppose a cluster of radius $R<R^*$ begins to form. In this situation the system has in $\Delta G(R)$. If no other energy is given to the system the cluster shrinks, in order to minimize $\Delta G(R)$.
But if some energy is given in order for the system to reach $\Delta G(R^*)$, then is more favorauble for the cluster to expand rather then to shrink, as the plot shows.