### 2 dimension

We start from the 2 dimension case.
Suppose we have the joint PDF $\rho(x,y)$ and we want to sample from this distribution.
We can distinguish 2 cases.

- Independently distributed case:

$$ \rho(x,y) =\rho_1(x) \rho_2(y)$$

In this case is easy. we sample separately $x$ from $\rho_1$ and y from $\rho_2$. Then the pair $(x,y)$ is the same as the one sampled from $\rho$.
This is the case of a Gaussian distribution or in general can be achieved by a coordinate transformation if in presence of symmetries.

- General case

$$ \rho(x,y) \neq \rho_1(x) \rho_2(y)$$

In this case we need a different approach, called **marginalization and conditional sampling**. 
First we marginalize respect to $x$, i.e. we compute:

$$ \rho(x)= \int\rho(x,y)dy $$

Then one recalls the definition of conditional probability:

$$ \rho (y|x) =\frac{\rho (x,y)}{\rho (x)}  $$

From this we have the ingredients for our sampling algorithm.

- Evaluate the marginalization $\rho(x)$ (or $\rho(y)$ the one that is easier).
- Sample $x_i$ from $\rho(x)$ with 1D techniques such as [[Projects/Numerical methods for soft matter/Monte Carlo methods/Inversion method - Sampling from a well-behaved probability distribution in 1 dimension|Inversion method]] or [[Projects/Numerical methods for soft matter/Monte Carlo methods/Rejection method]]
- Then built the conditional PDF by definition
- Sample the $y_i$ from $\rho (y|x)$ with standard 1D techniques.