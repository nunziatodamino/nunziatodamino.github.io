Is typical in the framework of Statistical Mechanics to write formally the Hamiltonian of a system of volume $\Omega$ and that can assume a set of configurations $\varphi = \{ C \}$ as:

$$ \mathscr{H}_{\Omega}(\varphi) = - \sum_n K_n \Theta_n(\varphi) $$

The $K_n$ are called **coupling constants** and are usually proportional to intensive thermodynamic variables, say $p$, $T$, $H$, etc.
while $\Theta_n(\varphi)$ are linear or higher order of the microscopic degrees of freedom used to describe the problem in analysis (spins for the Ising model, monomers positions for a grafted polymers, etc.) (in the quantum version these coupling constant will be promoted to by operators).
One important note is that the product $K_n\Theta_n, \forall n$ has to obey the underlying system symmetry (again this is problem dependent, say for the Ising model is the $\mathbb{Z}_2$ symmetry, or in laymen terms, the global spin flip invariance).

Long story short, this is one of the classic pyramid scheme in which theorists try to reduce all to one formula, hiding all the complexity in one mysterious function. 
Even if the functions are known, we notice that the main properties derive from just a selected few, and considering the other is an exercise of higher order approximation.

### Example : The spin-1 Ising model

In the Ising model , the degrees of freedom of the system are the aligned (parallel) spins on a Bravais lattice, that can assume values $\pm 1$.
In the framework just described the complete system Hamiltonian is:

$$ \mathscr{H} = -\sum_{i,j|j>i} J_{ij}s_is_j -\sum_{i,j|j>i} K_{ij}s_i^2s_j^2 -\sum_i D_i s_i^2 -\sum_{i,j|j>i} L_{ij} (s_is_j^2+s_i^2s_j) - \sum_i H_i s_i$$

Higher order $\Theta$ functions are not necessary as they are a repetition, i.e $s_i^3 = s_i$
For the general applications though $K_{ij}=L_{ij} = 0$, $D_i = 0$




