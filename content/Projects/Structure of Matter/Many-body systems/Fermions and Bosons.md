Say we want consider $N$ identical particles. 
Consider that each particle has associated an Hilbert space $\mathcal{H}$ with an orthonormal basis $\{\ket{\alpha}\}_{\alpha \in I}$ where $I$ is the set labeling the one-particle basis states. In general, $\mathcal H$ may be infinite-dimensional (In the sense that $I$ has infinite cardinality).
Consider now the space build as the tensor product:

$$\mathcal{H}_N = \mathcal{H} \otimes \dots \otimes \mathcal{H}$$

A basis of $\mathcal H_N$ can be constructed from the one-particle basis by taking all possible tensor products:

$$\ket{\alpha_1} \otimes \dots \otimes \ket{\alpha_N} \equiv \ket{\alpha_1, \dots, \alpha_N}$$

Where $\{\ket{\alpha_k}\}_{\alpha_k \in I_k}$ is the basis of the k-th space in the tensor product. Almost exclusively in literature the RHS is a shorthand notation.

Is easy to see that this mew basis is orthonormal. Indeed, using the scalar product on the tensor-product space:

$$
\braket{\alpha_1, \dots, \alpha_N|\beta_1, \dots, \beta_N} = 
\prod_{i=1}^{N}  
\braket{\alpha_i|\beta_i} = \prod_{i=1}^{N} \delta_{\alpha_i,\beta_i}  
$$

**At this stage the tensor factors are formally distinguishable: the $i$-th entry $\alpha_i$ specifies the state associated with the $i$-th tensor factor.**

For **identical particles**, however, the physical state cannot depend arbitrarily on this labeling. One must subsequently restrict $\mathcal H_N$ to states having the appropriate transformation property under permutations.

#### Bosons and fermions definitions

We define 2 types of particles, according on how their wavefunction transforms under [[A note on permutation operators|permutations]]:

Spatial notation suppresses spin: for particles with spin, replace every $\bar r_i$ below by $x_i=(\bar r_i,\sigma_i)$ and exchange the complete coordinates. The symmetry requirement concerns the full wavefunction, not its spatial factor alone.

$$
\begin{aligned}
\Psi_B(\bar r_{P_1},\ldots,\bar r_{P_N})
&=\Psi_B(\bar r_1,\ldots,\bar r_N). &\qquad\mbox{BOSONS} \\

\Psi_F(\bar r_{P_1},\ldots,\bar r_{P_N})
&=(-1)^P\Psi_F(\bar r_1,\ldots,\bar r_N). &\qquad\mbox{FERMIONS}
\end{aligned}
$$

Or better:

$$
\begin{aligned}
\hat P_\alpha\Psi=\Psi
\qquad \forall\alpha\in S_N
&\quad\text{Bosons}, \\

\hat P_\alpha\Psi=(-1)^{\alpha}\Psi
\qquad \forall\alpha\in S_N
&\quad\text{Fermions}.
\end{aligned}
$$

Notice that the 2 notation are equivalent as long as $p_i =\alpha(i)$.
Now we define the (anti)simmetrizer :

$$
\hat{\mathfrak{P}}_{B,F}\Psi(\bar r_1,\ldots,\bar r_N)
:=\frac1{N!}\sum_{P}\xi^P
\Psi(\bar r_{P_1},\ldots,\bar r_{P_N}).
$$

Or again, better:

$$
\hat{\mathfrak{P}}_{B,F}
=\frac1{N!}\sum_{\alpha\in S_N}
\xi^{\alpha}\hat P_\alpha
$$

Where in both cases:

$$
\xi=
\begin{cases}
+1&\text{Boson},\\
-1&\text{Fermion}.
\end{cases}
$$

 One can prove that [[The (anti)simmetrizer is a projection operator]].
 In this way we have that :

$$
\begin{aligned}
B_N &= \hat{\mathfrak{P}}_{B} \mathcal{H}_N \quad &\text{Symmetric Bosonic space} \\
F_N &= \hat{\mathfrak{P}}_{F} \mathcal{H}_N \quad &\text{Antisymmetric Fermionic space}
\end{aligned}
$$
