The Curie-Weiss model is an [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/The ''Ising model'' framework|Ising-like model]], in which:

$$ J_{ij} = \frac{J}{N} \qquad h_i=h \qquad\forall(ij)\in B, \forall i \in V $$

So that we can write its Hamiltonian as:

$$ H(\bar{S}) = - \frac{J}{N} \sum_{(ij)\in B}S_iS_j - h \sum_{i \in V} S_i$$

Moreover this is a mean-field model, i.e. we consider that each site interacts with all the other sites, also said that the lattice is isomorphic to a fully connected graph.
With this consideration in mind, the summation becomes:

$$ H(\bar{S}) = - \frac{J}{N} \sum_{i<j}S_iS_j - h \sum_{i=1}^N S_i= - \frac{J}{2N} \sum_{i\neq j}S_iS_j - h \sum_{i=1}^N S_i$$

Make extreme attention that the sums must be considered in the sense $\sum_{i,j \in V | i<j}$ and $\sum_{i,j \in V | i\neq j}$ respectively, see [[Zettelkasten/Master's degree/Basic Physics/On sum notation in Physics]]

[[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/Curie-Weiss model solution with h=0]]
