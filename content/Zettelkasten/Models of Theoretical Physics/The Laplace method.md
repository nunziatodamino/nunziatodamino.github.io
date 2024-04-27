Suppose we want to evaluate an integral of the type:

$$ I(\lambda)= \int_{x_1}^{x_2}dx\ g(x)e^{\lambda f(x)} \qquad \lambda \in \mathbb{R} $$

Where $f,g\in C^{2}[x_1,x_2]$. Note that this method can be extend to complex valued function and in that case will be called [[Method of the steepest descent]].
Most of the time we are interested not in the analytical form of the integral, but to an approximation.

Specifically we will show that, as $\lambda \to +\infty$ the major contribution of the integral comes from the neighborhood in $[x_1,x_2]$ where $e^{\lambda f(x)}$ attain its maximum value (note that this last fact is guaranteed by Weierstrass theorem, and let us think how important is that the integration is over a compact set, even if is not mandatory)

>[!info] **Laplace method**
>Let $A=[x_1,x_2]$ , $\lambda \in \mathbb{R}$ and $f,g\in C^{2}(A)$ and let be defined the following integral:
>
>$$I(\lambda)= \int_{A}dx\ g(x)e^{\lambda f(x)}$$
>
>Let's now call $x_0$ the global maximum for function $f(x)$ over $A$. The following approximations are valid when $\lambda \to +\infty$:
>
>$$  I(\lambda) \simeq g(x_0)e^{\lambda f(x_0)} \sqrt{\frac{2\pi}{\lambda|f''(x_0)|}} \qquad \text{if}\ x_0 \in \mathring{A}, \text{as}\ \lambda \to \infty  $$
>
>$$  I(\lambda) \simeq g(x_0)e^{\lambda f(x_0)} \sqrt{\frac{\pi}{2\lambda|f''(x_0)|}} \qquad \text{if}\ x_0 \in \partial A, \text{as}\ \lambda \to \infty  $$

We prove [[Proof of the Laplace method|here]] the approximation for $x_0 \in \mathring{A}$, while the approximation for $x_0 \in \partial A$ is left unproven