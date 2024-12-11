Given [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/The dielectric function for the free electron model]] is useful for application to study for application purpose the high frequency $(\omega>>\gamma)$ limit.

==This because this limit is typical for wavelenght of the visible range==

We can see that:

$$ \varepsilon_r \equiv \varepsilon(\omega)= 1-\frac{\omega_P^2}{\omega^2+i\gamma\omega} = 1-\frac{\omega_P^2}{\omega^2(1+i\frac{\gamma}{\omega})} \simeq 1-\frac{\omega_P^2}{\omega^2} $$

We can conclude that in this regime $\varepsilon$ is real (Is possible in principle to obtain an expression for the imaginary part using the limit in its definition, but $\varepsilon_2 <<\varepsilon_1$). 
This approximation leads to a simpler dispersion law. By evaluating the $k$ vector:

$$ k = \frac{\omega}{c} \sqrt{\varepsilon}\simeq \frac{\omega}{c} \sqrt{1-\frac{\omega_P^2}{\omega^2}} \qquad \iff \qquad \omega^2 = \omega_P^2 + (kc)^2  $$

![[Images/Pasted image 20230520102509.png|400]]

We see here a plot of this dispersion relation against the dispersion relation of light $\omega=kc$, normalised respect to the square of the plasma frequency.
From a simple asyntotic study we see that for $k \to 0$ it remains only $\omega^2_P$, and for $k \to \infty$ we have the $kc$ term that dominated, so that the line converges to the light line.
Moreover we observe that $\omega$ cannot be lower than $\omega_P$. 
This implies that for $\omega<\omega_P$ there is no wave propagation, so that every wave that impinges in the medium with this frequency condition is perfectly reflected by the material (this is in fact what renders the metals shiny).
While for $\omega>\omega_P$ all is in business and the wave can propagate in the medium.

We are now interested in the condition in which only the plasmon are excited, so that $\omega=\omega_P$.
This condition is meet when $k \to 0$, which implies $\lambda \to \infty$, or a collective oscillation of all the plasmons in the metal. In this condition:

$$ \Re(\varepsilon(\omega_P)) =0 $$

We confront this condition with the Frohlich resonance condition:

$$ \Re(\varepsilon(\omega_{SPR})) +2 \varepsilon_m=0 $$

In order to give an expression which relates $\omega_{SPR}$ to $\omega_P$.
Upon substitution we obtain:

$$ 1-\frac{\omega_P^2}{\omega_{SPR}^2} + 2\varepsilon_m = 0 \qquad \iff \qquad \omega_{SPR} = \frac{\omega_P}{\sqrt{1 + 2\varepsilon_m}}<\omega_P $$

Or, recasted in terms of the wavelength:

$$ \lambda_{SPR} = \lambda_P \sqrt{1 + 2\varepsilon_m} > \lambda_P$$
