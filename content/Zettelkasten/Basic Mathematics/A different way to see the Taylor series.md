 [ ] Tradurre la nota e scrivere dell'espansione in funzione dell'operatore esponenziale
 
One can write the Taylor series expansion in one dimension in the following exotic way:

>[!info] **Exponential form of the Taylor series in one dimension**
>$$f(x + \varepsilon) = e^{\varepsilon \frac{d}{dx}}f(x)$$
>

I.e we see the function evaluated at $x$ plus a small displacement $\varepsilon$ as the application of the exponential operator $e^{\varepsilon \frac{d}{dx}} \equiv \sum_{n=0}^{+\infty}\frac{1}{n!}\left(\varepsilon \frac{d}{dx}\right)^n$ to the function.
This operation gives back:

$$ f(x + \varepsilon) = f(x) + f'(x)\varepsilon + f''(x)\frac{\varepsilon^2}{2!} + \dots  \qquad f^n(x) \equiv \frac{d^n}{d(x+\varepsilon)^n}_{\vert\varepsilon=0}$$

Which is equivalent to the normal looking Taylor series.

We can extent this representation to the Taylor series expansion for n dimensions, with the appropriate attentions.

>[!info] **Exponential form of the Taylor series in n dimensions**
>$$f(\bar{x} + \bar{\varepsilon}) = e^{\bar{\varepsilon} \cdot \nabla}f(\bar{x})$$
>

With the same prescription for the exponential operator. One obtains

$$ f(\bar{x} + \bar{\varepsilon}) = f(\bar{x}) + (\bar{\varepsilon} \cdot \nabla)f(\bar{x}) +\frac{(\bar{\varepsilon} \cdot \nabla)^2}{2!}f(\bar{x}) + \dots $$

Which is equivalent to the original formula only if the following prescription is followed.
We must interpret the terms $(\bar{\varepsilon} \cdot \nabla)^n=(\bar{\varepsilon} \cdot \nabla)\dots(\bar{\varepsilon} \cdot \nabla)$, i.e. as the application in sequence of the operator. We make an example for $(\bar{\varepsilon} \cdot \nabla)^2$. The term $(\bar{\varepsilon} \cdot \nabla)^2f(\bar{x}) \neq (\varepsilon^2_x \partial_{xx}+\varepsilon^2_y \partial_{yy}+\varepsilon^2_z \partial_{zz})f(\bar{x})$ but: 

$$\begin{aligned}(\bar{\varepsilon} \cdot \nabla)^2f(\bar{x}) & = (\bar{\varepsilon} \cdot \nabla)[(\bar{\varepsilon} \cdot \nabla)f(\bar{x})]\\ &=(\varepsilon_x \partial_x+\varepsilon_y \partial_y+\varepsilon_z \partial_z)[(\varepsilon_x \partial_x+\varepsilon_y \partial_y+\varepsilon_z \partial_z)f(\bar{x})] \\&= (\varepsilon^2_x \partial_{xx}+\varepsilon^2_y \partial_{yy}+\varepsilon^2_z \partial_{zz} + \varepsilon_x\varepsilon_y\partial_{xy}+\varepsilon_x\varepsilon_y\partial_{yx} + \varepsilon_x\varepsilon_z\partial_{xz}+\varepsilon_x\varepsilon_z\partial_{zx}+\varepsilon_y\varepsilon_z\partial_{yz}+\varepsilon_y\varepsilon_z\partial_{zy})f(\bar{x})\\ &=
\bar{\varepsilon}^tH(f(\bar{x}))\bar{\varepsilon}
\end{aligned}$$
