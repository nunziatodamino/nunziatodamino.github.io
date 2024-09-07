Using the result derived in the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Drude Theory]], we can write the dielectric function in the free electron approximation.

If we consider that in an homogenous medium the polarisation $\bar{P}$ is of the form $\bar{P} = -ne\bar{r}(t)$, with $n$ electronic density, we will have:

$$ \bar{P}(t) = \frac{-ne^2}{m(\omega^2+i\gamma\omega)}\bar{E}(t) $$

Moreover, using the relation $\bar{P} = \varepsilon_0\chi\bar{E}=\varepsilon_0(\varepsilon_r-1)\bar{E}$ one can find the relative dielectric function expression in terms of $\omega$:

$$ \varepsilon_r \equiv \varepsilon(\omega) =1- \frac{ne^2}{m\varepsilon_0(\omega^2+i\gamma\omega)} = 1-\frac{\omega_P^2}{\omega^2+i\gamma\omega} $$

Where we call $\omega_P^2 =\frac{ne^2}{m\varepsilon_0}$ plasma frequency.

==We recall briefly that a plasmon energy $\hbar\omega_P\simeq 5-20\ eV$ in metals
So in relation to the EM spectrum the plasma frequency lies between UV and IR, and consequently it value is from $100- 800\ THz$==


==Note that in the context of Solid State Physics we call the relative dielectric function simply dielectric function, dropping the index ==
We now observe that $\varepsilon(\omega) \in \mathbb{C}$, so that useful to write as $\varepsilon(\omega) = \varepsilon_1(\omega) + i\varepsilon_2(\omega)$, where $\varepsilon_1(\omega),\varepsilon_2(\omega) \in \mathbb{R}$.
We can then write:

$$ \varepsilon(\omega) = 1-\frac{\omega_P^2}{\omega^2+i\gamma\omega} \frac{\omega^2-i\gamma\omega}{\omega^2-i\gamma\omega} =  1-\frac{\omega^2\omega_P^2}{\omega^4+\gamma^2\omega^2} + i \frac{\gamma\omega\omega_P^2}{\omega^4+\gamma^2\omega^2}$$
$$  \varepsilon_1(\omega) = 1-\frac{\omega^2\omega_P^2}{\omega^4+\gamma^2\omega^2} =1-\frac{\omega_P^2}{\omega^2+\gamma^2}  \qquad \varepsilon_2(\omega) = \frac{\gamma\omega\omega_P^2}{\omega^4+\gamma^2\omega^2} = \frac{\gamma\omega_P^2}{\omega(\omega^2+\gamma^2)}$$
