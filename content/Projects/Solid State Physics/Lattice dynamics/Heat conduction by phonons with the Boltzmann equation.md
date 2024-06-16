As discussed in [[Projects/Solid State Physics/Thermal transport/Thermal conductivity in solids]], heat conduction has two main contribution: electronic and phononic.
Here we will discuss the phononic contribution.
We begin by writing the heat flux $\bar{Q}$ in terms of the phonon energy. We observe that the quantity $\frac{N}{V} \hbar \omega v$ has the the dimension of an heat flux due to a phonon of energy $\hbar \omega$ and group velocity $v$.
So we can write for each component of the heat flux:

$$ Q_\alpha = \sum_s\sum_{\bar{k}} \frac{\braket{n_{\bar{k},s}}}{V} \hbar\omega_s(\bar{k})v_{s\alpha}(\bar{k}) \qquad \alpha=x,y,z $$

The first important observation to make is that $\braket{n_{\bar{k},s}}$ is **not** the Planck distribution. 
The explanation is simple: we derived the Planck distribution in a canonical ensemble ( i.e. with fixed temperature) while here we have different temperature in different points of the system. 
In fact we expect that in a canonical ensemble there is no heat flux. So that, if we call $\braket{n_{\bar{k},s}}_0$ the Planck distribution, or better the distribution at equilibrium, we find:

$$ Q^0_\alpha = \sum_s\sum_{\bar{k}} \frac{\braket{n_{\bar{k},s}}_0}{V} \hbar\omega_s(\bar{k})v_{s\alpha}(\bar{k}) =0 \qquad \forall \alpha $$

This because $\omega_s(\bar{k})=\omega_s(-\bar{k})$. For this we have $\braket{n_{\bar{k},s}}_0=\braket{n_{-\bar{k},s}}_0$ and for definition of group velocity, because derivatives inverts parity, $v_{s\alpha}(\bar{k})=-v_{s\alpha}(-\bar{k})$ . In the end we are summing an odd function of a symmetric domain in $\bar{k}$ variable the sum is 0, as expected.

**This reasoning leads to the conclusion that a heat current arises if the mean number of phonons deviates from the equilibrium distribution.**

One can study quantitatively the change by using the [[Zettelkasten/Basic Physics/Boltzmann transport equation]]. Considering the case in which there are no external forces applied:

$$ \frac{\partial \braket{n}}{\partial t} + \bar{v} \cdot \bar{\nabla}\braket{n} =  \left(\frac{d\braket{n}}{dt}\right)_{\text{collision}}  $$

Where we are using for the collision term the relaxation time ansatz:

$$\left(\frac{d\braket{n}}{dt}\right)_{\text{collision}} \simeq - \frac{\braket{n}-\braket{n}_0}{\tau}$$

Note that using this ansatz implies that the difference between the values of the 2 distribution must be small, so that we can write:

$$\braket{n} \simeq \braket{n}_0+\braket{n}_1$$

Where $\braket{n}_1$ is a small correction.
Moreover we are considering the equation in a reference frame for which $\bar{v}=(v_x,0,0)$, so that we obtain:

$$ \frac{\partial \braket{n}}{\partial t} + v_x\frac{\partial \braket{n}}{\partial x}  = - \frac{\braket{n}-\braket{n}_0}{\tau}  $$

We now restrict ourselves to the steady state hypothesis, i.e. the distribution changes in space but not in time:

$$ v_x\frac{\partial \braket{n}}{\partial x}  = - \frac{\braket{n}_1}{\tau}  $$

Where we used also the relation $\braket{n} \simeq \braket{n}_0+\braket{n}_1$. In order to treat the derivative on the LHS we introduce a change of variables with the chain rule.

$$ v_x\frac{\partial \braket{n}}{\partial T}\frac{\partial T}{\partial x}  = - \frac{\braket{n}_1}{\tau}  $$

A further approximation is to take this derivative at the first order contribution:

$$ \frac{\partial \braket{n}}{\partial T} = \frac{\partial \braket{n}_0}{\partial T}+\frac{\partial \braket{n}_1}{\partial T} \simeq \frac{\partial \braket{n}_0}{\partial T} $$

Giving that $\braket{n}_1$ is a small correction. With this we obtain in the end:

$$ v_x\frac{\partial \braket{n}_0}{\partial T}\frac{\partial T}{\partial x}  = - \frac{\braket{n}_1}{\tau} \qquad \iff \qquad \braket{n}_1 = -\tau v_x\frac{\partial \braket{n}_0}{\partial T}\frac{\partial T}{\partial x}  $$

With this in mind we can finally evaluate the heat flux, because:

$$Q_\alpha = \sum_s\sum_{\bar{k}} \frac{\braket{n_{\bar{k},s}}_0+\braket{n_{\bar{k},s}}_1}{V} \hbar\omega_s(\bar{k})v_{s\alpha}(\bar{k}) = \sum_s\sum_{\bar{k}} \frac{\braket{n_{\bar{k},s}}_1}{V} \hbar\omega_s(\bar{k})v_{s\alpha}(\bar{k}) $$

Where we used the considerations made before on the equilibrium distribution.
We obtain in the end:

$$Q_x  = -\sum_s\sum_{\bar{k}} \frac{\tau_s(\bar{k}) v_{sx}(\bar{k})}{V}\frac{\partial \braket{n}_0}{\partial T}\frac{\partial T}{\partial x} \hbar\omega_s(\bar{k})v_{sx}(\bar{k}) = - \frac{1}{V} \sum_s\sum_{\bar{k}} \frac{\partial \braket{n}_0}{\partial T}\frac{\partial T}{\partial x} \hbar\omega_s(\bar{k})\tau_s(\bar{k})v^2_{sx}(\bar{k})  $$

Given the fact that we have chosen as heat flux direction $\hat{i}$ we can reduce $\bar{Q} = - \kappa \bar{\nabla} T \to Q_x = -\kappa \frac{\partial T}{\partial x}$, so that from this last relation, is easy to evaluate the heat conduction coefficient:

$$\kappa   =  \frac{1}{V} \sum_s\sum_{\bar{k}} \frac{\partial \braket{n}_0}{\partial T} \hbar\omega_s(\bar{k})\tau_s(\bar{k})v^2_{sx}(\bar{k})  $$

Now we can make some observations. 

The first one is that $\kappa \propto v^2_{sx}(\bar{k})$, so that phonons at the border of the Brillouin zone , where $\bar{v} = \nabla_{\bar{k}} \omega$ is small, don't contribute much to the heat conduction.
Moreover hard materials, which has in general high sound velocity in the acoustic mode, will have for the corresponding $\bar{k}$ values a high velocity $\bar{v} = \nabla_{\bar{k}}\omega$ value, so that we can say that hard materials has high values of $\kappa$.
Lastly $\kappa \propto \tau_s(\bar{k})v_{sx}(\bar{k}) \equiv \Lambda_s(\bar{k})$ which is the mean free path of phonons. We observe that defects and phonon-phonon interaction (corrections here not considered) will affect this value, and subsequently the $\kappa$.
