Given a [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Markov process|Markov process]], suppose we have want to know the probability:

$$P_{ij}^{(n)} \equiv \mathbb{P}(\xi_n=j|\xi_0=i) $$

The following results holds:

> [!info] Statistics of the n-steps
> For an homogeneous Markov's process:
> $$ P_{ij}^{(n)} = (P^n)_{ij} $$ 
> Where $(P^n)_{ij}$ is the ij-th element of the n-power product of the [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Stochastic matrix|Stochastic matrix]].

### Proof  

To do


### Recasting 

We show another way to recast the equation, in order to be useful in [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Vectorial form of the n-steps dynamics of a Markov's chain|Vectorial form of the n-steps dynamics of a Markov's chain]].
We start from the equation and use the definition of [[Conditional probability]] , and then reorder :

$$ \mathbb{P}(\xi_n=j,\xi_0=i)=(P^n)_{ij}\mathbb{P}(\xi_0=i) $$

Now we sum over $i$ on both sides.

$$ \sum_i\mathbb{P}(\xi_n=j,\xi_0=i)=\sum_i(P^n)_{ij}\mathbb{P}(\xi_0=i) $$

The member on the left is a marginalization, i.e. if use the [[Zettelkasten/Master's degree/Probability and Statistics/Law of total probability|Law of total probability]]:

$$ \mathbb{P}(\xi_n=j)=\sum_i(P^n)_{ij}\mathbb{P}(\xi_0=i) $$
