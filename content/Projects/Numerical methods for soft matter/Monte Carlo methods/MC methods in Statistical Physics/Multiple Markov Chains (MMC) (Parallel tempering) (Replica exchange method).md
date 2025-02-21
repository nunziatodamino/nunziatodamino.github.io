In simulations of several systems, or one system at different temperatures, there might appear the phenomenon of ”quasi-ergodicity”: a small portion of the phase space is explored but never abandoned to reach other relevant portions because the intermediate states are very unlikely. Simulations plagued by this problem may yield long correlation times and poor sampling of the system’s features. To improve this sampling, the ”Multiple Markov Chains” (MMC) algorithm
was introduced (also known as ”parallel tempering” or ”replica exchange method”).
The basic idea is that we consider replicas of the system at different temperatures, each of one evolving through a Markov chain. If one of the systems gets stuck in a quasi-ergodicity situation, we swap its configuration in a different chain, hoping it gets going. A second advantage of the MMC method is that one achieves at once the sampling at different temperatures, which is often needed in any case for evaluating thermodynamic quantities.

We now build the algorithm.

Let's consider a set of M inverse temperatures $\beta_1 < \dots < \beta_M$. Of course this range has to be meaningful, i.e. has to contain a critical point or a known quasi-ergodicity region.
For each of this one consider the system in study in a given configuration $C$ in the canonical ensemble, so that for each Markov chain the limiting distribution is:

$$ \pi_k(C^{(i)}) = \frac{e^{-\beta_kE(C^{(i)})}}{\sum_C e^{-\beta_kE(C)}} =  \frac{e^{-\beta_kE(C^{(i)})}}{\mathcal{Z}_k}  $$

Given this setting, we can build a configuration vector for the set of all the Markov chains:

$$ \bar{C} = (C^{(1)}, \dots , C^{(M)}) $$

To each of which can be associated the total probability:

$$ \pi(\bar{C}) = \prod_{k=1}^M \pi_k(C^{(k)}) $$

Where we are supposing implicitly that the chains are independent (In order to achieve this in practice the rule of thumb in choosing the set of inverse temperature is such that the energy histograms of adjacent $\beta$'s have an overlap of $\sim 20 \%$) .

Now we consider the idea behind the algorithm: we want to swap 2 configurations in a move, supposing we go from $\bar{C} \to \bar{C}'$ :

$$ \bar{C} = (C^{(1)}, \dots ,C^{(k_1)} ,\dots,C^{(k_2)},\dots C^{(M)}) \qquad \bar{C}' = (C^{(1)}, \dots ,C^{(k_2)} ,\dots,C^{(k_1)},\dots C^{(M)}) $$

And consider the relative detailed balance condition:

$$
\begin{aligned}
\pi(\bar{C})p_{\bar{C}\bar{C}'} &= \pi(\bar{C}')p_{\bar{C}'\bar{C}} \\ 
\pi_1(C^{(1)})\dots\pi_{k_1}(C^{(k_1)})\dots\pi_{k_2}(C^{(k_2)})\dots\pi_M(C^{(M)}) p_{\bar{C}\bar{C}'} &= \pi_1(C^{(1)})\dots\pi_{k_1}(C^{(k_2)})\dots\pi_{k_2}(C^{(k_1)})\dots\pi_M(C^{(M)})p_{\bar{C}'\bar{C}} \\
\pi_{k_1}(C^{(k_1)})\pi_{k_2}(C^{(k_2)})p_{\bar{C}\bar{C}'} &= \pi_{k_1}(C^{(k_2)})\pi_{k_2}(C^{(k_1)})p_{\bar{C}'\bar{C}} \\
e^{-\beta_{k_1}E(C^{(k_1)})}e^{-\beta_{k_2}E(C^{(k_2)})}p_{\bar{C}\bar{C}'} &= e^{-\beta_{k_1}E(C^{(k_2)})}e^{-\beta_{k_2}E(C^{(k_1)})}p_{\bar{C}'\bar{C}} \\
\frac{p_{\bar{C}\bar{C}'}}{p_{\bar{C}'\bar{C}}} &= e^{-\beta_{k_1}[E(C^{(k_2)})-E(C^{(k_1)})] -\beta_{k_2}[E(C^{(k_1)})-E(C^{(k_2)})]} \\
\frac{p_{\bar{C}\bar{C}'}}{p_{\bar{C}'\bar{C}}} &= e^{(\beta_{k_2}-\beta_{k_1})[E(C^{(k_2)})-E(C^{(k_1)})] } 

\end{aligned}
$$

Which is suitable for a Metropolis proposal, as seen [[Projects/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Algorithms satisfying the detailed balance condition - Heat bath and Metropolis-Hasting filter|here]]. So we can write in the end:

$$p_{\bar{C}\bar{C}'} = \min (1, e^{(\beta_{k_2}-\beta_{k_1})[E(C^{(k_2)})-E(C^{(k_1)})] } )$$

Note that in general when implementing this algorithm, the swap is made only on adjacent chains, as one can see in the picture:

![[Multiple Markov Chains (MMC) (Parallel tempering) (Replica exchange method).png|400]]

### Generalization to a general limiting distribution 

Note that one can generalize the algorithm where instead of using weights from the canonical ensemble, one can use any limiting distribution $\pi$ that is in common between the chains.
In this case:

$$p_{\bar{C}\bar{C}'} = \min \left(1, \frac{ \pi_{k_2}(C^{(k_1)}) \pi_{k_1}(C^{(k_2)})}{\pi_{k_2}(C^{(k_2)}) \pi_{k_1}(C^{(k_1)})}
 \right)$$
