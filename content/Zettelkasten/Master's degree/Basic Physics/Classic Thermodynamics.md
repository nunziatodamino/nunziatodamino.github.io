# The thermodynamic potentials

## The internal energy $U$

We consider a function

$$ U(S,V,N_1,\dots, N_r) $$

Where $S$ is the entropy, $V$ the volume, and $N_i$ the moles of the various components of the system.
If we differentiate the function:

$$ dU = \frac{\partial U}{\partial S}dS + \frac{\partial U}{\partial V}dV + \frac{\partial U}{\partial N_1}dN_1 + \dots \frac{\partial U}{\partial N_r}dN_r $$

Of course in taking the partial derivatives the other variables of the function are considered constant, but is customary in thermodynamics textbooks to stress this fact by supplementary subscripts, as we will see.
Now one can define:

$$\left(\frac{\partial U}{\partial S}\right)_{V,N_1,\dots,N_r} \equiv T \qquad \qquad\left(\frac{\partial U}{\partial V}\right)_{S,N_1,\dots,N_r} \equiv -P \qquad \qquad \left(\frac{\partial U}{\partial N_i}\right)_{S,V,N_1,\dots,N_{i-1},N_{i+1}\dots,N_r} \equiv \mu_i$$

Where we indicate the temperature, the pressure, and the electrochemical potential (generally referred as chemical potential).
With these positions the differential becomes:

>$$dU = TdS -PdV + \sum_{i=1}^r \mu_i dN_i$$

## The Gibbs free energy $G$

The Gibbs free energy is obtained upon a [[Legendre transformation]] of the internal energy, and is defined as:

$$ G=G(T,P,N_1,\dots,N_r) = U + PV -TS $$

This function is of paramount importance in the study of reactions, specifically, given an initial and final state and evaluated the difference in Gibbs free energy, one can say that if $\Delta G<0$ the reaction is spontaneous, if $\Delta G>0$ the reaction is not spontaneous and requires energy in order to appear, if lastly $\Delta G=0$ the reaction is at equilibrium, e.g. the system continuosly transition between the initial and the final state.
By these considerations is extremely important to know its differential, if one proceeds:

$$ dG = dU +PdV +VdP -TdS - SdT $$

Then, plugging in the internal energy differential $dU = TdS -PdV + \sum_{i=1}^r \mu_i dN_i$ and by symplifying one obtains:

>$$ dG = VdP -SdT +\sum_{i=1}^r \mu_idN_i$$


