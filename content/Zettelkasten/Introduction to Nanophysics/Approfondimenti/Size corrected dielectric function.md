We expect, that in general also the dielectric function will be size-dependent.
According to the [[Drude-Lorentz Theory]] we have:

$$\varepsilon(\omega)= \varepsilon_{free}(\omega) + \varepsilon_{bound}(\omega)$$

Where we were able to decouple the contribution in a part coming from the valence electrons $\varepsilon_{free}$, (in typical metals, like in the Cu, Ag, Au series these are the s electrons), where this part is describe by the simple Drude theory, and the contribution due to the inner electrons $\varepsilon_{bound}$ (in typical metals, like in the Cu, Ag, Au series these are the d electrons, the so called interband electrons).
In our previous treatment neither of this contribution is size dependent.

In order to construct a size-dependent formula we begin by considering a nanocluster with size:

$$ R \simeq \lambda_e $$

With $\lambda_e$ is the electronic mean-free path (1 to 10nm in typical materials at room temperature).
In a simplified treatment we can see bulk metal band structure as continuous, but in the confinement condition the cluster energy levels will widen as:

$$E_{gap​}= \frac{\hbar^2}{8m^*L^2}​$$

With $L$ confinement length. This has the effect to separate the valence band and the conduction band, so that the electron in the valence band would more likely be the one to interact.
In this way we obtain that only the free electron part of the dielectric function is size dependent, while the interband part is not:

$$ \varepsilon(\omega,R)= \varepsilon_{free}(\omega,R) + \varepsilon_{bound}(\omega) $$

### Relaxation frequency size correction

In order to evaluate $\varepsilon_{free}(\omega,R)$, first we have to to some considerations. The first is that we must obtain the bulk limit for the large size limit:

$$ \lim_{R \to \infty} \varepsilon_{free}(\omega,R) = \varepsilon_{free}(\omega,R_{\infty}) =  1-\frac{\omega_P^2}{\omega^2+i\gamma\omega}  $$

As obtained in the Drude Theory. Of these quantities only the relaxation frequency $\gamma$ can be size dependent, so we now construct its analytical form using a semiclassical approach.
This is possible because:

$$ \Delta x \Delta p \sim R\hbar k_F \sim 10^{-31}\ Js > \hbar $$

Where we used as estimates $R \sim \lambda_e \sim \pu{1 nm}$, $k_F \sim \pu{10^{10}  1/m}$. So we can describe electrons as particles, as we already did in the Drude model.

![[Pasted image 20230525105633.png|300]]

Suppose that the electron start after an interaction with the surface at the point A and then it will travel at the Fermi velocity in a linear way toward the point C in our nanoparticle. At that point C there would be another event of scattering triggered by the surface.
We use this setting in order to evaluate the mean time of scattering due to the surface, so that:

$$ \gamma(R) = \gamma_{bulk} + \gamma_{surface}(R) $$

The distance is evaluated by considering that ACB is a rectangular triangle, so that $AC=AB\cos(\vartheta)$.
So, in order to evaluate the time:

$$ \tau_{AC}(\vartheta) = \frac{2R\cos{\vartheta}}{v_F} $$

Now, in order to evaluate the relaxation time, one must , by definition, perform a mean:

$$ \braket{\tau_{AC}}  = \frac{\int_0^\pi d\varphi\int_{0}^{\pi/2}\tau_{surface}(\vartheta)d\vartheta}{ \int_0^\pi d\varphi\int_{0}^{\pi/2}d\vartheta} = \frac{4R}{\pi v_F} $$

Note that our expression is invariant under $\varphi$.

Finally, by considering $\gamma_{surface}(R) = \frac{1}{\braket{\tau_{AC}}}$, we obtain the final expression:

$$ \gamma(R) = \gamma_{bulk} + \frac{\pi v_F}{4R}$$

Now we construct the size correction.
We start by the Drude-Lorentz expression:

$$ \varepsilon_{Drude-Lorentz}(\omega,R)= \varepsilon_{free}(\omega,R) + \varepsilon_{bound}(\omega) $$

Using this expression directly can be cumbersome. Is better to evaluate this at the bulk, and then correct with the size effect using the Drude contribution, also because is probable that the bulk value is already available in literature.
By calling $\varepsilon_{free}(\omega,R)\equiv\varepsilon_{Drude}(\omega,R)$ and by recalling the bulk expression for the real and imaginary part of the dielectric function:

$$ \Re(\varepsilon_{Drude}(\omega,R_{\infty}))  =1-\frac{\omega_P^2}{\omega^2+\gamma^2}  \qquad \Im(\varepsilon_{Drude}(\omega,R_{\infty})) =  \frac{\gamma\omega_P^2}{\omega(\omega^2+\gamma^2)}$$

In order to obtain a size corrected expression first we remove $\varepsilon_{Drude}(\omega,R_{\infty})$ and we substitute it with the size correct version, by adding $\varepsilon_{Drude}(\omega,R)$.
So, if we consider:

$$\varepsilon_{Drude-Lorentz}(\omega,R) = \varepsilon_{Drude-Lorentz}(\omega,R_{\infty}) -\varepsilon_{Drude}(\omega,R_{\infty})+\varepsilon_{Drude}(\omega,R)$$

We obtain an expression that satisfies the bulk limit, and is also easier to evaluate respect to direct approach, because is just a correction from the bulk value.
Finally, to obtain a ready to use expression in application, we write the explicit form of the real and the imaginary part:

$$\Re (\varepsilon_{Drude-Lorentz}(\omega,R)) = \Re (\varepsilon_{Drude-Lorentz}(\omega,R_{\infty})) +\omega_P^2 \left( \frac{1}{\omega^2+\gamma^2(R_{\infty})}-\frac{1}{\omega^2+\gamma^2(R)}  \right)$$

$$\Im (\varepsilon_{Drude-Lorentz}(\omega,R)) = \Im (\varepsilon_{Drude-Lorentz}(\omega,R_{\infty}) )-\frac{\omega_P^2}{\omega} \left( \frac{\gamma(R_{\infty})}{\omega^2+\gamma^2(R_{\infty})}-\frac{\gamma(R)}{\omega^2+\gamma^2(R)}  \right)$$
