We begin by the electronic Hamiltonian in the position basis:

$$ \left[ -\frac{\hbar^2}{2m}\sum_i^n\nabla^2_i - \frac{1}{2}k_e\sum_{i}\sum_J\frac{Z_Je^2}{|\bar{r}_i-\bar{R}_J|} + \frac{1}{2}k_e\sum_{i}\sum_j\frac{e^2}{|\bar{r}_i-\bar{r}_j|} \right]\Phi_e( \bar{r}) =\mathcal{E}\Phi_e( \bar{r})$$

Where we rescaled the energy using the nuclear-nuclear interaction.
We begin by separating the operators in internal, the one pertaining only to electrons, and external.
We obtain:

$$ \left[ H_{int}+V_{ext} \right]\Phi_e( \bar{r}) =\left[ H_{int}+\sum_iv_{ext}(\bar{r}_i) \right]\Phi_e( \bar{r})=\mathcal{E}\Phi_e( \bar{r})$$

Where:

$$ 
\begin{aligned}
&H_{int} = -\frac{\hbar^2}{2m}\sum_i^n\nabla^2_i + \frac{1}{2}k_e\sum_{i}\sum_j\frac{e^2}{|\bar{r}_i-\bar{r}_j|} \\
&v_{ext}(\bar{r}) =- \frac{1}{2}k_e\sum_J\frac{Z_Je^2}{|\bar{r}-\bar{R}_J|} 
\end{aligned}
$$

Assuming the ground state is non degenerate we want to prove the fundamental:

>[!info] **First Hohenberg-Kohn theorem**
There is a one-to-one correspondence between the ground-state number density of a N-electron system $n(\bar{r})$ and the external potential $v_{ext}(\bar{r})$ acting on it

 **Proof**
The proof will proceed in the following way: we first build a function $v_{ext}(\bar{r}) \Rightarrow n(\bar{r})$, then prove surjectivity and subsequently injectivity to prove bijectivity.

-  Function existence : $v_{ext}(\bar{r}) \Rightarrow n(\bar{r})$ 
If one knows $v_{ext}(\bar{r})$, then one knows the total Hamiltonian of the system, and can solve the associated Schrodinger equation to obtain the wavefunction $\psi_G(\bar{r}_1,\bar{r}_2,\dots,\bar{r}_n)$.
The wavefunction depends on $v_{ext}(\bar{r})$, so is its functional $\psi_G[v_{ext}]$.
One can then easily find the number density by:

$$ n(\bar{r}) = \braket{\psi_G(\bar{r}_1,\bar{r}_2,\dots,\bar{r}_n)|\sum_i\delta(\bar{r}-\bar{r}_i)|\psi_G(\bar{r}_1,\bar{r}_2,\dots,\bar{r}_n)} $$

Which is, in the end, a functional of $\psi_G$.
We can then imply that exist a functional $F$ such as:

$$ n(\bar{r}) = F(v_{ext}) $$

- Surjectivity
We consider only non-degenerate states. This achieve surjectivity.

- Injectivity
By reductio ad absurdum suppose that 2 different $v_{ext}(\bar{r})\neq v'_{ext}(\bar{r})+K$ (they must differ by more than a constant ) to which corresponds the same electron density $n(\bar{r}) = n'(\bar{r})$.
Consider now the Hamiltonians associated to said external potentials:

$$ H = H_{int}+V_{ext} \qquad H' = H_{int}+V'_{ext} $$

To which 2 different eigenfunctions $\psi_G$,$\psi'_G$ will be associated with corresponding eigenvalues $\mathcal{E},\mathcal{E}'$.
Now, if we evaluate the following energy functional:

$$\begin{aligned} 
\braket{\psi_G'|H|\psi_G'}&=\braket{\psi_G'|H_{int}+V_{ext} \pm V'_{ext} |\psi_G'} = \braket{\psi_G'|H'|\psi_G'} + \braket{\psi_G'|V_{ext} - V'_{ext} |\psi_G'} \\
&=\mathcal{E}' + \braket{\psi_G'|V_{ext} - V'_{ext} |\psi_G'}
\end{aligned} $$

But, by the [[Variational principle in QM]] we also have that : $\braket{\psi_G'|H|\psi_G'} \geq \mathcal{E}$. Given that the considered wavefunction is not the ground state, one can imply in the end:

$$ \mathcal{E}<\mathcal{E}' + \braket{\psi_G'|V_{ext} - V'_{ext} |\psi_G'} $$

By an equivalent reasoning on the functional $\braket{\psi_G|H'|\psi_G}$ one arrives to :

$$ \mathcal{E}'<\mathcal{E} + \braket{\psi_G|V'_{ext} - V_{ext} |\psi_G} $$

Finally one can prove that: 

$$\begin{aligned}
\braket{\psi_G|V'_{ext} - V_{ext} |\psi_G} &= \int d \bar{r}\ n(\bar{r})[v'_{ext}(\bar{r}) - v_{ext}(\bar{r})] \\
\braket{\psi'_G|V_{ext} - V'_{ext} |\psi'_G} &= \int d \bar{r}\ n'(\bar{r})[v_{ext}(\bar{r}) - v'_{ext}(\bar{r})]

\end{aligned}
$$

Given that $n(\bar{r}) = n'(\bar{r})$, we can imply: $\braket{\psi_G|V'_{ext} - V_{ext} |\psi_G} = -\braket{\psi'_G|V_{ext} - V'_{ext} |\psi'_G}$.
By using this fact and the inequalities found before, we find by summing them:

$$\mathcal{E}'+\mathcal{E}<\mathcal{E}'+\mathcal{E}$$

Which is a contradiction, leading to the conclusion that  $n(\bar{r}) \neq n'(\bar{r})$, which is the definition of injectivity. $\Box$

#### Consequences of the first Hohenberg-Kohn theorem
If the functional $n(\bar{r}) = F[v_{ext}]$ is one-to-one then is invertible, therefore exists a functional $G$ such as:

$$ v_{ext}=G[n(\bar{r})] $$

So is possible with the specification of the electron density to find the external potential.
Once found the $v_{ext}$ we are done, as we have shown in the first part of the proof that the following functionals exists

$$ v_{ext } \to  \psi_G[v_{ext}]$$

Then if one evaluates the expectation values:

$$ \braket{\psi_G|H|\psi_G}\equiv E[v_{ext}] \quad \braket{\psi_G|T|\psi_G}\equiv T[v_{ext}]\quad\braket{\psi_G|V_{ee}|\psi_G}\equiv V_{ee}[v_{ext}] $$

All of them can be seen as functional of $\psi_G$, and so cascading of $v_{ext}$.

Finally one can evaluate the energy functional in detail:

$$
\begin{aligned}
E^{HK}[n(\bar{r})] &= \braket{\psi_G|H|\psi_G} =\braket{\psi_G|H_{int}|\psi_G}+\braket{\psi_G|V_{ext}|\psi_G}=\\&=\mathcal{F}[n(\bar{r})] +\int d\bar{r}\ v_{ext}(\bar{r}) n(\bar{r}) 
\end{aligned}
$$

This expression is called **Hohenberg-Kohn energy functional**.
Notice that the functional $\mathcal{F}[n(\bar{r})]=T[n(\bar{r})]+V_{ee}[n(\bar{r})]$ is **universal** , i.e. depends only on the number of electrons of the system, not by external potential

>[!info] **Second Hohenberg-Kohn theorem**
>Given the Hohenberg-Kohn energy functional
>
>$$E^{HK}[n(\bar{r})] =\mathcal{F}[n(\bar{r})] +\int d\bar{r}\ v_{ext}(\bar{r}) n(\bar{r}) $$
>
>Given a trial electron density $n^*(\bar{r})$ that satifies the conditions: $n^*(\bar{r}) \geq 0$ and $\int d \bar{r}\  n^*(\bar{r})=N$, where $N$ is the number of electrons in the system, It holds that:
>
>$$E^{HK}[n(\bar{r})] \geq \mathcal{E}$$
>
>Where $\mathcal{E}$ is the ground state energy.

Notice that the second Hohenberg-Kohn theorem substitutes the variational principle for the wavefunctions with one concerning the electronic densities, but are equivalent.