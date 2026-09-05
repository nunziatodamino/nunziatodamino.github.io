
Given the equation found in [[Physical analysis of the relativistic corrections for one-electron atoms and ions]] we want to evaluate the energy up to $O(c^{-2})$.
Let's consider the zeroth order by extending the unperturbed hydrogenic Schrodinger equation to include the spin:

$$
\hat{\mathscr H}_0
\varphi_{n\ell m_\ell m_s}
=
E_n
\varphi_{n\ell m_\ell m_s}.
$$

(A review note on the non-relativistic hydrogen atom can be found [[The non-relativistic hydrogenic atom]].)
Let's evaluate the energy corrections up to $O(\lambda^2)$, $\lambda=\frac{1}{c^2}$ (see [[A note on perturbation theory]])

- The first correction is

$$
\Delta E_1
=
\langle\psi_0|
\hat{\mathscr H}_{\mathrm{mom}}
|\psi_0\rangle.
$$

With

$$
\hat{\mathscr H}_{\mathrm{mom}}
=
-\frac{\hat p^4}{8m^3c^2}
=
-\frac{1}{2mc^2}
\left(
\frac{\hat p^2}{2m}
\right)^2.
$$

But, since $\hat{\mathscr H}_0=\hat T+V(r) \iff \hat T=\hat{\mathscr H}_0-V(r),$ we have:

$$
\hat{\mathscr H}_{\mathrm{mom}}
=
-\frac{1}{2mc^2}
\left(
\hat{\mathscr H}_0-V(r)
\right)^2.
$$

So expanding,

$$
\begin{aligned}
\Delta E_1
&=
-\frac{1}{2mc^2}
\Big[
\langle\psi_0|
\hat{\mathscr H}_0^2
|\psi_0\rangle
\\
&\qquad
-
\langle\psi_0|
\hat{\mathscr H}_0V(r)
|\psi_0\rangle
-
\langle\psi_0|
V(r)\hat{\mathscr H}_0
|\psi_0\rangle
\\
&\qquad
+
\langle\psi_0|
V^2(r)
|\psi_0\rangle
\Big]
\\
&=
-\frac{1}{2mc^2}
\Big[
E_n^2
-
2E_n
\langle\psi_0|
V(r)
|\psi_0\rangle
+
\langle\psi_0|
V^2(r)
|\psi_0\rangle
\Big].
\end{aligned}
$$

One can [[Mean value of radial functions respect the hydrogenic wavefunction]]:

$$
\begin{aligned}
\left\langle
n\ell m_\ell
\left|
\frac1r
\right|
n\ell m_\ell
\right\rangle
&=
\frac{Z}{a_0n^2},
\\
\left\langle
n\ell m_\ell
\left|
\frac1{r^2}
\right|
n\ell m_\ell
\right\rangle
&=
\frac{Z^2}
{a_0^2n^3\left(\ell+\frac12\right)}.
\end{aligned}
$$

Leading to

$$
\Delta E_1
=
-E_n
\frac{(Z\alpha)^2}{n^2}
\left(
\frac34
-
\frac{n}{\ell+\frac12}
\right).
$$

- The second correction is the spin-orbit one.
Consider

$$
\hat{\mathscr H}_{\mathrm{SO}}
=
\xi(r)\,
\hat{\bar L}\cdot\hat{\bar S}.
$$

In our case, given

$$
V(r)
=
-k_e\frac{Ze^2}{r},
$$

we have

$$
\xi(r)
=
\frac{1}{2mc^2}
k_eZe^2
\frac1{r^3}.
$$

Given

$$
[
\hat L^2,
\hat{\mathscr H}_{\mathrm{SO}}
]
=
0,
$$

we have

$$
\langle
n\ell m_\ell m_s
|
\hat{\mathscr H}_{\mathrm{SO}}
|
n'\ell' m_\ell' m_s'
\rangle
=
0
\qquad
\text{if }
\ell\neq\ell'.
$$

I.e. $\hat{\mathscr H}_{\mathrm{SO}}$ does not connect states with different $\ell$ $\to$ $\ell$ is conserved.

Also, for fixed $n,\ell$, these matrices have dimensions $2(2\ell+1)\times 2(2\ell+1)$ are not diagonal and should be diagonalized.
Hence it is better to choose a basis where the relevant operators are diagonal.

Let's consider the CSCO

$$
\left\{
\hat{\mathscr H}_0,
\hat L^2,
\hat S^2,
\hat J^2,
\hat J_z
\right\}.
$$

We have

$$
\begin{aligned}
\hat{\mathscr H}_0
|n\ell jm_j\rangle
&=
E_n
|n\ell jm_j\rangle
\\
\hat L^2
|n\ell jm_j\rangle
&=
\hbar^2\ell(\ell+1)
|n\ell jm_j\rangle
\\
\hat S^2
|n\ell jm_j\rangle
&=
\hbar^2s(s+1)
|n\ell jm_j\rangle
\\
\hat J^2
|n\ell jm_j\rangle
&=
\hbar^2j(j+1)
|n\ell jm_j\rangle 
\\
\hat J_z
|n\ell jm_j\rangle
&=
\hbar m_j
|n\ell jm_j\rangle.
\end{aligned}
$$


We can of course write

$$
\begin{aligned}
|n\ell jm_j\rangle
&=
\sum_{n'\ell'm_\ell'm_s'}
\langle
n'\ell'm_\ell'm_s'
|
n\ell jm_j
\rangle
|n'\ell'm_\ell'm_s'\rangle
\\
&=
\sum_{n'\ell'm_\ell'm_s'}
\delta_{nn'}
\delta_{\ell\ell'}
\langle
\ell m_\ell',sm_s'
|
jm_j
\rangle
|n'\ell'm_\ell'm_s'\rangle
\\
&=
\sum_{m_\ell',m_s'}
\langle
\ell m_\ell',sm_s'
|
jm_j
\rangle
|n\ell m_\ell'm_s'\rangle.
\end{aligned}
$$

Let's do now the calculation in this new basis:

$$
\Delta E_2
=
\langle
n\ell jm_j
|
\hat{\mathscr H}_{\mathrm{SO}}
|
n\ell jm_j
\rangle.
$$

Recalling $\hat{\bar J}=\hat{\bar L}+\hat{\bar S} \to \hat J^2=\hat L^2+\hat S^2+2\hat{\bar L}\cdot\hat{\bar S} \iff \hat{\bar L}\cdot\hat{\bar S}=\frac12\left(\hat J^2-\hat L^2-\hat S^2 \right).$

Therefore

$$
\begin{aligned}
\Delta E_2
&=
\left\langle
n\ell jm_j
\left|
\xi(r)
\frac12
\left(
\hat J^2
-
\hat L^2
-
\hat S^2
\right)
\right|
n\ell jm_j
\right\rangle
\\
&=
\frac{\hbar^2}{2}
\langle\xi(r)\rangle
\left[
j(j+1)
-
\ell(\ell+1)
-
s(s+1)
\right].
\end{aligned}
$$

Given $s=\frac12,$ we obtain

$$
\Delta E_2
=
\frac{\hbar^2}{2}
\langle\xi(r)\rangle
\left[
j(j+1)
-
\ell(\ell+1)
-
\frac34
\right].
$$

We have

$$
\langle\xi(r)\rangle
=
\frac{1}{2mc^2}
k_eZe^2
\left\langle
\frac1{r^3}
\right\rangle.
$$

Where (see [[Mean value of radial functions respect the hydrogenic wavefunction]])

$$
\left\langle
\frac1{r^3}
\right\rangle
=
\frac{Z^3}
{a_0^3n^3
\ell
\left(\ell+\frac12\right)
(\ell+1)}.
$$

Thus

$$
\langle\xi(r)\rangle
=
\frac{1}{2mc^2}
k_eZe^2
\frac{Z^3}
{a_0^3n^3
\ell
\left(\ell+\frac12\right)
(\ell+1)}.
$$

Recalling that $\hat{\bar J} =\hat{\bar L} + \hat{\bar S}$ we have

$$
\begin{cases}
j
=
\ell\pm\frac12
\qquad
\text{for }
\ell\neq0,\\

j=\frac12
\qquad
\text{for }
\ell=0.
\end{cases}
$$

So, for $\ell=0$, then trivially $\hat{\bar L}\cdot\hat{\bar S} = 0$ from which we conclude

$$ \Delta E_2 = 0 \qquad l=0 $$

While, for $\ell\neq0$,

$$
\begin{cases}
\Delta E_2
=
-E_n
\frac{(Z\alpha)^2}
{2nj\left(j+\frac12\right)}
\qquad
j=\ell+\frac12\\

\Delta E_2
=
-E_n
\frac{(Z\alpha)^2}
{2n(j+1)\left(j+\frac12\right)}
\qquad
j=\ell-\frac12.
\end{cases}
$$

-  Finally the third term is the Darwin term.
Given

$$
\Delta E_3
=
\langle
n\ell m_\ell m_s
|
\hat{\mathscr H}_{D}
|
n\ell m_\ell m_s
\rangle
\propto
\left|
\psi_{n\ell m_\ell}(0)
\right|^2,
$$

we have to consider first when this is non-zero.

Given

$$
\psi_{n\ell m_\ell}(\bar r)
=
R_{n\ell}(r)
Y_{\ell m_\ell}(\theta,\phi),
$$

and

$$
R_{n\ell}(r)
\sim
r^\ell
\qquad
(r\to0),
$$

we conclude that $\Delta E_3\neq0$ only when $\ell=0.$

So

$$
\Delta E_3=0
\qquad
\ell\neq0.
$$

For $\ell=0$,

$$
\Delta E_3
=
\frac{\pi\hbar^2}{2m^2c^2}
Ze^2k_e
\left|
\psi_{n00}^{(0)}(0)
\right|^2
=
-E_n
\frac{(Z\alpha)^2}{n^2}.
$$

Where we used implictly

$$
\left|
\psi_{n00}^{(0)}(0)
\right|^2
=
\frac{Z^3}
{\pi a_0^3n^3}.
$$

Indeed,

$$
\begin{aligned}
\left|
\psi_{n00}^{(0)}(0)
\right|^2
&=
\left|
R_{n0}(0)
Y_{00}(\theta,\phi)
\right|^2
\\
&=
\left|
2
\left(
\frac{Z}{na_0}
\right)^{3/2}
\frac{1}{\sqrt{4\pi}}
\right|^2
\\
&=
\frac{Z^3}{\pi a_0^3n^3}.
\end{aligned}
$$

Finally we can put all the corrections together by recasting $\ell$ respect to $j$.

Given

$$
\Delta E_{nj}
=
\Delta E_1
+
\Delta E_2
+
\Delta E_3.
$$

One can show:
$$
\Delta E_{nj}
=
E_n
\frac{(Z\alpha)^2}{n^2}
\left(
\frac{n}{j+\frac12}
-
\frac34
\right).
$$