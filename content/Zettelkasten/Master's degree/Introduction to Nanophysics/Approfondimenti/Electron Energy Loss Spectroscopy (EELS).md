This technique is normally operated within transmission electron microscope (TEM) and it is able to obtain very high spatial resolution down to below $1\ \text{nm}$ in size, with a very high energy resolution so that you can obtain very accurate imaging of the resonance in the near field.

The idea is to acquire information by fast electron $(100-300\ \text{keV})$ passing near the nanoparticle surface.
Let's set our reasoning with a picture:

![[Pasted image 20230705170329.png|300]]

In a reference frame with origin in the center of the sphere we can find the trajectory of the electron, considering that it moves of uniform motion:

$$ \bar{r}(t) = \bar{d}+\bar{v}t $$

Then we can find the energy loss of the electron due to the induced electric field from the NP:

$$ \Delta E  =\int_0^{+\infty} P dt = \int_0^{+\infty} e\bar{E}_{ind} \cdot \bar{v}dt = \int_0^{+\infty} \Gamma(\omega) d\omega$$

Where we have defined $\Gamma(\omega)$ as the loss probability:

$$\Gamma(\omega) = \frac{1}{\pi} \int_0^{+\infty}\Re\left(e\bar{E}_{ind} \cdot \bar{v}e^{-i\omega t}\right)dt$$

If we want to recast our integrand as a Fourier transform
So that our energy loss is strictly linked to the electric field of the nanoparticle and the geometry of the nanoparticle. 
Let’s see the effect of this EELS technique on the characterization of the local field around a silver NP:

![[Pasted image 20230705173100.png|500]]

With a scanning transmission electron microscope, we scan along the highlighted line and we take point by point the EELS spectrum , by sending electrons at different energies and measuring the loss intensity, i.e. the number of electrons that suffered the specific energy loss for the settled energy .

At the surface or close to the surface of our NP, and we have this very intense peak here in the EELS spectrum at around 3.3eV (the peak expected at the Frohlich condition) , and as soon as we move more and more within the inside of the NP, we obtain one additional peak at slightly higher energy, that is 3.8eV (Bulk resonance of silver) and when one is exactly in the middle this additional peak will have the maximum of intensity and at the same time the previous peak decreases in intensity, so there is a transfer of energy between this two modes, when the beam is outside or is inside the NP.

Note that this experiment is a clear evidence of the existence of the bulk plasmons and the localized plasmons.
