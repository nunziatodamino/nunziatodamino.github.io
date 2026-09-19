Consider a single particle space $\mathcal H_s$:

$$
\mathcal H_s=\operatorname{span}
\left(|\alpha_1\rangle,\ldots,|\alpha_N\rangle,|\alpha_{N+1}\rangle,\ldots\right).
$$

And then the space of $N$ identical particles

$$
\mathcal H=\bigotimes_{i=1}^N\mathcal H_s.
$$

Say now we have a Hamiltonian
$\hat{\mathscr H}:\mathcal H\to\mathcal H$ and we want to find its
eigenstates via a variational approach.

For every nonzero trial state, the variational bound applies to the
Rayleigh quotient:

$$
\frac{\langle\Psi|\hat{\mathscr H}|\Psi\rangle}
{\langle\Psi|\Psi\rangle}\geq E_0,
\qquad |\Psi\rangle\neq0.
$$

Thus we construct

$$
\mathcal F(\Phi)
=\frac{\langle\Phi|\hat{\mathscr H}|\Phi\rangle}{\langle\Phi|\Phi\rangle}
$$

and minimize it in variation.

Let's start by choosing as initial trial function

$$
\Phi_{\mathrm{HF}}(\bar r_1,\ldots,\bar r_N)
=\frac1{\sqrt{N!}}\det
\begin{pmatrix}
\phi_{\alpha_1}(\bar r_1)&\cdots&\phi_{\alpha_1}(\bar r_N)\\
\vdots&\ddots&\vdots\\
\phi_{\alpha_N}(\bar r_1)&\cdots&\phi_{\alpha_N}(\bar r_N)
\end{pmatrix}.
$$

Consider the displacement:

$$
\phi_{\alpha_i}(\bar r)
\longrightarrow
\left(\phi_{\alpha_i}(\bar r)+\varepsilon\phi_{\alpha_j}(\bar r)\right)|d_i|.
$$

If $j\leq N$, the variation only mixes occupied orbitals among themselves and does not generate an independent Slater determinant. For $j\neq i$, adding a multiple of one occupied row to another leaves the
determinant unchanged.

So we must choose $j>N$.

Let's evaluate $d_i$:

$$
|d_i|^2\int d\bar r\,
\left(\phi_{\alpha_i}^*+\varepsilon^*\phi_{\alpha_j}^*\right)
\left(\phi_{\alpha_i}+\varepsilon\phi_{\alpha_j}\right)
=1+\mathcal O(|\varepsilon|^2).
$$

Given

$$
\int d\bar r\,\phi_{\alpha_i}^*(\bar r)\phi_{\alpha_j}(\bar r)
=\delta_{\alpha_i\alpha_j},
$$

so, at linear order in $\varepsilon$:

$$
|d_i|^2=1.
$$

So, if we denote

$$
|\Phi_{\mathrm{HF}}'\rangle
=|\Phi_{\mathrm{HF}}\rangle
+\varepsilon|\delta\Phi_{\mathrm{HF}}\rangle,
$$

then

$$
\mathcal F\left[|\Phi\rangle+\varepsilon|\delta\Phi\rangle\right]
-\mathcal F[|\Phi\rangle]
=\delta F+\mathcal O(\varepsilon^2).
$$

$$
\delta F
=\frac{
\left(\langle\Phi_{\mathrm{HF}}|+\varepsilon^*\langle\delta\Phi|\right)
\hat{\mathscr H}
\left(|\Phi_{\mathrm{HF}}\rangle+\varepsilon|\delta\Phi\rangle\right)
}{
\left(\langle\Phi_{\mathrm{HF}}|+\varepsilon^*\langle\delta\Phi|\right)
\left(|\Phi_{\mathrm{HF}}\rangle+\varepsilon|\delta\Phi\rangle\right)
}
-\mathcal F[\Phi_{\mathrm{HF}}]
$$

Let $E_{\mathrm{HF}}=\mathcal F[\Phi_{\mathrm{HF}}]$. Expanding both
numerator and denominator to first order gives

$$
\begin{aligned}
\delta F
=\frac{1}{\langle\Phi_{\mathrm{HF}}|\Phi_{\mathrm{HF}}\rangle}
\Bigl[&
\varepsilon^*\langle\delta\Phi|
(\hat{\mathscr H}-E_{\mathrm{HF}})
|\Phi_{\mathrm{HF}}\rangle\\
&+\varepsilon\langle\Phi_{\mathrm{HF}}|
(\hat{\mathscr H}-E_{\mathrm{HF}})
|\delta\Phi\rangle
\Bigr]
+\mathcal O(|\varepsilon|^2).
\end{aligned}
$$

Stationarity for arbitrary complex $\varepsilon$ implies

$$
\langle\delta\Phi|
(\hat{\mathscr H}-E_{\mathrm{HF}})
|\Phi_{\mathrm{HF}}\rangle=0.
$$

For the occupied-to-virtual single excitation used here,

$$
\langle\delta\Phi|\Phi_{\mathrm{HF}}\rangle=0,
$$

so the condition reduces to

$$
\langle\delta\Phi|\hat{\mathscr H}|\Phi_{\mathrm{HF}}\rangle=0.
$$

\hypertarget{hartreefock-stationarity-in-second-quantization}{%
\subsection{Hartree--Fock stationarity in second
quantization}\label{hartreefock-stationarity-in-second-quantization}}

We have shown:

$$
\delta F_{\mathrm{HF}}=0
\quad\Longleftrightarrow\quad
\langle\delta\Phi_{\mathrm{HF}}|
\hat{\mathscr H}|\Phi_{\mathrm{HF}}\rangle=0.
\qquad \text{(1)}
$$

So, in $\Phi$ quantization:

$$
|\Phi_{\mathrm{HF}}\rangle
=|\alpha_1,\ldots,\alpha_N\rangle_A
=\hat a_{\alpha_1}^\dagger\cdots
\hat a_{\alpha_N}^\dagger|0\rangle_A.
$$

$$
|\delta\Phi_{\mathrm{HF}}\rangle
=\hat a_{\alpha_j}^\dagger\hat a_{\alpha_i}
|\Phi_{\mathrm{HF}}\rangle,
\qquad
j>N,\quad i\leq N.
$$

Then, plugging these in (1):

$$
\langle\Phi_{\mathrm{HF}}|
\hat a_{\alpha_i}^\dagger\hat a_{\alpha_j}
\hat{\mathscr H}|\Phi_{\mathrm{HF}}\rangle=0.
$$

$$
\hat{\mathscr H}
=\sum_{\alpha\beta}t_{\alpha\beta}
\hat a_\alpha^\dagger\hat a_\beta
+\frac12\sum_{\alpha\beta\delta\gamma}
V_{\alpha\beta\delta\gamma}
\hat a_\alpha^\dagger\hat a_\beta^\dagger
\hat a_\gamma\hat a_\delta.
$$

$$
\sum_{\alpha\beta}t_{\alpha\beta}
\langle\Phi_{\mathrm{HF}}|
\hat a_{\alpha_i}^\dagger\hat a_{\alpha_j}
\hat a_\alpha^\dagger\hat a_\beta
|\Phi_{\mathrm{HF}}\rangle
$$

$$
+\frac12\sum_{\alpha\beta\delta\gamma}
V_{\alpha\beta\delta\gamma}
\langle\Phi_{\mathrm{HF}}|
\hat a_{\alpha_i}^\dagger\hat a_{\alpha_j}
\hat a_\alpha^\dagger\hat a_\beta^\dagger
\hat a_\gamma\hat a_\delta
|\Phi_{\mathrm{HF}}\rangle
=0.
$$

\begin{enumerate}
\def\labelenumi{\Roman{enumi})}
\tightlist
\item
\end{enumerate}

$$
\sum_{\alpha\beta}t_{\alpha\beta}
\langle\Phi_{\mathrm{HF}}|
\hat a_{\alpha_i}^\dagger\hat a_{\alpha_j}
\hat a_\alpha^\dagger\hat a_\beta
|\Phi_{\mathrm{HF}}\rangle.
$$

In order to be non-zero $\beta=i$, $\alpha=j$:

$$
\sum_{\alpha\beta}t_{\alpha\beta}
\delta_{i\beta}\delta_{\alpha j}
=t_{\alpha_j\alpha_i}.
$$

This is the one-body contribution. To evaluate the two-body
contribution, write $i$ for the occupied orbital removed from the
determinant and $a$ for the virtual orbital inserted in its place.
With

$$
V_{pqrs}=\langle pq|\hat v|rs\rangle,
$$

the relevant matrix element is

$$
\frac12\sum_{pqrs}V_{pqrs}
\langle\Phi_{\mathrm{HF}}|
\hat a_i^\dagger\hat a_a
\hat a_p^\dagger\hat a_q^\dagger
\hat a_s\hat a_r
|\Phi_{\mathrm{HF}}\rangle.
$$

The operator $\hat a_a$ must contract with one of the two creation
operators. Using the fermionic anticommutators,

$$
\hat a_a\hat a_p^\dagger\hat a_q^\dagger
=\delta_{ap}\hat a_q^\dagger
-\delta_{aq}\hat a_p^\dagger
+\hat a_p^\dagger\hat a_q^\dagger\hat a_a.
$$

The final term gives zero on the Hartree--Fock reference because the
virtual orbital $a$ is unoccupied. The remaining annihilation
operators must remove the occupied orbital $i$ and one further
occupied orbital $k$. There are four nonzero contractions:

$$
\begin{aligned}
(p,q;r,s)&=(a,k;i,k),\\
(p,q;r,s)&=(k,a;k,i),\\
(p,q;r,s)&=(a,k;k,i),\\
(p,q;r,s)&=(k,a;i,k).
\end{aligned}
$$

The first two have the direct sign, while the last two acquire the
exchange sign. Therefore

$$
\begin{aligned}
\langle\Phi_i^a|\hat V|\Phi_{\mathrm{HF}}\rangle
=\frac12\sum_{k\,\mathrm{occ}}
\Bigl(
&V_{akik}+V_{kaki}\\
&-V_{akki}-V_{kaik}
\Bigr).
\end{aligned}
$$

For a symmetric two-particle interaction,

$$
V_{kaki}=V_{akik},
\qquad
V_{kaik}=V_{akki},
$$

so the factor $1/2$ cancels the double occurrence and

$$
\langle\Phi_i^a|\hat V|\Phi_{\mathrm{HF}}\rangle
=\sum_{k\,\mathrm{occ}}
\left(
\langle ak|\hat v|ik\rangle
-\langle ak|\hat v|ki\rangle
\right).
$$

Combining the one- and two-body terms gives

$$
\langle\Phi_i^a|\hat{\mathscr H}|\Phi_{\mathrm{HF}}\rangle
=f_{ai},
$$

where

$$
f_{ai}
=t_{ai}
+\sum_{k\,\mathrm{occ}}
\left(
\langle ak|\hat v|ik\rangle
-\langle ak|\hat v|ki\rangle
\right).
$$

The first term in parentheses is the direct contribution and the second
is the exchange contribution. Hartree--Fock stationarity under every
occupied-to-virtual single excitation is therefore

$$
\boxed{
f_{ai}=0,
\qquad
\forall i\in\mathrm{occ},\quad a\in\mathrm{virt}
}.
$$

This is the Brillouin condition in a canonical Hartree--Fock basis.
