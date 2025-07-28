We saw in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Widom's scaling hypothesis|Widom's scaling hypothesis]] that:

$$F(t,h) = F_{\mathrm{an}}(t,h) + F_{\mathrm{sin}}(t,h)$$

And specifically :

$$   F_{\mathrm{sin}}(\lambda^{p_1} t, \lambda^{p_2} h) = \lambda F_{\mathrm{sin}}(t,h) \qquad  \forall \lambda$$

Now suppose we want to evaluate a thermodynamic quantity dependent on the free energy:

$$ 
M = -\left( \frac{\partial f}{\partial H} \right)_T \qquad  C_H = -T \left( \frac{\partial^2 f}{\partial T^2} \right)_H  \qquad \alpha = \frac{1}{V} \left( \frac{\partial V}{\partial T} \right)_P
= -\frac{1}{V} \left( \frac{\partial^2 F}{\partial T \partial V} \right) \dots$$

We call this quantity $C$. In the end we will have :

$$C = C_{\text{an}} + C_{\text{sing}}$$

**If we are interested in the critical exponents we need just the singular part.**
In general near the critical point, as the singular part diverges and the analytic part don't, the latter can be neglected, or in many cases is considered treated as a background, so the whole function is reshifted by the analytical value.
