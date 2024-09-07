## On the integral convention $\int d \bar{k}$

In solid state physics, the notations $\int d^3k$ and $\int d\bar{k}$ both represent integrals over wave vectors in momentum space. However, there are subtle differences in their usage and interpretation.

1. $\int d^3k$:
   - Explicitly emphasizes the three-dimensional nature of the integral.
   - Indicates integration over all three components of the wave vector $\bar{k} = (k_x, k_y, k_z)$.
   - Useful in contexts where three-dimensionality is crucial.

2. $\int d\bar{k}$:
   - More compact notation, treating $\bar{k}$ as a single entity.
   - Common when the dimensionality is clear from the context.
   - Convenient for general discussions of wave vector integration.

Note that both notations are functionally the same in three-dimensional systems.
Also, while one can say that should be $d\bar{k}=(dk_x,dk_y,dk_z)$ , in this convention this is not the case.

Why not use $d^nk$ you say ? Welcome to Solid State, where right questions are answered by old habits established by Germans 100 years ago
## On the summation- integral exchange $\sum_{\bar{k} \in A} \iff \frac{V}{(2\pi)^3} \int_A d^3k$

Another drawback of Solid State physics is to assume such an exchange without proper clarification:

$$\sum_{\bar{k}} \iff \frac{V}{(2\pi)^3} \int d^3k$$

Let's improve the exchange by fixing the notation. It would be more accurate to write:

$$\sum_{\bar{k} \in A} \iff \frac{V}{(2\pi)^3} \int_A d^3k$$

Here, $A$ is a subset of reciprocal space (also valid for a generic $k$-space).

Now, let's explain the idea behind this exchange. When counting objects $p$ in a space $S$, we have two approaches: either simply count them, or know the density of objects per unit space and integrate over the space to find the total count.

Analogy: Suppose we have 5 poles, spaced 2 meters apart. We can either count them or consider that over a length of 10 meters, we have a pole density of 1/2 (5/10), and to calculate, we perform $\int_0^{10} (1/2) dx = 5$.

Therefore, the fundamental idea is:

$$\sum_{p \in S} p = \int_S dS \, \rho_p$$

In the case of Solid State physics, the density function is constant and can be taken out of the integral:

$$\sum_{p \in S} p = \rho_p \int_S dS$$