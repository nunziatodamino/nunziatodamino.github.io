We derived from a mean field approach the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Simple mean field attraction potential in liquids - Van der Walls equation|Van der Walls equation of state]] :

$$ P = \frac{Nk_BT}{V-Nb} - a \frac{N^2}{V^2}$$

Is customary to plot this using as a variable the specific volume:

$$ v = \frac{1}{\rho} = \frac{V}{N} $$

We recall that in the Van der Walls scheme, as is a mean field scheme, the density is constant. Then the equation of state becomes:

$$ P = \frac{k_BT}{v-b} -\frac{a}{v^2} \iff \left( p + \frac{a}{v^2} \right)(v-b) = k_BT$$

In this way we get rid of the $N$ dependency.
**Note also that in the limit $v \to +\infty$ we regain the ideal gas state law.**
We now consider some isotherms on the $Pv$ plane and furthermore consider some intersection with isobars.

![[Images/Van der Walls isotherms analysis.png|300]]

- $T<T_C$ isotherm : there exists a range of pressures $P_0$ in which the isobars $P=P_0$ intersects the isotherm in 3 distinct points.
- $T=T_C$ isotherm : in general there is one intersection point. Specifically there exists a special value of pressure $P_C$ such that the isobar $P=P_C$ is tangent to the isotherm. Is moreover an inflection point.
- $T>T_C$ isotherm : in general there is one intersection point between the isobars and the isotherm.

Is interesting to find the $P_C$ value by the inflection point condition:

$$ \frac{\partial P}{\partial v} = 0 \qquad \frac{\partial^2 P}{\partial v^2} = 0 $$

One can show (here the [[Calculations/Critical parameters in a VdW system.pdf|calculations]]) that:

$$ v_C = 3b \qquad k_BT_C=\frac{8a}{27b} \qquad P_C=\frac{a}{27b^2}$$

One also observe that, irrespectively of the system :

$$ \frac{P_Cv_C}{k_BT_C}=\frac{3}{8} $$
