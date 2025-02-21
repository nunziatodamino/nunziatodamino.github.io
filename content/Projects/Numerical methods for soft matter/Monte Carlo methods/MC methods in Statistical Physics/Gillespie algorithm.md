The idea behind the Gillespie algorithm is simple: instead of sampling a continuous Markov process trajectory through a discretized Metropolis update, leading to a lot of rejected moves, we instead sample the residence times from a distribution first and then build the trajectory consequently.

>[!info] **Gillespie algorithm**
while time total < time simulation
>	- Select a configuration $C_i$.
>	- Evaluate the escape rate $\lambda_{i} = \sum_{k\neq i} w_{ik}$
>	- Sample a residence time from the distribution $\tau \sim \lambda_{i}e^{-\lambda_{i}t}$
>	- Set total time $\to$ total time + $\tau$
>	- Select a new configuration $C_j$ according to the probability $\frac{w_{ij}}{\lambda_i}$
>

To prevent overflow add the following (Python) :
- configuration[-1] = configuration[-2] (to preserve equal length arrays)
- time_series[-1] = time_simulation



