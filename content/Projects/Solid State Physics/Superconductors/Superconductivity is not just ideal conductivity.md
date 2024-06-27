Given that a superconductor, when a temperature $T <T_c$ is reached, has resistivity 0, we may tempted to say that in this state is like an ideal conductor.

We now show in the following that this is wrong, based on phenomenological fact, mainly due to the [[Projects/Solid State Physics/Superconductors/Meissner-Ochsenfeld effect]].

**Moreover we make the observation that, if the superconductor state would be just an ''ideal conductor'' state, it would not be a thermodynamic state**.

![[Immagini/Superconductivity is not just ideal conductivity.png|500]]

**We show in the following that a superconductor cannot be described by the Maxwell's equation with the additional constraint that when $T<T_c$ the resistance tends to 0.**

First we set the scene realizing that the following equality holds true for any closed path $\partial \Sigma$ inside the material:

$$ RI=V=-\oint_{\partial\Sigma} \bar{E} \cdot d \bar{l} = -\oint_{\Sigma} \nabla\times\bar{E} \cdot d \bar{\Sigma} = \oint_{\Sigma} \frac{\partial \bar {B}}{\partial t} \cdot d \bar{\Sigma} =\frac{\partial }{\partial t} \Phi_{\Sigma}(\bar{B})   $$

We used here the Ohm's law, the Stokes theorem and the Faraday-Neumann-Lens law.
Then we consider 2 scenarios: 

- First we consider the superconductor at room temperature without an external magnetic field ($\bar{B}_{ext}(t_0=0) =0$) . Now we cool the system until the critical temperature is reached and the resistance goes to 0. Now we switch on the external magnetic field. Due to the equality above $\partial_t \Phi_{\Sigma}(\bar{B}) =0 \iff ||\bar{B}_{int}||=k$ , supposing that the material undergoes no deformation (is a rigid body in approximation). Now we have that in this case $k=0$ due to the initial condition on the problem $||\bar{B}(t_0=0)||=0$, so that the inside of the material is field free. Again the external magnetic field is switched off and no field remains inside the material.

- Secondly we consider the superconductor at room temperature with an external magnetic field ($\bar{B}_{ext}(t_0=0) \neq0$) . Now we cool the system until the critical temperature is reached and the resistance goes to 0. Due to the equality above $\partial_t \Phi_{\Sigma}(\bar{B}) =0 \iff ||\bar{B}_{int}||=k$ , supposing that the material undergoes no deformation (is a rigid body in approximation). Now we have that in this case $k\neq 0$ due to the initial condition on the problem $||\bar{B}(t_0=0)||\neq 0$, so that the inside of the material has a field . Then the external magnetic field is switched off and the field continue to remain inside the material. This happens because the induced current have no way to dissipate given that the resistance is 0.

**We have then in the framework of the Maxwell's equation that 2 path lead to different conclusions.**
**Experiments show that this is not the case.** 
**In both path we obtain the expulsion of the magnetic field lines from the material, the so called [[Projects/Solid State Physics/Superconductors/Meissner-Ochsenfeld effect]].**
**This concludes that the Maxwell's equation are not the adequate framework to describe superconductivity.**
