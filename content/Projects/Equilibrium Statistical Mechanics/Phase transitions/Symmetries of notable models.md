## Discrete global symmetries

### Spin-1 Ising model
 
 We've already discussed in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/The global spin flip symmetry (Z_2 symmetry) of the spin-1 Ising model|The global spin flip symmetry (Z_2 symmetry) of the spin-1 Ising model]] that the spin-1 Ising model is invariant respect the group $\mathbb{Z}_2$.
This group contains the identity and the operator:

$$ \eta \sigma_i = \sigma_i \qquad \sigma_i = \{-1,+1\}$$

Clearly $\eta^2 = \mathbb{1}$.
### Potts model

The Potts model is an [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/The ''Ising model'' framework|Ising-like model]], where the spin can assume a discrete value from a given sequence $\{1,2, \dots,q\}$.
Then the Hamiltonian is clearly:

$$ \mathscr{H} = - \sum_{i<j} J_{ij}\ \delta_{\sigma_i\sigma_j} \qquad \sigma_i = \{1,2, \dots,q\} $$

This Hamiltonian is invariant under any permutation of the sequence $\{1,2, \dots,q\}$. We call $\mathbb{S}_q$ the group that represent all the possible permutation of the sequence. One notes that one can have a total of $q!$ permutations.
Note that this is different from $\mathbb{Z}_q$ that represents the cyclic permutations of the sequence $\{1,2, \dots,q\}$.

## Continuous global symmetries

### XY model ( O(2) model )

In the O(2) model the Hamiltonian is defined as:

$$ \mathscr{H} = - \sum_{i<j} J_{ij}\ \bar{\sigma}_i\cdot\bar{\sigma}_j \qquad ||\bar{\sigma}_i|| = 1 $$

And the spin vector is confined on a plane. Note that if we denote with $\vartheta_i$ the angle that a spin vector forms with the x-axis, then the Hamiltonian can be rewritten as:

$$ \mathscr{H} = - \sum_{i<j} J_{ij}\ \cos(\vartheta_i-\vartheta_j) \qquad ||\bar{\sigma}_i|| = 1 $$

If we now express the cosine via the complex exponential: $\cos(\vartheta_i-\vartheta_j) = \frac{1}{2} [e^{i(\vartheta_i-\vartheta_j)}+e^{i(\vartheta_j-\vartheta_i)}] = \frac{1}{2}[z_iz_j^*+z_i^*z_j]$,  where we set $z_i = e^{i \vartheta_i}$.

We can now state that the Hamiltonian is invariant respect to the transformation:

$$ z_i \to e^{i\alpha}z_i \qquad \forall i,\alpha \in \mathbb{R}  $$

The phases $e^{i\alpha}$ forms the multiplicative group $U(1)$ , which is equivalent to the distance preserving group in 2 dimensions, i.e. the orthogonal group $O(2)$.




