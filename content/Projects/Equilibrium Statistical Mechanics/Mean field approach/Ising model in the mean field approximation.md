Suppose we consider the Ising model with infinite range, i.e. with Hamiltonian:

$$ -\mathscr{H} = \frac{1}{2}\sum_{i,j} J_{ij}s_is_j +  \sum_i  h_is_i$$

The main idea is to rewrite the interaction term:

$$ 
\begin{aligned}
s_is_j &= (s_i \pm\braket{s_i})(s_j \pm\braket{s_j})= \\
&=(s_i -\braket{s_i})(s_j -\braket{s_j}) + (s_i -\braket{s_i})\braket{s_j} + (s_j -\braket{s_j})\braket{s_i} + \braket{s_i}\braket{s_j}
\end{aligned}
$$

If we now apply the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Mean field approximation|Mean field approximation]], then clearly $(s_i -\braket{s_i})(s_j -\braket{s_j}) \simeq 0$. So in the end.

$$ 
\begin{aligned}
s_is_j
&= (s_i -\braket{s_i})\braket{s_j} + (s_j -\braket{s_j})\braket{s_i} + \braket{s_i}\braket{s_j} = \\
&=s_i\braket{s_j} +s_j\braket{s_i} - \braket{s_i}\braket{s_j}
\end{aligned}
$$

So that in the end we can write the Hamiltonian as:

$$ -\mathscr{H} = \frac{1}{2}\sum_{i,j} J_{ij}(s_i\braket{s_j} +s_j\braket{s_i}) - \frac{1}{2}\sum_{i,j}J_{ij} \braket{s_i}\braket{s_j} +  \sum_i  h_is_i$$

From now on will assume for simplicity a uniform magnetic field, i.e. $h_i = h$. As saw in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Order parameter in the Ising model|Order parameter in the Ising model]], we have that $\braket{s_i} = m$ is the average magnetization for spin, so the Hamiltonian can be rewritten as :

$$ 
\begin{aligned}
-\mathscr{H} &= \frac{1}{2}\sum_{i,j} J_{ij}\left[m(s_i+s_j)-m^2\right] + h \sum_i  s_i = \\
&= \sum_{i,j} mJ_{ij}s_i-\frac{1}{2}\sum_{i,j}m^2 J_{ij} + h \sum_i  s_i 

\end{aligned}
$$

Where in the last line we assumed implicitly $J_{ij} = J_{ji}$.
We can go further. Say we set $\sum_j J_{ij} =\tilde{J}_{i}$, and then assume translational invariance for each site, so that $\tilde{J}_{i} = \tilde{J}, \forall i$ and consequently $\sum_i \tilde{J} = N\tilde{J}$.
Then in the end:

$$ 
\begin{aligned}
-\mathscr{H} 
&= -\frac{1}{2}Nm^2 \tilde{J} +(m\tilde{J} +h) \sum_i  s_i 
\end{aligned}
$$

What about the standard Ising model, i.e, the one in which the interaction are restricted only between nearest neighbors ? 
The ansatz is the same, we just have to redefine interaction strength coefficient. Namely if $\sum_{\braket{i,j}} = \sum_i \sum_{j \in N}$, we define $\frac{1}{z} \sum_{j \in N} J_{ij} = \hat{J}_i$, where $z$ is the lattice coordination number. Then again one assume translational invariance $\hat{J}_{i} = \hat{J}, \forall i$ and consequently $\sum_i \hat{J} = N\hat{J}$.
In the end one obtains:

$$ 
\begin{aligned}
-\mathscr{H} 
&= -\frac{1}{2}Nzm^2 \hat{J} +(mz\hat{J} +h) \sum_i  s_i 
\end{aligned}
$$
