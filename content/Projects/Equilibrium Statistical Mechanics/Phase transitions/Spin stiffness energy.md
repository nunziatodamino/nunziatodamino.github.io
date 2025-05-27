We saw in [[Projects/Equilibrium Statistical Mechanics/Phase transitions/Low temperature approximation of the XY model in 2-dimensions|Low temperature approximation of the XY model in 2-dimensions]] that in a XY model in 2 dimensions, in order to produce a change from the ground state to a generic angle configuration $\vartheta(\bar{r})$, one has to pay in energy 

$$ \Delta E = \frac{J}{2}\int d \bar{r}\ ||\nabla\vartheta(\bar{r})||^2 $$

Is interesting to study what is the target configuration $\vartheta(\bar{r})$ in the case of the minimum energy given to the system, in order to have the presence of domain walls.
Then, given that the change in energy is given by a functional, this is done by a functional derivative:

$$ \frac{\delta \Delta E}{\delta \vartheta(\bar{r})} = 0 $$

One can show that:

$$ \frac{\delta \Delta E}{\delta \vartheta(\bar{r})} = 0 \iff -J \nabla^2\vartheta(\bar{r}) = 0 \iff \nabla^2\vartheta(\bar{r}) = 0$$

Which is a Laplace equation. Here we can impose either the Von Neumann or the Dirichlet boundary condition.
- If we set the so called free (Neumann) boundary condition, i.e. on the domain walls $\hat{n} \cdot \nabla\vartheta = 0$ we have:
 
 $$ \vartheta(\bar{r}) = \text{const} $$
 
 This constant will be the same of the ground state (we recover the default case in which no energy is given)
 - If we set Dirichlet boundary condition, say on the left wall $\vartheta(0) = 0$ and on the right wall $\vartheta(L) = \Delta$ (implicitly we are aligning the y-axis to the walls), we obtain:
  
  $$ \vartheta(x,y) = \frac{\Delta}{L}x $$

We obtain a well known form in solid if at the right any complete turn in any direction is done , i.e. $\vartheta(L) = 2\pi k$

![[Images/Spin stiffness energy.png|500]]

In this second case, as one can observe in the picture one observe what is called **spin wave**.
Let's now evaluate explicitly $\Delta E$, by using the found $\vartheta(\bar{r})$ distribution:

$$ \Delta E = \frac{J}{2}\int dxdy\ ||\nabla\vartheta(\bar{r})||^2 = \frac{J}{2}\int_0^Ldy\int_0^L d \bar{x}\ ||\nabla\left(\frac{\Delta}{L}x\right)||^2 = \frac{J}{2}\frac{\Delta^2}{L}\int_0^L dx = \frac{J}{2}\Delta^2  $$

