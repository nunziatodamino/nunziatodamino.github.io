Notice that using a [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/Random numbers generation/Pseudorandom number generator (PRNG)|PRNG]] such as the [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/Random numbers generation/Mersenne twister|Mersenne twister]] we have a perfect way to sample from a uniform distribution from $[0,1]$.
The problem is that more often than not we want to sample from a distribution which is not the uniform distribution.

**We now propose a method for sampling from a probability distribution which has a [[Zettelkasten/Master's degree/Probability and Statistics/Cumulative density function (CDF)|Cumulative density function (CDF)]] that is invertible**.
## Continuous random variable

> [!note] **Inversion method algorithm**
> Suppose to have given the PDF of interest $\rho(x)$ . From this one can evaluate analytically the CDF $F(x)$ and its inverse $F^{-1}(y)$.
> Now we explain the algorithm:
>  - Generate a random number $\xi_i \in (0,1)$
>  - Evaluate $x_i = F^{-1}(\xi_i)$
>
>Then $x_i$ is distributed according to the PDF of interest $\rho(x)$.

#### Implementation in Python

Supposing we want to sample from the normal distribution, one can in first instance check if there is a dedicated library:

```python
from scipy.stats import norm

randomVariables = norm.rvs(size=1000) # generates 1000 normal distributed rvs
```

Or implement easily the algorithm, considering that for known distributions the inverse CDF should be implemented in some library:

```python
import random
from scipy.special import ndtri

iterations = 1000
randomVariables = []

for _ in range(iterations):
	randomVariables.append(ndtri(random.random()))
```

## Discrete random variable

Is the same, but we take the generalized inverse:

$$ F^{-1}(p) = \inf\{ x \in \mathbb{R} |F(x) \ge p \}\qquad \forall p \in [0,1]  $$

Recalling that for a discrete r.v. $F(x) = \sum_{x_i \le x} \mathbb{P}(X=x_i)$. 
So the idea is the same: we generate random number between 0 and 1, and choose $x_{draw}$ that satisfies the generalized inverse, i.e. $x_{draw} = \inf\{ x \in \mathbb{R} |F(x) \ge p \}$.
#### Why this works ?

I call the generated random variable through this method $x_i \equiv X$. 
I have:

$$ \mathbb{P}(X<x) = \mathbb{P}(F^{-1}(\xi)<x) = \mathbb{P}(F(F^{-1}(\xi))<F(x))=\mathbb{P}(\xi<F(x)) = F(x) $$

The last equality comes from the fact that the CDF of $\xi$ is $\mathbb{P}(\xi<u) = u, \forall u\in[0,1]$. With this we prove that in fact $X$ is sampled by $\rho$ because satisfies its CDF definition.
