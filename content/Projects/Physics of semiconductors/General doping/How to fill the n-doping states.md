We first describe the general procedure to evaluate how much electronic states there will be in a particular band structure after a n-doping procedure.
Given that we cannot count atoms, every evaluation will be per unit volume.

- Evaluate the atom density of the material $n$ (final units in $\text{atoms/cm}^3$)
- Evaluate of many atoms per unit cell $\tilde{N}$, then to obtain the unit cells per unit volume one simply divides the atom density for the atom per unit cells $n/\tilde{N}$ (final units in $\text{cells/cm}^3$)
- The total number of $\bar{k}$ states per unit volume per band is equal to the number of units cells per unit volume due to the Born-Von Karman boundary condition $n_{\bar{k}-states}=n/\tilde{N}$
- The total number of electronic states per unit volume per band is equal to twice (due to spin degeneracy) of the number of $\bar{k}$ states per unit volume $n_{electrons}=2n_{\bar{k}-states}=2n/\tilde{N}$

This scheme is valid in general for a homogeneous semiconductor, or a metal in general.
Now suppose we n-dope the material, introducing a certain number of donors per unit volume $n_d$ (final units in $\text{donors/cm}^3$)

**Given that is customary to show 4 valence bands in the band structure of a semiconductor** , we have to allocate $\left[4\left(2n/\tilde{N}\right)+n_d\right]V\equiv4N+N_d$ electrons

**Note that in the donor state we can put just one electron per state. This because, if we are putting 2 with opposite spin the binding energy reduces and the level become unstable.**

We show now a specific example in filling the ground state of As n-doped with Se:

![[Images/How to fill the n-doping states.png|500]]

The $4N$ electrons will be allocated in the valence bands, while the donors electrons will go all in the donor state
Notice that the whole crystal is neutral, because the donors introduced are themselves neutral, so no donor is ionized (this is usually written as $N_d^+=0$, the ionized donors, density is 0) 

![[Images/How to fill the n-doping states-1.png|500]]

If we now consider an excited state

