### Notion 1

**One electron model (independent electrons approximations), is generally sufficient for the description of most semiconductors.**
**Only in the case of high doping interaction terms become relevant but in that case one just adds a correction term in the one electron in the Hamiltonian instead of doing it in the proper way.**
So in most cases we can refer to [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Bloch Theorem|Bloch Theorem]].

Briefly in a one electron system described by a periodic potential with a Bravais lattice periodicity, the eigenfunctions are labeled by 2 quantum numbers $n$ and $\bar{k}$, and have the form:

$$  \Psi_{\bar{k}}(\bar{r})=u_{\bar{k}}(\bar{r})e^{i\bar{k}\cdot\bar{r}}  $$

Here, $\bar{u}_{\bar{k}}(\bar{r})$ is periodic in $\bar{r}$ with the same periodicity as the potential.
Note also that all the eigenfunction is periodic in $\bar{k}$ for every reciprocal lattice translation.

Note that the probability to find a particle in any position is invariant by translation of a Bravais lattice vector:

$$ |\Psi_{\bar{k}}(\bar{r}+\bar{R})|^2=|u_{\bar{k}}(\bar{r}+\bar{R})e^{i\bar{k}\cdot(\bar{r}+\bar{R})}|^2 = |u_{\bar{k}}(\bar{r}+\bar{R})|^2 = |u_{\bar{k}}(\bar{r})|^2 = |\Psi_{\bar{k}}(\bar{r})|^2 $$

Where we implicitly used the translational invariance of the $u_{\bar{k}}(\bar{r})$ function.

### Notion 2

Is of interest to evaluate the electron momentum as the expectation value of the momentum operator respect to said eigenfunction.
Then, has seen in [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Evaluation of an electron momentum in a crystal|Evaluation of an electron momentum in a crystal]], one has:

$$ \braket{\bar{p}_{n\bar{k}}} = \hbar\bar{k} + \braket{u_{n\bar{k}}|\bar{p}|u_{n\bar{k}}} $$

Where we recall that $\hbar\bar{k}$ is called electron crystal momentum.
**Notice also that the only case in which the electron crystal momentum coincides with the electron momentum is in the free electron case, because in that case the Bloch's function is $\Psi_{\bar{k}}(\bar{r})=Ae^{i\bar{k}\cdot\bar{r}}$, so that $u_{n\bar{k}}$ is a constant.** 

### Notion 3

We can also evaluate the momentum and the velocity of the electron in an alternative way, knowing the band energy function.
As seen in [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Electron velocity and band energy|Electron velocity and band energy]]:

$$ \braket{\bar{p}_{n\bar{k}}}=\frac{m}{\hbar} \nabla_{\bar{k}} E_n(\bar{k})\qquad \bar{v}_n(\bar{k})=\frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k}) $$

In the case of free electron $E_n(\bar{k})= \frac{\hbar^2 k^2}{2m}$ we obtain the crystal momentum result seen in the previous paragraph

### Notion 4

Reciprocal lattice of an FCC is a BCC.
Brillouin zone of FCC

![[Notions of Solid State Physics.png|300]]
### Notion 5

We have the identity:

$$ e^{i \bar{G} \cdot \bar{R}} =1 $$

This implies:

$$ e^{i \bar{G} \cdot (\bar{r}+\bar{R})} = e^{i \bar{G} \cdot \bar{r}} $$

I.e. that $e^{i \bar{G} \cdot \bar{r}}$ is a periodic function in $\bar{r}$ with a Bravais lattice periodicity. This is used in proving that the Bloch function is periodic in reciprocal space

### Notion 6

How many k-states in a band ? $N_{k-states}=N_{cells}$.
It can be proved briefly:

$$ N_{k-states}= \frac{V_{rec.\ lattice\ cell}}{d^3k}= \frac{(2\pi)^3}{V_{dir.\ lattice\ cell}} \frac{V_{crystal}}{(2 \pi)^3} = N_{cells}$$

How many bands ? In principle infinite (if we consider also the possible excited states )
We usually are interested in a subset, say the ones associated to the valence shell.
So the rule is

$$N_{bands} = N_{atomic\ states}N_{atoms\ per \ unit\ cell}$$

For making an example specific to semiconductor, in silicon we have as atomic configuration $[\text{Ne}]3s^23p^2$, so we have a total of 4 possible states for the electron (1 from the s orbital, 3 from the p orbital), and considering that silicon has a diamond structure, it contains in its unit cell 2 atoms.
We can then expect 8 bands.
Remember that due to spin degeneracy of electrons we accommodate 2 electrons per state

![[Images/Notions of Solid State Physics.png|500]]

### Notion 7

Given the TISE in Bloch's theorem, if we take the complex conjugate:

$$ \hat{H}\Psi_{\bar{k}}(\bar{r}) = E_{n\bar{k}}\Psi_{\bar{k}}(\bar{r}) \iff \hat{H}\Psi^*_{\bar{k}}(\bar{r}) = E_{n\bar{k}}\Psi^*_{\bar{k}}(\bar{r})   $$

We obtain that $\Psi^*_{\bar{k}}(\bar{r})$ is solution with eigenvalue $E_{n\bar{k}}$.
But also we have that $\Psi^*_{\bar{k}}(\bar{r}) = u_{n, -\bar{k}}(\bar{r})e^{-i\bar{k}\cdot\bar{r}}$, i.e. a generic Bloch's function associated to the wavector $-\bar{k}$, so that it satisfies: 
$$\hat{H}\Psi^*_{\bar{k}}(\bar{r}) = E_{n,-\bar{k}}\Psi^*_{\bar{k}}(\bar{r})$$

We can conclude the following symmetry property (which is NOT due to the crystal symmetry):

$$E_{n,\bar{k}}= E_{n,-\bar{k}} $$

This implies that in graph of the bands at the $\Gamma$ point the bands must be even.

From the symmetry of the band energy we derive the following symmetry property for the electron velocity:

$$\bar{v}_n(\bar{k})=\frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k}) = \frac{1}{\hbar} \nabla_{\bar{k}} E_n(-\bar{k}) = -\frac{1}{\hbar} \nabla_{-\bar{k}} E_n(-\bar{k}) = -\bar{v}_n(-\bar{k}) $$

So that in the end :

$$\bar{v}_n(\bar{k})= -\bar{v}_n(-\bar{k}) $$

### Notion 8

Suppose we want to evaluate the total current density of a material that a has a band structure.
First we consider:

$$ \bar{J} = \sum_n \bar{J}_n$$

Now we consider a way to evaluate the current density for each band.
By definition $\bar{J}= \rho \bar{v}$ (maybe start using the definition in the berkeley) , using this we have:

$$ \bar{J}_n = -2\frac{e}{V}\sum_{\bar{k} \in BZ}  f_n(\bar{k})\bar{v}_n(\bar{k}) $$

Where $f_n(\bar{k})$ is the probability that the state $\{n, \bar{k}\}$ is occupied (this is an indicator function of type the electron is here, 1, or is not here ,0). Notice that this is **not** the Fermi-Dirac ditribution function, as conduction is a non equilibrium phenomenon. (for more remarks see [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Static electrical conductivity with the Boltzmann equation|here]])

Now we can state the following.
If a band is full : $f_n(\bar{k})=1, \forall \bar{k}$, i.e. all the states $\{n, \bar{k}\}$ are occupied. So we can evaluate:

$$ \bar{J}_n = -2\frac{e}{V}\sum_{\bar{k} \in BZ}  \bar{v}_n(\bar{k}) = -2\frac{e}{V}\sum_{\bar{k} \in half\ BZ} ( \bar{v}_n(\bar{k}) + \bar{v}_n(-\bar{k})) = 0  $$

So that we conclude that full bands are inert.
So pure semiconductors are non-conductive at $T=0$ (ground state). Only thermal excitation can promote electrons to the valence bands 

### Notion 9

![[Images/Notions of Solid State Physics-1.png|400]]

Most of the important stuff in a semiconductors happens between the band edges comprised between the top of the valence band and the bottom of the conduction band.
For this reason we develop specific tools to describe the bands in these points.
- Effective mass
We expand the band energy in taylor series around the maxima or minima, say $\bar{k}_0 \in B(k_{st}, \rho)$:

$$ E_n(\bar{k}) \simeq E_n(\bar{k}_0) +(\bar{k}-\bar{k}_0)^t\cdot \nabla E_n(\bar{k}_0) + \frac{1}{2}(\bar{k}-\bar{k}_0)^t\cdot\mathcal{H}(E_n(\bar{k}_0))\cdot(\bar{k}-\bar{k}_0) $$

Recalling now the definition of electron velocity and by defining :

$$ \left(\frac{1}{m^*}\right)_{n,\bar{k_0}}\equiv \frac{\mathcal{H}(E_n(\bar{k}_0))}{\hbar^2} $$

we obtain

$$ E_n(\bar{k}) \simeq E_n(\bar{k}_0) +(\bar{k}-\bar{k}_0)^t\cdot \hbar v_{n}(\bar{k}_0) + \frac{\hbar^2}{2}(\bar{k}-\bar{k}_0)^t\cdot\left(\frac{1}{m^*}\right)_{n,\bar{k_0}}\cdot(\bar{k}-\bar{k}_0) $$

Note that if $\bar{k}_0 = \bar{k}_{st}$ then the linear term vanishes.

Note that the mass effective tensor depends on the reference frame. So if consider the band edges, i.e. points of maxima and minima, these are point of high symmetry in the crystal.
In these point is almost guaranteed, at least in semiconductor, to exist a reference frame where the mass tensor assume the form:
![[Images/Notions of Solid State Physics-2.png]]

In this sense the mass tensor is just defined by 2 numbers, longitudinal and transversal mass.
Note of course that we can have permutations of the axis, i.e. the longitudinal mass can be either on, x, y or z.

### Notion 10 

Suppose we are in a $\bar{k}_0$ of high symmetry, say a minima.
Then:

$$ E_n(\bar{k}) \simeq E_n(\bar{k}_0) + \frac{\hbar^2}{2} \left( \frac{(k_x-k_{0x})^2}{m_L} + \frac{(k_y-k_{0y})^2}{m_T} + \frac{(k_z-k_{0z})^2}{m_T} \right)$$

So if we plot, say the function along the $k_x$ direction we will have a graph like the following:

![[Images/Notions of Solid State Physics-3.png|300]]

Given the free electron mass as a reference we can define heavy electron if $m_L$ (or $m_T$) is bigger than $m_e$ or we can define light electron the opposite.
The same holds for holes relative to the valence band (analysis on maxima).

### Notion 11

Suppose we are in a $\bar{k}_0$ of high symmetry, say a minima.
Then the expression:

$$ E_n(\bar{k}) \simeq E_n(\bar{k}_0) + \frac{\hbar^2}{2} \left( \frac{(k_x-k_{0x})^2}{m_L} + \frac{(k_y-k_{0y})^2}{m_T} + \frac{(k_z-k_{0z})^2}{m_T} \right)$$

can be recasted in an ellipsoid in k-space:

$$ \frac{(k_x-k_{0x})^2}{a^2} + \frac{(k_y-k_{0y})^2}{b^2} + \frac{(k_z-k_{0z})^2}{c^2} = 1 $$

With $a = \frac{\sqrt{2m_L\Delta E}}{\hbar}$,$b = c =  \frac{\sqrt{2m_T\Delta E}}{\hbar}$.
This ellipsoid contains all the states with energy $E \in \Delta E$. Another way to say it, and see it, is that the center represent the state with energy $E_n(\bar{k}_0)$ and the surface of the ellipsoid contains all the states with the same energy $E_n(\bar{k})$, so that is in fact an isoenergetic curve.

### Notion 12

Of paramount importance is the density of states. Note that in this course, and in general in applications, we don't use the usual definition of Solid State Physics, but we use to divide by the volume of the material. 
We show an application in how to evaluate the DOS for a 3D material using the ellipsoid form of the band.
Considering that $D(E) = V_{crystal}\rho(E)$

$$\int_{E_0}^E\rho_n(E')dE = \frac{N}{V} \iff \int_{E_0}^E\rho_n(E')dE = \frac{1}{V}\frac{V_{ellipsoid}}{\frac{(2\pi)^3}{V}} = \frac{2^{3/2}m_L^{1/2}m_T}{6 \pi^2\hbar^3}(E-E_0)^{3/2} $$

So we can extract the normalized DOS by differentiation:

$$\rho_n(E) = \frac{m_L^{1/2}m_T}{\sqrt{2} \pi^2\hbar^3}(E-E_0)^{1/2}$$

Note that this calculation is an approximation of the true DOS for states around the minima.
It hold true for energy intervals of the order of $0.1\ \text{eV}$ from the minimum energy, then further term beyond the second order must be included.

Moreover, in the $\Gamma$ point, the mass tensor degenerates to only one number, i.e. due to symmetry $m_T=m_L=m^*$, so

$$\rho_n(E) = \frac{{m^*}^{3/2}}{\sqrt{2} \pi^2\hbar^3}(E-E_0)^{1/2}$$

### Notion 13

We can describe bands either by talking of electrons or by talking of their absence (holes) [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Holes description|Holes description]]

One thing to note is that occupation probability for holes and electrons for a given $\bar{k}$ is :

$$ f_{h}(\bar{k})+f_{e}(\bar{k}) = 1 \iff f_{h}(\bar{k}) = 1 - f_{e}(\bar{k}) $$

![[Images/Notions of Solid State Physics 1.png|400]]

A nice way to remember all is to remember the above scheme. Suppose one has the valence band in red and the conduction band in black. Then in order to have the hole language one must flip all the axis.