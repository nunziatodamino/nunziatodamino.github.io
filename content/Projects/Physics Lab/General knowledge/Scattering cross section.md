Suppose we want to describe the collision or interaction (note that in the context of Nuclear Physics the term are synonyms) of 2 particles, one of type 1 and the other of type 2.

This interaction is generally described in terms of cross section, that in layman terms gives a measure of the probability that said interaction can occur.

==Note that this concept can only be defined when the target is a single particle==
We now define this concept formally:

![[Cross section.png|400]]

>[!info] **Differential cross section** 
> [Leo] Consider a beam of particles 1 incident upon a target particle 2, as shown in the picture.
> Assume that the beam is much broader than the target and also that the particles in the beam are uniformly distributed in space and time.
> In this way we can speak of a flux $F$ of incident particles (number of incident particles per unit area per unit time). 
> We then look at the scattered (by scattered we mean a particle observed in the solid angle due to any possible reaction, i.e. we can also observe a particle that is neither of type 1 nor 2) particle into the solid angle $d\Omega$ per unit time.
> Because of the randomness of the impact parameters, the number observed will fluctuate.
> But If I take many measure and average them, after an hypothetical infinite time, the number will tend to $\frac{dN_s}{d\Omega}$ where $N_s$ is the average number of particles scattered per unit time.
> One can then define as the differential cross section:
>
$$ \frac{d\sigma}{d\Omega} (E,\Omega)= \frac{1}{F} \frac{dN_s}{d\Omega} = \frac{\text{Number of scattered particles in the solid angle per unit time}}{\text{Number of incident particles per unit area per unit time}} $$
> 
> In general this is function of the energy and the scattering angle

We observe that, from a measure unit standpoint:

$$ \left[\frac{d\sigma}{d\Omega}\right] = \frac{L^2}{sr}  $$

Usually expressed in barns/steradiants.
If then one wants to evaluate the total cross section, one can integrate over the solid angle:

>[!info] **Total cross section**
>Can be defined from the differential cross section as:
>
>$$ \sigma(E) = \int_{\Omega} \frac{d\sigma}{d\Omega} (E,\Omega) d \Omega $$







