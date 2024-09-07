The Sokhotski–Plemelj formula is a way to evaluate certain type of distribution integrals, namely integrals of the type:

$$ \int_{\mathbb{R}}dx\ \frac{f(x)}{x-x_0} $$

The formula will be different according to the holomorphicity (or analicity) hypothesis on $f:\mathbb{R}\to\mathbb{C}$

>[!info] **Sokhotski–Plemelj formula (integral form)**
>Let $f:\mathbb{R}\to \mathbb{C}$ an integrable function, such as $f(x_0)\neq 0$ and analytic over $\mathbb{R}$ (or otherwise stated as $f \in C^\infty(\mathbb{R})$).
> Let then be $f(z)$ its complexification.
> - Let then be $f(z)$ be holomorphic (or analytical) in $\Im(z)>0$ and also let $f(z) \to 0$ as $|z| \to +\infty$ uniformly, while $0<\arg(z)<\pi$. Then the following identity holds:
> 
> $$ \lim_{\varepsilon \to 0^+} \int_{\mathbb{R}}\frac{f(x)}{x-x_0+i\varepsilon}dx = \text{P.V.}\int_{\mathbb{R}}\frac{f(x)}{x-x_0}dx -i\pi f(x_0) \qquad \text{Upper analicity form}$$
> 
> - Otherwise, let then be $f(z)$ be holomorphic (or analytical) in $\Im(z)<0$ and also let $f(z) \to 0$ as $|z| \to +\infty$ uniformly, while $\pi<\arg(z)<2\pi$ (or equivalently $-\pi<\arg(z)<0$). Then the following identity holds:
> 
> $$ \lim_{\varepsilon \to 0^+} \int_{\mathbb{R}}\frac{f(x)}{x-x_0-i\varepsilon}dx = \text{P.V.}\int_{\mathbb{R}}\frac{f(x)}{x-x_0}dx +i\pi f(x_0) \qquad \text{Lower analicity form}$$

These formulas are proved [[The Sokhotski-Plemelj formula_231103_172040.pdf|here]].
There are also some distribution version of these formula, using the fact that $f(x_0)=\int_{\mathbb{R}}\delta(x-x_0)f(x)dx$ , so that
one has in the end:

>[!info] **Sokhotski–Plemelj formula (distribution form)**
>
>$$ \lim_{\varepsilon \to 0^+} \frac{1}{x-x_0+i\varepsilon} = \text{p.v.}\frac{1}{x-x_0} -i\pi \delta(x-x_0)$$
>
>$$ \lim_{\varepsilon \to 0^+} \frac{1}{x-x_0-i\varepsilon} = \text{p.v.}\frac{1}{x-x_0} +i\pi \delta(x-x_0)$$

Notice that in these last 2 formulas no $f$ appears.

The Sokhotski–Plemelj formulas can be used to prove the [[Zettelkasten/Master's degree/Basic Mathematics/Kramers-Kronig relations]]
