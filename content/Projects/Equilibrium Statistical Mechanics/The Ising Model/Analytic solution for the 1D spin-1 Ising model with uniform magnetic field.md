Again we investigate the 1D spin-1 Ising model, as we did in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Analytic solution for the 1D spin-1 Ising model without magnetic field|Analytic solution for the 1D spin-1 Ising model without magnetic field]], but this time, we introduce an uniform magnetic field $(H \neq 0)$.
In order to solve this problem is better to use [[Zettelkasten/Master's degree/Solid State Physics/Crystal structures and bonds/Born-Von Karman boundary conditions|Born-Von Karman boundary conditions]], or simply said PBC. In 1D they are simply $s_{N+1} = s_1$.
## Transfer matrix method

Again in many ways the problem can be solved. We present here the transfer matrix method.
First we write the partition function for a chain of $N$ spins:

$$
\begin{aligned}
\mathcal{Z}(\beta, K, h) &= \text{Tr} \exp\left( -\beta \mathscr{H} \right)= \text{Tr} \exp\left( \beta J \sum_{<i,j>}s_is_j +\beta H \sum_is_i \right) = \\
&= \text{Tr} \exp\left( K\sum_{i=1}^{N-1}s_is_{i+1} +h\sum_{i=1}^Ns_i \right)
\end{aligned}
$$

Where we clearly defined $\beta J \equiv K$ and $\beta H \equiv h$.
Note now that we can propose for this canonical partition function, the following symmetric decomposition if consider the canonical partition function for $N+1$ spins:

$$
\begin{aligned}
\mathcal{Z}_{N+1}(\beta, K, h) &= \text{Tr} \exp\left( K\sum_{i=1}^{N}s_is_{i+1} +h\sum_{i=1}^{N+1}s_i \right) = \text{Tr} \exp\left( K\sum_{i=1}^{N}s_is_{i+1} +h\sum_{i=1}^{N+1} \frac{s_i}{2}+\frac{s_i}{2} \right) = \\
&= \text{Tr}\exp\left( Ks_1s_{2} + \dots + Ks_{N-1}s_{N} +h\frac{s_{N-1}+s_N}{2} + Ks_{N}s_{N+1} +h\frac{s_{N}+s_{N+1}}{2} \right) = \\
&= \text{Tr}\exp\left( Ks_1s_{2} + \dots + Ks_{N-1}s_{N} +h\frac{s_{N-1}+s_N}{2} + Ks_{N}s_{1} +h\frac{s_{N}+s_{1}}{2} \right) = \\
&= \text{Tr} \prod_{i=1}^{N}\exp \left( Ks_is_{i+i} +h\frac{s_i+s_{i+1}}{2}\right)
\end{aligned}
$$

Equivalently, one can define a matrix $T$ such that, for any $s_i, s_j$:

$$T_{s_is_j} \equiv \braket{s_i|T|s_j} = \exp \left( Ks_is_{j} +h\frac{s_i+s_{j}}{2}\right) $$

This matrix is called transfer matrix. It's explicit form and some property of $T$ are proven [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Explicit form and property of the transfer matrix for the 1D Ising model|here]].
Given these considerations, we can write the partition function as:

$$ \mathcal{Z}_{N+1}(\beta, K, h) = \text{Tr}[\braket{s_1|T|s_2}\braket{s_2|T|s_3}\dots\braket{s_{N-1}|T|s_N}\braket{s_N|T|s_1}] $$

Is now interesting to note that, given the orthonormality property proved for the spin state vector, i.e. $\sum_{s_1=\pm1}\ket{s_i}\bra{s_i} = \mathbb{1}$:

$$ 
\begin{aligned}
\mathcal{Z}_{N+1}(\beta, K, h) &= \sum_{s_1 = \pm 1}  \braket{s_1|T\sum_{s_2 = \pm 1}|s_2}\braket{s_2|T\sum_{s_3 = \pm 1}|s_3}\dots\braket{s_{N-1}|T\sum_{s_N = \pm 1}|s_N}\braket{s_N|T|s_1} = \\
&= \sum_{s_1 = \pm 1} \braket{s_1|T^N|s_1} = \braket{+|T^N|+} + \braket{-|T^N|-} = \text{Tr}\ T^N 
\end{aligned}
$$

Where in the last line with $\text{Tr}$ we mean the matrix trace operator.
As we have seen in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Explicit form and property of the transfer matrix for the 1D Ising model|Explicit form and property of the transfer matrix for the 1D Ising model]], the matrix $T$ is symmetric, so it can be diagonalized by a unitary transformation $(PP^{-1}=P^{-1}P=\mathbb{1})$, i.e. $T_D = P^{-1}TP$.
So one can obtain :

$$ 
\begin{aligned}
\mathcal{Z}_{N+1}(\beta, K, h) &= \text{Tr}\ T^N = \text{Tr}\ T\dots T = \text{Tr}\ PP^{-1}TPP^{-1}T\dots PP^{-1}TPP^{-1} = \\
&= \text{Tr}\ P T_D\dots T_DP^{-1} = \text{Tr}\ P T_D^NP^{-1} = \text{Tr}\ T_D^NPP^{-1} = \\
&= \text{Tr}\ T_D^N
\end{aligned}
$$

Where for the last inequality we use the cyclic property of the trace. Now given that the matrix is diagonal the trace is easy, and is simply the sum of the diagonal elements of $T_D^N$ which are just the eigenvalues of the matrix $T$ to the n-th power.

$$ \mathcal{Z}_{N+1}(\beta, K, h) = \text{Tr}\ T_D^N = \lambda_+^N + \lambda_-^N
 $$

