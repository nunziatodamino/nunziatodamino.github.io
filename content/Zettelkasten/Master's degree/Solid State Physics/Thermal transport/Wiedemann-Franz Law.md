We want to show how the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Static electrical conductivity with the Boltzmann equation|electrical conductivity]] and the [[Zettelkasten/Master's degree/Solid State Physics/Thermal transport/Thermal conductivity in solids|thermal conductivity]] due to electrons are connected. To do so we have to do a crude approximation and work in the context of the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Drude Theory]], in which every electron has the same velocity. Because of this, if we consider the electrons as a non interacting gas, we can use the result derived in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Additional material/Thermal conductivity using kinetic gas theory arguments]], to write:

$$\kappa =\frac{1}{3V}C_V\tau\braket{v}^2 $$

Here, because velocity has a fixed value, we can imply that has no variance, so that $\braket{v}^2=\braket{v^2} = v_F^2$, so that we can write:

$$\kappa^{\text{el}} =\frac{1}{3V}C^{\text{el}}_V\tau v_F^2 $$

Now we can use for the heat capacity the expression derived in [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Electronic heat capacity]], so that we have:

$$\kappa^{\text{el}} =\frac{\pi^2}{6V}Nk_B \frac{T}{T_F}\tau v_F^2 = \frac{\pi^2}{6}n\tau \frac{k_B^2T}{E_F} \frac{2E_F}{m} = \frac{\pi^2}{3}n\tau \frac{k_B^2T}{m} $$

Notice that this approximation is not at all general and it depends strongly on the range of temperature in which we are working. As we can see in the picture for copper:

![[Images/Wiedemann-Franz Law_t dependance thermal conductivity.png|500]]

Only for low temperatures $\kappa \propto T$. This is strictly correlated to the mean scattering time $\tau$. For low $T$ electron scattering is dominated by defects  $(\tau \sim \text{constant} \to \kappa \propto T)$, while for high $T$ is dominated by scattering with phonons $(\tau \propto T^{-1} \to \kappa \sim \text{constant} )$.


Now, by comparing this expression with the one found in [[Projects/Solid State Physics/Electron dynamics/Electrical conductivity in metals]], we can write:

$$ \frac{k^{\text{el}}}{\sigma} = \frac{\pi^2}{3}n\tau \frac{k_B^2T}{m} \frac{m}{ne^2 \tau}  \qquad \iff \qquad \frac{k^{\text{el}}}{\sigma} = \left(  \frac{\pi^2}{3} \frac{k_B^2}{e^2}\right) T \equiv \mathcal{LT}$$

In this way we derived the so called Wiedemann-Lorentz law.
The proportionality coefficient is called **Lorenz number** $[\frac{W \Omega}{K}]$ and is specific for every metal. we report in the following a table with some experimental values of said coefficient:

![[Images/Wiedemann-Franz Law_lorenz numbers table.png|500]]
