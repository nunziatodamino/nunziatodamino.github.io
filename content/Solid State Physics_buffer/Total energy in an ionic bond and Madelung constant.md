One can formalize the ionic bond by using an adequate potential, specifically, between 2 nearest neighbors we will have:

$$ U_{ij} = U_{\text{Pauli repulsion}} + U_{\text{Coulomb}} = \lambda e^{\frac{r_{ij}}{\rho}} - k_e \frac{q^2}{r_{ij}} $$

Where in modeling the Pauli repulsion we used the [[Born-Mayer potential]] and where with $q$ we indicate the absolute value of either cation or anion.
In order to extend this to the entire lattice one can write:

$$  U_{ij} = 

\begin{cases}
\lambda e^{-\frac{r_{ij}}{\rho}} - k_e \frac{q^2}{r_{ij}} \qquad \mbox {nearest neighbors} \\
\pm k_e \frac{q^2}{r_{ij}^2} = \pm k_e \frac{q^2}{p_{ij}R} \qquad \mbox {otherwise}
\end{cases}

$$

Where in order to simplify the things for later we set $r_{ij}=p_{ij}R$ with $R$ lattice constant and $p_{ij}$ a dimensionless parameter.
In order to evaluate the total energy we can simply evaluate the energy for a single ion and multiply for the total number of ions $N$. So we obtain:

$$ U_{tot} = NU_i = N\sum_{j\neq i}U_{ij} = N \left[ z\lambda e^{-\frac{R}{\rho}}-  \frac{k_eq^2}{R} \sum_{j \neq i} \frac{(\pm)}{p_{ij}} \right] $$

Where we have set $z$ as the total number of nearest neighbors around the selected ion, while we set $(\pm)$ as a number that is $+1$ when the couple considered is anion-cation, while is $-1$ otherwise.
We can now set:

$$ \alpha_i = \sum_{j \neq i} \frac{(\pm)}{p_{ij}} $$

This value is called Madelung constant, and is evaluated for a single ion in the crystal structure, but because any Bravais lattice is invariant under translation, we can drop from now on the sub-index, because this value will be the same for any given ion choice.
We report in the following a table with some values of the Madelung constant for some compounds:

![[Pasted image 20230905184510.png|400]]

We observe that even in structure with different crystal structures, but same fundamental Bravais lattice we have a slight difference in the Madelung constant.

Also the explicit calculation for an ionic chain in one dimension is shown here.
