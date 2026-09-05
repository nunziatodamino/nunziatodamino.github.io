---
title: Study Notes — 2026-08-22
date: 2026-08-22
tags:
  - study-notes
  - performance-lab
  - transcription
  - physics
status: transcribed-from-submitted-images
---

# Study Notes — 2026-08-22

> [!note] Transcription conventions
> The wording, spelling, capitalization, intermediate steps, apparent mistakes, question marks, and corrections have been preserved as closely as possible. Crossed-out writing is shown as `~~crossed out~~`; editorial descriptions are enclosed in square brackets. Equations have been typeset in LaTeX for Obsidian. A source-image comment precedes every submitted page or board.
> Scalar operators carry a hat; spatial vectors are written as $\bar{a}$; vector operators as $\hat{\bar{a}}$; and unit vectors as $\bar{e}_i$ or $\bar{u}_i$. Hilbert-space kets retain their standard notation.
> Hamiltonians use a script H: $\mathscr{H}$ classically and $\hat{\mathscr{H}}$ when they are quantum operators. Hilbert spaces retain $\mathcal{H}$.
> Complete equations embedded in prose use `$$...$$`; standalone equations use display-math blocks. Multiline derivations use `\begin{aligned}` with explicit `&` alignment points and `\\` row breaks.

## Block 1 — Dipole approximation

### Board 1

<!-- source: image-1787386156697.jpg -->

**Dipole approximation.**

Consider a system (a particle) with the following Hamiltonian:

$$
\hat{\mathscr{H}}
=\frac{\hat{\bar{p}}_a^{2}}{2m}+\hat V_{\mathrm{Coulomb}}+\hat{\mathscr{H}}_{\mathrm{rad}}
$$

$$
=\frac{1}{2m}\left(\hat{\bar{p}}-e\hat{\bar{A}}\right)^2
-k_e\frac{e^2}{\hat r}
+\sum_{\bar{n},s}\hbar\omega_n\hat N_{\bar{n},s}
$$

$$
=\underbrace{
\frac{\hat{\bar{p}}^{2}}{2m}-k_e\frac{e^2}{\hat r}
}_{\hat{\mathscr{H}}_{\mathrm{mat}}}
+\underbrace{
-\frac{e}{m}\hat{\bar{p}}\cdot\hat{\bar{A}}
+\frac{e^2}{2m}\hat{\bar{A}}^{2}
}_{\hat{\mathscr{H}}_{\mathrm{int}}}
+\underbrace{
\sum_{\bar{n},s}\hbar\omega_n\hat N_{\bar{n},s}
}_{\hat{\mathscr{H}}_{\mathrm{rad}}}
$$

So that

$$
\hat{\mathscr{H}}
=\hat{\mathscr{H}}_{\mathrm{mat}}
+\hat{\mathscr{H}}_{\mathrm{int}}
+\hat{\mathscr{H}}_{\mathrm{rad}}.
$$

This Hamiltonian operates on the Hilbert space:

$$
\mathcal{H}=\mathcal{H}_{\mathrm{atom}}\otimes\mathcal{F}.
$$

### Board 2

<!-- source: image-1787386864700.jpg -->

Is clear then that $\hat{\mathscr{H}}_{\mathrm{mat}}$ operates only on $\mathcal{H}_{\mathrm{atom}}$, $\hat{\mathscr{H}}_{\mathrm{rad}}$ only on $\mathcal{F}$ ($\mathcal{F}$ock space), while the interaction term is mixed.

In fact, given the expression of $\hat{\bar{A}}$ (**MONOCHROMATIC**):

$$
\hat{\bar{A}}(\bar{r},t)
=\sqrt{\frac{\hbar}{2\varepsilon_0V\omega}}\,
\bar{\varepsilon}
\left(
\hat a\,e^{i(\bar{k}\cdot\bar{r}-\omega t)}
-\hat a^\dagger e^{-i(\bar{k}\cdot\bar{r}-\omega t)}
\right)
$$

Is really better rewritten as:

$$
\hat{\bar{A}}(\bar{r},t)
=\sqrt{\frac{\hbar}{2\varepsilon_0V\omega}}\,
\bar{\varepsilon}
\left(
\hat a\otimes e^{i(\bar{k}\cdot\bar{r}-\omega t)}
-\hat a^\dagger\otimes e^{-i(\bar{k}\cdot\bar{r}-\omega t)}
\right)
$$

Given this clearer, let’s go back to the Hamiltonian. Specifically to $\hat{\mathscr{H}}_{\mathrm{int}}$:

$$
\hat{\mathscr{H}}_{\mathrm{int}}
=-\frac em\hat{\bar{p}}\cdot\hat{\bar{A}}
+\frac{e^2}{2m}\hat{\bar{A}}^{2}.
$$

### Board 3

<!-- source: image-1787387603251.jpg -->

Now we prove a small lemma. Given the Coulomb gauge $$(\bar{\nabla}\cdot\hat{\bar{A}}=0)$$:

$$
\bar{\nabla}\cdot\hat{\bar{A}}=0
\quad\longrightarrow\quad
[\hat{\bar{A}},\hat{\bar{P}}]=0.
$$

Proof: Consider

$$
|\Psi\rangle=|\psi\rangle_{\mathrm{atom}}\otimes|n\rangle.
$$

$$
\hat{\bar{A}}\cdot\hat{\bar{P}}|\Psi\rangle
=\hat{\bar{A}}\hat{\bar{P}}|\psi\rangle_{\mathrm{atom}}
\otimes\hat{\bar{A}}|n\rangle.
$$

$$
\hat{\bar{P}}\cdot\hat{\bar{A}}|\Psi\rangle
=\hat{\bar{P}}\hat{\bar{A}}|\psi\rangle_{\mathrm{atom}}
\otimes\hat{\bar{A}}|n\rangle.
$$

Project on $\langle\bar{r}|\otimes\hat{\mathbb 1}_{\mathrm{rad}}$.

$$
\langle\bar{r}|\hat{\bar{A}}\hat{\bar{P}}|\psi\rangle_{\mathrm{atom}}
\otimes\hat{\bar{A}}|n\rangle
$$

$$
\langle\bar{r}|\hat{\bar{P}}\hat{\bar{A}}|\psi\rangle_{\mathrm{atom}}
\otimes\hat{\bar{A}}|n\rangle.
$$

Given the definition of

$$
\hat{\bar{A}}
=C\left(\hat a e^{if(\bar{r})}-\hat a^\dagger e^{-if(\bar{r})}\right),
$$

$+$ Then

$$
\hat{\bar{A}}|\psi\rangle_{\mathrm{atom}}
=\bar{A}|\psi\rangle_{\mathrm{atom}}
$$

is like a scalar

### Page 1 — Replacement of the preceding proof

<!-- source: image-1787389087929.jpg -->

**Scratch the last proof.**

We want to prove

$$
\sum_i[\hat A_i,\hat P_i^{\mathrm{tot}}]=0
$$

$$
\left(\hat{\bar{P}}^{\mathrm{tot}}
=\hat{\bar{P}}\otimes\hat{\mathbb 1}_{\mathrm{rad}}\right).
$$

Consider

$$
\hat{\bar{A}}(\bar{r},t)
=C\bar{\varepsilon}
\left(
e^{i\bar{k}\cdot\bar{r}}\otimes\hat a
-e^{-i\bar{k}\cdot\bar{r}}\otimes\hat a^\dagger
\right).
$$

$$
[\hat A_j,\hat P_i^{\mathrm{tot}}]
=C\varepsilon_j
\left(
[e^{i\bar{k}\cdot\bar{r}},\hat P_i]\otimes\hat a
-[e^{-i\bar{k}\cdot\bar{r}},\hat P_i]\otimes\hat a^\dagger
\right).
$$

Using

$$
[f(\bar{r}),\hat P_i]
=i\hbar\,\partial_i f(\bar{r})
$$

$$
\begin{aligned}
[e^{i\bar{k}\cdot\bar{r}},\hat P_i]
&=i\hbar\,ik_i e^{i\bar{k}\cdot\bar{r}} \\
&=-\hbar k_i e^{i\bar{k}\cdot\bar{r}}.
\end{aligned}
$$

Analogously:

$$
[e^{-i\bar{k}\cdot\bar{r}},\hat P_i]
=\hbar k_i e^{-i\bar{k}\cdot\bar{r}}.
$$

In the end:

$$
[\hat A_j,\hat P_i^{\mathrm{tot}}]
=C\hbar\varepsilon_j
\left(
-k_i e^{i\bar{k}\cdot\bar{r}}\otimes\hat a
-k_i e^{-i\bar{k}\cdot\bar{r}}\otimes\hat a^\dagger
\right).
$$

### Page 2

<!-- source: image-1787389097195.jpg -->

So in the end

$$
\sum_i[\ldots]
=-C\hbar\sum_i\underbrace{\varepsilon_i k_i}_{\bar{k}\cdot\bar{\varepsilon}=0}
\left(
e^{i\bar{k}\cdot\bar{r}}\otimes\hat a
+e^{-i\bar{k}\cdot\bar{r}}\otimes\hat a^\dagger
\right)
$$

As $$\bar{k}\cdot\bar{\varepsilon}=0\iff\bar{\nabla}\cdot\hat{\bar{A}}=0$$.

Finally we can write

$$
\hat{\mathscr{H}}
=\underbrace{\hat{\mathscr{H}}_{\mathrm{mat}}+\hat{\mathscr{H}}_{\mathrm{rad}}}_{\hat{\mathscr{H}}_0}
+\underbrace{\frac em\hat{\bar{A}}\cdot\hat{\bar{P}}}_{\hat{\mathscr{H}}_1}.
$$

We swapped $$\hat{\bar{A}}\cdot\hat{\bar{P}}=\hat{\bar{P}}\cdot\hat{\bar{A}}$$ and considered small $\hat{\bar{A}}$ limit $$\rightarrow\hat{\bar{A}}^{2}\simeq0$$.

In this way $\hat{\mathscr{H}}_1$ is a ~~contribution~~ perturbation of the $\hat{\mathscr{H}}_0$ Hamiltonian.

### Page 3

<!-- source: image-1787389103148.jpg -->

Recall:

$$
\hat{\mathscr{H}}_{\mathrm{mat}}|\varepsilon_a\rangle
=\varepsilon_a|\varepsilon_a\rangle.
$$

$$
\varepsilon_a=-\frac{\varepsilon_0}{n_a^2}
$$

$$
\varepsilon_0=13{,}6\ \mathrm{eV}
$$

$$
\varepsilon_0=\frac{m_ec^2\alpha^2}{2}
$$

$$
\alpha=\frac{k_ee^2}{\hbar c}\simeq\frac1{137}.
$$

## Block 2 — Absorption and emission

### Board 4

<!-- source: image-1787410548802.jpg -->

**Absorption and emission.**

Consider the special case:

$$
|\varepsilon_i\rangle
=|\varepsilon_a\rangle\otimes|m_{\bar{k} s}\rangle
$$

$$
|\varepsilon_f\rangle
=|\varepsilon_b\rangle\otimes|m'_{\bar{k} s}\rangle.
$$

Then, recalling Fermi Golden Rule:

$$
W_{i\to f}
=\frac{2\pi}{\hbar}
\left|\langle\varepsilon_f|\hat{\mathscr{H}}_{\mathrm{int}}|\varepsilon_i\rangle\right|^2
\delta(\varepsilon_f-\varepsilon_i).
$$

Note that:

$$
\varepsilon_f-\varepsilon_i
=\varepsilon_b-\varepsilon_a
+(m'_{\bar{k} s}-m_{\bar{k} s})\hbar\omega_k.
$$

Now, given

$$
\hat{\mathscr{H}}_{\mathrm{int}}
=\frac em\hat{\bar{A}}\cdot\hat{\bar{P}}
$$

$$
\hat{\bar{A}}
\simeq
\sqrt{\frac{\hbar}{2\varepsilon_0V\omega_k}}\,
\bar{\varepsilon}_{\bar{k} s}
\left(
\underbrace{\hat a e^{-i\omega t}}_{\hat a(t)}
-\underbrace{\hat a^\dagger e^{+i\omega t}}_{\hat a^\dagger(t)}
\right)
$$

In the dipole approx.

### Board 5

<!-- source: image-1787411294793.jpg -->

We have:

$$
W_{i\to f}
=\frac{2\pi}{\hbar}\frac{e^2}{m^2}
\frac{\hbar}{2\varepsilon_0V\omega}
\left|
\langle\varepsilon_f|
\hat{\bar{P}}\cdot\bar{\varepsilon}
(\hat a(t)-\hat a^\dagger(t))
|\varepsilon_i\rangle
\right|^2
\delta\!\left(\varepsilon_b-\varepsilon_a+\hbar\omega(m'-m)\right).
$$

Recalling:

$$
\hat a|m\rangle=\sqrt m\,|m-1\rangle
$$

$$
\hat a^\dagger|m\rangle=\sqrt{m+1}\,|m+1\rangle.
$$

$$
|\varepsilon_i\rangle=|\varepsilon_a\rangle\otimes|m\rangle
$$

$$
\left(\langle\varepsilon_b|\otimes\langle m'|\right)
\left(\hat{\bar{P}}\cdot\bar{\varepsilon}(\hat a-\hat a^\dagger)\right)
\left(|\varepsilon_a\rangle\otimes|m\rangle\right)
=V_{i\to f}=
$$

$$
\langle\varepsilon_b|
\hat{\bar{P}}\cdot\bar{\varepsilon}
|\varepsilon_a\rangle
\otimes
\langle m'|\hat a-\hat a^\dagger|m\rangle
$$

$$
=\langle\varepsilon_b|
\hat{\bar{P}}\cdot\bar{\varepsilon}
|\varepsilon_a\rangle
\otimes
\left[
\sqrt m\,\delta_{m',m-1}
-\sqrt{m+1}\,\delta_{m',m+1}
\right]\hat{\mathbb 1}_{\mathrm{rad}}.
$$

We now distinguish 2 relevant cases:

### Board 6

<!-- source: image-1787412106206.jpg -->

**EMISSION** $$(m'=m+1)$$

$$
W_{i\to f}
=\frac{\pi e^2}{m^2\varepsilon_0V\omega}
\left|
\langle\varepsilon_b|
\hat{\bar{P}}\cdot\bar{\varepsilon}
|\varepsilon_a\rangle
\right|^2
(m+1)\,\delta(\varepsilon_f-\varepsilon_i)
$$

$$
\begin{cases}
m\ne0 & \text{stimulated},\\
m=0 & \text{spontaneous}.
\end{cases}
$$

**ABSORPTION** $$(m'=m-1)$$

$$
W_{i\to f}
=\frac{\pi e^2}{m^2\varepsilon_0V\omega}
\left|
\langle\varepsilon_b|
\hat{\bar{P}}\cdot\bar{\varepsilon}
|\varepsilon_a\rangle
\right|^2
m\,\delta(\varepsilon_f-\varepsilon_i).
$$

Now we evaluate explicitly:

$$
\langle\varepsilon_b|
\bar{\varepsilon}\cdot\hat{\bar{P}}
|\varepsilon_a\rangle=
$$

Using

$$
\begin{aligned}
\frac{\hat{\bar{P}}}m
&=\frac{d\hat{\bar{r}}}{dt} \\
&=-\frac{i}{\hbar}[\hat{\bar{r}},\hat{\mathscr{H}}_{\mathrm{mat}}]
\end{aligned}
$$

Heisenberg eq.

$$
=-\frac{i}{\hbar}\bar{\varepsilon}\cdot
\langle\varepsilon_b|
[\hat{\bar{r}},\hat{\mathscr{H}}_{\mathrm{mat}}]
|\varepsilon_a\rangle=
$$

$$
=-\frac{i}{\hbar}\bar{\varepsilon}\cdot
\langle\varepsilon_b|
\hat{\bar{r}}\hat{\mathscr{H}}_{\mathrm{mat}}
-\hat{\mathscr{H}}_{\mathrm{mat}}\hat{\bar{r}}
|\varepsilon_a\rangle
$$

$$
=-\frac{i}{\hbar}(\varepsilon_a-\varepsilon_b)
\bar{\varepsilon}\cdot
\underbrace{\langle\varepsilon_b|\hat{\bar{r}}|\varepsilon_a\rangle}_{\bar{r}_{ab}}.
$$

Giving:

$$
|\langle\ldots\rangle|^2
=\frac{(\varepsilon_a-\varepsilon_b)^2}{\hbar^2}
\left|\bar{\varepsilon}\cdot\bar{r}_{ab}\right|^2.
$$
