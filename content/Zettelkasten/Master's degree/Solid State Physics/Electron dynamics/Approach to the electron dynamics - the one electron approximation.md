Suppose we have simplified the many-body problem motion using [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/The Born-Oppenheimer approximation|The Born-Oppenheimer approximation]], and we are analyzing the electronic part of the motion:

$$ [T_e + (V_{ee}+V_{nn} + V_{en})] \psi_e = \mathcal{E}(\{\bar{R}_I\}) \psi_e$$

In order to reduce this many-body equation to a single-body many possibilities are available.
The main one is called [[Projects/Computational methods for Material science/Ab initio Quantum Mechanics/Hartree-Fock theory|Hartree-Fock theory]] and consist of the following main steps:

- We impose symmetry on our problem by postulating that the nuclei in the above equation occupy fixed positions $\{\bar{R}_I\}$ within a Bravais lattice chosen a priori.
- We then simplify the potential problem by specifying, instead of the specific contributions seen above, a single potential $V\equiv V_{ee}+V_{nn} + V_{en}$ called the effective potential.
- We consider the many-body function as a product of single-body function:

$$\Psi_e( \bar{\xi}_1,\bar{\xi}_2,\dots,\bar{\xi}_n)= 
\frac{1}{\sqrt{n!}} \det 
\begin{Vmatrix}
\psi_1(\bar{\xi}_1) &\psi_1(\bar{\xi}_2)&\dots & \psi_1 (\bar{\xi}_n) \\
\psi_2(\bar{\xi}_1) &\psi_2(\bar{\xi}_2)& \dots & \psi_2 (\bar{\xi}_n) \\
\vdots & \vdots & \dots& \vdots \\
\psi_n(\bar{\xi}_1) &\psi_n(\bar{\xi}_2)& \dots & \psi_n (\bar{\xi}_n) \\
\end{Vmatrix}\equiv \frac{1}{\sqrt{n!}} \det (\psi_1(\bar{\xi}_1) \psi_1(\bar{\xi}_2)\dots \psi_1 (\bar{\xi}_n) )
$$

Using a Slater determinant to preserve antisymmetry. Note also that we used $\bar{\xi}=\bar{r},\sigma$ as a collective index to also capture the spin of the electron, but in preliminary analysis the spin can be neglected. 

Thus, the initial many-body problem reduces to a $N$ single-particle problem, where we aim to solve the equation for a single electron:

$$ (T+V(\bar{r}))\Psi  = E\Psi    $$

The effective potential must satisfy the essential symmetry property:

$$V(\bar{r}) = V(\bar{r} + \bar{R})$$

with $\bar{R}$ being a generic vector of the Bravais lattice considered in our problem.
Based on this approach, we can proceed in two ways:

- Consider the potential to be constant throughout the crystal (effectively equal to zero if we redefine the energy scale). It is observed that this is consistent with the approach and forms the basis of the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Free electron model for metals (Sommerfeld model)|Free electron model for metals (Sommerfeld model)]].

- Alternatively, if we reason about the general properties of a Hamiltonian as defined earlier, it is natural to state the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Bloch Theorem|Bloch Theorem]], which forms the basis of the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Band theory|Band theory]].