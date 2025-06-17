Consider the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Ginzburg-Landau theory/Landau theory/Landau free energy expression for the Ising model|Landau free energy expression for the Ising model]]

$$ \mathscr{L}(\eta) = A_1t\eta^2 + B_0\eta^4 + \mathcal{O}(\eta^6) $$

Let's see if we can recover the same critical exponents of [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Mean field exponents in the Ising model|Mean field exponents in the Ising model]]
### $\beta$ exponent - $m \sim (T-T_C)^{\beta}$

As we saw in [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Ginzburg-Landau theory/Landau theory/Equilibrium states in the Ising model via Landau theory|Equilibrium states in the Ising model via Landau theory]]:

$$\eta=\pm\sqrt{\frac{-A_1t}{2B_0}} \iff m \sim t^{\frac{1}{2}}$$

So $\beta = \frac{1}{2}$.
### $\delta$ exponent - $h \sim m^{\delta}$

We consider the Gibbs free energy expression via the Legendre transform:

$$\mathscr{L}_G(\eta) = \mathscr{L}(\eta) -h\eta =  A_1t\eta^2 + B_0\eta^4 -h\eta +\mathcal{O}(\eta^6)$$

Then by setting the equilibrium condition:

$$ \frac{\partial\mathscr{L}_G(\eta)}{\partial \eta} = 0 \iff 2A_1t\eta + 4B_0\eta^3 -h  =0 \iff h = 2A_1t\eta + 4B_0\eta^3$$

Then as $t \to 0$ :

$$ h \sim m^3 $$

From which $\delta = 3$.
### $\alpha$ exponent - $C_H \sim |t|^{-\alpha}$ $\left(H=0, t=\frac{T-T_C}{T_C} \right)$
We want to evaluate :

$$ C_H = -T\left(\frac {\partial^2 f_B}{\partial T^2} \right) $$

I.e. the specific heat at constant magnetic field. Note that given that the magnetization is also function of the temperature is not convenient to differentiate right away, we instead consider the function $\mathscr{L}$ in the equilibrium state. For what we seen in [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Ginzburg-Landau theory/Landau theory/Equilibrium states in the Ising model via Landau theory|Equilibrium states in the Ising model via Landau theory]]: 
For $T>T_c \to \mathscr{L}(\eta_{min}) = 0\to C_H = 0$ 
For $T<T_c \to \mathscr{L}(\eta_{min}) = -\frac{(A_1t)^2}{4B_0}\to C_H = \frac{T}{T_C}\frac{A_1^2}{2B_0}$, which at $T \to T_C$ is $\frac{A_1^2}{2B_0}$
By following the same ansatz in the mean field approach, we conclude that $\alpha = 0$.
### $\gamma$ exponent - $\chi_T \sim |t|^{-\gamma}$

This is obtained by following the same ansatz in the $\delta$ exponent.
We found in that context for the magnetic field:

$$ h = 2A_1t\eta + 4B_0\eta^3 $$

Then if we now apply the magnetic susceptibility definition:

$$ \chi_T= \frac{\partial m}{\partial h} = \frac{1}{\frac{\partial h}{\partial m}} $$

we have :

$$ \chi_T = \frac{1}{2A_1t + 12B_0\eta^2} $$

We now consider this condition evaluated:
- Either in the minimum for $T>T_C$ ($\eta = 0$), so that:
 
$$ \chi_T = \frac{1}{2A_1t} \sim t^{-1} $$

- Or in the minimum for $T<T_C$ (say $\eta = \eta_+$):

$$ \chi_T = \frac{1}{2A_1t-6A_1t} \sim t^{-1} $$

So, given that $\gamma_-=\gamma_+=1$ , we have $\gamma = 1$.

