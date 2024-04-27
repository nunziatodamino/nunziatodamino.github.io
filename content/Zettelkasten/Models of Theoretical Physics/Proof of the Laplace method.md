We start by the integral definition:

$$ I(\lambda)= \int_{x_1}^{x_2}dx\ g(x)e^{\lambda f(x)} \qquad \lambda \in \mathbb{R} $$

And prove only the interior point case

- $x_0 \in \mathring{A}$

Because is $x_0$ a maximum for $e^{\lambda f(x)}$ , we can assume that $f'(x_0)=0$ and we shall assume $f''(x_0)<0$ in order to guarantee the integral convergence. Moreover in order to have a meaningful discussion, we assume $g(x_0)\neq 0$ and finite.

The idea now is to consider $g(x)e^{\lambda f(x)}$ in a neighborhood of $x_0$, by taking as a fact that this is the major contribution of the integral, and then show that for large $\lambda$, namely $\lambda \to +\infty$ we can obtain a meaningful approximation.

If I then expand $f(x)$ in Taylor series around $x_0$

$$ f(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{1}{2}f''(x_0)(x-x_0)^2 + o((x-x_0)^3)= f(x_0) + \frac{1}{2}f''(x_0)(x-x_0)^2 + o((x-x_0)^3) $$

Where we used the fact that $f'(x_0)=0$. So by reinsertion in the integral:

$$ I(\lambda)\simeq \int_{x_1}^{x_2}dx\ g(x_0)e^{\lambda \left( f(x_0) + \frac{1}{2}f''(x_0)(x-x_0)^2 \right)} = g(x_0)e^{\lambda f(x_0)}\int_{x_1}^{x_2}dx\ e^{\lambda \frac{1}{2}f''(x_0)(x-x_0)^2 } =   $$

$$ = g(x_0)e^{\lambda f(x_0)}\int_{x_1}^{x_2}dx\ e^{-\lambda \frac{1}{2}|f''(x_0)|(x-x_0)^2 } $$

In order to solve the second integral i set the change of variable : $s^2= \lambda \frac{1}{2}|f''(x_0)|(x-x_0)^2 \to s=  \sqrt{\frac{\lambda}{2}|f''(x_0)|}(x-x_0) \to ds=dx \sqrt{\frac{\lambda}{2}|f''(x_0)|}$ we will have:


$$ = g(x_0)e^{\lambda f(x_0)} \sqrt{\frac{2}{\lambda|f''(x_0)|}} \int_{ \sqrt{\frac{\lambda}{2}|f''(x_0)|}(x_1-x_0)}^{ \sqrt{\frac{\lambda}{2}|f''(x_0)|}(x_2-x_0)}ds\ e^{-s^2 } $$

Finally, for the last integral, if we let $\lambda to +\infty$ we obtain a Gaussian integral with value:

$$ \int_{ \sqrt{\frac{\lambda}{2}|f''(x_0)|}(x_1-x_0)}^{ \sqrt{\frac{\lambda}{2}|f''(x_0)|}(x_2-x_0)}ds\ e^{-s^2 } \Rightarrow \lambda \to +\infty \Rightarrow \int_{\mathbb{R}}ds\ e^{-s^2 } = \sqrt{\pi} $$

So that we obtain in the end:

$$  I(\lambda)= \int_{A}dx\ g(x)e^{\lambda f(x)} \simeq g(x_0)e^{\lambda f(x_0)} \sqrt{\frac{2\pi}{\lambda|f''(x_0)|}} \qquad \text{if}\ x_0 \in \mathring{A}, \text{as}\ \lambda \to \infty  $$

- $x_0 \in \partial A$

Two cases can happen: the maximum in on the frontier and is "flat", i.e. $f'(x_0)=0$, or the maximum is at the frontier but is slanted, i.e. $f'(x_0)\neq0$.

We analyze these two cases separately:

- - $x_0 \in \partial A$, $f'(x_0)\neq0$

We assume without loss of generality that $f'(x_0)<0$. 
By the same argument as before, we expand in Taylor series in the neighborhood of $x_0$ :

$$f(x) = f(x_0) + f'(x_0)(x-x_0)  + o((x-x_0)^2)$$

So that one obtains:

$$
 I(\lambda)\simeq \int_{x_1}^{x_2}dx\ g(x_0)e^{\lambda \left( f(x_0) +  f'(x_0)(x-x_0) \right)} = g(x_0)e^{\lambda f(x_0)}\int_{x_1}^{x_2}dx\ e^{\lambda  f'(x_0)(x-x_0) } $$

By setting $s= \lambda  f'(x_0)(x-x_0) \to ds= \lambda  f'(x_0)dx$ we obtain:

$$ = g(x_0)e^{\lambda f(x_0)} \frac{1}{\lambda  f'(x_0)} \int_{\lambda f'(x_0)(x_1-x_0)}^{\lambda f'(x_0)(x_2-x_0)}ds\ e^{s} $$

Note now that we can distinguish 2 cases, either $x_0$ is the left end-point, i.e. $x_1=x_0$, or is the right end-point, i.e. $x_2=x_0$.
We start by the left end-point, and the right end point should be a consequence.
- $x_0=x_1$

The integral becomes:

$$ I(\lambda) \simeq g(x_1)e^{\lambda f(x_1)} \frac{1}{\lambda  f'(x_1)} \int_{0}^{\lambda f'(x_1)(x_2-x_0)}ds\ e^{s} \Rightarrow \lambda \to +\infty \Rightarrow g(x_1)e^{\lambda f(x_1)} \frac{1}{\lambda  f'(x_1)} \int_{0}^{-\infty}ds\ e^{s} $$

Remembering that $f'(x_0)<0$. One can evaluate the integral easily $\int_{0}^{-\infty}ds\ e^{s}=-1$. So that we can write

$$ I(\lambda) \simeq -g(x_1) \frac{e^{\lambda f(x_1)}}{\lambda  f'(x_1)}=g(x_1) \frac{e^{\lambda f(x_1)}}{\lambda  |f'(x_1)|} \qquad \text{left end-point}, f'(x_1)>0$$

- $x_0=x_2$

Note that, in order to guarantee the integral convergence, we must now impose that $f'(x_2)>0$
By the same argument:

$$ I(\lambda) \simeq g(x_2)e^{\lambda f(x_2)} \frac{1}{\lambda  f'(x_2)} \int^{0}_{\lambda f'(x_2)(x_1-x_2)}ds\ e^{s} \Rightarrow \lambda \to +\infty \Rightarrow g(x_1)e^{\lambda f(x_1)} \frac{1}{\lambda  f'(x_1)} \int^{0}_{-\infty}ds\ e^{s}  $$

Given that $f'(x_2)(x_1-x_2)<0$. One can evaluate the integral easily $\int^{0}_{-\infty}ds\ e^{s} =1$. So that we can write in the end:

$$ I(\lambda) \simeq g(x_2) \frac{e^{\lambda f(x_2)}}{\lambda  f'(x_2)} \qquad \text{right end-point},f'(x_2)>0 $$
