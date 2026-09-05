---
title: Study Notes — 2026-08-25
date: 2026-08-25
tags:
  - study-notes
  - performance-lab
  - transcription
  - physics
status: transcribed-from-submitted-images
---

# Study Notes — 2026-08-25

> [!note] Transcription conventions
> The wording, spelling, capitalization, intermediate steps, apparent mistakes, question marks, and corrections have been preserved as closely as possible. Crossed-out writing is shown as `~~crossed out~~`; editorial descriptions are enclosed in square brackets. Equations have been typeset in LaTeX for Obsidian. A source-image comment precedes every submitted page or board.
> Scalar operators carry a hat; spatial vectors are written as $\bar{a}$; vector operators as $\hat{\bar{a}}$; and unit vectors as $\bar{e}_i$ or $\bar{u}_i$. Hilbert-space kets retain their standard notation.
> Hamiltonians use a script H: $\mathscr{H}$ classically and $\hat{\mathscr{H}}$ when they are quantum operators. Hilbert spaces retain $\mathcal{H}$.
> Complete equations embedded in prose use `$$...$$`; standalone equations use display-math blocks. Multiline derivations use `\begin{aligned}` with explicit `&` alignment points and `\\` row breaks.

## Block 1

### Page 1

<!-- source: image-1787644026283.jpg -->

**25/08. Block 1. End of selection rules:**

$$
\propto\int d\Omega\,
Y_{l_bm_b}^{*}Y_{1q}Y_{l_am_a}.
$$

Expand the product:

$$
Y_{1q}Y_{l_am_a}=\sum_{L,M}Y_{L,M},
$$

with

$$
|1-l_a|\leq L\leq1+l_a.
$$

Therefore, using orthogonality,

$$
\sum_{L,M}\int d\Omega\,Y_{l_bm_b}^{*}Y_{L,M}
=\sum_{L,M}\delta_{l_b,L}\delta_{m_b,M},
$$

so

$$
|1-l_a|\leq l_b\leq1+l_a.
$$

Parity:

$$
I=\int d\Omega\,
(-1)^{l_b+1+l_a}
Y_{l_bm_b}^{*}Y_{1q}Y_{l_am_a}.
$$

We need

$$
l_a+l_b+1=2n,
$$

as we are integrating on a symmetric set. Hence $l_b-l_a\ne0$.

$$
\Delta l=\pm1.
$$

### Page 2

<!-- source: image-1787645707572.jpg -->

**Atomic polarizability.**

Let's start from:

$$
i\hbar\partial_t|\psi\rangle
=(\hat{\mathscr{H}}_{\mathrm{mat}}+\hat{\mathscr{H}}_{\mathrm{int}})|\psi\rangle.
$$

Introduce

$$
|\psi\rangle
=|\Phi\rangle
e^{-\frac{ie}{\hbar}\bar{A}(t)\cdot\hat{\bar{r}}}.
$$

$\bar{A}$ is already in the dipole approximation (uniform over the atomic distance).

Recall

$$
\hat{\mathscr{H}}_{\mathrm{int}}\simeq\frac em\bar{A}\cdot\hat{\bar{p}}.
$$

$$
i\hbar\partial_t
\left(
|\Phi\rangle e^{-\frac{ie}{\hbar}\bar{A}(t)\cdot\hat{\bar{r}}}
\right)
=(\hat{\mathscr{H}}_{\mathrm{mat}}+\hat{\mathscr{H}}_{\mathrm{int}})
|\Phi\rangle e^{-\frac{ie}{\hbar}\bar{A}(t)\cdot\hat{\bar{r}}}.
$$

$$
i\hbar\,\partial_t|\Phi\rangle
+e\,\partial_t\bar{A}\cdot\hat{\bar{r}}\,|\Phi\rangle
=(\hat{\mathscr{H}}_{\mathrm{mat}}+\hat{\mathscr{H}}_{\mathrm{int}})|\Phi\rangle.
$$

Thus

$$
i\hbar\partial_t|\Phi\rangle
=\left(\hat{\mathscr{H}}_{\mathrm{mat}}+\hat{\mathscr{H}}_{\mathrm{int}}+e\bar{E}\cdot\hat{\bar{r}}\right)|\Phi\rangle,
$$

where $$\bar{E}=-\partial_t\bar{A}$$, as $$\phi=0$$.

### Page 3

<!-- source: image-1787646619778.jpg -->

We have then

$$
\hat{\mathscr{H}}_0=\hat{\mathscr{H}}_{\mathrm{mat}}+\frac em\bar{E}\cdot\hat{\bar{r}},
$$

while perturbation term is $\hat{\mathscr{H}}_{\mathrm{int}}$.

Already saw:

$$
\begin{aligned}
\left\langle\varepsilon_b\left|\frac{\hat{\bar{p}}}{m}\right|\varepsilon_a\right\rangle
&=i\omega_{ab}\langle\varepsilon_b|\hat{\bar{r}}|\varepsilon_a\rangle \\
&=i\omega_{ab}\bar{r}_{ab}.
\end{aligned}
$$

$$
\bar{E}=-\partial_t\bar{A}.
$$

Quantized $\hat{\bar{E}}$:

$$
\hat{\bar{E}}
=\sum_{\bar{n},s}
\sqrt{\frac{\hbar\omega_n}{2\varepsilon_0V}}
\bar{\varepsilon}_{\bar{n} s}
(\hat a_{\bar{n} s}-\hat a_{\bar{n} s}^{\dagger}).
$$

Define

$$
\hat{\bar{d}}=-e\hat{\bar{r}}.
$$

$$
\hat P\hat{\bar{r}}\hat P^{-1}=-\hat{\bar{r}}.
$$

Then

$$
\begin{aligned}
\langle n|\hat{\bar{d}}|n\rangle
&=\langle n|\hat P^{-1}\hat P\hat{\bar{d}}\hat P^{-1}\hat P|n\rangle\\
&=-\langle n|\hat{\bar{d}}|n\rangle,
\end{aligned}
$$

hence

$$
\langle n|\hat{\bar{d}}|n\rangle=0.
$$

We can do this only because

$$
\hat P\hat{\mathscr{H}}_0\hat P^{-1}=\hat{\mathscr{H}}_0.
$$

### Page 4

<!-- source: image-1787647343708.jpg -->

**Classical approach**

$$
\langle\bar{d}(t)\rangle
=\int_{\mathbb R}dt'\,\alpha(t-t')\bar{E}(t').
$$

$$
\langle\bar{d}(\omega)\rangle
=\alpha(\omega)\bar{E}(\omega).
$$

![[2026-08-25_gaussian_sphere.svg]]

*Sketch: a Gaussian sphere of radius $r$ inside the uniformly charged electron cloud.*

$$
\bar{\nabla}\cdot\bar{E}=4\pi k_e\rho.
$$

$$
\begin{aligned}
E\,4\pi r^2
&=\frac{Q_{\mathrm{int}}}{\varepsilon_0} \\
&=\frac{\rho}{\varepsilon_0}\frac43\pi r^3,
\qquad
\rho=\frac qV.
\end{aligned}
$$

$$
\begin{aligned}
E&=\frac{\rho r}{3\varepsilon_0} \\
&=\frac{er}{3\varepsilon_0V}.
\end{aligned}
$$

$$
\begin{aligned}
F&=qE \\
&\longrightarrow
\frac{e^2}{3\varepsilon_0V}\,r.
\end{aligned}
$$

## Block 2 — Classical and quantum approaches

### Page 1

<!-- source: image-1787650918125.jpg -->

**Block 2. Classical approach. Let's evaluate the cloud field.**

![[2026-08-25_displaced_electron_cloud.svg]]

*Sketch: cloud centre, nucleus, $\bar{R}$, $\bar{r}$, $\bar{r}'$, and the external field $\bar{E}_{\mathrm{ext}}$.*

$$
\begin{aligned}
E_c\,4\pi r^2
&=\frac{Q_{\mathrm{int}}}{\varepsilon_0} \\
&=\frac{\rho V}{\varepsilon_0} \\
&=-\frac{e}{V_{\mathrm{tot}}}\frac{V}{\varepsilon_0}.
\end{aligned}
$$

$$
\bar{E}_c=-\frac{e}{3V_{\mathrm{tot}}\varepsilon_0}\bar{r}
$$

respect cloud center.

Translate to nucleus frame:

$$
\bar{r}+\bar{R}=\bar{r}'
\quad\longrightarrow\quad
\bar{r}=\bar{r}'-\bar{R}.
$$

Force on nucleus at $$\bar{r}'=0$$:

$$
\begin{aligned}
\bar{F}_N&=e\bar{E}(\bar{r}'=0) \\
&=\frac{e^2}{3V_{\mathrm{tot}}\varepsilon_0}\bar{R}.
\end{aligned}
$$

$$
\bar{F}_N=-\bar{F}_c
$$

as $$\sum\bar{F}=0$$.

The cloud equation:

$$
m\ddot{\bar{R}}(t)
=-\frac{e^2}{3V_{\mathrm{tot}}\varepsilon_0}\bar{R}(t)
-e\bar{E}_{\mathrm{ext}}(t).
$$

### Page 2

<!-- source: image-1787651365006.jpg -->

$$
-m\omega^2\bar{R}(\omega)
=-\frac{e^2}{3V_{\mathrm{tot}}\varepsilon_0}\bar{R}(\omega)
-e\bar{E}(\omega).
$$

Define

$$
\frac{e^2}{m}\frac{1}{3V_{\mathrm{tot}}\varepsilon_0}
\equiv\omega_0^2.
$$

$$
\bar{R}(\omega)
=-\frac em\frac{1}{\omega_0^2-\omega^2}\bar{E}(\omega)
$$

$$
=\underbrace{
\frac1m\frac{1}{\omega_0^2-\omega^2}
}_{\alpha(\omega)}
\underbrace{[-e\bar{E}]}_{\bar{d}(\omega)}.
$$

If $$\omega\ll\omega_0$$, static limit:

$$
\alpha(0)=3\varepsilon_0V_{\mathrm{tot}}.
$$

### Page 3

<!-- source: image-1787651788102.jpg -->

**Quantum approach**

Already seen:

$$
\langle n|\hat{\bar{d}}|n\rangle=\langle\hat{\bar{d}}\rangle=0.
$$

Let's analyze when $\hat{\bar{d}}$ is modified by $\bar{E}_{\mathrm{ext}}(t)$.

We want $\langle\hat{\bar{d}}\rangle$ in

$$
\hat{\mathscr{H}}=\hat{\mathscr{H}}_0+\hat V(t),
\qquad
\hat V(t)=e\bar{E}\cdot\hat{\bar{r}}.
$$

In the interaction picture, the exact integral equation is

$$
|\psi_I(t)\rangle
=|\psi_I(t_0)\rangle
-\frac{i}{\hbar}\int_{t_0}^{t}dt'\,\hat V_I(t')|\psi_I(t')\rangle.
$$

$$
\hat V_I(t)=\hat U^{\dagger}(t,t_0)\hat V(t)\hat U(t,t_0).
$$

Starting from $$|\psi_I(t_0)\rangle=|0\rangle$$, at first order:

$$
|\psi_I(t)\rangle
\simeq|0\rangle
-\frac{i}{\hbar}\int_{-\infty}^{t}dt'\,\hat V_I(t')|0\rangle.
$$

### Page 4

<!-- source: image-1787652223758.jpg -->

Now consider

$$
\langle\psi_I(t)|\hat{\bar{r}}_I(t)|\psi_I(t)\rangle
$$

$$
=\left(
\langle0|-\frac{i}{\hbar}\int_{-\infty}^{t}dt'\,\langle0|\hat V_I^{\dagger}(t')
\right)
\hat{\bar{r}}_I(t)
\left(
|0\rangle-\frac{i}{\hbar}\int_{-\infty}^{t}dt''\,\hat V_I(t'')|0\rangle
\right)
$$

$$
\begin{aligned}
&=\langle0|\hat{\bar{r}}_I(t)|0\rangle
-\frac{i}{\hbar}\int dt'\,\langle0|\hat V_I(t')\hat{\bar{r}}_I(t)|0\rangle\\
&-\frac{i}{\hbar}\int dt'\,\langle0|\hat{\bar{r}}_I(t)\hat V_I^{\dagger}(t')|0\rangle\\
&-\frac1{\hbar}\int\!\!\int dt'\,dt''\,
\langle0|\hat V_I^{\dagger}(t')\hat{\bar{r}}_I(t)\hat V_I(t'')|0\rangle.
\end{aligned}
$$

## Block 3 — Response function

### Page 1

<!-- source: image-1787665126165.jpg -->

**Block 3.**

$$
\begin{aligned}
\langle\psi_I(t)|\hat{\bar{r}}_I(t)|\psi_I(t)\rangle
&=\left(\langle0|\left(\hat{\mathbb 1}+\frac{i}{\hbar}\int \hat V^{\dagger}\right)\right)
\hat{\bar{r}}_I(t)
\left(\left(\hat{\mathbb 1}-\frac{i}{\hbar}\int \hat V\right)|0\rangle\right)\\
&=\langle0|\hat{\bar{r}}_I(t)|0\rangle
+\frac{i}{\hbar}\int dt'\,
\langle0|\hat V^{\dagger}(t')\hat{\bar{r}}_I(t)-\hat{\bar{r}}_I(t)\hat V(t')|0\rangle\\
&+\frac1{\hbar^2}\int\!\!\int dt'\,dt''\,
\langle0|\hat V^{\dagger}(t')\hat{\bar{r}}_I(t)\hat V(t'')|0\rangle.
\end{aligned}
$$

Consider $$\hat V^{\dagger}=\hat V$$ and $$\langle0|\hat{\bar{r}}_I|0\rangle=0$$. So:

$$
\langle\hat{\bar{r}}_I\rangle
=\frac{i}{\hbar}\int dt'\,
\langle0|[\hat V,\hat{\bar{r}}_I]|0\rangle+O(\hat V^2).
$$

Omitting the square term:

$$
\langle\hat{\bar{r}}_I\rangle
=-\frac{i}{\hbar}\int dt'\,
\langle0|[\hat{\bar{r}}_I,\hat V]|0\rangle.
$$

### Page 2

<!-- source: image-1787665673440.jpg -->

Then

$$
\begin{aligned}
\hat V&\longrightarrow \hat V_I \\
&=e\bar{E}(t)\cdot\hat{\bar{r}}_I(t) \\
&=-\hat{\bar{d}}_I(t)\cdot\bar{E}.
\end{aligned}
$$

$$
\begin{aligned}
\hat V_I&=\hat U\hat V\hat U^{\dagger} \\
&=\hat U(e\bar{E}\cdot\hat{\bar{r}})\hat U^{\dagger} \\
&=e\bar{E}\cdot \hat U\hat{\bar{r}}\hat U^{\dagger} \\
&=e\bar{E}\cdot\hat{\bar{r}}_I.
\end{aligned}
$$

Then

$$
\langle\hat{\bar{r}}_I\rangle
=-\frac{ie}{\hbar}\int dt'\,
\langle0|[\hat{\bar{r}}_I(t),\bar{E}(t')\cdot\hat{\bar{r}}_I(t')]|0\rangle
$$

$$
=-\frac{ie}{\hbar}\int dt'\,
\langle0|[\hat{\bar{r}}_I(t),\hat{\bar{r}}_I(t')]|0\rangle\cdot\bar{E}(t').
$$

Leading to

$$
\langle\hat{\bar{d}}\rangle
=\int dt'\,
\underbrace{
-\frac{ie^2}{\hbar}
\langle0|[\hat{\bar{r}}_I(t),\hat{\bar{r}}_I(t')]|0\rangle
}_{\alpha(t-t')}
\bar{E}(t').
$$

### Page 3

<!-- source: image-1787667456514.jpg -->

Fixing the signs.

$$
\langle\hat{\bar{d}}\rangle
=\int_{-\infty}^{t}dt'\,
+\frac{ie^2}{\hbar}
\langle0|[\hat{\bar{r}}_I(t),\hat{\bar{r}}_I(t')]|0\rangle
\cdot\bar{E}(t').
$$

Extending the integral range:

$$
\int_{-\infty}^{t}dt'
=\int_{\mathbb R}dt'\,\theta(t-t').
$$

We have

$$
\langle\hat{\bar{d}}\rangle
=\int_{\mathbb R}dt'\,
\underbrace{
\theta(t-t')\frac{ie^2}{\hbar}
\langle0|[\hat{\bar{r}}_I(t),\hat{\bar{r}}_I(t')]|0\rangle
}_{\alpha(t-t')}
\cdot\bar{E}(t').
$$

Where $\alpha$ is a matrix, i.e.

$$
\langle\hat d_i\rangle
=\int_{\mathbb R}\sum_j\alpha_{ij}E_j.
$$

### Page 4

<!-- source: image-1787667466116.jpg -->

Continuing now, consider $$\tau=t-t'$$.

Consider now

$$
\alpha(\tau)=\frac13(\alpha_{xx}+\alpha_{yy}+\alpha_{zz}).
$$

So that

$$
(\alpha_{ij})=\alpha(\tau)\hat{\mathbb 1}
\quad\longleftrightarrow\quad
\alpha_{ij}=\alpha(\tau)\delta_{ij}.
$$

Clearly

$$
\begin{aligned}
\alpha(\tau)&=\frac13\operatorname{Tr}\alpha \\
&=\frac13\sum_i\alpha_{ii}=\alpha_{ii}.
\end{aligned}
$$

~~Leading to~~

$$
\alpha(\tau)=\frac13\sum_i\alpha_{ii}
$$

$$
=\frac13\sum_i\frac{ie^2}{\hbar}
\langle0|[\hat r_i(\tau),\hat r_i(0)]|0\rangle\theta(\tau)
$$

$$
=\cdots\frac{ie^2}{\hbar}
\sum_m|\bar{r}_{0m}|^2
\left(e^{-i\omega_{m0}\tau}-e^{+i\omega_{m0}\tau}\right)
\theta(\tau).
$$

## Block 4 — Lifetime

### Board 1

<!-- source: image-1787668491801.jpg -->

**Life time...**

![[2026-08-25_single_decay.svg]]

*Diagram: transition from level $B$ to level $A$, emitting $\hbar\omega$.*

$$
\frac{dN_B}{dt}=-W_{b\to a}^{\mathrm{spont}}N_B
$$

$$
=-A_{ba}N_B.
$$

Clearly

$$
N_B=N_{0B}e^{-A_{ba}t},
\qquad N_{0B}=N_B(t=0).
$$

Let's call

$$
A_{ba}=\frac1\tau
$$

$\tau$ is called life time of $|\varepsilon_b\rangle$.

Say we have:

![[2026-08-25_multiple_decay_channels.svg]]

*Diagram: one upper level $B$ with several downward transitions to lower levels $A_i$.*

$$
\frac{dN_B}{dt}=-\sum_iA_i^{ab}N_b
$$

$$
\longrightarrow
N_B=N_{0B}e^{-\sum_iA_i^{ab}t}
$$

$$
\longrightarrow
\tau_b=\left(\sum_iA_i^{ab}\right)^{-1}.
$$

Note from this, if we define

$$
\mathbb P(\text{electron stays in }|\varepsilon_b\rangle)(t)
=\frac{N_b(t)}{N_0},
$$

then

$$
N_B(t)=e^{-t/\tau}N_{0B}
\quad\longrightarrow\quad
\mathbb P(t)=e^{-t/\tau}\mathbb P(0).
$$

## Block 5 — Natural linewidth and decay amplitudes

### Board 1

<!-- source: image-1787671621443.jpg -->

From

$$
\Delta E\,\Delta t\sim\hbar
$$

$$
\longrightarrow\quad
\Delta E\sim\frac{\hbar}{\tau}
$$

natural line width.

Recalling:

$$
|\psi_I(t)\rangle
=|\psi_I(0)\rangle
-\frac{i}{\hbar}\int_0^t dt'\,\hat V_I(t')|\psi_I(t')\rangle.
$$

Consider $$|\Phi_I(0)\rangle=|\varepsilon_i\rangle$$ and project on $\langle\varepsilon_m|$.

$$
\begin{aligned}
\langle\varepsilon_m|\psi_I(t)\rangle
&=\delta_{m,i}
-\frac{i}{\hbar}\int dt'\,
\langle\varepsilon_m|\hat V_I(t')\hat{\mathbb 1}|\psi_I(t')\rangle\\
&=\delta_{m,i}
-\frac{i}{\hbar}\sum_n\int dt'\,
\langle\varepsilon_m|\hat V_I(t')|\varepsilon_n\rangle
\langle\varepsilon_n|\psi_I(t')\rangle.
\end{aligned}
$$

Leading to:

$$
C_m(t)=\delta_{m,i}
-\frac{i}{\hbar}\sum_n\int dt'\,
\langle\varepsilon_m|\hat V_I(t')|\varepsilon_n\rangle C_n(t')
$$

$$
=\delta_{m,i}
-\frac{i}{\hbar}\int dt'\,
\langle\varepsilon_m|\hat V_I(t')|\varepsilon_i\rangle C_i(t')
-\frac{i}{\hbar}\sum_{n\ne i}\int dt'\,
\langle\varepsilon_m|\hat V_I(t')|\varepsilon_n\rangle C_n(t').
$$

### Board 2

<!-- source: image-1787674148021.jpg -->

Consider

$$
|\varepsilon_i\rangle
=|\varepsilon_a\rangle\otimes|\{0\}\rangle,
$$

$$
|\varepsilon_f\rangle
=|\varepsilon_m\rangle\otimes|\{0\}+\bar{e}_{\alpha_i}\rangle.
$$

$$
\hat{\mathscr{H}}_{\mathrm{int}}
=\sum_{\bar{n},s}\hat V_{\bar{n} s}
(\hat a_{\bar{n} s}+\hat a_{\bar{n} s}^{\dagger}).
$$

$$
\hat V_I(t)=\hat U\hat{\mathscr{H}}_{\mathrm{int}}\hat U^{\dagger}.
$$

$$
C_f(t)
=-\frac{i}{\hbar}\int_0^t dt'\,
\langle\varepsilon_f|\hat V_I(t')|\varepsilon_i\rangle C_i(t')
$$

$$
=-\frac{i}{\hbar}
\langle\varepsilon_f|\hat{\mathscr{H}}_{\mathrm{int}}|\varepsilon_i\rangle
\int dt'\,
e^{+i\left(\frac{\varepsilon_a-\varepsilon_m}{\hbar}+\omega\right)t'}
C_i(t').
$$

$$
\begin{aligned}
\langle\varepsilon_f|\hat{\mathscr{H}}_{\mathrm{int}}|\varepsilon_i\rangle
&=\sum_{\bar{k},s}
\langle\varepsilon_b|\hat V_{\bar{n} s}|\varepsilon_a\rangle
\otimes\sum_\alpha
\langle\{0\}|(\hat a_\alpha+\hat a_\alpha^{\dagger})
|\{0\}+\bar{e}_{\alpha_i}\rangle\\
&=\text{``}\otimes
\end{aligned}
$$
