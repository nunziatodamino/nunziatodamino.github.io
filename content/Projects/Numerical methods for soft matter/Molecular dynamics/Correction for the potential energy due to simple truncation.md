Every time in an MD simulation in which we truncate an interaction $\propto r^{-2}$ or that decays faster we have a systematic error in the determination of the total potential energy and in related thermodynamic properties that are dependent upon it.
One idea is to evaluate this systematic error and correct after the calculation the quantities. These type of corrections are called **tail corrections**.
Let's find a general expression to evaluate the tail correction for the total potential energy. For one particle we can write its total potential energy as:

$$ u_i(r) = \frac{1}{2} \int_0^{+\infty} dr\ 4\pi r^2\rho(r)u(r) $$

Where $\rho(r)$ is the average number density at a distance $r$ from atom $i$ and $u(r)$ is the potential energy at distance $r$ from atom $i$. If we cut the interaction at $r_{cut}$ : 

$$ u_i(r) = \frac{1}{2} \left[ \int_0^{r_{cut}} dr\ 4\pi r^2\rho(r)u(r) + \int_{r_{cut}}^{+\infty} dr\ 4\pi r^2\rho(r)u(r) \right] $$

We are neglecting the second integral. In order then to perform a tail correction we must evaluate the second integral. To simplify our calculation we assume that for $r>r_{cut}$ the number density is constant and equal to the average bulk density.
So we have per particle:

$$ u^{tail}_i(r) = \frac{\rho}{2} \int_{r_{cut}}^{+\infty} dr\ 4\pi r^2u(r) $$

While for the total energy we consider this correction multiplied by the number of particles:

$$ U_{tot} = \sum_{i,j | i<j}u^{trunc}(r_{ij}) + Nu^{tail}_i = \sum_{i,j | i<j}u^{trunc}(r_{ij}) + \frac{N\rho}{2} \int_{r_{cut}}^{+\infty} dr\ 4\pi r^2u(r) $$

So that we can conclude that the tail correction depend upon the functional form of the interaction potential.
In the case of a [[Zettelkasten/Master's degree/Solid State Physics/Crystal structures and bonds/Lennard-Jones potential|Lennard-Jones potential]] :

$$ u^{tail}_i(r) = \frac{8}{3}\pi\rho\varepsilon\sigma^3\left[ \frac{1}{3} \left( \frac{\sigma}{r_{cut}} \right)^9 - \left( \frac{\sigma}{r_{cut}} \right)^3  \right]  $$

