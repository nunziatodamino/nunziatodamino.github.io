We begin by considering a generic Hamiltonian for a system with N particles, interacting via a 2-body potential:

$$ H = \sum_{k=1}^N T(x_k) + \frac{1}{2} \sum_{\substack{k,l\\k \neq l }}^N V(x_k, x_l)$$

$$ H = H_0 + H_{int}$$

$$ H =\sum_{k=1}^N H_{0k} + H_{int}$$

In order to solve the complete problem $H\ket{\Psi(t)} = i \hbar \partial_t \ket{\Psi(t)}$, is convenient to expand the energy eigenfunction respect to the complete basis obtained by solving the 1-body problem:

$$H^{(k)}_{single}\ket{\phi_{E_k}}  =E_k\ket{\phi_{E_k}}$$

Where are implied in the solutions also orthonormality and completeness conditions:

$$ \braket{\phi_{E_i} \vert \phi_{E_j} } = \delta_{E_iE_j} \qquad \hat{\mathbb{1}} = \sum_{E_i}\ket{E_i}\bra{E_i} $$

The expression of $H_{single}$ is dependent on the problem of choice. We propose here different examples:

- For a homogeneous material : $H^{(k)}_{single} = H_{0k}$
- For a system of interacting electrons : $H^{(k)}_{single} = \frac{p^2_k}{2m} + k_e\frac{q}{x_k}$ (its solution is the single particle Coulomb wave function)
- For electrons in a crystal : $H^{(k)}_{single} = \frac{p^2_k}{2m} + V(x_k)$ with $V$ periodic with the same periodicity as the Bravais lattice considered

For generality purpose I just consider that $H_{single}$ is the Hamiltonian for the single particle, and $\sum_k H^{(k)}_{single} = H_{non-interacting}$ describe the whole system as non interacting particle.

We carry now the specific example for an homogenous material, where $H^{(k)}_{single} = H_{0k}$ and $H_{non-interacting} = H_0$.

If I want to solve the problem:

$$H_{0}\ket{\varphi}  =E_0\ket{\varphi}$$

The solutions are obtained by mathematical considerations, i.e. :

$$\ket{\varphi} = \ket{\phi_{E_1}} \otimes \ket{\phi_{E_2}} \otimes \dots \otimes \ket{\phi_{E_N}} \equiv \ket{\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}}$$

$$E_0 = E_1 +E_2+\dots+ E_N$$

Of particular interest is the projection operator, defined as:

$$P_{\varphi} = P_{\phi_{E_1}} \otimes P_{\phi_{E_2}} \otimes \dots \otimes P_{\phi_{E_N}}$$

So that one can obtain:

$$\hat{\mathbb{1}} = \left(\sum_{E_1}\ket{\phi_{E_1}}\bra{\phi_{E_1}}\right) \otimes\left(\sum_{E_2}\ket{\phi_{E_2}}\bra{\phi_{E_2}}\right) \otimes \dots \otimes \left(\sum_{E_N}\ket{\phi_{E_N}}\bra{\phi_{E_N}}\right) =$$

$$= \sum_{E_1}\sum_{E_2}\dots\sum_{E_N} \ket{\phi_{E_1}}\bra{\phi_{E_1}} \otimes\ket{\phi_{E_2}}\bra{\phi_{E_2}}\otimes \dots \otimes \ket{\phi_{E_N}}\bra{\phi_{E_N}} \equiv$$

$$\equiv\sum_{E_1,E_2,\dots,E_N}\ket{\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}}\bra{\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}}$$

We can now finally expand $\ket{\Psi(t)}$. We will have:

$$\ket{\Psi(t)} = \hat{\mathbb{1}} \ket{\Psi(t)} = \sum_{E_1,E_2,\dots,E_N}\ket{\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}}\braket{\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N} \vert \Psi(t) }$$

If we now define $\braket{\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N} \vert \Psi(t) } \equiv C(E_1, E_2, \dots, E_N, t)$ and we consider the rapresentation in the position eigenbasis, one has:

$$\Psi(x_1,x_2,\dots,x_N, t) = \sum_{E_1,E_2,\dots,E_N}  C(E_1, E_2, \dots, E_N, t) \phi_{E_1}(x_1)\phi_{E_2}(x_2)\dots\phi_{E_N}(x_N)$$

The same consideration must be valid for a generic $H^{(k)}_{single}$.

Given the rapresentation given before in Dirac notation, one can find the C coefficents using the time dependent Schrodinger equation and use the rapresentation in the  $\ket{\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}}$ basis, i.e. we want to find the probability amplitude that the system has the particular quantum number configuration $E'_1, E'_2, \dots, E'_N$ at time $t$.
We have:

$$i \hbar \partial_t \ket{\Psi(t)} = H\ket{\Psi(t)} $$

$$i \hbar \partial_t \sum_{E_1,E_2,\dots,E_N}C(E_1, E_2, \dots, E_N, t)\ket{\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}} = H\sum_{E_1,E_2,\dots,E_N}C(E_1, E_2, \dots, E_N, t)\ket{\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}} $$

$$i \hbar \partial_t \sum_{E_1,E_2,\dots,E_N}C(E_1, E_2, \dots, E_N, t)\braket{\phi_{E'_1},\phi_{E'_2},\dots, \phi_{E'_N} \vert\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}} =$$

$$=\sum_{E_1,E_2,\dots,E_N}C(E_1, E_2, \dots, E_N, t))\braket{\phi_{E'_1},\phi_{E'_2},\dots, \phi_{E'_N} \vert H \vert\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}}$$

Using now the fact that we have an orthonormal set we can greatly simplify:

$$i \hbar \partial_t C(E'_1, E'_2, \dots, E'_N, t) =\sum_{E_1,E_2,\dots,E_N}C(E_1, E_2, \dots, E_N, t))\braket{\phi_{E'_1},\phi_{E'_2},\dots, \phi_{E'_N} \vert H \vert\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}}$$

$$i \hbar \partial_t C(E'_1, E'_2, \dots, E'_N, t) =\sum_{E_1,E_2,\dots,E_N}C(E_1, E_2, \dots, E_N, t))\braket{\phi_{E'_1},\phi_{E'_2},\dots, \phi_{E'_N} \vert H_0+H_{int} \vert\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}}$$

In order to achieve a somewhat clean evaluation we evaluate first:

$$\braket{\phi_{E'_1},\phi_{E'_2},\dots, \phi_{E'_N} \vert H_0\vert\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}} = \int dx_1\dots dx_N\  \phi^\dagger_{E'_1}(x'_1)\dots\phi^\dagger_{E'_N}(x'_N)\left( \sum_{k=1}^N T(x_k)\right) \phi_{E_1}(x_1)\dots\phi_{E_N}(x_N) =  $$


$$ = \sum_{k=1}^N \int dx_k\  \phi^\dagger_{E'_k}(x'_k)T(x_k) \phi_{E_k}(x_k)\left(\delta_{E'_1E_1}\dots \delta_{E'_{k-1}E_{k-1}}\delta_{E'_{k+1}E_{k+1}}\dots\delta_{E'_{N}E_{N}}\right) $$

Using the orthonormality relation between the $\phi$ functions. With the same ansatz:

$$\braket{\phi_{E'_1},\phi_{E'_2},\dots, \phi_{E'_N} \vert H_{int}\vert\phi_{E_1},\phi_{E_2},\dots, \phi_{E_N}} =$$

$$ = \sum_{k=1}^N\sum_{l=1}^N \int dx_kdx_l\  \phi^\dagger_{E'_k}(x'_k)\phi^\dagger_{E'_l}(x'_l)V(x_k,x_l) \phi_{E_k}(x_k)\phi_{E_l}(x_l)\left(\delta_{E'_1E_1}\dots \delta_{E'_{k-1}E_{k-1}}\delta_{E'_{k+1}E_{k+1}}\dots\dots \delta_{E'_{l-1}E_{l-1}}\delta_{E'_{l+1}E_{l+1}}\dots\delta_{E'_{N}E_{N}}\right)$$

So that one can, in the end:

$$i \hbar \partial_t C(E'_1, E'_2, \dots, E'_N, t) = \sum_{E_k}  \sum_{k=1}^N \int dx_k\  \phi^\dagger_{E'_k}(x'_k)T(x_k) \phi_{E_k}(x_k)C(E'_1, E'_2,\dots E_k \dots, E'_N, t) +  $$

$$ + \sum_{E_k}\sum_{E_l}\sum_{k=1}^N\sum_{l=1}^N \int dx_kdx_l\  \phi^\dagger_{E'_k}(x'_k)\phi^\dagger_{E'_l}(x'_l)V(x_k,x_l) \phi_{E_k}(x_k)\phi_{E_l}(x_l)C(E'_1, E'_2,\dots ,E_k \dots, E_l, \dots E'_N, t)$$

This permits in principle to find the time evolution of the $C$ coefficent.