Let's consider the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Ising model in the mean field approximation|Ising model in the mean field approximation]] as an example to built a [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Ginzburg-Landau theory/Landau theory/Landau theory of phase transitions for uniform systems|free energy according to Landau theory]].
The order parameter of the Landau theory is the scalar $m$. 
The free energy has a minimum for $m=\eta=0$, so:

$$ \frac{\partial \mathscr{L} }{\partial \eta} = 0 \iff + a_1 + 2a_2\eta+\dots = 0 $$

From which we imply that at $\eta = 0$ we have $a_1=0$, i.e. the free energy presents no linear term.
This is true for most of the system we studied as we can recall.
Now we enforce on the free energy function the Ising model symmetry.
The global spin flip symmetry implies that nothing changes from a magnetization $m \to -m$. So we require that the function satisfies the constraint:

$$ \mathscr{L}(\eta) = \mathscr{L}(-\eta) \iff a_0 + a_1\eta + a_2\eta^2 + \dots = a_0 - a_1\eta + a_2\eta^2 + \dots $$

We see that all the odd terms are set to the zero polynomial. Then by the principle of equality of polynomials, we obtain the condition that all the odd terms must be zero $a_{2k+1}=0$
Putting all together, and observing that the coefficient of expansion should depend on the system parameters, we obtain as a final prototype the function:

$$ \mathscr{L}(\eta) = a_0(J,T) + a_2(J,T)\eta^2 + a_4(J,T)\eta^4 + \dots $$

We now continue. In the region $T>T_c$ is guaranteed by definition that $\eta = 0$. So $\mathscr{L}(\eta=0) = a_0(J,T)$.
This implies that the coefficient $a_0$ is the free energy value in the disordered phase (paramagnetic).

As this value is a constant and we usually evaluate the free energy difference, we can rescale the free energy to set this value to 0.

Now we have that each coefficient can restated as a function of $t = \frac{T-T_c}{T_c}$, so that $a_{n} = \sum_k b_k t^k$.
The idea now is to **expand each coefficient and truncate at the first non-zero term.**
We start from $a_2$.

$$ a_2(J,T) = A_0 +A_1t+ \dots $$

We now show that $A_0 = 0$. We want to encapsulate the phenomenology of a second order phase transition.
For $T>T_C$ we have a stability point at $\eta = 0$, so this implies that in this region $a_2>0$.
For $T<T_C$ we have a stability point at $\eta \neq 0$, so this implies that in this region $a_2<0$.
The only logic conclusion is that at $T=T_C$ , given that the function is analytical, we must have $a_2(t=0) =0$ and consequently by comparing this with the power series we obtain $A_0 = 0$.
This can be further shown by the following figure:

![[Images/Landau free energy expression for the Ising model.png|200]]

Consequently the function $\mathscr{L}$ reduces to: 

$$ \mathscr{L}(\eta) = A_1t\eta^2 + B_0\eta^4 + C_0\eta^6 \dots $$

Moreover note that in order to guarantee that $\eta = 0$ is the absolute minima, one must set $B_0 >0$, $C_0>0$, $\dots$
Finally one usually consider the free energy up to the second term:

$$ \mathscr{L}(\eta) = A_1t\eta^2 + B_0\eta^4 + \mathcal{O}(\eta^6) $$

Note that in a presence of magnetic field $h$, we simply consider the Legendre transform of the function, which transform the free energy from the Helmholtz one the Gibbs one.

$$\mathscr{L}_G(\eta) = \mathscr{L}(\eta) -h\eta  $$


