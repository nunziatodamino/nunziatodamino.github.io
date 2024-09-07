This approximation of derivatives appears to be the foundation of the Finite Difference Method.

Consider a finite positive increment $\Delta x > 0$. We can approximate a function in the vicinity of $x_0$ in two ways:

I) Forward approximation:
$$ \begin{equation} f(x_0 +  \Delta x) = f(x_0) + f'(x_0)\Delta x + f''(x_0)\frac{(\Delta x)^2}{2!}+  f'''(x_0)\frac{(\Delta x)^3}{3!} + \dots \end{equation} $$

II) Backward approximation:
$$ f(x_0 +  \Delta x) = f(x_0) - f'(x_0)\Delta x + f''(x_0)\frac{(\Delta x)^2}{2!}- f'''(x_0)\frac{(\Delta x)^3}{3!} + \dots $$

Note that this is non other than a different way to write a [[Zettelkasten/Master's degree/Basic Mathematics/A different way to see the Taylor series|Taylor series]]

Now, we have two ways to proceed, depending on whether we want an approximation of a derivative of even or odd order.

For derivatives of odd order, we perform I - II and approximate to the desired order.

For derivatives of even order, we perform I + II and approximate to the desired order.

For example:

$$ f''(x_0) \simeq \frac{f(x_0 + \Delta x) + f(x_0 - \Delta x) - f(x_0)}{(\Delta x)^2} $$