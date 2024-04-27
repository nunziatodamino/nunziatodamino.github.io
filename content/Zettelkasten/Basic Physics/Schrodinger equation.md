- [ ] Dire qualcosa in più sul time dependent e collegare con i metodi perturbativi

Given a quantum system described by the state $\ket{\psi(t)}$, its time evolution can be studied using the fundamental equation:

$$i\hbar \partial_t \ket{\psi(t)} = \hat{H}\ket{\psi(t)}$$

Here, $\hat{H}$ is the Hamiltonian of the system, an Hermitian self-adjoint operator.

Note: The choice of $\hat{H}$ specifies the system under consideration.

However, if we are interested in measuring the energy, and thus our state corresponds to an eigenstate of the Hamiltonian operator, denoted as $\ket{\phi(t)}$, it is by nature a stationary state, defined up to a complex phase:

$$\ket{\phi(t)} = \ket{\varphi} e^{i \omega t}$$

For this reason, we are not interested in solving the Schrödinger equation mentioned above, but rather the eigenvalue equation of the energy operator:

$$\hat{H}\ket{\varphi} = E\ket{\varphi}$$

This is commonly known as the stationary Schrödinger equation.