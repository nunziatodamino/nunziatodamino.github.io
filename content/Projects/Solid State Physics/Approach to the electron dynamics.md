Suppose we have solved the problem of many-body motion using the [[Born-Oppenheimer approximation]], and we are analyzing the electronic part of the motion:

$$ [T_e + (V_{ee}+V_{nn} + V_{en})] \psi_e = \mathcal{E}(\{\bar{R}_I\}) \psi_e$$

It is now essential, in order to solve the problem, to make some approximations:

- The first step is to impose symmetry on our problem by postulating that the nuclei in the above equation occupy fixed positions $\{\bar{R}_I\}$ within a Bravais lattice chosen a priori.
- We then simplify the potential problem by specifying, instead of the specific contributions seen above, a single potential $V\equiv V_{ee}+V_{nn} + V_{en}$ called the effective potential.
- It is also essential to consider non-interacting electrons. This implies that $V_{ee} \simeq 0$, but more importantly, it implies
 
$$ \psi_e(\bar{r}_1,\bar{r}_2, \dots\bar{r}_1,\bar{r}_n,\{\bar{R}_I\})=\Psi(\bar{r}_1, \{\bar{R}_I\})\Psi(\bar{r}_2, \{\bar{R}_I\})\dots\Psi(\bar{r}_n, \{\bar{R}_I\}) $$

taking into account the fact that electrons are indistinguishable.

Thus, the initial many-body problem reduces to a $N$ single-particle problem, where we aim to solve the equation for a single electron:

$$ (T+V(\bar{r}))\Psi  = E\Psi    $$

The effective potential must satisfy the essential symmetry property:

$$V(\bar{r}) = V(\bar{r} + \bar{R})$$

with $\bar{R}$ being a generic vector of the Bravais lattice considered in our problem.
Based on this approach, we can proceed in two ways:

- Consider the potential to be constant throughout the crystal (effectively equal to zero if we redefine the energy scale). It is observed that this is consistent with the approach and forms the basis of the [[Free electron model for metals (Sommerfeld model)]].

- Alternatively, if we reason about the general properties of a Hamiltonian as defined earlier, it is natural to state the [[Bloch's theorem]], which forms the basis of the [[Band model]].