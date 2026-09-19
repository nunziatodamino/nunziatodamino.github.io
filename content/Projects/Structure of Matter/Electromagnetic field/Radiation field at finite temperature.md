**TO CHECK**

Consider the electromagnetic field in a quantization volume $V$. A mode is identified by the collective index $\alpha\equiv(n,s),$

where $n$ labels the wave vector $\bar{k}_n$ and $s=1,2$ labels the two transverse polarizations. The corresponding frequency is

$$
\omega_\alpha=\omega_n=c|\bar{k}_n|.
$$

The Hamiltonian of the quantized radiation field is

$$
\hat{\mathscr{H}}_{\mathrm{rad}}
=
\sum_\alpha
\hbar\omega_\alpha
\left(
\hat N_\alpha+\frac12\mathbb{1}
\right).
$$

Separate the temperature-independent zero-point energy:

$$
\hat{\mathscr{H}}_{\mathrm{rad}}
=
\hat{\mathscr{H}}'
+
E_0\mathbb{1},
$$

with

$$
\hat{\mathscr{H}}'
\equiv
\sum_\alpha\hbar\omega_\alpha\hat N_\alpha,
\qquad
E_0
=
\frac12\sum_\alpha\hbar\omega_\alpha.
$$

The vacuum contribution $E_0$ is independent of the occupation numbers. If it is retained, the complete partition function is

$$
Z_{\mathrm{rad}}
=
e^{-\beta E_0}Z,
$$

where

$$
Z
=
\operatorname{Tr}
e^{-\beta\hat{\mathscr{H}}'},
\qquad
\beta=\frac{1}{k_BT}.
$$

The thermal radiation energy will be calculated using $\hat{\mathscr{H}}'$, meaning that the temperature-independent vacuum energy has been subtracted.

\subsection{Partition function in the occupation-number basis}

Use the complete Fock basis

$$
|\{m_\alpha\}\rangle
=
|m_1,m_2,\ldots\rangle,
\qquad
m_\alpha=0,1,2,\ldots
$$

with

$$
\hat N_\alpha|\{m_\gamma\}\rangle
=
m_\alpha|\{m_\gamma\}\rangle.
$$

The partition function is

$$
\begin{aligned}
Z
&=
\operatorname{Tr}
e^{-\beta\hat{\mathscr{H}}'}
\\
&=
\sum_{\{m_\alpha\}}
\langle\{m_\alpha\}|
e^{-\beta\hat{\mathscr{H}}'}
|\{m_\alpha\}\rangle
\\
&=
\sum_{\{m_\alpha\}}
\left\langle\{m_\alpha\}\left|
\exp\left[
-\beta\sum_\alpha
\hbar\omega_\alpha\hat N_\alpha
\right]
\right|\{m_\alpha\}\right\rangle.
\end{aligned}
$$

Recall the following property. If

$$
\hat A|a\rangle=a|a\rangle,
$$

then

$$
e^{\hat A}|a\rangle=e^a|a\rangle.
$$

Indeed, using the Taylor expansion,

$$
e^{\hat A}
=
\sum_{p=0}^{\infty}\frac{\hat A^p}{p!},
$$

and therefore

$$
\begin{aligned}
e^{\hat A}|a\rangle
&=
\sum_{p=0}^{\infty}
\frac{\hat A^p}{p!}|a\rangle
\\
&=
\sum_{p=0}^{\infty}
\frac{a^p}{p!}|a\rangle
\\
&=
e^a|a\rangle.
\end{aligned}
$$

Since $|\{m_\alpha\}\rangle$ is an eigenstate of every number operator,

$$
\begin{aligned}
\hat{\mathscr{H}}'|\{m_\alpha\}\rangle
&=
\sum_\alpha
\hbar\omega_\alpha
\hat N_\alpha|\{m_\alpha\}\rangle
\\
&=
\left(
\sum_\alpha
\hbar\omega_\alpha m_\alpha
\right)
|\{m_\alpha\}\rangle.
\end{aligned}
$$

It follows that

$$
e^{-\beta\hat{\mathscr{H}}'}
|\{m_\alpha\}\rangle
=
\exp\left[
-\beta\sum_\alpha
\hbar\omega_\alpha m_\alpha
\right]
|\{m_\alpha\}\rangle.
$$

Equivalently, because the number operators of different modes commute,

$$
[\hat N_\alpha,\hat N_\gamma]=0,
$$

one can factorize the exponential operator:

$$
\exp\left[
-\beta\sum_\alpha
\hbar\omega_\alpha\hat N_\alpha
\right]
=
\prod_\alpha
e^{-\beta\hbar\omega_\alpha\hat N_\alpha}.
$$

Consequently,

$$
\begin{aligned}
Z
&=
\sum_{\{m_\alpha\}}
\exp\left[
-\beta\sum_\alpha
\hbar\omega_\alpha m_\alpha
\right]
\\
&=
\sum_{\{m_\alpha\}}
\prod_\alpha
e^{-\beta\hbar\omega_\alpha m_\alpha}.
\end{aligned}
$$

Writing the configuration sum explicitly,

$$
\sum_{\{m_\alpha\}}
=
\sum_{m_1=0}^{\infty}
\sum_{m_2=0}^{\infty}
\cdots,
$$

gives

$$
\begin{aligned}
Z
&=
\sum_{m_1=0}^{\infty}
\sum_{m_2=0}^{\infty}
\cdots
\prod_\alpha
e^{-\beta\hbar\omega_\alpha m_\alpha}
\\
&=
\prod_\alpha
\sum_{m_\alpha=0}^{\infty}
e^{-\beta\hbar\omega_\alpha m_\alpha}.
\end{aligned}
$$

For each mode, define

$$
q_\alpha
=
e^{-\beta\hbar\omega_\alpha}.
$$

Since $0<q_\alpha<1$,

$$
\sum_{m_\alpha=0}^{\infty}q_\alpha^{m_\alpha}
=
\frac{1}{1-q_\alpha}.
$$

Hence

$$
Z
=
\prod_\alpha
\frac{1}
{1-e^{-\beta\hbar\omega_\alpha}}.
$$

Taking the logarithm,

$$
\ln Z
=
-\sum_\alpha
\ln\left(
1-e^{-\beta\hbar\omega_\alpha}
\right).
$$

The collective index $\alpha=(n,s)$ contains the polarization index. Since the two polarizations have the same frequency $\omega_n$,

$$
\begin{aligned}
\ln Z
&=
-\sum_n\sum_{s=1}^{2}
\ln\left(
1-e^{-\beta\hbar\omega_n}
\right)
\\
&=
-2\sum_n
\ln\left(
1-e^{-\beta\hbar\omega_n}
\right).
\end{aligned}
$$

The factor $2$ accounts for the two transverse polarizations.

\subsection{Mean occupation number}

For a single mode $\alpha$, the partition function is

$$
Z_\alpha
=
\sum_{m=0}^{\infty}
q_\alpha^m
=
\frac{1}{1-q_\alpha}.
$$

The mean occupation number is

$$
\langle\hat N_\alpha\rangle
=
\frac{1}{Z_\alpha}
\sum_{m=0}^{\infty}
m q_\alpha^m.
$$

Using

$$
\begin{aligned}
\sum_{m=0}^{\infty}m q^m
&=
q\frac{d}{dq}
\sum_{m=0}^{\infty}q^m
\\
&=
q\frac{d}{dq}
\left(
\frac{1}{1-q}
\right)
\\
&=
\frac{q}{(1-q)^2},
\end{aligned}
$$

one obtains

$$
\begin{aligned}
\langle\hat N_\alpha\rangle
&=
(1-q_\alpha)
\frac{q_\alpha}{(1-q_\alpha)^2}
\\
&=
\frac{q_\alpha}{1-q_\alpha}
\\
&=
\frac{e^{-\beta\hbar\omega_\alpha}}
{1-e^{-\beta\hbar\omega_\alpha}}
\\
&=
\frac{1}
{e^{\beta\hbar\omega_\alpha}-1}.
\end{aligned}
$$

Thus the mean photon occupation of a mode is

$$
\boxed{
\langle\hat N_\alpha\rangle
=
\frac{1}
{e^{\beta\hbar\omega_\alpha}-1}
}.
$$

This is the Bose--Einstein occupation number with vanishing chemical potential.

\subsection{Mean thermal energy}

The normalized canonical density operator is

$$
\hat\rho_\beta
=
\frac{e^{-\beta\hat{\mathscr{H}}'}}{Z}.
$$

Therefore,

$$
\begin{aligned}
\langle\hat{\mathscr{H}}'\rangle
&=
\operatorname{Tr}
\left(
\hat\rho_\beta\hat{\mathscr{H}}'
\right)
\\
&=
\frac{1}{Z}
\operatorname{Tr}
\left(
\hat{\mathscr{H}}'
e^{-\beta\hat{\mathscr{H}}'}
\right).
\end{aligned}
$$

Since

$$
\frac{\partial Z}{\partial\beta}
=
-\operatorname{Tr}
\left(
\hat{\mathscr{H}}'
e^{-\beta\hat{\mathscr{H}}'}
\right),
$$

we find

$$
\begin{aligned}
\langle\hat{\mathscr{H}}'\rangle
&=
-\frac{1}{Z}
\frac{\partial Z}{\partial\beta}
\\
&=
-\frac{\partial}{\partial\beta}\ln Z.
\end{aligned}
$$

Using

$$
\ln Z
=
-2\sum_n
\ln\left(
1-e^{-\beta\hbar\omega_n}
\right),
$$

gives

$$
\begin{aligned}
\langle\hat{\mathscr{H}}'\rangle
&=
2\sum_n
\frac{\partial}{\partial\beta}
\ln\left(
1-e^{-\beta\hbar\omega_n}
\right)
\\
&=
2\sum_n
\frac{
\hbar\omega_n
e^{-\beta\hbar\omega_n}
}{
1-e^{-\beta\hbar\omega_n}
}
\\
&=
2\sum_n
\frac{\hbar\omega_n}
{e^{\beta\hbar\omega_n}-1}.
\end{aligned}
$$

Therefore,

$$
\boxed{
\langle\hat{\mathscr{H}}'\rangle
=
2\sum_n
\frac{\hbar\omega_n}
{e^{\beta\hbar\omega_n}-1}
}.
$$

The same result follows directly from the mean occupation number:

$$
\begin{aligned}
\langle\hat{\mathscr{H}}'\rangle
&=
\sum_{n,s}
\hbar\omega_n
\langle\hat N_{n,s}\rangle
\\
&=
\sum_{n,s}
\frac{\hbar\omega_n}
{e^{\beta\hbar\omega_n}-1}
\\
&=
2\sum_n
\frac{\hbar\omega_n}
{e^{\beta\hbar\omega_n}-1}.
\end{aligned}
$$

\subsection{Continuum limit and Planck spectrum}

Define the thermal energy density by

$$
\varepsilon(T)
=
\frac{
\langle\hat{\mathscr{H}}'\rangle
}{V}.
$$

For a cubic box of side $L$, with $V=L^3$ and periodic boundary conditions,

$$
\bar{k}_{\bar n}
=
\frac{2\pi}{L}\bar n.
$$

The spacing between allowed wave vectors is

$$
\Delta k_x\Delta k_y\Delta k_z
=
\left(
\frac{2\pi}{L}
\right)^3
=
\frac{(2\pi)^3}{V}.
$$

Therefore, in the continuum limit,

$$
\frac{1}{V}
\sum_{\bar{k}}
f(\bar{k})
\longrightarrow
\int
\frac{d^3k}{(2\pi)^3}
f(\bar{k}).
$$

It follows that

$$
\varepsilon(T)
=
2
\int
\frac{d^3k}{(2\pi)^3}
\frac{\hbar\omega_{\bar{k}}}
{e^{\beta\hbar\omega_{\bar{k}}}-1}.
$$

For photons,

$$
\omega_{\bar{k}}=ck,
\qquad
k=|\bar{k}|.
$$

Because the integrand depends only on $k$, spherical coordinates give

$$
d^3k
=
4\pi k^2\,dk.
$$

Using

$$
k=\frac{\omega}{c},
\qquad
dk=\frac{d\omega}{c},
$$

we obtain

$$
d^3k
=
4\pi
\frac{\omega^2}{c^3}
\,d\omega.
$$

Substitution into the energy density gives

$$
\begin{aligned}
\varepsilon(T)
&=
2
\int_0^\infty
\frac{4\pi}{(2\pi)^3}
\frac{\omega^2}{c^3}
\frac{\hbar\omega}
{e^{\beta\hbar\omega}-1}
\,d\omega
\\
&=
\frac{\hbar}{\pi^2c^3}
\int_0^\infty
\frac{\omega^3}
{e^{\beta\hbar\omega}-1}
\,d\omega.
\end{aligned}
$$

Define the spectral energy density $\rho(\omega,T)$ through

$$
\varepsilon(T)
=
\int_0^\infty
\rho(\omega,T)\,d\omega.
$$

Therefore,

$$
\boxed{
\rho(\omega,T)
=
\frac{\hbar\omega^3}{\pi^2c^3}
\frac{1}
{e^{\beta\hbar\omega}-1}
}.
$$

This is Planck's distribution for the energy density per unit angular frequency.

\subsection{Stefan--Boltzmann law}

To evaluate the total energy density, set

$$
x=\beta\hbar\omega.
$$

Then

$$
\omega
=
\frac{x}{\beta\hbar},
\qquad
d\omega
=
\frac{dx}{\beta\hbar},
$$

and hence

$$
\omega^3\,d\omega
=
\frac{x^3\,dx}
{\beta^4\hbar^4}.
$$

Therefore,

$$
\begin{aligned}
\varepsilon(T)
&=
\frac{\hbar}{\pi^2c^3}
\int_0^\infty
\frac{\omega^3}
{e^{\beta\hbar\omega}-1}
\,d\omega
\\
&=
\frac{1}
{\pi^2c^3\beta^4\hbar^3}
\int_0^\infty
\frac{x^3}{e^x-1}\,dx.
\end{aligned}
$$

The relevant integral identity is

$$
\int_0^\infty
\frac{x^p}{e^x-1}\,dx
=
\Gamma(p+1)\zeta(p+1),
\qquad
p>0.
$$

To verify it, use

$$
\frac{1}{e^x-1}
=
\frac{e^{-x}}{1-e^{-x}}
=
\sum_{r=1}^{\infty}e^{-rx}.
$$

Consequently,

$$
\begin{aligned}
\int_0^\infty
\frac{x^p}{e^x-1}\,dx
&=
\sum_{r=1}^{\infty}
\int_0^\infty
x^p e^{-rx}\,dx.
\end{aligned}
$$

With the substitution $y=rx$,

$$
\begin{aligned}
\int_0^\infty
x^p e^{-rx}\,dx
&=
\frac{1}{r^{p+1}}
\int_0^\infty
y^p e^{-y}\,dy
\\
&=
\frac{\Gamma(p+1)}
{r^{p+1}}.
\end{aligned}
$$

Thus,

$$
\begin{aligned}
\int_0^\infty
\frac{x^p}{e^x-1}\,dx
&=
\Gamma(p+1)
\sum_{r=1}^{\infty}
\frac{1}{r^{p+1}}
\\
&=
\Gamma(p+1)\zeta(p+1).
\end{aligned}
$$

For $p=3$,

$$
\Gamma(4)=3!=6
$$

and

$$
\zeta(4)=\frac{\pi^4}{90}.
$$

Therefore,

$$
\int_0^\infty
\frac{x^3}{e^x-1}\,dx
=
6\frac{\pi^4}{90}
=
\frac{\pi^4}{15}.
$$

Substituting this result,

$$
\begin{aligned}
\varepsilon(T)
&=
\frac{1}
{\pi^2c^3\beta^4\hbar^3}
\frac{\pi^4}{15}
\\
&=
\frac{\pi^2}
{15c^3\beta^4\hbar^3}.
\end{aligned}
$$

Since

$$
\beta^{-1}=k_BT,
$$

the final result is

$$
\boxed{
\varepsilon(T)
=
\frac{\pi^2}{15}
\frac{k_B^4T^4}
{\hbar^3c^3}
=
\frac{\pi^2}{15}
\frac{k_B^4T^4}
{(\hbar c)^3}
}.
$$

Thus the equilibrium radiation energy density is proportional to $T^4$.

\subsection{Classical Rayleigh--Jeans limit}

The classical regime corresponds to

$$
\beta\hbar\omega\ll1.
$$

In this limit,

$$
e^{\beta\hbar\omega}-1
=
\beta\hbar\omega
+
O\left(
(\beta\hbar\omega)^2
\right).
$$

The mean occupation number becomes

$$
\begin{aligned}
\langle\hat N\rangle
&=
\frac{1}
{e^{\beta\hbar\omega}-1}
\\
&\simeq
\frac{1}{\beta\hbar\omega}.
\end{aligned}
$$

The mean thermal energy of one mode is consequently

$$
\begin{aligned}
\hbar\omega
\langle\hat N\rangle
&\simeq
\frac{\hbar\omega}
{\beta\hbar\omega}
\\
&=
\frac{1}{\beta}
\\
&=
k_BT.
\end{aligned}
$$

Applying the same limit to Planck's spectral density,

$$
\begin{aligned}
\rho(\omega,T)
&=
\frac{\hbar\omega^3}{\pi^2c^3}
\frac{1}
{e^{\beta\hbar\omega}-1}
\\
&\simeq
\frac{\hbar\omega^3}{\pi^2c^3}
\frac{1}
{\beta\hbar\omega}
\\
&=
\frac{\omega^2}
{\pi^2c^3\beta}
\\
&=
\frac{k_BT\,\omega^2}
{\pi^2c^3}.
\end{aligned}
$$

Therefore,

$$
\boxed{
\rho_{\mathrm{RJ}}(\omega,T)
=
\frac{k_BT\,\omega^2}
{\pi^2c^3}
}.
$$

This is the Rayleigh--Jeans spectrum.

\subsection*{Corrections applied}

\begin{itemize}

\item The zero-point energy was separated explicitly from the thermal Hamiltonian. It contributes only the factor $e^{-\beta E_0}$ to the complete partition function and is not part of the temperature-dependent radiation energy.

\item The factorization marked ``NO!'' in the submitted notes was removed. It was replaced by a valid derivation using the common occupation-number eigenbasis and the commutativity of the number operators.

\item The logarithm of the partition function was corrected to

$$
\ln Z
=
-2\sum_n
\ln\left(
1-e^{-\beta\hbar\omega_n}
\right).
$$

The expression without the logarithm was incorrect.

\item The thermal expectation value was normalized correctly:

$$
\langle\hat{\mathscr{H}}'\rangle
=
\frac{1}{Z}
\operatorname{Tr}
\left(
\hat{\mathscr{H}}'
e^{-\beta\hat{\mathscr{H}}'}
\right).
$$

The factor $1/Z$ was missing from the corresponding line in the submitted notes.

\item The continuum-limit calculation and all factors of $2$, $\pi$, $V$, and $c$ were written explicitly.

\item The integral identity was corrected from the uncertain expression involving $\Gamma^2$ and $\xi$ to

$$
\int_0^\infty
\frac{x^p}{e^x-1}\,dx
=
\Gamma(p+1)\zeta(p+1).
$$

\item The substitution $x=\beta\hbar\omega$ and the complete derivation of the $T^4$ law were supplied instead of the omitted ``little calculations.''

\item The Rayleigh--Jeans limit was stated precisely as $\beta\hbar\omega\ll1$. The formal limit $\hbar\to0$ gives the same approximation but does not state the full physical regime.

\end{itemize}