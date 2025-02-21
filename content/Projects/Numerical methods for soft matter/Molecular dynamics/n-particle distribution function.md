From the [[Projects/Numerical methods for soft matter/Molecular dynamics/Reduced distribution functions|Reduced distribution functions]] is possible to define a new distribution function that is called n-particle distribution function. This is simply the relative reduced distribution function normalized by the uncorrelated thermodynamic limit:

$$ g_s(\bar{x}_1, \dots, \bar{x}_s) \equiv \frac{n_s(\bar{x}_1, \dots, \bar{x}_s)}{\rho^s} $$

Of this set the most useful is the pair distribution function:

$$ g_2(\bar{x}_1, \bar{x}_2) \equiv \frac{n_2(\bar{x}_1, \bar{x}_2)}{\rho^2} $$

Note that in case of an isotropic system this is function only of the relative position, i.e. $g_2(\bar{x}_1, \bar{x}_2) = g_2(|\bar{x}_1 - \bar{x}_2|)$ and in this particular case is called radial distribution function.
For what we have seen in the [[Projects/Numerical methods for soft matter/Molecular dynamics/Reduced distribution functions|Reduced distribution functions]], in the uncorrelated thermodynamic limit, i.e. $|\bar{x}_1 - \bar{x}_2| \to +\infty$ and $N \to +\infty$ we have that $g_2(\bar{x}_1, \bar{x}_2) \to 1$ by construction.
Note that this is true in general for any n-particle distribution, in the uncorrelated thermodynamic limit $g_s(\bar{x}_1, \dots, \bar{x}_s) \to 1$.