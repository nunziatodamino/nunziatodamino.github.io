Is possible, and extremely useful in order to solve differential equations of any kind, to expand in series a periodic function with adequate conditions.
In order to be expandable, the function must obey the so called Dirichlet condition, which we now state in the following:

>[!NOTE]  **Dirichlet condition**
> 
> $(I)$ We consider a function defined on the real numbers. 
> If we consider the real interval $(a,b)$ to be the fundamental interval of our function, and $L=b-a$ then the function should satisfy:
> 
> $$f(x) = f(x+nL)\ ,\forall x \in(a,b)\ ; \forall n\in\mathbb{Z}$$
> 
> I.e. is periodic with period $L$.
> 
> $(II)$ In its fundamental interval $(a,b)$, the function $f(x)$ must be of bounded variation and must have finite maxima, minima and jump discontinuities.

This condition can satisfied either by a real-valued function or by a complex-valued one.
Of course the 2 expansions are related, but we state now them in separate sections for clarity.

> [!NOTE] **Expansion of real-valued periodic function $f:\mathbb{R} \to \mathbb{R}$**
> 
> If the function satisfies the Dirichlet condition, then the following expansion is possible:
> 
> $$ f(x) = \frac{1}{2}a_0 + \sum_{n=1}^{+\infty}\left[ a_n \cos\left(\frac{2\pi n}{L}x\right) + b_n \sin\left(\frac{2\pi n}{L}x\right) \right] $$
> Where the expansion coefficients are evaluated by the so called inversion formulas:
> 
> $$ a_n = \frac{2}{L}\int_{a}^b dx f(x)\cos\left(\frac{2\pi n}{L}x\right) \qquad n \in \mathbb{N} $$
> 
> $$ b_n = \frac{2}{L}\int_{a}^b dx f(x)\sin\left(\frac{2\pi n}{L}x\right) \qquad n \in \mathbb{N} $$
> 
> $$ a_0 = \frac{2}{L}\int_{a}^b dx f(x) $$

> [!NOTE] **Expansion of complex-valued periodic function $f:\mathbb{R} \to \mathbb{C}$**
> 
> If the function satisfies the Dirichlet condition, then the following expansion is possible:
> 
> $$ f(x) = \frac{1}{L}\sum_{n=1}^{+\infty}f_n e^{\frac{2\pi i n}{L}x}$$
> Where the expansion coefficients are evaluated by the so called inversion formulas:
> $$ f_n = \int_{a}^b dx f(x) e^{-\frac{2\pi i n}{L}x} \qquad n \in \mathbb{N} $$
