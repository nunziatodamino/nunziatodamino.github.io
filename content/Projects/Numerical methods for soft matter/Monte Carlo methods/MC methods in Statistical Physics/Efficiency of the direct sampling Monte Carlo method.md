Suppose One want to assign an accuracy to a MC method such as the [[Projects/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Crude Monte Carlo|Crude Monte Carlo]].
In general let's extent our reasoning to the general problem of evaluating:

$$ \int_Af(x)\rho(x)dx = \braket{f}_\rho$$

Where $\rho(x)$ is a probability distribution function.
We already [[Projects/Numerical methods for soft matter/Monte Carlo methods/Random numbers generation/Estimators of the mean and the variance|discussed]] that the estimator of this mean is the empirical (or sample) average :

$$ \text{Est}[\braket{f}_\rho] = \bar{f}_N = \frac{1}{N}\sum_{i=1}^N f(x_i)$$

Where $x_i$ are sampled from the distribution $\rho(x)$.
Now if we recall the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/(Strong) law of large numbers|(Strong) law of large numbers]], we have that if we have $N$ i.i.d random variables and from this we construct the empirical average, in the limit of $N \to +\infty$ it will converge to the mean.
We are sampling $\{x_i\}_{i=1,\dots,N}$ which is an [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Independent identical distributed random variables (i.i.d.)|i.i.d.]] sequence, also $\{f(x_i)\}_{i=1,\dots,N}$ will be i.i.d.
So we can call the strong law of large numbers result:

$$\bar{f}_N = \frac{1}{N}\sum_{i=1}^N f(x_i) \xrightarrow{N\to \infty} \braket{f}_\rho $$

Moreover by the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Central limit theorem|Central limit theorem]], we have the random variables $\{y_N\}$ defined by the law $y_N=\bar{f}_N = \frac{1}{N}\sum_{i=1}^N f(x_i)$:

$$ y_N \xrightarrow{N\to \infty} \mathcal{N}\left( \braket{f}_\rho, \frac{\sigma^2}{N}  \right) $$

Where:

$$ \sigma^2 = \mathbb{E}[(f(x)-\braket{f}_\rho)^2]=\int_A(f(x)-\braket{f}_\rho)^2\rho(x)dx$$

Notice that this quantity must also be estimate by MC methods.

Finally, putting together the results, we arrive to the fundamental:

$$ \text{Est}[\braket{f}_\rho] = \bar{f}_N \pm \frac{\sigma}{\sqrt{N}} $$

