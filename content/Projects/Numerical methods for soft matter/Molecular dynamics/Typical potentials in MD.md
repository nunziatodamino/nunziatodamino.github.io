
#### Lennard-Jones potential

The most important potential in atomic simulation is the LJ potential:

$$ V_{LJ}(r) = 4\varepsilon\left[ \left(\frac{\sigma}{r}\right)^{12} -\left(\frac{\sigma}{r}\right)^{6}\right] $$

The repulsive part (first term) plays the role of the Pauli exclusion principle for atomic system or simply a non-compenetration enforcement for molecular system, while the attractive term represent the [[Zettelkasten/Master's degree/Solid State Physics/Crystal structures and bonds/Van der Waals bond|Van der Waals interaction]].
Note that the power of 12 has no theoretical justification and was chosen historically for computational purposes (square of attractive term). [[Projects/Numerical methods for soft matter/Molecular dynamics/Avoiding square roots and old advices|As today, this choice is not so important and is mostly historical]]. 

#### Generalized Lennard-Jones potential

One can tune the powers of the LJ potential to its own necessities:
$$ V_{LJ}(r) = 4\varepsilon\left[ \left(\frac{\sigma}{r}\right)^{m} -\left(\frac{\sigma}{r}\right)^{n}\right] \qquad m>n $$

#### Weeks-Chandler-Anderson (WCA) potential

Is simply the truncated-shift version of the LJ potential

$$ V_{WCA}(r) =
\begin{cases} 
V_{LJ}(r) +\varepsilon = 4\varepsilon\left[ \left(\frac{\sigma}{r}\right)^{12} -\left(\frac{\sigma}{r}\right)^{6} + \frac{1}{4} \right] &r \leq r_c \\
0  &r > r_c \\
\end{cases}
$$

#### Harmonic potential

The typical way to describe a permanent bond is the harmonic potential:

$$ V_{harm}(r) = \frac{1}{2}k(r-r_0)^2 $$

Where $r_0$ is the equilibrium value of the bond length.

#### Finite Extensible Nonlinear Elastic (FENE) potential

The FENE potential is a typical choice when simulating bonding in polymer:

$$ V_{FENE}(r) =
\begin{cases} 
-\frac{1}{2}KR_0^2\ln\left[ 1-\left(\frac{r}{R_0}\right)^2 \right] &r \leq R_0 \\
+\infty  &\text{elsewhere} \\
\end{cases}
$$

In this interaction scheme, $K$ is the equivalent of the harmonic constant and represent the bonding strength, while $R_0$ is the maximum extension length. Notice that $\lim_{r \to 0}V_{FENE}(r) = 0$, while $\lim_{r \to R_0}V_{FENE}(r) = +\infty$. We can see additionally that this potential is a monotonically increasing function in $r$, so that it does no select any length scale.
Note also that, given that is unphysical to represent a polymer without an excluded volume,  an additional potential that contains a non-compenetration term must added. In general the choice is the WCA, so that $V_{bond\ polymer}(r) = V_{WCA}(r) + V_{FENE}(r)$.
