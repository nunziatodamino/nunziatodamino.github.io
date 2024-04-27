
==The basis of this approximation is the fact that the mass of electrons is much smaller than that of the nuclei (for a single nucleon, the ratio of nucleon mass to electron mass is 2000). This means that the timescales of electronic motion are much smaller than those of the nuclei, so we can think of the nuclei as being "fixed" compared to electronic motion.==

We now briefly estimate these timescales in a solid subjected to an external perturbation. 
If the perturbation is small, one can see it as an harmonic perturbation, in first approximation.
This generates an oscillation within the lattice structure with typical speed of that of sound (acoustic phonon). The atoms will then vibrate at a frequency commensurate to this, while the electrons will emit in the ultraviolet (typical frequency of excitation from the ground state to an excited state).
Therefore:

$$T_N=\frac{2 \pi}{\omega} \sim \frac{2 \pi a}{v_{sound}} \sim 10^{-12}\ \mbox{s} $$

$$T_e=\frac{2 \pi}{\omega} \sim \frac{2 \pi}{\omega_{UV}} \sim 10^{-16}\ \mbox{s} $$

So that $T_e = 10^{-4}T_N$ .

This fact then justifies the following approximation: if we separate the wave function into a nuclear part and an electronic part in the following way:

$$\Psi(\bar{R},\bar{r}) = \Phi_N(\bar{R})\Phi_e(\bar{R}, \bar{r})$$

(Note that the nuclear part does not depend on the electronic coordinates, as they have too small a mass to drag them, while the opposite is not true).
It holds the fundamental:

>[!info] **The adiabatic approximation core**
>
$$\braket{\bar{R},\bar{r}|\hat{p}_I|\Phi_e} =0 \iff \nabla_{\bar{R}_I} \Phi_e(\bar{R},\bar{r}) = 0$$
>
In other words, the average value of the nuclear momentum evaluated from the electron's point of view is 0 (an electron sees the nucleus as stationary).

Starting from this, it is simple to make the following consideration, if we take:

$$\nabla^2_{\bar{R}_I} \Psi(\bar{R},\bar{r})=\nabla^2_{\bar{R}_I}(\Phi_N\Phi_e)= \nabla_{\bar{R}_I}\cdot\nabla_{\bar{R}_I}(\Phi_N\Phi_e) =\nabla_{\bar{R}_I}\cdot(\Phi_e\nabla_{\bar{R}_I}\Phi_N + \Phi_N\nabla_{\bar{R}_I}\Phi_e) =   $$

$$ = \nabla_{\bar{R}_I}\cdot(\Phi_e\nabla_{\bar{R}_I}\Phi_N) =\nabla_{\bar{R}_I}\Phi_e\nabla_{\bar{R}_I}\Phi_N +\Phi_e\nabla^2_{\bar{R}_I}\Phi_N = \Phi_e\nabla^2_{\bar{R}_I}\Phi_N  $$

This leads to the more meaningful: 

$$\hat{T}_N\Psi = \Phi_e\hat{T}_N\Phi_N$$
