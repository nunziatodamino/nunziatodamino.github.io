Given the considerations in [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Thomas-Fermi model for screening|Thomas-Fermi model for screening]], electron interacts via a Yukawa-like potential with characteristic length $\lambda_{TF}$.
Generally in solids $\lambda_{TF}\sim 1\ \mathring{\text{A}}$, that is comparable with the lattice constant, so that we cannot neglect electron-electron interaction.

We now estimate the mean free path. From simple kinetic theory, a simple estimation is:

$$ \lambda \sim \frac{1}{n\sigma_0} $$

Where $n$ is the scatterer density (in this case the electrons) and $\sigma_0$ is the scattering cross section.
Given that the scattering is governed by the Thomas-Fermi length we can estimate roughly that $\sigma_0 \sim \lambda_{TF}^2$.
We can now say also that $\lambda \sim v_F\tau$ where $\tau$ is the mean scattering time.
Is now easy to estimate the mean scattering frequency:

$$ \frac{1}{\tau} \sim nv_F\lambda^2_{TF} $$

And finally the total scattering rate:

$$ w=  \frac{n}{\tau} \sim n^2v_F\lambda^2_{TF} $$

This estimation is wrong, specifically is an overestimation.
Suppose to have to electron with initial momenta $\bar{k}_1$ and $\bar{k}_2$ that interacts and then have final momenta $\bar{k}'_1$ and $\bar{k}'_2$.
The final states must be free in order to be occupied. Then , if we consider the [[Fermi-Dirac statistics]] at $T \neq 0$ the only free states are the one with energy $E=E_F \pm k_BT$. Moreover also the initial states must have this energy, because of momentum conservation.
So we must correct $n$ with the fraction of the electrons available to the scattering process, namely $n \to n \frac{T}{T_F}$.
We then obtain:

$$ w=  \frac{n}{\tau} \sim n^2v_F\lambda^2_{TF}\left( \frac{T}{T_F} \right)^2$$

And a scattering frequency of:

$$ \frac{1}{\tau} \sim nv_F\lambda^2_{TF}\left( \frac{T}{T_F} \right)^2$$

We proceed now with an estimate for copper.
At $T=300\ \text{K}$ we have for $\text{Cu}$ the following: $v_F\simeq 10^8 \ \text{cm/s}$ and $\lambda_{TF} \simeq 1 \ \mathring{\text{A}}$ .
We then obtain $\tau \equiv \tau_{ee} = 5\cdot 10^{11}\ \text{s}$ . By comparing this time with the mean collision time between electron and phonons, called $\tau_{coll}$, we observe that $\tau_{ee}>>\tau_{coll}$ leading to the conclusion that one can in first approximation neglect the effects deriving by electron-electron scattering.

**non trovo la referenza, o manca o non so**
