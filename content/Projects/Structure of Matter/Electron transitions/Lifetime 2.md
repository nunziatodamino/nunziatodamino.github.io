\hypertarget{lifetime-and-natural-linewidth}{%
\subsection{Lifetime and natural
linewidth}\label{lifetime-and-natural-linewidth}}

Consider:

{[}Diagram in the handwritten source: two-level decay.{]}

Then

$$
\frac{dN_B}{dt}
=
-W_{b\to a}^{\mathrm{spontaneous}}N_B
=
-A_{ba}N_B.
$$

Solving it:

$$
N_B(t)=N_B(0)e^{-A_{ba}t}.
$$

Calling

$$
\frac{1}{\tau_b}=A_{ba},
$$

$$
N_B(t)=N_B(0)e^{-t/\tau_b},
$$

$\tau_b$ is the lifetime of the upper level.

This can be generalized to $h$ spontaneous-emission processes:

$$
\begin{aligned}
N_B(t)
&=
N_B(0)e^{-\sum_h A_{ba}^{(h)}t}\\
&=
N_B(0)e^{-t/\tau_b},
\qquad
\frac{1}{\tau_b}=\sum_hA_{ba}^{(h)}.
\end{aligned}
$$

Now for the probability to be at level $|\varepsilon_b\rangle$
(survival P.):

$$
\begin{aligned}
P(t+dt)
&=
P(t)(1-A_{ba}dt),\\
\frac{dP}{dt}
&=
-A_{ba}P,\\
P(t)
&=
P(0)e^{-t/\tau_b}.
\end{aligned}
$$

Considering

$$
P=\lVert c_b\rVert^2,
$$

$$
\lVert c_b(t)\rVert^2
=
\lVert c_b(0)\rVert^2e^{-t/\tau_b}.
$$

Given

$$
\Delta E\,\tau_b\gtrsim\hbar
\quad\longrightarrow\quad
\Delta E\sim\frac{\hbar}{\tau_b}.
$$

Now we try to eval the lifetime $\tau_b$ with perturbation theory.

In the interaction picture, let's start from

$$
|\Psi_I(0)\rangle=|\varepsilon_i\rangle.
$$

$$
|\Psi_I(t)\rangle
=
|\varepsilon_i\rangle
-\frac{i}{\hbar}
\int_0^t dt'\,
\hat V_I(t')|\Psi_I(t')\rangle.
$$

Then, projecting on $\langle\varepsilon_m|$:

$$
c_m(t)
=
\delta_{mi}
-\frac{i}{\hbar}
\int_0^t dt'\,
\langle\varepsilon_m|
\hat V_I(t')
|\Psi_I(t')\rangle.
$$

$$
\begin{aligned}
c_m(t)
&=
\delta_{mi}
-\frac{i}{\hbar}
\sum_n
\int_0^t dt'\,
\langle\varepsilon_m|
\hat V_I(t')
|\varepsilon_n\rangle
\langle\varepsilon_n|\Psi_I(t')\rangle\\
&=
\delta_{mi}
-\frac{i}{\hbar}
\sum_n
\int_0^t dt'\,
\langle\varepsilon_m|
\hat V_I(t')
|\varepsilon_n\rangle
c_n(t').
\end{aligned}
$$

Giving in the end:

$$
\begin{aligned}
c_m(t)
&=
\delta_{mi}
-\frac{i}{\hbar}
\int_0^t dt'\,
\langle\varepsilon_m|
\hat V_I(t')
|\varepsilon_i\rangle
c_i(t')\\
&\quad
-\frac{i}{\hbar}
\sum_{n\ne i}
\int_0^t dt'\,
\langle\varepsilon_m|
\hat V_I(t')
|\varepsilon_n\rangle
c_n(t').
\end{aligned}
$$

Then we have:

$$
\langle\varepsilon_m|
\hat V_I(t)
|\varepsilon_n\rangle
\equiv
V_{m,n}(t).
$$

$$
\begin{cases}
\displaystyle
c_i(t)
=
1
-\frac{i}{\hbar}
\int_0^t dt'\,
V_{ii}(t')c_i(t')
-\frac{i}{\hbar}
\sum_{m\ne i}
\int_0^t dt'\,
V_{i,m}(t')c_m(t'),
\\
\displaystyle
c_n(t)
=
-\frac{i}{\hbar}
\int_0^t dt'\,
V_{n,i}(t')c_i(t')
-\frac{i}{\hbar}
\sum_{m\ne i}
\int_0^t dt'\,
V_{n,m}(t')c_m(t'),
\qquad (n\ne i).
\end{cases}
$$

By substituting recursively and keeping only terms linear in
$\hat V_I(t')$:

$$
\begin{cases}
\displaystyle
c_i(t)
=
1
-\frac{i}{\hbar}
\int_0^t dt'\,
V_{ii}(t')c_i(t')
+\mathcal O(\hat V_I^2),
\\
\displaystyle
c_n(t)
=
-\frac{i}{\hbar}
\int_0^t dt'\,
V_{n,i}(t')c_i(t')
+\mathcal O(\hat V_I^2),
\qquad (n\ne i).
\end{cases}
$$

Consider now the system to be:

$$
\begin{aligned}
|\varepsilon_i\rangle
&=
|\varepsilon_b\rangle
\otimes
|\{0\}\rangle,\\
|\varepsilon_f\rangle
&=
|\varepsilon_a\rangle
\otimes
|\{0\}+\bar e_{\alpha_i}\rangle.
\end{aligned}
$$

Note

$$
\varepsilon_b-\varepsilon_a>0.
$$

Let's call

$$
\hat{\mathscr H}_{\mathrm{int}}
=
\sum_{\bar n,s}
\hat V_{\bar n,s}
\left(
\hat a_{\bar n,s}
+\hat a_{\bar n,s}^{\dagger}
\right)
\qquad
\text{(dipole approximation).}
$$

and

$$
\hat V_I(t)
=
\hat U_0^\dagger(t)
\hat{\mathscr H}_{\mathrm{int}}
\hat U_0(t).
$$

Now let's evaluate:

$$
\begin{aligned}
c_f(t)
&=
-\frac{i}{\hbar}
\int_0^t dt'\,
V_{fi}(t')c_i(t')\\
&=
-\frac{i}{\hbar}
\sum_{\alpha_j}
\int_0^t dt'\,
\langle\varepsilon_a|
\hat U_0^\dagger(t')
\hat V_{\alpha_j}
\hat U_0(t')
|\varepsilon_b\rangle\\
&\qquad\times
\langle\{0\}+\bar e_{\alpha_i}|
\left(
\hat a_{\alpha_j}
+\hat a_{\alpha_j}^{\dagger}
\right)
|\{0\}\rangle
c_i(t').
\end{aligned}
$$

Continuing from this expression,

$$
\begin{aligned}
c_f(t)
&=
-\frac{i}{\hbar}
\sum_{\alpha_j}
\int_0^t dt'\,
\langle\varepsilon_a|
\hat U_0^\dagger(t')
\hat V_{\alpha_j}
\hat U_0(t')
|\varepsilon_b\rangle\\
&\qquad\times
\langle\{0\}+\bar e_{\alpha_i}|
\left(
\hat a_{\alpha_j}
+\hat a_{\alpha_j}^{\dagger}
\right)
|\{0\}\rangle
c_i(t')\\
&=
-\frac{i}{\hbar}
\sum_{\alpha_j}
\int_0^t dt'\,
e^{-i(\varepsilon_b-\varepsilon_a)t'/\hbar}
e^{+i\omega_{\alpha_j}t'}
\langle\varepsilon_a|
\hat V_{\alpha_j}
|\varepsilon_b\rangle\\
&\qquad\times
\langle\{0\}+\bar e_{\alpha_i}|
\left(
\hat a_{\alpha_j}
+\hat a_{\alpha_j}^{\dagger}
\right)
|\{0\}\rangle
c_i(t')\\
&=
-\frac{i}{\hbar}
\sum_{\alpha_j}
V_{\alpha_j}^{ab}
\int_0^t dt'\,
e^{-i(\omega_{ba}-\omega_{\alpha_j})t'}\\
&\qquad\times
\langle\{0\}+\bar e_{\alpha_i}|
\left(
\hat a_{\alpha_j}
+\hat a_{\alpha_j}^{\dagger}
\right)
|\{0\}\rangle
c_i(t').
\end{aligned}
$$

Recalling

$$
\hat a_{\alpha_j}|\{0\}\rangle=0
\qquad
\forall\alpha_j,
$$

$$
\begin{aligned}
\langle\{0\}+\bar e_{\alpha_i}|
\hat a_{\alpha_j}^{\dagger}
|\{0\}\rangle
&=
\langle\bar e_{\alpha_i}|\bar e_{\alpha_j}\rangle\\
&=
\delta_{\alpha_i\alpha_j}.
\end{aligned}
$$

So in the end:

$$
\begin{aligned}
c_f(t)
&=
-\frac{i}{\hbar}
\sum_{\alpha_j}
V_{\alpha_j}^{ab}
\int_0^t dt'\,
e^{-i(\omega_{ba}-\omega_{\alpha_j})t'}
\,
\delta_{\alpha_i\alpha_j}
c_i(t')\\
&=
-\frac{i}{\hbar}
V_{\alpha_i}^{ab}
\int_0^t dt'\,
e^{-i(\omega_{ba}-\omega_{\alpha_i})t'}
c_i(t').
\end{aligned}
$$

Using

$$
\begin{aligned}
c_i(t')
&=
e^{-t'/(2\tau_b)}c_i(0)\\
&=
e^{-i\left(-i/(2\tau_b)\right)t'}c_i(0),
\end{aligned}
$$

$$
\begin{aligned}
c_f(t)
&=
-\frac{i}{\hbar}
V_{\alpha_i}^{ab}
\int_0^t dt'\,
e^{-i\left(\omega_{ba}-\omega_{\alpha_i}-i/(2\tau_b)\right)t'}
c_i(0)\\
&=
-\frac{i}{\hbar}
V_{\alpha_i}^{ab}
\frac{
e^{-i\left(\omega_{ba}-\omega_{\alpha_i}-i/(2\tau_b)\right)t}-1
}{
-i\left(\omega_{ba}-\omega_{\alpha_i}-i/(2\tau_b)\right)
}
c_i(0).
\end{aligned}
$$

Finally, set

$$
\Gamma_b\equiv\frac{1}{2\tau_b}.
$$

Then, in the limit

$$
t\gg\tau_b
\quad\Longleftrightarrow\quad
\Gamma_bt\gg1.
$$

$$
c_f(t)
=
-\frac{i}{\hbar}
V_{\alpha_i}^{ab}
\frac{
e^{-i(\omega_{ba}-\omega_{\alpha_i})t}e^{-\Gamma_bt}-1
}{
-i(\omega_{ba}-\omega_{\alpha_i}-i\Gamma_b)
}
c_i(0).
$$

Calling

$$
\Delta\omega\equiv\omega_{ba}-\omega_{\alpha_i},
$$

$$
\begin{aligned}
\lVert c_f(t)\rVert^2
&=
\frac{1}{\hbar^2}
\lvert V_{\alpha_i}^{ab}\rvert^2
\frac{
\lvert e^{-i\Delta\omega t}e^{-\Gamma_bt}-1\rvert^2
}{
\lvert\Delta\omega-i\Gamma_b\rvert^2
}
\lVert c_i(0)\rVert^2\\
&=
\frac{1}{\hbar^2}
\lvert V_{\alpha_i}^{ab}\rvert^2
\frac{
\lvert e^{-i\Delta\omega t}e^{-\Gamma_bt}-1\rvert^2
}{
(\Delta\omega-i\Gamma_b)(\Delta\omega+i\Gamma_b)
}
\lVert c_i(0)\rVert^2\\
&=
\frac{1}{\hbar^2}
\lvert V_{\alpha_i}^{ab}\rvert^2
\frac{
\lvert e^{-i\Delta\omega t}e^{-\Gamma_bt}-1\rvert^2
}{
\Delta\omega^2+\Gamma_b^2
}
\lVert c_i(0)\rVert^2\\
&\xrightarrow{\Gamma_bt\gg1}
\frac{1}{\hbar^2}
\lvert V_{\alpha_i}^{ab}\rvert^2
\frac{\lVert c_i(0)\rVert^2}
{\Delta\omega^2+\Gamma_b^2}.
\end{aligned}
$$

We can relate this to the Lorentzian distribution:

$$
f(\omega,\omega_{ba},\Gamma_b)
=
\frac{1}{\pi}
\frac{\Gamma_b}
{(\omega_{ba}-\omega)^2+\Gamma_b^2}
\xrightarrow{\Gamma_b\to0}
\delta(\omega-\omega_{ba}).
$$

So that one can write:

$$
\lVert c_f(t)\rVert^2
=
\frac{2\pi}{\hbar^2}
\tau_b
\lvert V_{\alpha_i}^{ab}\rvert^2
f(\omega_{\alpha_i},\omega_{ba},\Gamma_b)
\lVert c_i(0)\rVert^2.
$$

{[}Diagram in the handwritten source: Lorentzian linewidth.{]}

$$
\Gamma_b=\mathrm{HWHM},
\qquad
\Delta\omega_{\mathrm{FWHM}}=2\Gamma_b=\frac{1}{\tau_b}.
$$

Hence

$$
\begin{aligned}
\Delta E_{\mathrm{FWHM}}
&=
\hbar\Delta\omega_{\mathrm{FWHM}}\\
&=
2\hbar\Gamma_b\\
&=
\frac{2\hbar}{2\tau_b}\\
&\sim
\frac{\hbar}{\tau_b}.
\end{aligned}
$$

confirming the lifetime--linewidth estimate.

Let's evaluate now $\tau_b$. Consider:

$$
\begin{aligned}
\dot c_i(t)
&=
\langle\varepsilon_i|
\partial_t
|\Psi_I(t)\rangle\\
&=
-\frac{i}{\hbar}
\langle\varepsilon_i|
\hat V_I(t)
|\Psi_I(t)\rangle.
\end{aligned}
$$

Where we used:

$$
i\hbar\partial_t|\Psi_I(t)\rangle
=
\hat V_I(t)|\Psi_I(t)\rangle.
$$

Now we plug

$$
|\Psi_I(t)\rangle
=
|\Psi_I(0)\rangle
-\frac{i}{\hbar}
\int_0^t dt'\,
\hat V_I(t')|\Psi_I(t')\rangle.
$$

So that in the end we have the expression:

$$
\begin{aligned}
\dot c_i(t)
&=
-\frac{i}{\hbar}
\langle\varepsilon_i|
\hat V_I(t)
\left(
|\Psi_I(0)\rangle
-\frac{i}{\hbar}
\int_0^t dt'\,
\hat V_I(t')|\Psi_I(t')\rangle
\right)\\
&=
-\frac{i}{\hbar}
\langle\varepsilon_i|
\hat V_I(t)
|\Psi_I(0)\rangle\\
&\quad
-\frac{1}{\hbar^2}
\langle\varepsilon_i|
\hat V_I(t)
\int_0^t dt'\,
\hat V_I(t')|\Psi_I(t')\rangle.
\end{aligned}
$$

Keeping the complete product basis explicit,

$$
\begin{aligned}
\dot c_i(t)
&=
-\frac{i}{\hbar}
\langle\varepsilon_i|
\hat V_I(t)
|\Psi_I(0)\rangle\\
&\quad
-\frac{1}{\hbar^2}
\langle\varepsilon_i|
\hat V_I(t)
\int_0^t dt'\,
\hat V_I(t')|\Psi_I(t')\rangle.
\end{aligned}
$$

Consider now:

$$
|\varepsilon_\ell\rangle
=
|\varepsilon_m\rangle
\otimes
|\{m_\alpha\}\rangle.
$$

Considering the new multi-index

$$
\ell\equiv(m,\{m_\alpha\}),
$$

we have the completeness relation:

$$
\begin{aligned}
\mathbb{1}
&=
\mathbb{1}_{\mathrm{mat}}
\otimes
\mathbb{1}_{\mathrm{rad}}\\
&=
\sum_\ell
|\varepsilon_\ell\rangle
\langle\varepsilon_\ell|\\
&=
\sum_m
|\varepsilon_m\rangle
\langle\varepsilon_m|
\otimes
\sum_{\{m_\alpha\}}
|\{m_\alpha\}\rangle
\langle\{m_\alpha\}|.
\end{aligned}
$$

Then, given

$$
\langle\varepsilon_i|
\hat V_I(t)
|\varepsilon_i\rangle
=0,
$$

recall:

$$
\begin{aligned}
\hat V_I(t)
&=
\hat U_0^\dagger(t)
\hat{\mathscr H}_{\mathrm{int}}
\hat U_0(t),\\
|\varepsilon_i\rangle
&=
|\varepsilon_b\rangle
\otimes
|\{0\}\rangle,\\
\hat{\mathscr H}_{\mathrm{int}}
&=
\sum_{\alpha_j}
\hat V_{\alpha_j}
\left(
\hat a_{\alpha_j}
+\hat a_{\alpha_j}^{\dagger}
\right).
\end{aligned}
$$

Then

$$
\begin{aligned}
\langle\varepsilon_i|
\hat V_I(t)
|\varepsilon_i\rangle
&=
\langle\varepsilon_i|
\hat{\mathscr H}_{\mathrm{int}}
|\varepsilon_i\rangle\\
&=
\sum_{\alpha_j}
\langle\varepsilon_b|
\hat V_{\alpha_j}
|\varepsilon_b\rangle
\times
\underbrace{
\langle\{0\}|
\left(
\hat a_{\alpha_j}
+\hat a_{\alpha_j}^{\dagger}
\right)
|\{0\}\rangle
}_{=0}\\
&=0.
\end{aligned}
$$

To obtain the second-order equation without losing the time dependence
of the survival amplitude, first separate the initial amplitude from the
other amplitudes:

$$
\begin{aligned}
\dot c_i(t)
&=-\frac{i}{\hbar}
\sum_\ell V_{i\ell}^{I}(t)c_\ell(t)\\
&=-\frac{i}{\hbar}V_{ii}^{I}(t)c_i(t)
-\frac{i}{\hbar}\sum_{\ell\ne i}V_{i\ell}^{I}(t)c_\ell(t).
\end{aligned}
$$

Here $V_{ii}^{I}(t)=0$. For every $\ell\ne i$, the integral equation
is

$$
c_\ell(t)
=-\frac{i}{\hbar}\int_0^t dt'\,
V_{\ell i}^{I}(t')c_i(t')
-\frac{i}{\hbar}\sum_{p\ne i}\int_0^t dt'\,
V_{\ell p}^{I}(t')c_p(t').
$$

The first term on the right is first order in the interaction. Inserting
it into $\dot c_i$ produces the complete second-order contribution;
inserting the second term would start at third order. Therefore

$$
\boxed{
\dot c_i(t)
=-\frac{1}{\hbar^2}
\sum_{\ell\ne i}
\langle\varepsilon_i\lvert\hat V_I(t)\rvert\varepsilon_\ell\rangle
\int_0^t dt'\,
\langle\varepsilon_\ell\lvert\hat V_I(t')\rvert\varepsilon_i\rangle
c_i(t')
+\mathcal O(\hat V^3)
}.
$$

There is no factor $4$: the factor in front follows directly from
$(-i/\hbar)^2=-1/\hbar^2$.

Now evaluate the two matrix elements. An intermediate state relevant to
spontaneous emission consists of a lower matter state
$\lvert\varepsilon_a\rangle$ and one photon in a definite mode. For a
general radiation occupation $\{m_\alpha\}$,

$$
\begin{aligned}
\langle\varepsilon_i|
\hat V_I(t)
|\varepsilon_\ell\rangle
&=
\sum_{\alpha_j}
e^{+i(\omega_{ba}-\omega_{\alpha_j})t}
\langle\varepsilon_b|
\hat V_{\alpha_j}
|\varepsilon_a\rangle\\
&\qquad\times
\langle\{0\}|
\left(
\hat a_{\alpha_j}
+\hat a_{\alpha_j}^{\dagger}
\right)
|\{m_\alpha\}\rangle\\
&=
\sum_{\alpha_j}
e^{+i(\omega_{ba}-\omega_{\alpha_j})t}
V_{\alpha_j}^{ba}
\,
\sqrt{m_{\alpha_j}}\,
\delta_{0,m_{\alpha_j}-1}
\prod_{i\ne j}
\delta_{0,m_{\alpha_i}}\\
&=
\sum_{\alpha_j}
e^{+i(\omega_{ba}-\omega_{\alpha_j})t}
V_{\alpha_j}^{ba}
\,
\sqrt{m_{\alpha_j}}\,
\delta_{1,m_{\alpha_j}}
\prod_{i\ne j}
\delta_{0,m_{\alpha_i}}.
\end{aligned}
$$

Because

$$
\{0\}
=
m_{\alpha_1}=0,\,
m_{\alpha_2}=0,\,
\ldots
$$

So, calling

$$
\eta_{\alpha_j}
\equiv
\sqrt{m_{\alpha_j}}\,
\delta_{1,m_{\alpha_j}}
\prod_{i\ne j}
\delta_{0,m_{\alpha_i}},
$$

$$
\langle\varepsilon_i|
\hat V_I(t)
|\varepsilon_\ell\rangle
=
\sum_{\alpha_j}
e^{+i(\omega_{ba}-\omega_{\alpha_j})t}
V_{\alpha_j}^{ba}
\,
\eta_{\alpha_j}.
$$

Now consider:

$$
\begin{aligned}
&
\langle\varepsilon_i|
\hat V_I(t)
|\varepsilon_\ell\rangle
\langle\varepsilon_\ell|
\hat V_I(t')
|\varepsilon_i\rangle\\
&=
\sum_{\alpha_j}
\sum_{\alpha_i}
e^{+i(\omega_{ba}-\omega_{\alpha_j})t}
e^{-i(\omega_{ba}-\omega_{\alpha_i})t'}
V_{\alpha_j}^{ba}
V_{\alpha_i}^{ab}
\,
\eta_{\alpha_j}\eta_{\alpha_i}.
\end{aligned}
$$

We have to prove now that:

\begin{enumerate}
\def\labelenumi{\arabic{enumi}.}
\item
  $$
   V_{\alpha_i}^{ab}
   =
   \left(V_{\alpha_i}^{ba}\right)^\dagger.
   $$
\item
  $$
   \eta_{\bar k,s}\eta_{\bar n,s'}
   =
   \eta_{\bar k,s}
   \delta_{\bar k\bar n}
   \delta_{ss'}.
   $$
\end{enumerate}

Prove 1:

$$
V_{\alpha_i}^{ab}
=
\langle\varepsilon_a|
\hat V_{\alpha_i}
|\varepsilon_b\rangle.
$$

$$
\begin{aligned}
\left(V_{\alpha_i}^{ba}\right)^\dagger
&=
\left(
\langle\varepsilon_b|
\hat V_{\alpha_i}
|\varepsilon_a\rangle
\right)^\dagger\\
&=
\langle\varepsilon_a|
\hat V_{\alpha_i}^{\dagger}
|\varepsilon_b\rangle\\
&=
\langle\varepsilon_a|
\hat V_{\alpha_i}
|\varepsilon_b\rangle,
\end{aligned}
$$

given

$$
\hat V_{\alpha_i}
=
\hat V_{\alpha_i}^{\dagger}.
$$

$\square$

For the second identity, use the definition

$$
\eta_{\alpha_i}
=
\sqrt{m_{\alpha_i}}\,\delta_{1,m_{\alpha_i}}
\prod_{j\ne i}
\delta_{0,m_{\alpha_j}}.
$$

Hence

$$
\eta_{\alpha_i}\eta_{\alpha_j}
=
\sqrt{m_{\alpha_i}m_{\alpha_j}}\,
\delta_{1,m_{\alpha_i}}
\delta_{1,m_{\alpha_j}}
\left(
\prod_{k\ne i}\delta_{0,m_{\alpha_k}}
\right)
\left(
\prod_{p\ne j}\delta_{0,m_{\alpha_p}}
\right).
$$

If $\alpha_i\ne\alpha_j$, the first product contains
$\delta_{0,m_{\alpha_j}}$ while the prefactor contains
$\delta_{1,m_{\alpha_j}}$, so their product is zero. If
$\alpha_i=\alpha_j$, the occupation is forced to be $m_{\alpha_i}=1$
and therefore $\eta_{\alpha_i}^2=\eta_{\alpha_i}$. Thus

$$
\eta_{\alpha_i}\eta_{\alpha_j}
=\eta_{\alpha_i}\delta_{\alpha_i\alpha_j}.
$$

Writing $\alpha=(\bar k,s)$ makes the two Kronecker factors explicit:

$$
\eta_{\bar k,s}\eta_{\bar n,s'}
=\eta_{\bar k,s}\delta_{\bar k\bar n}\delta_{ss'}.
$$

Then:

$$
\begin{aligned}
&
\langle\varepsilon_i|
\hat V_I(t)
|\varepsilon_\ell\rangle
\langle\varepsilon_\ell|
\hat V_I(t')
|\varepsilon_i\rangle\\
&=
\sum_{\alpha_i}
\lvert V_{\alpha_i}^{ba}\rvert^2
e^{+i(\omega_{ba}-\omega_{\alpha_i})t}
e^{-i(\omega_{ba}-\omega_{\alpha_i})t'}
\eta_{\alpha_i}.
\end{aligned}
$$

Now we go back to $\dot c_i(t)$.

We recall:

$$
\sum_\ell
=
\sum_m\sum_{\{m_\alpha\}}.
$$

$$
\begin{aligned}
\sum_\ell\eta_{\alpha_i}
&=
\sum_m\sum_{\{m_\alpha\}}\eta_{\alpha_i}\\
&=
\sum_m1.
\end{aligned}
$$

We can see this:

$$
\begin{aligned}
\sum_{\{m_\alpha\}}
\delta_{1,m_{\alpha_i}}
\prod_{j\ne i}
\delta_{0,m_{\alpha_j}}
&=
\sum_{m_{\alpha_i}=0}^{\infty}
\delta_{1,m_{\alpha_i}}
\prod_{j\ne i}
\sum_{m_{\alpha_j}=0}^{\infty}
\delta_{0,m_{\alpha_j}}\\
&=
(0+1+0+\cdots)
\prod_{j\ne i}
(1+0+0+\cdots)\\
&=
1.
\end{aligned}
$$

The radiation-state sum therefore selects exactly one photon in the
chosen mode and vacuum in every other mode. The remaining sum is the sum
over accessible matter states $m$.

\begin{center}\rule{0.5\linewidth}{0.5pt}\end{center}

\hypertarget{section-10}{%
\chapter{2026-08-27}\label{section-10}}

\textbf{Topics:} Continuum decay kernel; Klein--Gordon equation.

\hypertarget{continuum-decay-kernel}{%
\subsection{Continuum decay kernel}\label{continuum-decay-kernel}}

Before continuing, recall the survival-amplitude equation obtained on
the previous study day:

$$
\dot c_i(t)
\simeq
-\frac{1}{\hbar^2}
\sum_{\ell}
\langle\varepsilon_i|\hat V_I(t)|\varepsilon_{\ell}\rangle
\int_0^t dt'\,
\langle\varepsilon_{\ell}|\hat V_I(t')|\varepsilon_i\rangle
c_i(t').
$$

Where

$$
\ell\equiv\left(n,\{m_{\alpha}\}\right).
$$

And also:

$$
\begin{aligned}
&\langle\varepsilon_i|\hat V_I(t)|\varepsilon_{\ell}\rangle
\langle\varepsilon_{\ell}|\hat V_I(t')|\varepsilon_i\rangle \\
&\quad=
\sum_{\alpha_i}
\left|V_{\alpha_i}^{bm}\right|^2
e^{i(\omega_{bm}-\omega_{\alpha_i})t}
e^{-i(\omega_{bm}-\omega_{\alpha_i})t'}
\eta_{m_{\alpha_i}}.
\end{aligned}
$$

Where

$$
\eta_{m_{\alpha_i}}
=
\delta_{0,m_{\alpha_i}-1}
\prod_{j\ne i}\delta_{0,m_{\alpha_j}}.
$$

Now, considering

$$
\sum_{\ell}
=
\sum_m\sum_{\{m_{\alpha}\}},
$$

then we proved:

$$
\sum_{\ell}\eta_{m_{\alpha_i}}
=
\sum_m1.
$$

We have now all the ingredients to eval $\dot c_i(t)$.

$$
\begin{aligned}
\dot c_i(t)
&=
-\frac{1}{\hbar^2}
\sum_m\sum_{\alpha_i}
\left|V_{\alpha_i}^{bm}\right|^2
e^{i(\omega_{bm}-\omega_{\alpha_i})t} \\
&\quad\times
\int_0^t dt'\,
e^{-i(\omega_{bm}-\omega_{\alpha_i})t'}
c_i(t').
\end{aligned}
$$

Now we run on the continuum:

$$
\alpha_i=(\bar n,s).
$$

$$
\begin{aligned}
\sum_{\alpha_i}
&=
\sum_{\bar k,s} \\
&\longrightarrow
\sum_{s=1,2}V\int\frac{d^3\bar k}{(2\pi)^3} \\
&=
\sum_s\frac{V}{(2\pi)^3}
\int_0^{+\infty}dk\,k^2
\int_0^{\pi}d\theta
\int_0^{2\pi}d\phi\,\sin\theta.
\end{aligned}
$$

Recalling:

$$
\hat V_{\bar n s}
=
\frac{e}{m}
\sqrt{\frac{\hbar}{2\varepsilon_0V\omega_n}}
\,\hat{\bar p}\cdot\bar{\varepsilon}_{\bar n s}.
$$

We already proved:

$$
\sum_s\left|V_{\bar n s}^{bm}\right|^2
=
\frac{e^2\hbar}{2\varepsilon_0V}
\frac{\omega_{bm}^2}{\omega_n}
\left(\left|\bar r_{bm}\right|^2-\left|\hat k\cdot\bar r_{bm}\right|^2\right).
$$

In the end, integrating also the time integral using the

$$
c_i(t')=e^{-t'/(2\tau_b)}c_i(0)
$$

ansatz:

$$
\begin{aligned}
\dot c_i(t)
&=
-\frac{1}{\hbar^2}
\sum_m
\frac{e^2\omega_{bm}^2\hbar}{6\varepsilon_0\pi^2c^3}
\left|\bar r_{bm}\right|^2 \\
&\quad\times
\int_0^{+\infty}d\omega\,\omega\,
\frac{
e^{-t/(2\tau_b)}-e^{-i(\omega-\omega_{bm})t}
}{
i(\omega-\omega_{bm})-\dfrac{1}{2\tau_b}
}
c_i(0).
\end{aligned}
$$

Here $k=\omega/c$, $dk=d\omega/c$, and the angular integral of
$|\bar r_{bm}|^2-|\hat k\cdot\bar r_{bm}|^2$ over the sphere is $(8\pi/3)|\bar r_{bm}|^2$, including complex transition dipoles. The volume factor
cancels the $1/V$ contained in the squared matrix element. The frequency integral is formal: extending the dipole approximation to arbitrarily high frequencies makes it ultraviolet-divergent and requires a cutoff or a consistent treatment beyond that approximation. Its weak-coupling, near-resonance Markov evaluation gives the Wigner--Weisskopf exponential decay and the natural linewidth obtained above.
