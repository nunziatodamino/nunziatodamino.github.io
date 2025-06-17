We recall the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Ginzburg-Landau theory/Landau theory/Landau free energy expression for the Ising model|Landau free energy expression for the Ising model]]:

$$ \mathscr{L}(\eta) = A_1t\eta^2 + B_0\eta^4 + \mathcal{O}(\eta^6) $$
We now find the equilibrium states. 
We have:
$$  \frac{\partial \mathscr{L} }{\partial \eta} = 0 \iff 2\eta(A_1t +2B_0\eta^2) = 0 \iff \eta = 0, \eta=\pm\sqrt{\frac{-A_1t}{2B_0}} $$

Now we observe that in the region $T<T_C$ we have $A_1t<0$, while in the region $T>T_C$ we have $A_1t>0$.
So for $T>T_C$ we have as stationary point only $\eta = 0$, while for $T<T_C$ we have the 3 solutions.
We now prove that they are minima by the second derivative criterion.
Given that:

$$   \frac{\partial^2 \mathscr{L} }{\partial \eta^2} = 2A_1t +12 B_0\eta^2$$

In the region $T<T_C$ for $\eta=0$ we have $\frac{\partial^2 \mathscr{L} }{\partial \eta^2} >0$, so is a minimum. Given that $\mathscr{L}(\eta)\ge0$ is also a global minimum. 
In the region $T>T_C$ we have:
- $\eta = 0$ ) $\to$ $\frac{\partial^2 \mathscr{L} }{\partial \eta^2} <0$ So the point is a maximum. Specifically is clear that is a local maximum.
- $\eta = \eta_+$ ) $\to$ $\frac{\partial^2 \mathscr{L} }{\partial \eta^2} =-4A_1t >0$ So the point is a minimum. By substitution $\mathscr{L}(\eta_+) = -\frac{(A_1t)^2}{4B_0} <0$ and $\mathscr{L}(\eta)\ge \mathscr{L}(\eta_+)$ so the point is a global minima.
- $\eta = \eta_-$ ) As is the symmetric of $\eta_+$ the same applies.

Finally we plot the function for different values of $T$:

![[Images/Equilibrium states in the Ising model via Landau theory.png|400]]
