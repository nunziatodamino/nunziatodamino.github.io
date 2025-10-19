As seen in [[Zettelkasten/Master's degree/Solid State Physics/Semiconductors/Effect on the energy bands of doping in semiconductors|Effect on the energy bands of doping in semiconductors]] impurities add additional levels to the host material band structure and these have a gap from the conduction (or valence) band of the order of $k_bT$ at room temperature, so that thermal excitation plays a fundamental role.
In order to asses the magnitude of this role we must compute the mean number of electrons in said levels at a given temperature and chemical potential.

For simplicity we assume that the impurity introduces only a single one-electron orbital level, and also assume that the density of impurities is low enough that the interaction of electrons (or holes) bound at different impurity sites is negligible (i.e. we neglect electron-electron interactions)

The idea is to calculate the number density of electrons $n^0_d$, (or holes $n^0_a$,) bound to donor (or acceptor) sites by simply multiplying by the total number density of donors (neutral and ionized) $N_d$, (or acceptors $N_a$,) the mean number of electrons $\braket{n_e}$ (or holes $\braket{n_h}$ ) there would be if there were only a single impurity:

$$ n^0_d = N_d\braket{n_e} \qquad n^0_a = N_a\braket{n_h}  $$

We use this notation in function of what we will see in [[Projects/Physics of semiconductors/Backlog/Charge neutrality in a doped semiconductor|Charge neutrality in a doped semiconductor]]
### Donor case 

If we ignored electron-electron interactions the level could either be empty, could contain one electron of either spin, or two electrons of opposite spins. 
However, the Coulomb repulsion of two localized electrons raises the energy of the doubly occupied level so high that double occupation is essentially prohibited (remember in fact that the gap $E_c-E_d \sim \text{meV}$).
So we have to evaluate the mean in a $\mu VT$ (Gran-Canonical) ensemble:

$$ \braket{n_e} = \frac{\sum_i N_i e^{-\beta(E_i-\mu N_i)}}{\sum_i e^{-\beta(E_i-\mu N_i)}} $$

Where we are summing over all possible configurations, $N_i$ is the number of electron occupying configuration $i$ with energy $E_i$.
We have, as said before, 3 configurations: one with the empty level ($E_0=0, N_0=0$), one with spin up ($E_1=E_d, N_1=1$) and one with spin down ($E_2=E_d, N_2=1$)
We obtain then:
$$ \braket{n_e} = \frac{ 2 e^{-\beta(E_d-\mu)}}{1+2e^{-\beta(E_d-\mu )}} = \frac{ 1}{\frac{1}{2}e^{\beta(E_d-\mu )}+1}  $$

And finally:

$$ n^0_d  = \frac{ N_d}{\frac{1}{2}e^{\beta(E_d-\mu )}+1}  $$

### Acceptor case

In contrast to a donor level, an acceptor level, when viewed as an electronic level, can be singly or doubly occupied, but not empty. This is easily seen from the hole point of view. If we see an empty level as one filled by 2 holes this has a very high energy due to the mutual Coulomb repulsion of the holes present in the valence band.
Again, using the same ansatz as before, we have 3 possible configurations: one with spin up ($E_0=0, N_0=1$) , one with spin down ($E_1=0, N_1=1$) and one fully occupied ($E_1=E_a, N_1=2$). 
Note that we are considering the 0 of our energy the one electron level, while the 2 electron level is higher in energy.

We have then:

$$ \braket{n_e} = \frac{\sum_i N_i e^{-\beta(E_i-\mu N_i)}}{\sum_i e^{-\beta(E_i-\mu N_i)}} = \frac{2e^{-\beta\mu }+ 2e^{-\beta(E_a-\mu )}}{2e^{-\beta\mu }+ e^{-\beta(E_a-\mu )}} = \frac{e^{\beta(\mu-E_a )}+1}{\frac{1}{2}e^{\beta(\mu-E_a )}+1}$$

The mean number of holes in the acceptor level is the difference between the maximum number of electrons the level can hold (two) and the actual mean number of electrons in the level

$$ \braket{n_e}+\braket{n_h} = 2 \qquad \iff \qquad \braket{n_h} = 2 -\braket{n_e}$$

And we obtain in the end, by simplifying:
$$ \braket{n_h}  = \frac{ 1}{\frac{1}{2}e^{\beta(\mu -E_a)}+1}  $$

And one then can evaluate the mean number of acceptors:

$$ n^0_a  = \frac{ N_a}{\frac{1}{2}e^{\beta(\mu-E_a )}+1}  $$

