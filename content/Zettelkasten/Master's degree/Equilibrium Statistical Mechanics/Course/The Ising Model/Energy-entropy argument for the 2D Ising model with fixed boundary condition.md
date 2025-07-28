As we stated in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/The energy-entropy argument|The energy-entropy argument]], is in general difficult to evaluate the entropy associate to a general hyper-surface flip if this is not a directed walk/surface.
We show here a specific calculation for the 2D Ising model with fixed boundary condition.

![[Images/Energy-entropy argument for the 2D Ising model with fixed boundary condition.png|400]]

Suppose to have an all up ground state an introduce in the system a spin bubble, i.e. to flip a polygon of perimeter $L$ inside the square lattice.
The number of possible perimeters is of the same order of the number of possible SAW (self-avoiding-walks) of length $L$, so $\mu^L, \quad 2<\mu<3$. Suppose we call origin the left corner of this polygon. Then this origin can be translated everywhere on the lattice except on the boundaries. To avoid over-complications, assume the lattice is big and the surface is negligible respect the internal area, so that the number of these possible positions is $\sim N$.
In the end one obtain for the entropy $S = k_B\ln \Omega = k_B\ln (N\mu^L)$, so that in the end the free energy difference is:

$$ \Delta F = 2JL -  k_BT\ln (N\mu^L) = 2JL -  k_BT[\ln N + L\ln \mu]  $$

If want now study the system stability (spontaneity <0 and equilibrium =0) we can find a condition on the bubble perimeter:

$$ \Delta F \leq 0 \iff L \leq \frac{k_BT\ln N}{2J - k_BT\ln \mu} = \frac{\ln (N-\mu)}{\frac{2J}{k_B\ln\mu} - T} $$

This implies bubbles formation is achieved when the perimeter of the bubble is :

$$ L_{max} = \frac{k_BT\ln N}{2J - k_BT\ln \mu}$$

Or lower. For bigger bubbles the probability is lower the bigger the bubble.
Note moreover that for $N \gg 1$, given that $L > 0$, one has to have that the denominator must be positive (in the large particle limit the numerator is always positive):

$$ \frac{2J}{k_B\ln\mu} - T > 0 \iff  T <\frac{2J}{k_B\ln\mu}$$

So we conclude that we have a disordered phase only if $T <\frac{2J}{k_B\ln\mu}$ .
One can estimate roughly the number of spin down in the system by considering that if a polygon has perimeter $L$ then has area of the order $\sim L^2$. So one can evaluate the fraction of spins down by $\sim L^2/N$.
By the free energy estimation we found that $L \sim \ln N$, so one can say that the fraction of spins down $\sim (\ln N)^2/N$. This goes to 0 in the thermodynamic limit.
