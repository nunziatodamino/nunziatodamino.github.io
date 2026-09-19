Say we want to apply the [[Fermi Golden Rule]] to the specific case of an hydrogenic atom with energy eigenstates $|\varepsilon_a\rangle$, in the special case of the [[The dipole approximation]].
Consider the initial and final states:

$$
|\varepsilon_i\rangle =|\varepsilon_a\rangle\otimes|m_{\bar{k} s}\rangle
\qquad
|\varepsilon_f\rangle =|\varepsilon_b\rangle\otimes|m'_{\bar{k} s}\rangle.
$$

Apply the Fermi golden rule as a distributional contribution from this mode, to be summed over a continuum of final states:

$$
W_{i\to f} =\frac{2\pi}{\hbar} \left|\langle\varepsilon_f|\hat{\mathscr H}_{\mathrm{int}}|\varepsilon_i\rangle\right|^2 \delta(\varepsilon_f-\varepsilon_i).
$$

The constant-rate approximation requires weak coupling and times long compared with the continuum correlation time but short compared with population depletion in first-order perturbation theory. An isolated two-level atom coupled to one lossless mode instead has coherent dynamics: on resonance, the initial transition probability is $|V_{fi}|^2t^2/\hbar^2$, not a constant rate times $t$.

Note that in the presence of the radiative term:

$$
\varepsilon_f-\varepsilon_i =\varepsilon_b-\varepsilon_a +(n'_{\bar{k} s}-n_{\bar{k} s})\hbar\omega_k.
$$

Now consider the dipole approximation, so that $\hat{\mathscr H}_{\mathrm{int}} =\frac em\hat{\bar{A}}\cdot\hat{\bar{p}}$, and the vector potential is

$$
\hat{\bar{A}} \simeq \sqrt{\frac{\hbar}{2\varepsilon_0V\omega_k}}\, \bar{\varepsilon}_{\bar{k} s} \left( \hat a e^{-i\omega t} +\hat a^\dagger e^{+i\omega t} \right)
$$

Plugging in the Fermi Golden rule:

$$
\begin{aligned}
W_{i\to f}
&=
\frac{2\pi}{\hbar}
\frac{e^2}{m^2}
\frac{\hbar}{2\varepsilon_0 V\omega_k}
\left|
\langle \varepsilon_b |
\hat{\epsilon}_{ks}\cdot\hat{\bar p}
| \varepsilon_a \rangle
\cdot
\langle n'_{ks} |
\left(
\hat a_{ks}+\hat a_{ks}^{\dagger}
\right)
| n_{ks} \rangle
\right|^2
\delta(\varepsilon_b-\varepsilon_a +(n'_{\bar{k} s}-n_{\bar{k} s})\hbar\omega_k).
\end{aligned}
$$

Given that $\hat{\bar p}$ and $\hat a$ operate on different spaces.

We have, recalling the [[Action of the annihilation and creation operator over a state]]:

$$
\begin{aligned}
W_{i\to f}
&=
\frac{2\pi}{\hbar}
\frac{e^2}{m^2}
\frac{\hbar}{2\varepsilon_0 V\omega_k}
\left(
n_{ks}\delta_{n_{ks}-1,n'_{ks}}
+
(n_{ks}+1)\delta_{n_{ks}+1,n'_{ks}}
\right)
\left|
\langle \varepsilon_b |
\hat{\epsilon}_{ks}\cdot\hat{\bar p}
| \varepsilon_a \rangle
\right|^2
\delta(\varepsilon_b-\varepsilon_a +(n'_{\bar{k} s}-n_{\bar{k} s})\hbar\omega_k).
\end{aligned}
$$

Now we distinguish 2 cases.
There are two possible processes:

$$
\begin{aligned}
n'_{\bar k s}
&=
n_{\bar k s}-1
\qquad
\text{absorption},
\\
n'_{\bar k s}
&=
n_{\bar k s}+1
\qquad
\text{emission}.
\end{aligned}
$$

- **Absorption**
Assume that $\varepsilon_b>\varepsilon_a$ and define $\omega_{ba}\equiv\frac{\varepsilon_b-\varepsilon_a}{\hbar}>0.$
The difference between the final and initial energies is

$$
\begin{aligned}
E_f-E_i
&=
\varepsilon_b
+
\left(
n_{\bar k s}-1
\right)
\hbar\omega_k
-
\varepsilon_a
-
n_{\bar k s}\hbar\omega_k
\\
&=
\varepsilon_b-\varepsilon_a
-
\hbar\omega_k
\\
&=
\hbar\left(
\omega_{ba}-\omega_k
\right).
\end{aligned}
$$

Energy conservation therefore requires

$$
\omega_k=\omega_{ba}.
$$

The absorption rate is consequently

$$
\boxed{
\begin{aligned}
W_{\bar k s}^{a\to b\,(\mathrm{abs})}
&=
\frac{\pi e^2}
{m_e^2\varepsilon_0V\omega_k}
n_{\bar k s}
\left|
\langle\varepsilon_b|
\hat{\bar p}\cdot\bar\varepsilon_{\bar k s}
|\varepsilon_a\rangle
\right|^2
\delta\left(
\hbar\omega_{ba}
-
\hbar\omega_k
\right).
\end{aligned}
}
$$

The factor $n_{\bar k s}$ expresses the fact that a photon must initially be present in the mode. In particular,

$$
n_{\bar k s}=0
\quad\Longrightarrow\quad
W_{\bar k s}^{a\to b\,(\mathrm{abs})}=0.
$$

- **Emission**

The energy difference is now

$$
\begin{aligned}
E_f-E_i
&=
\varepsilon_a
+
\left(
n_{\bar k s}+1
\right)
\hbar\omega_k
-
\varepsilon_b
-
n_{\bar k s}\hbar\omega_k
\\
&=
\varepsilon_a-\varepsilon_b
+
\hbar\omega_k
\\
&=
\hbar\left(
\omega_k-\omega_{ba}
\right).
\end{aligned}
$$

Energy conservation again requires

$$
\omega_k=\omega_{ba}.
$$

The emission rate is therefore

$$
\boxed{
\begin{aligned}
W_{\bar k s}^{b\to a\,(\mathrm{em})}
&=
\frac{\pi e^2}
{m_e^2\varepsilon_0V\omega_k}
\left(
n_{\bar k s}+1
\right)
\left|
\langle\varepsilon_a|
\hat{\bar p}\cdot\bar\varepsilon_{\bar k s}
|\varepsilon_b\rangle
\right|^2
\delta\left(
\hbar\omega_{ba}
-
\hbar\omega_k
\right).
\end{aligned}
}
$$

The factor $n_{\bar k s}+1$ contains two contributions:

$$
n_{\bar k s}+1
=
\underbrace{n_{\bar k s}}_{\text{stimulated emission}}
+
\underbrace{1}_{\text{spontaneous emission}}.
$$

The contribution proportional to $n_{\bar k s}$ is stimulated by photons already present in the mode. The contribution proportional to $1$ survives even when

$$
n_{\bar k s}=0.
$$

Indeed,

$$
\hat a_{\bar k s}^{\dagger}|0_{\bar k s}\rangle
=
|1_{\bar k s}\rangle.
$$

**Thus spontaneous emission is possible when the initial radiation state is the vacuum.**
We now rewrite the momentum matrix element in terms of the position matrix element.
For the atomic Hamiltonian, the Heisenberg equation gives:

$$
\frac{d\hat{\bar r}}{dt}
=
-\frac{i}{\hbar}
\left[
\hat{\bar r},
\hat{\mathscr H}_{\mathrm{mat}}
\right].
$$

For a nonrelativistic particle, $\frac{d\hat{\bar r}}{dt}=\frac{\hat{\bar p}}{m_e}$, Hence:

$$
\boxed{
\frac{\hat{\bar p}}{m_e}
=
-\frac{i}{\hbar}
\left[
\hat{\bar r},
\hat{\mathscr H}_{\mathrm{mat}}
\right]
}.
$$

Defining $\bar r_{ba}\equiv\langle\varepsilon_b|\hat{\bar r}|\varepsilon_a\rangle$ :

$$
\begin{aligned}
\frac{1}{m_e}
\langle\varepsilon_b|
\bar\varepsilon_{\bar k s}\cdot\hat{\bar p}
|\varepsilon_a\rangle
&=
-\frac{i}{\hbar}
\bar\varepsilon_{\bar k s}\cdot
\langle\varepsilon_b|
\left[
\hat{\bar r},
\hat{\mathscr H}_{\mathrm{mat}}
\right]
|\varepsilon_a\rangle
\\
&=
-\frac{i}{\hbar}
\bar\varepsilon_{\bar k s}\cdot
\langle\varepsilon_b|
\left(
\hat{\bar r}\hat{\mathscr H}_{\mathrm{mat}}
-
\hat{\mathscr H}_{\mathrm{mat}}\hat{\bar r}
\right)
|\varepsilon_a\rangle
\\
&=
-\frac{i}{\hbar}
\left(
\varepsilon_a-\varepsilon_b
\right)
\bar\varepsilon_{\bar k s}\cdot\bar r_{ba}
\\
&=
i\omega_{ba}
\bar\varepsilon_{\bar k s}\cdot\bar r_{ba}.
\end{aligned}
$$

Therefore,

$$
\boxed{
\frac{1}{m_e^2}
\left|
\langle\varepsilon_b|
\bar\varepsilon_{\bar k s}\cdot\hat{\bar p}
|\varepsilon_a\rangle
\right|^2
=
\omega_{ba}^2
\left|
\bar\varepsilon_{\bar k s}\cdot\bar r_{ba}
\right|^2
}.
$$

Define now the electric-dipole matrix element $\bar d_{ba}\equiv e\bar r_{ba}=\langle\varepsilon_b|e\hat{\bar r}|\varepsilon_a\rangle.$
So that the single-mode absorption rate can then be written as

$$
\begin{aligned}

W_{\bar k s}^{a\to b\,(\mathrm{abs})}
&=
\frac{\pi}
{\varepsilon_0V\omega_k}
\omega_{ba}^2
n_{\bar k s}
\left|
\bar\varepsilon_{\bar k s}
\cdot
\bar d_{ba}
\right|^2
\delta\left(
\hbar\omega_{ba}
-
\hbar\omega_k
\right)
\\

W_{\bar k s}^{b\to a\,(\mathrm{em})}
&=
\frac{\pi}
{\varepsilon_0V\omega_k}
\omega_{ba}^2
\left(
n_{\bar k s}+1
\right)
\left|
\bar\varepsilon_{\bar k s}
\cdot
\bar d_{ab}
\right|^2
\delta\left(
\hbar\omega_{ba}
-
\hbar\omega_k
\right)
\end{aligned}
$$

We observe that since $\bar r_{ab}=\bar r_{ba}^{\,*}$, we have $|\bar d_{ab}|^2=|\bar d_{ba}|^2.$

This reasoning can be extended to the general [[Absorption and emission of multimode photons]].
