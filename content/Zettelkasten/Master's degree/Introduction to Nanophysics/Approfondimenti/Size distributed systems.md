In our treatment of the [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Bouguer-Lambert-Beer law]] we implicitly supposed that our sample is made of particles of the exact same size $R_0$. We call this particular case monodispersed.
Realistically this cannot be true, and our sample would be composed by particles of different size, and this will constitute a particular size distribution $f(R)$, which must satisfy the normalisation condition:

$$ \int_0^{+\infty}f(R)dR = 1 $$

In order to make this correction we must rewrite the attenuation coefficient as:

$$ \gamma(\omega) = n \int_0^{+\infty}f(R) \sigma_{ext}(R,\omega)dR $$

We make the observation that one obtain the monodispersed case if the size distribution is:

$$ f(R)_{monodispersed} = \delta(R-R_0) $$

In general one can hypothesize a Gaussian distribution for the size distribution, but the experiments tells us that the distribution that one must consider is the log-normal:

$$ f(R) = \frac{A}{R}\ \exp\left[-\frac{1}{2}\left(\frac{\ln R-\ln R^*}{\ln \sigma}\right)^2\right]$$

Note that if one use the log-normal as $f(R)$ one observe effectively a difference in the absorbance respect to the monodispersed case, while, if one use a Gauss one, one usually isn't able to spot the difference between this and the monodispersed case, specifically around the resonance peak:

![[Pasted image 20230527184354.png|400]]