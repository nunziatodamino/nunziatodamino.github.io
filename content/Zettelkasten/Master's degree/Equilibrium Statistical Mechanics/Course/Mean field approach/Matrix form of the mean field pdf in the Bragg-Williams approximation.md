In the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/The Bragg-Williams approximation for the Ising model|Bragg-Williams approximation for the Ising model]], we found the one-point probability density function (pdf) for a spin $s_i$ to be:

$$ \rho_i = \frac{1+m_i}{2}\delta_{s_i,1} + \frac{1-m_i}{2}(1-\delta_{s_i,1}) $$

where $m_i = \braket{s_i}$ is the local magnetization. This can be expressed in a more compact and useful form using a density matrix.

For a spin-1/2 system, the spin states can be represented by orthonormal vectors:
- Spin up ($s_i = +1$): $\ket{+} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$
- Spin down ($s_i = -1$): $\ket{-} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$

The density operator $\hat{\rho}_i$ can be written as a 2x2 matrix in this basis. The elements of the density matrix are given by $\rho_{ab} = \braket{a|\hat{\rho}_i|b}$.

The diagonal elements represent the probabilities of finding the spin in the corresponding states:
- Probability of spin up: $P(s_i=+1) = \braket{+|\hat{\rho}_i|+} = \frac{1+m_i}{2}$
- Probability of spin down: $P(s_i=-1) = \braket{-|\hat{\rho}_i|-} = \frac{1-m_i}{2}$

The off-diagonal elements represent the coherence between the states. In this mean-field state, there is no coherence, so the off-diagonal elements are zero.

Therefore, the density matrix is:

$$ \hat{\rho}_i = \begin{pmatrix} \frac{1+m_i}{2} & 0 \\ 0 & \frac{1-m_i}{2} \end{pmatrix} $$

This matrix can be conveniently expressed using the identity matrix $I$ and the Pauli matrix $\sigma_z$:

$$ I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \qquad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} $$

The density matrix can be written as:

$$ \hat{\rho}_i = \frac{1}{2}(I + m_i\sigma_z) $$

Let's verify this:
$$ \frac{1}{2}\left( \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + m_i \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \right) = \frac{1}{2} \begin{pmatrix} 1+m_i & 0 \\ 0 & 1-m_i \end{pmatrix} = \begin{pmatrix} \frac{1+m_i}{2} & 0 \\ 0 & \frac{1-m_i}{2} \end{pmatrix} $$

This matrix form is particularly useful for calculating expectation values of observables. For example, the expectation value of the spin is:

$$ \braket{s_i} = \text{Tr}(\hat{\rho}_i \sigma_z) = \text{Tr}\left( \frac{1}{2}(I + m_i\sigma_z) \sigma_z \right) = \frac{1}{2}\text{Tr}(\sigma_z + m_i\sigma_z^2) = \frac{1}{2}\text{Tr}(\sigma_z + m_i I) = \frac{1}{2}(0 + 2m_i) = m_i $$
This confirms the consistency of the formalism.