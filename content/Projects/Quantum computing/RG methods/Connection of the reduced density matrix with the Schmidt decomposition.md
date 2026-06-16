Consider a bipartite system, and consequently its reduced density operators

$$ \hat{\rho}_A = \mbox{Tr}_B \ket{\psi}\bra{\psi} \qquad \hat{\rho}_B = \mbox{Tr}_A \ket{\psi}\bra{\psi}$$

These expressed with respect to the block bases take the matrix form:

$$ \rho_A = \psi\psi^\dagger \qquad \rho_B = \psi^\dagger\psi $$

Where $\psi$ is a pure state represented respect to the block bases also.
If take then a [[The singular value decomposition (SVD)|SVD]] of, say the first representation:

$$ \rho_A = L\Lambda R^\dagger(L\Lambda R^\dagger)^\dagger = L\Lambda R^\dagger R \Lambda L^\dagger = L\Lambda^2L^\dagger $$

Equivalently $\rho_B = R \Lambda^2 R^\dagger$.
So if we consider the entire operator:

$$
\begin{aligned}
\hat{\rho}_A &= \sum_{i,i'}(\rho_A)_{ii'}\ket{i}\bra{i'} = \sum_{i,i'}\sum_{\alpha =1}^{r} L_{i\alpha}\lambda^2_{\alpha}L^*_{i'\alpha}\ket{i}\otimes\bra{i'} = \\
&= \sum_{\alpha =1}^{r} \lambda^2_{\alpha} \sum_{i} L_{i\alpha}\ket{i}\otimes\sum_{i'}\bra{i'}L^*_{i'\alpha} = \sum_{\alpha =1}^{r} \lambda^2_{\alpha} \ket{\alpha}{}_A {}_A\bra{\alpha} 
\end{aligned}
$$

Equivalently $\hat{\rho}_B = \sum_{\alpha =1}^{r} \lambda^2_{\alpha} \ket{\alpha}{}_B {}_B\bra{\alpha}$

This shows that the eigenvalues of the reduced density operators are the square of the singular part of the SVD decomposition of the pure state bipartition on which they are calculated.

