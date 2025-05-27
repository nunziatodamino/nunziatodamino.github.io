By recalling from [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Analytic solution for the 1D spin-1 Ising model with uniform magnetic field|Analytic solution for the 1D spin-1 Ising model with uniform magnetic field]], we have for the transfer matrix the definition:

$$T_{s_is_j} \equiv \braket{s_i|T|s_j} = \exp \left( Ks_is_{j} +h\frac{s_i+s_{j}}{2}\right) $$

It's easy to show that $T$ is a $2 \times 2$ matrix. A generic spin $s_i \pm 1$, so we can associate, say $\ket{+1} = (1,0)^t$ and $\ket{-1} = (0,1)^t$.
With this choice we have an orthonormal basis, but is of course one of many possible choices. Given this choice the only dimensional possibility for $T$ is to be a $2 \times 2$ matrix.
We can now find the explicit form of $T$ by doing some calculation. We consider for our basis the set $\{ (1,0)^t, (0,1)^t \}$, where we associate $\ket{+1} \equiv \ket{s_i^{(+)}} \equiv (1,0)^t$ and $\ket{-1} \equiv \ket{s_i^{(-)}} \equiv (0,1)^t$.
Respect to this basis, we evaluate the elements of the matrix $T$:

$$\braket{+|T|+} = e^{K+h} \qquad \braket{+|T|-} = e^{-K} \qquad \braket{-|T|+} = e^{-K} \qquad \braket{-|T|-} = e^{K-h} \qquad
$$

So that one obtains:

$$ T = 
\begin{Vmatrix}
e^{K+h} & e^{-K} \\
e^{-K} & e^{K-h}
\end{Vmatrix} $$

If one wants, also orthonormality can be proven easily, by brute force:

$$ 
\begin{aligned}
\sum_{s_1=\pm1}\ket{s_i}\bra{s_i} &= \ket{s_i^{(+)}}\bra{s_i^{(+)}} + \ket{s_i^{(-)}}\bra{s_i^{(-)}}=  \\
&=  \begin{pmatrix}1 \\ 0\end{pmatrix}(1 \ 0)+ \begin{pmatrix}0 \\ 1\end{pmatrix}(0 \ 1) = \\
&= \begin{pmatrix}1 & 0 \\ 0 & 0  \end{pmatrix} +  \begin{pmatrix}0 & 0 \\ 0 & 1  \end{pmatrix} =\mathbb{1}_2 
\end{aligned}
$$

### A comment for higher order interactions

Suppose we want to include other then the nearest neighbor interaction the next nearest neighbor interaction.
Then for example, without magnetic field, the Hamiltonian is :

$$ \mathscr{H} = K_1 \sum_{i}s_is_{i+1} + K_2 \sum_{i}s_is_{i+1}s_{i+2}s_{i+3}$$

Now, for a given spin, its (meaningful) neighbors can have $2^4=16$ possible configurations in which they can interact with said spin. This situation can be described by a $4 \times 4$ transfer matrix:

$$ \braket{s_is_{i+1}|T|s_{i+2}s_{i+3}} $$

In general in an Ising model where spins can assume $q$ values and in which the meaningful sites of interaction are $p$, have transfer matrix with $q^p$ elements.