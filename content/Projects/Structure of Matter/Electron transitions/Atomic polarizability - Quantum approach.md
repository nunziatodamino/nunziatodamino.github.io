Consider the system to be described by the hamiltonian:

$$\hat{\mathscr{H}} = \hat{\mathscr{H}}_{mat} + \hat{\mathscr{H}}_{int}$$

Using the same prescriptions and the same approximation within the [[Dipole approximation]] (minus the radiation term) .
The idea now is to consider as a wavefunction:

$$ \ket{\psi(\bar{r}, t)} = \hat{U}\ket{\phi(\bar{r}, t)} = e^{-\frac{ie}{\hbar}\bar A(t)\cdot\hat{\bar r}}\ket{\phi(\bar{r}, t)} $$

Note here that $\bar A(\bar r, t) \simeq \bar A(t)$ as we are already in the dipole approximation scheme, and we are considering $\bar A$ approximately uniform over the atom.


---

We already seen
$\langle m\lvert\hat{\bar d}\rvert m\rangle=\langle\hat{\bar d}\rangle=0$.

Let's analyze when $\bar d$ is modified by
$\bar E_{\mathrm{ext}}(t)$.

Namely we want to eval $\langle\hat{\bar d}\rangle$ in
$\hat{\mathscr H}=\hat{\mathscr H}_0+\hat V(t)$,
$\hat V(t)=e\bar E(t)\cdot\hat{\bar r}$.

Consider then:

$$
\lvert\Psi_I(t)\rangle
=\lvert\Psi_I(t_0)\rangle
-\frac{i}{\hbar}\int_{t_0}^{t}dt'\,
\hat V_I(t')\lvert\Psi_I(t')\rangle.
$$

$$
\hat V_I(t)
=\hat U_0^{\dagger}(t,t_0)\hat V(t)\hat U_0(t,t_0).
$$

Starting from $\lvert\Psi_I(t_0)\rangle=\lvert0\rangle$, @ the first
order:

$$
\lvert\Psi_I(t)\rangle
\simeq\lvert0\rangle
-\frac{i}{\hbar}\int_{-\infty}^{t}dt'\,
\hat V_I(t')\lvert0\rangle.
$$

Now consider the expectation value of the position operator. Keeping the
bra and ket expansions side by side makes the commutator structure
explicit:

$$
\begin{aligned}
\left\langle\Psi_I(t)\left\lvert
\hat{\bar r}_I(t)
\right\rvert\Psi_I(t)\right\rangle
={}&\langle0\rvert
\left(
\mathbb{1}+\frac{i}{\hbar}\int_{-\infty}^{t}dt'\,
\hat V_I(t')
\right)
\hat{\bar r}_I(t)
\left(
\mathbb{1}-\frac{i}{\hbar}\int_{-\infty}^{t}dt'\,
\hat V_I(t')
\right)
\lvert0\rangle
\\
={}&\langle0\lvert\hat{\bar r}_I(t)\rvert0\rangle
+\frac{i}{\hbar}\int_{-\infty}^{t}dt'\,
\langle0\lvert
\hat V_I(t')\hat{\bar r}_I(t)-\hat{\bar r}_I(t)\hat V_I(t')
\rvert0\rangle
\\
&+\frac{1}{\hbar^2}\iint dt'\,dt''\,
\langle0\lvert
\hat V_I(t')\hat{\bar r}_I(t)\hat V_I(t'')
\rvert0\rangle.
\end{aligned}
$$

The double integral is second order in the perturbation. Since
$\hat V_I^{\dagger}=\hat V_I$ and
$\langle0\lvert\hat{\bar r}_I(t)\rvert0\rangle=0$, the first-order
result is

$$
\langle\hat{\bar r}_I\rangle
=\frac{i}{\hbar}\int_{-\infty}^{t}dt'\,
\langle0\lvert[\hat V_I(t'),\hat{\bar r}_I(t)]\rvert0\rangle
+\mathcal O(\hat V^2).
$$

Equivalently, reversing the order in the commutator,

$$
\langle\hat{\bar r}_I\rangle
=-\frac{i}{\hbar}\int_{-\infty}^{t}dt'\,
\langle0\lvert[\hat{\bar r}_I(t),\hat V_I(t')]\rvert0\rangle
+\mathcal O(\hat V^2).
$$

Then
$\hat V\longrightarrow\hat V_I=e\bar E(t)\cdot\hat{\bar r}_I(t)=-\hat{\bar d}_I(t)\cdot\bar E$.

This is easy to see:

$$
\begin{aligned}
\hat V_I
&=\hat U_0^{\dagger}\hat V\hat U_0
=\hat U_0^{\dagger}\left(e\bar E(t)\cdot\hat{\bar r}\right)\hat U_0
\\
&=e\bar E(t)\cdot\hat U_0^{\dagger}\hat{\bar r}\hat U_0
=e\bar E(t)\cdot\hat{\bar r}_I.
\end{aligned}
$$

Then:

$$
\begin{aligned}
\langle\hat{\bar r}_I(t)\rangle
&=-\frac{ie}{\hbar}\int dt'\,
\langle0\lvert
[\hat{\bar r}_I(t),\bar E(t')\cdot\hat{\bar r}_I(t')]
\rvert0\rangle
\\
&=-\frac{ie}{\hbar}\int dt'\,
\langle0\lvert
[\hat{\bar r}_I(t),\hat{\bar r}_I(t')]
\rvert0\rangle\cdot\bar E(t').
\end{aligned}
$$

Leading to

$$
\langle\hat{\bar d}_I(t)\rangle
=\int_{-\infty}^{t}dt'\,
\frac{ie^2}{\hbar}
\langle0\lvert
[\hat{\bar r}_I(t),\hat{\bar r}_I(t')]
\rvert0\rangle\cdot\bar E(t').
$$

Extending the integral range:

$$
\int_{-\infty}^{t}dt'
=\int_{\mathbb R}dt'\,\Theta(t-t').
$$

Therefore

$$
\langle\hat{\bar d}_I(t)\rangle
=\int_{\mathbb R}dt'\,
\underbrace{
\Theta(t-t')\frac{ie^2}{\hbar}
\langle0\lvert
[\hat{\bar r}_I(t),\hat{\bar r}_I(t')]
\rvert0\rangle
}_{\alpha(t-t')}
\cdot\bar E(t').
$$

where $\alpha$ is a response matrix, i.e.

$$
\langle\hat d_i(t)\rangle
=\int_{\mathbb R}dt'\sum_j\alpha_{ij}(t-t')E_j(t').
$$

Continuing now, consider $\tau=t-t'$.

Consider now

$$
\alpha(\tau)=\frac{1}{3}
\left(\alpha_{xx}+\alpha_{yy}+\alpha_{zz}\right).
$$

So that

$$
\alpha=\alpha(\tau)\mathbb{1}_3
\quad\Longleftrightarrow\quad
\alpha_{ij}=\alpha(\tau)\delta_{ij}.
$$

For an isotropic system all three diagonal components are equal, so

$$
\alpha(\tau)=\frac{1}{3}\operatorname{Tr}\alpha
=\frac{1}{3}\sum_i\alpha_{ii}
=\alpha_{xx}=\alpha_{yy}=\alpha_{zz}.
$$

Insert a complete set of energy eigenstates,
$\mathbb{1}=\sum_m\lvert m\rangle\langle m\rvert$, and define
$\omega_{m0}=(E_m-E_0)/\hbar$. Since

$$
\langle0\lvert\hat r_i(\tau)\rvert m\rangle
=e^{-i\omega_{m0}\tau}\langle0\lvert\hat r_i\rvert m\rangle,
$$

the two orders in the commutator give opposite phases. Hence

$$
\begin{aligned}
\alpha(\tau)
&=\frac{1}{3}\sum_i\alpha_{ii}
\\
&=\frac{1}{3}\sum_i\frac{ie^2}{\hbar}
\langle0\lvert
[\hat r_i(\tau),\hat r_i(0)]
\rvert0\rangle\Theta(\tau)
\\
&=\frac{ie^2}{3\hbar}
\sum_{i,m}\left\lvert\langle0\lvert\hat r_i\rvert m\rangle\right\rvert^2
\left(e^{-i\omega_{m0}\tau}-e^{+i\omega_{m0}\tau}\right)
\Theta(\tau)
\\
&=\frac{2e^2}{3\hbar}\Theta(\tau)
\sum_m\lvert\bar r_{0m}\rvert^2\sin(\omega_{m0}\tau).
\end{aligned}
$$