> [!info ] **Invariant distribution of a Markov's process**
> We define invariant distribution of a Markov's process the particular state vector $\bar{\pi}$, for which:
>
>$$\bar{\pi}=\bar{\pi}P$$

We make the following observation. If we take the transpose of the definition:

$$\bar{\pi}^t=(\bar{\pi}P)^t \iff P^t\bar{\pi}^t=\bar{\pi}^t \iff \sum_j\pi(j)P_{ji}=\pi(i)$$

Which is an eigenvalue equation with eigenvalue 1. This gives an easy way to find the invariant distribution, we solve the eigenvalue problem, and the eigenvectors will be the transposed invariant distributions.
In literature this is also said that the stationary distribution is a left eigenvector of the transition matrix $P$.

Note that , given that the invariant distribution is a state vector, each component is a probability distribution that doesn't change under the system dynamics.