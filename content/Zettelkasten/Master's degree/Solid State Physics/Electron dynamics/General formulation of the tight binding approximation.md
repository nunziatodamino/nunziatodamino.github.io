Suppose we want to expand on the idea of [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/The tight-binding approach and its use cases|The tight-binding approach and its use cases]].

We begin by saying that given a lattice point, the crystal Hamiltonian $H$ can be approximated in the neighborhood of that point by the isolated atom Hamiltonian $H_{at}$ and the eigenfunctions of said Hamiltonian are localized, i.e. the isolated wavefunctions are small when the distance exceeds the lattice constant (have a range of the lattice constant)
We can then write the crystal Hamiltonian (per lattice point) as:

$$ \hat{H} = \frac{\hat{p}^2}{2m} + \hat{V}(\bar{r}) = \frac{\hat{p}^2}{2m}+ V_{at}(\bar{r}-\bar{R})+\Delta U(\bar{r}-\bar{R}) $$

So that we are considering our periodic potential : $\hat{V}(\bar{r})=V_{at}(\bar{r}-\bar{R})+\Delta U(\bar{r}-\bar{R})$
In this equation $\bar{R}$ is a generic Bravais lattice vector and $\Delta U(\bar{r}-\bar{R})$ is a small perturbation that can be evaluated as the potential contribution deriving from all the other lattice point:

$$ \Delta U(\bar{r}-\bar{R}) = \sum_{\bar{R}'\neq\bar{R}}V_{at}(\bar{r}-\bar{R}') $$

We report in the following its cross section:

![[Images/General formulation of the tight binding approximation_potpot.png|400]]

Due to the Bravais lattice invariance, we can set $\bar{R}=0$ in the potential and the Hamiltonian with no loss of generality.

In the solution of the periodic problem we will not use the approach of the plane wave expansion (as seen in the quasi free electron scheme), but the so called LCAO (linear combination of atomic orbitals) scheme.
A first natural candidate is then the Bloch sum:

$$ B_{i,\bar{k}}(\bar{r}) =  \sum_{\bar{R}} e^{i \bar{k} \cdot \bar{R}} \phi_i(\bar{r}-\bar{R}) \qquad $$

Where the $i$ index refers to the i-th isolated atomic orbital.
Let's verify briefly that this satisfies the Bloch Theorem.
	The Bloch Theorem states that the solution for a periodic Hamiltonian of a periodic lattice must satisfy the following $\psi_{n\bar{k}}(\bar{r} + \bar{R}) = \psi_{n\bar{k}}(\bar{r})e^{i\bar{k}\cdot\bar{R}}\quad \forall \bar{R} \in B.L.$   In our case:
	
	$$ B_{i,\bar{k}}(\bar{r}+\bar{R}) =  \sum_{\bar{R}'} e^{i \bar{k} \cdot \bar{R}'} \phi_i((\bar{r}+\bar{R})-\bar{R}')$$
	We will have then: 
	$$\begin{aligned} B_{i,\bar{k}}(\bar{r}+\bar{R}) &=  \sum_{\bar{R}'} c_{i, \bar{R}'} \phi_i((\bar{r}+\bar{R})-\bar{R}') =  \sum_{\bar{R}'}e^{i\bar{k}\cdot\bar{R}'}\phi_i((\bar{r}+\bar{R})-\bar{R}') = \\ 
	
	&=\sum_{\bar{R}'}e^{i\bar{k}\cdot\bar{R}'} \phi_i((\bar{r}+\bar{R})-\bar{R}')  \frac{e^{i\bar{k}\cdot\bar{R}}}{e^{i\bar{k}\cdot\bar{R}}} = e^{i\bar{k}\cdot\bar{R}} \sum_{\bar{R}'}e^{i\bar{k}\cdot(\bar{R}'-\bar{R})}\phi_i((\bar{r}-(\bar{R}'-\bar{R})) = 
	
	\\&= e^{i\bar{k}\cdot\bar{R}} \left(\sum_{\bar{R}''}e^{i\bar{k}\cdot\bar{R}''} \phi_i(\bar{r}-\bar{R}'') \right) = e^{i\bar{k}\cdot\bar{R}} B_{i,\bar{k}}(\bar{r}) 
	\end{aligned}$$
	Which prove our statement.

But the problem is that a Bloch sum of atomic orbitals itself is not an eigenfunction for the crystal.
We can solve this problem though by expanding the true wavefunction in this Bloch sum basis, solving the problem and maintaining the advantages:

$$ \psi = \sum_i b_i B_{i,\bar{k}}(\bar{r}) $$

This also has a physical meaning: in general for complex atoms in the valence region we expect a mixing of more types of orbitals (s,p or d), all with the appropriate weight (in fact we also expect that we have few of the weights $b_i$).

Is also useful for the following calculations to note that one can rewrite the Bloch sum as:

$$B_{i,\bar{k}}(\bar{r}) = \phi_i(\bar{r}) + \sum_{\bar{R}\neq \bar{0}} e^{i(\bar{k} \cdot \bar{R})} \phi_i(\bar{r}-\bar{R})$$

After this considerations, let's try to solve the periodic problem:

$$\hat{H}_{periodic}\ket{\psi} = E(\bar{k})\ket{\psi}$$

By evaluating the projection over the $i$-th atomic orbital $\ket{\phi_j}$ :

$$\begin{aligned}
\bra{\phi_j}\hat{H}_{periodic}\ket{\psi} &= \bra{\phi_j}E(\bar{k})\ket{\psi} \\
\bra{\phi_j}\hat{H}_{atomic} + \Delta \hat{U})\ket{\psi} &= \bra{\phi_j}E(\bar{k})\ket{\psi}\\
\bra{\phi_j}\hat{H}_{atomic}\ket{\psi} + \bra{\phi_j}\Delta \hat{U})\ket{\psi} &= \bra{\phi_j}E(\bar{k})\ket{\psi}\\
E_i\braket{\phi_j|\psi} + \bra{\phi_j}\Delta \hat{U})\ket{\psi} &= E(\bar{k})\braket{\phi_j|\psi}\end{aligned}$$

So that one has in the end:

$$E(\bar{k}) = \frac{E_i\braket{\phi_j|\psi} + \bra{\phi_j}\Delta \hat{U})\ket{\psi}}{\braket{\phi_j|\psi}} = E_i + \frac{\bra{\phi_j}\Delta \hat{U})\ket{\psi}}{\braket{\phi_j|\psi}}$$

 First we evaluate the overlap integral at the denominator. In the position basis:

$$ \begin{aligned}

\braket{\phi_j|\psi} &= \sum_ib_i\int d^3\bar{r}\ \phi_j^*(\bar{r})  \left(\phi_i(\bar{r}) + \sum_{\bar{R}\neq \bar{0}} e^{i(\bar{k} \cdot \bar{R})} \phi_i(\bar{r}-\bar{R})\right) \\

&= \sum_i b_i\delta_{ij} +\sum_i b_i \sum_{\bar{R}\neq \bar{0}} e^{i(\bar{k} \cdot \bar{R})}\int d^3\bar{r}\ \phi_j^*(\bar{r})   \phi_i(\bar{r}-\bar{R}) \equiv b_j +\sum_ib_i \sum_{\bar{R}\neq \bar{0}} \alpha_{ji}(\bar{R}) e^{i(\bar{k} \cdot \bar{R})}

\end{aligned}$$

Where one then define $\alpha_{ji}(\bar{R})$ as the overlap integral and make the hypothesis $\alpha_{ji}(\bar{R})\sim 0$.

Is now interesting to evaluate the correction term in the position basis using a projector:

$$\begin{aligned}\bra{\phi_j}\Delta \hat{U})\ket{\psi} &=\sum_i b_i \int d^3\bar{r}\ \phi_j^* \Delta U(\bar{r}) \left(\phi_i(\bar{r}) + \sum_{\bar{R}\neq \bar{0}} e^{i(\bar{k} \cdot \bar{R})} \phi_i(\bar{r}-\bar{R})\right) =  \\ &=\sum_ib_i\braket{\phi_j|\Delta U|\phi_i} + \sum_i b_i\sum_{\bar{R}\neq \bar{0}} e^{i(\bar{k} \cdot \bar{R})}  \int d^3\bar{r}\ \phi_j^* \Delta U(\bar{r})\phi_i(\bar{r}-\bar{R}) \equiv \\
&\equiv-\sum_i b_i\beta_{ji} - \sum_i b_i\sum_{\bar{R}\neq \bar{0}} \gamma_{ji}(\bar{R}) e^{i(\bar{k} \cdot \bar{R})} \end{aligned}$$

Where we have supposed that the isolated eigenstates are normalized.
Note that we have defined $\beta_i$ and $\gamma_i(\bar{R})$ with the minus signs:

$$ \beta_{ji} \equiv-\braket{\phi_j|\Delta U|\phi_i} \qquad \gamma_{ji}(\bar{R}) \equiv -\int d^3\bar{r}\ \phi_j^* \Delta U(\bar{r})\phi_i(\bar{r}-\bar{R}) $$

In order for them to be positive, because for how is defined, $\Delta U(\bar{r})$ is negative.

Finally one can express the energy in the position basis:

$$E(\bar{k}) = E_j - \frac{\sum_i b_i\beta_{ji} + \sum_i b_i\sum_{\bar{R}\neq \bar{0}} \gamma_{ji}(\bar{R}) e^{i(\bar{k} \cdot \bar{R})}}{b_j +\sum_ib_i \sum_{\bar{R}\neq \bar{0}} \alpha_{ji}(\bar{R}) e^{i(\bar{k} \cdot \bar{R})}}$$

