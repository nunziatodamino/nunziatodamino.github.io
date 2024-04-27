The Gans theory is an extension of the [[Mie theory - Dipolar approximation]], that relaxes the hypothesis for which the nanocluster must be a sphere.

In Gans theory we have an ellipsoidal cluster, classified by the eccentricity:

$$ e  =\sqrt{1-\left(\frac{a_2}{a_1}\right)^2} \qquad a_1>a_2=a_3 $$

So that we have not a general ellipsoid, but a rather one with cylindrical symmetry.

![[Pasted image 20230527112932.png|600]]

First we assume that these particles are dispersed in a medium in a random way, or they are oriented in an isotropic way. This is necessary, because otherwise there would be a preferential orientation for the polarisation vector. 

We obtain the following expression for the $\sigma_{ext}$:

$$ \sigma_{ext}  =\frac{1}{3} \frac{\omega}{c}\varepsilon_m^{3/2}V \sum_{j=1}^3\frac{\frac{\Im(\varepsilon)}{L^2_j}}{\left(\Re(\varepsilon) + \frac{1-L_j}{L_j} \varepsilon_m\right)^2 + \Im(\varepsilon)^2} $$

Which is extremely similar to the expression derived for the spherical case. The only difference is the geometrical correction factors $L_j$.
These factors has the analytical expressions:

$$ L_1 = \frac{1-e^2}{e^2}\left[\frac{1}{2e} \ln \left( \frac{1+e}{1-e}\right)-1\right] \qquad L_2 = L_3 = \frac{1-L_1}{2} $$

Moreover they must satisfy the following constraint:

$$ L_1 +L_2 + L_3 =1 $$

We also make the observation that for $L_1 = 1/3$, we regain the dipolar approximation done with Mie theory, namely we have a sphere.

We now show the difference in $\sigma_{ext}$ by plotting it for various values of the eccentricity for a gold NP:

![[Pasted image 20230527123237.png|600]]

We observe the following: no matter what the eccentricity is, we retain a peak at the Frohlich condition, but of course not we the same intensity.
This is due to the fact that $a_2=a_3$ along all the process, so for a wave impinging from the ''left'' or the ''right'' there is no difference in cross section between the different particles.
(Of course here we consider the particles fixed in order to show our reasoning, in reality the NP's are random distributed, so that we say that considering a wave impinging on a random distributed sample there will be NP's oriented in such a way that the cross section is $\sigma=\pi a_2^2$ )
As the eccentricity increase, so does $a_3$ respect to the other axis.
This implies that for waves impinging from ''top'' or ''bottom'' there will be a larger cross section respect the one on the minor axis.
So first the intensity would be larger, and secondly this intensity will always be redshifted respect to the resonance peak. This because is like to have a contribution from a spherical NP with a bigger radius.