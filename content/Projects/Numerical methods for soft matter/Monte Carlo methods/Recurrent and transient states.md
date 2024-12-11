
We begin by defining a rigorous notion of time for a Markov chain:

>[!info] **First Hitting Time for a Given State $i$ **
>For a given state $i$ , we define the first hitting time as:
>$$ t_i = \inf \{ n \geq 1 \mid \xi_n = i \} $$
>This is the first occurrence (after step 0) when the Markov chain enters state $i$.

Now, we are ready to define:

> [!info] **Recurrent State**
> A state $i$ is called recurrent if:
> $$ \mathbb{P}(t_i < \infty) = 1 $$

This means that it is certain the Markov chain will return to state $i$ at some point in an infinite time horizon. In other words, once the chain reaches $i$, it will eventually revisit $i$ with probability 1.

> [!info] **Transient State**
> A state $i$ is called transient if:
> $$ \mathbb{P}(t_i < \infty) < 1 $$

This indicates that there is a non-zero probability the chain may never return to state $i$, even given infinite time. Thus, a transient state is likely to be visited only finitely many times.

