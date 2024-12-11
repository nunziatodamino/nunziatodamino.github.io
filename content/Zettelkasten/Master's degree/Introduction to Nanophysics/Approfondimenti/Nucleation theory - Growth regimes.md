Suppose we are in the condition in which the nucleation has occurred, and its stable, i.e. the nucleus passed in size the critical radius. 
So, if no other thermodynamic variable changes, the process is spontaneous $(\Delta G <0)$ and in order to minimize further the Gibbs free energy variation, the system begins to grow. 

## Growth regimes classification

We have 2 possible regimes of growth in our system:

### Diffusion limited aggregation (DLA)

 ![[Images/Pasted image 20230323100953.png|300]]
 
In this growth regime we have that the external pressure is much higher than the the pressure on the nucleated cluster that have randomically formed in the material. 
For each cluster we have a supersaturation $P^* > 1$, hence $\Delta G <0$, and all clusters growth indipendently.
If a pressure is continuosly applied to our system, the clusters will growth until all the system changes phase:
 
<iframe width="300" height="315" src="https://www.youtube.com/embed/54g-ac6VV1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Ostwald ripening 

![[Images/Pasted image 20230323103612.png|300]]

If the external pressure is just higher than the equilibrium pressure, due to the stochastic formation of cluster,  there will clusters for which $P$ is higher than their $P(R)$ (the big ones) and viceversa (the little ones).
This can happen also because there was before a DLA growth regime
This implies that cluster 2 is in supersaturation, while cluster 1 no. So the variation of the free energy is positive for the cluster 1 and cannot be minimized.
In this regime the big clusters will growth at the expense of the little clusters, so that we call this kind of regime competitive growth.
This regime takes the name of Ostwald ripening. We see now a simulation where the Ostwald ripening happens with phenomena of cohalescence, namely more clusters forms a bigger one.

<iframe width="300" height="315" src="https://www.youtube.com/embed/REcr2l7miVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Note that this 2 growing regimes are not mutually exclusive, but usually DLA is followed by the Ostwald ripening growth regime.

![[Images/Pasted image 20230510163024.png|500]]

One can show it easily, because, when the cluster begins to grow the supersaturation rate for each cluster decreases.


## Growth regimes kinetics


Is now in our interest to study the kinetics of the different growth regimes in nucleation processes, namely how the radius of the cluster varies in times.

### DLA regime

![[Images/Pasted image 20230323202851.png|350]]

We begin by considering that the concentration is expressed in units of a number density.
One comment also on the notation: the concentration of the atoms in the precipitated phase (solid in this case) is the value $C_P$, . the initial concentration of the atoms putted in our matrix is $C_S$ , which is an homogeneous value all around the particles.

In a DLA growth regime we have clusters in the material that grow independently from each other, so that the particles that are not in clusters are uniformly dispersed in the material, available to the independent cluster growth. This implies that the number density is higher inside the cluster and lower right outside the surface respect the overall value $C_S$, because particles near the surface tends to enter in the cluster, rather than staying close to the surface, due to an energy stabilization.
We will call this last concentration $C_e$, which is the concentration in the matrix with which the solid solution is in equilibrium with.

In order to evaluate the kinetics one must evaluate the net flux of particles that cross the cluster surface:

$$ \Phi_{\Sigma}(\bar{J}) = \frac{dN}{dt}_{out} -\frac{dN}{dt}_{in} $$

We begin by evaluating the RHS, by considering a general reasoning to evaluate the number of particles variation over time.
In general we have, given that the concentration is a number density $C=N/V$:

$$ \frac{dN}{dt} = \frac{d}{dt}\left(N\frac{V}{V}\right) = \frac{d(CV)}{dt} = C\frac{dV}{dt} $$

Supposing, like in our case, that the concentration is constant.
Then is easy to evaluate:

$$ \frac{dN}{dt}_{out} = C_e\frac{dV}{dt} = C_e \frac{d}{dt}\left( \frac{4}{3} \pi R^3 \right) = 4\pi C_e R^2 \dot{R} \qquad \qquad \frac{dN}{dt}_{in} =  4\pi C_P R^2 \dot{R} $$

Now we evaluate the the flux using the formal definition. We start by recalling the Fick's law:

$$ \bar{J} = -D\nabla C $$

Supposing now an isotropic diffusion we can use polar coordinates and write:

$$ \bar{J} = -D \frac{\partial C}{\partial r} \hat{r} $$

So that one have:

$$ \Phi_{\Sigma}(\bar{J}) = \oint_{\Sigma} \bar{J} \cdot d\bar{\Sigma}  = \oint_{\Sigma}  -D \frac{\partial C}{\partial r} \hat{r} \cdot d\bar{\Sigma} =  -D \frac{\partial C}{\partial r}_{r=R(t)} \oint_{\Sigma} d\Sigma = -4\pi D R^2 \frac{\partial C}{\partial r}_{r=R(t)} $$

Putting all together one obtains:

$$  \Phi_{\Sigma}(\bar{J}) = \frac{dN}{dt}_{out} -\frac{dN}{dt}_{in} \qquad \iff \qquad -4\pi D R^2 \frac{\partial C}{\partial r}_{r=R(t)} = 4\pi C_e R^2 \dot{R} -4\pi C_P R^2 \dot{R} $$

$$ (C_P-C_e)\dot{R} = D\frac{\partial C}{\partial r}_{r=R(t)} $$

The problem with this equation is that we don't know a priori the functional form of $C(R)$, so in order to evaluate our equation one must perform an estimate of the derivative.
According to the initial graph we have:

$$\frac{\partial C}{\partial r}_{r=R(t)} \simeq \frac{\Delta C}{\Delta r}$$

Due to properties of the derivative, we have that $A_1=A_2$ (even if this is not true in the picture). 
The idea is that we estimate the derivative with the difference quotient , specifically the forward difference and the backward difference must be equal in modulus. Even thought this reasoning is valid only for a differentiable function, an the one in our image is not, we may suppose smooth descent instead of a steep one in order to perform our calculation. 
We will have then, in reference to our picture:

$$\frac{\partial C}{\partial r}_{r=R(t)} \simeq \frac{\Delta C}{\Delta r} \frac{\Delta C}{\Delta C} \frac{2}{2} \frac{\Delta C_1}{\Delta C_1}\frac{R(t)}{R(t)} = \frac{A_1}{A_2} \frac{(\Delta C)^2}{2\Delta C_1R(t)} = \frac{(\Delta C)^2}{2\Delta C_1R(t)}$$

By returninto our original equation we have:

$$ (C_P-C_e)\dot{R} \simeq D\frac{(\Delta C)^2}{2\Delta C_1R(t)} $$

Which as separable variables ODE. In order to resolve it swiftly, we recast it using $K_1 = (C_P-C_e)$ , $K_2 =  D\frac{(\Delta C)^2}{2\Delta C_1}$ :

$$ K_1 \dot{R} = \frac {K_2}{R} \qquad \Rightarrow \qquad RdR = \frac{K_2}{K_1}dt \qquad \Rightarrow \qquad \left[\frac{R^2}{2}\right]_{R_0}^{R(t)} = \frac{K_2}{K_1} t $$

$$ \frac{R^2(t)}{2} - \frac{R^2_0}{2} = \frac{K_2}{K_1} t \qquad \Rightarrow \qquad R^2(t) = R^2_0 + 2\frac{K_2}{K_1} t  $$

Which lead to our final expression:

$$ R^2(t) = R^2_0 + D\frac{(C_S-C_e)^2}{(C_P-C_S)(C_P-C_e)} t $$

This can be simplified by considering the approximation:

$$\frac{(C_S-C_e)^2}{(C_P-C_S)(C_P-C_e)} \simeq \frac{C^2_S}{C^2_P}$$

### Ostwald ripening regime

![[Images/Pasted image 20230323200835.png|350]]

This analysis competes the growing cluster in an Ostwald ripening growth regime. 
We have the same conventions : the concentration of the atoms in the precipitated phase (solid in this case) is the value $C_P$, but this time we cannot define $C_S$, because the number of clusters is changing over time. We instead define $C_e(R)$ and $C_e(R_{\infty})$, which are respectively the concentration in the matrix with which the solid solution of radius $R$  is in equilibrium with, and the concentration in the matrix with which the bulk solid solution is in equilibrium with, i.e. when the particle is the largest.

We have simply a situation in which the cluster grows and its concentration declines. The discontinuity at the surface is due only to a boundary condition, the particles inside the cluster needs a ''force'' to break the superficial tension, once this is broken the expansion is sudden.

As stated before then, in this regime the cluster is only growing, so that $\frac{dN}{dt}_{out} = 0$.
Moreover is easy to evaluate: $\frac{dN}{dt}_{in} = 4\pi C_P R^2\dot{R}$, so that one has in total:

$$  \Phi_{\Sigma}(\bar{J}) = \frac{dN}{dt}_{out} -\frac{dN}{dt}_{in} = - 4\pi C_P R^2\dot{R}$$

Now we consider the total flux evaluated using the formal definition, with particular emphasis on the fact that the $\bar{J}$ vector in the Fick's law points towards the center of the cluster this time, as in the picture below:

![[Images/Pasted image 20230324161749.png|150]]

So one has, using the same ansatz as the DLA regime:

$$ \Phi_{\Sigma}(\bar{J}) = \oint_{\Sigma} \bar{J} \cdot d\bar{\Sigma}  =  D \frac{\partial C}{\partial r}_{r=R(t)} \oint_{\Sigma} d\Sigma = 4\pi D R^2 \frac{\partial C}{\partial r}_{r=R(t)} $$

Putting together the results one has upon semplification:

$$-C_P\dot{R} = D\frac{\partial C}{\partial r}_{r=R(t)}$$

Now the next step is to estimate the derivative. We begin by considering the [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Gibbs-Thomson equation]] expressed using concentrations:

$$ C_e(R) = C_e(R_{\infty})  \exp \left( \frac{2 \gamma_{VL}}{ k_B T\rho R} \right) $$

We can expand this in the hypothesis of $\frac{2 \gamma_{VL}}{ k_B T\rho R}<<1$, so that one has:

$$ C_e(R) = C_e(R_{\infty}) \left[1 +  \frac{2 \gamma_{VL}}{ k_B T\rho R} +o\left( \frac{2 \gamma_{VL}}{ k_B T\rho R} \right)^2 \right] \simeq C_e(R_{\infty}) \left[1 +  \frac{2 \gamma_{VL}}{ k_B T\rho R}\right] \equiv  C_e(R_{\infty}) \left[1 +  \frac{\alpha}{ R}\right]$$

Our estimate will be:

$$\frac{\partial C}{\partial r}_{r=R(t)} \simeq \frac{d C_e(R)}{dR}_{R=R(t)} = -\alpha  C_e(R_{\infty}) \frac{1}{R^2(t)}$$

Putting all together one obtains the separable variables ODE:

$$\dot{R(t)} = \frac{\alpha DC_e(R_{\infty})}{C_P} \frac{1}{R^2(t)}$$

If one than put $K=\frac{\alpha DC_e(R_{\infty})}{C_P}$ one can solve it easily:

$$ R^2dR = Kdt \qquad \Rightarrow \qquad \frac{R^3}{3} - \frac{R_0^3}{3} = Kt \qquad \Rightarrow \qquad R^3 = R^3_0 + 3Kt $$

Hence one can write the Ostwald ripening kinetics:

$$R^3 = R^3_0 + 3\left(\frac{2 \gamma_{VL}}{ k_B T\rho }\frac{ DC_e(R_{\infty})}{C_P}\right)t$$

