In the [[Projects/Solid State Physics/Lattice dynamics/The Born-Oppenheimer approximation|The Born-Oppenheimer approximation]] one has to solve for determining the nuclear motion:

$$ M \frac{d^2\bar{R}_I}{dt^2} = -\frac{\partial\mathcal{E}(\{\bar{R}_I\})}{\partial\bar{R}_I} = -\frac{\partial}{\partial\bar{R}_I} \braket{\Phi_e|\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee}|\Phi_e} $$

Which can be computationally demanding.
Fortunately we can resort to the:

>[!info] **Hellman-Feynman theorem (1-D case)**
Let's consider the Hamiltonian $H(\lambda)$ and one of is eigenstate $\ket{\phi}$.
It holds that :
$$\frac{d}{d \lambda}\braket{\phi|H| \phi } = \braket{\phi |\frac{dH}{d \lambda}| \phi }$$

- Proof : 
We start by making an observation on the normalization condition $\braket{\phi|\phi} = 1$
Upon derivation one has:

$$\frac{d}{d\lambda}(\braket{\phi|\phi}) = 0\qquad \Rightarrow\qquad \braket{\frac{d\phi}{d\lambda}|\phi} + \braket{\phi|\frac{d\phi}{d\lambda}} = 0 $$

Note that is not strictly necessary that the eigenstate is normalized.
So that now we can face the thesis:

$$\begin{aligned}
\frac{d}{d \lambda}\braket{\phi |H| \phi } &=\braket{\frac{d \phi}{d \lambda}|H| \Psi }+\braket{\Psi |\frac{dH}{d \lambda}| \Psi }+\braket{\Psi |H| \frac{d\phi}{d \lambda}} =  \\
&=E\braket{\frac{d \phi}{d \lambda}| \Psi }+\braket{\Psi |\frac{dH}{d \lambda}| \Psi }+E^*\braket{\Psi | \frac{d\phi}{d \lambda}} =\\&=E\left(\braket{\frac{d \phi}{d \lambda}| \Psi }+\braket{\Psi | \frac{d\phi}{d \lambda}} \right)+\braket{\Psi |\frac{dH}{d \lambda}| \Psi } = \\
&= \braket{\Psi |\frac{dH}{d \lambda}| \Psi } \end{aligned} $$

That is our thesis (we have used the fact that the Hamiltonian has real eigenvalues and the previous observation on the normalization condition).


>[!info] **Hellman-Feynman theorem (General case)**
Let's consider the Hamiltonian Hamiltonian $H(\lambda_1, \lambda_2, \dots, \lambda_n)$, and one of is eigenstate $\ket{\Psi}$
It holds that :
$$\frac{\partial}{\partial \lambda_i}\braket{\Psi |H| \Psi } = \braket{\Psi |\frac{\partial H}{\partial \lambda_i}| \Psi }$$

It can be proven with the same ansatz.
