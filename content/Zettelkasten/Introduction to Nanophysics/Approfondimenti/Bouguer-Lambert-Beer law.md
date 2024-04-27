
![[Pasted image 20230518112943.png|300]]

Suppose we perform the following experiment: an EM beam of intensity $I_0$ passes trough a sample in which the are some nanoparticles dispersed in, with a volumetric density $\rho$. Also this system is capable of scattering.
We will observe an attenuated intensity $I$ coming out of the sample which depends on the sample size $z$ and of course from the type of scattering.
The intensity follows the equation:

$$ I(z) = I_0 e^{-\gamma z} $$

Where we call $\gamma$ attenuation coefficent. This is known as Bouger-Lambert-Beer law. (I really don't know why there is not a cohesive labeling when you do physical chemistry)
The attenuation coefficent can be characterised more specifically, by:

$$ \gamma = \rho(\sigma_{incident}+\sigma_{scattered}) = \rho\sigma_{tot} $$

Note that this formula is valid only if our sample is made from particles of the same size.
In the context of spectroscopy is used the concept of absorbance:

$$ A = Log \left( \frac{1}{T} \right) = Log \left( \frac{I(z)}{I_0} \right) = Log(e) \rho z\sigma_{tot} $$

Defined historically using the base 10 logarithm, and using the definition of transmittance $T = \frac{I_0}{I(z)}$.
This law can be used then to analyse plasmonic interaction in XRD experiments.
The only thing is to use the appropriate $\sigma_{ext}$ evaluated in [[Mie theory - Dipolar approximation]] or in [[Mie Theory - Multipolar expansion]].

### Correlation with the dielectric function

Another way to interpret this law is to write the absorption coefficent in terms of the so called extinction coefficent $\tilde\kappa(\omega)$, which is the imaginary part of the refractive index:

$$ \gamma = 2 \frac{\omega}{c} \tilde\kappa(\omega) =  2 \frac{\omega}{c} \Im(n)  $$

It can be proved that:

$$ \Im(n) = \frac{\Im(\varepsilon)}{2 \Re(n)} $$

So that in total :

$$ \gamma =  \frac{\omega}{c} \frac{\Im(\varepsilon)}{\Re(n)} \propto \Im(\varepsilon) $$

From which we derive the important result that absorption is regulated by the imaginary part of the dielectric function.
