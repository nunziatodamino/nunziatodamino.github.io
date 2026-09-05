Recall, in the [[Time dependent perturbation theory - the interaction picture]] we found the formal solution:

$$
|\psi_I(t)\rangle
=
|\psi_I(t_0)\rangle
-
\frac{i}{\hbar}
\int_{t_0}^{t}
d\tau\,
\hat V_I(\tau)|\psi_I(\tau)\rangle
$$

That can be iterated recursively to achieve the desired level of precision. Yet, for a small perturbation, at first order, $|\psi_I(\tau)\rangle \simeq|\psi_I(t_0)\rangle$ (the wavefunction changes slightly for small perturbations) so:

$$
|\psi_I(t)\rangle
\simeq
|\psi_I(t_0)\rangle
-
\frac{i}{\hbar}
\int_{t_0}^{t}
d\tau\,
\hat V_I(\tau)|\psi_I(t_0)\rangle
$$

**This is now the starting point to evalute the transition probability from the state $|\psi_I(t_0)\rangle$ to a final state $|f\rangle$.**

### Transition between different eigenstates 

Starting from $|\psi_I(t_0)\rangle=|\epsilon_i\rangle$ , we want to evaluate the probability to transition in a different energy eigenstate:

$$
c_m(t)
=
\langle \epsilon_m|\psi_I(t)\rangle
$$

Projecting onto $\langle \epsilon_m|$,

$$
c_m(t)
=
\langle \epsilon_m|\epsilon_i\rangle
-
\frac{i}{\hbar}
\int_{t_0}^{t}
d\tau\,
\langle \epsilon_m|
\hat V_I(\tau)
|\epsilon_i\rangle
$$

Since energy eigenstates are orthonormal and $\hat V_I(\tau) = \hat U_0^\dagger(\tau,t_0) \hat V(\tau) \hat U_0(\tau,t_0)$ we get:

$$
c_m(t)
=
\delta_{mi}
-
\frac{i}{\hbar}
\int_{t_0}^{t}
d\tau\,
e^{-\frac{i}{\hbar}(\epsilon_i-\epsilon_m)(\tau-t_0)}
\langle \epsilon_m|\hat V(\tau)|\epsilon_i\rangle
$$

This depends on the perturbation $\hat V(t)$.

Consider the step perturbation

$$
\hat V(t)
=
\begin{cases}
0, & t<t_0 \\
\hat V, & t>t_0
\end{cases}
$$

where $\hat V$ is now a time independent operator.

For a transition $i\to m$, with $m\neq i$, $\delta_{mi}=0$

and therefore

$$
c_m(t)
=
-\frac{i}{\hbar}
\langle \epsilon_m|\hat V|\epsilon_i\rangle
\int_{t_0}^{t}
d\tau\,
e^{-\frac{i}{\hbar}(\epsilon_i-\epsilon_m)(\tau-t_0)}
$$

The transition probability is hence

$$
\begin{aligned}
P(i\to m) &=
\frac{1}{\hbar^2}
\left|
\langle \epsilon_m|\hat V|\epsilon_i\rangle
\right|^2
\left|
\int_{t_0}^{t}
d\tau\,
e^{-\frac{i}{\hbar}(\epsilon_i-\epsilon_m)(\tau-t_0)}
\right|^2 \\

&=
\frac{1}{\hbar^2}
\left|
\langle \epsilon_m|\hat V|\epsilon_i\rangle
\right|^2

\left|
\frac{i\hbar}{\epsilon_i-\epsilon_m}
\right|^2

\left|

e^{-\frac{i}{\hbar}(\epsilon_i-\epsilon_m)(t-t_0)}
-1
\right|^2 \\
\end{aligned}
$$

Now set $\omega_{i\to m} \equiv \omega_{mi} \equiv \frac{\epsilon_m-\epsilon_i}{\hbar}$, and consider the following trigonometric identity:

$$ \frac{e^{i\omega t} -1}{i \omega} = 2e^{i\frac{\omega}{2} t}\frac{e^{i\frac{\omega}{2} t} - e^{-i\frac{\omega}{2} t}}{2i \omega} = 2e^{i\frac{\omega}{2}t} \frac{\sin\left(\frac{\omega}{2} t \right)}{\omega} $$

We can write in the end ($\omega_{i\to m } \equiv \omega$ to simplify notation):

$$
\begin{aligned}
P(i\to m) 
&=
\frac{1}{\hbar^2}
\left|
\langle \epsilon_m|\hat V|\epsilon_i\rangle
\right|^2
\left|

i\frac{e^{i\  \omega(t-t_0)} -1}{i\omega}

\right|^2 \\

&=
\frac{4}{\hbar^2}
\left|
\langle \epsilon_m|\hat V|\epsilon_i\rangle
\right|^2
\frac{\sin^2\left(\frac{\omega}{2} (t-t_0) \right)}{\omega^2}
\end{aligned}
$$

(Recall of course that $|e^{i\alpha}| = 1$) In the long time limit we recall one definition of the Dirac's delta:

$$\lim_{t \to \infty} t\frac{\sin^2\left(\frac{\omega}{2} t \right)}{\left(\frac{\omega}{2} t \right)^2}  = 2\pi \delta(\omega)$$

Where this limit is to be intended in the distributional sense. We have then :

$$
\begin{aligned}
P(i\to m) 
&=
\frac{1}{\hbar^2}
\left|
\langle \epsilon_m|\hat V|\epsilon_i\rangle
\right|^2

(t-t_0)^2
\frac{\sin^2\left(\frac{\omega}{2} (t-t_0) \right)}{\left(\frac{\omega}{2} (t-t_0)\right)^2}
\end{aligned}
$$

And finally to the limit:

$$
\begin{aligned}
\lim_{t \to \infty} P(i\to m) 
&=
\frac{2\pi}{\hbar^2}
\left|
\langle \epsilon_m|\hat V|\epsilon_i\rangle
\right|^2

(t-t_0) \delta(\omega)
\end{aligned}
$$

Or per unit time (with the assumption that is constant as we are dividing by the interval):

$$
\begin{aligned}
W_{i\to m} \equiv \lim_{t \to \infty} \frac { P(i\to m)}{\Delta t}
&=
\frac{2\pi}{\hbar^2}
\left|
\langle \epsilon_m|\hat V|\epsilon_i\rangle
\right|^2
\delta(\omega)
\end{aligned}
$$

Where again this limit is to be intended in the distributional sense.
We now recast the delta respect the energies, as : $\delta(\omega) = \delta\left( \frac{\epsilon_m-\epsilon_i}{\hbar} \right) = {\hbar}\delta(\epsilon_m-\epsilon_i)$ (where we use the delta rescaling property : $\delta(ax) = \frac{1}{|a|}\delta (x)$ ), we then can rewrite:

$$
\begin{aligned}
W_{i\to m}
&=
\frac{2\pi}{\hbar}
\left|
\langle \epsilon_m|\hat V|\epsilon_i\rangle
\right|^2
\delta(\epsilon_m-\epsilon_i)
\end{aligned}
$$

