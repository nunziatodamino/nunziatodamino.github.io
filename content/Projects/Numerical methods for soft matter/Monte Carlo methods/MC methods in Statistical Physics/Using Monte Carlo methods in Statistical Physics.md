The main reason why we developed MC methods is to use them in the context of Statistical Mechanics.
Suppose we are in [[The canonical ensemble]] (NVT ensemble) and we want to evaluate the mean value of an observable.
Then by definition:

$$ \braket{O} = \frac{1}{\mathcal{Z}}\sum_C O(C)e^{-\beta E(C)} = \frac{\sum_C O(C)e^{-\beta E(C)}}{\sum_C e^{-\beta E(C)}} $$

Considering typical systems, the number of configurations $C$ is large, so is the same to evaluate integrals.
(In some sense $\sum_C O(C)e^{-\beta E(C)} \sim \int dC O(C)e^{-\beta E(C)}$).
We show now different methodologies involving MC methods to evaluate these quantity, with a comment on efficiency

#### Naive method
We sample uniformly on the configuration space and then evaluate our sums.
This is computationally stupid.
We can make an example with a 2D [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/The ''Ising model'' framework|Ising model]]. Supposing a square lattice of length $L=20 a$, where $a$ is the interatomic distance between the atoms, we have a total of $2^{{20}^2}$ configurations. Supposing a CPU with frequency $\sim\text{Ghz}$ we can expect $10^9$ operations per second.
Supposing we want to explore $10^{-12}$ of the configuration space we need $\sim 10^{99}$ seconds just for the sampling. (For comparison the age of the known universe is $\sim 10^{18}$ seconds)

This method is also stupid for another reason. If we write:

$$\braket{O} = \frac{1}{\mathcal{Z}}\sum_C O(C)e^{-\beta E(C)} \equiv \sum_C B (C)O(C) $$

The function $B(C)$ is non-zero for few configurations in the limit $\beta >> 1$, so much of the sampling will be wasted anyway. 
This consideration suggest naturally the following method.

#### Importance sampling - Static Monte Carlo

The idea is what we saw in the general [[Projects/Numerical methods for soft matter/Monte Carlo methods/Random numbers generation/Importance sampling method|Importance sampling method]]:

$$\braket{O}_{B} = \sum_C B (C)O(C) =\frac{\sum_C \frac{O(C)e^{-\beta E(C)}}{g(C)}g(C)}{\sum_C \frac{e^{-\beta E(C)}}{g(C)}g(C)} = \frac{\braket{\frac{O(C)e^{-\beta E(C)}}{g(C)}}_g}{\braket{\frac{e^{-\beta E(C)}}{g(C)}}_g} $$

If one chooses $g(C) \propto B(C)$ then we have simply:


$$\braket{O}_{g} = \frac{\braket{\frac{O(C)e^{-\beta E(C)}}{g(C)}}_g}{\braket{\frac{e^{-\beta E(C)}}{g(C)}}_g} \simeq \frac{1}{t_{max}}\sum_{i=1}^{t_{max}}O(C_i) $$

Where this time $C_i$ is not sampled uniformly from the configuration space but according to the PDF $g(C)$, i.e with probability proportional to the Boltzmann factor.
This method is mostly, however, quite inefficient, mainly for the following reasons:

- The configurations can be very complicated and to generate them from scratch is often a time-consuming
procedure (for example: the generation of a self-avoiding walk on a lattice).

-  The rejection technique to generate configurations that follow the desired $g(C)$ distribution could be very
inefficient because of the possible high rejection rates, especially if one chooses as $g(C)$ the Boltzmann
weight (very few populated microstates for $\beta >>1$).

• Considering $g(C) \propto B(C)$ requires the knowledge of $\mathcal{Z}$ itself that is actually one of the
quantities that we would like to estimate.

So we must resort to another approach.

[[Projects/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Markov chain implementation of dynamic Monte Carlo methods|Markov chain implementation of dynamic Monte Carlo methods]]
