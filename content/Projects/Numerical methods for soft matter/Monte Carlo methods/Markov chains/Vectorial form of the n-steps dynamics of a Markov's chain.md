We begin first by stating the vectorial form and then showing where it comes from:

>[!info] **Vectorial form of the n-steps dynamics of a Markov's chain**
>We can write:
>$$\bar{\mu}_n = \bar{\mu}_0P^n$$
>Where $\bar{\mu}_n,\bar{\mu}_0$ are respectively the [[Projects/Numerical methods for soft matter/Monte Carlo methods/Markov chains/State vector of a Markov chain|state vectors]] at step n and in the initial configuration and $P^n$ is the n-square product of the stochastic matrix associated to the process

---

If we consider the equation component wise:

$$ \mu_n(j)=\sum_i\mu_0(i)(P^n)_{ij} \quad \forall j $$

So we have: 

$$ \mathbb{P}(\xi_n=j) = \sum_j\mathbb{P}(\xi_0=i)(P^n)_{ij} $$

This is the same form obtained in the "recasting" paragraph of [[Projects/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Probability to reach a state in n steps in a Markov's chain|Probability to reach a state in n steps in a Markov's chain]].

We observe that each component satisfies the recurrence relation:

$$ \mu_n(j)=\sum_i\mu_{n-1}(i)P_{ij} \quad \forall j \iff \mu_n=\mu_{n-1}P$$
