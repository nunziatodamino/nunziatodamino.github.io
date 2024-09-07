This model, sometimes referred as the Sommerfeld model for metals, can be applied to any metal, but is verified experimentally only for simple metals, i.e. metal in which only an electron is in the valence band, for example the alkali metals. 
The main idea of the model is to consider that the effective potential that an electron fells inside the material is constant.
We justify here this assumption for alkali metals using the linear chain model.

![[Free electron model for metals_Veff.png|500]]

Suppose to have a linear chain of an alkali metal in which each ion has potential $V_{ion} = k_e \frac{Ze}{r}$. So the total potential will be the potential sum, hence the bottom part of the left figure. We can see potential walls at the chain surface because there the electron cannot move freely. In fact it requires an energy to be extracted by the material.
In the end we can approximate this situation by a potential well. We characterize now this potential well using another picture:

![[Free electron model for metals_band.png|300]]

We can say that an electron inside a metal if has energy between the energy of the conduction band $E_c$  and the Fermi energy $E_F$. In order to escape the metal and reach an energy $E_{\text{vac}}$, an additional energy equal to $E_{\text{vac}}-E$ is required. Moreover we can define specific energy gap, namely $E_{\text{vac}}-E_F \equiv W$ as the work function and $E_{\text{vac}}-E\equiv \chi$ as the electron affinity.

In a situation in which surfaces can be neglected, we can study this problem using a potential box with PBC instead of a potential box with finite height. (It's like to have infinite copies of the crystal in each cartesian direction)

So, called $V$ the crystal volume, we have the potential defined as:

$$ V(\bar{r}) = 
\begin{cases}
V_0 \qquad \text{if}\ \bar{r}\in V\\
+\infty \qquad \text{otherwise}
\end{cases} $$

So we will have the following Schrodinger equation:

$$-\frac{\hbar^2}{2m}\nabla^2  \Psi(\bar{r})= E' \Psi(\bar{r})\qquad E' = E-V_0 $$

Inside the considered volume. (It is as if the electron were free in the metal, hence the name of the model)

At this point, it is important to note that the assumption of a constant potential actually loses any information about the type of Bravais lattice. Therefore, I will not have a differentiated model for different lattice types, but I still have to choose a convenient one to extend from a finite system to an infinite one using the Born-von Karman boundary conditions. For obvious reasons, a simple cubic lattice is chosen.

Furthermore, since electrons are fermions and we have assumed non-interacting electrons, we can view the electrons as a [[Zettelkasten/Master's degree/Basic Physics/Completely degenerate Fermi gas]].

Let's briefly discuss the solutions and boundary conditions of this model.

Considering a generic crystal with volume $V=L^3$, we have:

$$\Psi(\bar{r}) \equiv \Psi_{\bar{k}}(\bar{r}) = \frac{1}{\sqrt{V}} e^{i(\bar{k} \cdot \bar{r})} \qquad E(\bar{k})  =\frac{\hbar^2k^2}{2m}$$

To account for the fact that we are in a simple cubic lattice, we need to impose [[Zettelkasten/Master's degree/Solid State Physics/Crystal structures and bonds/Born-Von Karman boundary condition|Born-Von Karman boundary condition]], 
that we report here for a simple cubic lattice of lattice constant $a$ and composed by $N^3$ atoms:

$$\begin{cases}\psi(x,y,z) = \psi(x+ Na, y, z) = \psi(x+ L, y, z) \\ \psi(x,y,z) = \psi(x, y+Na, z) = \psi(x, y+L, z) \\ \psi(x,y,z) = \psi(x, y, z+ Na) = \psi(x, y, z+ L) \\ \end{cases}$$

 These conditions lead to energy discretization. We then have:

$$1 = e^{ik_iL} \iff k_{i} = \frac{2 \pi}{L} n_i \qquad \Rightarrow \qquad  E(\bar{k})  =\frac{\hbar^2}{2m} \left( \frac{2\pi}{L} \right)^2 (n_x^2+n_y^2+ n_z^2) \qquad n_x,n_y,n_z \in \mathbb{Z}  $$

So the electron energy (also called electron state) is determined by the value of the wavevector $\bar{k}$.



(==In my opinion, the definitive point is that the boxing yields one type of discretization, while Born-von Karman yields another==)