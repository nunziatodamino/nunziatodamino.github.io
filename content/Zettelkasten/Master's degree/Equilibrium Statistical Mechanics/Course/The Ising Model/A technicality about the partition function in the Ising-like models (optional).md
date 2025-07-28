Let's consider the general expression of the canonical partition function in the case in which the microstates can assume continuous values

$$ \mathcal{Z}_{NVT} = \frac{1}{h^{3N}N!} \int d\bar{q}^Nd\bar{p}^N \exp\left[ -\beta \mathscr{H}\left(\bar{q}^N, \bar{p}^N\right) \right] $$

Where we recall that $\bar{q}^N = \{\bar{q}^1, \dots \bar{q}^N\}$ and $\bar{p}^N = \{\bar{p}_1, \dots \bar{p}_N\}$ are the generalized coordinates and conjugated momenta respectively and $d\bar{q}^N \equiv \prod_{i=1}^N d\bar{q}^i,\ d\bar{p}^N \equiv \prod_{i=1}^N d\bar{p}_i$

Suppose now we want to evaluate the partition function of an [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Phase transitions/The O(n) model|O(n) model]], what the partition function, and the phase space look like ?

If we call the spin set $\bar{s}^N = \{ \bar{s}_1, \dots, \bar{s}_N \}$, then we have $\bar{s}^N \iff \bar{q}^N$, i.e. the spins are the generalized coordinates.
The conjugate momenta can be obtained by the fundamental relation $\bar{p}_\alpha = \frac{\partial\mathscr{L}}{\partial \bar{q}^{\alpha}}$, but this is useless. In fact given that the Hamiltonian is dependent only on the spins : $\mathscr{H}\left(\bar{s}^N, \bar{p}^N\right) = \mathscr{H}_0\left(\bar{s}^N\right)$, then clearly:

$$
\begin{aligned}
\mathcal{Z}_{NVT}\left(\bar{s}^N, \bar{p}^N\right) &= \frac{1}{h^{3N}N!} \int_{\Omega} d\bar{s}^Nd\bar{p}^N \exp\left[ -\beta \mathscr{H}_0\left(\bar{s}^N\right) \right] = \\
\\&= \frac{1}{h^{3N}N!} \int_{\Omega_p} d\bar{p}^N \int_{\Omega_s} d\bar{s}^N \exp\left[ -\beta \mathscr{H}_0\left(\bar{s}^N\right) \right] = \\ 
&= C \int_{\Omega_s} d\bar{s}^N \exp\left[ -\beta \mathscr{H}_0\left(\bar{s}^N\right) \right] = C \mathcal{Q}_{NVT}\left(\bar{s}^N\right) 
\end{aligned}
$$

Where is clear that $\Omega = \Omega_s \cup \Omega_p$ and $C = \frac{1}{h^{3N}N!} \int_{\Omega_p} d\bar{p}^N$.
**In the end the partition function is proportional to the configurational integral, so that in thermodynamic evaluation this can be used in lieu of the total partition function.**
**Given this, many book state wrongly $\mathcal{Z}_{NVT}\left(\bar{s}^N, \bar{p}^N\right) \equiv\mathcal{Q}_{NVT}\left(\bar{s}^N\right)$ using also the same symbol and name.**
