Given that we have a second order phase transition at $T=T_C$, as expected from [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Van der Waals phase analysis using the isotherm plot|Van der Waals phase analysis using the isotherm plot]], we can define in this regime critical exponents for a VdW fluid

The simplest way to obtain the critical exponents from the Van der Waals theory is to start from the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Law of the correspondent states|Law of the correspondent states]]

$$ \pi =\frac{8 \tau}{3\nu-1} -\frac{3}{\nu^2}\iff\left( \pi + \frac{3}{\nu} \right)\left( 3\nu -1 \right) = 8 \tau  $$

Where we recall that:

$$ \pi = \frac{P}{P_c}\qquad \nu=\frac{v}{v_c}\qquad \tau=\frac{T}{T_c} $$

In this notation the condition $T=T_C$ is equivalent to $\tau = 1$
The idea to capture the critical exponent is to consider the system in the regime $\tau<1$ and then take the limit $\tau \to 1^-$ as in the $\tau>1$ regime we are in a supercritical phase.

Recalling that we defined the order parameter as $\Delta \nu = \nu_g-\nu_l$ we proceed
### $\beta$ exponent - $\Delta \nu \sim t^{\beta}$

In the region $T<T_C$ we consider the law of correspondent state along the coexistence curve. Given that along this curve the saturation pressure is constant we have $\pi_g = \pi_l$, or equivalently:

$$ \frac{8 \tau}{3\nu_l-1} -\frac{3}{\nu_l^2} = \frac{8 \tau}{3\nu_g-1} -\frac{3}{\nu_g^2} $$

We recall also that $\tau_l = \tau_g =\tau$ as the end points of the line lies on a isotherm.
Now the idea is to define $\delta = v_g -v_l$ so that $v_g=1+\frac{\delta}{2}$ and $v_l=1-\frac{\delta}{2}$. Then one substitute, isolates $\tau$, and truncates to the first meaningful order.
The calculations gives:

$$ \tau \sim 1-\frac{9}{16}\delta^2 $$

Given that $t = \frac{T-T_C}{T_C}= 1- \tau$ we conclude:

$$\delta \sim t^{1/2} \iff \beta = \frac{1}{2}$$

### $\delta$ exponent - $P-P_C \sim \Delta\nu^{\delta}$

To obtain this one make this simple consideration: let's consider the isotherm $T=T_C$. In the neighborhood of the critical point we have an inflection point, as seen in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Van der Waals phase analysis using the isotherm plot|Van der Waals phase analysis using the isotherm plot]] ($\frac{\partial P}{\partial v} = 0,\ \frac{\partial^2 P}{\partial v^2} = 0$), then, if we expand the pressure around the critical point:

$$ P = P_C +\frac{\partial P}{\partial v}(v-v_C)+ \frac{\partial^2 P}{\partial v^2}(v-v_C)^2 + \frac{\partial^3 P}{\partial v}(v-v_C)^3 + \mathcal{O}[(v-v_C)^4] $$

To which, upon the application of the inflection point condition:

$$ P - P_C=  \frac{\partial^3 P}{\partial v}(v-v_C)^3 + \mathcal{O}[(v-v_C)^4] $$

From which we conclude that $\delta =3$.

**Note** These critical exponents are not accurate experimentally, as $\beta_{exp} \simeq 0.32$ and $\delta_{exp} \simeq 4.8$.

