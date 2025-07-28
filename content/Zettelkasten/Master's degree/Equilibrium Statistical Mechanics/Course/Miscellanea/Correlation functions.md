Let's consider 2 r.v.s. $\eta(\bar{r}, t)$ and $\xi(\bar{r}', t')$ such that, once chosen a position in space and time, a r.v. is extracted respect their probability density function.
We define correlation function between $\eta(\bar{r}, t)$ and $\xi(\bar{r}', t')$ the function:

$$ G = \braket{\eta(\bar{r}, t)\xi(\bar{r}', t')} $$

By defining $\bar{r}' = \bar{r} + \bar{R}$ and $t' = t + \tau$ one can write:

> [!info] **Correlation function between 2 general random variables**
> $$ G(\bar{R}, \tau) = \braket{\eta(\bar{r}, t)\xi(\bar{r} + \bar{R}, t + \tau)} $$

We can also define the so called connected version:

> [!info] **Connected correlation function between 2 general random variables**
> $$ G_c(\bar{R}, \tau) = G(\bar{R}, \tau) - \braket{\eta(\bar{r}, t)}\braket{\xi(\bar{r} + \bar{R}, t + \tau)} \equiv \text{Cov}(\eta(\bar{r}, t),\xi(\bar{r} + \bar{R}, t + \tau))$$

Note that this second definition generalize the concept of covariance.
In general, these functions depend on space and time, making them difficult (or even impossible) to plot directly. 
Thus, a common approach is to fix either space or time and consider the resulting reduced correlation function:

> [!info] **Space-correlation function between 2 general random variables**
> $$ \begin{aligned} 
> G(\bar{R}) &= \braket{\eta(\bar{r}, t)\xi(\bar{r} + \bar{R}, t)} \\
> G_c(\bar{R}) &= G(\bar{R}) - \braket{\eta(\bar{r}, t)}\braket{\xi(\bar{r} + \bar{R}, t)} \equiv \text{Cov}(\eta(\bar{r}, t),\xi(\bar{r} + \bar{R}, t))
> \end{aligned}$$

> [!info] **Time-correlation function between 2 general random variables**
> $$ \begin{aligned} 
> G(\tau) &= \braket{\eta(\bar{r}, t)\xi(\bar{r}, t+ \tau)} \\
> G_c(\tau) &= G(\tau) - \braket{\eta(\bar{r}, t)}\braket{\xi(\bar{r}, t + \tau)} \equiv \text{Cov}(\eta(\bar{r}, t),\xi(\bar{r} , t + \tau))
> \end{aligned}$$

**Note also that we can consider the correlation function between the same random variable.**
**In that case the same applies, but the auto prefix is added.**

Also for each of them there exists a **normalized version**: defined by:

$$ \rho \equiv \frac{G}{\sigma_{\eta}\sigma_\xi} $$

Useful in computation as is stable from a computational standpoint.

Moreover consider that in literature most people will call all the different type of correlation function simply "correlation function" (see [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Additional material/Rumors and legends about the correlation function|Rumors and legends about the correlation function]]).

## A particular attention for Statistical Mechanics and Physics-like systems

**A general work hypothesis (often confirmed by experiment), is that random variables in Statistical Mechanics are [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Miscellanea/Stationary and homogeneous random fields (optional)|Stationary and homogeneous random fields (optional)]].** That's why one can usually find in literature the following notation for the autocorrelation function:

$$G_{c}(\eta(\bar{r}, t), \eta(\bar{r}', t')) = G_{c}(\bar{r}-\bar{r}', t-t') $$
