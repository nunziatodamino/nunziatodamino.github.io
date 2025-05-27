Suppose is not possible to easily fine an inverse CDF of the PDF $\rho(x)$ we want to sample from. What do we do ?
First we need a new, easier PDF (one from which is possible to sample with the [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/Random numbers generation/Inversion method - Sampling from a well-behaved probability distribution in 1 dimension|Inversion method]]) called $g(x)$ that satisfies the condition:

$$ \rho(x) \le cg(x)\qquad \forall x, \ c>1  $$

Note that the sampling is better if the more closer $c$ is to 1.
Then one has the following algorithm:

>[!info] **Rejection sampling algorithm**
>Suppose we want to sample $X \sim \rho(x)$ (target distribution) while we have the condition:
>$$ \rho(x) \le cg(x)\qquad \forall x, \ c>1  $$
>Where we call $g(x)$ auxiliary distribution.
>
>**Algorithm**
>- Sample $X \sim g(x)$
>- Sample $\xi \sim U_{[0,1]}(x)$
>- If $\xi \le \frac{\rho(X)}{cg(X)}$ then we conclude that $X \sim \rho(x)$, else retry.
>
