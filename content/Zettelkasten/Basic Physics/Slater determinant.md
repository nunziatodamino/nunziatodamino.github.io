The Slater determinant is a special way to write the [[Zettelkasten/Basic Physics/Bosons and fermions - the symmetrization postulate|antisymmetrizer]] for the wavefunction:

$$\Phi_e( \bar{\xi}_1,\bar{\xi}_2,\dots,\bar{\xi}_n)=\psi_1(\bar{\xi}_1)\psi_2(\bar{\xi}_2)\dots\psi_n(\bar{\xi}_n)$$

Which is at the basis of one-electron approaches.
We can write:

$$\hat{A}[\psi_1(\bar{\xi}_1)\psi_2(\bar{\xi}_2)\dots\psi_n(\bar{\xi}_n)]= 
\frac{1}{\sqrt{n!}} \det 
\begin{Vmatrix}
\psi_1(\bar{\xi}_1) &\psi_1(\bar{\xi}_2)&\dots & \psi_1 (\bar{\xi}_n) \\
\psi_2(\bar{\xi}_1) &\psi_2(\bar{\xi}_2)& \dots & \psi_2 (\bar{\xi}_n) \\
\vdots & \vdots & \dots& \vdots \\
\psi_n(\bar{\xi}_1) &\psi_n(\bar{\xi}_2)& \dots & \psi_n (\bar{\xi}_n) \\
\end{Vmatrix}\equiv \frac{1}{\sqrt{n!}} \det (\psi_1(\bar{\xi}_1) \psi_1(\bar{\xi}_2)\dots \psi_1 (\bar{\xi}_n) )
$$

It is evident that the interchange of two columns changes the sign of the determinant consistently with the antisymmetry property of the wavefunction; moreover, occupancy of the same spin-orbital by two electrons gives two equal rows and thus the determinant equals zero, according to [[Pauli exclusion principle]].