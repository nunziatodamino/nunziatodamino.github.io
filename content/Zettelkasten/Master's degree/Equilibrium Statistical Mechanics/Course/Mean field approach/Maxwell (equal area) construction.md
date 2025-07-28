In general, real liquids exhibits $1^{st}$ order phase transitions, as boiling, melting etc.

Consider the image below describing the equation of state for a $T<T_C$.

![[Images/maxwell construction.png|300]]

In the trait $FB$ the liquid and gas phases coexists and we have 2 branches, the liquid branch ending as $F$ and the gas branch starting at $B$.

This discontinuity, according to the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Phase transitions/Ehrenfest's classification of phase transitions|Ehrenfest's classification of phase transitions]] must exists. Specifically is the discontinuity of the function $\left(\frac{\partial G}{\partial P}\right)_T = V(P)$ as in the graph if we invert $P(V)$.

However, as we have studied in the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Van der Waals phase analysis using the isotherm plot|Van der Waals phase analysis using the isotherm plot]], in the regime $T<T_c$ the isotherm in unphysical, while it should present the discontinuity presented in the graph.

**In order to predict the phase transition the so called Maxwell, or equal area, construction must be added.**
#### Maxwell construction

We start from the fact that along the coexistence line the chemical potential is constant, i.e.:

$$ d\mu =0 $$

We can show it in 2 ways. Heuristically, in order to have a coexistence, microscopically at any point of the coexistence line the rate of particle that undergoes gas to liquid must be equal to the rate of particle that undergoes liquid to gas, in order to preserve coexistence.
More analytically, for the case of one substance $\mu = G/N = g$, i.e. the chemical potential coincides with the Gibbs molar potential. Then $d\mu = \frac{1}{N}dG =\frac{1}{N}(VdP-sdT)$. Now, along the isotherm this will be $d\mu =\frac{1}{N}VdP$, while along the coexistence line we have fixed pressure (the line is horizontal), so $d\mu=0$.


Given the the chemical potential is a state function, the integration does not depend on the path.
So if we integrate this condition along the isotherm:

$$ \int_{\Gamma_{\text{isotherm}}}d\mu = 0 \iff0= \frac{1}{N} \int_{\Gamma_{\text{isotherm}}}VdP  $$

Now we show that $\int_{\Gamma_{\text{isotherm}}}VdP = -\int_{\Gamma_{\text{isotherm}}}PdV$. Integrating by parts $\int_{\Gamma_{\text{isotherm}}}VdP = [VP]_{P_i}^{P_f} -\int_{\Gamma_{\text{isotherm}}}PdV = -\int_{\Gamma_{\text{isotherm}}}PdV$ as we choose a path in which $P_i=P_f$.

So we have in the end

$$  0= \int_{\Gamma_{\text{isotherm}}}PdV = \int_{v_l}^{v_g}PdV = \int_{v_l}^{v_x}PdV+\int_{v_x}^{v_g}PdV $$

Where $v_x$ is the specific volume at the intersection point D in the picture. Note that to this specific volume on the isotherm there correspond the coexistence pressure.
Finally we can state the equal area condition:

$$ \int_{v_l}^{v_x}PdV = -\int_{v_x}^{v_g}PdV $$

This implies that, if we know $v_l$ (and thus $v_x$ as is related to the pressure at $v_l$) we are able to predict $v_g$.
**We conclude that the Maxwell construction is able to predict first order transition in the context of the VdW**.