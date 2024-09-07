When an e.m. wave impinges on a nanoparticle, we have an extremely intense electric field magnification around the particle surface. These phenomenon is called localized surface plasmon resonance.
We can, for a single nanoparticle, or for an ensemble of nanoparticles of the same radius (monodispersed case) distinguish between 2 treatment, dependent on the incident electric field wavelength.
Note that the pivotal part of each treatment is the extinction cross section expression, because this quantity can be accessed experimentally by spectroscopy measurement using the [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Bouguer-Lambert-Beer law]]. 

## Dipolar approximation $(R<<\lambda)$

In this regime (see [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Mie theory - Dipolar approximation|here]] for a detailed derivation) we have a rigid shift of the electronic cloud around the nanoparticle, leading to a simpler calculation. 
We obtain, for the electric field the following result:

$$ \bar{E}  = 
\begin{cases} \bar{E}_{in} =  \frac{3\varepsilon_m }{\varepsilon(\omega) + 2 \varepsilon_m} \bar{E}_0(t) \equiv f_e \bar{E}_0(t) \quad \mbox{if}\ r<R \\
\bar{E}_{out} =\bar{E}_0(t) + \frac{1}{4\pi\varepsilon_0\varepsilon_m}  \left( \frac{3(\bar{p} \cdot \hat{r})\hat{r} -\bar{p}}{r^3}  \right) \quad \mbox{if}\ r>R
\end{cases} $$

Furthermore we can distinguish 2 cases depending on whether we consider the field inside the particle (near field), or the field outside the particle (far field).

### Near field properties
We can see in the near field that the electric field is maximum when:

$$  \Re(\varepsilon(\omega)) + 2\varepsilon_m =0  $$

Which is called Frohlich resonance condition. This equation has as solution a frequency (or a wavelength), for which we expect the maximum resonance effect, i.e. if the impinging e.m. wave is at $\lambda_{SPR}$ the field amplification is maximum. 

### Far field properties

Suppose we do some energy consideration by studying the average Poynting vector of $\bar{E}_{out}$, by dividing in a contribution due to the incident part, and one due to the scattered part (the dipolar contribution in this case).
We obtain, by dividing for the respective intensity the following cross section:

$$ \frac{W_s}{I_{inc}} + \frac{W_{in}}{I_{inc}} = \frac{W_{ext}}{I_{inc}} \qquad \iff \qquad \sigma_s+ \sigma_{in}= \sigma_{ext}$$

We can obtain an analytical expression for $\sigma_{ext}$:

$$ \sigma_{ext} =\sigma_s+ \sigma_{in} =9 \frac{\omega}{c}\varepsilon_m^{3/2}V \frac{\Im(\varepsilon)}{(\Re(\varepsilon) + 2 \varepsilon_m)^2 + \Im(\varepsilon)^2} $$

## Mie Theory (any $\lambda$)

The treatment in the general case is extremely cumbersome, and is base on solving the Helmoltz equation for the specific spherical geometry, and also in spherical coordinates.
One obtain an expression for the electric field based on the notion of the vectorial spherical harmonics (as shown [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Mie Theory - Multipolar expansion|here]]).
The most important part is the far-field analysis in whic one can derive the extinction cross section for the general case:

$$ \sigma_{ext} = \frac{2\pi}{k^2} \sum_{l=1}^{+\infty} (2l+1) \Re(a_l+b_l) $$

Where $a_l$ and $b_l$ are coefficients in electric field expansion.
