In order to correct the discrepancies with experiments found in [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Drude Theory]], we must take account in our model the bound electrons of the metal, not just the free one.
This implies that we must add an harmonic term to the equation of motion.
For a single bound electron:

$$ m \ddot{\bar{r}} + m\gamma\dot{\bar{r}} + m\omega_0^2\bar{r} = -e\bar{E}(t) $$

Where again the forcing electric field is oscillating $\bar{E}(t)=\bar{E}_0e^{-i \omega t}$, and we consider $\gamma = 1/\tau$.
The parameter $\omega_0$ is evaluate as $\frac{\Delta E}{\hbar} = \omega_0$, i.e. the difference in energy between the ground state and the excited state for the transition considered.
By solving, we found:

$$ \bar{r}_{bound}(t) = \frac{e\bar{E}(t)}{m}\frac{1}{\omega^2-\omega_0^2+i\gamma\omega} $$

Again, following the same reasoning conducted in the Drude model, we arrive at the following expression for the dielectric function:

$$ \varepsilon_r \equiv \varepsilon(\omega) = 1-\frac{\tilde\omega_P^2}{\omega^2-\omega_0^2+i\gamma\omega} $$

Where this time:

$$\tilde\omega_P^2 = \frac{n_{bound}e^2}{m_{bound}\varepsilon_0}$$

Where $n_{bound}$ is the electron density of the specific bound electron considered.
So, in order to specify the dielectric function we must sum the contribution from the free electrons (Drude contribution) and from the bounded electrons which are further subdivided in class, according to their appartenance shell:

$$ \varepsilon(\omega)= \varepsilon_{free}(\omega) + \varepsilon_{bound}(\omega) = 1-\frac{\omega_P^2}{\omega^2+i\gamma\omega} - \sum_j \frac{f_j \tilde\omega_{P,j}^2}{\omega^2-\omega_{0,j}^2+i\gamma_j\omega} $$

Where $f_j$ is the oscillator strength of that specific electron for the inner j-shell