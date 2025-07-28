Considering that the free energy can be [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Miscellanea/Analyticity of the free energy in second-order phase transitions (optional)|decomposed]] in an analytical and a singular part for a second order phase transition:

$$F(t,h) = F_{\mathrm{an}}(t,h) + F_{\mathrm{sin}}(t,h)$$

The Widom's scaling hypothesis is a guess of the singular part near the critical point. Specifically:

>[!info] **Widow's hypothesis**
>In the neighborhood of the critical temperature the singular part of the free energy is a quasi-homogeneous function :
>
>$$   F_{\mathrm{sin}}(\lambda^{p_1} t, \lambda^{p_2} h) = \lambda F_{\mathrm{sin}}(t,h) \qquad  \forall \lambda$$
>
> The exponents of the homogeneity are not specified by the hypothesis but are dependent on the critical exponents.

Note that Widom's hypothesis at this stage is a postulate on the singular part of the free energy. 
However, this homogeneity is not yet derived from microscopic physics — it is purely a thermodynamic assumption.
One can give this postulate a physical meaning, and specifically associate the homogeneity parameter to a length rescaling factor (a "scale parameter"), only through additional physical reasoning — most notably, via the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Kadanoff argument|Kadanoff argument]].

What means scale in this context ? consider the linear dimension of a system $L$, so that its volume is $V \sim L^d$ where $d$ is the dimensionality. Invariance of scale means that if i change the system volume to $V' \sim \lambda^d V$ or equivalently i rescale the linear dimension of the system by a factor $L' = \lambda L$ , its free energy singular property do not change. **Note that we are not changing dimensionality.**

Note that if we define $\lambda = h^{-1/p_{2}}$ the singular part can be [[Zettelkasten/Master's degree/Basic Mathematics/Homogeneous Functions|recasted]] :

$$ F_{\mathrm{sin}}(t,h)  = h^{\frac{1}{p_2}} F_{\mathrm{sin}}\left(\frac{t}{h^{\Delta}},1\right) \qquad\Delta = \frac{p_1}{p_2}  $$

Where $\Delta$ is called **gap exponent**. One can prove that $\Delta = 3/2$.

**This hypothesis will be fundamental in founding relation between critical exponents.**

### Second form

Another recasting that one finds in literature is the one where $\lambda = |t|^{-1/p_1}$.
In this way:

$$   F_{\mathrm{sin}}\left(\text{sgn}(t), \frac{h}{|t|^{\Delta}}\right) = |t|^{-1/p_1} F_{\mathrm{sin}}(t,h)$$

Now, considering from what we saw in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Critical exponents in the context of Widom's scaling hypothesis|Critical exponents in the context of Widom's scaling hypothesis]], we have that $p_1 = \frac{1}{\beta(\delta+1)}$ and $\alpha + \beta(\delta+1) =2$, so that putting this together $\frac{1}{p_1} = 2-\alpha$.
We have than the alternative form:

$$ F_{\mathrm{sin}}(t,h) = |t|^{2-\alpha} F_{\mathrm{sin}}\left(\text{sgn}(t), \frac{h}{|t|^{\Delta}}\right)  $$
