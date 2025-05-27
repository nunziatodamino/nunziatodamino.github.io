Let's now discuss the characteristics of the fermionic system, denoted as a 'gas,' which consists of non-interacting fermions with a spin degeneracy of 2 ($g =2s+1= 2 \times (1/2) + 1$).

Suppose the entire system has a maximum energy of $E$. We know that the permissible energies for the system are given by:

$$E(\bar{k}) = \frac{\hbar^2}{2m} (k_x^2+k_y^2+k_z^2)$$

A triplet $(k_x, k_y, k_z)$ is referred to as a fermionic state, or simply a state. The number of states with energy less than or equal to the maximum energy $E$ is well approximated by the fraction:

$$N = g \frac{V_{ph}}{V_u'}$$

Here, $g$ is the spin degeneracy, $V_{ph}$ is the volume of the reciprocal space (k-space) containing all the states, and $V'_u$ is the volume of the unit cell in reciprocal space containing a single state.


### $T = 0\ K$

Based on our knowledge of the [[Projects/Equilibrium Statistical Mechanics/Miscellanea/Fermi-Dirac statistics]], we know that at a temperature of $T=0\ K$, only states with energy lower than the so-called Fermi energy are occupied.
If we consider the Fermi energy as the maximum energy, we have:

- Fermi momentum: $k_F = \sqrt{\frac{2mE_F}{\hbar^2}}$
- Fermi temperature: $k_b T_F = E_F$
- Fermi velocity: $m v_F = \hbar k_F$
- Number of occupied states with energy less than or equal to the Fermi energy: 

$$N = g \frac{\frac{4}{3}\pi k^3_F}{\frac{(2\pi)^3}{V}} = g\frac{V}{6\pi^2}k_F^3=\frac{V}{3\pi^2}k_F^3$$   
From this last expression one obtains a useful formula for the Fermi momentum:

$$ k_F = \left(3 \pi^2 \frac{N}{V}  \right)^{1/3} = \left(3 \pi^2 n  \right)^{1/3} $$

Where $n$ is the electron density.

Furthermore, we can evaluate the energy of the ground state of this fermionic gas by summing the energies of all states contained within a sphere $\Omega$ of radius equal to the Fermi momentum, appropriately multiplied by the spin degeneracy. We have:

$$\begin{aligned} 
E_0 &= g\ \sum_{k\leq k_F} \frac{\hbar^2k^2}{2m} =  g \frac{V}{(2\pi)^3}\int_\Omega d^3k \frac{\hbar^2k^2}{2m} =g \frac{V}{(2\pi)^3}\int_0^{k_F} dk\ 4\pi k^2 \frac{\hbar^2k^2}{2m} =  \\

&= g \frac{V}{\pi^2} \frac{\hbar^2}{4m} \int_0^{k_F} dk\  k^4  = g \frac{V}{\pi^2} \frac{\hbar^2}{4m} \frac{k^5_F}{5} = g \frac{V}{\pi^2} \frac{\hbar^2}{20m} k^3_Fk^2_F =   \\

&= g \frac{V}{\pi^2} \frac{\hbar^2}{20m} \left(3 \pi^2 \frac{N}{V} \right)\left(\frac{2mE_F}{\hbar^2}\right) =


g \frac{3}{10}NE_F = \frac{3}{5}NE_F  \end{aligned} $$

Here, $N$ represents the total number of states. We find that the total energy and the maximum energy are proportional but not equal.
It is also possible to evaluate the pressure exerted by the electron gas (volume dependence is implicit in the Fermi energy) :

$$P = -\frac{\partial E_0}{\partial V} = -\frac{\partial }{\partial V}\left(g \frac{3}{10}NE_F\right) = -\frac{\partial }{\partial V}\left(g \frac{3}{10}N\frac{\hbar^2}{2m}\left(3 \pi^2 \frac{N}{V}  \right)^{2/3}\right)  = g \frac{2}{10} nE_F $$

This pressure is known as the Pauli pressure.