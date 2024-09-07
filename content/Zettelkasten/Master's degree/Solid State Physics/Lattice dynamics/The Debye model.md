
Upon a rigorous quantum mechanical treatment of vibration in a crystal, one [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Heat capacity in solids due to lattice vibrations - Quantum treatment - The introduction of phonons|obtains]] that, in order to evaluate the heat capacity in a crystal, it must be evaluated the following:

$$C_v =\frac{d}{dT} \left[ \sum_s \int \frac{\hbar\omega_s(\bar{k})}{e^{\beta  \hbar\omega_s(\bar{k})}-1} D_s(\omega)d\omega \right]$$

Which strongly depends on the [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Vibrational density of states|Vibrational density of states]] functional form.

The Debye model is an approximation that permits to simplify this calculation by assuming a linear dispersion relationship for each polarization, i.e. to assume that every possible vibrational mode in the crystal is acoustic and is to be evaluated for small values of $\bar{k}$.

This choice leads to a simple evaluation for the density of states. This because, in 3 dimensions :

$$
\omega_s(\bar{k}) \sim \begin{cases} v_Lk\quad \mbox{1 longitudinal mode} \\
v_Tk\quad \mbox{2 tranverse modes}\end{cases}
\qquad\Rightarrow\qquad
\vert\nabla_{\bar{k}}\omega_s(\bar{k})\vert \sim \begin{cases} v_L\quad \mbox{1 longitudinal mode} \\
v_T\quad \mbox{2 tranverse modes}\end{cases}
$$

So that, for each polarisation:

$$D_s(\omega)=\frac{V}{(2\pi)^3}\int_{S_{\omega}} dS_{\omega}\frac{1}{\vert\nabla_{\bar{k}}\omega_s(\bar{k})\vert }=\frac{V}{(2\pi)^3}\frac{1}{v_s}  \int_{S_{\omega}} dS_{\omega}=\frac{V}{(2\pi)^3}\frac{1}{v_s}4\pi k^2 = \frac{V}{2\pi^2}\frac{1}{v_s^3}\omega_s^2$$

And then, in order to find the total density of states $\sum_sD_s(\omega) = D(\omega)$. 
The problem with this result is that the number of vibrational states $D(\omega)d\omega \to +\infty$, when $\omega \to +\infty$ i.e. the system can hold infinite vibrational energy.   
In order to correct this paradox we must introduce a cutoff frequency, defined as:

$$\sum_s \int_0^{\omega_D}D_{s}(\omega)d\omega = 3N$$

Where $N$ is the number of primitive unit cells of the crystal.
Let's proceed to is evaluation:

$$\sum_s \int_0^{\omega_D}D_{s}(\omega)d\omega  = \frac{V}{2\pi^2}\sum_s \int_0^{\omega_D}\frac{1}{v_s^3}\omega_s^2d\omega = \frac{V}{2\pi^2}\left(\frac{1}{v_L^3}+\frac{2}{v_T^3}\right)\frac{\omega_D^3}{3} = 3N $$

If now define an average sound velocity using $\frac{1}{v^3_{sound}} = \frac{1}{3}\left(\frac{1}{v_L^3}+\frac{2}{v_T^3}\right)$ as if the sound velocity does not depend on polarization, on can find a simple expression for $\omega_D$:

$$\omega_D = \left( 6\pi^2 \frac{N}{V} \right)^{1/3} v_{sound} \equiv k_D v_{sound}$$

Where we have defined in this equation the Debye frequency and the Debye wavevector $k_D$.
Is also fundamental in the applications the Debye temperature, defined as:

$$k_bT_D = \hbar \omega_D  \qquad \Rightarrow\qquad T_D=\frac{\hbar}{k_b}\left( 6\pi^2 \frac{N}{V} \right)^{1/3}v_{sound}$$

Finally, we can proceed to the heat capacity calculation.
One has:

$$ \begin{aligned} C_v & =\frac{d}{dT} \left[ \sum_s \int \frac{\hbar\omega_s(\bar{k})}{e^{\beta  \hbar\omega_s(\bar{k})}-1} D_s(\omega)d\omega \right] = \frac{d}{dT} \left[ \sum_s \int_0^{\omega_D} \frac{\hbar\omega_s(\bar{k})}{e^{\beta  \hbar\omega_s(\bar{k})}-1} \frac{V}{2\pi^2}\frac{1}{v_s^3}\omega_s^2 d\omega\right] = \\ &= \frac{3V}{2\pi^2}\frac{1}{v_{sound}^3}\frac{d}{dT} \left[  \int_0^{\omega_D} \frac{\hbar\omega^3}{e^{\beta\hbar\omega}-1} d\omega\right] \end{aligned} $$

We solve the integral by the change of variables $\beta\hbar\omega = x \iff d\omega = \frac{1}{\beta\hbar}dx = \frac{k_bT}{\hbar}dx$. We have

$$C_v = \frac{3V}{2\pi^2}\frac{1}{v_{sound}^3}\frac{d}{dT} \left[  \int_0^{\omega_D} \frac{\hbar\omega^3}{e^{\beta\hbar\omega}-1} d\omega\right] =  \frac{3V}{2\pi^2}\frac{k_b^4}{\hbar^3v_{sound}^3}\frac{d}{dT} \left[T^4  \int_0^{T_D/T} \frac{x^3}{e^{x}-1} dx\right] =  $$

We can now study this in 2 limits:

- Low temperatures limit $T<<T_D$.

This limit imply that $T_D/T \to +\infty$, so that:

$$\int_0^{T_D/T} \frac{x^3}{e^{x}-1} dx \sim \int_0^{+\infty} \frac{x^3}{e^{x}-1} dx = \frac{\pi^4}{15}$$

Where the last one is a known integral. We will obtain then in the low temperature limit:

$$C_v \simeq  \frac{3V}{2\pi^2}\frac{k_b^4}{\hbar^3v_{sound}^3}\frac{d}{dT} \left[T^4 \frac{\pi^4}{15}\right] = \frac{3V}{2\pi^2}\frac{k_b^4}{\hbar^3v_{sound}^3}  \frac{\pi^4}{15} 3T^3 = V\frac{12}{5} \pi^4 n k_b \left(\frac{T}{T_D}\right)^3 $$


- High temperatures limit $T>>T_D$

In this limit $T_D/T<<1$ so that we can expand in Taylor series the integrand and approximate:

$$\frac{x^3}{e^{x}-1} \sim x^2 \qquad x<<1$$

So that:

$$C_v \simeq\frac{3V}{2\pi^2}\frac{k_b^4}{\hbar^3v_{sound}^3}\frac{d}{dT} \left[T^4  \int_0^{T_D/T} x^2 dx\right] = \frac{3V}{2\pi^2}\frac{k_b^4}{\hbar^3v_{sound}^3}\frac{d}{dT} \left[T^4 \frac{T_D^3}{3T^3} \right]=   $$

$$ = \frac{3V}{2\pi^2}\frac{k_b^4}{\hbar^3v_{sound}^3}\frac{T_D^3}{3}= 3Vnk_b $$

Which is the Dulong-Petit limit.