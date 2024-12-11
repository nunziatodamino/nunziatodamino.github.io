If a particle is a fermion, it follows the Fermi-Dirac statistics. Specifically, the Fermi-Dirac distribution function is given by:

$$\bar{n}_i = \frac{1}{e^{\beta(\epsilon_i-\mu)}+1}$$

(Where $\epsilon_i$ is the energy of the i-th eigenstate, $\mu$ is the chemical potential, and $\beta=1/k_B T$ is the inverse temperature.)
The Fermi-Dirac distribution function represents the average number of fermions present in the eigenstate i.
Due to the Pauli exclusion principle, which states that only one fermion can occupy a given eigenstate, there is the constraint $0<\bar{n}_i<1$.
This constraint gives an additional interpretation to the Fermi function: $n_i$ represents the probability that an energy state $\epsilon_i$ is occupied by a fermion.
This is because the normalization condition must also hold, which states that the sum of the average numbers must be equal to the total number of fermions N:

$$\sum_i \bar{n}_i = N$$

The important control parameter of this distribution is the temperature.
So we will report in the following the graph of Fermi-Dirac function at different temperature values:

	![[fermi_dirac_statistics.png]]

And discuss the 2 main cases: $T=0\ \text{K}$ and $T\neq0\ \text{K}$

## $T=0\ \text{K}$

In this case the distribution is an Heaviside function:

$$ 
\lim_{T\to 0} \bar{n}_i
= \Theta(E_F-\varepsilon_i) = 
\begin{cases}
1 \qquad \text{if}\ \varepsilon_i\leq E_F \\
0 \qquad \text{if}\ \varepsilon_i>E_F \\

\end{cases} $$

Leading to the conclusion that the chemical potential coincides with the Fermi energy and all the electrons certainly occupies the eigenstates with energy below the Fermi energy and that eigenstates above the Fermi energy are not allowed.

## $T\neq0\ \text{K}$

As the temperature is raised we see a deviation from the Heaviside function, the function becomes a sigmoid curve, exhibiting what is a phenomenon known as "level repulsion", i.e. the electrons with energy slightly below the Fermi energy $(\Delta E \sim k_B T)$ tends to populate the levels slightly above the Fermi energy (same energy delta)

![[Images/Fermi-Dirac statistics_RAISING T.png|500]]

Is of interest to estimate the number of electrons that participates at the level repulsion for a given value of temperature $T$. One can prove that

$$ \Delta N = N \frac{T}{T_F} <<N$$

Notice that even here we are considering the chemical potential coincident with the the Fermi energy, though this is false, because we can measure experimentally the following dependence on temperature for the chemical potential: 

$$\mu(T) = E_F -\frac{\pi^2}{12}\frac{(k_bT)^2}{E_F}$$

Leading to the conclusion that the picture we painted is valid only is the temperature variation is not big enough to shift the Fermi energy value significantly