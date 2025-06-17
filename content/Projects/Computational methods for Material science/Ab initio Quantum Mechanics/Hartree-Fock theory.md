Consider the TISO arising from [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/The Born-Oppenheimer approximation|The Born-Oppenheimer approximation]]:

$$(\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Phi_e(\{\bar{R}_I\}, \bar{r}) = \mathcal{E}_0(\{\bar{R}_I\})\Phi_e(\{\bar{R}_I\}, \bar{r})$$

Or its representation in the position basis:

$$ \left[ -\frac{\hbar^2}{2m}\sum_i^n\nabla^2_i - \frac{1}{2}k_e\sum_{i}\sum_J\frac{Z_Je^2}{|\bar{r}_i-\bar{R}_J|} + \frac{1}{2}k_e\sum_{i}\sum_j\frac{e^2}{|\bar{r}_i-\bar{r}_j|} \right]\Phi_e( \bar{r}) =\mathcal{E}\Phi_e( \bar{r})$$

Where we redefined for simplicity $\mathcal{E}=\mathcal{E}_0-V_{NN}$, giving that the latter is constant and also dropped the unnecessary notation, remembering that the nuclear position $\{\bar{R}_J\}$ are all considered fixed in the adiabatic approximation, and that $\bar{r}$ is a collective index that stands for $\bar{r}_1,\bar{r}_2,\dots,\bar{r}_n$ 
## Hartree approximation

We begin to approach the problem in the simplest way possible, by hypothesizing as wavefunction:

$$\Phi_e( \bar{\xi}_1,\bar{\xi}_2,\dots,\bar{\xi}_n)=\psi_1(\bar{\xi}_1)\psi_2(\bar{\xi}_2)\dots\psi_n(\bar{\xi}_n)$$

I.e. we are picturing the electrons as single identifiables entities. This kind approach is called in literature **one-electron approach**.
Note also that we used $\bar{\xi}=\bar{r},\sigma$ as a collective index to also capture the spin of the electron.
In order to be useful, we have to write our Hamiltonian as sum of one particle operator, so that we can we can write our TISO as a system of one electron equations.
This is is a problem though because the Hamiltonian contain an interaction term which is a 2 particle operator, so in order to proceed we can substitute it with the mean effect that the other electrons has on the one we are considering.
In order to do so we build a charge density as:

$$ \rho(\bar{r}) \simeq -e\sum_i|\psi_i(\bar{r})|^2 $$

And then can construct the electron-electron interaction on the i-th electron as:

$$ V_{ee} = k_e\int d\bar{r}' \frac{\rho(\bar{r}')}{|\bar{r}-\bar{r}'|} =-k_ee \sum_{j\neq i} \int d\bar{r}' \frac{|\psi_j(\bar{r}')|^2}{|\bar{r}-\bar{r}'|} =-k_ee \sum_{j\neq i} \int d\bar{r}'\psi^*_j(\bar{r}') \frac{1}{|\bar{r}-\bar{r}'|}\psi_j(\bar{r}') $$

Sometimes called in this context **Hartree potential**.
In this way we approximated the 2 particle operator in a sum of 1 particle operators, leading to reducing our problem in $n$ eigenvalue problems:

$$ \left[ -\frac{\hbar^2}{2m}\nabla^2_i - \frac{1}{2}k_e\sum_J\frac{Ze^2}{|\bar{r}_i-\bar{R}_J|} -k_ee \sum_{j\neq i} \int d\bar{r}' \frac{|\psi_j(\bar{r}')|^2}{|\bar{r}-\bar{r}'|} \right]\psi_i(\bar{r}) =\mathcal{E}_i\psi_i(\bar{r})$$

These are called **Hartree equations**.
Notice also that we did not include the spin in these equations. This because the operators doesn't act on the spin coordinates, but note that in the final solution spin must be added.
These equations presents big problems:
- Are self-consistent : the eigenfunctions ,which are our solutions, are also used in the potential determination. These kind of equations are solved using the following algorithm: we guess a wavefunction (usually we use a theoretical function, i.e. the free electron function for the atom composing the system in question) and do the calculation. Then one obtains a new function, and can redo the calculation (more often, an appropriate weighted average of input and output ones is used). One proceeds in this fashion until the difference in modulus between the functions in 2 successive steps are small according to one specifications.
- The very gigantic problem is that **these equations does not satisfy the Pauli principle, because the function is not antisymmetric.** This problem is solved by the Hartree-Fock theory.

## Hartree-Fock approximation

As we seen in the preceding paragraph, we need a wavefunction that satisfies the [[Zettelkasten/Master's degree/Basic Physics/Bosons and fermions - the symmetrization postulate|Bosons and fermions - the symmetrization postulate]].
To do so one can state that the wavefunction is in form of a [[Zettelkasten/Master's degree/Basic Physics/Slater determinant]]:

$$\Phi_e( \bar{\xi}_1,\bar{\xi}_2,\dots,\bar{\xi}_n)= 
\frac{1}{\sqrt{n!}} \det 
\begin{Vmatrix}
\psi_1(\bar{\xi}_1) &\psi_1(\bar{\xi}_2)&\dots & \psi_1 (\bar{\xi}_n) \\
\psi_2(\bar{\xi}_1) &\psi_2(\bar{\xi}_2)& \dots & \psi_2 (\bar{\xi}_n) \\
\vdots & \vdots & \dots& \vdots \\
\psi_n(\bar{\xi}_1) &\psi_n(\bar{\xi}_2)& \dots & \psi_n (\bar{\xi}_n) \\
\end{Vmatrix}\equiv \frac{1}{\sqrt{n!}} \det (\psi_1(\bar{\xi}_1) \psi_1(\bar{\xi}_2)\dots \psi_1 (\bar{\xi}_n) )
$$


==**Nota** Il professore fa questo parte dall'Ashcroft-Mermin.
Si trova un discorso migliore nel Grosso-Parravicini==

One can prove using the [[Variational principle in QM]] that each orbital must satisfy the so called **Hartree-Fock equations**:

$$ \left[ h_i + \frac{1}{2}k_e\sum_j(J_{ij}-K_{ij})\right]\psi_i(\bar{\xi})=\mathcal{E}_i\psi_i(\bar{\xi}) $$

Where:

$$\begin{aligned} 
& h_i = -\frac{\hbar^2}{2m}\nabla^2_i - \frac{1}{2}k_e\sum_J\frac{Ze^2}{|\bar{r}_i-\bar{R}_J|} \\
& J_{ij} = \iint d\bar{\xi}_1d\bar{\xi}_2\ \psi_i(\bar{\xi_1})\psi^*_i(\bar{\xi}_1)\left( \frac{1}{|\bar{r}_1-\bar{r}_2|} \right)\psi^*_j(\bar{\xi_2})\psi_j(\bar{\xi}_2) \\
& K_{ij} = \iint d\bar{\xi}_1d\bar{\xi}_2\ \psi^*_i(\bar{\xi_1})\psi_j(\bar{\xi}_1)\left( \frac{1}{|\bar{r}_1-\bar{r}_2|} \right)\psi_i(\bar{\xi_2})\psi^*_j(\bar{\xi}_2) \\

\end{aligned}$$

And we call $J_{ij}$ and $K_{ij}$ Coulomb integrals and exchange integrals respectively
Notice that:

$$ K_{ii} = J_{ii} $$

