Consider a system with Hamiltonian $\hat{\mathscr{H}}_0$ , such that is easily solvable, hence we can write (and find) $\hat{\mathscr{H}}_0|\varepsilon_n\rangle=\varepsilon_n|\varepsilon_n\rangle$.
Then consider the problem defined by the Schroedinger equation:

$$
i\hbar\partial_t|\Psi_0(t)\rangle=\hat{\mathscr{H}}_0|\Psi_0(t)\rangle
$$

Where of course we recall that we have the time dependence via the unitarypropagator:

$$
|\Psi_0(t)\rangle=\hat{U}(t,t_0)|\Psi_0(t_0)\rangle,
\qquad
\hat{U}(t,t_0)=e^{-\frac i\hbar(t-t_0) \hat{\mathscr{H}}_0}
$$

Let's introduce now a perturbation to the Hamiltonian called $\hat{V}(t)$, such that the new system Hamiltonian is $\hat{\mathscr{H}} = \hat{\mathscr{H}}_0 + \hat{V}(t)$, so that a generic state evolution of the system is described by:

$$
i\hbar\partial_t|\Psi(t)\rangle=(\hat{\mathscr{H}}_0 + \hat{V}(t))|\Psi(t)\rangle
$$

Now we are finally ready to introduce the **interaction picture formalism**. 
Let's define:

$$|\Psi_I(t)\rangle\equiv\hat{U}^{\dagger}(t,t_0)|\Psi(t)\rangle \quad \iff \quad |\Psi(t)\rangle = \hat{U}(t,t_0)|\Psi_I(t)\rangle$$

By plugging this in Schrodinger equation, we obtain:

$$
\begin{aligned}
i\hbar\partial_t\left(\hat{U}(t,t_0)|\Psi_I(t)\rangle\right)&=(\hat{\mathscr{H}}_0 + \hat{V}(t))\left(\hat{U}(t,t_0)|\Psi_I(t)\rangle\right) \\

i\hbar\left(-\frac i\hbar \hat{\mathscr{H}}_0\hat{U} |\Psi_I(t)\rangle + \hat{U} \partial_t|\Psi_I(t)\rangle
\right)&=(\hat{\mathscr{H}}_0\hat{U} + \hat{V}\hat{U}(t))|\Psi_I(t)\rangle \\

\left( \hat{\mathscr{H}}_0\hat{U} + i\hbar\hat{U} \partial_t
\right)|\Psi_I(t)\rangle

&=(\hat{\mathscr{H}}_0\hat{U} + \hat{V}\hat{U}(t))|\Psi_I(t)\rangle

\end{aligned}
$$

Hence leaving, upon a a left multiplication for $\hat{U}^{\dagger}(t,t_0)$, and by defining $\hat{V}_I(t) =\hat{U}^{\dagger}(t,t_0) \hat{V}(t)\hat{U}(t,t_0)$, to the final:

$$
\boxed{
i\hbar\partial_t|\Psi_I(t)\rangle=\hat{V_I}|\Psi_I(t)\rangle}
$$

Which is the evolution equation in the interaction picture.
We can solve this formally by integration, arriving to:

$$
|\psi_I(t)\rangle
=|\psi_I(t_0)\rangle
-\frac i\hbar\int_{t_0}^tdt'\,\hat{V}_I(t')|\psi_I(t')\rangle
$$

Of course this formal solution has an evident problem: i.e. it is self consistent. So there are some tricks in order to evaluate it.
The first (almost necessary) is to consider $\hat{V}(t)$ a small perturbation, such that the evolved state is not so much different than the initial state, i.e.:

$$ |\psi_I(t)\rangle \simeq |\psi_I(t_0)\rangle $$

And this is fine if we like first order corrections.
Then, to have higher order corrections other than the first order one proceeds recursively replugging the equation into itself, obtaining something like:

$$
|\psi_I(t)\rangle
=|\psi_I(t_0)\rangle +\sum_{n=1}^{\infty}\left(-\frac i\hbar\right)^n
\int_{t_0}^{t}dt_1\int_{t_0}^{t_1}dt_2\cdots
\int_{t_0}^{t_{n-1}}dt_n\,
\hat{V}_I(t_1)\cdots \hat{V}_I(t_n)|\psi_I(t_0)\rangle
$$

Where the replugging has happened $n -1$ times. The idea now is to set:

$$\int_{t_0}^{t}dt_1\int_{t_0}^{t_1}dt_2\cdots
\int_{t_0}^{t_{n-1}}dt_n\,
\hat{V}_I(t_1)\cdots \hat{V}_I(t_n) \equiv \frac1{n!} \hat{\mathscr{T}}\left[ \int_{t_0}^t d\tau\  \hat{V}_I(\tau) \right]^n
$$

Where we call $\hat{\mathscr{T}}$ time ordering operator. Then we can write:

$$
\begin{aligned}
|\psi_I(t)\rangle
&=|\psi_I(t_0)\rangle +\sum_{n=1}^{\infty}\frac1{n!} \hat{\mathscr{T}}\left[-\frac i\hbar \int_{t_0}^t d\tau\  \hat{V}_I(\tau) \right]^n |\psi_I(t_0)\rangle =\\

 &=\left(\hat{\mathbb{1}} +\sum_{n=1}^{\infty}\frac1{n!} \hat{\mathscr{T}}\left[-\frac i\hbar \int_{t_0}^t d\tau\  \hat{V}_I(\tau) \right]^n \right)|\psi_I(t_0)\rangle 
 
\end{aligned}
$$

Finally, defining the new time propagator:

$$\hat{U}_{\text{Dyson}}(t,t_0) \equiv \hat{\mathbb{1}} +\sum_{n=1}^{\infty}\frac1{n!} \hat{\mathscr{T}}\left[-\frac i\hbar \int_{t_0}^t d\tau\  \hat{V}_I(\tau) \right]^n = \hat{\mathscr{T}} e^{-\frac i\hbar \int_{t_0}^t d\tau\  \hat{V}_I(\tau) }$$

Then we can write simply but with obscuration $|\psi_I(t)\rangle = \hat{U}_{\text{Dyson}}(t,t_0)|\psi_I(t_0)\rangle$.

