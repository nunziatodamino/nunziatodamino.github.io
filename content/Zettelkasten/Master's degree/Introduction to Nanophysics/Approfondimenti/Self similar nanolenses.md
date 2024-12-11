![[Images/Pasted image 20230627172352.png|500]]

We can use a 1-dimensional self similar chain of metal spheres in order to create a system that greatly amplifies the impinging e.m. wave intensity (self similar nanolenses).
This mechanism is already present in the near field of the [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Mie theory - Dipolar approximation|dipolar approximation]], where near the surface, at the Frohlich resonance condition, we expect a field amplification:

$$ E_{in} =f \bar{E}_0  = \frac{3 \varepsilon_m}{\Im (\varepsilon(\omega))} \bar{E}_0 $$

Where the amplification factor is evaluated at the Frohlich condition. Typical materials exhibit an amplification factor at the Frohlich condition of $\sim 10$.
In order to reach an higher order of amplification we can use the scattered field to hit another metal sphere, in order to reiterate the same process.
Is important, even if the amplification factor does not depend on the radius of the first sphere, that the second sphere is smaller.
This because the scattered field is dependent on the radius, and in order to create a convergence in a point (in the picture e.m. hot spot) one must have that not only the radius is smaller, but that also the distance between the sphere surfaces is set in a specific way, namely:

$$ d_{1+1,i+2} = s d_{i, i+1} \qquad R_{i+1} = s R_{i} \qquad \text{while}\ s<<1$$

The condition $s<<1$ is necessary to remain in the near field of the first sphere.
This leads to an amplification of the impinging e.m. wave of a factor $\sim f^n$, with n numbers of sphere in the chain, rendering this system a perfect candidate for a nanoantenna.
Note that this system is extremely sensible to a wavelength variation in the impinging wave, i.e. the Frohlich condition must be satified in order to obtain the maximum amplification, as seen in the following simulation for silver:

![[Images/Pasted image 20230627174804.png|200]]

Moreover, if we not are in the dipolar approximation, i.e. $\lambda >> R$ , we still expect amplification, but in a not so predictable way, and generally lower respect to the dipolar case, due to an ill defined e.m. hot spot and interference phenomena.

In order to achieve better amplification, one can devise systems in which we couple more self similar nanolenses together, such as:

![[Images/Pasted image 20230627175700.png]]