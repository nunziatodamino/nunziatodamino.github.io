Even if the Bravais lattice is not specified, there are some important properties for the matrix $D$

- Symmetry : $D_{\alpha \beta}(\bar{R}-\bar{R}')  =D_{\beta\alpha}(\bar{R}'-\bar{R})$

This is due to the fact that, since the interaction function $\Phi$ satisfies the assumptions of the Schwartz theorem, the Hessian through which the matrix $D$ is defined is symmetric, making $D$ symmetric by definition.

- Inversion symmetry : $D_{\alpha \beta}(\bar{R}) = D_{\alpha \beta}(-\bar{R})$

This is due to the fact that every Bravais lattice has inversion simmetry, so that if $\bar{R}$ belongs to the lattice, also $-\bar{R}$ belongs to it.

- Reticular sum property: 

$$\sum_{\bar{R}} D_{\alpha \beta}(\bar{R})=0$$

Proof:  
- Let us consider the situation in which there is no displacement, i.e., each atom is at the equilibrium position. Now, I choose a rigid displacement $d$, equal for every lattice point, as the displacement $u$:

$$\bar{r}(\bar{R},t) = \bar{R} + \bar{d}(\bar{R},t) \qquad \forall t, \forall\bar{R}$$

It follows then that the harmonic contribution to the energy must be 0, since a rigid transformation doesn't change the relative position of atoms. so we will have:

$$0=U=\frac{1}{2} \sum_{\bar{R},\bar{R}'}\sum_\alpha\sum_ {\beta}d_{\alpha}D_{\alpha \beta}(\bar{R}-\bar{R}')d_{\beta}' = \frac{1}{2} N\sum_\alpha\sum_ {\beta}\sum_{\bar{R}}d_{\alpha}D_{\alpha \beta}(\bar{R})d_{\beta}' =$$

$$= \frac{1}{2} N\sum_\alpha\sum_ {\beta}d_{\alpha}d_{\beta}'\sum_{\bar{R}}D_{\alpha \beta}(\bar{R})$$

Since the rigid translation cannot be 0 by definition one has the thesis.
