Vortices does not appear as solutions from what we saw in [[Projects/Equilibrium Statistical Mechanics/Phase transitions/Spin stiffness energy|the spin wave approach]], because they are not a smooth solution, as they present a singularity in the vortex center. 
In few words, we go from the Laplace equation to a Poisson equation:

$$ 
\nabla^2 \vartheta(\bar{r})
= 2\pi \sum_{i=1}^N k_i \,\delta\bigl(\bar{r}-\bar{r}_i\bigr) $$

Where we are supposing $N$ defects or vortices.
Solving by imposing that $\bar{r_i}$ must be at the vortex center, so one imposes the set of Dirichlet condition on the boundary:

$$ \oint_{+\Gamma_i} \nabla\vartheta(\bar{r}) \cdot d\bar{l} = 2n\pi ,\qquad \forall \Gamma_i$$

Then one obtain solutions of the type (vortex center in the origin):

$$ \vartheta(\rho, \varphi) = n\varphi + c $$

Where $n$ is called winding number or topological charge. **Note that $n$ is the same of the boundary condition**
We show in the following picture different cases:

![[Images/Vortices in the 2D XY model.png|300]]

Note of course that if the vortex center is not inside a contour integration $\gamma$, then clearly:

$$ \oint_{+\gamma} \nabla\vartheta(\bar{r}) \cdot d\bar{l} = 0 $$





