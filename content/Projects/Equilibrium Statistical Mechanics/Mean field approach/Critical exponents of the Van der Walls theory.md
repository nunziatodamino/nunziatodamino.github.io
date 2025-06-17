The simplest way to obtain the critical exponents from the Van der Walls theory is to start from the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Law of the correspondent states|Law of the correspondent states]]

$$ \pi =\frac{8 \tau}{3\nu-1} -\frac{3}{\nu^2}\iff\left( \pi + \frac{3}{\nu} \right)\left( 3\nu -1 \right) = 8 \tau  $$

Where we recall that:

$$ \pi = \frac{P}{P_c}\qquad \nu=\frac{v}{v_c}\qquad \tau=\frac{T}{T_c} $$

### $\beta$ exponent $v_g-v_l \sim t^{\beta}$

A note : We expect a $1^{st}$ order phase transition, so a priori one should study both neighborhood of $T_C$. But we know that this transition happens only for $T<T_C$ (as in the region $T>T_C$ the fluid is supercritical), so only the left limit must be studied. This is still consistent, as the volume will present a left discontinuity.

In the region $T<T_C$ we consider the law of correspondent state along the coexistence curve. Given that along this curve the saturation pressure is constant we have $\pi_g = \pi_l$, or equivalently:

$$ \frac{8 \tau}{3\nu_l-1} -\frac{3}{\nu_l^2} = \frac{8 \tau}{3\nu_g-1} -\frac{3}{\nu_g^2} $$

We recall also that $\tau_l = \tau_g =\tau$ as the end points of the line lies on a isotherm.
Now the idea is to define $\delta = v_g -v_l$ so that $v_g=1+\frac{\delta}{2}$ and $v_l=1-\frac{\delta}{2}$. Then one substitute, isolates $\tau$, and truncates to the first meaningful order.
The calculations gives:

$$ \tau \sim 1-\frac{9}{16}\delta^2 $$

Given that $t = \frac{T-T_C}{T_C}= 1- \tau$ we conclude:

$$\delta \sim t^{1/2} \iff \beta = \frac{1}{2}$$

### $\delta$ exponent - $P-P_C \sim (v-v_c)^{\delta}$

To obtain this one make this simple consideration: let's consider the isotherm $T=T_C$. In the neighborhood of the critical point we have an inflection point, as seen in [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Van der Walls isotherms analysis|Van der Walls isotherms analysis]] ($\frac{\partial P}{\partial v} = 0,\ \frac{\partial^2 P}{\partial v^2} = 0$), then, if we expand the pressure around the critical point:

$$ P = P_C +\frac{\partial P}{\partial v}(P-P_C)+ \frac{\partial^2 P}{\partial v^2}(P-P_C)^2 + \frac{\partial^3 P}{\partial v}(P-P_C)^3 + \mathcal{O}[(P-P_C)^4] $$

To which, upon the application of the inflection point condition:

$$ P - P_C=  \frac{\partial^3 P}{\partial v}(P-P_C)^3 + \mathcal{O}[(P-P_C)^4] $$

From which we conclude that $\delta =3$.

**Note** These critical exponents are not accurate experimentally, as $\beta_{exp} \simeq 0.32$ and $\delta_{exp} \simeq 4.8$.

