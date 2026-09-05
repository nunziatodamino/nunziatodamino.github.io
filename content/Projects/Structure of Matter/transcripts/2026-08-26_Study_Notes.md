---
title: Study Notes — 2026-08-26
date: 2026-08-26
tags:
  - study-notes
  - performance-lab
  - transcription
  - physics
status: transcribed-from-submitted-images
---

# Study Notes — 2026-08-26

> [!note] Transcription conventions
> The wording, spelling, capitalization, intermediate steps, apparent mistakes, question marks, and corrections have been preserved as closely as possible. Crossed-out writing is shown as `~~crossed out~~`; editorial descriptions are enclosed in square brackets. A source-image comment precedes every submitted page.
> Scalar operators carry a hat; spatial vectors are written as $\bar{a}$; vector operators as $\hat{\bar{a}}$; and unit vectors as $\bar{e}_i$ or $\bar{u}_i$. Hamiltonians use $\mathscr{H}$ classically and $\hat{\mathscr{H}}$ as quantum operators; Hilbert spaces retain $\mathcal{H}$.
> Complete equations embedded in prose use `$$...$$`; standalone equations use display-math blocks. Multiline derivations use `\begin{aligned}` with explicit `&` alignment points and `\\` row breaks.

## Block 1 — Lifetime and natural linewidth

### Page 1

<!-- source: image-1787731463167.jpg -->

26/08 — Block 1

**Lifetime and natural line-width**

Consider the spontaneous emission and its transition probability $W_{ba}^{\mathrm{spont}}$ per unit of time from the state $|\varepsilon_b\rangle$ to the lower-energy state $|\varepsilon_a\rangle$.

Calling

$$
A_{ba}=W_{ba}^{\mathrm{spont}},
$$

the number $N_b$ of atoms in the atomic state $|\varepsilon_b\rangle$ is reduced by

$$
\begin{aligned}
\frac{dN_b}{dt}&=-A_{ba}N_b, \\
N_b(t)&=N_b(0)e^{-A_{ba}t}.
\end{aligned}
$$

We can consider $1/A_{ba}$ the characteristic time for a spontaneous transition. More generally, the lifetime $\tau_b$ of the state $|\varepsilon_b\rangle$ is due to the total spontaneous-transition probability per unit time to all possible final states $|\varepsilon_a\rangle$:

$$
\tau_b=\frac{1}{\displaystyle\sum_a A_{ba}}.
$$

In other words, the probability at time $t$ for an atom to stay in $|\varepsilon_b\rangle$ is

$$
\begin{aligned}
\frac{dP_b(t)}{dt}&=-\frac{1}{\tau_b}P_b(t), \\
P_b(t)&=e^{-t/\tau_b}P_b(0).
\end{aligned}
$$

Since $$P_b(t)=|c_b(t)|^2$$, we expect

$$
c_b(t)=e^{-t/(2\tau_b)}c_b(0).
$$

### Page 2

<!-- source: image-1787732023699.jpg -->

The Heisenberg uncertainty principle says that, if a state is not stable for an infinite time, its energy has an uncertainty $\Delta E$ linked to the lifetime $\tau$:

$$
\Delta E\,\tau\gtrsim\hbar.
$$

Since all the excited states have a finite lifetime due to spontaneous emission, their energies are defined up to some uncertainty of the order of the inverse of their lifetime. As a consequence, the lines of absorption and emission have a width called **natural line-width**.

Let us consider an excited state $|\varepsilon_b\rangle$. We will calculate its lifetime $\tau_b$ using time-dependent perturbation theory.

In the interaction picture:

$$
i\hbar\frac{\partial}{\partial t}|\psi_I(t)\rangle
=\hat V_I(t)|\psi_I(t)\rangle.
$$

Therefore

$$
|\psi_I(t)\rangle
=|\psi_I(0)\rangle
-\frac{i}{\hbar}\int_0^t dt'\,\hat V_I(t')|\psi_I(t')\rangle.
$$

Using the eigenstates $\{|\varepsilon_n\rangle\}$ of $\hat{\mathscr{H}}_0$:

$$
|\psi(t)\rangle
=\sum_n c_n(t)|\varepsilon_n(t)\rangle,
$$

where

$$
\begin{aligned}
|\varepsilon_n(t)\rangle
&=e^{-i\varepsilon_nt/\hbar}|\varepsilon_n\rangle, \\
c_n(t)
&=\langle\varepsilon_n|\psi_I(t)\rangle.
\end{aligned}
$$

### Page 3

<!-- source: image-1787732564312.jpg -->

Supposing that at $$t=0$$

$$
|\psi_I(0)\rangle=|\varepsilon_i\rangle,
$$

and introducing the completeness relation

$$
\sum_n|\varepsilon_n\rangle\langle\varepsilon_n|=\hat{\mathbb 1},
$$

we obtain

$$
\begin{aligned}
c_m(t)
&=\langle\varepsilon_m|\psi_I(t)\rangle \\
&=\delta_{mi}
-\frac{i}{\hbar}\sum_n\int_0^t dt'\,
\langle\varepsilon_m|\hat V_I(t')|\varepsilon_n\rangle c_n(t').
\end{aligned}
$$

We can split the sum between the term with $$n=i$$ and the rest:

$$
\begin{aligned}
c_m(t)
&=\delta_{mi}
-\frac{i}{\hbar}\int_0^t dt'\,
\langle\varepsilon_m|\hat V_I(t')|\varepsilon_i\rangle c_i(t') \\
&\quad-\frac{i}{\hbar}\sum_{n\ne i}\int_0^t dt'\,
\langle\varepsilon_m|\hat V_I(t')|\varepsilon_n\rangle c_n(t').
\end{aligned}
$$

At first order in $\hat V$:

$$
\begin{cases}
c_i(t)\simeq 1,\\
c_{m\ne i}(t)\sim \hat V.
\end{cases}
$$

### Page 4

<!-- source: image-1787733547441.jpg -->

Now take the initial state

$$
|\varepsilon_i\rangle
=|\varepsilon_b\rangle\otimes|0,0,\ldots\rangle,
$$

where $|\varepsilon_b\rangle$ is an atomic excited state and there is no radiation field.

The final state is

$$
|\varepsilon_f\rangle
=|\varepsilon_a\rangle\otimes|\ldots,1_{\bar{k} s},\ldots\rangle,
$$

where $|\varepsilon_a\rangle$ is some lower-energy state, with the spontaneous emission of a photon.

Define for simplicity

$$
\hat V_{\bar{k} s}
=\frac{e}{m}
\sqrt{\frac{\hbar}{2\varepsilon_0V\omega_k}}
\,\hat{\bar{p}}\cdot\bar{\varepsilon}_{\bar{k} s},
$$

so that

$$
\hat{\mathscr{H}}_{\mathrm{int}}
=\sum_{\bar{k},s}\hat V_{\bar{k} s}
\left(\hat a_{\bar{k} s}+\hat a_{\bar{k} s}^{\dagger}\right).
$$

In the interaction picture,

$$
\hat V_I(t)
=e^{i\hat{\mathscr{H}}_0t/\hbar}
\hat{\mathscr{H}}_{\mathrm{int}}
e^{-i\hat{\mathscr{H}}_0t/\hbar}.
$$

## Block 2 — Transition amplitude and Lorentzian profile

### Page 1

<!-- source: image-1787736226489.jpg -->

For the final state:

$$
c_f(t)
=-\frac{i}{\hbar}\int_0^t dt'\,
\langle\varepsilon_f|\hat V_I(t')|\varepsilon_i\rangle c_i(t').
$$

The annihilation term gives zero on the vacuum, while

$$
\langle\ldots,1_{\bar{k} s},\ldots|
\hat a_{\bar{k}' s'}^{\dagger}
|0,0,\ldots\rangle
=\delta_{\bar{k}\bar{k}'}\delta_{ss'}.
$$

Therefore only the selected mode remains:

$$
\langle\varepsilon_f|\hat V_I(t')|\varepsilon_i\rangle
=V_{\bar{k} s}^{ab}
e^{-i(\omega_{ba}-\omega_k)t'},
$$

where

$$
\begin{aligned}
V_{\bar{k} s}^{ab}
&=\langle\varepsilon_a|\hat V_{\bar{k} s}|\varepsilon_b\rangle, \\
\omega_{ba}
&=\frac{\varepsilon_b-\varepsilon_a}{\hbar}.
\end{aligned}
$$

Then

$$
c_f(t)
=-\frac{i}{\hbar}V_{\bar{k} s}^{ab}
\int_0^t dt'\,
e^{-i(\omega_{ba}-\omega_k)t'}c_i(t').
$$

Using

$$
c_i(t')=e^{-t'/(2\tau_b)}c_i(0),
$$

we obtain

$$
c_f(t)
=-\frac{i}{\hbar}V_{\bar{k} s}^{ab}
\int_0^t dt'\,
e^{-i(\omega_{ba}-\omega_k)t'}e^{-t'/(2\tau_b)}c_i(0).
$$

### Page 2

<!-- source: image-1787740684157.jpg -->

Integrating over $t'$:

$$
c_f(t)
=-\frac{i}{\hbar}V_{\bar{k} s}^{ab}
\frac{
e^{-i(\omega_{ba}-\omega_k)t}e^{-t/(2\tau_b)}-1
}{
-i(\omega_{ba}-\omega_k)-\dfrac{1}{2\tau_b}
}
c_i(0).
$$

Define

$$
\Gamma_b=\frac{1}{2\tau_b}.
$$

For $$t\gg\tau_b$$:

$$
|c_f(t)|^2
\simeq
\frac{1}{\hbar^2}|V_{\bar{k} s}^{ab}|^2
\frac{|c_i(0)|^2}{(\omega_{ba}-\omega_k)^2+\Gamma_b^2}.
$$

This is proportional to the Lorentzian function

$$
f(\omega_k;\omega_{ba},\Gamma_b)
=\frac{1}{\pi}
\frac{\Gamma_b}{(\omega_k-\omega_{ba})^2+\Gamma_b^2},
$$

with

$$
f(\omega_k;\omega_{ba},\Gamma_b)
\xrightarrow{\Gamma_b\to0}
\delta(\omega_k-\omega_{ba}).
$$

Thus

$$
|c_f(t)|^2
=\frac{2\pi}{\hbar^2}\tau_b
|V_{\bar{k} s}^{ab}|^2
f(\omega_k;\omega_{ba},\Gamma_b)
|c_i(0)|^2.
$$

### Page 3

<!-- source: image-1787740986052.jpg -->

$\Gamma_b$ is the **half-width at half-maximum** (HWHM).

![[2026-08-26_lorentzian_linewidth.svg]]

The full width at half-maximum is

$$
\Delta\omega_{\mathrm{FWHM}}
=2\Gamma_b
=\frac{1}{\tau_b}.
$$

Therefore

$$
\begin{aligned}
\Delta E
&=\hbar\Delta\omega_{\mathrm{FWHM}} \\
&=2\hbar\Gamma_b \\
&=\frac{\hbar}{\tau_b},
\end{aligned}
$$

and

$$
\Delta E\,\tau_b=\hbar.
$$

### Page 4

<!-- source: image-1787741436032.jpg -->

Let us calculate the lifetime $\tau_b$ from

$$
c_i(t)=\langle\varepsilon_i|\psi_I(t)\rangle.
$$

We have

$$
\dot c_i(t)
=\left\langle\varepsilon_i\right|
\frac{\partial}{\partial t}
\left|\psi_I(t)\right\rangle
=-\frac{i}{\hbar}
\langle\varepsilon_i|\hat V_I(t)|\psi_I(t)\rangle.
$$

Using

$$
|\psi_I(t)\rangle
=|\varepsilon_i\rangle
-\frac{i}{\hbar}\int_0^t dt'\,
\hat V_I(t')|\psi_I(t')\rangle,
$$

we get

$$
\begin{aligned}
\dot c_i(t)
&=-\frac{i}{\hbar}
\langle\varepsilon_i|\hat V_I(t)|\varepsilon_i\rangle \\
&\quad-\frac{1}{\hbar^2}
\left\langle\varepsilon_i\left|
\hat V_I(t)\int_0^t dt'\,\hat V_I(t')
\right|\psi_I(t')\right\rangle.
\end{aligned}
$$

The first term is zero.

## Block 3 — Second-order kernel for the survival amplitude

### Page 1

<!-- source: image-1787752002236.jpg -->

Introduce twice the completeness relation:

$$
\sum_{\ell}|\varepsilon_\ell\rangle\langle\varepsilon_\ell|=\hat{\mathbb 1},
\qquad
\sum_{p}|\varepsilon_p\rangle\langle\varepsilon_p|=\hat{\mathbb 1}.
$$

Here the complete atom–radiation states are

$$
|\varepsilon_\ell\rangle
=|\varepsilon_m\rangle\otimes
|\ldots,m_{\bar{k} s},\ldots\rangle,
$$

and analogously

$$
|\varepsilon_p\rangle
=|\varepsilon_q\rangle\otimes
|\ldots,n_{\bar{k} s},\ldots\rangle.
$$

The identities are therefore sums over both the atomic state and all photon occupation numbers.

Since

$$
\langle\varepsilon_i|\hat V_I(t)|\varepsilon_i\rangle=0,
$$

we obtain

$$
\dot c_i(t)
=-\frac{1}{\hbar^2}
\sum_{\ell,p}
\langle\varepsilon_i|\hat V_I(t)|\varepsilon_\ell\rangle
\int_0^t dt'\,
\langle\varepsilon_\ell|\hat V_I(t')|\varepsilon_p\rangle
\langle\varepsilon_p|\psi_I(t')\rangle.
$$

### Page 2

<!-- source: image-1787753635284.jpg -->

Recall

$$
\langle\varepsilon_p|\psi_I(t')\rangle
=c_p(t').
$$

For $p\ne i$, $c_p(t')\sim \hat V$. These terms would therefore give contributions of order $O(\hat V^3)$ in the equation for $\dot c_i(t)$.

Keeping only $$p=i$$ gives

$$
\dot c_i(t)
=-\frac{1}{\hbar^2}
\sum_\ell
\langle\varepsilon_i|\hat V_I(t)|\varepsilon_\ell\rangle
\int_0^t dt'\,
\langle\varepsilon_\ell|\hat V_I(t')|\varepsilon_i\rangle
c_i(t').
$$

> [!warning]
> The kernel is second order in $\hat V$, but retaining the full $c_i(t')$ inside the integral is a self-consistent/partially resummed equation, not a strict finite-order expression for $c_i(t)$.

## Block 4 — Occupation selector and collapse of the mode sums

### Page 1

<!-- source: image-1787761932645.jpg -->

Take

$$
\begin{aligned}
|\varepsilon_i\rangle
&=|\varepsilon_b\rangle\otimes|0,0,\ldots\rangle, \\
|\varepsilon_\ell\rangle
&=|\varepsilon_m\rangle\otimes
|\ldots,m_{\bar{k} s},\ldots\rangle.
\end{aligned}
$$

Then

$$
\langle\varepsilon_i|\hat V_I(t)|\varepsilon_\ell\rangle
=\sum_{\bar{k},s}
V_{\bar{k} s}^{bm}
e^{\frac{i}{\hbar}(\varepsilon_b-\varepsilon_m-\hbar\omega_k)t}
\eta_{\bar{k} s},
$$

where

$$
V_{\bar{k} s}^{bm}
=\langle\varepsilon_b|\hat V_{\bar{k} s}|\varepsilon_m\rangle.
$$

### Page 2

<!-- source: image-1787762442343.jpg -->

Define the occupation selector

$$
\eta_{\bar{k} s}
=\delta_{m_{\bar{k} s},1}
\prod_{(\bar{q},r)\ne(\bar{k},s)}
\delta_{m_{\bar{q} r},0}.
$$

It selects the radiation configuration containing one photon in the mode $(\bar{k},s)$ and zero photons in every other mode.

For the reverse matrix element:

$$
\langle\varepsilon_\ell|\hat V_I(t')|\varepsilon_i\rangle
=\sum_{\bar{k}',s'}
V_{\bar{k}' s'}^{mb}
e^{-\frac{i}{\hbar}(\varepsilon_b-\varepsilon_m-\hbar\omega_{k'})t'}
\eta_{\bar{k}' s'}.
$$

### Page 3

<!-- source: image-1787763857850.jpg -->

Their product is

$$
\begin{aligned}
&\langle\varepsilon_i|\hat V_I(t)|\varepsilon_\ell\rangle
\langle\varepsilon_\ell|\hat V_I(t')|\varepsilon_i\rangle \\
&\quad=
\sum_{\bar{k},s}\sum_{\bar{k}',s'}
V_{\bar{k} s}^{bm}V_{\bar{k}'s'}^{mb}
e^{\frac{i}{\hbar}(\varepsilon_b-\varepsilon_m-\hbar\omega_k)t}
e^{-\frac{i}{\hbar}(\varepsilon_b-\varepsilon_m-\hbar\omega_{k'})t'}
\eta_{\bar{k} s}\eta_{\bar{k}'s'}.
\end{aligned}
$$

For the occupation selectors:

$$
\eta_{\bar{k} s}\eta_{\bar{k}'s'}
=\delta_{\bar{k}\bar{k}'}\delta_{ss'}\eta_{\bar{k} s}.
$$

> [!question]
> Proper proof of the selector-product identity deferred. Use it operationally for now.

### Page 4

<!-- source: image-1787764372372.jpg -->

Using

$$
V_{\bar{k} s}^{mb}
=\left(V_{\bar{k} s}^{bm}\right)^*,
$$

the two mode sums collapse:

$$
\begin{aligned}
&\langle\varepsilon_i|\hat V_I(t)|\varepsilon_\ell\rangle
\langle\varepsilon_\ell|\hat V_I(t')|\varepsilon_i\rangle \\
&\quad=
\sum_{\bar{k},s}|V_{\bar{k} s}^{bm}|^2
e^{i(\omega_{bm}-\omega_k)t}
e^{-i(\omega_{bm}-\omega_k)t'}
\eta_{\bar{k} s},
\end{aligned}
$$

where

$$
\omega_{bm}=\frac{\varepsilon_b-\varepsilon_m}{\hbar}.
$$

The occupation-number sum is reduced by the selector:

$$
\sum_{\{m_{\bar{q} r}\}}\eta_{\bar{k} s}=1.
$$

The proof of the selector identity remains open.
