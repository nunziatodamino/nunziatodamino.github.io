### Electrons

![[Images/Non degenerate semiconductor approximation ().png|500]]

In most cases in semiconductors the DOS and the Fermi energy are such that:

$$ E_C-E_F >> k_BT $$

This imply that from the crossing onwards of the DOS with the Fermi-Dirac distribution (which is the only contributing part in the electron density as we saw in [[Projects/Physics of semiconductors/Electrons and holes densities in an homogeneous semiconductor|Electrons and holes densities in an homogeneous semiconductor]]), this last function can be approximated with a Boltzmann distribution, i.e: 

$$ f_{FD}\simeq f_{B} \propto e^{-\beta(E-E_F)} $$

The typical proportionality factor can be derived, instead of using direct calculation, by approximating the Fermi Dirac distribution using the initial consideration.
We obtain a coefficient of 1, so that:

$$ f_{FD}\simeq f_{B} = e^{-\beta(E-E_F)} = e^{-\frac{E-E_F}{k_bT}}  $$

### Holes

Note that the same approximation can be done on holes, while this time we are focusing an the complementary Fermi-Dirac function:

![[Images/Non degenerate semiconductor approximation (Boltzmann approximation).png]]

This imply that the condition to keep in mind is :

$$ E_F-E_V >> k_BT $$

So that we arrive in the end:

$$ 1-f_{FD}\simeq 1-f_{B} = e^{-\beta(E_F-E)} = e^{-\frac{E_F-E}{k_bT}}  $$

### Qualitative comment

![[Images/Non degenerate semiconductor approximation (Boltzmann approximation)-1.png|500]]

Supposing fixed the energies of the valence and conduction band, the green interval represent the possible values of $E_F$ for which the non-degenerate approximation holds.

