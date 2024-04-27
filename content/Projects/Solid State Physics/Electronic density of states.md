
Consider a crystal, where any restrictions on its dimensions, followed by the application of [[Born-Von Karman boundary conditions]], result in a discretization of possible electronic wave vectors $\bar{k}$. These wave vectors are obtained by solving equations derived from the [[Approach to the electron dynamics]]
In addition to the discretization, we have an energy structure divided into different $E(\bar{k})$ values, labeled according to the model used.
We have specific electronic density of states for the [[Free electron model for metals (Sommerfeld model)]] and specific electronic density of states for the [[Band model]].
Regardless of the model used, we call the 4-tuple $(\bar{k}, E(\bar{k}))$ an electronic state, and we define the electronic density of states as:

$$D(E)dE = \text{number of states for which } E\in [E, E+dE] $$

In order to evaluate its analytical form, we use, using the same ansatz saw in [[Vibrational density of states]]:


$$D(E) = 2 \frac{V}{(2 \pi)^3} \int_{\text{shell}} dS_{E} \frac{1}{|\nabla_{\bar{k}}(E(\bar{k}))|} $$

This is the same expression as for the phonon case, with the caution that it needs to be corrected for spin degeneracy, and there are no branches to consider.
Another equivalent ansatz is to integrate over all the reciprocal space and select the energy we want to count with a Dirac delta:

$$D(E) = 2 \frac{V}{(2 \pi)^3} \int d^3k\ \delta\left( E-E(\bar{k}) \right)$$
