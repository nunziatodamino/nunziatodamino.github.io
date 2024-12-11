Thermal expansion is the general experimental phenomenon for which solids increases their volume while their temperature increases.
We say general because there are notable exception ( silicon and water ) that present the opposite phenomenon (i.e. volume shrinking) in certain temperature range.
### Experimental law 

Is a classic staple of thermodynamics to introduce thermal expansion as an experimental law.

We begin by considering a thin rod, we select a starting temperature $T_0$ and measure is length $l_0$. Then we change temperature and measure the new length $l$, or equivalently the dilation $\Delta l = l-l_0$
If we define the linear thermal expansion coefficient:

$$ \frac{1}{l_0}\left(\frac{dl}{dT}\right)_P \equiv \alpha_L $$

Then we obtain the following law:

$$ l=l_0(1+\alpha_l\Delta T) $$

The coefficient can be measured experimentally and the law is verified for a specific range of temperature, neither too low, neither too big.

This reasoning can be extended to a volume, by defining:

$$ \frac{1}{V_0}\left(\frac{dV}{dT}\right)_P \equiv \alpha_V $$

In order to obtain

$$ V=V_0(1+\alpha_V\Delta T) $$

One can relate the 2 thermal expansion coefficient for a cubic box $V=l^3$:

$$ \alpha_V=\frac{1}{V_0}\left(\frac{dV}{dT}\right)_P = \frac{1}{l^3_0}3l_0^2\left(\frac{dl}{dT}\right)_P = 3\alpha_L $$

### Consideration from the crystalline structure

This phenomenon must be treated **not** using the harmonic approximation, but instead one has to take account of [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Anharmonic effects in solids|anharmonic terms]] in the potential expansion.

==INSERIRE DISCORSO SULL'ASIMMETRIA DEL POTENZIALE==

![[Images/Thermal expansion_potential.png|400]]

In the following we use a toy model to describe quantitatively the phenomenon.
Suppose we have a crystal in which there is a linear increase due to the temperature increasing.
We can say that this means roughly that the lattice constant changes $a \to a+x$, where $x \in \mathbb{R}$.
Moreover suppose that the potential energy of the crystal is a function of this variation:

$$ U(x) = cx^2+gx^3+fx^4 $$

Where we can safely assume that higher order contributions are smaller respect the one to the higher order, i.e. $c<<g<<f$.
Let's try to evaluate the mean increase in a canonical ensemble:

$$ \braket{x}_{NVT} = \frac{\int_{\mathbb{R}} x e^{-\beta U}dx}{\int_{\mathbb{R}} e^{-\beta U}dx} = \frac{\int_{\mathbb{R}} x e^{-\beta U}dx}{\mathcal{Z}} $$

Let's evaluate the 2 integrals:

$$\begin{aligned} \mathcal{Z} & = \int_{\mathbb{R}} e^{-\beta (cx^2+gx^3+fx^4)}dx=\int_{\mathbb{R}} e^{-\beta cx^2}e^{-\beta gx^3}e^{-\beta fx^4}dx \simeq\int_{\mathbb{R}} e^{-\beta cx^2}(1-\beta gx^3)(1-\beta fx^4) dx= \\ & = \int_{\mathbb{R}} e^{-\beta cx^2}\left[1-\beta gx^3-\beta fx^4 +\beta^2 gfx^7 \right]dx \simeq \int_{\mathbb{R}} e^{-\beta cx^2}dx = \sqrt{\frac{\pi}{c\beta}}   \end{aligned}$$

$$\begin{aligned} \int_{\mathbb{R}} x e^{-\beta U}dx & = \int_{\mathbb{R}} xe^{-\beta (cx^2+gx^3+fx^4)}dx=\int_{\mathbb{R}} xe^{-\beta cx^2}e^{-\beta gx^3}e^{-\beta fx^4}dx \simeq\int_{\mathbb{R}} xe^{-\beta cx^2}(1-\beta gx^3)(1-\beta fx^4) dx= \\ & = \int_{\mathbb{R}} e^{-\beta cx^2}\left[x-\beta gx^4-\beta fx^5 +\beta^2 gfx^8 \right]dx \simeq -\beta g \int_{\mathbb{R}} x^4e^{-\beta cx^2}dx = -2\beta g \int_{\mathbb{R}^+} x^4e^{-\beta cx^2}dx = \\ &= -2\beta g \frac{\Gamma\left(\frac{5}{2}\right)}{2(\beta c)^{\frac{5}{2}}} = -\frac{3}{4} \frac{g\sqrt{\pi}}{\beta
^{\frac{3}{2}}c^{\frac{5}{2}}} \end{aligned}$$

Where we used a notable integral in this table, and by this we are implying that $c>0$.
Putting all together we find:

So that one can observe that the sign of $\braket{x}$ depends only on the sign if $g$.

$$\braket{x}_{NVT} = - \frac{3}{4} \frac{g}{c^2\beta} = - \frac{3}{4} \frac{g}{c^2} k_BT $$

Experimentally we have a graph like this:

![[Images/Thermal expansion_exp.png|400]]

So this model captures the behavior at high temperature, while for temperature close to 0 there is no significant expansion. The latter behavior is due to the zero-point energy of the phonons.