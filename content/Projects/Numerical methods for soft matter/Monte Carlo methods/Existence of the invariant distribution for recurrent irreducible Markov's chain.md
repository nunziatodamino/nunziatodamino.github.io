We want to discuss under which condition is guaranteed the existence of an [[Projects/Numerical methods for soft matter/Monte Carlo methods/Invariant distribution of a Markov's process|Invariant distribution]] for a Markov's chain.
### Mathematically rigorous path

We state the following 

>[!warning] **Necessary and sufficient condition for the existence of an invariant distribution for irreducible Markov's chain** (Grimmett, Stirzaker ; Ch. 6.4. Th. 3)
> An irreducible chain has a stationary distribution $\bar{\pi}$ if and only if all the states
are positive recurrent. 
In this case, $\bar{\pi}$ is the unique stationary distribution and is given by
 $$ \pi(j)= \frac{1}{\tau(j)} \quad \forall j $$ 
> Where $\tau(j)$ is the mean recurrence time of the state $j$

> [!warning] **Markov chain limit theorem** (Grimmett, Stirzaker ; Ch. 6.4. Th. 20)
> For an irreducible aperiodic chain, we have that:
> $$ (P^n)_{ij}\xrightarrow{n\to \infty} \frac{1}{\tau(j)} \quad \forall i,j$$
> 

This lead us to the conclusion that for an irreducible recurrent aperiodic chain:

$$ (P^n)_{ij}\xrightarrow{n\to \infty} \pi(j) \quad \forall i,j$$
### Lecture path

It is possible to prove that in general if a Markov's chain is [[Projects/Numerical methods for soft matter/Monte Carlo methods/Irreducible Markov's chain|recurrent irreducible]] then its [[Projects/Numerical methods for soft matter/Monte Carlo methods/Invariant distribution of a Markov's process|invariant distribution]]
will surely exists, and will be unique.

>[!warning] **Existence of the invariant distribution for recurrent irreducible Markov's chain** (Orlandini)
> *Hp.* Let's consider a recurrent irreducible Markov chain with transition matrix $P$.
> *Th.* There exists a unique invariant distribution $\pi$ that is strictly positive, and for any initial distribution $\bar{\mu}_0$:
> $$ \bar{\mu}_0\bar{P}^n=\bar{\mu}_n \xrightarrow{n\to \infty} \pi$$
> Where $\bar{P}^n$ is defined as:
> $$ \bar{P}^n = \frac{1}{n} \sum_{k=1}^n P^k $$
> And is called time-average of $P^n$.
> Moreover we have that :
> $$ (\bar{P}^n)_{ij} \xrightarrow{n\to \infty} \pi(j) \iff \frac{1}{n} \sum_{k=1}^n (P^k)_{ij} \xrightarrow{n\to \infty} \pi(j) $$

We ask ourselves under which hypothesis the stronger result $(P^n)_{ij} \xrightarrow{n\to \infty} \pi(j)$ holds.
This happens when we add the notion of [[Projects/Numerical methods for soft matter/Monte Carlo methods/Aperiodic Markov chain]].

>[!warning] **Existence of the invariant distribution for an recurrent irreducible aperiodic Markov's chain** (Orlandini)
> *Hp.* Let's consider a recurrent irreducible aperiodic Markov chain with transition matrix $P$.
> *Th.* There exists a unique invariant distribution $\bar{\pi}$ that is strictly positive, and for any initial distribution $\bar{\mu}_0$:
> $$ \bar{\mu}_0P^n=\bar{\mu}_n \xrightarrow{n\to \infty} \bar{\pi}$$
> Moreover we have that :
> $$ (P^n)_{ij} \xrightarrow{n\to \infty} \pi(j) $$
