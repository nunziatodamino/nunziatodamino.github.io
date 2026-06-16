Consider we want to integrate numerically a function $f : [a,b] \to \mathbb{R}$.
First we discretize its definition interval in $N$ points : 

$$ x_i = a + ih \qquad h = \frac{b-a}{N} $$

## Trapezoidal method

The first naive approximation of the integral is to consider :

$$ \int_a^b f(x)dx \simeq \sum_{i = 1}^{N-1}\frac{f(x_{i+1}) + f(x_i)}{2} (x_{i+1} - x_i)$$

I.e. given each interval in $(x_i,x_{i} + h)$, we consider as an approximation of the area under the curve the area of the trapezoid obtained by considering the function as as a straight line:

![[Quadrature methods.png|300]]

Note that the formula is obtained by seeing the trapezoid area as the sum of a rectangle plus a triangle.

A better way to see this formula comes by rewriting it:

$$ \sum_{i = 1}^{N-1}\frac{f(x_{i+1}) + f(x_i)}{2} (x_{i+1} - x_i) = h\left[ \frac{1}{2}f(x_1) + f(x_2) + \dots + f(x_{N-1}) + \frac{1}{2}f(x_N) \right] =  \sum_{i = 1}^N w_i f(x_i)$$

I.e. is a weighted sum with weight vector $\bar{w} = h\left( \frac{1}{2}, 1, \dots, 1, \frac{1}{2}  \right)$. NOTE: some authors pull the discretization factor $h$ outside of the weight vector.

#### Error estimation

What is the error that one makes when approximating the integral with the trapezoidal method ?
This can be evaluated by expanding the integral using a Taylor series.
Specifically we are interested not on the error over all the integration domain, but just on the error over an increment $h$ (so not for the sum of the trapezoids but for the single trapezoid).
We center the interval just for ease of calculation.

$$  \int_{-h/2}^{+h/2} f(x)dx = \int_{-h/2}^{+h/2} f(0) + hf'(0) + \frac{h^2}{2} f''(0) + \mathcal{O}(h^4)dx = hf(0) + \frac{h^3}{6}f''(0) + \mathcal{O}(h^5) $$

Now we can recast $f(0)$ as a function of the 2 extreme points: specifically if we expand them in Taylor series up to the second order and sum them:

$$ \begin{aligned}
f(h/2) &\simeq f(0) + \frac{h}{2}f'(0) + \frac{h^2}{4}f''(0)\\
f(-h/2) &\simeq f(0) - \frac{h}{2}f'(0) + \frac{h^2}{4}f''(0)
\end{aligned}\qquad \Rightarrow \qquad f(0) = \frac{1}{2}(f(h/2) + f(-h/2)) - \frac{h^2}{4}f''(0)
$$

Putting all together one obtains:

$$\int_{-h/2}^{+h/2} f(x)dx \simeq   \frac{h}{2}(f(h/2) + f(-h/2)) - \frac{h^3}{12}f''(0) = \frac{h}{2}(f(h/2) + f(-h/2)) + \mathcal{O}(h^3)$$

Reaching the conclusions that for a given trapezoid approximation one commits an error of the order $\mathcal{O}(h^3)$.
We can go further, and say that, given that there are $N$ trapezoids, we have the following error bound:

$$ |E| \leq C N\frac{h^3}{12} = C \frac{(b-a)^3}{12N^2} $$

Where C is a generic constant depending on the problem and where in deriving the formula we use implicitly the definition of increment $h$.

## Higher orders : the Simpson method

The natural extension of the trapezoidal method is the following: given the interval $(x_i,x_{i} + h)$, instead of approximating the function with a line (a order 1 polynomial) we consider the interval $(x_i,x_{i} + 2h)$ and approximate the function with a parabola (a order 2 polynomial). This interval choice is done to avoid the function ridiscretization.
One obtains the following:

$$ \int_{x_i}^{x_i+2h} f(x)dx \simeq \frac{h}{3}f(x_i) + \frac{4h}{3}f\left(x_i +{h}\right) +\frac{h}{3}f(x_i + 2h) $$

This is shown in calculations. If we do this for all the integration domain, we obtain:

$$\int_a^b f(x)dx \simeq \frac{h}{3}f(x_1) + \frac{4h}{3}f\left(x_2\right) +\frac{h}{3}f(x_3) + \frac{h}{3}f(x_3) + \frac{4h}{3}f\left(x_4\right) +\frac{h}{3}f(x_5) + \dots = \sum_{i=1}^N w_if(x_i) $$

Where $\bar{w}$ is the weight vector defined in the following way : $w_1=w_N = \frac{h}{3},w_{2i} = \frac{4h}{3}, w_{2i+1} = \frac{2h}{3}$.
#### Error estimation

The error bound estimation follow the same ansatz, we just have to evaluate the error over 2 increments and recast it respect the parabolic area.
We have:

$$  \int_{-h}^{+h} f(x)dx =  hf(0) + \frac{h^3}{3!}f''(0) + \frac{h^5}{5!}f^{(V)}(0) + \mathcal{O}(h^7)  $$

The trick now is to approximate the second derivative with the approximation:

$$ f''(0) = \frac{f(-h) -2f(0) + f(+h)}{h^2} $$

So that we have :


$$  \int_{-h}^{+h} f(x)dx =   + \frac{h^5}{5}f^{(V)}(0) + \mathcal{O}(h^7)  $$


## Going higher

Consider that we want to approximate the integral:

$$  \int_a^b f(x)dx \simeq \sum_{i=1}^N w_i f(x_i)$$

I.e. using some weighting vector ansatz of some kind. Consider now that i fixed my discretization, specifically I choose an equidistant discretization of the type:

$$ x_i = a + ih \qquad h = \frac{b-a}{N} $$

And some $N$ bigger than 2. The question is now: given a chosen $N$ what is the choice of the weights $w_i$ ?
One creates the following system of equations:

$$ 
\begin{aligned}
\int_a^b x^0 dx &= b-a = \sum_{i=1}^Nw_i \\
\int_a^b x^1 dx &= \frac{b^2-a^2}{2} = \sum_{i=1}^Nw_ix_i \\
\vdots \\
\int_a^b x^m dx &= \frac{b^{m+1}-a^{m+1}}{m+1} = \sum_{i=1}^Nw_ix^m_i \\

\end{aligned}
$$

Then to get the weights one fix N, takes the first $N$ equations and solve the linear system.
Examples are done in calculations: for $N=2$ one finds the trapezoidal method, for $N=3$ one finds the Simpson method.
These reproduces the classic quadrature methods, up to any order.
But we are fixing the discretization a priori for no reason.
If we consider the points as variables we can achieve a better precision, this will lead to the [[Gauss-Legendre quadrature]].
