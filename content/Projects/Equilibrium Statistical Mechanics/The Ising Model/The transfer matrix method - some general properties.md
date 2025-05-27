We have seen the transfer matrix method specifically for [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Analytic solution for the 1D spin-1 Ising model with uniform magnetic field|Analytic solution for the 1D spin-1 Ising model with uniform magnetic field]] and also some property of the [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Explicit form and property of the transfer matrix for the 1D Ising model|transfer matrix]] for the spin-1 Ising model.
We now generalize this to a model with any number of spins, or with a given number of spins but higher order interaction, i.e. beyond the first nearest neighbors.
In general we consider here a transfer matrix with dimension $(n+2) \times(n+2)$, so that :

$$ \ket{s_i^{(k)}} = \begin{pmatrix} 0 \\0 \\ \vdots\\ 1 \\ \vdots \\0 \end{pmatrix}_i $$

Where the ket is non-zero at the k-th position.
Is clear that :

$$ \sum_{s_i} \ket{s_i}\bra{s_1}=\mathbb{1}_{n+2} $$

We now define the diagonal matrix $S_i$ as :

$$ S_i = \sum_{s_i} \ket{s_i}s_i\bra{s_1} $$

We make some examples. 
- For $n+2 =2$:

$$ S_i = +1\begin{pmatrix}1 & 0 \\ 0 & 0  \end{pmatrix} -1  \begin{pmatrix}0 & 0 \\ 0 & 1  \end{pmatrix} = \begin{pmatrix}1 & 0 \\ 0 & -1  \end{pmatrix} $$

Which is the Pauli matrix $\sigma_z$.
- For $n+2 =3$ (Ising with vacancies, $s_i = \{-1, 0, +1\}$):

$$ S_i = +1\begin{pmatrix}1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0   \end{pmatrix} +0\begin{pmatrix}0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0   \end{pmatrix} - 1\begin{pmatrix}0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1   \end{pmatrix} =  \begin{pmatrix}1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -1   \end{pmatrix}


$$

Let's consider the transfer matrix $T$.
We will call $\{\ket{t_i}\}$ the set of its eigenvectors and $\{ \lambda_+, \lambda_-, \lambda_1, \dots, \lambda_n \}$ the set of its eigenvalues where specifically $\lambda_+, \lambda_-$ are the eigenvalues associate to the eigenvectors associates to spins $+1$ and $-1$ respectively.
Another way to say it is clearly $T\ket{t_i} = \lambda_i\ket{t_i}$.
Moreover note that this set is ordered : $\lambda_+>\lambda_-> \lambda_1> \dots> \lambda_n$
The transfer matrix $T$ allows the following representation:

$$ T = PT_DP^{-1}= T \mathbb{1} = \sum_i T \ket{t_i} \bra{t_i}= \sum_i\lambda_i \ket{t_i} \bra{t_i} = \sum_i \ket{t_i} \lambda_i \bra{t_i} $$

In the last line the scalar inside the projector is just an aesthetic choice. 
Note that this leads to a very nice representation of the power matrix:

$$ T^N = \sum_i \ket{t_i} \lambda^N_i \bra{t_i} $$

One can arrive at the same result of [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Analytic solution for the 1D spin-1 Ising model with uniform magnetic field|Analytic solution for the 1D spin-1 Ising model with uniform magnetic field]] for the canonical partition function, and find :

$$ \mathcal{Z}_{N}(\beta, K, h) = \text{Tr}\ T_D^N = \lambda_+^N + \lambda_-^N + \sum_{i=1}^k \lambda_{i}^N
 $$

From this we evaluate the bulk free energy in the usual way:

$$
\begin{aligned}
f_B(\beta, K, h) &= -k_BT \lim_{N\to +\infty} \frac{1}{N} \ln \mathcal{Z}_{N}(\beta, K, h) = -k_BT \lim_{N\to +\infty} \frac{1}{N} \ln \left[ \lambda_+^N + \lambda_-^N + \sum_{i=1}^k \lambda_{i}^N \right] = \\
&= -k_BT \lim_{N\to +\infty} \frac{1}{N} \ln \left[ \lambda_+^N  \left( 1 + \left(\frac{\lambda_-}{\lambda_+}\right)^N + \sum_{i=1}^k \left(\frac{\lambda_i}{\lambda_+}\right)^N \right)\right] = \\
&= -k_BT \lim_{N\to +\infty}\left[ \ln \lambda_+ + \ln \left( 1 + \left(\frac{\lambda_-}{\lambda_+}\right)^N + \sum_{i=1}^k \left(\frac{\lambda_i}{\lambda_+}\right)^N \right) \right]
\end{aligned}
$$

Given that the eigenvalues are ordered, $\frac{\lambda_-}{\lambda_+} < 1$ and $\frac{\lambda_i}{\lambda_+} <1, \ \forall i$. so we can conclude that $\lim_{N\to +\infty} \left(\frac{\lambda_-}{\lambda_+}\right)^N = 0$ and $\lim_{N\to +\infty} \left(\frac{\lambda_i}{\lambda_+}\right)^N = 0$ . In this way we obtain in the end:

$$ f_B(\beta, K, h) = -k_BT  \ln \lambda_+ $$

Which is a very interesting result : **the bulk behavior of the free energy depends only on the largest eigenvalue of the transfer matrix**.
This is nice, because is much simpler to evaluate the largest eigenvalue of a matrix instead of the whole spectrum. Moreover on the largest eigenvalue there exist the [[Projects/Equilibrium Statistical Mechanics/Phase transitions/Perron-Frobenius Theorem]], that guarantees that for a real square matrix the largest eigenvalue is guaranteed to exists unique and real