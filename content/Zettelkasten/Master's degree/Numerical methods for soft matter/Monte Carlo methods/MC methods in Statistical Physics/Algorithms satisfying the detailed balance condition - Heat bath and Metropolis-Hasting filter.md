Suppose I want to build a Markov chain that satisfies the detailed balance condition where the state space of the Markov chain is composed of configurations $\{C\}$ and where I denote for simplicity $C_t\equiv i$, $C_{t+1}\equiv j$

Computationally speaking is the user that decides how the configuration evolves from $t$ to $t+1$ (local shift, rotation, spin-flipping, etc...).
Moreover the proposed moves may or may not happen in the system (if it happens always this we'll not be a Markov chain), so each proposed move happens with a certain probability $\Gamma_{ij}$ , i.e. we can go from configuration $C_t$ to configuration $C_{t+1}$ with the proposed move with a certain probability $\Gamma_{ij}$.
Now, not all moves are useful to reach the invariant state distribution, some we'll help us to get closer, some we'll make us move away from it.
So we must accept or reject the move, again with a certain probability $a_{ij}$, with the same notation meaning.
In the end we can build a stochastic matrix in the following way : if we moved $i \to j$

$$ P_{ij}=\Gamma_{ij}a_{ij} \qquad \forall i \neq j $$

If we didn't move $(i \to j=i)$:

$$ P_{ii}=1-\sum_{j\neq i}p_{ij} =1-\sum_{j\neq i}\Gamma_{ij}a_{ij} \pm\Gamma_{ii} = 1+\Gamma_{ii}-\sum_{j}\Gamma_{ij}a_{ij} = \Gamma_{ii}+\sum_{j}\Gamma_{ij}(1-a_{ij})$$

Where we implicitly used the normalization condition $\sum_j \Gamma_{ij}= 1$.

Now we write explicitly the detailed balance condition:

$$ \pi(j)P_{ji}=\pi(i)P_{ij} \iff  \pi(j)\Gamma_{ji}a_{ji} =\pi(i)\Gamma_{ij}a_{ij}  $$

So we obtain:

$$ \frac{a_{ij}}{a_{ji}}=\frac{\pi(j)\Gamma_{ji}}{\pi(i)\Gamma_{ij}} $$

In order for this to be achieved is sufficient to consider:

$$a_{ij}=F\left( \frac{\pi(j)\Gamma_{ji}}{\pi(i)\Gamma_{ij}} \right)\qquad\mid \ F:[0,+\infty]\to[0,1], \qquad \frac{F(z)}{F(1/z)}=z$$

In general there are 2 common choices:

- Metropolis-Hasting: 

$$ a_{ij} = \min(1,z) $$

- Heat bath

$$ a_{ij} = \frac{z}{1+z} $$

Note that the move choices is reversible, i.e. $\Gamma_{ij}= \Gamma_{ji}$ the algorithm greatly simplifies.