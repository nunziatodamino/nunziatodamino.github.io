We derived from a mean field approach the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Simple mean field attraction potential in liquids - Van der Walls equation|Van der Walls equation of state]] :

$$ P = \frac{Nk_BT}{V-Nb} - a \frac{N^2}{V^2}$$

Is customary to plot this using as a variable the specific volume:

$$ v = \frac{1}{\rho} = \frac{V}{N} $$

We recall that in the Van der Walls scheme, as is a mean field scheme, the density is constant. Then the equation of state becomes:

$$ P = \frac{k_BT}{v-b} -\frac{a}{v^2} \iff \left( p + \frac{a}{v^2} \right)(v-b) = k_BT$$

In this way we get rid of the $N$ dependency.
**Note also that in the limit $a \to 0$ (no interactions) and $b \to 0$ (point-like molecules) we regain the ideal gas state law.**

We now study the phases of the system using the following isotherm plot on the $Pv$ plane.

![[Images/Van der Walls isotherms analysis.png|300]]

### $T<T_C$ (first order phase transition)

**We see that in this regime the isotherm graph is unphysical.**
In fact an isotherm in the $PV$ plane (and consequently in the $Pv$ as is a simple rescaling) has to be always a monotonically decreasing function. This because the Gibbs free energy must be a concave function $\frac{\partial^2 F}{\partial V^2} >0$ in order to present minima and consequently, as pressure can be defined as $P = -\left(\frac{\partial F }{\partial V} \right)_T$ then this is equivalent the concavity condition is equivalent to $\frac{\partial P}{\partial V} <0$ .
So as is the model is unphysical and one has to add the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Maxwell (equal area) construction|Maxwell (equal area) construction]] to restore the monotonicity.
This introduce though a discontinuity and,  as we have seen that the pressure is the first derivative of the free energy, this means that in this regime we will have for the system a first order phase transition. 

### $T = T_C$ (second order phase transition)

Now the isotherm is continuous, but we have an inflection point.
This implies that if we consider the inverse function and differentiate we will have a divergence at the critical point.
Specifically the quantity $\left(\frac{\partial V}{\partial P}\right)_{T}$ will diverge negatively at the critical point.
Note that is related to the isothermal compressibility definition $\kappa_T  = -\frac{1}{V} \left(\frac{\partial V}{\partial P}\right)_{T}$, which will diverge positively. (Note that this is consistent to the fact that we discussed earlier of the concavity of the Gibbs function, as negative isothermal compressibility is a sign of unphysical behavior).
This implies by definition that in this regime the system exhibits a second order phase transition.
For this reason is important to identify what is the order parameter.
Consider the system in the regime $T<T_C$ and fix the pressure $P=P_{\text{sat}}$ .
If consider the quantity $\Delta \nu = \nu_g-\nu_l$ we see that in general $\Delta \nu \neq 0$, while for $T \to T_C^-$ the quantity $\Delta \nu \to 0$, defining our order parameter.
Note that in the regime $T>T_C$ the quantity $\Delta \nu$ is undefined as we will see, so this is the only way to take the limit.

#### Important values at the critical point

Is interesting to find the $P_C$ value by the inflection point condition:

$$ \frac{\partial P}{\partial v} = 0 \qquad \frac{\partial^2 P}{\partial v^2} = 0 $$

One can show (here the [[Calculations/Critical parameters in a VdW system.pdf|calculations]]) that:

$$ v_C = 3b \qquad k_BT_C=\frac{8a}{27b} \qquad P_C=\frac{a}{27b^2}$$

One also observe that, irrespective of the molecules interaction ($a$) and size ($b$) :

$$ \frac{P_Cv_C}{k_BT_C}=\frac{3}{8} $$

### $T>T_C$ (supercritical phase)

The isotherm do not present any strange discontinuity points and is just a smooth function.
**So the system cannot satisfy any $n^{\text{th}}$ order phase transition definition.**
Specifically one can prove that we are in a supercritical phase : there is no way to distinguish a liquid or a gas phase in the system.

