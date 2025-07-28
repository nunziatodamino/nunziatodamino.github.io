# Annotations and Corrections for Mean Field Theory Notes

This document contains corrections and clarifications for the notes in the 'Mean field approach' directory.

---

## 1. Correction for `Matrix form of the mean field pdf in the Bragg-Williams approximation.md`

The original file was empty and marked as "TO DO". Below is the complete content that should be in this file.

### Matrix Form of the Mean Field PDF in the Bragg-Williams Approximation

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

---

## 2. Correction for `Critical exponents of the Van der Waals theory.md`

The derivation for the critical exponent $\delta$ was marked with "FIX" and contained a hand-waving argument. Here is the rigorous derivation.

### $\delta$ exponent - $P-P_C \sim \Delta\nu^{\delta}$

To obtain this exponent, we analyze the Van der Waals equation at the critical temperature, $T=T_C$. We expand the pressure $P$ around the critical volume $v_c$ at constant temperature $T_C$. The Taylor expansion of $P(v, T_C)$ around $v_c$ is:

$$ P(v, T_C) = P(v_c, T_C) + \frac{\partial P}{\partial v}\bigg|_{v_c, T_C}(v-v_c) + \frac{1}{2!}\frac{\partial^2 P}{\partial v^2}\bigg|_{v_c, T_C}(v-v_c)^2 + \frac{1}{3!}\frac{\partial^3 P}{\partial v^3}\bigg|_{v_c, T_C}(v-v_c)^3 + \dots $$

At the critical point, the first and second derivatives of pressure with respect to volume are zero:
$$ \frac{\partial P}{\partial v}\bigg|_{v_c, T_C} = 0, \qquad \frac{\partial^2 P}{\partial v^2}\bigg|_{v_c, T_C} = 0 $$

Therefore, the expansion simplifies to:
$$ P - P_c = \frac{1}{6}\frac{\partial^3 P}{\partial v^3}\bigg|_{v_c, T_C}(v-v_c)^3 + O((v-v_c)^4) $$

Let's calculate the third derivative of the Van der Waals equation:
$$ P = \frac{k_BT}{v-b} - \frac{a}{v^2} $$
$$ \frac{\partial P}{\partial v} = -\frac{k_BT}{(v-b)^2} + \frac{2a}{v^3} $$
$$ \frac{\partial^2 P}{\partial v^2} = \frac{2k_BT}{(v-b)^3} - \frac{6a}{v^4} $$
$$ \frac{\partial^3 P}{\partial v^3} = -\frac{6k_BT}{(v-b)^4} + \frac{24a}{v^5} $$

Evaluating the third derivative at the critical point ($v_c=3b$, $T_C = \frac{8a}{27bk_B}$):
$$ \frac{\partial^3 P}{\partial v^3}\bigg|_{v_c, T_C} = -\frac{6k_B(\frac{8a}{27bk_B})}{(3b-b)^4} + \frac{24a}{(3b)^5} = -\frac{48a}{27b(16b^4)} + \frac{24a}{243b^5} = -\frac{a}{9b^5} $$
The third derivative is non-zero at the critical point.
Thus, we have:
$$ P - P_c \propto (v-v_c)^3 $$
Since the order parameter is $\Delta\nu = v-v_c$, we can write:
$$ P - P_c \sim (\Delta\nu)^3 $$
From this, we conclude that the critical exponent $\delta = 3$.
