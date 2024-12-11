We see now experimental result for $Ag$ for [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/The dielectric function for the free electron model]].
Here we have the theoretical dielectric function predicted by the Drude model:

$$  \varepsilon_r \equiv \varepsilon(\omega)= 1-\frac{\omega_P^2}{\omega^2+i\gamma\omega} $$

Splitted in the real and imaginary part.

![[Images/Pasted image 20230520120852.png]]

We observe a good agreement for energies $<3\ eV$ in both spectra (energy  typical of the visible range) whereas in the region $> 3 \ eV$ the agreement is poor (energy typical of the near UV range).
The problem stands in the fact that the Drude model does not consider the contribution to the polarization of the electrons (the bounded electrons, which are typical of metals) and just focus on the free electrons, which are coming from the outer most shell in the atomic configuration.
When the energy is sufficiently enough, we have sufficient energy to promote electron from the d band towards the s or p band in our material. So the absorption is increased at that level (inter-band threshold). The inter-band kind of absorption is different from the intra-band kind of absorption which is the one within the conduction band in our material (which is exactly what the Drude model is able to describe).

One way to correct this phenomenon, while not resorting to a different theory, is to introduce a semi-empirical parameter in the dielectric function, that account for the polarisability of the interband electrons:

$$   \varepsilon(\omega)= \varepsilon_{\infty}-\frac{\omega_P^2}{\omega^2+i\gamma\omega} \qquad 1\leq \varepsilon_{\infty} \leq 10 $$

Where we obtain the $\varepsilon_{\infty}$ term in the limit $\omega \to \infty$ of the experimental dielectric function.
Note that this analysis can be done only on the real part, because the imaginary is strictly correlated to the absorption of the material, as seen in the [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Bouguer-Lambert-Beer law]], and its deviation from Drude theory cannot be explained by a simple phenomenological correction. 