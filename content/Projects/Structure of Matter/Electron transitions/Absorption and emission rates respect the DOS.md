Define the density of electromagnetic modes per unit volume and per unit angular frequency (this is a quantity closely related to the [[Electronic density of states]]):

$$
\nu(\omega)
\equiv
\frac{1}{V}
\sum_{\bar k,s}
\delta\left(
\omega-\omega_k
\right).
$$

Since $\omega_k=c|\bar k|$. The continuum limit gives:

$$
\nu(\omega)
=
2
\int
\frac{d^3k}{(2\pi)^3}
\delta(\omega-ck),
$$

where the factor $2$ accounts for the two transverse polarizations.
Using spherical coordinates:

$$
\begin{aligned}
\nu(\omega)
&=
2
\frac{4\pi}{(2\pi)^3}
\int_0^\infty
k^2\,dk\,
\delta(\omega-ck)
=
\frac{1}{\pi^2}
\int_0^\infty
k^2\,dk\,
\delta(\omega-ck).
\end{aligned}
$$

Using [[dirac delta property]] we obtain

$$
\begin{aligned}
\nu(\omega)
&=
\frac{1}{\pi^2c}
\left(
\frac{\omega}{c}
\right)^2=
\boxed{
\frac{\omega^2}{\pi^2c^3}
}.
\end{aligned}
$$

The spectral energy density is obtained by multiplying

$$
\text{mean occupation}
\times
\text{density of modes}
\times
\text{energy per photon}.
$$

Therefore,

$$
\rho(\omega)
=
n(\omega)\nu(\omega)\hbar\omega.
$$

Substituting the expressions for $n(\omega)$ and $\nu(\omega)$,

$$
\begin{aligned}
\rho(\omega)
&=
\frac{1}
{e^{\beta\hbar\omega}-1}
\frac{\omega^2}{\pi^2c^3}
\hbar\omega
=
\boxed{
\frac{\hbar\omega^3}
{\pi^2c^3}
\frac{1}
{e^{\beta\hbar\omega}-1}
}.
\end{aligned}
$$

It follows that

$$
n(\omega)
=
\frac{\pi^2c^3}
{\hbar\omega^3}
\rho(\omega).
$$

Substituting this relation into the absorption rate,

$$
\begin{aligned}
W_{a\to b}^{(\mathrm{abs})}
&=
\frac{\omega_{ba}^3}
{3\pi\varepsilon_0\hbar c^3}
|\bar d_{ba}|^2
n(\omega_{ba})=
\\
&=
\frac{\omega_{ba}^3}
{3\pi\varepsilon_0\hbar c^3}
|\bar d_{ba}|^2
\frac{\pi^2c^3}
{\hbar\omega_{ba}^3}
\rho(\omega_{ba})=
\\
&=
\boxed{
\frac{\pi}
{3\varepsilon_0\hbar^2}
|\bar d_{ba}|^2
\rho(\omega_{ba})
}.
\end{aligned}
$$

The stimulated-emission rate is equal to the absorption rate:

$$
\boxed{
W_{b\to a}^{(\mathrm{stim})}
=
\frac{\pi}
{3\varepsilon_0\hbar^2}
|\bar d_{ba}|^2
\rho(\omega_{ba})
}.
$$

The spontaneous-emission rate is

$$
\boxed{
W_{b\to a}^{(\mathrm{spont})}
=
\frac{\omega_{ba}^3}
{3\pi\varepsilon_0\hbar c^3}
|\bar d_{ba}|^2
}.
$$