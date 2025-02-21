The idea is that we want to implement the [[Metropolis -Hasting algorithm]] to study the Ising model.
So we have to build a Markov chain for the configuration that adheres to the prescription in [[Projects/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Algorithms satisfying the detailed balance condition - Heat bath and Metropolis-Hasting filter|Algorithms satisfying the detailed balance condition - Heat bath and Metropolis-Hasting filter]].
Given than that :

$$ p_{ij}=\Gamma_{ij}a_{ij} \qquad a_{ij} = \min(1, e^{-\beta(E(j)-E(i))}) $$

The main building blocks of the algorithm are the matrix $\Gamma_{ij}$ and the $E(j)-E(i)$ difference.
There are, of course, different ways of doings this, according to what trial move the user want to use.
## Common preliminaries

We define for the Ising model the total energy of a set of configurations $\{ C \} = \{ \sigma_{r_1}, \dots, \sigma_{r_N} \}$ as :

$$ E(\mathcal{C}) = -J \sum_{\langle r_{i}r_j \rangle}\sigma_{r_i}\sigma_{r_i} $$

Where $\sigma_{r_i} = \pm 1$ and the sum notation denotes a sum only over nearest neighbors.

### Glauber dynamics

We choose a location $r_k$ and spin flip.
We go from the state $i = \{ \sigma_{r_1}, \dots,\sigma_{r_k} ,\dots,\sigma_{r_N} \}$ to the state $j =  \{ \sigma'_{r_1}, \dots,\sigma'_{r_k} ,\dots,\sigma'_{r_N} \} =\{ \sigma_{r_1}, \dots,-\sigma_{r_k} ,\dots,\sigma_{r_N} \}$
So the matrix $\Gamma_{ij}$ is easy to write:

$$ \Gamma_{ij} = 
\begin{cases}
1 \qquad &\text{if}\ \sigma'_{r_m} =  \sigma_{r_m},\text{for}\ r_m\neq r_k\ \text{and if}\ \sigma'_{r_k} =  - \sigma_{r_k} \\
0 \qquad &\text{otherwise}
\end{cases} $$

For the energy change, there is no need to evaluate the energy of the all system for both configuration, because in a local move only a single spin changes, so we need to count only the single spin contribution:

$$ \Delta E = E(j) - E(i) = -J\sum_{A}\sigma'_{r_k} + J\sum_{A}\sigma'_{r_k} = 2J\sum_{A}\sigma'_{r_k}  $$

Where $A$ is the set of configuration of the nearest neighbors of $r_k$.
**This local move must be performed $N$ to be achieve a single Monte Carlo step.**
There are 2 ways to perform the local move $N$ times.
##### Random spanning

The choice of $r_k$ is made randomly $N$ times. In this way

$$ P = \frac{1}{N}\sum_{r_k} P(r_k)$$
This satisfies the detailed balance condition.
##### Sequential spanning

The choice of $r_k$ is made sequentially from $r_1$ to $r_N$. In this way:

$$ P = P(r_1)P(r_2)\dots P(r_N) $$

This do not satisfies the detailed balance condition, but just the stationarity of the invariant distribution.

### Kawasaki dynamics
One chooses a pair of sites $r_k, r_l$ and **exchanges** both spins.
Note that this local move left the total magnetisation constant.
In this case we go from the state $i = \{ \sigma_{r_1}, \dots,\sigma_{r_k} ,\dots,\sigma_{r_l},\dots,\sigma_{r_N} \}$ to the state $j = \{ \sigma'_{r_1}, \dots,\sigma'_{r_k} ,\dots,\sigma'_{r_l},\dots,\sigma'_{r_N} \} = \{ \sigma_{r_1}, \dots,\sigma_{r_l} ,\dots,\sigma_{r_k},\dots,\sigma_{r_N} \}$
So the matrix $\Gamma_{ij}$ is easy to write:

$$ \Gamma_{ij} = 
\begin{cases}
1 \qquad &\text{if}\ \sigma'_{r_m} =  \sigma_{r_m},\text{for}\ r_m\neq r_k, r_l\ \text{and if}\ \sigma'_{r_k} =   \sigma_{r_l}, \sigma'_{r_l} =  \sigma_{r_k}  \\
0 \qquad &\text{otherwise}
\end{cases} $$

