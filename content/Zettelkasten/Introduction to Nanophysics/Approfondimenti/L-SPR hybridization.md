## Polarization effects on nanoshells

Suppose we want to describe the polarization effects on a nanoshell, i.e. a core-shell system in which the core is a non plasmonic material like silica and the shell is a plasmonic material.
There is a nice way to describe these kind of systems, called L-SPR hybridization, in which we mutuate from atomic physics the idea that the shell system is a ''mixture'' of the states of a polarized sphere and a polarized cavity.

![[Pasted image 20230705113348.png|400]]

Let's construct our model by considering the resonance frequencies of the sphere and the cavity respect to the bulk plasmon frequency.
We begin by considering the sphere. We have, when $\varepsilon_m = 1$, so in the case of air or vacuum that the plasmon resonance frequency is:

$$ \omega_{SPR} = \frac{\omega_P}{\sqrt{1+2\varepsilon_m}} = \frac{\omega_P}{\sqrt{3}} $$

==Note that the image is wrong, because $\omega_{SPR}^{bulk} = \frac{\omega_P}{\sqrt{1+\varepsilon_m}}=\frac{\omega_P}{\sqrt{2}}$ and one should consider the plasma frequency==

For the cavity one can show that:

$$ \omega_c = \sqrt{\frac{2}{3}}\omega_P $$

With these two result we can proceed with hybridization. The result is given without proof.
Defined $a$ as the inner radius and $b$ as the external one, we define for each multipolarity $l$:

$$ \omega^2_{l\pm} = \frac{\omega^2_P}{2}\left[ 1 \pm\frac{1}{2l+1}\sqrt{1+4l(l+1)\left(\frac{a}{b}\right)^{2l+1}} \right] $$

For a consistency check one can show that the term $\omega_{1-}$ tends to $\omega_{sp}$ for $a \to 0$, and also the term $\omega_{1+}$ tends to $\omega_{c}$ for the same limit.

## Polarization effects on dimers

The same mechanism of hybridization can be used to descibe the polarization of a chain of sphere composed by 2 atoms, namely a dimer:

![[Pasted image 20230705122535.png|500]]

Once the hybridization is complete we see that not all possible configuration are achievable by impinging a e.m. wave on the system, namely only the configuration with transverse and parallel polarization with the same phase are possible.
We label these configurations bright plasmon modes. In contrast we label the oscillation modes that cannot be excited by an impinging e.m. wave dark plasmon modes.
These can be excited through a localized charge unbalance, that we can produce for instance by shining an electronic beam with a tiny size in between the two nanoparticles. Also they can’t radiate energy in the far field because they cannot be excited by photons.
