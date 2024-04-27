The Markov's process is an hypothesis done on a [[Discrete stochastic process]], in order to be able to study its dynamics. 
Another name for this process is memory-less process due to the nature of the simplification we will make in the following.

>[!info] **Markov's process hypothesis**
>Given a stochastic process $\{ X_t \}_{t \in I}$, we call it a Markov's process or a Markov's chain if:
>$$ \mathbb{P}(x_it_i|x_{i-1}t_{i-1};\dots ;x_1t_1) \equiv \mathbb{P}(x_it_i|x_{i-1}t_{i-1}) \qquad \forall i \in I $$

We see that the conditional probability in a Markov's process doesn't depend on all the previous history of the process, but only from the previous timestep.

Given this simplification, we can write for a Markov's process:

$$ \mathbb{P}(x_0t_0;x_1t_1;\dots;x_nt_n) = \prod_{i=1}^{n} \mathbb{P}(x_it_i|x_{i-1}t_{i-1})\mathbb{P}(x_0t_0) $$
