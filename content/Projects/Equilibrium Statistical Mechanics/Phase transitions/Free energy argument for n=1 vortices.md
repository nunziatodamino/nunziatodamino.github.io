We want to analyse the free energy argument for [[Projects/Equilibrium Statistical Mechanics/Phase transitions/Vortices in the 2D XY model|vortices]] in the context of [[Projects/Equilibrium Statistical Mechanics/Phase transitions/The Berezinskii-Kosterlitz-Thouless (BKT) transition|The Berezinskii-Kosterlitz-Thouless (BKT) transition]].
### Energy for the creation of a vortex from the ground state

First we consider the boundary condition on the vortex to find an expression of the gradient respect to the topological charge. If we choose a circle as a integrating contour, then, in polar coordinates $d\bar{l} = rd\vartheta \hat{\vartheta}$ and given that we saw that $\partial_r\vartheta(\bar{r})=0$, this implies that $\nabla\vartheta(\bar{r}) = |\nabla\vartheta(\bar{r})|\hat{\vartheta}$. So in the end

$$2 \pi n = \oint_{+\Gamma_i} \nabla\vartheta(\bar{r}) \cdot d\bar{l} = r|\nabla\vartheta(\bar{r})|\int_{0}^{2\pi}d\vartheta =2 \pi r|\nabla\vartheta(\bar{r})| \iff |\nabla\vartheta(\bar{r})| = \frac{n}{r} $$ 
Now in order to evaluate the energy we can use the expression found in the [[Projects/Equilibrium Statistical Mechanics/Phase transitions/Low temperature approximation of the XY model in 2-dimensions|Low temperature approximation of the XY model in 2-dimensions]] argument:

$$ \Delta E = \frac{J}{2}\int d \bar{r}\ ||\nabla\vartheta(\bar{r})||^2 = \frac{J}{2}\int_0^{2\pi}d\vartheta\int_{a}^{L} r dr\ \frac{n^2}{r^2} = J\pi\ln\left(\frac{L}{a}\right) $$

Where $a$ is the vortex core radius (this is done to remove the divergence, contribution under $a$ are assumed constant and/or negligible) and $L$ is the linear size of the lattice

## Free energy argument

Now we evaluate the entropy. In a square lattice of size $L$ the vortex center can be placed in any $(L/a)^2$ ways, in order that in each linear dimension 2 vortices core do not overlap with each other.
So one has $S = k_B \ln \Omega = k_B 2\ln L/A$.
In the end the free energy difference will be: 

$$ \Delta F = J\pi\ln\left(\frac{L}{a}\right) - 2k_BT\ln\left(\frac{L}{a}\right) $$

 If:

$$ \Delta F <0 \iff T>\frac{J\pi}{2k_B}\equiv T_{BKT} $$

Then the creation of vortices is spontaneous process. Note that given that the dimensionality dependency for energy and entropy is the same, there is a fair competition between order-disorder, which is typical of a phase transition.