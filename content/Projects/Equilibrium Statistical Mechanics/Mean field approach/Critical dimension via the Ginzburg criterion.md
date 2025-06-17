The idea is to find the critical dimension under which the application of the mean field approximation is a bad approximation.
The idea is to consider the the expansion of the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Ginzburg criterion|Ginzburg criterion]] in the neighborhood of the critical temperature $t = \frac{T-T_C}{T_C} = 0$
We start from the expression:

$$  E_{tot} =  \frac{\int_{\Omega}d\bar{r}\ G_C(r)}{\tilde{\eta}^2 V_{\Omega} } $$

Given that is necessary that $\tilde{\eta} \neq 0$, this is a statement about the ordered phase, so that this quantity cannot be defined in a disordered phase, where by definition of order parameter $\tilde{\eta} = 0$.
So we have to study the limit $t \to 0^-$.
We recall the following approximations that holds in the neighborhood of the critical temperature:

- $\int_{\Omega}d\bar{r}\ G_C(r) \sim \chi \sim |t|^{-\gamma}$
- $V \sim \xi^d$
- $\xi \sim |t|^{-\nu}$
- $\tilde{\eta} \sim |t|^\beta$

We saw the first result in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Fluctuation-dissipation relation in the Ising model|Fluctuation-dissipation relation in the Ising model]]. The second part is the definition of critical exponent for the susceptibility.
The volume is proportional to the correlation length to the power of the system dimensionality $d$, as the integration volume is the space in which the mean field correlation function is non-zero.
Then we have the definitions for the critical exponent for the correlation length and average order parameter.
Putting all together we find:

$$  E_{tot} \sim |t|^{-\gamma+\nu d -2\beta} $$

Given that a critical exponent must be positive, we find a constraint on the system dimensionality:

$$-\gamma+\nu d -2\beta >0 \iff d>\frac{2\beta +\gamma}{\nu}\equiv d_c$$

**We found then the fundamental result: in order to be described by a mean field approach the dimensionality must be higher than a critical value.**

- Example - Ising model
We have found for the Ising model the following [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Mean field exponents in the Ising model|mean field exponents]]:

$$ \gamma = 1 \qquad \beta = \frac{1}{2}$$

One can prove that $\nu = \frac{1}{2}$.
In the end we find $d_c=4$, so over this dimension the mean field approximation is a good approximation for the Ising model.
