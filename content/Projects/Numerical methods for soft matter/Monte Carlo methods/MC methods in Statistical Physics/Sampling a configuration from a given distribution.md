Suppose I want to sample a configuration $\mathcal{C}$ from a particular probability distribution $\pi$.
I have essentially 2 choices:

- **Static MC** - I sample through [[Projects/Numerical methods for soft matter/Monte Carlo methods/Random numbers generation/Rejection method|Rejection method]], or [[Projects/Numerical methods for soft matter/Monte Carlo methods/Random numbers generation/Importance sampling method|Importance sampling method]]. But if the distribution is the classic:

$$ \pi(\mathcal{C}) = \frac{1}{\mathcal{Z}} e^{-\beta E(\mathcal{C})} $$

Then I will end have a bad time: 
- First I should be able to know the partition function
- Even if I know it the rejection will be high

- **Dynamic MC** - One builds a Markov chain that has a stochastic matrix such that its limiting distribution is the target distribution. In order to this the Markov chain must have specific properties:
	A) -  Must be regular
	B) - His limiting distribution must be stationary:
	 $$ \sum_{j \in \{\mathcal{C}\}}\pi(j)p_{ji} = \pi (i) $$

Note that in many cases instead of implementing condition B) one implements a more strict, but easier to implement condition, the **detailed balance**:

$$ \pi(j)p_{ji} = \pi(i)p_{ij} \qquad \forall i, j \in \{\mathcal{C}\} $$

One example of implementation of this kind of approach is [[Projects/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Algorithms satisfying the detailed balance condition - Heat bath and Metropolis-Hasting filter|Algorithms satisfying the detailed balance condition - Heat bath and Metropolis-Hasting filter]]
