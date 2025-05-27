>[!info] **Ergodic theorem on Markov's chains**
> Given a function $O:S\to A\subseteq \mathbb{R}$ and an ergodic Markov's chain with state space $S$ and invariant distribution $\bar{\pi}$, it holds:
> $$ \frac{1}{n}\sum_{t=1}^n O(\xi_t) \xrightarrow{n \to \infty} \braket{O}_{\pi}$$

This theorem derives from the [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Law of large numbers for Markov chains|Law of large numbers for Markov chains]]:

$$\frac{1}{n}\sum_{t=1}^n O(\xi_t)=\frac{1}{n}\sum_{i\in S}\sum_{t=1}^n \mathbb{1}(\xi_t=i)O(i)  \xrightarrow{n \to \infty} \sum_{i\in S}\pi(i)O(i) = \braket{O}_{\pi} $$

Notice then that using the same ansatz in [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Efficiency of the direct sampling Monte Carlo method|Efficiency of the direct sampling Monte Carlo method]] one can arrive to the same conclusions, i.e. 