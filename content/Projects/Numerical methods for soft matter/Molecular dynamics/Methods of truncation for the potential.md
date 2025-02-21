Given that we have chosen to truncate our potential at a distance $r_{cut}$, there are different methods to achieve this. In theory these should yield the same results, but in practice they may differ greatly in results, in particular in the vicinity of critical points.

### Simple truncation

The potential is of the type

$$ u^{trunc}(r) =
\begin{cases} 
u(r) &r \leq r_c \\
0  &r > r_c \\
\end{cases}
$$

In this case we commit a systematic error in the determination of the total potential energy and in related quantity, and a [[Projects/Numerical methods for soft matter/Molecular dynamics/Correction for the potential energy due to simple truncation|tail correction]] should be made.
Given also that this potential changes discontinuously at $r_c$ , it gives problem in the evaluation of the forces at that point, so is not suitable in a MD simulation, but can be employed in a Monte Carlo simulation
### Truncation and shift

The easiest way to make the force not singular at $r_c$ is to shift the potential such that is $0$ at $r_c$. This can be achieved by defining:

$$ u^{tr-shift}(r) =
\begin{cases} 
u(r)-u(r_c) &r \leq r_c \\
0  &r > r_c \\
\end{cases}
$$

Correction are similar to the simple truncation, but different :  [[Projects/Numerical methods for soft matter/Molecular dynamics/Correction to the potential energy due to truncation and shifting|Correction to the potential energy due to truncation and shifting]]. This is generally good compromise, but still there is a problem: force is not singular, but its first derivative is.
One should be careful when applying truncated and shifted potentials in models with anisotropic interactions. In that case, the truncation should not be carried out at a fixed value of the distance between the molecular centers of mass
but at a point where the pair potential has a fixed value, because otherwise the potential cannot be shifted to 0 for all points on the cut-off surface. For Monte Carlo simulations, this creates no serious problems, but for MD simulations, this would be quite disastrous, as the system would no longer conserve energy, unless the impulsive forces due to the truncating and shifting are taken into account explicitly.
One famous example is the [[Projects/Numerical methods for soft matter/Molecular dynamics/Typical potentials in MD|Weeks-Chandler-Anderson (WCA) potential]].
### Truncation and force-shift (optional)

Finally we can build a potential for which also the forces vanishes at $r_c$:

$$ u^{tr-shift}(r) =
\begin{cases} 
u(r)-u(r_c)+f(r_c)(r-r_c) &r \leq r_c \\
0  &r > r_c \\
\end{cases}
$$

Again one can work out the correction.
