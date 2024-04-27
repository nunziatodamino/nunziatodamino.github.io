>[!info] Bloch Theorem
Hp. Consider the system defined by the following Hamiltonian:
$$ \hat{H}_{atomic} = \frac{\hat{p}^2}{2m} + \hat{V}(\bar{r}) \qquad \hat{V}(\bar{r}) = \hat{V}(\bar{R}+\bar{r})\qquad\forall\bar{R} \in B.L.$$
This represents a problem with a periodic potential in a Bravais lattice.
Th. For this type of problem, the following facts hold:
>1) The wave vector $\bar{k}=(k_x, k_y, k_z)$ is a good quantum number for classifying the solutions of the time-independent Schrödinger equation, that is:
$$ \hat{H}\Psi_{\bar{k}}(\bar{r}) = E_{\bar{k}}\Psi_{\bar{k}}(\bar{r}) $$
Furthermore, the wave function is periodic in $\bar{k}$ for every $\bar{k}$ belonging to the first Brillouin zone:
$$ \Psi_{\bar{k}}(\bar{r})\ \text{is periodic in } \bar{k},\ \forall\bar{k} \in B.Z. $$
>2) The solutions have the following property:
$$  \Psi_{\bar{k}}(\bar{r})=u_{\bar{k}}(\bar{r})e^{i\bar{k}\cdot\bar{r}}  $$
Here, $\bar{u}_{\bar{k}}(\bar{r})$ is periodic in $\bar{r}$ with the same periodicity as the potential.

Let's proceed with some observations.

In general, given a Hamiltonian with a particular symmetry, its eigenstates do not possess that symmetry (e.g., an infinite potential well with inversion symmetry or a hydrogen atom with spherical symmetry). However, they still have some "residual symmetry" generally related to parity operators or similar concepts. 
The Bloch theorem expresses the residual symmetry for a Hamiltonian invariant under translations on a lattice.

The theorem is proved here: [[The central equation as a proof of the Bloch theorem]]

[[Find the wavefunction of the Bloch theorem Hamiltonian]]