In [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Infinite monoatomic linear chain|Infinite monoatomic linear chain]] I obtained as dispersion relation the result

$$\omega(k)= \sqrt{\frac{4\tilde{K}}{M}} \left| \sin\left(\frac{ka}{2}\right) \right|$$

Valid for every possible value of the wavenumber $k$.

I know that, from the theory of elasticity, if a wave propagates in a continuous solid, this is classified as a sound wave.
Then if in this framework I choose a wave that ignores the discretization, i.e. a wave with wavelength $\lambda >> a$ , I should in principle be able to recover the result from the theory of elasticity.
This is done by studying the limit of $k \to 0$  (implying that $\lambda = \frac{2 \pi}{k} \to \infty$)

We obtain in this limit:

$$ \omega(k) \simeq \sqrt{\frac{\tilde{K}a^2}{M}}|k| \qquad (k \to 0)$$

We show now in an heuristic way that the coefficient is indeed the sound velocity.

We recall the sound velocity definition:

$$ v_s= \sqrt{\frac{C}{\rho}} $$

Where $C$ is the Young's modulus and $\rho$ is the mass density. Moreover we recall the Hooke's law:

$$ F = C \Sigma \frac{\Delta l}{l} $$

Which describes the linear deformation $\Delta l$ of a volume $\Sigma l$ due to an applied force $F$ normal to the cross section $\Sigma$
In the context of the monoatomic linear chain we can write:

$$ F= \tilde{K}u = C \Sigma \frac{u}{a} $$

By multiplying by $a$ and dividing by $M$ one obtains:

$$\frac{\tilde{K}a^2}{M} = \frac{C}{\rho}=v_s^2$$

Where we used the fact that $\rho=M/V$ and $V=\Sigma a$
In the end we can write, in the limit of $k \to 0$ the dispersion relation as

$$ \omega(k) \simeq v_s|k| \qquad (k \to 0)$$

Which is the expected dispersion relation for sound waves in continuous media.