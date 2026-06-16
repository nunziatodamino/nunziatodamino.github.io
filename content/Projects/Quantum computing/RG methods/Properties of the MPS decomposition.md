Consider that we have performed a [[Decomposition of an arbitrary quantum pure state as an MPS]]. Depending on the canonical form in which is decomposed it presents particular properties. Properties are somewhat shared, in the sense that are analogous but not similar.
### Properties of a left-canonical state

##### Without compression the MPS representation is equivalent to the generic representation

This is true for any canonical form in the same statement, but we show the details only for the left-canonical form.

....
##### A left-canonical MPS is left-normalized

In an SVD the left matrix has the property $L^\dagger L = \mathbb{1}$
So we can write:

$$ \mathbb{1} = L^{\dagger} L^ \iff \delta_{ij} = \sum_{k}L^{*}_{ki}L_{kj}$$

In an MPS, lets consider a generic matrix at site $i$ before the reshaping:

$$ L^{(i)}_{(\chi_{i-1},\sigma_i),\chi_i} \qquad i = 2, \dots, N-1 $$

Then , for a site $i$ :

$$ 
\begin{aligned}

\sum_{\chi_{i-1},\sigma_i}  L^{*(i)}_{(\chi_{i-1},\sigma_i),\chi_i} L^{(i)}_{(\chi_{i-1},\sigma_i),\chi_i'} &= \delta_{\chi_i\chi_i'}\\
\sum_{\chi_{i-1},\sigma_i}  A^{\sigma_i*}_{\chi_{i-1},\chi_i} A^{\sigma_i}_{\chi_{i-1},\chi_i'} &= \delta_{\chi_i\chi_i'}\\
\sum_{\chi_{i-1},\sigma_i}  (A^{\sigma_i})^\dagger_{\chi_i,\chi_{i-1}} A^{\sigma_i}_{\chi_{i-1},\chi_i'} &= \delta_{\chi_i\chi_i'}\\
\sum_{\sigma_i}  (A^{\dagger\sigma_i}A^{\sigma_i})_{\chi_i,\chi_{i}'} &= \delta_{\chi_i\chi_i'}\\
\end{aligned}
$$

Or equivalently:

$$ \sum_{\sigma_i}  A^{\dagger\sigma_i}A^{\sigma_i} = \mathbb{1}$$

So the property is passed to the matrices $A$.
NOTE : this holds for all sites **except** for the last one, as is not a left matrix.
A state that satisfies this condition for $i =1, \dots, N-1$ is said to be left-normalized.

##### Connection to bipartite systems, only the left system basis is orthonormal in general

In the context of the DMRG method, lets consider the system division in a left block A and a right block B, containing respectively $l$ sites and $N-l$ sites.
Then define:

$$ 
\begin{aligned}
\ket{a_l}_A &= \sum_{\sigma_1, \dots, \sigma_l} (A^{\sigma_1}\dots A^{\sigma_l})_{1,a_l} \ket{\sigma_1, \dots, \sigma_l} \\ 
\ket{a_l}_B &= \sum_{\sigma_{l+1}, \dots, \sigma_N} (A^{\sigma_{l+1}}\dots A^{\sigma_N})_{a_l,1} \ket{\sigma_{l+1}, \dots, \sigma_N} \\ 
\end{aligned}
$$

Then we have that, comparing this with the left canonical MPS:

$$ \ket{\psi} = \sum_{\sigma_1, \dots, \sigma_N} \ket{a_l}_A\ket{a_l}_B $$

We are tempted to say that this is a [[The Schmidt decomposition|Schmidt decomposition]] but **it isn't**.
The problem is that in general only the left basis is orthonormal, while the right one is not.
In fact:

$$
\begin{aligned}
{}_A\braket{a_l'|a_l}{}_A &= \sum_{\sigma_1, \dots, \sigma_l} (A^{\sigma_1}\dots A^{\sigma_l})^*_{1,a'_l}(A^{\sigma_1}\dots A^{\sigma_l})_{1,a_l} \braket{\sigma_1, \dots, \sigma_l|\sigma_1, \dots, \sigma_l} = \\
&= \sum_{\sigma_1, \dots, \sigma_l} ((A^{\sigma_1}\dots A^{\sigma_l})^\dagger)_{a'_l, 1}(A^{\sigma_1}\dots A^{\sigma_l})_{1,a_l} = \\
&= \sum_{\sigma_1, \dots, \sigma_l} (A^{\sigma_l\dagger} \dots A^{\sigma_1\dagger}A^{\sigma_1}\dots A^{\sigma_l})_{a_l',a_l} = \delta_{a_l',a_l}
\end{aligned}
$$

While for the right system we have the same ansatz but stumble at the end:

$$
\begin{aligned}
{}_B\braket{a_l'|a_l}{}_B &= \sum_{\sigma_{l+1}, \dots, \sigma_N} (A^{\sigma_N\dagger} \dots A^{\sigma_{l+1}\dagger}A^{\sigma_{l+1}}\dots A^{\sigma_N})_{a_l',a_l} = \sum_{\sigma_N}(A^{\sigma_N\dagger}A^{\sigma_N})_{a_l',a_l}  \neq \delta_{a_l',a_l}
\end{aligned}
$$

As the last matrix in the left canonical form is not a left matrix.