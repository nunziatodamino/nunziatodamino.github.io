We now study the mean field exponent building from the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Free energy expansion around the critical temperature for the Curie-Weiss model|bulk free energy]].
We recall that we have:

$$
\begin{aligned}
f_{b}(x)= \text{const} + \frac{A}{2} m^2+ \frac{B}{4} m^4+ \mathcal{O}(m^6)
\end{aligned}
$$

Where we set :

$$ A \equiv{\beta z \hat{J}}\left(1- \beta z \hat{J}\right) \qquad B \equiv\frac{ \beta^3z^4 \hat{J}^4}{3} $$

### $\beta$ exponent - $m \sim (-t)^{\beta}$

We can obtain the exponent by studying the equilibrium condition:

$$ \frac{\partial f_B}{\partial m} = 0 \iff m(A + Bm^2) = 0 $$

We have $m=0$ or $m = \sqrt{-A/B}$. 
Note now that if we want to find the critical exponent we have to expand the magnetization around the critical temperature. 

First we recall that $T_C=\frac{z\hat{J}}{k_B} \iff \frac{T_C}{T} =\beta z\hat{J}$, we have that the magnetization is a function of $\beta z\hat{J}=x$, specifically: 

$$ m = \sqrt{3\beta\frac{x(x-1)}{x^4}} \sim \sqrt{\frac{(x-1)}{x^3}} $$

Now , given that if $T \to T_c$ then $x\to 1$, we expand this function around $x=1$. Using the $x^{-3/2}$ [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Miscellanea/Expansions and recurring formulas|expansion]]:

$$m = (x-1)^{1/2}x^{-3/2} = (x-1)^{1/2}\left[1 - \frac{3}{2}(x - 1) + \mathcal{O}[(x - 1)^2]\right] = (x-1)^{1/2} + \mathcal{O}[(x - 1)^{3/2}]$$

Now, we observe that, if we call $\tilde{t} = \frac{T_C-T}{T_C}$ then we can rewrite $x = \frac{1}{1-\tilde{t}}$.
If we expand this : $x = \frac{1}{1-\tilde{t}} = 1+\tilde{t}+\tilde{t}^2 +\mathcal{O}(\tilde{t}^3)$ then clearly $x-1 = \tilde{t} +\mathcal{O}(\tilde{t}^2)$.

Finally we conclude:

$$ m = \tilde{t}^{1/2} + \mathcal{O}(t^{3/2}) \sim (-t)^{1/2} \iff \beta = \frac{1}{2}$$

### $\delta$ exponent - $h \sim m^{\delta}$

In order to find this exponent, we begin by inverting the self consistent equation found in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Partition function and bulk free energy in the mean field Ising model|Partition function and bulk free energy in the mean field Ising model]]:

$$  m = \tanh(\beta(mz\hat{J} +h)) \iff\beta(mz\hat{J} +h) = \tanh^{-1}(m)  $$

Now we expand the expression around the critical point, i.e. around $m \to 0$. Using the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Miscellanea/Expansions and recurring formulas|expansion]] for $\tanh^{-1}$:

$$ \beta(mz\hat{J} +h) = m + \frac{m^3}{3} + \mathcal{O}(m^5) $$

Then isolating the magnetic field:

$$ \beta h = m + \frac{m^3}{3} + \mathcal{O}(m^5) - \beta m z\hat{J}$$

As considered in the section for the $\beta$ exponent, as $T \to T_C$,  $\beta z\hat{J}\to 1$ and $\beta\to \beta_c$:

$$\beta_ch = \frac{m^3}{3} + \mathcal{O}(m^5) \iff h \sim m^3$$

From which we conclude that: 

$$ \delta = 3 $$

### $\alpha$ exponent - $C_H \sim |t|^{-\alpha}$ $\left(H=0, t=\frac{T-T_C}{T_C} \right)$

We want to evaluate:

$$ C_H = -T\left(\frac {\partial^2 f_B}{\partial T^2} \right)_{H=0} $$

I.e. the specific heat at in the zero field case (static case). Instead of proceeding by definition we distinguish 2 cases:

- If $T>T_C$, then $m = 0$. So:
$$
\begin{aligned}
f_{b}(x)\simeq \text{const} = -k_BT\ln2 
\end{aligned}
$$

Then in this case we have that $C_H = 0$. 
- If $T<T_C$ then $m \neq 0$, one cannot easily conclude anything. Instead, using the [[Calculations/addendum_on_the_alpha_exponent.pdf|addendum on the alpha exponent]] result we write in the neighborhood of the critical temperature:

$$ f_b = f_0 +(a_0
+b_0)(T-T_C)^2  $$

Then we have $C_H=-2(a_0+b_0)T$, which at $T\to T_C^-$ is $C_H=-2(a_0+b_0)T_C$ 

**The function is discontinuous and finite**.
But on both sides is a constant, so we can conclude that:

$$ \alpha_+ = \alpha_- = \alpha = 0 $$
### $\gamma$ exponent - $\chi_T \sim |t|^{-\gamma}$

This is obtained by following the same ansatz in the $\delta$ exponent.
We found in that context for the magnetic field:

$$ \beta h = m + \frac{m^3}{3} + \mathcal{O}(m^5) - \beta m z\hat{J}$$

Then if we now apply the magnetic susceptibility definition:

$$ \chi_T= \frac{\partial m}{\partial h} = \frac{1}{\frac{\partial h}{\partial m}} $$

Then :

$$ \chi_T = \frac{\beta}{1- \beta z\hat{J}+ {m^2} + \mathcal{O}(m^4) } $$

Now, as we expect this quantity to be singular at the critical temperature, we study the 2 limits:
- For $T>T_C$ we have clearly $m=0$, so we conclude:

$$ \chi_T = \frac{\beta}{1- \beta z\hat{J}} = \frac{1}{k_BT-  z\hat{J}}  $$

If we consider then that $t = \frac{T-T_C}{T_C} \iff T = T_C(t+1)$, then:

$$ \chi_T = \frac{1}{k_BT_C(t+1)-  z\hat{J}} \sim t^{-1}  $$

Concluding that $\gamma_- = -1$

- For $T< T_C$, as $T \to T_C$ we have $\beta\to\beta_c$, $\beta z\hat{J} \to 1$,  and $m^2 \to -a/b \to \frac{a_0}{b_0}(T_C-T)$.
Putting all together:

$$\chi_T \sim \frac{1}{T_C-T} \sim (-t)^{-1} $$

So that we conclude from this that $\gamma_- = 1$
This gives:


$$ \gamma_- = \gamma_+ = \gamma = 1 $$

