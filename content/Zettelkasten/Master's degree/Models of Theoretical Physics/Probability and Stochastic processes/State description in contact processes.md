In order to give a general definition, we begin to give a specific example:

![[Images/State description in contact processes.png|400]]

Suppose we want to describe the spreading of an infection in a network.
First of all there is an underlying [[graph]] that we suppose doesn't change over time for simplicity.
Each person at each node of the graph can assume 2 values, either 0 (healthy) or 1 (infected) at each timestep according to a predetermined set of rules
We indicate this by the following notation: at the node x:

$$ \sigma_x(t_0) = 
\begin{cases}
0\qquad \text{if the person is healthy at timestep}\ t_0\\
1\qquad \text{if the person is healthy at timestep}\ t_0\\
\end{cases} $$

Suppose that the graph has N nodes, at each timestep $t_0$ the system can be described by a sequence of these values:

$$ \bar{\sigma}(t_0) = (\sigma_1(t_0), \sigma_2(t_0), \dots \sigma_N(t_0)) $$

In the specific example in the picture $t_0=1$ and $\bar{\sigma}(1) = (\sigma_1(1), \sigma_2(1), \dots \sigma_{10}(1))=(0,0,0,1,0,1,1,1,1,0)$

We now consider the evolution of the system, by choosing a timestep large enough that at least one node can change state. If the timestep is too small, in fact, no evolution happens.

In our picture, at $t_0=2$, we have $\bar{\sigma}(2) = (\sigma_1(2), \sigma_2(2), \dots \sigma_{10}(2))=(0,0,0,1,0,1,1,1,1,1)$, i.e. the person in node 10 has been infected.

This type of description of the state is called detailed description, and we will call the probability that the system is found in a particular state at timestep $t$ :  $\mathbb{P}(\bar{\sigma}, t)$

Suppose that we don't care about this level of detail. We just want to know how many infected are at each timestep. In this way we lose the information on the graph structure, even if is still present.
Then, for our example, $\sigma(1)=5$ and $\sigma(2)=6$.

This type of description of the state is called coarse description and we will call the probability that the system is found in a particular state at timestep $t$ $\mathbb{P}(n, t)$, with $n$ the parameter of interest (in our case the number of infected)

Now we investigate, for all timesteps, how many of this descriptions are possible.

For the detailed description we have 2 possibilities for each of the $N$ nodes, for a total of $2^N$ detailed descriptions.

For the coarse description we have either no infected, or infected till all the nodes are, for a total of $N+1$.

If we call $E$ the set that contains these descriptions for all timesteps, we can say:

$$\text{card}(E) = 2^N \qquad \text{in a detailed description}$$

$$\text{card}(E) = N+1 \qquad \text{in a coarse description}$$

Then is clear why a coarse description is easier to investigate.