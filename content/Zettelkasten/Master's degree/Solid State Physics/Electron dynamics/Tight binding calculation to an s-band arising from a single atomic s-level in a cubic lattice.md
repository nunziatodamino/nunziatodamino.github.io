We obtained from [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/General formulation of the tight binding approximation|General formulation of the tight binding approximation]] the formula:

$$E(\bar{k}) = E_j - \frac{\sum_i b_i\beta_{ji} + \sum_i b_i\sum_{\bar{R}\neq \bar{0}} \gamma_{ji}(\bar{R}) e^{i(\bar{k} \cdot \bar{R})}}{b_j +\sum_ib_i \sum_{\bar{R}\neq \bar{0}} \alpha_{ji}(\bar{R}) e^{i(\bar{k} \cdot \bar{R})}}$$

If we suppose that only s-levels can contribute to the Bloch sums, i.e. they are the only relevant overlapping atomic orbitals, then all $b_i=0$, except $b_0=1$.
We can then greatly simplify our expression and write:

$$E(\bar{k}) = E_j - \frac{\beta_{j0} + \sum_{\bar{R}\neq \bar{0}} \gamma_{j0}(\bar{R}) e^{i(\bar{k} \cdot \bar{R})}}{1 +\sum_{\bar{R}\neq \bar{0}} \alpha_{j0}(\bar{R}) e^{i(\bar{k} \cdot \bar{R})}}$$

Where:

$$ \alpha_{j0}(\bar{R}) = \int d^3\bar{r}\ \phi_j^*(\bar{r})   \phi_0(\bar{r}-\bar{R})\qquad\beta_{j0} \equiv-\braket{\phi_j|\Delta U|\phi_0} \qquad \gamma_{j0}(\bar{R}) \equiv -\int d^3\bar{r}\ \phi_j^*(\bar{r}) \Delta U(\bar{r})\phi_0(\bar{r}-\bar{R}) $$

This expression greatly simplifies if one chooses to only evaluates the contribution of the nearest neighbors.
First we observe that, due to the inversion symmetry of the Bravais lattice, $\Delta U(\bar{r})=\Delta U(-\bar{r})$, and this naturally implies that $\gamma(\bar{R}) = \gamma(-\bar{R})$. 
Moreover for the nearest neighbors, the value of $\gamma_{j0}(\bar{\bar{R}})$ is equal for all them due to the fact that they are at the same distance from the reference lattice point.
One has then, by also neglecting $\alpha_{j0}(\bar{R})$ that gives only a small correction:

$$E(\bar{k}) \simeq E_j - \beta_{j0} - \sum_{n.n.} \gamma_{j0}(\bar{R}) e^{i(\bar{k} \cdot \bar{R})} = E_j - \beta_{j0} - \gamma_{j0}\sum_{n.n.} \cos(\bar{k} \cdot \bar{R})$$

We want now to apply this to the specific case of the cubic lattice. Supposing to be in $\bar{R}'=0$ without loss of generality, and to have the 6 nearest neighbors of the cubic lattice at $\bar{R}-\bar{R}' = \{(\pm a, 0, 0) ;( 0,\pm a, 0) (0, 0, \pm a)\}$
The $\gamma(\bar{R})$ integrals have all the same value for each of these lattice points, given that they are at the same distance one another and are of the same chemical species, so we denote it simply with $\gamma_{j0}$.
We have then, for a generic $\bar{k}=(k_x,k_y,k_z)$:

$$E(\bar{k}) = E_j - \beta_{j0} - 2\gamma_{j0} \left[\cos(k_xa)+\cos(k_ya)+\cos(k_za)\right]$$

Finally we obtained the main characteristic of the tight binding model. The difference between the minimum and maximum of the energy $E(\bar{k})$ function is proportional to the integral $\gamma_{j0}$ (which we expect becomes larger as $j$ increases) while the main function of $\beta_{j0}$ is to lower the ''center of mass'' of the band respect to the original energy value of the isolated atom.
We see displayed here the bands corresponding to $j=1$ and $j=2$, in function of inverse of the atom spacing $\frac{1}{r}$:

![[Immagini/Tight binding calculation for a cubic lattice.png|400]]