Consider the following idealized model: a point-like nucleus of charge $+e$ is at rest with infinite mass. Around that a spherical electronic cloud of radius $R$ and total charge $-e$ has center coincident with the point-like nucleus.
We introduce now an external electric field $\bar{E}_{ext}(\bar{r},t)$ that move the electronic cloud. We introduce also the hypothesis that the field does not change much within the electronic cloud range (i,e. within the cloud and the scope of our calculations $\bar{E}_{ext}(\bar{r},t) \simeq \bar{E}_{ext}(t)$ )
The model is schematized by the following picture:

![[Atomic polarizability - Classical approach.png|500]]

First we evaluate the field of the electronic cloud in $\Sigma_2$ using Gauss's theorem:

$$
E_c\,4\pi r^2
=\frac{Q_{\mathrm{int}}}{\varepsilon_0}
=\frac{\rho V}{\varepsilon_0}
=-\frac{e}{V_{\mathrm{tot}}}\frac{V}{\varepsilon_0} \quad
 \iff \quad \bar E_c=-\frac{e}{3V_{\mathrm{tot}}\varepsilon_0}\bar r
$$

Translating this to the nucleus frame $\Sigma_1$:  $\bar r+\bar R=\bar r' \iff \bar r=\bar r'-\bar R$.
Then clearly the force on nucleus at $\bar r'=0$:

$$
\bar F_N=e\bar E(\bar r'=0)
=\frac{e^2}{3V_{\mathrm{tot}}\varepsilon_0}\bar R.
$$

While the one on the cloud is $\bar F_N=-\bar F_c$ as $\sum\bar F=0$.

This leads to the motion equation for the cloud:

$$
m\ddot{\bar R}(t)
=-\frac{e^2}{3V_{\mathrm{tot}}\varepsilon_0}\bar R(t)
-e\bar E_{\mathrm{ext}}(t).
$$

In order to extract the polarizability coefficient we then Fourier transform:

$$
-m\omega^2\bar R(\omega)
=-\frac{e^2}{3V_{\mathrm{tot}}\varepsilon_0}\bar R(\omega)
-e\bar E(\omega).
$$

And, by defining $\frac{e^2}{m}\frac{1}{3V_{\mathrm{tot}}\varepsilon_0}\equiv\omega_0^2$ we can rewrite

$$
\bar R(\omega)
=-\frac em\frac{1}{\omega_0^2-\omega^2}\bar E(\omega)

\iff \underbrace{-e\bar R(\omega)}_{\bar d(\omega)} =\underbrace{
\frac{e^2}{m}\frac{1}{\omega_0^2-\omega^2}
}_{\alpha(\omega)}\bar E(\omega) = \alpha(\omega) \bar E(\omega)
$$

Notice that if $\omega\ll\omega_0$, we obtain the static limit:

$$
\alpha(0)=3\varepsilon_0V_{\mathrm{tot}}.
$$