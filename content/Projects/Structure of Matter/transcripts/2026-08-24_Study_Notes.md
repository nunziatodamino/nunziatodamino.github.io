---
title: Study Notes — 2026-08-24
date: 2026-08-24
tags:
  - study-notes
  - performance-lab
  - transcription
  - physics
status: transcribed-from-submitted-images
---

# Study Notes — 2026-08-24

> [!note] Transcription conventions
> The wording, spelling, capitalization, intermediate steps, apparent mistakes, question marks, and corrections have been preserved as closely as possible. Crossed-out writing is shown as `~~crossed out~~`; editorial descriptions are enclosed in square brackets. Equations have been typeset in LaTeX for Obsidian. A source-image comment precedes every submitted page or board.
> Scalar operators carry a hat; spatial vectors are written as $\bar{a}$; vector operators as $\hat{\bar{a}}$; and unit vectors as $\bar{e}_i$ or $\bar{u}_i$. Hilbert-space kets retain their standard notation.
> Hamiltonians use a script H: $\mathscr{H}$ classically and $\hat{\mathscr{H}}$ when they are quantum operators. Hilbert spaces retain $\mathcal{H}$.
> Complete equations embedded in prose use `$$...$$`; standalone equations use display-math blocks. Multiline derivations use `\begin{aligned}` with explicit `&` alignment points and `\\` row breaks.

## Block 1

### Page 1

<!-- source: image-1787560287506.jpg -->

**24/08. Block 1.**

Recap. In the dipole approximation we have:

$$
\hat{\mathscr{H}}=\hat{\mathscr{H}}_0+\hat{\mathscr{H}}_{\mathrm{int}}
$$

$$
\hat{\mathscr{H}}_0=\hat{\mathscr{H}}_{\mathrm{mat}}+\hat{\mathscr{H}}_{\mathrm{rad}}
$$

$$
\hat{\mathscr{H}}_{\mathrm{int}}
=\sum_{\bar{n},s}\frac em
\sqrt{\frac{\hbar}{2\varepsilon_0V\omega_n}}
\,\hat{\bar{p}}\cdot\bar{\varepsilon}_{\bar{n} s}
(\hat a_{\bar{n} s}+\hat a_{\bar{n} s}^{\dagger}).
$$

Say now we want to eval the transition

$$
|\varepsilon_a\rangle\otimes|m_{\bar{n} s}\rangle
\longrightarrow
|\varepsilon_b\rangle\otimes|m_{\bar{n} s}\rangle.
$$

Plugging this in Fermi Golden Rule:

$$
W_{\bar{n} s}^{a\to b\,(\mathrm{abs})}
=\frac{\pi}{V\varepsilon_0\omega_n}\omega_{ba}^{2}m_{\bar{n} s}
\left|
\bar{\varepsilon}_{\bar{n} s}\cdot
\langle\varepsilon_b|e\hat{\bar{r}}|\varepsilon_a\rangle
\right|^{2}
\delta(\hbar\omega_{ba}-\hbar\omega_n).
$$

$$
W_{\bar{n} s}^{a\to b\,(\mathrm{em})}
=\frac{\pi}{V\varepsilon_0\omega_n}\omega_{ba}^{2}(m_{\bar{n} s}+1)
\left|
\bar{\varepsilon}_{\bar{n} s}\cdot
\langle\varepsilon_b|e\hat{\bar{r}}|\varepsilon_a\rangle
\right|^{2}
\delta(\hbar\omega_{ba}+\hbar\omega_n).
$$

### Page 2

<!-- source: image-1787561462247.jpg -->

We can extend the derivation to a generic field.

$$
\begin{aligned}
W^{a\to b}
&=\sum_{\bar{k},s}W_{\bar{k},s}^{a\to b} \\
&\xrightarrow{\text{box continuum}}
V\sum_s\int\frac{d^3k}{(2\pi)^3}W_{\bar{k},s}^{a\to b}.
\end{aligned}
$$

Of course, we need to pay attention to some things:

$$
\bar{r}_{ab}\equiv
\langle\varepsilon_a|\hat{\bar{r}}|\varepsilon_b\rangle.
$$

$$
\begin{aligned}
\sum_{s=1,2}
\left|\bar{\varepsilon}_{\bar{k},s}\cdot\bar{r}_{ab}\right|^2
&=\left|\bar{\varepsilon}_1\cdot\bar{r}_{ab}\right|^2
+\left|\bar{\varepsilon}_2\cdot\bar{r}_{ab}\right|^2 \\
&=|\bar{r}_{ab}|^2-|\bar{e}_k\cdot\bar{r}_{ab}|^2.
\end{aligned}
$$

$*$ Consider $\{\bar{\varepsilon}_{\bar{k},1},\bar{\varepsilon}_{\bar{k},2},\bar{e}_k\}$ orthonormal set.

$$
\hat{\mathbb 1}
=\sum_s|\bar{\varepsilon}_{\bar{k},s}\rangle
\langle\bar{\varepsilon}_{\bar{k},s}|
+|\bar{e}_k\rangle\langle\bar{e}_k|.
$$

Apply to $|\bar{r}\rangle$:

$$
\hat{\mathbb 1}|\bar{r}\rangle
=\sum_s\langle\bar{\varepsilon}_{\bar{k},s}|\bar{r}\rangle
|\bar{\varepsilon}_{\bar{k},s}\rangle
+\langle\bar{e}_k|\bar{r}\rangle|\bar{e}_k\rangle
$$

$$
=\sum_s(\bar{\varepsilon}_{\bar{k},s}\cdot\bar{r})
\bar{\varepsilon}_{\bar{k},s}
+(\bar{e}_k\cdot\bar{r})\bar{e}_k.
$$

Squaring:

$$
|\bar{r}|^2
=\sum_s|\bar{\varepsilon}_{\bar{k},s}\cdot\bar{r}|^2
+|\bar{e}_k\cdot\bar{r}|^2.
$$

### Page 3

<!-- source: image-1787562606374.jpg -->

Also consider

$$
\begin{aligned}
m_{\bar{k} s}&\longrightarrow m(\omega) \\
&=\frac{1}{e^{\beta\hbar\omega}-1}.
\end{aligned}
$$

Call now:

$$
\bar{r}_{ab}\cdot\bar{e}_k
=|\bar{r}_{ab}|\cos\theta.
$$

In fact:

$$
\begin{aligned}
\bar{r}_{ab}\cdot\bar{e}_k
&=\langle\varepsilon_a|\hat{\bar{r}}\cdot\bar{e}_k|\varepsilon_b\rangle \\
&=\langle\varepsilon_a|r\cos\theta|\varepsilon_b\rangle \\
&=\langle\varepsilon_a|r|\varepsilon_b\rangle\cos\theta.
\end{aligned}
$$

Consider finally.

$$
W_{a\to b}^{(\mathrm{abs})}
=\int_{\mathbb R^3}\frac{d^3k}{(2\pi)^3}(\cdots)
$$

$$
=\int_0^\infty dk\int_0^{2\pi}d\phi\int_0^\pi d\theta\,
\frac{k^2\sin\theta}{(2\pi)^3}\cdots
$$

So we have 2 main eval.

### Page 4

<!-- source: image-1787563229672.jpg -->

$$
\begin{aligned}
W_{a\to b}
&=\int_0^\infty dk\,\frac{k^2}{(2\pi)^3}
\int_0^\pi d\theta\,\sin\theta
\int_0^{2\pi}d\phi\;f(m(\omega_k))\\
&\times\frac{e^2\pi\omega_{ab}^2}{\varepsilon_0\omega_k}
|\bar{r}_{ab}|^2\sin^2\theta\,
\delta\!\left(\hbar(\omega_{ab}-\omega_k)\right)
\end{aligned}
$$

$$
=|\bar{r}_{ab}|^2
\frac{2\pi e^2\pi\omega_{ab}^2}{\hbar\varepsilon_0(2\pi)^3}
\left[\int_0^\pi d\theta\,\sin^3\theta\right]
\left[\int_0^\infty dk\,\frac{\omega_k}{c^2}
f(m(\omega_k))\delta(\omega_{ab}-\omega_k)\right].
$$

$$
\int_0^\pi d\theta\,\sin^3\theta=\frac43.
$$

$$
W_{a\to b}
=\frac43|\bar{r}_{ab}|^2
\frac{e^2\pi\omega_{ab}^2}{\hbar\varepsilon_0(2\pi)^2}
\frac{\omega_{ab}}{c^2}
f(m(\omega_{ab})).
$$

$$
f(m(\omega_{ab}))=
\begin{cases}
m(\omega_{ab}) & \text{ABSORPTION},\\
m(\omega_{ab})+1 & \text{EMISSION}.
\end{cases}
$$

### Page 5

<!-- source: image-1787563650224.jpg -->

Finally we can set

$$
\begin{aligned}
\rho(\omega)
&=\frac{\hbar}{\pi^2c^3}
\frac{\omega^3}{e^{\beta\hbar\omega}-1} \\
&=\frac{\hbar\omega^3}{\pi^2c^3}n(\omega).
\end{aligned}
$$

And write:

$$
W_{a\to b}^{\mathrm{abs}}
=\frac{\pi}{3\varepsilon_0\hbar^2}
|e\bar{r}_{ab}|^2\rho(\omega_{ab}).
$$

$$
W_{a\to b}^{\mathrm{stim\ em}}=W^{\mathrm{abs}}.
$$

$$
\begin{aligned}
W_{a\to b}^{\mathrm{spontaneous\ em}}
&=W^{\mathrm{abs}}
\left[\frac{\hbar\omega_{ab}^3}{\pi^2c^3\rho(\omega_{ab})}\right] \\
&=\frac{\omega_{ab}^3}{3\pi\varepsilon_0\hbar c^3}|e\bar{r}_{ab}|^2.
\end{aligned}
$$

Now we also evaluate the DOS using the definition

$$
\begin{aligned}
\nu(\omega)
&=\frac1V\sum_{\bar{n},s}\delta(\omega-ck) \\
&\longrightarrow
2\int\frac{d^3k}{(2\pi)^3}\delta(\omega-ck)
\end{aligned}
$$

$$
\begin{aligned}
&=2\frac{4\pi}{(2\pi)^3}\int k^2dk\,\delta(\omega-ck) \\
&=\frac{1}{\pi^2}\frac{\omega^2}{c^3}.
\end{aligned}
$$

### Page 6

<!-- source: image-1787563772767.jpg -->

Finally:

$$
\rho(\omega)=n(\omega)\nu(\omega)\hbar\omega.
$$

$$
A=W^{\mathrm{spont}}
$$

$$
B=\frac{A}{\rho(\omega)}.
$$

---

Einstein's coefficients?

## Block 2

### Page 1

<!-- source: image-1787566313453.jpg -->

**Block 2.** Start from:

$$
A=W^{\mathrm{spont}},
\qquad
B=\frac{W^{\mathrm{abs}}}{\rho(\omega)}.
$$

Consider $N$ atoms with two levels $A,B$:

![[2026-08-24_two_level_system.svg]]

*Diagram: upper level $B$, lower level $A$, with $$\varepsilon_b-\varepsilon_a=\hbar\omega$$.*

Suppose the electron levels are in thermal equilibrium:

$$
\varepsilon_b-\varepsilon_a=\hbar\omega>0,
\qquad N=N_a+N_b.
$$

Starting from $A$ rate:

$$
\begin{aligned}
\frac{dN_a}{dt}
&=+W_{b\to a}^{\mathrm{spont}}N_b
+W_{b\to a}^{\mathrm{emission}}N_b
-W_{a\to b}^{\mathrm{absorption}}N_a\\
&=AN_b+B\rho(\omega)N_b-B\rho(\omega)N_a.
\end{aligned}
$$

$$
\rho(\omega)=\rho\!\left(\frac{|\Delta E|}{\hbar}\right).
$$

### Page 2

<!-- source: image-1787566824794.jpg -->

$$
N_a=\frac{e^{-\beta\varepsilon_a}}{Z},
\qquad
N_b=\frac{e^{-\beta\varepsilon_b}}{Z}.
$$

$$
\begin{aligned}
\frac{N_a}{N_b}
&=e^{-\beta(\varepsilon_a-\varepsilon_b)} \\
&=e^{\beta\hbar\omega}.
\end{aligned}
$$

In the stationary case, $$\dot N_a=0$$:

$$
(A+B\rho)N_b=B\rho N_a.
$$

$$
e^{\beta\hbar\omega}=\frac{A}{B\rho}+1.
$$

$$
(e^{\beta\hbar\omega}-1)\rho=\frac AB
$$

$$
\begin{aligned}
A&=B\rho(\omega)(e^{\beta\hbar\omega}-1) \\
&=B\frac{\hbar}{\pi^2c^3}\omega^3.
\end{aligned}
$$

### Page 3

<!-- source: image-1787567182417.jpg -->

In absence of the e.m. radiation.

$$
\hat{\mathscr{H}}_{\mathrm{int}}
=\sum_{\bar{n},s}
\underbrace{
\frac em\sqrt{\frac{\hbar}{2\varepsilon_0V\omega_n}}
\hat{\bar{p}}\cdot\bar{\varepsilon}_{\bar{n} s}
}_{\hat V_{\bar{n} s}}
(\hat a_{\bar{n} s}+\hat a_{\bar{n} s}^{\dagger}).
$$

$$
\begin{aligned}
|\Phi_i\rangle
&=|\varepsilon_a\rangle\otimes|\{m_\alpha\}\rangle, \\
|\Phi_f\rangle
&=|\varepsilon_b\rangle\otimes|\{m'_\alpha\}\rangle.
\end{aligned}
$$

$$
\begin{aligned}
\langle\Phi_f|\hat{\mathscr{H}}_{\mathrm{int}}|\Phi_i\rangle
&=\sum_{\bar{n},s}
\underbrace{\langle\varepsilon_a|\hat V_{\bar{n} s}|\varepsilon_b\rangle}_{V_{\bar{n} s}^{ab}}
\\
&\quad\otimes
\langle\{m'_\alpha\}|(\hat a_{\bar{n} s}+\hat a_{\bar{n} s}^{\dagger})|\{m_\alpha\}\rangle.
\end{aligned}
$$

### Page 4

<!-- source: image-1787567906494.jpg -->

We consider now the absorption case, i.e.

$$
|\Phi_f\rangle
=|\varepsilon_b\rangle\otimes
|m_{\alpha_1},\ldots,m_{\alpha_i}-1,\ldots\rangle.
$$

$$
\begin{aligned}
\langle\Phi_f|\hat{\mathscr{H}}_{\mathrm{int}}|\Phi_i\rangle_{\mathrm{abs}}
&=\sum_{\alpha_i}V_{\alpha_i}^{ab}\otimes\Big(
\sqrt{m_{\alpha_i}}
\langle m_{\alpha_1},\ldots,m_{\alpha_i}-1,\ldots|
m_{\alpha_1},\ldots,m_{\alpha_i}-1,\ldots\rangle\\
&+\sqrt{m_{\alpha_i}+1}
\langle\ldots,m_{\alpha_i}-1,\ldots|
\ldots,m_{\alpha_i}+1,\ldots\rangle
\Big)
=
\end{aligned}
$$

## Block 3 — Selection rules

### Page 1

<!-- source: image-1787585453871.jpg -->

**Block 3 — Selection rules.**

Now an explicit calculation. Consider

$$
\begin{aligned}
\langle\varepsilon_a|\hat{\bar{r}}|\varepsilon_b\rangle
&=\langle\varepsilon_a|\hat{\mathbb 1}\hat{\bar{r}}|\varepsilon_b\rangle \\
&=\int d\bar{r}\,\psi_a^*(\bar{r})\,\bar{r}\,\psi_b(\bar{r}).
\end{aligned}
$$

Hydrogen states:

$$
|\varepsilon_a\rangle=|n,m,l\rangle
$$

eigenstate of $\hat{\mathscr{H}}$ atom.

$$
\begin{aligned}
\langle\bar{r}|\varepsilon_a\rangle
&=\psi_{nml}(\bar{r}) \\
&=R_{nl}(r)Y_{lm}(\theta,\phi).
\end{aligned}
$$

$$
n=1,\ldots,\infty,
\qquad l=0,\ldots,n-1,
\qquad m=0,\pm1,\ldots,\pm l.
$$

$$
\hat{\mathscr{H}}_{\mathrm{mat}}
=\frac{\hat{\bar{p}}^2}{2m}-k_e\frac{e^2}{|\hat{\bar{r}}|}.
$$

Recall:

$$
[\hat{\mathscr{H}}_{\mathrm{mat}},\hat L_i]=0,
$$

$$
[\hat{\mathscr{H}},\hat L^2]=[\hat{\mathscr{H}},\hat L_z]=[\hat L^2,\hat L_z]=0.
$$

Common eigenbasis.

### Page 2

<!-- source: image-1787585889823.jpg -->

$$
\hat L^2=\sum_i\hat L_i^2,
\qquad
[\hat L_i,\hat L_j]=i\hbar\sum_k\varepsilon_{ijk}\hat L_k.
$$

They form a Lie algebra.

$$
\hat{\bar{L}}=\hat{\bar{r}}\wedge\hat{\bar{p}}.
$$

Position representation:

$$
\hat{\bar{L}}\longrightarrow-i\hbar\,\bar{r}\wedge\bar{\nabla}.
$$

The spherical harmonics are simultaneous eigenfunctions of $\hat L_z,\hat L^2$:

$$
\hat L^2Y_{lm}=\hbar^2l(l+1)Y_{lm},
$$

$$
\hat L_zY_{lm}=\hbar mY_{lm}.
$$

$$
\begin{aligned}
Y_{lm}(\theta,\phi)
&=\Theta_{lm}(\theta)\frac{1}{\sqrt{2\pi}}e^{im\phi} \\
&=\Theta(\phi)\Phi(\phi).
\end{aligned}
$$

### Page 3

<!-- source: image-1787586571087.jpg -->

After all these voyages in the memory lane, we can evaluate:

$$
\langle\varepsilon_b|\hat{\bar{r}}|\varepsilon_a\rangle
=\int d\bar{r}\,\bar{r}\,
\psi_{n_bl_bm_b}^{*}(\bar{r})\psi_{n_al_am_a}(\bar{r}).
$$

$$
\hat{\bar{r}}=r\bar{u}_r(\theta,\phi).
$$

In polar coordinates:

$$
d\bar{r}=dr\,d\theta\,d\phi\,r^2\sin\theta.
$$

$$
\begin{aligned}
\langle\varepsilon_b|\hat{\bar{r}}|\varepsilon_a\rangle
&=\left[
\int dr\,r^3R_{n_bl_b}^{*}(r)R_{n_al_a}(r)
\right]\\
&\times\left[
\int\!\!\int d\theta\,d\phi\,\sin\theta\,
\bar{u}_r(\theta,\phi)
Y_{l_bm_b}^{*}(\theta,\phi)Y_{l_am_a}(\theta,\phi)
\right]\\
&=I_{\mathrm{radial}}I_{\mathrm{angular}}.
\end{aligned}
$$

### Page 4

<!-- source: image-1787587822966.jpg -->

Let's evaluate specifically $I_{\mathrm{angular}}$.

$$
I_{\mathrm{ang}}
=\int d\Omega\,
Y_{l_bm_b}^{*}(\theta,\phi)
\bar{u}_r(\theta,\phi)
Y_{l_am_a}(\theta,\phi).
$$

$$
\bar{u}_r
=\sin\theta\cos\phi\,\bar{u}_x
+\sin\theta\sin\phi\,\bar{u}_y
+\cos\theta\,\bar{u}_z.
$$

Recall:

$$
Y_{1,0}=\sqrt{\frac{3}{4\pi}}\cos\theta=C_0\cos\theta,
$$

$$
\begin{aligned}
Y_{1,\pm1}&=\sqrt{\frac{3}{8\pi}}\sin\theta\,e^{\pm i\phi} \\
&=C_1\sin\theta\,e^{\pm i\phi}.
\end{aligned}
$$

$$
Y_{1,1}=C_1\sin\theta(\cos\phi+i\sin\phi),
$$

$$
Y_{1,-1}=C_1\sin\theta(\cos\phi-i\sin\phi).
$$

So:

$$
\sin\theta\cos\phi=\frac{Y_{1,1}+Y_{1,-1}}{2C_1},
$$

$$
\sin\theta\sin\phi=\frac{Y_{1,1}-Y_{1,-1}}{2iC_1}.
$$

$$
\bar{u}_r
=\frac{1}{2C_1}
\left[
(Y_{1,1}+Y_{1,-1})\bar{u}_x
-i(Y_{1,1}-Y_{1,-1})\bar{u}_y
\right]
+\frac1{C_0}Y_{1,0}\bar{u}_z.
$$

## Block 4 — Continuation of selection rules

### Board 1

<!-- source: image-1787592476086.jpg -->

$$
I_{\mathrm{ang}}
=\int d\Omega\,
Y_{l_bm_b}^{*}(\theta,\phi)
\bar{u}_r(\theta,\phi)
Y_{l_am_a}(\theta,\phi).
$$

$$
\bar{u}_r
=\frac{1}{2C_1}
\left[
(Y_{1,1}+Y_{1,-1})\bar{u}_x
-i(Y_{1,1}-Y_{1,-1})\bar{u}_y
\right]
+\frac1{C_0}Y_{1,0}\bar{u}_z.
$$

We have then integrals of the type

$$
\int d\Omega\,Y_{l_bm_b}^{*}Y_{1,q}Y_{l_am_a},
\qquad q=0,+1,-1.
$$

Recall

$$
Y_{lm}=\Theta_{lm}(\theta)\frac1{\sqrt{2\pi}}e^{im\phi}.
$$

The $\phi$ part:

$$
\propto\int_0^{2\pi}d\phi\,
e^{-i(m_b-m_a-q)\phi}
$$

$$
\begin{aligned}
&=\left[
\frac{e^{-i(m_b-m_a-q)\phi}}{-i(m_b-m_a-q)}
\right]_0^{2\pi} \\
&=\frac{e^{-ih2\pi}-1}{-ih}=0
\qquad(h\ne0).
\end{aligned}
$$

If $$h=0$$:

$$
\int d\phi=2\pi.
$$
