We studied in [[Absorption and emission for a single mode photon]] the absorption and emission transition rate in the case the emitted/absorbed photon is in the same mode.
In general we can have an initial/final collection of photons of any mode:

$$
|\Phi_i\rangle
=
|\varepsilon_a\rangle
\otimes
|\{n_{\bar k s}\}\rangle,
\qquad
|\Phi_f\rangle
=
|\varepsilon_b\rangle
\otimes
|\{n'_{\bar k s}\}\rangle.
$$

Then the derivation follows the same ansatz as the one for the single mode photons, the only thing that changes is that the total rate is obtained by summing the rate over all modes:

$$
W
=
\sum_{\bar k,s}
W_{\bar k s}.
$$

In the box-continuum limit,

$$
\sum_{\bar k}
\longrightarrow
V
\int
\frac{d^3k}{(2\pi)^3}.
$$

Hence,

$$
\boxed{
W
\longrightarrow
V
\sum_{s=1}^{2}
\int
\frac{d^3k}{(2\pi)^3}
W_{\bar k s}
}.
$$

For a thermal radiation field, the occupation number is replaced by its thermal mean:

$$
n_{\bar k s}
\longrightarrow
n(\omega_k),
$$

where

$$
\boxed{
n(\omega_k)
=
\frac{1}
{e^{\beta\hbar\omega_k}-1}
}.
$$

Is the [[Bose-Einstein statistics]].  
The occupation-dependent factor is therefore

$$
f\left(n(\omega_k)\right)
=
\begin{cases}
n(\omega_k),
&
\text{absorption},
\\
n(\omega_k)+1,
&
\text{emission}.
\end{cases}
$$

Define the propagation direction $\bar e_k\equiv\frac{\bar k}{|\bar k|}$ and choose two real transverse polarization vectors. Then $\left\{\bar\varepsilon_{\bar k 1},\bar\varepsilon_{\bar k 2},\bar e_k\right\}$ form an orthonormal basis of three-dimensional space. Therefore,

$$
\mathbb{1}_3
=
\sum_{s=1}^{2}
|\bar\varepsilon_{\bar k s}\rangle
\langle\bar\varepsilon_{\bar k s}|
+
|\bar e_k\rangle
\langle\bar e_k|.
$$

Applying the completeness relation to the dipole vector gives

$$
\begin{aligned}
\bar r_{ba}
&=
\mathbb{1}_3\bar r_{ba}
\\
&=
\sum_{s=1}^{2}
\left(
\bar\varepsilon_{\bar k s}^{\,*}
\cdot
\bar r_{ba}
\right)
\bar\varepsilon_{\bar k s}
+
\left(
\bar e_k\cdot\bar r_{ba}
\right)
\bar e_k.
\end{aligned}
$$

Taking the squared norm,

$$
|\bar r_{ba}|^2
=
\sum_{s=1}^{2}
\left|
\bar\varepsilon_{\bar k s}
\cdot
\bar r_{ba}
\right|^2
+
\left|
\bar e_k
\cdot
\bar r_{ba}
\right|^2.
$$

Thus,

$$

\sum_{s=1}^{2}
\left|
\bar\varepsilon_{\bar k s}
\cdot
\bar r_{ba}
\right|^2
=
|\bar r_{ba}|^2
-
\left|
\bar e_k
\cdot
\bar r_{ba}
\right|^2
 = |\bar r_{ba}|^2
-
\left|
\hat k
\cdot
\bar r_{ba}
\right|^2
 .
$$

The transition dipole can be complex, so it need not define a real polar axis. Instead use $\int d\Omega\,\hat k_i\hat k_j=(4\pi/3)\delta_{ij}$:

$$
\boxed{
\int d\Omega\,\left(|\bar r_{ba}|^2-|\hat k\cdot\bar r_{ba}|^2\right)
=\frac{8\pi}{3}|\bar r_{ba}|^2
}.
$$

After summing over polarizations, the total transition rate takes the form

$$
\begin{aligned}
W
&=
\int_0^\infty dk
\int_0^\pi d\theta
\int_0^{2\pi}d\phi\,
\frac{k^2\sin\theta}{(2\pi)^3}

\frac{\pi e^2\omega_{ba}^2}
{\varepsilon_0\omega_k}
\left(|\bar r_{ba}|^2-|\hat k\cdot\bar r_{ba}|^2\right)
f\left(n(\omega_k)\right)

\delta\left(
\hbar\omega_{ba}
-
\hbar\omega_k
\right).
\end{aligned}
$$

Using the angular integral above and $\delta\left(\hbar\omega_{ba}-\hbar\omega_k\right)=\frac{1}{\hbar}\delta\left(\omega_{ba}-\omega_k\right)$, one obtains in the end:


$$
\begin{aligned}

&\int_0^\infty
dk\,
\frac{k^2}{\omega_k}
f\left(n(\omega_k)\right)
\delta\left(
\hbar\omega_{ba}
-
\hbar\omega_k
\right)=
\\
&=
\frac{1}{\hbar}
\int_0^\infty
dk\,
\frac{\omega_k}{c^2}
f\left(n(\omega_k)\right)
\delta\left(
\omega_{ba}-ck
\right)=
\\
&=
\frac{1}{\hbar c}
\left.
\frac{\omega_k}{c^2}
f\left(n(\omega_k)\right)
\right|_{\omega_k=\omega_{ba}}=
\\
&=
\boxed{
\frac{\omega_{ba}}
{\hbar c^3}
f\left(n(\omega_{ba})\right)
}.
\end{aligned}
$$

Collecting the angular and radial factors gives

$$
\boxed{
W
=
\frac{e^2\omega_{ba}^3}
{3\pi\varepsilon_0\hbar c^3}
|\bar r_{ba}|^2
f\left(n(\omega_{ba})\right)
}.
$$

In terms of the dipole matrix element,

$$
\boxed{
W
=
\frac{\omega_{ba}^3}
{3\pi\varepsilon_0\hbar c^3}
|\bar d_{ba}|^2
f\left(n(\omega_{ba})\right)
}.
$$

Recapping in the end we have

$$
\boxed{
\begin{aligned}
W_{a\to b}^{(\mathrm{abs})}
&=
\frac{\omega_{ba}^3}
{3\pi\varepsilon_0\hbar c^3}
|\bar d_{ba}|^2
n(\omega_{ba}) \qquad &\text{Absorption rate}\\
W_{b\to a}^{(\mathrm{em})} 
&=
\frac{\omega_{ba}^3}
{3\pi\varepsilon_0\hbar c^3}
|\bar d_{ba}|^2
\left[
n(\omega_{ba})+1
\right] \qquad &\text{Emission rate}
\end{aligned}
}
$$

We observe that the emission rate separates as

$$
W_{b\to a}^{(\mathrm{em})}
=
W_{b\to a}^{(\mathrm{stim})}
+
W_{b\to a}^{(\mathrm{spont})},
$$

where

$$
\boxed{
W_{b\to a}^{(\mathrm{stim})}
=
\frac{\omega_{ba}^3}
{3\pi\varepsilon_0\hbar c^3}
|\bar d_{ba}|^2
n(\omega_{ba})
}
$$

and

$$
\boxed{
W_{b\to a}^{(\mathrm{spont})}
=
\frac{\omega_{ba}^3}
{3\pi\varepsilon_0\hbar c^3}
|\bar d_{ba}|^2
}.
$$

Consequently,

$$
\boxed{
W_{b\to a}^{(\mathrm{stim})}
=
W_{a\to b}^{(\mathrm{abs})}
}.
$$
