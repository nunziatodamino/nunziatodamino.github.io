The Born-Von Karman conditions are periodic boundary conditions (also known as PBC) and are purely mathematical boundary conditions that have no physical meaning (==here I am taking a risk==).

### 1 dimension

Given a chain of $N$ atoms with lattice constant $a$, I can apply the Born-Von Karman conditions to a function $\psi(x)$, using the constraint: 

$$ \psi(x) = \psi(x+ Na) = \psi(x+ L) $$

Where $L= Na$ is the length of the chain. This operation allows us to extend a chain of length $L$ to the 1-dimensional Bravais lattice.

### 3 dimensions

The extension starts from the repetition of a generic number of times of the primitive cell of the Bravais lattice that we want to extend.

-   Let's take the simple cubic lattice as an example. Given a cube of $N_xN_yN_z$ atoms with lattice constant $a$, I can apply the Born-Von Karman conditions to a function $\psi(x)$, using the constraint: 
 $$\begin{cases}\psi(x,y,z) = \psi(x+ N_xa, y, z) = \psi(x+ L_x, y, z) \\ \psi(x,y,z) = \psi(x, y+N_ya, z) = \psi(x, y+L_y, z) \\ \psi(x,y,z) = \psi(x, y, z+ N_za) = \psi(x, y, z+ L_z) \\ \end{cases}$$
 
 This operation allows us to extend the system from a box with edges $L_x, L_y, L_z$ to a simple cubic Bravais lattice structure. Note that we can write more compactly 
 
 $$ \psi(\bar{r}) = \psi(\bar{r}+(N_x\bar{a}_1+N_y\bar{a}_2+N_z\bar{a}_3)) $$ 
 Where $\bar{a}_1,\bar{a}_2,\bar{a}_3$ are the primitive vectors of the simple cubic lattice.

-   In the general case, I will simply say that: 

$$\Psi(\bar{r}) = \Psi(\bar{r}+ \bar{R}') $$

With $\bar{R}'$ being a vector belonging to the Bravais lattice that delimits the boundaries of the crystal in the three directions given by the primitive vectors.