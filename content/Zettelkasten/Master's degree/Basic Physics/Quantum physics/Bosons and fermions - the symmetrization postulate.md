https://www.youtube.com/watch?v=hOY51y9iqGQ&list=PL8W2boV7eVfnJ6X1ifa_JuOZ-Nq1BjaWf&index=7



- Fermions
A wavefunction associated to a system composed of fermions must by antisymmetric respect to the exchange operator, which is a subclass of permutation operator called transposition.
One can always create an antisymmetric wavefunction by a generic wavefunction using the antisymmetrizer:

$$ \hat{A}\ket{\psi}=\ket{\psi_{\text{asym}}}=\frac{1}{\sqrt{N!}}\sum_\alpha\varepsilon_{\alpha}P_{\alpha}\ket{\psi} $$

Where $\alpha$ is a collective index which describes a generic permutation of the set $\{1,2,3,\dots, n\}$, where $\varepsilon_{\alpha}$ is the [[Levi-Civita symbol]] and $\hat{P}_{\alpha}$ is the permutation operator.
Another way to denote the antisymetrizer is the following: If we have $N$ objects we have $N!$ permutations. We label each of the permutation with a natural number $i$.
Then one can write

$$ \hat{A}\ket{\psi}=\ket{\psi_{\text{asym}}}=\frac{1}{\sqrt{N!}}\sum_{i=1}^{N!}(-1)^{P_i}P_{i}\ket{\psi} $$

Where this time $(-1)^{P_i}$ is a symbol that is either $+1$ or $-1$ according to the fact that the permutation is of even or odd class respectively.