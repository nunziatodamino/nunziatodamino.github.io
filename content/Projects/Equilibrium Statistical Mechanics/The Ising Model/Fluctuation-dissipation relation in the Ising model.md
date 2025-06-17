Suppose we want to evaluate how spin changes due to a magnetic not locally as we have seen with [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Connecting the correlation function and the response function in the Ising model|the response function]], but globally, across the whole system.
Then clearly one has to evaluate:

$$\chi = \sum_{i,j}\frac{\partial\braket{s_i}}{\partial h_j} $$

We will call this quantity magnetic susceptibility of the system. We have:

$$
\begin{aligned}
\chi &= \sum_{i,j}\frac{\partial\braket{s_i}}{\partial h_j} = \beta \sum_{i,j}G_C(i,j) 
\end{aligned}
$$

If additionally the spin random field is homogeneous (translational invariant), i.e. in the presence of a uniform magnetic field $h_i = h$, then one can further evaluate:

$$
\begin{aligned}
\chi &= \beta \sum_{i,j}G_C(\bar{r}_i -\bar{r}_j)= \beta \sum_{i,j}G_C(\bar{r}_j) = N\beta\sum_{j}G_C(\bar{r}_j)
\end{aligned}
$$

Note that to eliminate the system size $N$ dependency one often considers the magnetic susceptibility per spin $\tilde{\chi} = \frac{\chi}{N}$. 
Is of interest to consider the continuous version:

$$
\begin{aligned}
\tilde{\chi} = \beta\sum_{j}G_C(\bar{r}_j)  \to \frac{\beta}{a^d}\int_{\Omega}d^dr\ G_c(\bar{r})
\end{aligned}
$$
