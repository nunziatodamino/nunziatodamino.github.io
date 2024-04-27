The final part of band theory consists in the case in which the electrons are tighly bound to the nucleus. (e.g. When we consider electrons that are NOT of valence, but instead in the inner shells, like the one in d shells in metals.)

The periodic potential in the initial problem of the electronic dynamics is then composed by the following:

$$V(\bar{r}) = V_{atomic}(\bar{r}) + \Delta U(\bar{r})$$

Where $V_{atomic}$ is the potential the atom will have if it was alone, e.g. the potential in the Hamiltonian of the isolated atom:

$$\hat{H}_{atomic} = \frac{\hat{p}^2}{2m} + \hat{V}_{atomic}$$

In the solution of the periodic problem we will not use the approach of the plane wave expansion (as seen in the quasi free electron scheme), but the so called LCAO (linear combination of atomic orbitals), that is we consider that the solution is:

$$ \psi(\bar{r}) = \sum_j \sum_{\bar{R}} c_{j, \bar{R}} \phi_j(\bar{r}-\bar{R}) \qquad  \bar{R} \in B.L.$$

Where $\phi_j$ are the eigenstates of the isolated Hamiltonian.
Let's verify briefly that the proposed solution satisfies the Bloch Theorem for the appropriate choice of the coefficents $c_{j, \bar{R}}$.
	The Bloch Theorem states that the solution for a periodic Hamiltonian of a periodic lattice must satisfy the following $\psi_{n\bar{k}}(\bar{r} + \bar{R}) = \psi_{n\bar{k}}(\bar{r})e^{i(\bar{k}\cdot\bar{R})}\quad \forall \bar{R} \in B.L.$, . In our case:
	
	$$ \psi(\bar{r}+\bar{R}) = \sum_j \sum_{\bar{R}'} c_{j, \bar{R}'} \phi_j((\bar{r}+\bar{R})-\bar{R}')$$
	if we then choose $c_{j, \bar{R}} = e^{i (\bar{k} \cdot \bar{R})}\ \forall j$ , we will have: 
	
	$$ \psi(\bar{r}+\bar{R}) = \sum_j \sum_{\bar{R}'} c_{j, \bar{R}'} \phi_j((\bar{r}+\bar{R})-\bar{R}') = \sum_j \sum_{\bar{R}'}e^{i(\bar{k}\cdot\bar{R}')}\phi_j((\bar{r}+\bar{R})-\bar{R}') = $$
	$$ =\sum_{\bar{R}'}e^{i(\bar{k}\cdot\bar{R}')}\left(\sum_j \phi_j((\bar{r}+\bar{R})-\bar{R}') \right) \frac{e^{i(\bar{k}\cdot\bar{R})}}{e^{i(\bar{k}\cdot\bar{R})}} = e^{i(\bar{k}\cdot\bar{R})} \sum_{\bar{R}'}e^{i(\bar{k}\cdot(\bar{R}'-\bar{R}))}\left(\sum_j \phi_j((\bar{r}-(\bar{R}'-\bar{R}) \right) = $$
	$$= e^{i(\bar{k}\cdot\bar{R})} \sum_{\bar{R}''}e^{i(\bar{k}\cdot\bar{R}'')}\left(\sum_j \phi_j(\bar{r}-\bar{R}'') \right) = e^{i(\bar{k}\cdot\bar{R})} \psi(\bar{r}) $$
	
	Which prove our statement.

Is custom to use only the first eigenstate in this scheme, so that:

$$ \psi(\bar{r}) =\sum_{\bar{R}} c_{\bar{R}} \phi_0(\bar{r}-\bar{R})= \sum_{\bar{R}} e^{i(\bar{k} \cdot \bar{R})} \phi_0(\bar{r}-\bar{R}) \qquad  \bar{R} \in B.L.$$

Is also useful to note that one can rewrite this function as:

$$\psi(\bar{r}) = \phi_0(\bar{r}) + \sum_{\bar{R}\neq \bar{0}} e^{i(\bar{k} \cdot \bar{R})} \phi_0(\bar{r}-\bar{R})$$

After this considerations, let's try to solve the periodic problem:

$$\hat{H}_{periodic}\ket{\psi} = E(\bar{k})\ket{\psi}$$

By evaluating the projection over the $\ket{\phi_0}$ eigenstate:

$$\bra{\phi_0}\hat{H}_{periodic}\ket{\psi} = \bra{\phi_0}E(\bar{k})\ket{\psi}$$

$$\bra{\phi_0}\hat{H}_{atomic} + \Delta \hat{U})\ket{\psi} = \bra{\phi_0}E(\bar{k})\ket{\psi}$$

$$\bra{\phi_0}\hat{H}_{atomic}\ket{\psi} + \bra{\phi_0}\Delta \hat{U})\ket{\psi} = \bra{\phi_0}E(\bar{k})\ket{\psi}$$

$$E_0\braket{\phi_0|\psi} + \bra{\phi_0}\Delta \hat{U})\ket{\psi} = E(\bar{k})\braket{\phi_0|\psi}$$

So that one has in the end:

$$E(\bar{k}) = \frac{E_0\braket{\phi_0|\psi} + \bra{\phi_0}\Delta \hat{U})\ket{\psi}}{\braket{\phi_0|\psi}} = E_0 + \frac{\bra{\phi_0}\Delta \hat{U})\ket{\psi}}{\braket{\phi_0|\psi}}$$

We expect that the overlap integrals are small, due to the fact that we have a slight deformation from the isolated orbital. We will then consider the approximation $\braket{\phi_0|\psi} \simeq 1$.

Is now interesting to evaluate the correction term in the position basis using a projector:
First term:

$$\bra{\phi_0}\Delta \hat{U})\ket{\psi} = \int d^3\bar{r}\ \phi_0^* \Delta U(\bar{r}) \left(\phi_0(\bar{r}) + \sum_{\bar{R}\neq \bar{0}} e^{i(\bar{k} \cdot \bar{R})} \phi_0(\bar{r}-\bar{R})\right) =   $$

$$ =\braket{\phi_0|\Delta U|\phi_0} + \sum_{\bar{R}\neq \bar{0}} e^{i(\bar{k} \cdot \bar{R})}  \int d^3\bar{r}\ \phi_0^* \Delta U(\bar{r})\phi_0(\bar{r}-\bar{R}) \equiv \beta + \sum_{\bar{R}\neq \bar{0}} \gamma(\bar{R}) e^{i(\bar{k} \cdot \bar{R})} $$

Where we have supposed that the isolated eigenstates are normalised.
So that one can express the energy in the position basis:

$$E(\bar{k}) = E_0 + \beta + \sum_{\bar{R}\neq \bar{0}} \gamma(\bar{R}) e^{i(\bar{k} \cdot \bar{R})}$$

This expression greatly simplyfies if one chooses to only evaluates the contribution of the nearest neighbours.
First we observe that, due to the inversion simmetry of the Bravais lattice, $\Delta U(\bar{r})=\Delta U(-\bar{r})$, and this naturally implies that $\gamma(\bar{r}) = \gamma(-\bar{r})$. 
One has then:

$$E(\bar{k}) \simeq E_0 + \beta + \sum_{n.n.} \gamma(\bar{R}) e^{i(\bar{k} \cdot \bar{R})} = E_0 + \beta + \sum_{n.n.} \gamma(\bar{R}) \cos(\bar{k} \cdot \bar{R})$$
