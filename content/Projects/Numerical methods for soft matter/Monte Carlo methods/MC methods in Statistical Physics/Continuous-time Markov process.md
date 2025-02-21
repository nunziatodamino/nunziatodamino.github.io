In general in natural systems evolution does not happen in discrete time, but rather in continuous time. 
So in general in order to achieve a better description of a system we must employ the use of a continuous Markov process based on the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Master equation|Master equation]].
While this reason is good and all, it does not justify why we cannot use instead a finer Markov chain.
There is a more profound reason to use a continuous-time process description instead of a discrete-time description:
if we have a system with an extreme rate of rejected moves, is computationally easier to evaluate how much time the system stays in the state (residence time) instead of evaluating aimlessly each move.

Suppose to have a system that can assume $N$ discrete states $i, j, \dots, k$ in continuous-time.
The possible transition $i \to j$ is defined by the transition rate $w_{ij}$. 
From Markovianity $p_{ij} = w_{ij}dt$, which we define as the probability per $dt$ to have a transition. We are implicitly assuming that $dt$ is small enough that only one transition is possible within this time, generally $dt \ll \frac{1}{\max_{i,j}(w_{ij})}$.
Also a transition probability within the same state can be introduced easily:

$$ p_{ii} = 1 - \sum_{j \neq i}p_{ij} = 1-\lambda_idt \qquad \lambda_i = \sum_{j \neq i}w_{ij} $$

Where the quantity $\lambda_i$ is called escape rate from state $i$.
**This approach is the one we already know, and permits us to build a discrete time Markov chain with transition matrix** $(P)_{ij} = p_{ij}$

**Now we construct the continuous-time process.**
We start by evaluating the probability that the system stays in state $i$ for a time $t$, composed, say of $q$ timesteps, i.e. $t=q dt$. So we have:

$$ p(t|i) = (1 - \lambda_i \, dt)^q \quad \xrightarrow[dt \to 0]{} \quad e^{-\lambda_i qdt} = e^{-\lambda_i t} $$

After this residence time the system jumps out of $i$ in a new state, that can be one of the other $N-1$.
So the probability of any jump occurring in a time $dt$ is:

$$ p(dt|i)^{tot}_{\text{jump}} = \sum_{j \neq i}w_{ij}dt = \lambda_i dt $$

While the probability for a specific jump to occur in a time $dt$, say for the transition $i \to j$, is:

$$ p(dt|i)_{\text{jump}} = w_{ij}dt $$

**In neither of these case the jump has to happen.**
Now we evaluate the probability of a given jump,  say for the transition $i \to j$, given that a jump has occurred in the system.
By definition of conditional probability:

$$ p(j|i) = \frac{p(dt|i)_{\text{jump}}}{p(dt|i)^{tot}_{\text{jump}}} = \frac{w_{ij}}{\lambda_i} $$


So we can now write the probability for an entire trajectory $\omega$.

![[Continuous-time Markov process.png|500]]

The trajectory $\omega$ is described by a sequence of states $\bar{C} = (C_0, C_1, \dots, C_n)$ and by their residence times $\bar{t} = (t_0, t_1, \dots, t_n)$
Such probability will depend also on the probability of the system to be in the initial configuration $p(C_0)$.
We have then:

$$ 
\begin{aligned}
P(\omega) &= p(C_0)\left(\prod_{\alpha=0}^{n-1}p(t|C_{\alpha})p(C_{\alpha})_{\text{jump}}\right)p(t|C_n)\\
P(\omega) &= p(C_0)\left(\prod_{\alpha=0}^{n-1}e^{-\lambda_{\alpha}t} w_{\alpha, \alpha +1}  \right)e^{-\lambda_{n}t} \\
P(\omega) &\simeq (dt)^np(C_0)e^{-\sum_{\alpha=0}^n\lambda_{\alpha}t}  \prod_{\alpha=0}^{n-1}w_{\alpha, \alpha +1} \\
\end{aligned}
$$

Generating this trajectory via a Metropolis algorithm is stupid and computationally expensive.
For this reason is used the [[Projects/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Gillespie algorithm|Gillespie algorithm]].
