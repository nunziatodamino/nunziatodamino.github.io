Let's consider a 2d square lattice with $N$ rows and $M$ columns:

[jkjdkjdkdjkd put pic]

If one wants to write the Hamiltonian for the spin-1 Ising model on this lattice one does simply write:

$$ -\beta\mathscr{H} = K\sum_{<i,j>}s_is_j - h\sum_i s_i$$

This can be simplified by writing in the interaction term just the interactions of the up and right spin:

$$ -\beta\mathscr{H} = K \sum_{i =1}^M \sum_{j =1}^N (s_{ij}s_{i+1,j}+s_{ij}s_{i,j+1}) - h\sum_{i =1}^M \sum_{j =1}^N s_{ij}$$

In this way on covers all the lattice without double counting.
In order to simplify the notation, one can write the Hamiltonian in the following way:

$$ -\beta\mathscr{H} = \sum_{j =1}^M \left(E_2(\mu_j\mu_{j+1}) +E_1(\mu_j)\right)$$

Where:

$$E_1(\mu_j) = K \sum_{i = 1}^N s_{i,j}s_{i+1,j} + h\sum_{i = 1}^N s_{i,j} $$

and

$$ E_2(\mu_j,\mu_{j+1}) = K \sum_{i = 1}^N s_{i,j}s_{i,j+1} $$

In this way the Hamiltonian is written in function of the interaction for the columns: we collect the spins in the column vectors:

$$ \mu_j = (s_{1,j}, s_{2,j}, \dots, s_{N,j}) $$

Then their interaction is described by the defined functions: $E_1$ describes the interaction inside a specified j-th column, while the function $E_2$ describes the interaction between 2 neighboring columns.