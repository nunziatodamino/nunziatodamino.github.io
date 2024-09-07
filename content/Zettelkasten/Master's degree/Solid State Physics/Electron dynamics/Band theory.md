The band model arises from the shortcomings of the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Free electron model for metals (Sommerfeld model)|Free electron model for metals (Sommerfeld model)]]. In fact, the latter is inconsistent with experimental measurements related to the [[Zettelkasten/Master's degree/Basic Physics/Hall effect]], specifically the measurement of the Hall coefficient in metals, which leads to an experimental prediction of the electron density per unit charge different from that predicted by the free electron model.

Considering the Hamiltonian for the one-electron problem:

$$ \hat{H}_{atomic} = \frac{\hat{p}^2}{2m} + \hat{V}(\bar{r})$$

**The main idea is that the potential in the Hamiltonian must obey the periodicity of the lattice**

$$\hat{V}(\bar{r}) = \hat{V}(\bar{R}+\bar{r})\qquad\forall\bar{R} \in B.L.$$

Implicitly in this equation there are several assumptions:

- **Rigid lattice approximation**. The nuclei are taken as fixed at their equilibrium positions; the large difference between the masses of the electrons and of the nuclei is the basic justification for this.
- **One-electron approximation in local form**. In essence, the complicated many-body electron problem is simplified to a single one-electron problem with an appropriate local potential. A conceptual scheme for this is provided by the Hartree-Fock theory, with a local approximation to the exchange potential, or by the density functional theory.
- **Relativistic effects are neglected**. Whenever necessary, one should replace the Schrödinger equation with the Dirac equation, all the techniques developed for the former equation being a generalization of the latter. Often one includes relativistic terms of interest by perturbation theory. This is the case in particular of the spin-orbit coupling, that has net effect mix band and spin states, producing a splitting of the non-relativistic levels.

We can distinguish two main points of view:

A first line of approach consists in expanding the crystal states in a convenient set of energy-independent Bloch functions: Bloch sums made of atomic orbitals in the tight-binding method, plane waves orthogonalized to core states in the orthogonalized plane wave method, plane waves in the pseudopotential method. 

A second line of approach (which includes the cellular method, the augmented plane wave method and the Green’s function method) is based on the single cell formulation and adopts energy-dependent basis functions solutions of the Schrödinger equation in the primitive cell. In the cellular formulation one considers the Wigner-Seitz cell (or subcells), an appropriate spherically symmetric potential within it, and the energy-dependent solutions of the radial Schrödinger equation regular at the origin; these solutions constitute the basis set for the expansion of the crystal wavefunctions, which must satisfy appropriate boundary conditions at the cell boundaries required by the Bloch theorem; the modality of imposing the boundary conditions characterizes the different cellular methods

![[Immagini/Band theory_1.png|500]]

In these notes we will concerned only with the first type of approach.

Why one method has to preferred over the other ?
The use of energy-independent or energy-dependent basis functions, suggested by physical motivations that may favor the choice of one procedure or the other in specific classes of materials, entails a quite distinct structure of the corresponding secular equations. For energy-independent basis function methods, the matrix elements of the [[secular equation]] are linear in energy for any energy, i.e. they have the canonical form $X_{ij}(E) = A_{ij} − E B_{ij}$ where the matrices A and B are energy independent (the matrix B is called overlap matrix, and must be non-singular and positive definite). For the solution of linear secular equations, highly efficient numerical techniques are available. For energy-dependent basis function methods, the matrix elements of the secular equations have a more complicated non-linear form, and in general the eigenvalues are worked out one-by-one searching for the zeroes of the secular determinant. 