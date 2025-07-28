### Magnetization ($\beta$ and $\delta$ exponents)

We want to evaluate the critical exponents relative to magnetization:

$$ m = \frac{\partial f}{\partial H} $$

Given that we are interested in the critical exponents, we can study just the singular part, as the analytic part is 
constant and can be dealt with a proper shift, or neglected if we are interested just in the divergence:

$$ m = \frac{\partial f}{\partial H} = \frac{1}{H_C}\frac{\partial f}{\partial h} \sim\frac{1}{H_C}\frac{\partial f_{\text{sin}}}{\partial h} = m_{\text{sin}}$$

Then we start from the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Widom's scaling hypothesis|Widom's scaling hypothesis]]:

$$   F_{\mathrm{sin}}(\lambda^{p_1} t, \lambda^{p_2} h) = \lambda F_{\mathrm{sin}}(t,h) \qquad  \forall \lambda$$

Divide by $V$ and $H_C$ and differentiate by $h$ to obtain:

$$ \lambda^{p_2}  m_{\mathrm{sin}}(\lambda^{p_1} t, \lambda^{p_2} h) = \lambda m_{\mathrm{sin}}(t,h) \iff m_{\mathrm{sin}}(t,h) =\lambda^{p_2-1}  m_{\mathrm{sin}}(\lambda^{p_1} t, \lambda^{p_2} h)\quad \forall\lambda$$

We have now 2 possibilities: 
- We study the order parameter as the system in absence of magnetic field reaches the critical temperature from below (from above the question does not make sense, as by definition the order parameter is 0). This defines the $\beta$ exponent and what we studied as [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/Spontaneous symmetry breaking in the spin-1 Ising model|Spontaneous symmetry breaking in the spin-1 Ising model]]
- We study the response of the order parameter at the critical temperature due to an infinitesimal external magnetic field. This defines the $\delta$ exponent.
### $\beta$ exponent
 
In the limit $t \to 0^-$, $h=0$ (zero field) to have the critical exponent [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Thermodynamics/Definitions of critical exponents and amplitudes|definition]] for the order parameter:

$$ \lim_{t \to 0^-}m_{\text{sin}}(t,0)=B(-t)^{\beta} $$

Continuing then we first consider the zero field expression:

$$ m_{\mathrm{sin}}(t,0) =\lambda^{p_2-1}  m_{\mathrm{sin}}(\lambda^{p_1} t,0)$$

Now we arrive at the expression we setting $\lambda = (-t)^{-\frac{1}{p_1}}$ to achieve a critical amplitude that is independent from $t$.
We have then:

$$ m_{\mathrm{sin}}(t,0) =(-t)^{\frac{1-p_2}{p_1}}  m_{\mathrm{sin}}(-1,0)$$

Now, by setting $B = m_{\mathrm{sin}}(-1,0)$ and taking the limit we obtain the relation:

$$ \beta = \frac{1-p_2}{p_1} $$

### $\delta$ exponent

We have in the $t=0$ (critical isotherm) and the limit $h \to 0^+$:

$$ \lim_{h \to 0^+}m_{\text{sin}}(0,h)=D_c^{-1}h|h|^{\frac{1-\delta}{\delta}} = D_c^{-1}\frac{h}{|h|}|h|^{\frac{1}{\delta}}= D_c^{-1}\text{sgn}(h)|h|^{\frac{1}{\delta}} =D_c^{-1}|h|^{\frac{1}{\delta}}$$

With the same ansatz of before we set ourselves in the critical isotherm:

$$ m_{\mathrm{sin}}(0,h) =\lambda^{p_2-1}  m_{\mathrm{sin}}(0, \lambda^{p_2} h) $$

And consider $\lambda = |h|^{-1/p_2}$ so that:

$$ m_{\mathrm{sin}}(0,h) =|h|^{\frac{p_2-1}{p_2}}  m_{\mathrm{sin}}(0, \text{sgn}(h)) = |h|^{1-\frac{1}{p_2}}  m_{\mathrm{sin}}(0, 1) $$

Then by setting $D_c = m_{\mathrm{sin}}(0, 1)$ and taking the limit one obtains:

$$ \delta = \frac{p_2}{1-p_2} $$

### Magnetic susceptibility

The critical exponent is defined for the static zero field magnetic susceptibility, that is defined as:

$$ \chi = -\frac{1}{H_c^2} \frac{\partial^2 f}{\partial h^2}_{|h=0} $$

So from the Widom's scaling expression we multiply by the constants and differentiate 2 times respect to $h$:

$$  f'_{\mathrm{sin}}(t,h) =\lambda^{p_2-1}  f'_{\mathrm{sin}}(\lambda^{p_1} t, \lambda^{p_2} h)\quad   \to \quad \chi_{\mathrm{sin}}(t,h) =\lambda^{2p_2-1}  \chi_{\mathrm{sin}}(\lambda^{p_1} t, \lambda^{p_2} h)\ ,\  \forall\lambda $$

We set the field to 0 and obtain:

$$\chi_{\mathrm{sin}}(t,0) =\lambda^{2p_2-1}  \chi_{\mathrm{sin}}(\lambda^{p_1} t, 0)\ ,\  \forall\lambda$$

Now we want to reconstruct the critical exponent [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Thermodynamics/Definitions of critical exponents and amplitudes|definition]]. If we choose $\lambda = |t|^{-1/p_1}$ then:

$$\chi_{\mathrm{sin}}(t,0) =|t|^{\frac{1-2p_2}{p_1}}  \chi_{\mathrm{sin}}(\text{sgn}(t), 0)$$

So that we can set in the limit $t \to 0^+$ the critical amplitude $\Gamma = \chi_{\mathrm{sin}}(1, 0)$, while in the limit $t \to 0^-$ we can set the critical amplitude $\Gamma' = \chi_{\mathrm{sin}}(-1, 0)$. For the critical exponents one can see that they are the same:

$$ \gamma^- = \gamma^+ = \gamma = \frac{2p_2-1}{p_1}$$

This can be reconnected to the $\beta$ and $\delta$ exponent. Recalling that $\beta = \frac{1-p_2}{p_1}$ and $\delta = \frac{p_2}{1-p_2}$ is easy to show that:

$$ \gamma = \beta(\delta-1) $$

Which is called th **Widom's identity**
### Specific heat

We have by definition

$$ C_V = -T \frac{\partial^2F}{\partial T^2} = -\frac{T_c(t+1)}{T_c^2}\frac{\partial^2F}{\partial t^2} $$

Note now that in both limits in the zero field case:

$$ \lim_{t \to 0}C_V(t,0) =  -\frac{1}{T_c}\lim_{t\to0}\frac{\partial^2F}{\partial t^2}_{|h=0} $$

So the ansatz is extremely similar to the susceptibility case.
We obtain following the same scheme but differentiating this time respect to $t$:

$$C_{\mathrm{sin}}(t,h) =\lambda^{2p_1-1}  C_{\mathrm{sin}}(\lambda^{p_1} t, \lambda^{p_2} h)\ ,\  \forall\lambda$$

And setting this in the zero field case:

$$C_{\mathrm{sin}}(t,0) =\lambda^{2p_1-1}  C_{\mathrm{sin}}(\lambda^{p_1} t, 0)\ ,\  \forall\lambda$$
Now if we choose $\lambda = |t|^{-1/p_1}$ then we obtain:

$$C_{\mathrm{sin}}(0,h) =|t|^{\frac{1-2p_1}{p_1}}  C_{\mathrm{sin}}(\text{sgn}(t), 0)$$

In this way we obtain 2 critical amplitudes as expected $t \to 0^+$ $\to A = C_{\mathrm{sin}}(1, 0)$ and $t \to 0^-$ $\to A' = C_{\mathrm{sin}}(-1, 0)$  while the critical exponent is the same from both sides:

$$ \alpha^- = \alpha^+ = 2- \frac{1}{p_1} $$

We can do better and insert in this the relation $p_1 = \frac{1}{\beta(\delta+1)}$ , one the finds:

$$ \alpha + \beta(\delta+1) =2$$

Which is called the **Griffith's relation**. Moreover if use $\gamma = \beta(\delta-1)$, we obtain :

$$ \alpha +2\beta+\gamma =2 $$

Which is called the **Rushbrooke's relation**.
