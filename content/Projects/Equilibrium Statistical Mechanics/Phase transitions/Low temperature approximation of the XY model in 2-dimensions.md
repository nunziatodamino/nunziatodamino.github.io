We have in this model, which is a special case of [[Projects/Equilibrium Statistical Mechanics/Phase transitions/The O(n) model|The O(n) model]], (specifically the O(2) model) that the system as Hamiltonian :

$$ \mathscr{H} = - \sum_{i<j} J_{ij}\ \bar{\sigma}_i\cdot\bar{\sigma}_j \qquad ||\bar{\sigma}_i|| = 1 $$

And the spin vector is confined on a plane. 
Note that this can be solved exactly in 1D using a recursion argument, as we did in [[Projects/Equilibrium Statistical Mechanics/Phase transitions/Partition function in the O(n) model with free boundary condition in 1D|Partition function in the O(n) model with free boundary condition in 1D]]
Note that if we denote with $\vartheta_i$ the angle that a spin vector forms with the x-axis, then the Hamiltonian can be rewritten as:

$$ \mathscr{H} = - \sum_{i<j} J_{ij}\ \cos(\vartheta_i-\vartheta_j) \qquad ||\bar{\sigma}_i|| = 1 $$

By convention $\vartheta \in [-\pi, \pi]$. The canonical partition function **in the nearest neighbors approximation** can be written as:

$$ \mathcal{Z}(T,J) = \int d\Gamma\ e^{-\beta\mathscr{H}} = \int_{-\pi}^{+\pi} \prod_{k=1}^N d\vartheta_k\ e^{\beta\sum_{<ij>} J_{ij}\ \cos(\vartheta_i-\vartheta_j)}$$

Evaluate this (as is) is a difficult task, but we can achieve something in the low temperature regime.
Suppose to be at $T \ll 1$ (equivalently $\beta \gg 1$), then we can safely assume that there is no big change in spin between nearest neighbors, so that $\cos(\vartheta_i-\vartheta_j) \sim 1 -  \frac{1}{2}(\vartheta_i-\vartheta_j)^2$, i.e. we do an approximation up to the second order.
In the end we obtain:

$$ \mathcal{Z}(T,J)  \simeq \int_{-\pi}^{+\pi} \prod_{k=1}^N d\vartheta_k\ e^{\beta\sum_{<ij>} J_{ij}\left(  1 -  \frac{1}{2}(\vartheta_i-\vartheta_j)^2 \right)}$$

**One can show that $\sum_{<ij>}\frac{1}{2} (\vartheta_i-\vartheta_j)^2 \simeq \frac{a^{2-d}}{2}\int d \bar{r}\ ||\nabla\vartheta(\bar{r})||^2$ in an hyper-cubic Bravais lattice.** We show it [[Calculations/Gradient approximation on an hypercubic lattice.pdf|here]].

**Note that in order to avoid complications due to the lattice constant, we can restrict to $d=2$.**

We then have then, for the Hamiltonian , assuming the same coupling constant for all spins:

$$ \mathscr{H} \simeq \int d \bar{r}\ \left[-J\left(1-\frac{1}{2}||\nabla\vartheta(\bar{r})||^2\right)\right] = -J\int d \bar{r} + J\int d \bar{r}\frac{1}{2}||\nabla\vartheta(\bar{r})||^2 = E_0 + \frac{J}{2}\int d \bar{r}\ ||\nabla\vartheta(\bar{r})||^2 $$

This is called **spin-wave approximation**. Note that we set $E_0 = -J\int d \bar{r} = -NJ$ is the energy of **one** of the infinitely many ground states in which the spins are oriented all in the same direction.
In order to create a variation $\vartheta(\bar{r})$, one has to pay an energy $\mathscr{H} - E_0$, so:

$$ \Delta E = \frac{J}{2}\int d \bar{r}\ ||\nabla\vartheta(\bar{r})||^2 $$
