Just for a computational purpose is useful to operate in MD simulation with reduced units instead of with SI units.
The operation is simple. 
We define for our system a reference unit for the length $\sigma$, one for the mass $\bar{m}$ , one for the energy $\varepsilon$ and one for the time $\tau \equiv \sqrt{\frac{\bar{m}\sigma^2}{\varepsilon}}$
Then one defines the fundamental reduced units as :

$$ r^* = \frac{r}{\sigma} \qquad m^* = \frac{m}{\bar{m}} \qquad E^* = \frac{E}{\varepsilon} \qquad t^* = \frac{t}{\tau}  $$

From these one can build the remaining units following the same building rules of the MKS system.
We report for ease of use a list of common units used in MD simulation:
- **Temperature**: $T^* = \frac{k_B T}{\epsilon}$ 
- **Velocity**: $v^* = \frac{v}{\sqrt{\epsilon / \bar{m}}}$ 
- **Force**: $f^* = \frac{f \sigma}{\epsilon}$ 
- **Density**: $\rho^* = \rho \sigma^3$ 
- **Diffusion Coefficient**: $D^* = \frac{D}{\sigma \sqrt{\epsilon / \bar{m}}}$ 
- **Viscosity**: $\eta^* = \frac{\eta}{\sqrt{\bar{m} \epsilon} \sigma^{-2}}$ 
- **Acceleration**: $a^* = \frac{a \sigma}{\epsilon / \bar{m}}$ 
- **Specific Heat**: $C_v^* = \frac{C_v}{k_B}$ 
- **Thermal Conductivity**: $\kappa^* = \frac{\kappa}{\sqrt{\bar{m} \epsilon} \sigma^{-1} k_B}$ 
- **Friction Coefficient**: $\gamma^* = \gamma \sqrt{\frac{\sigma^2}{\bar{m} \epsilon}}$ 
- **Wavenumber**: $k^* = k \sigma$
- **Potential Energy**: $U^* = \frac{U}{\epsilon}$ 
- **Kinetic Energy**: $K^* = \frac{K}{\epsilon}$ 
- **Angular Velocity**: $\omega^* = \omega \sqrt{\frac{\bar{m}}{\epsilon}}$ 
- **Surface Tension**: $\gamma_{\text{surf}}^* = \frac{\gamma_{\text{surf}} \sigma^2}{\epsilon}$ 
- **Charge**: $q^* = \frac{q}{\sqrt{\epsilon \sigma}}$ 
- **Electric Field**: $E^* = \frac{E \sigma}{\sqrt{\epsilon}}$