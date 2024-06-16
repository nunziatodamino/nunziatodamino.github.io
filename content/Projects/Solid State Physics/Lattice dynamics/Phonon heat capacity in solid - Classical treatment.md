Considering the general expression for the the heat capacity at [[Projects/Solid State Physics/Thermal transport/Heat capacity in solids - general considerations|constant volume]], let's try the evaluation for a monoatomic crystal in 3 dimensions.
We start by specifying the system Hamiltonian:

$$H = \sum_{\bar{R}}\frac{P_{\bar{R}}^2}{2M} + \frac{1}{2} \sum_{\bar{R},\bar{R}'}\sum_\alpha\sum_ {\beta}u_{\alpha}(\bar{R})D_{\alpha \beta}(\bar{R}-\bar{R}')u_{\beta}(\bar{R}') \qquad \forall \bar{R},\bar{R}' \in B.L.$$

We have a phase space of dimension $6N = 3N+3N$ sum of the spatial coordinates and the momentum coordinates, where $N$ is the number of atoms.

The internal energy is obtained using a statistical argument.
We treat the system as a [[The canonical ensemble|canonical ensemble]], in order to have a well defined value for the temperature $T$. So that i can obtain the internal energy as the energy average on this ensemble: 

$$U = \braket{H}_{NVT} =  \frac{\int He^{-\beta H} d\Gamma}{\int e^{-\beta H} d\Gamma} = - \frac{\partial}{\partial \beta} \ln \left(  \int e^{-\beta H} d\Gamma\right)$$

Where $\beta = 1/k_bT$, and $d\Gamma$ is an infinitesimal volume in the phase space:

$$ d\Gamma = \prod_{\bar{R}}d\bar{u}(\bar{R})d\bar{P}_{\bar{R}} $$

In order to solve our problem we introduce a new set of coordinates in the phase space, defined as:

$$\begin{cases}
u_{\alpha}(\bar{R}) = \frac{1}{\sqrt{\beta}}\tilde{u}_{\alpha}(\bar{R}) \\
P_{\alpha}(\bar{R}) = \frac{1}{\sqrt{\beta}}\tilde{P}_{\alpha}(\bar{R})
\end{cases} \iff 
\begin{cases}
\tilde{u}_{\alpha}(\bar{R}) = \sqrt{\beta}\ u_{\alpha}(\bar{R}) \\
\tilde{P}_{\alpha}(\bar{R}) = \sqrt{\beta}\ P_{\alpha}(\bar{R}) \\
\end{cases}$$

This implies a change in the phase space volume:

$$\begin{aligned}d\Gamma &= \prod_{\bar{R}}du_x(\bar{R})du_y(\bar{R})du_z(\bar{R})dP_x(\bar{R})dP_y(\bar{R})dP_z(\bar{R}) \\ &= 
\prod_{\bar{R}}\beta^{-3/2}d\tilde{u}_x(\bar{R})d\tilde{u}_y(\bar{R})d\tilde{u}_z(\bar{R})\beta^{-3/2}d\tilde{P}_x(\bar{R})d\tilde{P}_y(\bar{R})d\tilde{P}_z(\bar{R}) =\beta^{-3N}d\tilde{\Gamma}\end{aligned}$$

and also in the Hamiltonian:

$$\tilde{H}=\beta H(\tilde{\bar{u}},\tilde{\bar{P}} ) = \sum_{\bar{R}}\frac{\tilde{P}_{\bar{R}}^2}{2M} + \frac{1}{2} \sum_{\bar{R},\bar{R}'}\sum_\alpha\sum_ {\beta}\tilde{u}_{\alpha}(\bar{R})D_{\alpha \beta}(\bar{R}-\bar{R}')\tilde{u}_{\beta}(\bar{R}') \qquad \forall \bar{R},\bar{R}' \in B.L. $$

If one then rewrites the partition function:

$$\mathcal{Z} =  \int e^{-\beta H} d\Gamma  = \int e^{-\tilde{H}} \beta^{-3N}d\tilde{\Gamma} = \beta^{-3N} \int e^{-\tilde{H}}d\tilde{\Gamma}   = C \beta^{-3N}$$

Where $C$ is the value of the integral. We note that this does not depend on $\beta$.
So one can evaluate the internal energy quite easily.

$$U = - \frac{\partial}{\partial \beta} \ln \left(  \int e^{-\beta H} d\Gamma\right) =- \frac{\partial}{\partial \beta} \ln \left(  \beta^{-3N}\right) = -\frac{1}{\beta^{-3N}}(-3N)\beta^{-3N-1} = \frac{3N}{\beta} = 3Nk_bT $$

So that one can easily derive the so called Dulong-Petit law:

$$C_V = \left(\frac{dU}{dT}\right)_V = 3Nk_b$$

It is useful, for the application, to divide by the volume, to obtain the specific heat :

$$\frac{C_V}{V} = c_V = 3nk_b$$

Where $n$ is the atom density.
This behavior is reproduced experimentally only at high temperature (in a sense that will become clear in the following treatment), as shown in the graph below:

![[Pasted image 20230216174301.png|400]]

To obtain the $\sim T^3$ behavior, one must resort to a quantum mechanical theory.