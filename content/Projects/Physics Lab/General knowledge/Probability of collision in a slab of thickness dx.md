The concept of [[Scattering cross section]] , as is, is not of practical use due to the fact that generally we do not have a single target, but rather a slab of material with a defined thickness $dx$ in which are contained many scattering centers.

![[Probability of collision in a slab of thickness dx-1.png|400]]

We imagine a slab with surface $A$ perpendicular to the incident particle beam and with thickness $dx$.
Suppose that $dx$ is small enough that the probability that 2 centers sits one in front of the other is low (ideally we should imagine a mono-atomical sheet). 
If we define $N$ as density of centers (number of centers per unit volume) we can say that the number of centers per unit of perpendicular area will be $N dx$.
We now can distinguish 2 cases:

- **Beam is larger than the target area $A$**

The number of particle per unit time eligible for the interaction will be $FA$, as $F$ is defined as the flux of the incoming particles (number of particles per unit are per unit time)  
We can then imply that the average number of particles scattered into $d\Omega$ per unit time:

$$ \frac{dN_s}{d\Omega} = \underbrace{FA}_{\text{(number of incident particles per unit time)}}\underbrace{Ndx}_{\text{(number of scattering centers per unit area)}} \underbrace{\frac{d\sigma}{d\Omega}}_{\text{(interaction probability for each center)}}   $$

Note that this expression is valid only when the detector is far enough, so that we can consider that each center has the same differential cross section.

If one then want to find the total number of scattered particles per unit time, one must integrate both sides respect to the solid angle:

$$ N_s = FANdx \sigma $$

Now if I want to find the interaction probability I must divide both sides bu the number of incident particle per unit time $n_{inc}$. But in our case $n_{inc}=FA$. So one find:

$$ \mathbb{P}(dx) = N\sigma dx $$

- **Beam is smaller than the target area $A$**

Say that the beam covers only an area $A'<A$ of our target. Then the idea is the same, we just replace $A$ with $A'$ in our calculation.
Notice that we arrive at the same expression for the interaction probability.
