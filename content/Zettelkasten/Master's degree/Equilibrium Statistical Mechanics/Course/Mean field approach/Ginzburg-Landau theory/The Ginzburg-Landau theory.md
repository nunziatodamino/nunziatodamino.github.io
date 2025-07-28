Suppose we consider the following decomposition for an order parameter in a system :

$$ \phi(\bar{r}) = \braket{\phi(\bar{r})} + \delta\phi(\bar{r}) $$

This is equivalent to recast the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Mean field approximation|Mean field approximation]] as is equivalent to the condition:

$$
(\delta\phi)^2 \sim (\delta\phi)^3 \sim \dots \sim (\delta\phi)^n \sim 0
$$

Consider now the following functional, called the **Ginzburg-Landau functional**:

$$ \mathscr{F}_{\text{eff}} =\beta\mathscr{H}_{\text{eff}} = \int d^dr\ \left[\mathscr{L}(\phi(\bar{r})) +\frac{K}{2} (\nabla\phi(\bar{r}))^2 \right]  $$

Where $\mathscr{L}$ is the Landau free energy density of the system. Note that one can [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Ginzburg-Landau functional formal derivation (optional)|prove formally]] why the functional has this form in the context of a [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Partition function coarse-graining|coarse-graining procedure]].
Note that if we consider the order parameter constant over the whole space, i.e.:

$$ \phi(\bar{r}) \simeq \phi_0  $$

Then in the Ginzburg-Landau functional $\nabla\phi(\bar{r}) \simeq 0$ so that the functional become the Landau functional:

$$ \mathscr{F}_{\text{eff}} =\beta\mathscr{H}_{\text{eff}} \simeq \int d^dr\ \mathscr{L}(\phi_0) $$

