## 1D Ising model

Let's consider the 1D Ising model with the periodic boundary condition. 

Due to this imposition at $T = 0$ there will be one state such that all spin all aligned, either up or down.
Let's consider the up case for example. 
Suppose now to flip an entire section of $L$ spins. This creates a so called boundary wall (or domain wall), as showed in figure.

![[Images/The Peierls argument (energy-entropy argument).png|400]]

The cost of this spin flip is just the cost of changing the spins on the boundary walls:

$$ \Delta E = 2J - (-2J) = 4J $$

Irrespective, as we can see, of the chain length $N$ and the wall length $L$.
Due to the PBC there are 2N possible configuration in which this flip can be made.
These can be found by considering that the wall can be shifted N times along the chain, and due to symmetry the symmetric configuration is an allowed configuration (we make in the figure a brief example for the chain of length 5 and wall of length 3)
So, if one wants to evaluate the entropy, one has $S = k_B \ln W = k_B \ln 2N$ and consequently for the free energy difference :

$$ \Delta F = 4J - 2k_B T \ln N $$

In this case for any $T>0$, if $N$ is large, the right term will dominate, so that $\Delta F < 0$ and the "flipped" configuration will dominate.

The same argument can be generalized for spin flips in general.
Suppose to have a finite concentration of kinks (i.e. spin flip boundaries) such that $N_k = cN$. Then, clearly the difference in energy from the ground state configuration is 

$$ \Delta E = 2N_kJ - (-2N_kJ) = 4N_kJ = 4cNJ $$

The misaligned spins can be inserted in the chain in $N \choose N_k$ ways, so that one conclude with the same ansatz:

$$ \Delta F = 4cNJ - 2k_B T \ln \left[N \choose cN\right]$$

Since equilibrium states correspond to the minima of the free energy, we minimize respect the density parameter $c$.
First we rewrite our free energy difference in the case of a large chain $N \gg 1$ , so that we can expand the binomial coefficient using the Stirling formula. Given that $\ln N! \sim N\ln N  -N$, we have in the end:

$$ 
\begin{aligned}
\Delta F &= N (2CJ + k_BT[c \ln c + (1-c)\ln (1-c)])
\end{aligned}$$

Then, by minimizing respect to the density parameter :

$$ \frac{1}{N} \frac{\partial \Delta F}{\partial c} = 0 \iff c= \frac{1}{1 + e^{2J/k_BT}} $$

Calculations can be found [[here]].
We conclude that for any finite $T>0$ there exists a finite concentration $c>0$ of spin flips (or kinks).
Is easy to see that for $T \to +\infty$ we have that $c \to \frac{1}{2}$, and for $T \to 0^+$ we have that $c \to 0$

**We conclude that spin ﬂips are favorable and order is destroyed at any ﬁnite temperature.**

## d - dimensional Ising model

Suppose to extend the argument to any dimensionality $d>1$. 
In order to have a visual aid we will use images from the $d = 2$ Ising model.
Suppose to have a complete ordered phase (all up or all down) and to flip an entire hyper-surface of area $\propto L^{d}$.
This introduces a domain wall of dimensionality $\propto L^{d-1}$ in the system (we are intersecting 2 hyper-surfaces of dimensionality $d$, flipped and un-flipped, reducing the dimensionality).
This implies that the change in energy from the ground state to this configuration is proportional to the domain wall surface:

$$ \Delta E \propto 2JL^{d-1} $$

The entropy of an hyper-surface is difficult to calculate (as is not easy to evaluate all the possible configuration, *I think also is not quite possible in closed form but only computationally.*)
Is possible an estimation in the case of the formation of a single domain wall (i.e. we flip half the system).
We show an example for $d = 2$:

![[Images/The Energy-entropy argument (Peierls argument).png|500]]

In this case one the simplest approximation of the number of cyan lines (domain walls or in this case called directed walks/surfaces) is:

$$ \Omega \sim \mu^{L^{d-1}} \qquad \mu>1 $$

The idea is the following: suppose we start from a site. In order to not backtrack we restrict the possible directions from 4 to 2 (in the example right and down). Then for each site we have 2 choices and we travel for roughly $L$ sites.
So for example in the case of the square lattice $\mu =2$. Note that $\mu$ is in general a real number, for example if one wants to evaluate the number of self-avoiding-walks (SAW) of length $L$ one can show that $\mu \simeq 2.638$. Note that in this last case one does not proceed analytically but computationally.

Continuing, in this case one easily evaluate the entropy $S = k_B \ln \Omega =k_B L \ln \mu$ and consequently the free energy difference:

$$\Delta F = 2JL^{d-1} -k_B T L^{d-1} \ln \mu $$

In this case, for any $d>1$ we have that $\Delta F \propto L^{d-1}$.
**This means that the energy is not negligible respect to the entropy, so that an ordered phase can exists at a finite temperature.**