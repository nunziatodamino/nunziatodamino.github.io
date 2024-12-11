Given an ensemble, the main goal of a simulation is to collect trajectories, i.e., to collect pairs $(\bar{x}_i(t), \bar{v}_i(t))$ for each particle $i = \{1,2,\dots, N\}$.

A consequence of the [[Zettelkasten/Not finished/Computational methods for Material science/Molecular dynamics/Equivalence of ensembles]] is that, provided a suitable phase function can be identified in each case, the basic thermodynamic properties of a model system may be calculated as averages in any convenient ensemble.

### Evaluate temperature

The fundamental idea to evaluate temperature is to use the equipartition theorem:

$$ \braket{K} = \frac{1}{2}m \braket{v^2}= \frac{d}{2}k_bT $$

Where $d$ is the system dimensionality (for a particle that moves in space $d=3$).
==vedere se in realtà sono i gradi di libertà del sistema==
The mean value of the velocity squared can be collected either manually by the trajectories or immediately if I have a [[Zettelkasten/Not finished/Computational methods for Material science/Molecular dynamics/Maxwell-Boltzmann distribution of velocities|Maxwell-Boltzmann distribution of velocities]] of the system.
In that case one does simply evaluate the variance, so that: $\sigma_v = \braket{v^2}- \braket{v}^2 \iff \braket{v^2} =\sigma_v + \braket{v}^2$
### Evaluate pressure

We have 2 parts:

$$ P = \frac{Nk_BT}{V} + \frac{1}{3 V} \sum_i \sum_{j>i} \braket{\bar{f}_{ij} \cdot \bar{r}_{ij}}   $$

The first is the pressure of an ideal gas, the second part is derived assuming a pairwise potential $u(r_{ij})$ between particle, so that:

$$ {f}_{ij,\alpha} = \frac{\partial u(r_{ij})}{\partial r_{ij,\alpha}} =- {f}_{ji,\alpha}  $$

Where we defined the quantity per component $\alpha=x,y,z$.
Proof of this formula is given [[Projects/Numerical methods for soft matter/Monte Carlo methods/Estimators of the mean and the variance]]