With [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Dynamic Monte Carlo methods for the Ising model|single spin local moves]] is observed that the auto-correlation time of the magnetization per MC sweep near the critical temperature diverges like:

$$ \tau \sim [\min(\xi, L)]^z $$

Where $z$ is a dynamical critical exponent (for the 2D Ising model $z \simeq 2.27$), $L$ is the system linear length, and $\xi$ is the auto-correlation length, defined in the same fashion as the auto-correlation time:

$$C_s(\bar{r}) =\text{Cov}(s(\bar{r}+\delta\bar{r}),s(\bar{r}) ) \sim \exp\left(-\frac{|\Delta\bar{r}|}{\xi}\right) $$

Where the covariance is evaluated within the spins at different locations $\bar{r}$.
Moreover it can be shown that in a neighborhood of $T_c$:

$$ \xi \sim \left| \frac{T-T_c}{T_c} \right|^{-\nu} $$

The exponent $\nu$ is dependent on the system dimensionality, and in the case of a 2D Ising model $\nu =1$.
In the end we can conclude that, for a 2D Ising model, in the neighborhood of $T_c$:

$$ \tau \sim \left[\min\left(\left| \frac{T-T_c}{T_c} \right|^{-\nu}, L\right)\right]^z \qquad T \in B(T_c, \rho) $$


### Estimation of the dynamical exponent $z$

Suppose we don't know $z$. Is it possible to estimate it ?
We have to run different simulations at the critical temperature (supposing that we know it) for different system sizes.
Then we observe that $\xi$ can be at most as big as the linear system size given the way in which is defined.
So that:

$$ \tau \sim [\min(\xi, L)]^z \sim L^z $$

So that we run different simulations for different $L$ and then find $z$ with a fit.

