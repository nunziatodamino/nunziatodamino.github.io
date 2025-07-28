Suppose we want to describe a real magnetic system. Then the spins presents at least 3 component each, and this has to be accounted in the total Hamiltonian.

One can further generalize and consider the following system: suppose to have a chain of $N$ spins.
At each site $i$ the spin can assume $n$ values, organized in a n-dimensional vector:

$$ \bar{s}_i = (s_{i1}, s_{i2}, \dots, s_{in})$$

With the additional constraint that $||\bar{s}_i|| = 1$
In the case of no magnetic field, the Hamiltonian is of the form:

$$ \mathscr{H} = -J \sum_{\braket{ij}} \bar{s_i} \cdot \bar{s_j} $$

A system made as such is called **O(n) model in 1 dimension**. We can classify different system according to spin vector dimension, i.e. the value of $n$.

The only physically relevant systems are the one up to $n=3$

- $n=0$ : the spins do not assume any value, so its a simple chain of atoms. It's called **self avoiding walk**.
- $n=1$ : is the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/The spin-1 Ising model|Ising spin-1 model]] (all aligned spins)
- $n=2$ : Is the **XY model** (spins all belonging to a plane)
- $n=3$ : Is the **Heisenberg Model** (general case)
