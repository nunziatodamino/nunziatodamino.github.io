We arrive by evaluating the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Equilibrium condition for the order parameter in the Ising model using the Ginzburg-Landau theory|Equilibrium condition for the order parameter in the Ising model using the Ginzburg-Landau theory]] to the Green's equation:

$$ \hat{\mathcal{L}} [G_C(\bar{r},\bar{r}')] = \delta^d(\bar{r}-\bar{r}') \quad \text{where}\ \hat{\mathcal{L}} = \beta(2at + 6bm^2(\bar{r}) -K\nabla^2)$$

We now want try to solve it by find the Green's function.
### Homogeneous case

We start by solving the easy case: suppose $h(\bar{r}) = h_0 = 0$ so that the order parameter is constant $m(\bar{r}) = m_0$.
Then the operator becomes $\hat{\mathcal{L}_0} = \beta(2at + 6bm_0 -K\nabla^2) \equiv \beta K(\xi^{-2}(t) -\nabla^2)$. 
Note that for $t>0$ ($T>T_C$) we have $m_0 =0$ while for $t<0$ we have $m_0 \neq0$ so that the parameter has a $t$ dependence.
The equation then becomes:

$$ [\xi^{-2}(t) -\nabla^2]G_C(\bar{r},\bar{r}') = \frac{1}{\beta K} \delta^d(\bar{r}-\bar{r}') $$

Notice that, if one defines $g(\bar{r},\bar{r}')=\beta KG_C(\bar{r},\bar{r}')$ then:

$$ [\xi^{-2}(t) -\nabla^2]g(\bar{r},\bar{r}') =  \delta^d(\bar{r}-\bar{r}') $$

That is an **Helmholtz equation** and its Green's function is [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Miscellanea/Notable Green's functions|known]].
Specifically, in 3D:

$$ g(\bar{r},\bar{r}')=\beta KG_C(\bar{r},\bar{r}') = \frac{1}{4\pi} \frac{e^{i|\bar{r}-\bar{r}'|/\xi}}{|\bar{r}-\bar{r}'|} $$
