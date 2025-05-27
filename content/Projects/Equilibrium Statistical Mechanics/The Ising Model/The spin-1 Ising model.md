We consider $N$ spins on a Bravais lattice that can assume the values $s_i = \pm 1$.

**Note that this situation is equivalent to a magnetic system in which spins are all parallel.** 

Then, generally the most complete form for the system Hamiltonian is, for what we saw in [[Projects/Equilibrium Statistical Mechanics/Phase transitions/Consideration on a system Hamiltonian in Statistical Mechanics|Consideration on a system Hamiltonian in Statistical Mechanics]]:

$$ \mathscr{H} = -\sum_{i,j|j>i} J_{ij}s_is_j -\sum_{i,j|j>i} K_{ij}s_i^2s_j^2 -\sum_i D_i s_i^2 -\sum_{i,j|j>i} L_{ij} (s_is_j^2+s_i^2s_j) - \sum_i H_i s_i$$

Generally though, we consider $K_{ij}=L_{ij} = 0$, $D_i = 0$.
The reason is simple : we are interested in the end in the energy of the system arising from the local sites and from the **first order spin interaction interaction, which is not related to the direct coupling of the magnetic moments, but rather from a combination of the electrostatic interaction and the antisymmetry of the total wavefunction**.
In this first approximation we have:

$$ \mathscr{H} = -\sum_{i,j|j>i} J_{ij}s_is_j - \sum_i H_i s_i$$

Note that in this model the trace is simply:

$$ \text{Tr} \equiv \sum_{s_1 \pm 1}\sum_{s_2 \pm 1} \dots\sum_{s_N \pm 1} \equiv \sum_{\{s\}} $$

So that, for example, the canonical partition function is:

$$\mathcal{Z}(T, \{H_i\}, \{J_{ij}\}) = \text{Tr} \exp\left( -\beta \mathscr{H} \right) $$

From this is possible to define the Helmholtz free energy for a finite size system of volume $\Omega$ by the definition:

$$ \beta F_{\Omega}(T, \{H_i\}, \{J_{ij}\}) = - \ln \mathcal{Z}_{\Omega}(T, \{H_i\}, \{J_{ij}\}) $$

And from this extract the limit of the bulk free energy:

$$ f_b(T, \{H_i\}, \{J_{ij}\}) = \lim_{N \to +\infty} \frac{F_{\Omega}(T, \{H_i\}, \{J_{ij}\})}{N} \qquad \text{or} \qquad f_b(T, \{H_i\}, \{J_{ij}\}) = \lim_{N \to +\infty} \frac{-\ln \mathcal{Z}_{\Omega}(T, \{H_i\}, \{J_{ij}\})}{\beta N}$$

We here state, and not prove, that in order for this limit to exists : 

$$ \sum_{i,j |i \neq j} |J_{ij}| < + \infty $$

Moreover in general what determines the existence of the limit is:
- The system dimensionality $d$.
- The range of the spin-spin interaction.
	Specifically if for long range interactions:
	$$ J_{ij} = A |\bar{r}_i-\bar{r}_j|^{-\sigma}, \qquad \forall i,j $$

	Then the limit exists if: 
$$ \sigma > d $$

This is particularly interesting as for $d=3$, if the spin-spin interaction are of dipolar nature, the limit does not exists, as the typical dipolar interaction is $r^{-3}$. However, if the spins are not perfectly aligned, then the interaction averages to $r^{-6}$, and the limit exists.
**Note also that the limit existence condition is surely satisfied if the range of interaction is finite**.
What one does in practice is saying that the interaction extends only to the nearest neighbors, so formally:

$$ J_{ij} = 
\begin{cases}
J \qquad\text{if}\ |\bar{r}_i-\bar{r}_j| = a \\
0 \qquad\text{otherwise}
\end{cases}
$$

Where $a$ is the lattice constant. In this way the Hamiltonian becomes:

$$ \mathscr{H} = -J\sum_{<i,j>}s_is_j - \sum_i H_i s_i$$

Where $\sum_{<i,j>}$ indicate the sum over nearest neighbors.

#### A warning

We comment here briefly on this sum becomes it hides a risk of double counting.
The idea is that we have to count each interaction once, but following this sum as is leads to double counting.
Easily imagine a 4 spins 1 dimensional chain with $H_i = 0$.
Then we count the pairs 1-2; 2-1, 2-3; 3-2, 3-4; 4-3; as we go through the spins, but only 1-2, 2-3, 3-4 are the meaningful interactions. Some authors, especially in the context of computer simulation, prefer to write the term $-\frac{J}{2}\sum_{<i,j>}s_is_j$, but generally in theoretical Statistical Mechanics books the notation is the one presented here.