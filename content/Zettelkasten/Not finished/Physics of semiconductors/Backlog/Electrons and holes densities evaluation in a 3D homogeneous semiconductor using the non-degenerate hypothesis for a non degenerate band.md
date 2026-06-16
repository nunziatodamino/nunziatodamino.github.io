We now perform a specific evaluation of the [[Projects/Physics of semiconductors/Electrons and holes densities in an homogeneous semiconductor|Electrons and holes densities in an homogeneous semiconductor]] using the [[Projects/Physics of semiconductors/Non degenerate semiconductor approximation (Boltzmann approximation)|Non degenerate semiconductor approximation (Boltzmann approximation)]].
We'll consider a 3D bulk material in order to be able to use the analytical form of the DOS.
This evaluation results in a good approximation when the non-degenerate hypothesis is satisfied, and when there are no strange contribution in the DOS (room temperature is a good example).
We recall that, for a 3D bulk material, in an isotropic band:

$$ \rho_{CB}(E) =\frac{\sqrt{2} m^{*3/2}}{\pi^2\hbar^3}(E-E_C)^{1/2}\qquad \rho_{VB}(E) =\frac{\sqrt{2} m^{*3/2}}{\pi^2\hbar^3}(E_V-E)^{1/2}  $$

Moreover in the non-degenerate semiconductor hypothesis:

$$ f_{FD}\simeq f_{B} = e^{-\beta(E-E_F)} = e^{-\frac{E-E_F}{k_bT}}  $$

Putting all together, for electrons:

$$ n_{electrons}=\int_{E_c}^{+\infty}dE\rho(E)f_{FD}(E,E_F)\simeq \int_{E_c}^{+\infty}dE\frac{\sqrt{2} m^{*3/2}}{\pi^2\hbar^3}(E-E_C)^{1/2}e^{-\beta(E-E_F\pm E_c)} $$

This can be solved by proposing the change $x=-\beta(E-E_C)$ in order to obtain:

$$ n_{electrons}\simeq \frac{\sqrt{2} m^{*3/2}}{\beta^{3/2}\pi^2\hbar^3}e^{-\beta(E_C-E_F)} \int_{0}^{+\infty}dx\ x^{1/2}e^{-x} $$

The integral in the formula is a notable one and as result $\Gamma\left(\frac{3}{2}\right)= \frac{\sqrt{2}}{2}$, so that in the end:

$$ n_{electrons} \propto e^{-\frac{E_C-E_F}{k_bT}} = \frac{1}{\sqrt{2}}\left[\frac{m^*k_BT}{\pi\hbar^2} \right]^{3/2} e^{\frac{E_C-E_F}{k_bT}} \equiv N_c e^{-\frac{E_C-E_F}{k_bT}}  $$

We call $N_c$ effective density of states in the conduction band.
If we give the classical statistical interpretation to the Boltzmann factor it is like we have all these $N_c$ electrons at energy $E_c$.

Note that for the holes the ansatz is the same so we report just the final result:

$$ n_{holes} \simeq N_v e^{-\frac{E_F-E_v}{k_BT}} \qquad N_V = \frac{1}{\sqrt{2}}\left[\frac{m_v^*k_BT}{\pi\hbar^2} \right]^{3/2} $$
