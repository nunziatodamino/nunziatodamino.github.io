As seen in [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Partition function and bulk free energy in the mean field Ising model|Partition function and bulk free energy in the mean field Ising model]], we obtained for the bulk free energy the expression (we consider $h=0$ for simplicity):

$$ f_{b} = -\frac{1}{N\beta}\ln\mathcal{Z} = \frac{1}{2}zm^2 \hat{J} -k_BT\ln(2\cosh{\beta mz\hat{J}}) $$

Note that in the system, if $T \to T_C$ then we known that we have a phase transition, so the order parameter $m \to 0$.
Is of interest in the study of the system critical exponents to study the expansion around $B(m=0,\rho)$.
If we set $x \equiv \beta \hat{J} z m$, then as $m \to 0$ we have $x \to 0$ , as the other parameter assume a fixed value ($\beta \to \beta_c$,  $z$ is always fixed as is lattice dependent, as is $\hat{J}$).
Then the bulk free energy is expressed as:

$$ f_{b}(x) = \frac{1}{2\beta z \hat{J}}x^2 -k_BT\ln(2\cosh x) $$

Then we do our expansion. The idea is to expand up to the fourth order. Recalling that $\ln(1+t) = x-\frac{x^2}{2}+\frac{x^3}{3} + \mathcal{O}(x^4)$ and $\cosh(t)=  1+\frac{x^2}{2!}+\frac{x^4}{4!} + \mathcal{O}(x^6)$, then to have all the fourth order terms: $\ln(\cosh) = \ln(1+\frac{x^2}{2!}+\frac{x^4}{4!}) = \frac{x^2}{2!}+\frac{x^4}{4!} -\frac{1}{2}\frac{x^4}{4} + \mathcal{O}(x^6) = \frac{x^2}{2}- \frac{x^4}{12} + \mathcal{O}(x^6)$.
In the end one than obtains:

$$\begin{aligned}
f_{b}(x) &= \frac{1}{2\beta z \hat{J}}x^2 -k_BT\ln2 -\frac{1}{\beta} \frac{x^2}{2} +\frac{1}{\beta} \frac{x^4}{12} + \mathcal{O}(x^6) \\
&= \text{cost} + \frac{1}{2\beta}\left(\frac{1}{ z \hat{J}}-1\right) x^2+\frac{1}{\beta} \frac{x^4}{12} + \mathcal{O}(x^6)
\end{aligned}
$$

Now we go back to the definition with the magnetization. Replacing $x \equiv \beta \hat{J} z m$:

$$
\begin{aligned}
f_{b}(x) 
&= \text{const} + \frac{\beta z \hat{J}}{2}\left(1- \beta z \hat{J}\right) m^2+ \frac{ \beta^3z^4 \hat{J}^4}{12} m^4+ \mathcal{O}(m^6) \equiv\\&\equiv \text{const} + \frac{A}{2} m^2+ \frac{B}{4} m^4+ \mathcal{O}(m^6)
\end{aligned}
$$

Where we set :

$$ A \equiv{\beta z \hat{J}}\left(1- \beta z \hat{J}\right) \qquad B \equiv\frac{ \beta^3z^4 \hat{J}^4}{3} $$

**Note that from the sign of $A$ one can deduce the phase of the system.**
In relation to the study in [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/Curie-Weiss model solution with h=0|Curie-Weiss model solution with h=0]], where we studied the solution of the self consistent equation, which graph report we report here for better reference:

![[Images/Curie-Weiss model solution with h=0 1.png|400]]

-  If $A>0$ then $\beta z \hat{J} < 1$ : We have that $T>T_c \equiv \frac{z\hat{J}}{k_B}$, the magnetization has value $m=0$ only. We are in the disordered phase (paramagnetic)
- If $A<0$ then $\beta z \hat{J} > 1$ : We have that $T<T_c$ , the magnetization has three possible values: $m=0$, $m=\pm m_0$. We are in the ordered phase (ferromagnetic).
	- We recall that $m=0$ is an unstable equilibrium point. It is a solution because it can happen in the system a spontaneous magnetization transition (up to down or viceversa). Note that the probability for this to happens is extremely small. Specifically the probability is related the free energy the system has to spend in order to cross from one minima to another: $$ P \sim e^{-\beta N \Delta F} $$
- Finally, if $A=0$ then $\beta z \hat{J} = 1$ : We have that $T=T_c$, the magnetization has three values all with $m=0$. We are at the critical point, between the 2 phases.

To complete the picture we plot roughly the bulk free energy against the magnetization, to further conclude our point

 ![[Free energy expansion around the critical temperature for the Curie-Weiss model.png|400]]
 
