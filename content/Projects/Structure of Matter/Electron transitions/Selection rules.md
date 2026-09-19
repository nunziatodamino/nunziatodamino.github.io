Say we want to evaluate the transition probabilities of [[Absorption and emission rates respect the DOS|absorption and emission]] in the particular case of [[The non-relativistic hydrogenic atom]].
The polarization-summed, angle-integrated electric-dipole transition rates are proportional to $|\langle\varepsilon_b|\hat{\bar r}|\varepsilon_a\rangle|^2$.
First we expand this in the coordinate basis:

$$
\begin{aligned}
\langle\varepsilon_b|\hat{\bar{r}}|\varepsilon_a\rangle
&=\langle\varepsilon_b|\mathbb{1}\hat{\bar{r}}|\varepsilon_a\rangle=\int d\bar{r}\,\psi_b^*(\bar{r})\,\bar{r}\,\psi_a(\bar{r})=\int d\bar{r}\,\bar{r}\, \psi_{n_bl_bm_b}^{*}(\bar{r})\psi_{n_al_am_a}(\bar{r}).
\end{aligned}
$$

Given the wavefunctions simmetry, we switch to the spherical coordinates. Using the fact that $\bar{r} = r \hat u_r (\vartheta, \phi)$

$$
\begin{aligned}
\langle\varepsilon_b|\hat{\bar{r}}|\varepsilon_a\rangle
&=\left[
\int dr\,r^3R_{n_bl_b}^{*}(r)R_{n_al_a}(r)
\right]\left[
\int\!\!\int d\theta\,d\phi\,\sin\theta\,
\hat{u}_r(\theta,\phi)
Y_{l_bm_b}^{*}(\theta,\phi)Y_{l_am_a}(\theta,\phi)
\right]=\\
&=I_{\mathrm{radial}}I_{\mathrm{angular}}.
\end{aligned}
$$

Let's evaluate specifically $I_{\mathrm{angular}}$, but first let's rewrite the radial versor using the first [[spherical harmonics]].
One can see that:

$$
\begin{aligned}
Y_{1,0} &= \sqrt{\frac{3}{4\pi}}\cos\theta = C_0\cos\theta\\
Y_{1,1}&=-C_1\sin\theta(\cos\phi+i\sin\phi),\\
Y_{1,-1}&=C_1\sin\theta(\cos\phi-i\sin\phi).
\end{aligned}
$$

So:

$$
\sin\theta\cos\phi=\frac{Y_{1,-1}-Y_{1,1}}{2C_1},
\qquad
\sin\theta\sin\phi=\frac{i(Y_{1,-1}+Y_{1,1})}{2C_1}.
$$

In the end one has

$$
\begin{aligned}
\bar{u}_r &=\sin\theta\cos\phi\,\bar{u}_x +\sin\theta\sin\phi\,\bar{u}_y +\cos\theta\,\bar{u}_z=\\ &=\frac{1}{2C_1} \left[ (Y_{1,-1}-Y_{1,1})\bar{u}_x +i(Y_{1,-1}+Y_{1,1})\bar{u}_y \right] +\frac1{C_0}Y_{1,0}\bar{u}_z.
\end{aligned}
$$
 
 Leading to integrals of the type

$$
\begin{aligned}
&\int d\Omega\,Y_{l_bm_b}^{*}Y_{1,q}Y_{l_am_a}, \qquad &q= 0,+1,-1.
\end{aligned}
$$

Recalling that

$$
Y_{lm}=\Theta_{lm}(\theta)\frac1{\sqrt{2\pi}}e^{im\phi}.
$$

The $\phi$ part:

$$
\propto\int_0^{2\pi}d\phi\, e^{-i(m_b-m_a-q)\phi}
$$

Here we can distinguish 2 cases:

- $m_b-m_a-q = 0 \iff m_b-m_a=q$

In this case the integral is simply:

$$
\int d\phi=2\pi.
$$

- $m_b-m_a-q \neq 0 \iff m_b-m_a\neq q$

Now the integral is

$$
\begin{aligned}
&=\left[
\frac{e^{-i(m_b-m_a-q)\phi}}{-i(m_b-m_a-q)}
\right]_0^{2\pi} \\
&=\frac{e^{-i((m_b-m_a-q))2\pi}-1}{-i((m_b-m_a-q))}=0 
\end{aligned}
$$

This imply that $$\Delta m = 0,\pm 1$$
Finally we can have a bound on the $\ell$ by the following consideration on the angular integral:

$$
\begin{aligned}
&\propto \int d\Omega\,
Y_{l_bm_b}^{*}Y_{1,q}Y_{l_am_a}
\\
&=\int d\Omega\,
Y_{l_bm_b}^{*}\sum_{L,M}C_{LM}^{(q)}Y_{L,M},
\qquad
\lvert l_a-1\rvert\leq L\leq l_a+1
\\
&=\sum_{L,M}C_{LM}^{(q)}\int d\Omega\,
Y_{l_bm_b}^{*}Y_{L,M}
\\
&=\sum_{L,M}C_{LM}^{(q)}\delta_{l_b,L}\delta_{m_b,M}
\quad\longrightarrow\quad
\lvert l_a-1\rvert\leq l_b\leq l_a+1.
\end{aligned}
$$

Now use the parity of the spherical harmonics,

$$
Y_{\ell m}(-\bar u_r)=(-1)^\ell Y_{\ell m}(\bar u_r).
$$

Under $\bar u_r\mapsto-\bar u_r$, the angular integral therefore satisfies

$$
I_{\mathrm{ang}}
=(-1)^{\ell_b+1+\ell_a}I_{\mathrm{ang}}.
$$

A nonzero integral requires $\ell_a+\ell_b+1$ to be even. Combined with the triangle condition $|\ell_a-1|\leq\ell_b\leq\ell_a+1$, this excludes $\ell_b=\ell_a$ and leaves

$$
\Delta l=\pm1.
$$
