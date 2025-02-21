Suppose to evaluate the following quantity:

$$ f_n(j)=\frac{1}{n} \sum_{k=1}^n\mathbb{1}(\xi_k=j) $$

Where $\mathbb{1}(\xi_k=j)$ is an indicator function :

$$ \mathbb{1}(\xi_k=j) = \begin{cases} 1 \qquad \text{if}\ \xi_k=j \\ 0 \qquad \text{otherwise} \end{cases} $$

The quantity $f_n(j)$ evaluates the fraction between the number of times a chain reached state $j$ in $n$ steps and the total steps $n$.
So in the end it evaluates the fraction of time it stayed in a state $j$.
If the chain is [[Projects/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Ergodic Markov's chain|ergodic]], an important result about the [[Projects/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Invariant distribution of a Markov's process|Invariant distribution]] can be stated:

>[!info] **Law of large numbers for Markov chains**
>If a chain is ergodic:
>
>$$\lim_n \mathbb{P}\{ \mid f_n(j) - \pi(j) \mid < \varepsilon \} =0 \qquad \forall \varepsilon > 0$$
>
>I.e. $f_n(j)$ converges to $\pi(j)$ in probability as $n \to +\infty$ 

Strictly related to this there is the [[Projects/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Ergodic theorem on Markov's chains]]

