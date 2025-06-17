We recall that in the cluster expansion of weakly interacting particles, one can write:

$$
\begin{aligned}
\mathcal{Q}_N \simeq \int_{\Gamma_q} \prod_{\alpha=1}^N d\bar{q}^\alpha\left[\prod_{i=1}^N\prod_{j>i} \left( 1+f_{ij}\right)\right]
\end{aligned}
$$

The correct way to enumerate the term via sums is crazy. Instead of indulging in useless mathematics, we write simply:

$$ \prod_{i=1}^N\prod_{j>i} \left( 1+f_{ij}\right) = 1 +\sum_{I_1}f_{ij} + \sum_{I_2}f_{ij}f_{kl} + \sum_{I_3}f_{ij}f_{kl}f_{mn} + \dots  $$

Where $I_n$ are the appropriate combinatoric sets. Here we want to find an easy way to write/work with them.

First we consider the easy case of $N = 8$.
In the configurational integral the following term will appear:

$$
t_A = \int f_{34} f_{68} \, d^3r_1 \cdots d^3r_8 \quad \text{and} \quad 
t_B = \int f_{12} f_{14} f_{67} \, d^3r_1 \cdots d^3r_8
$$

To them one can associate the 2 following graphs:

![[Images/Graph notation in the cluster expansion.png|500]]

respectively. Moreover we observe that only the connections are the meaningful ones, and the term not connected can be integrated at once, i.e. the further decomposition is possible:

![[Images/Graph notation in the cluster expansion-1.png|400]]

and for the other one:

![[Images/Graph notation in the cluster expansion-2.png|400]]

Now the idea is clear. We call each arrangement of all the $N$ particles configuration, while the connected particle in the graph will be called **clusters** (hence the method name).

One can then formally say the following.
We define the notion of **N-particle graph**. Consider the integral:
 $$ \int \left( f_\alpha f_\beta\dots f_\gamma \right)d^3r_1\dots d^3r_N $$

Where the set $(\alpha, \beta, \dots, \gamma)$ represents all the possible links. To this one can associate a $N$-graph with links $(\alpha, \beta, \dots, \gamma)$.
We say that a $N$-graph is distinct from another one if it present a different set of links $(\alpha', \beta', \dots, \gamma')$.

Clearly one has:

$$ \mathcal{Q}_N = \text{sum over all the possible distinct N-particle graphs}$$

So we transformed this from an integration problem to a counting problem (no one know if this is a good trade).

Given that the integral over non-cluster are easy, we need a notion to deal with the cluster integral.
We start with the definition of **l-cluster** i.e. an l-particle graph in which each of the l circles, numbered $1, 2, . . . , l$, is
directly or indirectly linked with every other circle. Here an example:

![[Images/Graph notation in the cluster expansion-3.png|400]]

It is obvious that a cluster as such cannot be decomposed into simpler graphs inasmuch as the corresponding term cannot be factorized into simpler terms.
Furthermore, a group of $l$ particles (except when $l = 1$ or 2) can lead to a variety of l-clusters, some of which may be equal in value; for instance, a group of three particles leads to four different 3-clusters, namely

![[Images/Graph notation in the cluster expansion-4.png|400]]

of which the first three are equal in value. In view of the variety of ways in which an l-cluster can appear, we may introduce the notion of a cluster integral $b_l$ , defined by

$$ 
b_l(V, T) = \frac{1}{l! \, \Lambda^{3(l-1)} V} \times \left( \text{the sum of all possible } l\text{-clusters} \right) $$

Note that $\Lambda$ is the De Broglie wavelength. 
We spend some words on this definition. This definition implies that the cluster integral is dimensionless, and in the thermodynamic limit it tends to the value $\tilde{b}_l$ which is independent of the size and the shape of the container.

We are now ready to find an expression for the configurational partition function.
First we observe the following: an N-particle graph will consist of a number of clusters of which, say, $m_1$ are 1-clusters, $m_2$ are 2-clusters, etc, so that the numbers $\{m_l\}$ must satisfy the restrictive condition:

$$ \sum_{l=1}^N lm_l = N$$

However a given set $\{m_l\}$ does not specify a single N-particle graph (say N=4, $m_1=1, m_3=1$ it can be 1 2-3-4 or 2 1-3-4 or many others) it represents a “collection of graphs” the sum total of which may be denoted by the symbol $S\{m_l \}$. We
may then write:

$$\mathcal{Q_N} =\sum_{\{m_l\}}S\{m_l\} \qquad \text{given}\  \sum_{l=1}^N lm_l = N   $$

Our next task consists of evaluating the sum $S\{m_l \}$.

First we count, from N particles, we have $N!$ possible permutations. But this is of course over-counting. 
We want now to adjust for the permutations of cluster of different size and for the organization of the particle within a cluster of fixed size.
Within each $l$-cluster I have $l$ particles, so $l!$ but i have $m_l$ clusters, so for each cluster $(l!)^{m_l}$ and for all clusters $\prod_{l}(l!)^{m_l}$
Now to account for the cluster permutation one does simply consider $m_l!$ for each cluster, so $\prod_{l}m_l!$

So in the end one has a total number of :

$$ \frac{N!}{\prod_{l}(l!)^{m_l}m_l!} $$

So finally one writes

$$\mathcal{Q_N} =\sum_{\{m_l\}} \left[ \frac{N!}{\prod_{l}(l!)^{m_l}m_l!}\right] \prod_l (b_l)^{m_l}$$

As the cluster integral is evaluated each time we encounter a different $l$-cluster, but is the same for the different cluster permutation.