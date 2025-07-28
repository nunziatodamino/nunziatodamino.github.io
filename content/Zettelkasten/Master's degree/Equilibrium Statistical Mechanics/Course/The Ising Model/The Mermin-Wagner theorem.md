Let's extend what we saw in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Phase transitions/Low temperature approximation of the XY model in 2-dimensions|Low temperature approximation of the XY model in 2-dimensions]] and in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Phase transitions/Spin stiffness energy|Spin stiffness energy]] in d-dimensions.
In the end one has that the minimum change of energy to create a domain wall is, by following the same ansatz :

$$\Delta E = \frac{a^{2-d}J}{2}L^{d-1}\int dx\ ||\nabla\vartheta(\bar{r})||^2 = \frac{a^{2-d}J}{2}L^{d} \frac{\Delta^2}{L^2}$$

The only important detail is that the domain wall must be orthogonal only to one dimension of the hypercubic lattice.
The important feature, geometry aside, is that:

$$\Delta E \propto L^{d-2}$$

**Note that this is different from what we saw in the Ising model in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/The energy-entropy argument|The energy-entropy argument]], where $\Delta E \propto L^{d-1}$.**

In this case we can also evaluate the entropy with the same ansatz in d-dimensional Ising model, saw in the same [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/The energy-entropy argument|argument]] i.e. the entropy is strictly related to the presence of domain walls. So $S = k_B \ln \Omega \simeq k_B L^{d-1} \ln \mu$.

In the end one has:

$$ \Delta F = \alpha_1L^{d-2} - \alpha_2TL^{d-1} $$

Where $\alpha_1, \alpha_2$ are constants.
Now one can see the following:
-  If $d>2$ the energy term dominates, so that $\Delta F >0$ if $T$ is low enough. Thus the system resist these "waves" fluctuations and returns to the ground state.
- if $d\leq 2$ the entropy term dominates, thus $\Delta F < 0$. This time this applies for any finite $T$, as long as we go $L\to + \infty$.
  In this second case we have that the creation of domain walls is favored, so that the system continues to create inside the system domain walls until long-range order is destroyed. **This implies that a phase transition in the traditional sense cannot exists.** The idea is the following: if no long range order exists then all the spins in the system can be oriented in any direction, so that $\braket{m} = 0$. Given that this does not change over time there is never a possibility in which $\braket{m} = 0 \to \braket{m} \neq 0$, and the system stays in the $\braket{m} = 0$ condition, so that no phase transition happens.

**These considerations are in the end dependent from the fact that the XY model possesses a continuous symmetry, rather than a discrete symmetry like the Ising model.**

One can generalize and state the Mermin-Wagner theorem : continuous symmetries cannot be spontaneously broken at finite temperature in systems with sufficiently short-range interactions in dimensions $d \leq 2$.
