The proof of the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Widom's scaling hypothesis|Widom's scaling hypothesis]] is indirect, specifically we do not observe a singular free energy function, but rather the quasi-homogeneous thermodynamic quantity that [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Thermodynamic quantities under the light of the Widom's hypothesis|arises from the hypothesis]].

![[Images/Experimental proof of the Widom's scaling hypothesis.png|500]]

We see here an example.
As we have seen in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Critical exponents in the context of Widom's scaling hypothesis|Critical exponents in the context of Widom's scaling hypothesis]] for the magnetization we have for the singular part :

$$ m_{\mathrm{sin}}(t,h) =\lambda^{p_2-1}  m_{\mathrm{sin}}(\lambda^{p_1} t, \lambda^{p_2} h)$$

Now choose for $\lambda = |t|^{-1/p_1}$ so that we obtain:

$$ m_{\mathrm{sin}}(t,h) =|t|^{\frac{1-p_2}{p_2}}  m_{\mathrm{sin}}\left( \frac{t}{|t|}, \frac{h}{|t|^{\Delta}}\right) = |t|^{\beta}  m_{\mathrm{sin}}\left( \text{sgn}(t), \frac{h}{|t|^{\Delta}}\right)$$

Where we used the result for $\beta$ found in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Critical exponents in the context of Widom's scaling hypothesis|here]].
Now we can consider 2 regions:

- Above $T_C$ ($t>0$)

$$m_{\mathrm{sin}}(t,h) = t^{\beta}  m_{\mathrm{sin}}\left( 1, \frac{h}{t^{\Delta}}\right) \equiv F^+\left(\frac{h}{|t|^{\Delta}}\right) t^{\beta}$$
-  Below $T_C$ ($t<0$)

$$m_{\mathrm{sin}}(t,h) = (-t)^{\beta}  m_{\mathrm{sin}}\left( -1, \frac{h}{(-t)^{\Delta}}\right) \equiv F^-\left(\frac{h}{|t|^{\Delta}}\right) (-t)^{\beta}$$

Or together:

$$\frac{m_{\mathrm{sin}}(t,h)}{|t|^{\beta}}= m_{\mathrm{sin}}\left( \text{sgn}(t), \frac{h}{|t|^{\Delta}}\right) \iff \tilde{m}  =F^{\pm}\left( \tilde{h}\right) $$

With the rescaling applied in the picture. In the graph we can see plots of $F^+$ and $F^-$ for an $EuO$ crystal.
This is proof of the Widom's scaling as the idea is the following: imagine i take a measure at any $t$ and $h$ in the system. If the system follows Widom's scaling, after the **correct rescaling** (i.e. the proper choices of the critical exponents $\beta$ and $\Delta$) the measure will lay either on on the $F^+$ curve or on the $F^-$ curve.