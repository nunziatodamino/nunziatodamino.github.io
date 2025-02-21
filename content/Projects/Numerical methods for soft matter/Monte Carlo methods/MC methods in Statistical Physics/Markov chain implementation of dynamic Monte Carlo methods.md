Now the idea is set.
Suppose I have a [[canonical ensemble]]. I know that after a certain time the ensemble will reach an equilibrium state.
So If I'm able to build a Markov's chain that has as invariant distribution that coincides with this particular equilibrium state, then I can use the result in [[Projects/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Ergodic theorem on Markov's chains|Ergodic theorem on Markov's chains]] to evaluate kinda easily an observable averages.

Another way to see this problem is the following: given that the invariant distribution is a state vector, and so a probability distribution, any configuration with state vector $\bar{\mu}$ , will after some time, tends to the invariant distribution, so we can consider these configurations to be sampled from the invariant distribution.

So now the main problem remain to know what properties this chain must have (and so in the end its stochastic matrix) in order to reach for sure (and if it's possible as fast as possible) the invariant distribution.

- Must be ergodic (irreducible and aperiodic)
- By definition of invariant distribution:

$$ \sum_j\pi(j)P_{ji}=\pi(i) \qquad \forall i\in S $$

Usually is better to ask a more strong condition on the matrix, that is easier to implement:
-  Reversibility condition (also called detailed balance):
- 
$$ \pi(j)P_{ji}=\pi(i)P_{ij} \qquad \forall i,j\ \text{pairs}$$



