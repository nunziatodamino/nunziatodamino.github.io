3Suppose we want to evaluate the integral:

$$\int_a^b f(x)\rho(x)dx$$

We showed in [[Projects/Numerical methods for soft matter/Monte Carlo methods/Efficiency of the direct sampling Monte Carlo method|Efficiency of the direct sampling Monte Carlo method]] that this integral is equal to $\braket{f}_\rho$ and in general one cannot evaluate this analytically, but one can only evaluate the quantity $\bar{f}_N$.
If the number of iterations $N$ is large then we can say that the 2 quantities differs by an accuracy dependent on the number of iteration $\frac{\sigma}{\sqrt{N}}$.

Given this fact there is a way to improve the accuracy without simply augmenting the number of iterations ? 

It happens that there is, and is called importance sampling.
We consider the following reasoning:

$$\braket{f}_\rho = \int_a^b f(x)\rho(x)dx = \int_a^b \frac{f(x)}{g(x)}\rho(x)g(x)dx = \braket{\frac{f\rho}{g}}_g  \equiv \braket{F}_g $$

This is valid if $g(x)$ is a PDF, i.e. $g(x)>0$ in $[a,b]$ and $\int_a^bg(x)dx=1$.

If we apply the same consideration on the accuracy for the function $F$, we have now that to evaluate the mean $\braket{F}_g$ we want to evaluate the empirical average $\bar{F}_N$ and then if the number of iterations $N$ is large we can say that the 2 quantities differs by an accuracy dependent on the number of iteration $\frac{\sigma_F}{\sqrt{N}}$.

### Some criterion in the choice of $g(x)$

So now we compare $\sigma_F$ with $\sigma_f$  in the hope that this was useful, i.e. that $\sigma_F < \sigma_f \iff \sigma^2_F < \sigma^2_f \iff \sigma^2_f-\sigma^2_F > 0$.
So we evaluate:

$$
\begin{aligned}
\sigma^2_f-\sigma^2_F &= \braket{f^2}_\rho-\braket{f}^2_\rho-\braket{F^2}_g+\braket{F}^2_g = \braket{f^2}_\rho-\braket{F^2}_g = \\ 
&=\int_a^bf^2(x)\rho(x)-\frac{f(x)^2\rho^2(x)}{g^2(x)}g(x) dx =\\
&=\int_a^bf^2(x)\rho(x)\left[1-\frac{\rho(x)}{g(x)}\right] dx 
\end{aligned}
$$

In order to study the condition in which $\sigma^2_f-\sigma^2_F > 0$.

**Now take in mind that we want to find an heuristic solution to this problem, not an exact one.**
**We propose in the following an exact solution to this problem, showing in fact that is useless.**

The criterion is the following:

- $1-\frac{\rho(x)}{g(x)} > 0 \iff \frac{\rho(x)}{g(x)} <1 \iff \rho(x)<g(x)$ when the product $f^2(x)\rho(x)$ is "large"
-  $1-\frac{\rho(x)}{g(x)} < 0 \iff \frac{\rho(x)}{g(x)} >1 \iff \rho(x)>g(x)$ when the product $f^2(x)\rho(x)$ is "small"

The idea is the following: we want to sample many points when is needed (the first condition) and not so many when is not needed (the second condition).

### Exact criterion for the choice of $g(x)$

Given that $\sigma^2_F= \braket{F^2}_g-\braket{F}^2_g=\braket{F^2}_g-\braket{f}^2_\rho$ If we consider the first term and use the Jensen's inequality we can find the minimum for the second momentum:

$$ \braket{F^2}_g = \int_{a}^{b} F^2 dg \geq \left(\int_{a}^{b} |F| dg\right)^2 = \braket{f}^2_\rho $$

With this choice the variance becomes 0.
This happens if we choose as $g$ the function:

$$ g^*(x) = \frac{|f|\rho}{\braket{f}_\rho} $$

This is useless. Because it contains $\braket{f}_\rho$, which is the expression we want to evaluate.
